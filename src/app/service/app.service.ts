import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users = [];
  constructor() { }

  addPerson(block: any) {
    this.users.push(block);
  }

  deletePerson(i: number) {
    if (confirm("Are you sure to remove this row?")) {
      this.users.splice(i, 1);
    }
  }

  modifPerson(block: any, i: number) {
    this.users[i] = block;
  }

  loggedIn() {
    return !!localStorage.getItem('Authentif');
  }


  addRegisterLocalStorage(block: any) {
    let listRegister = JSON.parse(localStorage.getItem("Register"));
    if (listRegister == null) {
      listRegister = [];
    }
    listRegister.push(block);
    localStorage.setItem("Register", JSON.stringify(listRegister));
  }

  addAuthentication(mail: string, motDePasse: string) {
    let listRegister = JSON.parse(localStorage.getItem("Register"));
    let auth: any = null;
    if (listRegister != null) {
      for (let i = 0; i < listRegister.length; i++) {
        if (listRegister[i].email == mail && listRegister[i].password == motDePasse) {
          auth = listRegister[i];
          break;
        }
      }
      if (auth == null) {
        alert("Erreur login Et/Ou password");
      }
      localStorage.setItem("Authentif", JSON.stringify(auth));
    }
    else {
      alert("Il n'y a pas d'Enregistrement");
    }
  }
}

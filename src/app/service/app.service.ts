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
    return !!localStorage.getItem('token');
  }
}

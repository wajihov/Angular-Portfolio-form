import { Injectable } from '@angular/core';
import { Utilisateur } from '../utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  users = [];
  utilisateur: any;
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
}

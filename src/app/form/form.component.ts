import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, NgForm } from '@angular/forms'
import { AppService } from './../service/app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  formUser: FormGroup;
  formUserModif: FormGroup;
  users = [];
  index = null;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.users = this._appService.users;
    this.formUser = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      dateNaissance: new FormControl(''),
      commentaire: new FormControl('')
    })
    this.formUserModif = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      dateNaissance: new FormControl(''),
      commentaire: new FormControl('')
    })
  }
  submitForm() {
    console.log(this.formUser.value);
    this._appService.addPerson(this.formUser.value);
    this.ngOnInit();
  }

  removeItem(i) {
    this._appService.deletePerson(i);
  }


  editItem(item, i) {
    this.formUserModif = new FormGroup({
      nom: new FormControl(item.nom),
      prenom: new FormControl(item.prenom),
      dateNaissance: new FormControl(item.dateNaissance),
      commentaire: new FormControl(item.commentaire)
    })
    this.index = i;
  }

  updateItem() {
    console.log(this.formUserModif.value);
    this._appService.modifPerson(this.formUserModif.value, this.index);
    this.index = null;
  }

  resetForm() {
    this.ngOnInit();
  }
}
import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, NgForm } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // user: Utilisateur;

  // nom: string;
  // prenom: string;
  // dateNaissance: Date;
  // commentaire: string;
  formUser: FormGroup;
  formUserModif: FormGroup;
  users = [];
  index = null;

  constructor() { }



  ngOnInit() {
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

  getUser(item, i) {
    this.formUserModif = new FormGroup({
      nom: new FormControl(item.nom),
      prenom: new FormControl(item.prenom),
      dateNaissance: new FormControl(item.dateNaissance),
      commentaire: new FormControl(item.commentaire)
    })
    this.index = i;
    console.log("Dans get ", this.index, " ", i);

  }
  submitForm(formUser: NgForm) {
    console.log(this.formUser.value);
    // let object = new Utilisateur();
    // object.nom = this.formUser.value.nom;
    // object.prenom = this.formUser.value.prenom;
    // object.commentaire = this.formUser.value.commentaire;
    // object.dateNaissance = this.formUser.value.dateNaissance;
    this.users.push(this.formUser.value);
    this.ngOnInit();
    // console.log("Les donnees sont ", this.nom, " ", this.prenom, " ", this.commentaire, " ", this.dateNaissance);
    if (this.users != null)
      console.log(this.users);

  }

  removeItem(i) {
    if (confirm("Are you sure to remove this row?")) {
      this.users.splice(i, 1);
    }
  }


  editItem(item, i) {
    console.log("l'utilisateur: ", item);
    console.log("l'indece : ", i);
    this.index = i;
    console.log("MMMMMMMMMMMM : ", item.nom, " ", item.prenom);
    this.getUser(item, this.index);
  }

  updateItem(formUserModif: NgForm) {
    console.log("Dans Save chaange");
    console.log(this.formUserModif.value);
    console.log("indice       : : : ", this.index);
    this.users[this.index] = this.formUserModif.value;
    this.index = null;
    console.log("bbbbbbbbbb ", this.users);
    console.log("indice       : : :2 : ", this.index);
  }

  resetForm() {
    this.ngOnInit();
  }
  // onSubmit(form: NgForm) {
  //   console.log('Your form data : ', form.value);
  // }

}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  formUser: FormGroup;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.formUser = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      dateNaissance: new FormControl(''),
      commentaire: new FormControl('')
    })
  }

  submitForm() {
    console.log(this.formUser.value);
    this.appService.addPerson(this.formUser.value);
    this.ngOnInit();
  }

  resetForm() {
    this.ngOnInit();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-model-modern',
  templateUrl: './my-model-modern.component.html',
  styleUrls: ['./my-model-modern.component.css']
})
export class MyModelModernComponent implements OnInit {

  constructor() { }

  formModal: FormGroup;


  ngOnInit() {
    //console.log("Dans ngOninit ", this.formModal.controls['formUser'].value);

    this.formModal = new FormGroup({
      nomModal: new FormControl(),
      prenomModel: new FormControl(),
      dateNaissanceModal: new FormControl(),
      commentaireModal: new FormControl()
    })
  }

}
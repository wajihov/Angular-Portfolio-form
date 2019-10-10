import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.formRegister = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  register() {
    this.appservice.addRegisterLocalStorage(this.formRegister.value);
    this.ngOnInit();
  }

  reset() {
    this.ngOnInit();
  }

}

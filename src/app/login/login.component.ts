import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formAuth: FormGroup;

  constructor(private appservice: AppService) { }

  ngOnInit() {
    this.formAuth = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  connecter() {
    this.appservice.addAuthentication(this.formAuth.value.email, this.formAuth.value.password);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-application',
  templateUrl: './navbar-application.component.html',
  styleUrls: ['./navbar-application.component.css']
})
export class NavbarApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  disconnect() {
    localStorage.removeItem("Authentif");
  }
}

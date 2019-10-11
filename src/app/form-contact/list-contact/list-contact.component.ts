import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {

  public Editor = ClassicEditor;
  users: any = [];
  searchTerm: string;
  str: any = [];

  constructor(private appService: AppService, private route: Router) {
  }

  ngOnInit() {
    this.users = this.appService.users;    
    for (let i = 0; i < this.users.length; i++) {      
      this.str[i] = this.users[i].commentaire;      
    }
  }
  
  removeItem(i) {
    this.appService.deletePerson(i);
  }

}

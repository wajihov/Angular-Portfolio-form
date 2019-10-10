import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private appService: AppService, private route: Router) { }

  ngOnInit() {
    this.users = this.appService.users;
  }
  removeItem(i) {
    this.appService.deletePerson(i);
  }

}

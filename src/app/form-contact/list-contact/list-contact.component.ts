import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
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

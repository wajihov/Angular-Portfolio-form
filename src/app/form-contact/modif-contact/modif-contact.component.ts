import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms'

@Component({
  selector: 'app-modif-contact',
  templateUrl: './modif-contact.component.html',
  styleUrls: ['./modif-contact.component.css']
})
export class ModifContactComponent implements OnInit {

  formUser: FormGroup;
  index: number;

  constructor(private appService: AppService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.formUser = new FormGroup({
      nom: new FormControl(this.appService.users[id].nom),
      prenom: new FormControl(this.appService.users[id].prenom),
      dateNaissance: new FormControl(this.appService.users[id].dateNaissance),
      commentaire: new FormControl(this.appService.users[id].commentaire)
    })
    this.index = id;
  }

  submitForm() {
    this.appService.modifPerson(this.formUser.value, this.index);
    this.index = null;
  }

}
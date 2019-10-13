import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from '../service/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  formWeather: FormGroup;
  weather: any;


  constructor(private appService: AppService, private http: HttpClient) { }

  ville: string;
  temperature: any;
  ngOnInit() {
    // this.formWeather = new FormGroup({
    //   ville: new FormControl()
    // });
    if (this.ville == null) {
      this.appService.getWeather("Paris");
    }
    this.ville = this.appService.city;
  }

  // getCountry() {
  //   console.log("la ville est : ", this.formWeather.value);
  //   this.appService.getWeather(this.formWeather.value);
  //   console.log("le resultat :", this.appService.weather);
  // }
  getCountry() {
    this.appService.getWeather(this.ville);
  }
}

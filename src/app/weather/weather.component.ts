import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city : string = "";
  result : any;
  show : number = 0;
  error : number = 0;
  constructor(private openweatherService: OpenweatherService) { }

  ngOnInit(): void {
  }

  getWeatherForMajorCities(location:string){
    if(location != ""){
    this.city = location;
    this.openweatherService
      .returnWeather(location)
      .subscribe(data => {this.result = data;
        this.show = 1;
        this.error = 0;
      });
    }else{
      this.error = 1;
      this.show = 0;
    }
  }

  getWeather(){
    if(this.city != ""){
    this.openweatherService
      .returnWeather(this.city)
      .subscribe(data => {this.result = data;
        console.log(this.result);
        this.show = 1;
        this.error = 0;
      });
    }else{
      this.error = 1;
      this.show = 0;
    }
  }

}

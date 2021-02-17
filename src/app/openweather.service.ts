import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  constructor(private http: HttpClient) {}

  returnWeather(location:string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=134193b574ce8b34cf624759187bf792&query=' + location
    );
}
}

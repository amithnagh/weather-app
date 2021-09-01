import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherModel } from 'src/models/weatherModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url: string = 'http://api.openweathermap.org/data/2.5/weather';
  appId: string = '3d8b309701a13f65b660fa2c64cdc517';
  constructor(private http: HttpClient) { }
  
  getWeatherByCity(name: string) : Observable<IWeatherModel> {
    this.url = 'http://api.openweathermap.org/data/2.5/weather' + `?q=${name}&appid=${this.appId}`;
    return this.http.get<IWeatherModel>(this.url);
  }
}

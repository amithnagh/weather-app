import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWeatherModel } from 'src/models/weatherModel';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent {

  @Input()
  weatherObj: IWeatherModel = { name: '', temperature: 0, sunriseTime: '', sunsetTime: '' };
  constructor(private _route: Router) { }

  showForecast(name: string) {
    this._route.navigate([`detail/${name}`]);
  }

}

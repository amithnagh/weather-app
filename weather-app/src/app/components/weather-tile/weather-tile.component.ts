import { Component, Input, OnInit } from '@angular/core';
import { weatherModel } from 'src/models/weatherModel';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.css']
})
export class WeatherTileComponent implements OnInit {

  @Input()
  weatherObj: weatherModel = { cityName: '', temperature: '', sunriseTime: '', sunsetTime: '' };
  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherObj);
  }

}

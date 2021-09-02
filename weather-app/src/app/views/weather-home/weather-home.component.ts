import { Component, OnInit } from '@angular/core';
import { IWeatherModel } from 'src/models/weatherModel';
import { DateTimeCoverter } from 'src/app/utils/dateTimeCoverter';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  cityObj!: IWeatherModel;
  cities: string [] =  ['London', 'Paris', 'Budapest', 'Rome', 'Florence'];
dateTimeCoverter = new DateTimeCoverter();
cityList: IWeatherModel[] = [];

  constructor(private _weatherService: WeatherService) { }

  addCity = (name: string, temp: number, sunriseTime: number, sunsetTime: number) => {
    this.cityList.push({ name: name, temperature: temp,
      sunriseTime: this.dateTimeCoverter.timestampToDate(sunriseTime*1000),
      sunsetTime: this.dateTimeCoverter.timestampToDate(sunsetTime*1000)
    })
  }

  weatherService(city: string): void {
    this._weatherService.getWeatherByCity(city).subscribe(
      (data: any) => {
        console.log(data);
        const { name } = data;
        const { main: {temp} } = data;
        const { sys: {sunrise} } = data;
        const { sys: {sunset} } = data;
        this.addCity(name, temp, sunrise, sunset);
      }
    );
  }

  ngOnInit(): void {
    this.cities.map((city) => { this.weatherService(city) });
  }

}

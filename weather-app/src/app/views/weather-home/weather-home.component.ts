import { Component, OnInit } from '@angular/core';
import { IWeatherModel } from 'src/models/weatherModel';
import { DateTimeCoverter } from 'src/app/utils/dateTimeCoverter';
import { WeatherService } from 'src/app/services/weather.service';
import { projectConstants } from 'src/app/constants/constants';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  cityObj!: IWeatherModel;
  cityNames = projectConstants.cities;
  dateTimeCoverter = new DateTimeCoverter();
  cityWeatherList: IWeatherModel[] = [];
  // hasError = { showError: false, message: ''}
  showError: boolean = false;
  messages: string [] = [];

  constructor(private _weatherService: WeatherService) { }

  addCity = (name: string, temp: number, sunriseTime: number, sunsetTime: number) => {
    this.cityWeatherList.push({
      name: name, temperature: temp,
      sunriseTime: this.dateTimeCoverter.timestampToDate(sunriseTime * 1000),
      sunsetTime: this.dateTimeCoverter.timestampToDate(sunsetTime * 1000)
    })
  }

  weatherService(city: string): void {
    this._weatherService.getWeatherByCity(city).subscribe(
      (data: any) => {
        const { name } = data;
        const { main: { temp } } = data;
        const { sys: { sunrise } } = data;
        const { sys: { sunset } } = data;
        this.addCity(name, temp, sunrise, sunset);
      },
      () => {
        this.showError = true;
        this.messages.push(`Technical error fetching data for ${city}`);
      }
    );
  }

  ngOnInit(): void {
    this.cityNames.map((city) => { this.weatherService(city) });
  }

}

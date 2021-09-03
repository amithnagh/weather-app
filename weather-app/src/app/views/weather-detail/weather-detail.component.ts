import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {
  selectedCity: string = '';
  forecastArray: any = [];
  showError: boolean = false;
  messages: string [] = [];

  constructor(private _service: WeatherService, private _route: ActivatedRoute) { }

  getForecast(city: string) {
    this._service.getForecastByCity(this.selectedCity).subscribe(
      (body: any) => {
        this.forecastArray = body.list.filter((day: any) => {
          if (day.dt_txt.includes('09:00:00')) {
            return day;
          }
        });
      },
      () => {
        this.showError = true;
        this.messages.push(`Technical Error occurred while fetching data for ${this.selectedCity}`)
      }
    );
  }

  ngOnInit(): void {
    this.selectedCity = this._route.snapshot.params['city'];
    this.getForecast(this.selectedCity);
  }

}

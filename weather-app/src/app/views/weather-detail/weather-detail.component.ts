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
  forecastArray:any = [];

  constructor(private _service: WeatherService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.selectedCity = this._route.snapshot.params['city'];
    this._service.getForecastByCity(this.selectedCity).subscribe(
      (body:any) => {
        console.log(body);
        this.forecastArray = body.list.filter( (day: any) => {
          if(day.dt_txt.includes('09:00:00')) {
            return day;
          }
        });
        console.log('finalList', this.forecastArray);
      }
    );
  }

}

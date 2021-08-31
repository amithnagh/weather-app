import { Component, OnInit } from '@angular/core';
import { weatherModel } from 'src/models/weatherModel';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  name = 'Hello';
  obj = {
    coord: {
        lon: -0.1257,
        lat: 51.5085
    },
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n"
        }
    ],
    base: "stations",
    main: {
        temp: 287.09,
        feels_like: 286.89,
        temp_min: 286.31,
        temp_max: 287.98,
        pressure: 1028,
        humidity: 90
    },
    visibility: 10000,
    wind: {
        speed: 2.57,
        deg: 360
    },
    clouds: {
        all: 90
    },
    dt: 1630383436,
    sys: {
        type: 2,
        id: 2006068,
        country: "GB",
        sunrise: 1630386710,
        sunset: 1630435813
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200
}
cityList: weatherModel[] = [{ cityName: this.obj.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset },
  { cityName: this.obj.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset }, 
  { cityName: this.obj.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset },
  { cityName: this.obj.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset },
  { cityName: this.obj.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset }]

// obj2 = { cityName: this.name, temperature: this.obj.main.temp, sunriseTime: this.obj.sys.sunrise, sunsetTime: this.obj.sys.sunset}

  constructor() { }

  ngOnInit(): void {
    // console.log(this.name);
  }

}

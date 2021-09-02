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
//   obj = {
//     coord: {
//         lon: -0.1257,
//         lat: 51.5085
//     },
//     weather: [
//         {
//             id: 804,
//             main: "Clouds",
//             description: "overcast clouds",
//             icon: "04n"
//         }
//     ],
//     base: "stations",
//     main: {
//         temp: 287.09,
//         feels_like: 286.89,
//         temp_min: 286.31,
//         temp_max: 287.98,
//         pressure: 1028,
//         humidity: 90
//     },
//     visibility: 10000,
//     wind: {
//         speed: 2.57,
//         deg: 360
//     },
//     clouds: {
//         all: 90
//     },
//     dt: 1630383436,
//     sys: {
//         type: 2,
//         id: 2006068,
//         country: "GB",
//         sunrise: 1630386710,
//         sunset: 1630435813
//     },
//     timezone: 3600,
//     id: 2643743,
//     name: "London",
//     cod: 200
// }
dateTimeCoverter = new DateTimeCoverter();
cityList: IWeatherModel[] = [];
// cityList: IWeatherModel[] = [{ name: this.obj.name, temperature: this.farenHeitToCelsius.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000) },
//   { name: this.obj.name, temperature: this.farenHeitToCelsius.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000) }, 
//   { name: this.obj.name, temperature: this.farenHeitToCelsius.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000) },
//   { name: this.obj.name, temperature: this.farenHeitToCelsius.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000) },
//   { name: this.obj.name, temperature: this.farenHeitToCelsius.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000) }]

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

    // this.finalCityList.push({ cityName: this.obj.name, temperature: this.farenHeit.fToC(this.obj.main.temp), sunriseTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunrise*1000), sunsetTime: this.dateTimeCoverter.timestampToDate(this.obj.sys.sunset*1000)})
  }

}

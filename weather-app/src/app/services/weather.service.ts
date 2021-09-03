import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherModel } from 'src/models/weatherModel';
import { Observable } from 'rxjs';
import { serviceConstants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  params = {
    appId: serviceConstants.appId,
    units: serviceConstants.units,
  }

  constructor(private http: HttpClient) { }

  getWeatherByCity(name: string): Observable<IWeatherModel | any> {
    const url = serviceConstants.baseUrl + `weather?q=${name}`;
    return this.http.get<IWeatherModel>(url, { params: this.params });
  }

  getForecastByCity(name: string) {
    const url = serviceConstants.baseUrl + `forecast?q=${name}`;
    return this.http.get(url, {params: this.params});
  }
}

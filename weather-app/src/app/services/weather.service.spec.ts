import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call http get with city name when getWeatherByCity is called', () => {
    service.getWeatherByCity('London').subscribe((data) => {
      expect(data.name).toBe('London');
    });

    const req: TestRequest = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/weather?q=London&appId=3d8b309701a13f65b660fa2c64cdc517&units=metric');
    
    expect(req.request.method).toBe('GET');

    req.flush({name: 'London'});
  })

  it('should call get method correctly when getForecaset is called', () => {
    service.getForecastByCity('London').subscribe((data) => {
      expect(data).toEqual({name: 'London'});
    });

    const req: TestRequest = httpTestingController.expectOne('http://api.openweathermap.org/data/2.5/forecast?q=London&appId=3d8b309701a13f65b660fa2c64cdc517&units=metric');
    
    expect(req.request.method).toBe('GET');

    req.flush({name: 'London'});
  })
});

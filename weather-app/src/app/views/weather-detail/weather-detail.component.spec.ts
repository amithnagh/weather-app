import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailComponent } from './weather-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';
import { throwError } from 'rxjs';

describe('WeatherDetailComponent', () => {
  let component: WeatherDetailComponent;
  let fixture: ComponentFixture<WeatherDetailComponent>;
  let mockWeatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [WeatherDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call weatherforecast service and return list of objects with time as 09:00:00', () => {
    mockWeatherService = TestBed.inject(WeatherService);
    mockWeatherService.getForecastByCity = jasmine.createSpy().and.returnValue(of(
      { list: [{ seaLevel: 101, dt_txt: '09:00:00' }, { seaLevel: 101, dt_txt: '09:00:00' }, { seaLevel: 101, dt_txt: '10:00:00' }] }));
    component.getForecast('London');
    expect(component.forecastArray.length).toBe(2);
  });

  it('should set show error to true if there is network failure', () => {
    mockWeatherService = TestBed.inject(WeatherService);
    mockWeatherService.getForecastByCity = jasmine.createSpy().and.returnValue(throwError('something went wrong'));

    component.getForecast('London');

    expect(component.showError).toBeTrue();
  });
});

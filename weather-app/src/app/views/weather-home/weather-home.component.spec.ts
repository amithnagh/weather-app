import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomeComponent } from './weather-home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';

describe('WeatherHomeComponent', () => {
  let component: WeatherHomeComponent;
  let fixture: ComponentFixture<WeatherHomeComponent>;
  let mockWeatherService: WeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [WeatherHomeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add city to cityList array with passed params', () => {
    component.cityList = [];
    component.addCity('London', 12, 1630386710, 1630435813);
    expect(component.cityList.length).toBe(1);
    expect(component.cityList[0].name).toBe('London');
    expect(component.cityList[0].temperature).toBe(12);
    expect(component.cityList[0].sunriseTime).toBe(new Date(1630386710000).toLocaleTimeString());
    expect(component.cityList[0].sunsetTime).toBe(new Date(1630435813000).toLocaleTimeString());
  })

  it('should call add city function with proper data when weatherService is called', () => {
    mockWeatherService = TestBed.inject(WeatherService);
    mockWeatherService.getWeatherByCity = jasmine.createSpy().and.returnValue(of(
      { name: 'London', main: { temp: 15 }, sys: { sunrise: 1630386710, sunset: 1630435813 } }))
    spyOn(component, 'addCity');

    component.weatherService('London');

    expect(component.addCity).toHaveBeenCalledWith('London', 15, 1630386710, 1630435813);
  })
});


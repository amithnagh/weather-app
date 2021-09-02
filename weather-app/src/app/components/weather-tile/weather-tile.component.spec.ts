import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FieldComponent } from '../field/field.component';

import { WeatherTileComponent } from './weather-tile.component';

describe('WeatherTileComponent', () => {
  let component: WeatherTileComponent;
  let fixture: ComponentFixture<WeatherTileComponent>;
  let routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [WeatherTileComponent, FieldComponent],
      providers: [{ provide: Router, useValue: routerSpy }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the detail page with city', () => {
    component.showForecast('London');
    expect(routerSpy.navigate).toHaveBeenCalledWith(['detail/London']);
  });
});

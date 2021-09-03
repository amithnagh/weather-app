import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldComponent } from '../field/field.component';

import { ForecastTileComponent } from './forecast-tile.component';

describe('ForecastTileComponent', () => {
  let component: ForecastTileComponent;
  let fixture: ComponentFixture<ForecastTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForecastTileComponent, FieldComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should split date and time', () => {
    component.forecastObj = {dt_txt: '2021-09-05 09:00:00'};

    component.splitDateTime();

    expect(component.dateTime).toEqual(['2021-09-05', '09:00:00']);
  })
});

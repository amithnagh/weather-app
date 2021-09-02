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
});

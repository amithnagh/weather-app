import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-tile',
  templateUrl: './forecast-tile.component.html',
  styleUrls: ['./forecast-tile.component.css']
})
export class ForecastTileComponent {

  @Input()
  forecastObj: any;
  
}

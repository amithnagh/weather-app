import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-tile',
  templateUrl: './forecast-tile.component.html',
})
export class ForecastTileComponent implements OnInit{

  @Input()
  forecastObj: any;

  dateTime: string [] = [];

  splitDateTime() {
    this.forecastObj ? this.dateTime = this.forecastObj.dt_txt.split(" ") : this.dateTime = [];
  }

  ngOnInit() {
    this.splitDateTime();
  }
}

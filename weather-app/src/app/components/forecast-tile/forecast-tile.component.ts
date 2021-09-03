import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-tile',
  templateUrl: './forecast-tile.component.html',
  styleUrls: ['./forecast-tile.component.css']
})
export class ForecastTileComponent implements OnInit{

  @Input()
  forecastObj: any;

  dateTime: string [] = [];

  ngOnInit() {
    this.dateTime = this.forecastObj.dt_txt.split(" ");
    console.log(this.dateTime);
  }
}

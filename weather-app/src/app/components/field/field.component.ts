import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {

  @Input()
  value: any = '';

  @Input()
  showSuffix: boolean = false;

  @Input()
  icon: any = '';

  suffix = "°C";

}

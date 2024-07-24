import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-misc-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './misc-widget.component.html',
  styleUrl: './misc-widget.component.scss'
})
export class MiscWidgetComponent {

window: any;
windspeed: any;
rainsensor: any;
constructor(){
  this.window = "geöffnet"
  this.windspeed = 2.5
  this.rainsensor = 54

}
alarmDialog() {
  throw new Error('Method not implemented.');
  }
}

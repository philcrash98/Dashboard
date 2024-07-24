import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DataService } from '../data.service';
import { ColorPickerModule } from 'nxt-color-picker';


@Component({
  selector: 'app-light-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, MatButtonModule, MatDividerModule, ColorPickerModule],
  templateUrl: './light-widget.component.html',
  styleUrl: './light-widget.component.scss'
})
export class LightWidgetComponent {
  data: any;
  led1name: any;
  lightStatus: any;
  constructor(private dataService: DataService) {
    this.lightStatus = "off";
    this.ledtoggle("led1")
    this.ledtoggle("led2")
    this.ledtoggle("led3")
  }
   color = '#2889e9'
   ledtoggle(led: string) {
    console.log(this.lightStatus)
    if (this.lightStatus == "off") {
      this.senddata("on", led);
      this.lightStatus = "on"
      console.log("on")
    } else {
      this.senddata("off", led);
      this.lightStatus = "off"
      console.log("off")
    }

  }

  senddata(status: string, led: string) {
    this.dataService.setminiserver("Lico", status, "Pulse").subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }



}

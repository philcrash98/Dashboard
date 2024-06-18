import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ColorPickerModule } from 'ngx-color-picker';
import { DataService } from '../data.service';
import { response } from 'express';
import { error } from 'console';

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
    this.setlight(this.lightStatus)
  }
  color: any;
  togglelight() {
    console.log(this.lightStatus)
    if (this.lightStatus == "off") {
      this.setlight("on");
      this.lightStatus = "on"
      console.log("on")
    }else {
      this.setlight("off");
      this.lightStatus = "off"
      console.log("off")
    }
    
  }

  setlight(status: string){
    this.dataService.setminiserver("Lico", status, "Pulse").subscribe(
      response => {},
      error => {
        console.error('Error:', error);
      }
    );
  }
 
  

}

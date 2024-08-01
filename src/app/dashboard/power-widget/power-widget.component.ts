import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataService } from '../data.service';
import { stat } from 'fs';
import { get } from 'http';

@Component({
  selector: 'app-power-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule
  ],
  templateUrl: './power-widget.component.html',
  styleUrl: './power-widget.component.scss'
})
export class PowerWidgetComponent implements OnInit{
batterystatus: any;
batterycharge: any;
power: string;
data: any;
  constructor(private dataService: DataService){
    this.power = "100";
    this.batterycharge=0;
    this.batterystatus="nicht vorhanden"
    ///Batterie 1d30f62a-02b0-7f1f-01ff9fe4991c2210
    // zeit verbleibend 1d30f62a-02b0-7f1c-ffff9fe4991c2210
    //this.getData("1d30f62a-02b0-7f1f-01ff9fe4991c2210")
    this.dataService.getstate("1d30f62a-02b0-7f1f-01ff9fe4991c2210")
  this.dataService.getstate("1d4630d3-00a4-4c75-ffffed57184a04d2")
  this.getdata()
  }
  ngOnInit(): void {
  }
  getdata(){
    this.dataService.getstate("1d4630d3-00a4-4c75-ffffed57184a04d2").subscribe(
      response => {console.log(response.json()) }
      ,
      error => {
        console.error('Error:', error);
      }
    );
  }
  


}

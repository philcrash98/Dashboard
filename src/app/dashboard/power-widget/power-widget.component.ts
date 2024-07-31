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
  }
  ngOnInit(): void {
  }



  /* async getData(uuid: string){
    let rvalue = 0;
    try {
      const response = await this.dataService.getstate(uuid).toPromise();
      const obj = JSON.parse(JSON.stringify(response));
      rvalue = obj.LL.value
      console.log(rvalue)
    } catch (error) {
      console.error('Error:', error);
    }
  } */


}

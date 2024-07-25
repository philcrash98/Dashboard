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
    this.getData("1d30f62a-02b0-7f1f-01ff9fe4991c2210")
  }
  ngOnInit(): void {
    this.senddata
  }

  senddata() {
    this.dataService.getstateminiserver("1d30f62a-02b0-7f2d-0cff9fe4991c2210").subscribe(
      response => {console.log(response) },
      error => {
        console.error('Error:', error);
      }
    );
  }


  async getData(uuid: string){
    try {
      const response = await this.dataService.getstateminiserver(uuid).toPromise();
      const obj = JSON.parse(JSON.stringify(response));
       this.power = obj.LL.value
    } catch (error) {
      console.error('Error:', error);
    }
  }


}

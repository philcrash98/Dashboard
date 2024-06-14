import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataService } from '../data.service';

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
power: number;
data: any;
  constructor(private dataService: DataService){
    this.power = 100;
    this.batterycharge=0;
    this.batterystatus="nicht vorhanden"
  }
  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }


}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { DataService } from '../data.service';
import { MatIcon } from '@angular/material/icon';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { AbstractControl, FormControl, FormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { color } from 'highcharts';

@Component({
  selector: 'app-light-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, MatButtonModule, MatDividerModule, MatIcon, MatTabGroup, MatTab, NgxColorsModule, FormsModule, MatListModule, MatSlideToggleModule],
  templateUrl: './light-widget.component.html',
  styleUrl: './light-widget.component.scss'
})
export class LightWidgetComponent {


  led0Color: any;
  led1Color: any;
  led2Color: any;
  led0State: boolean;
  led1State: boolean;
  led2State: boolean;
  logs: Array<Array<any>> = [];
  Mode: any;
  allLed: any;
  disabled: any;

  constructor(private dataService: DataService) {
    this.led0Color = "#fcfffd"
    this.led1Color = "#fcfffd"
    this.led2Color = "#fcfffd"
    this.led0State = false
    this.led1State = false
    this.led2State = false
    this.Mode = 10
  }
  //LED1
  //action 1c5b743e-0398-4c3c-ffffed57184a04d2/AI1
  //color 1c5b743e-0398-4c24-2fffc50161f55067
  //LED2
  //action 1c5b743e-0398-4c3c-ffffed57184a04d2/AI2
  //color 1c5b743e-0398-4c25-30ffc50161f55067
  //LED3
  //action 1c5b743e-0398-4c3c-ffffed57184a04d2/AI3
  //color 1c5b743e-0398-4c26-31ffc50161f55067

  //Rgb Lichtszene
  //action 1ceb08a2-0229-2aed-ffffed57184a04d2
  //red 1ceb08a2-0229-2ae7-08ff4cd81f7b0015
  //green 1ceb08a2-0229-2ae8-09ff4cd81f7b0015
  //blue 1ceb08a2-0229-2ae9-0aff4cd81f7b0015
  //color 1ceb08a2-0229-2aeb-0cff4cd81f7b0015



  senddata(device: string, status: string, value: string) {
    this.dataService.setstate(device, status, value).subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }
  getData() {
    this.dataService.getstate("")
  }
  colorChangeEvent(event: any, trigger: any, led: number) {
    if (this.disabled) {
      this.led0Color = event
      this.led1Color = event
      this.led2Color = event
      this.senddata("Lico", "clr", this.led0Color)
      this.senddata("Lico", "clr", this.led1Color)
      this.senddata("Lico", "clr", this.led2Color)
    }
    else {
      switch (led) {
        case 0:
          this.led0Color = event
          this.senddata("Lico", "clr", this.led0Color)
          break;
        case 1:
          this.led1Color = event
          this.senddata("Lico", "clr", this.led1Color)
          break;
        case 2:
          this.led2Color = event
          this.senddata("Lico", "clr", this.led2Color)
          break;
        default:
          console.log("Falscher Event Typ")
          break;
      }
    }



  }
  toggleChangeEvent(event: any, trigger: string, led: number) {
    //console.log(event)
    // Checken ob Toggle passt

    switch (led) {
      case 0:
        this.led0State = event
        this.senddata("Lico", "toggle", "Pulse")
        break;
      case 1:
        this.led1State = event
        this.senddata("Lico", "toggle", "Pulse")
        break;
      case 2:
        this.led2State = event
        this.senddata("Lico", "toggle", "Pulse")
        break;
      case 3:
        this.led0State = event
        this.led1State = event
        this.led2State = event
        this.senddata("Lico", "clr", this.led0State.toString())
        this.senddata("Lico", "clr", this.led1State.toString())
        this.senddata("Lico", "clr", this.led2State.toString())
        break;
      default:
        console.log("Falscher Event Typ")
        break;
    }

  }
  deccounter() {
    if (this.Mode > 0) {
      this.Mode--
    }
    else{
      this.Mode = 99;
    }
    this.senddata("Lico","mode", this.Mode.toString())

  }
  inccounter() {
    if (this.Mode < 99) {
      this.Mode++
    }
    else{
      this.Mode = 0;
    }
    this.senddata("Lico","mode", this.Mode.toString())


  }
  alarm() {
    this.senddata("Lico","mode", this.Mode.toString())
    }
    

}

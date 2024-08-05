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
import { Color, color } from 'highcharts';

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



  senddata(device: string, status: string, value: string, vi: string) {
    this.dataService.setstate(device, status, value, vi).subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }
  senddatauuid(uuid: string, cmd: string){
    this.dataService.setuuid(uuid, cmd).subscribe(
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
    console.log(event)
    const hslString = "hsl(287, 65%, 40%)";
    const hslValues = this.extractHslValues(event);
    const hsvValues = this.hslToHsv(hslValues.h, hslValues.s, hslValues.l);
    console.log(hsvValues)
    let hsvstr = "hsv(" + hslValues.h + "," + hslValues.s + "%," + hslValues.l + "%)"
    console.log(hsvstr)
    if (this.disabled) {
      this.led0Color = event
      this.led1Color = event
      this.led2Color = event
      this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI1", hsvstr)
      this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI2", hsvstr)
      this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI3", hsvstr)

    }
    else {
      switch (led) {
        case 0:
          this.led0Color = event
          this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI1", hsvstr)
          break;
        case 1:
          this.led1Color = event
          this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI2", hsvstr)
          break;
        case 2:
          this.led2Color = event
          this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI3", hsvstr)
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
        //this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI1", "On")
        this.senddata("Sw", "tg", "Pulse", "VILED1")
       // this.senddata("Schalter", "tg", "Pulse")
        break;
      case 1:
        this.led1State = event
        //this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI1", "On")
        this.senddata("Sw", "tg", "Pulse", "VILED2")
        break;
      case 2:
        this.led2State = event
       // this.senddatauuid("1c5b743e-0398-4c3c-ffffed57184a04d2/AI1", "On")
        this.senddata("Sw", "tg", "Pulse", "VILED3")
        break;
      case 3:
        this.led0State = event
        this.led1State = event
        this.led2State = event
        this.senddata("Sw", "tg", "Pulse", "VILED1")
        this.senddata("Sw", "tg", "Pulse", "VILED2")
        this.senddata("Sw", "tg", "Pulse", "VILED3")
        //this.senddata("Sw", "tg", this.led0State.toString())
        //this.senddata("Sw", "tg", this.led1State.toString())
        //this.senddata("Sw", "tg", this.led2State.toString())
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
    else {
      this.Mode = 99;
    }
    this.senddata("Lico", "M-", "Pulse", "APIControl")

  }
  inccounter() {
    if (this.Mode < 99) {
      this.Mode++
    }
    else {
      this.Mode = 0;
    }
    this.senddata("Lico", "M+", "Pulse", "APIControl")


  }
  alarm() {
    this.senddata("Lico", "mode", this.Mode.toString(), "APIControl")
  }
  // Extrahiere die HSL-Werte aus einem String
  extractHslValues(hslString: string): { h: number, s: number, l: number } {
    // Entferne 'hsl(' und ')', und teile den Rest am Komma
    const parts = hslString.replace('hsl(', '').replace(')', '').split(', ');

    // Teile die Werte und konvertiere sie zu Zahlen
    const h = parseFloat(parts[0]);
    const s = parseFloat(parts[1].replace('%', ''));
    const l = parseFloat(parts[2].replace('%', ''));

    return { h, s, l };
  }

  // Konvertiere HSL-Werte zu HSV
  hslToHsv(h: number, s: number, l: number): { h: number, s: number, v: number } {
    // Konvertiere die Sättigung (S) und Helligkeit (L) von Prozent in Dezimalzahlen
    s /= 100;
    l /= 100;

    // Berechne den Value (V) in HSV
    const v = l + s * Math.min(l, 1 - l);

    // Berechne die Saturation (S) in HSV
    const sv = v === 0 ? 0 : 2 * (1 - l / v);

    // Hue bleibt gleich
    const hsvH = h;
    const hsvS = sv * 100; // Konvertiere zurück zu Prozent
    const hsvV = v * 100; // Konvertiere zurück zu Prozent

    return { h: hsvH, s: hsvS, v: hsvV };
  }


}

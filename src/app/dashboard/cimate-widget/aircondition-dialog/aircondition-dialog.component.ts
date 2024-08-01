import { Component, Inject } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { DataService } from '../../data.service';
import { send } from 'process';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-aircondition-dialog',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatButtonToggleModule, FormsModule, MatSlideToggleModule, MatIcon],
  templateUrl: './aircondition-dialog.component.html',
  styleUrl: './aircondition-dialog.component.scss'
})
export class AirconditionDialogComponent {
  targettemp: number;
  fan: number;
  fanDir: number;
  actoggle: any;
  mode: any;
  constructor(public dialogRef: MatDialogRef<AirconditionDialogComponent>, private dataService: DataService) {
    this.targettemp = 16;
    this.fan = 0;
    this.fanDir = 0;
    this.actoggle = false;
    this.mode = "1";
  }
  getData() {
    this.dataService.getstate("")
  }
  deccounter() {
    if (this.targettemp > 16) {
      this.targettemp--
    }
    this.sendData("ϑt", this.targettemp.toString())

  }
  inccounter() {
    if (this.targettemp < 26) {
      this.targettemp++
    }
    this.sendData("ϑt", this.targettemp.toString())
  }
  fandirchange() {
    this.sendData("Adir", this.fanDir.toString())
    //console.log("fandir " + this.fanDir)
  }
  fanchange() {
    this.sendData("Fan", this.fan.toString())
    //console.log("fan " + this.fan)
  }
  modechange() {
    this.sendData("Mode", this.mode.toString())
    //console.log("mode " + this.mode)
  }
  acchange() {
    if (this.actoggle == false) {
      this.sendData("Off", "Pulse")
    }
    else {
      this.sendData("On", "Pulse")
    }
    //console.log("AC " + this.actoggle)
  }

  sendData(status: string, value: string) {
    this.dataService.setstate("ACc", status, value, "APIControl").subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }




}

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { eventNames } from 'process';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-aeromat-dialog',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatButtonToggleModule, FormsModule, MatSlideToggleModule],
  templateUrl: './aeromat-dialog.component.html',
  styleUrl: './aeromat-dialog.component.scss',
  styles: []
})
export class AeromatDialogComponent {
  mode: any;
  constructor(public dialogRef: MatDialogRef<AeromatDialogComponent>, private dataService: DataService) {
    this.mode = "1";
  }
  modechange() {
    //console.log(this.mode)
    this.sendData("Pb", this.mode)
  }
  sendData(status: string, value: string) {
    this.dataService.setstate("ACc", status, value, "APIControl").subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }
  getData() {
    this.dataService.getstate("")
  }

}
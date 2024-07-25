import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-aircondition-dialog',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatButtonToggleModule, FormsModule],
  templateUrl: './aircondition-dialog.component.html',
  styleUrl: './aircondition-dialog.component.scss'
})
export class AirconditionDialogComponent {

  autochecked: any;
  slidervalue: number;
  value = 0;

  modevalue: number
  tempvalue: number
  fanvalue: number
  fandirectionvalue: number
  constructor(public dialogRef: MatDialogRef<AirconditionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.slidervalue = 0;
    this.modevalue = 0;
    this.tempvalue = 0;
    this.fanvalue = 0;
    this.fandirectionvalue = 0;
  }
  modeLabel(value: number): string {
    this.modevalue = value;
    return `${this.modevalue}`;
  }
  tempLabel(value: number): string {
    this.tempvalue = value;
    return `${this.tempvalue}`;
  }
  fanLabel(value: number): string {
    this.fanvalue = value;
    return `${this.fanvalue}`;
  }
  fandirectionLabel(value: number): string {
    this.fandirectionvalue = value;
    return `${this.fandirectionvalue}`;
  }



}

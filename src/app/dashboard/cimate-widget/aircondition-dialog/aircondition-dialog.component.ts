import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-aircondition-dialog',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './aircondition-dialog.component.html',
  styleUrl: './aircondition-dialog.component.scss'
})
export class AirconditionDialogComponent {
autochecked: any;
  slidervalue: number;

  constructor(public dialogRef: MatDialogRef<AirconditionDialogComponent>) {
    this.slidervalue = 0;
  }
autochanged($event: MatButtonToggleChange) {
throw new Error('Method not implemented.');
}
specialchecked: any;
specialchanged($event: MatButtonToggleChange) {
throw new Error('Method not implemented.');
}
formatLabel(value: number): string {
  this.slidervalue = value;
  console.log("Slider " + value);
  this.autochecked = false;
  this.specialchecked = false;
  console.log(this.autochecked + "   " + this.specialchecked);
  return `${this.slidervalue}`;
}


}

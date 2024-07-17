import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { eventNames } from 'process';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-aeromat-dialog',
  standalone: true,
  imports: [MatSliderModule, MatButtonModule, MatButtonToggleModule],
  templateUrl: './aeromat-dialog.component.html',
  styleUrl: './aeromat-dialog.component.scss',
  styles: [`
    :host {
      display: block;
      background: #FFF;
      border-radius: 8px;
      padding: 16px;
    }
  `]
})
export class AeromatDialogComponent {

  slidervalue: number;
  autochecked: boolean = false;
  specialchecked: boolean = false;

  constructor(public dialogRef: MatDialogRef<AeromatDialogComponent>) {
    this.slidervalue = 0;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  formatLabel(value: number): string {
    this.slidervalue = value;
    console.log("Slider " + value);
    this.autochecked = false;
    this.specialchecked = false;
    console.log(this.autochecked + "   " + this.specialchecked);
    return `${this.slidervalue}`;
  }

  specialchanged(event: MatButtonToggleChange): void {
    this.slidervalue = 5;
    this.specialchecked = true;
    this.autochecked = false;
    console.log("Special " + this.slidervalue);
    console.log(this.autochecked + "   " + this.specialchecked);
  }

  autochanged(event: MatButtonToggleChange): void {
    this.slidervalue = 6;
    this.specialchecked = false;
    this.autochecked = true;
    console.log("Auto " + this.slidervalue);
    console.log(this.autochecked + "   " + this.specialchecked);
  }
}
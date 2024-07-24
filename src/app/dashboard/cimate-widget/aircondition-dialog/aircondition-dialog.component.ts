import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { DataService } from '../../data.service';
import { send } from 'process';

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
  specialchecked: any;

  constructor(public dialogRef: MatDialogRef<AirconditionDialogComponent>, private dataService: DataService) {
    this.slidervalue = 0;
  }
autochanged($event: MatButtonToggleChange) {
console.log("toggle")
this.senddata("Tg")
}

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
senddata(status: string) {
  this.dataService.setminiserver("ACc", status, "Pulse").subscribe(
    response => { },
    error => {
      console.error('Error:', error);
    }
  );
}


}

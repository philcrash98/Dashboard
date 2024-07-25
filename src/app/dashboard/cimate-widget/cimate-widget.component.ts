import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { AeromatDialogComponent } from './aeromat-dialog/aeromat-dialog.component';
import { LeafDialogComponent } from './leaf-dialog/leaf-dialog.component';
import { AirconditionDialogComponent } from './aircondition-dialog/aircondition-dialog.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cimate-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, MatIconModule],
  templateUrl: './cimate-widget.component.html',
  styleUrl: './cimate-widget.component.scss'
})
export class CimateWidgetComponent {
  temperature: any;

  constructor(public dialog: MatDialog) {
    this.temperature = 21;
  }
openAeromatDialog() {
  const dialogRef = this.dialog.open(AeromatDialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Der Dialog wurde geschlossen');
  });
}
openAirConditionDialog() {
  const dialogRef = this.dialog.open(AirconditionDialogComponent, {
    width: '400px',
    data: {mode: null, temp: null, fan: null, fandirection: null}
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result){
      console.log(result);
    }
    
  });
}
openLeafDialog() {
  const dialogRef = this.dialog.open(LeafDialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Der Dialog wurde geschlossen');
  });
}


}



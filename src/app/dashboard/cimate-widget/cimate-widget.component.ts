import { Dialog, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { AeromatDialogComponent } from './aeromat-dialog/aeromat-dialog.component';

@Component({
  selector: 'app-cimate-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './cimate-widget.component.html',
  styleUrl: './cimate-widget.component.scss'
})
export class CimateWidgetComponent {
  constructor(public dialog: MatDialog) {}
openClimateDialog() {
  const dialogRef = this.dialog.open(AeromatDialogComponent, {
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('Der Dialog wurde geschlossen');
  });
}

}



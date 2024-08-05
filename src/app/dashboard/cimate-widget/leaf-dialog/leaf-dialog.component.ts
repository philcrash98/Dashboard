import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-leaf-dialog',
  standalone: true,
  imports: [MatButtonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './leaf-dialog.component.html',
  styleUrl: './leaf-dialog.component.scss'
})
export class LeafDialogComponent {


  leafbutton: number;
  leaf: boolean;
  leaftoggle: any;

  constructor(private dataService: DataService) {
    this.leafbutton = 0;
    this.leaf = false;
  }
  leafchange() {
    throw new Error('Method not implemented.');
  }
  sendData(status: string, value: string) {
    this.dataService.setstate("Lv", status, value, "APIControl").subscribe(
      response => { },
      error => {
        console.error('Error:', error);
      }
    );
  }
}

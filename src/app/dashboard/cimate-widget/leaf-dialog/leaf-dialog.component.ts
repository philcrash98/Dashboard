import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-leaf-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './leaf-dialog.component.html',
  styleUrl: './leaf-dialog.component.scss'
})
export class LeafDialogComponent {

  leafbutton: number;
  leaf: boolean;

  constructor(){
    this.leafbutton = 0;
    this.leaf = false;
  }
  leafonoff() {
    if(this.leaf == false){
      this.leaf = true;

    } else {
      this.leaf = false;
    }
    //console.log(this.leaf)
    }
}

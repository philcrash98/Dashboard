import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-light-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, MatButtonModule, MatDividerModule, ColorPickerModule],
  templateUrl: './light-widget.component.html',
  styleUrl: './light-widget.component.scss'
})
export class LightWidgetComponent {
color: any;
popup: string;
togglelight() {
console.log("toggle")

}
led1name: any;

}

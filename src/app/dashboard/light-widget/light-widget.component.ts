import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-light-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, MatButtonModule, MatDividerModule],
  templateUrl: './light-widget.component.html',
  styleUrl: './light-widget.component.scss'
})
export class LightWidgetComponent {
led1name: any;

}

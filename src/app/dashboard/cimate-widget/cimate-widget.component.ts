import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-cimate-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './cimate-widget.component.html',
  styleUrl: './cimate-widget.component.scss'
})
export class CimateWidgetComponent {

}

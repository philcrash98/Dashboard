import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-stats-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './stats-widget.component.html',
  styleUrl: './stats-widget.component.scss'
})
export class StatsWidgetComponent {

}

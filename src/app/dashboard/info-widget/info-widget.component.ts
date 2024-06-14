import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-info-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './info-widget.component.html',
  styleUrl: './info-widget.component.scss'
})
export class InfoWidgetComponent {

}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-misc-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule],
  templateUrl: './misc-widget.component.html',
  styleUrl: './misc-widget.component.scss'
})
export class MiscWidgetComponent {

}

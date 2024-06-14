import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Console } from 'console';
import { CimateWidgetComponent } from './cimate-widget/cimate-widget.component';
import { InfoWidgetComponent } from './info-widget/info-widget.component';
import { LightWidgetComponent } from './light-widget/light-widget.component';
import { MiscWidgetComponent } from './misc-widget/misc-widget.component';
import { StatsWidgetComponent } from './stats-widget/stats-widget.component';
import { PowerWidgetComponent } from './power-widget/power-widget.component';
import { DataService } from './data.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatGridListModule,
    CimateWidgetComponent,
    InfoWidgetComponent,
    LightWidgetComponent,
    MiscWidgetComponent,
    StatsWidgetComponent,
    PowerWidgetComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor() {
  }
}

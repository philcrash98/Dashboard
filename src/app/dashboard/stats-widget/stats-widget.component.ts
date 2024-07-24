import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-stats-widget',
  standalone: true,
  imports: [MatCardModule,
    MatGridListModule, HighchartsChartModule, MatTabsModule],
  templateUrl: './stats-widget.component.html',
  styleUrl: './stats-widget.component.scss'
})
export class StatsWidgetComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };

}

import {
  Component,
  OnInit,
  Injectable,
  Inject,
  PLATFORM_ID,
  Input
} from '@angular/core';
import * as Chart from 'chart.js';
import { Entry } from '../entry';
import { WeightService } from '../weight.service';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @Input() weightEntries: Entry[];
  @Input() token: string;
  @Input() email: string;
  chartReady: boolean;
  weights: number[];
  dates: string[];
  type = 'line';
  data: Object;
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor(private weightService: WeightService) {}
  ngOnInit() {
    this.weightService.getEntryList(this.email, this.token)
    .subscribe(entries => this.weightEntries = entries);
    this.weightEntries.forEach(entry => {
      const date = entry.date.getDate() + '-' + (entry.date.getMonth() + 1) + '-' + entry.date.getFullYear();
      this.dates.push(date);
      this.weights.push(entry.weight);
    });
    this.data = {
      labels: this.dates,
      datasets: [
        {
          borderColor: 'rgb(220,20,60)',
          label: 'Weight Entries',
          data: this.weights
        }
      ]
    };
    this.chartReady = true;
  }
}

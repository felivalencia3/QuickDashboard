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
  dates: Date[];
  weights: number[];
  type = 'line';
  data: Object;
  options: Object;
  ngOnInit() {
    this.weightEntries.forEach(entry => {
      this.dates.push(entry.date);
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
    this.options = {
      responsive: true,
      maintainAspectRatio: false
    };
  }
}

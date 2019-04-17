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
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  @Input() weightEntries: Entry[];
  ngOnInit() {}
}
/*
  type = 'line';
  data = {
    labels: ,
    datasets: [
      {
        borderColor: 'rgb(220,20,60)',
        label: 'Weight Entries',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
*/

import { Component, OnInit, Input } from '@angular/core';
import { WeightService } from '../weight.service';
import { Entry } from '../entry';

@Component({
  selector: 'app-weight-list',
  templateUrl: './weight-list.component.html',
  styleUrls: ['./weight-list.component.css']
})
export class WeightListComponent implements OnInit {
  @Input() token: string;
  @Input() email: string;
  weightEntries: Entry[];
  constructor(private weightService: WeightService) { }
  ngOnInit() {
  }
  getWeights(): void {
    this.weightService.getEntryList(this.email, this.token)
    .subscribe(entries => this.weightEntries = entries);
  }
}

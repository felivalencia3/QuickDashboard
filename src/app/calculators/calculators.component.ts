import { Component, OnInit, Input } from '@angular/core';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrls: ['./calculators.component.css']
})
export class CalculatorsComponent implements OnInit {
  @Input() token: string;
  @Input() email: string;
  data: Object;
  constructor(public weightService: WeightService) { }
  ngOnInit() {
    this.setCalculators();
  }
  setCalculators() {
    this.weightService.getCalculators(this.token, this.email)
    .subscribe((data => {
      this.data = data;
    }));
  }
}

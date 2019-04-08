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
  bmi: number;
  bmr: number;
  idealWeight: number;
  constructor(public weightService: WeightService) { }
  ngOnInit() {

  }
  setCalculators() {
    this.weightService.getCalculators(this.token, this.email)
    .subscribe((data => {
      this.bmi = data.bmi;
      this.bmr = data.bmr;
      this.idealWeight = data.IdealWeight;
    }));
  }
}

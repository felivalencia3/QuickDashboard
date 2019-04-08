import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  constructor(private weightService: WeightService) {}
  @Input() email: string;
  @Input() token: string;
  message: string;
  model = new User(this.email, 0);
  onSubmit(weight: number) {
    this.message = 'Submitted New Weight: ' + weight + 'kg';
    this.weightService.addEntry(this.model, this.token);
  }
  ngOnInit() {}
}

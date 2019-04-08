import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { WeightService } from '../weight.service';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  constructor(private weightService: WeightService) {}
  @Output() added = new EventEmitter<string>();
  @Input() email: string;
  @Input() token: string;
  message: string;
  model = new User(this.email, 0);
  onSubmit() {
    this.weightService.addWeight(this.model.weight, this.email, this.token)
    .subscribe(obj => this.message = 'Submitted New Weight: ' + JSON.stringify(obj.weight) + 'kg');
    this.added.emit('complete');

  }
  ngOnInit() {}
}

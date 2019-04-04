import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-weight-form',
  templateUrl: './weight-form.component.html',
  styleUrls: ['./weight-form.component.css']
})
export class WeightFormComponent implements OnInit {
  @Input() email: string;
  submitted = false;
  model = new User(this.email, 0);
  onSubmit() {
    this.submitted = true;
  }
  get diagnostic() {
    return this.model;
  }
  constructor() {}

  ngOnInit() {}
}

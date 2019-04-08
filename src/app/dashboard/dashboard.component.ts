import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { WeightService } from '../weight.service';
import { Entry } from '../entry';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: string;
  token: string;
  index: number;
  name: string;
  weightEntries: Entry[];
  constructor(private cookieService: CookieService, private weightService: WeightService) { }

  ngOnInit(): void {
    this.email = this.cookieService.get('email');
    this.token = this.cookieService.get('token');
    this.index = this.email.indexOf('@');
    this.name = this.email.slice(0, this.index);
  }
  getWeights(): void {
    this.weightService.getEntryList(this.email, this.token)
    .subscribe(entries => this.weightEntries = entries);
  }

}

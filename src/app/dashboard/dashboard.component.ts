import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email = ' ';
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.email = this.cookieService.get('email');
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}
  private serverUrl = 'https://dietgrapher-server.herokuapp.com/api/weight';
  getEntryList(email: string, token: string): Observable<Entry[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Entry[]>(this.serverUrl + '?user=' + email, httpOptions);
  }
}

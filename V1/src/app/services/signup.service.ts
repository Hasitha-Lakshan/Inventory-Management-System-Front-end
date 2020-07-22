import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../signup/user'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  host = "http://localhost:8080/api/auth/signup";

  constructor(private http: HttpClient) { }

  connectPostApi(userData: User): Observable<User> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader
    };
    return this.http.post<User>(this.host, userData, options);
  }
}

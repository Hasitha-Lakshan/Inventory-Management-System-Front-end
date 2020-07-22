import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginPayload } from '../login/login-payload';
import { Observable } from 'rxjs';
import { JwtAuthResponse } from '../login/jwt-auth-response';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private host = "http://localhost:8080/api/auth/login";

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  connectLoginApi(loginPayloadData: LoginPayload): Observable<boolean> {
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/Json');
    let options = {
      headers: httpHeader
    };
    return this.http.post<JwtAuthResponse>(this.host, loginPayloadData, options).pipe(map(data => {
      this.localStorageService.store('authenticationToken', data.authenticationToken);
      this.localStorageService.store('username', data.username);

      return true;
    }))
  }
}

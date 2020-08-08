import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  private url = "http://localhost:8080/api/analyzer/";

  constructor(private http: HttpClient) { }

  get_employees(): Observable<any> {
    return this.http.get(this.url + "employees");
  }

  getEmployeeById(userID: number) {
    return this.http.get(this.url + "employee/" + userID);
  }

}

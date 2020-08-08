import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from '../Analyzer-Dashboard/employees';
import { Phone } from '../Analyzer-Dashboard/phone';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  constructor(private http : HttpClient) { 

  }

 get_employees():Observable<any>
  {
    return this.http.get( "http://localhost:8080/api/analyzer/employees");
  }

  getEmployeeById(userID)
  {
    return this.http.get("http://localhost:8080/api/analyzer/employee/"+userID);
  }

}
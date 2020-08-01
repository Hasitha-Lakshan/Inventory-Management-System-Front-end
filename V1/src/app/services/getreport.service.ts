import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../invoice-report/datafilter/datafilter.component';

@Injectable({
  providedIn: 'root'
})
export class GetreportService {

  constructor(private http: HttpClient) { }


  public getReports(){
    return this.http.get<Data[]>('http://localhost:8080/getreports');
  }

  public getReportById(id: number){
    return this.http.get<Data>(`http://localhost:8080/findreportbyid/${id}`);
  }

  public updateReport(data: Data){
    return this.http.put('http://localhost:8080/update',data);
  }
}

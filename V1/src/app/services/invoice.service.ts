import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../inventory-manager-dashboard/store-house-dashboard/store-house-reports/invoice-report/datafilter/datafilter.component';
import { Observable } from 'rxjs';
import { UpdateData } from '../inventory-manager-dashboard/store-house-dashboard/store-house-reports/invoice-report/update-report/update-report.component';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private url = 'http://localhost:8080/api/cashCollector/';

  constructor(private httpClient: HttpClient) {}



  public getReports(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.url + 'get-invoice-reports');
  }

  public getReportById(id: number): Observable<Data> {
    return this.httpClient.get<Data>(this.url + `findreportbyid/${id}`);
  }

  public updateReport(id:number,data: UpdateData): Observable<UpdateData>{
    
    return this.httpClient.put<Data>(this.url+'update-invoice/'+id,data);
      
  }
}

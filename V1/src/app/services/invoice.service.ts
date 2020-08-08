import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../invoice-report/datafilter/datafilter.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private url = 'Http://localhost:8080/api/cashCollector/';

  constructor(private httpClient: HttpClient) {}



  public getReports(): Observable<Data[]> {
    return this.httpClient.get<Data[]>(this.url + 'get-invoice-reports');
  }

  public getReportById(id: number): Observable<Data> {
    return this.httpClient.get<Data>(this.url + `findreportbyid/${id}`);
  }

  public updateReport(data: Data): Observable<Data>{
    let id = data.invoiceId
    return this.httpClient.put<Data>(this.url+'update-invoice/'+id,data);
      
  }
}

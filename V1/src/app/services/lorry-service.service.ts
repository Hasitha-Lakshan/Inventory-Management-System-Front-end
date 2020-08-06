import { Injectable } from '@angular/core';
import { Lorry } from '../inventory-manager-dashboard/distribution-dashboard/manage/lorry'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LorryServiceService {

  private url = "Http://localhost:8080/api/inventoryManager/distribution/"

  constructor(private httpClient: HttpClient) { }

  addLorryRequest(lorry: Lorry): Observable<Lorry> {
    return this.httpClient.post<Lorry>(this.url + "addlorry", lorry);
  }

  getLorries(): Observable<Lorry[]> {
    return this.httpClient.get<Lorry[]>(this.url + "lorries");
  }

  updateLorry(lorry: Lorry): Observable<Lorry> {
    return this.httpClient.put<Lorry>(this.url + "updatelorry/" + lorry.lorryID, lorry)
  }
}

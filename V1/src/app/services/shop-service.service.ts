import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shops } from '../inventory-manager-dashboard/shops-details/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  private url = "http://localhost:8080/api/inventoryManager/shops/";

  constructor(private http: HttpClient) { }

  public getAllShops(): Observable<Shops[]> {
    return this.http.get<Shops[]>(this.url);
  }

  public getShopByName(shopName: string): Observable<Shops[]> {
    return this.http.get<Shops[]>(this.url + shopName);
  }
}

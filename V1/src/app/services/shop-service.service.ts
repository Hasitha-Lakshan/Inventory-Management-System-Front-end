import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor(private http:HttpClient) { }

  public getAllShops(){
    return this.http.get("http://localhost:8080/api/inventoryManager/shops");
  }

  public getShopByName(shopName){
    return this.http.get("http://localhost:8080/api/inventoryManager/shops/"+shopName);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  private url = "http://localhost:8080/api/inventoryManager/shops/";

  constructor(private http:HttpClient) { }

  public getAllShops(){
    return this.http.get(this.url);
  }

  public getShopByName(shopName:string){
    return this.http.get(this.url+shopName);
  }
}

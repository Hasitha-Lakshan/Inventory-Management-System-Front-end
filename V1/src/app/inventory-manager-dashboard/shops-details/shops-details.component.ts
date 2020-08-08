import { Component, OnInit } from '@angular/core';

import { ShopServiceService } from '../../services/shop-service.service';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {
  
  shops :any;
  shopName:string;
  constructor(private service:ShopServiceService) { }

  public findShop(){
    let resp=this.service.getShopByName(this.shopName);
    resp.subscribe((data)=>this.shops=data);
  }
  

  ngOnInit(): void {
    let resp=this.service.getAllShops();
    resp.subscribe((data)=>this.shops=data);
  }

}


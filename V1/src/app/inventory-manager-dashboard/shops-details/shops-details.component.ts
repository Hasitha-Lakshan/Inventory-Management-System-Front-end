import { Component, OnInit } from '@angular/core';
import { Shops } from '../shops-details/shop'
import { ShopServiceService } from '../../services/shop-service.service';

@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.css']
})
export class ShopsDetailsComponent implements OnInit {

  shops: Shops[];
  shopName: string;
  isFoundShop: any;

  constructor(private service: ShopServiceService) { }

  ngOnInit(): void {

    this.printAllShops();
  }

  printAllShops() {
    this.service.getAllShops().subscribe((data) => {
      this.shops = data;
      this.isAvailable(this.shops.length != 0);
    });
  }

  public findShop() {
    this.service.getShopByName(this.shopName).subscribe((data) => {
      this.shops = data;
      this.isAvailable(this.shops.length != 0);
    });
  }

  isAvailable(isAvailable: boolean) {
    if (isAvailable) {
      this.isFoundShop = true;
    }
    else {
      this.isFoundShop = false;
    }
  }
}

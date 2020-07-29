import { Component, OnInit } from '@angular/core';

export class Payment{
  constructor(
    public check: number,
    public cash: number,
    public credit: number
  ){

  }
}

export class Data{

  constructor(
  public invoiceNo: number,
  public shopName: string,
  public issuedDate: Date,
  public expireDate: Date,
  public status: String,
  public value: number,
  public payment: Payment

  ){}
  

}


@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit {

data = [new Data(1,'saman stores',new Date(),new Date(),'unpaid',1550000,new Payment(25000,0,0)),
        new Data(2,'kamal stores',new Date(),new Date(),'paid',150000,new Payment(25000,0,500)),
        new Data(3,'lucky stores',new Date(),new Date(),'unpaid',10000,new Payment(25000,0,0)),
        new Data(4,'sam stores',new Date(),new Date(),'paid',600000,new Payment(25000,0,1000)),
        new Data(5,'new stores',new Date(),new Date(),'unpaid',100000,new Payment(25000,0,0)),
        new Data(6,'best stores',new Date(),new Date(),'unpaid',500000,new Payment(25000,0,500)),
        new Data(7,'perera stores',new Date(),new Date(),'paid',100000,new Payment(25000,0,7000)),


];

tagType: number
tagName: any
startDate: Date
endDate: Date


  constructor() { }

  ngOnInit(): void {
  }

  find(){
    
  }

}

import { Component, OnInit } from '@angular/core';
import { GetreportService } from '../services/getreport.service';
import { Router } from '@angular/router';


export class Data{

  constructor(
  public invoiceId: number,
  public shopName: string,
  public issuedDate: Date,
  public expireDate: Date,
  public status: boolean,
  public value: number,
  public cheque: number,
  public cash: number,
  public credits: number

  ){}
  

}


@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit {

// data = [new Data(1,'saman stores',new Date(),new Date(),'unpaid',1550000,new Payment(25000,0,0)),
//         new Data(2,'kamal stores',new Date(),new Date(),'paid',150000,new Payment(25000,0,500)),
//         new Data(3,'lucky stores',new Date(),new Date(),'unpaid',10000,new Payment(25000,0,0)),
//         new Data(4,'sam stores',new Date(),new Date(),'paid',600000,new Payment(25000,0,1000)),
//         new Data(5,'new stores',new Date(),new Date(),'unpaid',100000,new Payment(25000,0,0)),
//         new Data(6,'best stores',new Date(),new Date(),'unpaid',500000,new Payment(25000,0,500)),
//         new Data(7,'perera stores',new Date(),new Date(),'paid',100000,new Payment(25000,0,7000)),


// ];
data: Data[]

tagType: number
tagName: any
startDate: Date
endDate: Date


  constructor(
    private dataService: GetreportService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.dataService.getReports().subscribe(
      response => {
        console.log(response)
        this.data = response;
      }
    )
  }

  find(){
    
  }

  updateReport(id:number){
    console.log(`update ${id}`)
    this.router.navigate(['update-report',id])

  }




  
    
 

}

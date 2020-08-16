import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../../../services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Data} from '../datafilter/datafilter.component'

export class UpdateData{
  

  constructor(
      public shopName: string,
    public expireDate: Date,
    public value: number,
    public cheque: number,
    public cash: number
  ){}
}

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  id:number
  data: Data
  updateData: UpdateData

  constructor(
    private reportService: InvoiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.updateData=new UpdateData('',new Date(),1,1,1)
    this.data= new Data(1,'',new Date(),new Date(),false,1,1,1,1);
    this.reportService.getReportById(this.id).subscribe(
      data=>this.data=data
    )
  }

  saveReport(){
    this.updateData.shopName = this.data.shopName;
    this.updateData.expireDate=this.data.expireDate;
    this.updateData.value=this.data.value;
    this.updateData.cheque=this.data.cheque;
    this.updateData.cash=this.data.cash;
    this.reportService.updateReport(this.data.invoiceId,this.updateData).subscribe(
      response =>{
        console.log(response)
        this.router.navigate(['invoice-reports'])
      }
    )
  }

  cancel(){
    this.router.navigate(['invoice-reports'])
  }

}

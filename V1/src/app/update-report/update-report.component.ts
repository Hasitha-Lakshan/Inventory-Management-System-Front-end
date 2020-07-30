import { Component, OnInit } from '@angular/core';
import { GetreportService } from '../services/getreport.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Data} from '../datafilter/datafilter.component'

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  id:number
  data: Data

  constructor(
    private reportService: GetreportService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.data= new Data(1,'',new Date(),new Date(),false,1,1,1,1);
    this.reportService.getReportById(this.id).subscribe(
      data=>this.data=data
    )
  }

  saveReport(){
    this.reportService.updateReport(this.data).subscribe(
      response =>{
        console.log(response)
        this.router.navigate(['invoice-reports'])
      }
    )
  }

}

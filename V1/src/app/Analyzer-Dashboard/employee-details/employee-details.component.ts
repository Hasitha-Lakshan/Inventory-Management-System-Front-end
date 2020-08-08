import { Component, OnInit } from '@angular/core';
import {Observable, from} from 'rxjs';

import { Employees} from '../employees';
import {Phone} from '../phone'
import { EmployeeDetailsService } from 'src/app/Service/employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

 lstEmp : Employees[];
 
  userID: any;
employee = []

firstName :String
 filterId = [];
  searchText = ''
  filterIdUI = [];
  tool = true
  count=0

  constructor(private service:EmployeeDetailsService) { }


  search()
  {
   
    this.filterId = this.employee;
  
    var matchData = []
    this.tool=true
    this.filterId.forEach(data=>{
      this.tool=true

      var n = data.userID.toString().startsWith(this.searchText)

      if(n)
      {
       
        this.count=this.count+1;
        matchData.push(data)
     
      }
    })
  
    if(this.count==0)
    {
       this.tool=false;

    }
    this.count=0;
    this.lstEmp =matchData;
    
  }



  ngOnInit(): void {
   let resp = this.service.get_employees();
   resp.subscribe
   (
     data=>
     {
       this.lstEmp = data;
       this.employee = data;
     
     }
     
     

   )











   
    
  }

}

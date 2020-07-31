import { Component, OnInit } from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {AdminserviceService} from '../services/adminservice.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  statusForm = new FormGroup({
   
    username:new FormControl(''),
    accountStatus:new FormControl('')

    
  });

 deleteForm = new FormGroup({
   
    username:new FormControl('')
   
  });

  constructor(private adminserviceService:AdminserviceService) { }

  ngOnInit(): void {
  }

 
  changeColor(e)
  {
   
  }

  onSubmitUpdateStatus(){
    this.adminserviceService.setStatus(this.statusForm.value).subscribe(data=>{
      console.log(data)
    },error=>{
      alert("Status update unsuccessful for user")
    })

    
  }
  onSubmitDeleteUser(){
    this.adminserviceService.deleteUser(this.deleteForm.value).subscribe(data=>{
      console.log(data)
    },error=>{
      alert("deletion unsuccessful")
    })
  }

}

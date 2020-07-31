import { Component, OnInit } from '@angular/core';
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
    this.adminserviceService.setStatus(this.statusForm.value)

    
  }
  onSubmitDeleteUser(){
    this.adminserviceService.deleteUser(this.deleteForm.value)
  }

}

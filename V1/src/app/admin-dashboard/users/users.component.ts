import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import{UpdateUserPaylord} from './updateUserPaylord';
import {UserPaylord} from './usersPaylord';
import {AdminserviceService} from '../../services/adminservice.service'
import { Observable } from 'rxjs';
import { PhoneNumber } from 'src/app/auth/signup/phone-number';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
 
 
  users:any
  updateForm:FormGroup
 
  

 
  constructor( private adminserviceService:AdminserviceService,private fb:FormBuilder) {
  
    
   
  }

  ngOnInit(): void {
    this.adminserviceService.getAllUsers().subscribe(data=>{
      this.users=data
      console.log(this.users)
    },error=>{

    }
    )

    
    this.updateForm=this.fb.group({
      
      firstname:[''],
      lastname:[''],
      role:[''],
      addressline1:[''],
      addressline2:[''],
      addressline3:[''],
      username:[''],
      

    });
    
    
  }
  onSubmit(){
  

      console.log("update method")
   

    
  }

}

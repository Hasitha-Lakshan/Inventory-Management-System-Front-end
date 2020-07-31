import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import{UpdateUserPaylord} from '../updateUserPaylord';
import {UserPaylord} from '../usersPaylord';
import {AdminserviceService} from '../../services/adminservice.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
 
  updateUserPaylord:UpdateUserPaylord;
  users:Observable<Array<UserPaylord>>;
  updateForm = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    role: new FormControl(''),
    addressline1:new FormControl(''),
    addressline2:new FormControl(''),
    addressline3:new FormControl(''),
    username:new FormControl('')
    
  }); 
  

 
  constructor( private adminserviceService:AdminserviceService) {
  
    
   
  }

  ngOnInit(): void {
    this.users=this.adminserviceService.getAllUsers();
        
    
    
  }
  onSubmit(){
    this.adminserviceService.updateUser(this.updateForm.value).subscribe(data=>{
      console.log(data)
    },error=>{
      alert("update unsuccessful")
    }
    )

    
  }

}

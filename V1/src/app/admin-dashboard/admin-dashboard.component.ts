import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  statusForm: FormGroup;
  deleteForm: FormGroup;

  constructor(private adminserviceService: AdminserviceService,private fb:FormBuilder,private router:Router ) { }

  ngOnInit(): void {
    this.statusForm=this.fb.group({
      username:['',[Validators.required]],
      accountStatus:['',[Validators.required]]
    });
  

    this.deleteForm = this.fb.group({

      username:['',[Validators.required]]

    });
  }

  onSubmitUpdateStatus() {
    this.adminserviceService.setStatus(this.statusForm.value).subscribe(data => {
     
      alert("Status for username "+ this.statusForm.value.username+" set to " +this.statusForm.value.accountStatus)
      
      
    }, error => {
      alert("Status update unsuccessful for user"+this.statusForm.value.username)
    })


  }
  onSubmitDeleteUser() {
    this.adminserviceService.deleteUser(this.deleteForm.value).subscribe(data => {
      console.log(data)
      alert("User with username "+ this.deleteForm.value.username+" is deleted")
      this.router.navigateByUrl("users")

    }, error => {
      alert("deletion unsuccessful")
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AdminserviceService } from '../services/adminservice.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  statusForm: FormGroup;
  deleteForm: FormGroup;

  constructor(private adminserviceService: AdminserviceService) { }

  ngOnInit(): void {

    this.statusForm = new FormGroup({

      username: new FormControl(''),
      accountStatus: new FormControl('')


    });

    this.deleteForm = new FormGroup({

      username: new FormControl('')

    });
  }

  onSubmitUpdateStatus() {
    this.adminserviceService.setStatus(this.statusForm.value).subscribe(data => {
      console.log(data)
    }, error => {
      alert("Status update unsuccessful for user")
    })


  }
  onSubmitDeleteUser() {
    this.adminserviceService.deleteUser(this.deleteForm.value).subscribe(data => {
      console.log(data)
    }, error => {
      alert("deletion unsuccessful")
    })
  }

}

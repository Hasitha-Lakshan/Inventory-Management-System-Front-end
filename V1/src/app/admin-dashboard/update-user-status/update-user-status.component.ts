import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-update-user-status',
  templateUrl: './update-user-status.component.html',
  styleUrls: ['./update-user-status.component.css']
})
export class UpdateUserStatusComponent implements OnInit {

  statusForm: FormGroup;

  constructor(private adminserviceService: AdminserviceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.statusForm = this.fb.group({
      username: ['', [Validators.required]],
      accountStatus: ['', [Validators.required]]
    });
  }

  onSubmitUpdateStatus() {
    this.adminserviceService.setStatus(this.statusForm.value).subscribe(data => {

      alert("Status for username " + this.statusForm.value.username + " set to " + this.statusForm.value.accountStatus)


    }, error => {
      alert("Status update unsuccessful for user" + this.statusForm.value.username)
    })

  }
}

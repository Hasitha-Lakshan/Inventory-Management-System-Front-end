import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  deleteForm: FormGroup;

  constructor(private adminserviceService: AdminserviceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.deleteForm = this.fb.group({

      username: ['', [Validators.required]]

    });
  }

  onSubmitDeleteUser() {
    this.adminserviceService.deleteUser(this.deleteForm.value).subscribe(data => {
      console.log(data)
      alert("User with username " + this.deleteForm.value.username + " is deleted")
      this.router.navigateByUrl("admin")

    }, error => {
      alert("deletion unsuccessful")
    })
  }

}

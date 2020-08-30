import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { AdminserviceService } from '../../services/adminservice.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: any
  updateForm: FormGroup

  constructor(private adminserviceService: AdminserviceService, private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.adminserviceService.getAllUsers().subscribe(data => {
      this.users = data
    }, error => { }
    )

    this.updateForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      addressLine3: ['', [Validators.required]],
      phoneNumbers: this.fb.array([this.phoneNumberObj()]),
      username: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  get phoneNumbers() {
    return this.updateForm.get('phoneNumbers') as FormArray;
  }

  phoneNumberObj() {
    return this.fb.group({
      phoneType: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0][1-9][0-9]{8}')]],
    });
  }
  addNewNumber() {
    this.phoneNumbers.push(this.phoneNumberObj());
  }

  deletePhoneNumber(i: number) {
    this.phoneNumbers.removeAt(i);
  }
  onSubmit() {

    this.adminserviceService.updateUser(this.updateForm.value).subscribe(data => {

    }, error => {

    })
  }
}
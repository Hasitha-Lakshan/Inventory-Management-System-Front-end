import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms'
import { SignupPayload } from './signup-payload';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private formbuilder: FormBuilder) { }

  title = 'User Signup Page';

  signupForm: FormGroup;
  signupPayload: SignupPayload;
  datasaved: boolean;
  datanotsaved: boolean;

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      addressLine3: ['', [Validators.required]],
      phoneNumbers: this.formbuilder.array([this.phoneNumberObj()]),
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9])([a-zA-Z0-9*.!@#$%^&(){}|]+){6}$')]]
    })
  }

  get addressLine1() {
    return this.signupForm.get('addressLine1');
  }

  get addressLine2() {
    return this.signupForm.get('addressLine2');
  }

  get addressLine3() {
    return this.signupForm.get('addressLine3');
  }

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get username() {
    return this.signupForm.get('username');
  }

  get password() {
    return this.signupForm.get('password');
  }

  phoneNumberObj() {
    return this.formbuilder.group({
      phoneType: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0][1-9][0-9]{8}')]],
    });
  }

  get phoneNumbers() {
    return this.signupForm.get('phoneNumbers') as FormArray;
  }

  addNewNumber() {
    this.phoneNumbers.push(this.phoneNumberObj());
  }

  deletePhoneNumber(i) {
    this.phoneNumbers.removeAt(i);
  }

  clearForm() {
    this.signupForm.reset();
  }

  submitUserData() {

    this.datasaved = false;
    this.datanotsaved = false;
    this.signupPayload = this.signupForm.value;
    this.postData(this.signupPayload);
  }

  postData(newUser: SignupPayload) {
    this.authService.connectSignupApi(newUser).subscribe(status => {
      let signupStatus: any;
      signupStatus = status;

      if (signupStatus) {
        this.datasaved = signupStatus;
        this.signupForm.reset();
      }
      else {
        this.datanotsaved = true;
      }
    });
  }

}

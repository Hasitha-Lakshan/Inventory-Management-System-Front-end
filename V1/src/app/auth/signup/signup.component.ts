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

  ngOnInit(): void {

    this.signupForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      role: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      addressLine3: ['', [Validators.required]],
      phoneNumbers: this.formbuilder.array([this.phoneNumberObj()]),
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  phoneNumberObj() {
    return this.formbuilder.group({
      phoneType: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
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
    this.signupPayload = this.signupForm.value;
    this.postData(this.signupPayload);
    this.signupForm.reset();
  }

  postData(newUser: SignupPayload) {
    this.authService.connectSignupApi(newUser).subscribe(c => this.datasaved = true)
  }

}

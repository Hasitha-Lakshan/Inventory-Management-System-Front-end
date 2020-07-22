import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LoginPayload } from './login-payload';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'User Login Page';

  loginForm: FormGroup;
  loginPayload: LoginPayload;

  constructor(private loginService: LoginService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  submitLoginData() {

    this.loginPayload = this.loginForm.value;
    this.postData(this.loginPayload);
  }

  postData(loginPayloadData: LoginPayload) {
    this.loginService.connectLoginApi(loginPayloadData).subscribe();
  }
}

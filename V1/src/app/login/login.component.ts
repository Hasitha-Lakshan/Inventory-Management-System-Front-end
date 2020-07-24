import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from './login-payload';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'User Login Page';

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  notRegistered: boolean;

  constructor(private loginService: LoginService, private formbuilder: FormBuilder, private router: Router) { }

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

    this.loginService.connectLoginApi(loginPayloadData).subscribe(role => {

      if (role == "ADMIN") {
        this.router.navigateByUrl('test');
      }
      else if (role == "ANALYZER") {
        this.router.navigateByUrl('test');
      }
      else if (role == "INVENTORY_MANAGER") {
        this.router.navigateByUrl('test');
      }
      else if (role == "CASH_COLLECTOR") {
        this.router.navigateByUrl('test');
      }}, 
      error => {
        this.notRegistered = true;
      });
  }
}

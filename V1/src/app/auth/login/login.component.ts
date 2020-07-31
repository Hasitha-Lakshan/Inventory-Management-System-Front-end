import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPayload } from "./login-payload";
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private formbuilder: FormBuilder, private router: Router) { }

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

    this.authService.connectLoginApi(loginPayloadData).subscribe(role => {

      if (role == "ADMIN") {
        this.router.navigateByUrl('header');
      }
      else if (role == "ANALYZER") {
        this.router.navigateByUrl('header');
      }
      else if (role == "INVENTORY_MANAGER") {
        this.router.navigateByUrl('header');
      }
      else if (role == "CASH_COLLECTOR") {
        this.router.navigateByUrl('header');
      }}, 
      error => {
        this.notRegistered = true;
      });
  }
}
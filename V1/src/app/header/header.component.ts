import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private username: string;

  constructor(private authService: AuthService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {

    this.getUserName();
  }

  getUserName() {
    this.username = this.localStorageService.retrieve('username');
  }

  logout() {
    this.authService.logout();
  }
}

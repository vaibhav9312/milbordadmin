import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userdd = "";
  constructor(private _accountService : AccountService) { }

  ngOnInit() {
  }

  showUser() {
    this.userdd = this.userdd == "" ? "show" : "";
  }

  doLogout(){
    this._accountService.doLogout();
  }
}

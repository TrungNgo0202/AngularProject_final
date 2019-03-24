import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/guard/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = null;
  isLogin: boolean = null;

  logout() {
    this._authentication.change_login_state(false);
    localStorage.removeItem("currentUser");
  }

  constructor(private _authentication: AuthenticationService, private _user: UserService) {
    if (localStorage.getItem("currentUser")) {
      this._user.change_user(JSON.parse(localStorage.getItem("currentUser")));
      this._authentication.change_login_state(true);
    }
  }

  ngOnInit() {
    this._user.as_user.subscribe(
      (res) => {
        this.user = res;
      }
    )

    this._authentication.as_isLogin.subscribe(
      (res) => {
        this.isLogin = res;
      })
  }
}

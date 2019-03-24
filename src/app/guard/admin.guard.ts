import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private user: any = null;
  constructor(private _authentication: AuthenticationService, private _user: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._authentication.checkLoginState()){
        this._user.as_user.subscribe(
          (res:any) => {
            this.user = res;
          }
        )

        if (this.user.MaLoaiNguoiDung === "QuanTri"){
          return true;
        }
        
      }else {
        alert("Vui lòng đăng nhập tài khoản Quản Trị");
        return;
      }
      alert("Đây là tài khoản Khách Hàng, vui lòng đăng nhập tài khoản Quản Trị ");
  }
}

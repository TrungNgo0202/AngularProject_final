import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/guard/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
@ViewChild('formDN') formdangnhap:NgForm;

isLogin:boolean = null;

  
  DangNhap(nguoiDung){
    console.log(nguoiDung);
    
    this._userSV.dangNhap(nguoiDung).subscribe(
      (res:any) => {
        console.log(res);
        
        if(typeof res !== "string"){
          this._authentication.change_login_state(true);
          localStorage.setItem('currentUser', JSON.stringify(res));
          this._user.change_user(res);
          this._router.navigate(['/home']);
          this.formdangnhap.resetForm();
        }
        else{
          this.formdangnhap.resetForm();
          alert('Tài khoản hoăc mật khẩu không đúng');
         
        }
      }
    )
      
   
  }
  constructor(private _filmSV:PhimApiService, 
    private _userSV:NguoidungApiService,
    private _router:Router, 
    private _authentication:AuthenticationService,
    private _user:UserService
    ) 
    { }

  ngOnInit() {
    // this._userLogin_state.current_isLogin.subscribe(isLogin => this.isLogin = isLogin);
    // console.log(this.isLogin);
    // this.isLogin = this._authentication.checkState();
    
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:any = null;
  private isLogin = new BehaviorSubject(null);
  public as_isLogin = this.isLogin.asObservable();

  public change_login_state(param){
    this.isLogin.next(param);
  }

  // checkAdmin(){
  //   if (localStorage.getItem("currentUser")){
  //     this.user = localStorage.getItem("currentUser");
  //     console.log(this.user);
      
  //     if ( (this.user.TaiKhoan == "darkness") ){
  //       return true;
  //     } 
  //     return false;
  //   }
  //   return false;
    
  // }

  checkLoginState(){
    if(localStorage.getItem('currentUser')){
      return true;
    }
    else{
      return false;
    }
  }

  
  constructor() { }
}

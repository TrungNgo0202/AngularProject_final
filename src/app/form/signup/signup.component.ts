import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { HttpClient } from '@angular/common/http';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('signupform') formDangKy: NgForm;
  
  DangKy(form:any){
    console.log(form.value);
    
    form.value.MaNhom = "GP01";
    this._userSV.themnguoidung(form).subscribe(
      (res:any) => {
        if (typeof res  !== 'string'){
          alert("Đăng ký thành công");
        }
        else alert("Tài khoản đã tồn tại");
        console.log(res);
        
      },
      (err:any) => {
        console.log(err);
        
      }
    )

    this.formDangKy.resetForm();
  }


  constructor(private _filmSV: PhimApiService, private _httpClient: HttpClient, private _userSV:NguoidungApiService) { }

  ngOnInit() {
  }

}

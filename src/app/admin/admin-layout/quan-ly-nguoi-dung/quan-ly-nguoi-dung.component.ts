import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoidungApiService } from 'src/app/services/nguoidung-api.service';
import { DanhSachNguoiDung } from 'src/app/models/DanhSachNguoiDung';
import { MatTableDataSource } from '@angular/material';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css'],
  providers:[DatePipe]
})
export class QuanLyNguoiDungComponent implements OnInit {
  private userArray: any[] = [];
  private listUser : MatTableDataSource<any>
  private isLoading : boolean = true;

  userForm = new FormGroup({
    taikhoan: new FormControl(""),
    matkhau: new FormControl(""),
    hoten: new FormControl(""),
    email: new FormControl(""),
    sodt: new FormControl(""),
    manhom: new FormControl(""),
    maloainguoidung: new FormControl(""),
  
  })


  constructor(private _userSV: NguoidungApiService) { }

  @ViewChild('formThemNguoiDung') formAddUser: NgForm
  addUser(form:any){
    console.log(form.value);


    form.value.MaNhom = "GP01";
    this._userSV.themnguoidung(form).subscribe(
      (res:any) => {
        if (typeof res  !== 'string'){
          alert("Thêm người dùng thành công");
          this._userSV.getDanhSachNguoiDung().subscribe(
            (res:any) => {
              this.userArray = res;
            }
          )
          // this.userArray.push(form.value);
          // window.location.reload();
        }
        else {
          alert("Người dùng đã tồn tại");
          console.log(res);
        }
      },
      (err:any) => {
        console.log(err);
        
      }
    )

    
    this.formAddUser.resetForm();
    
  }

  //Đẩy dữ liệu người dùng vào form
  setUpdateUserFormValue(user){
    this.userForm = new FormGroup({
      taikhoan: new FormControl(user.TaiKhoan),
      matkhau: new FormControl(user.MatKhau),
      hoten: new FormControl(user.HoTen),
      email: new FormControl(user.Email),
      sodt: new FormControl(user.SoDT),
      manhom: new FormControl(user.MaNhom),
      maloainguoidung: new FormControl(user.MaLoaiNguoiDung),

    })
  }


  //Tiến hành cập nhật người dùng
  updateUser(){
    this._userSV.updateNguoiDung(this.userForm).subscribe(
      (res:any) => {
        if (typeof res === 'object'){
          alert("Cập nhật người dùng thành công !");
          this._userSV.getDanhSachNguoiDung().subscribe(
            (res:any) => {
              this.userArray = res;
            }
          )
        }else{
          alert("Cập nhật người dùng thất bại !")
        }
      },
      (err:any) => {
        console.log(err);
        alert("Cập nhật người dùng thất bại");
      }
    )
  }

  //Xóa người dùng
  XoaUser(taikhoan: string) {
    console.log(taikhoan);

    this._userSV.deleteNguoiDung(taikhoan).subscribe(
      (res: any) => {
        console.log(res);
        // let index = this.userArray.DSND.findIndex( (nguoiDung) => nguoiDung.TaiKhoan === taikhoan);
        // this.userArray.DSND.splice(index,1);
        this._userSV.getDanhSachNguoiDung().subscribe(
          (res: any) => {
            this.userArray = res; 
          },
          (err: any) => {
          }
        )
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this._userSV.getDanhSachNguoiDung().subscribe(
      (res: any) => {
        // console.log(res);
        this.userArray = res;
        this.isLoading = false;
       
      },
      (err: any) => {
        // console.log(err);

      }
    )
  }

}

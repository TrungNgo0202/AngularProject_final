import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NguoidungApiService {
  ///////////////// Sử dụng user API/////////////////// 

  //thêm người dùng
  themnguoidung(form:any){
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung',form.value,{
      headers:{
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }
  
  //đăng nhập
  dangNhap(nguoiDung){
    return this._httpClient.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${nguoiDung.TaiKhoan}&matkhau=${nguoiDung.MatKhau}`,null,{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

    //Lấy danh sách người dùng
    getDanhSachNguoiDung(){
      return this._httpClient.get('http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01');
  
    }

    //Xóa người dùng
    deleteNguoiDung(nguoidung){
      return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${nguoidung}`)
    }

    //Cập nhật thông tin người dùng
    updateNguoiDung(form:any){
      return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin',form.value,{
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
    }

  constructor(private _httpClient : HttpClient) { }
}

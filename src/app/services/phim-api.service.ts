import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhimApiService {
 ///////////////// sử dụng phim API/////////////////// 

  //lấy chi tiết phim
  getChiTietPhim(maPhim){
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`);
  }

  //lấy danh sách phim
  getDanhSachPhim(){
    return this._httpClient.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10');
  }

  //lấy chi tiết lịch chiếu
  getChiTietLichChieu(MaLichChieu){
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`)
  }

  //Đặt vé
  DatVe(ve:any){
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe',ve,{
      headers:{
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

  //Lấy lịch sử đặt vé
  getFilmBookedHistory(nguoidung){
    return this._httpClient.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/XemLichSuDatVe?TaiKhoan=${nguoidung}`,null,{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  //Xóa phim
  deleteFilm(maphim){
    return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maphim}`);
  }

  //Thêm phim
  addFilm(form){
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi',form.value,{
      headers:{
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

  //Cập nhật phim
  updateFilm(form){
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim',form.value,{
      headers:{
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }
  
  constructor(private _httpClient : HttpClient) { }
}

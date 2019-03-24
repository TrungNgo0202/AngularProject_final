import { Component, OnInit, ViewChild } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { DanhSachPhim } from 'src/app/models/DanhSachPhim';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css'],
  providers: [DatePipe]
})
export class QuanLyPhimComponent implements OnInit {
  private filmArray: any[] = [];
  private isLoading: boolean = true;

  filmForm = new FormGroup({
    maphim: new FormControl(""),
    tenphim: new FormControl(""),
    trailer: new FormControl(""),
    hinhanh: new FormControl(""),
    mota: new FormControl(""),
    manhom: new FormControl(""),
    ngaykhoichieu: new FormControl(""),
    danhgia: new FormControl(""),

  })

  constructor(private _filmSV: PhimApiService, private datePipe: DatePipe) {

  }

  //Thêm phim
  @ViewChild('formThemPhim') formAddFilm: NgForm
  addFilm(form: any) {
    console.log(form.value);
    this.filmForm.setValue({
      maphim: "loz",
      tenphim: "loz",
      trailer: "loz",
      hinhanh: "loz",
      mota: "loz",
      manhom: "loz",
      ngaykhoichieu: "loz",
      danhgia: "loz"
    })

    let date = JSON.stringify(form.value.NgayKhoiChieu.year) + '-';

    if (form.value.NgayKhoiChieu.month < 10) {
      date = date + '0' + JSON.stringify(form.value.NgayKhoiChieu.month) + '-';
    } else {
      date = date + JSON.stringify(form.value.NgayKhoiChieu.month) + '-';
    }

    if (form.value.NgayKhoiChieu.day < 10) {
      date = date + '0' + JSON.stringify(form.value.NgayKhoiChieu.day);
    } else {
      date = date + JSON.stringify(form.value.NgayKhoiChieu.day);
    }

    date = date + 'T00:00:00'

    form.value.NgayKhoiChieu = date;

    this._filmSV.addFilm(form).subscribe(
      (res: any) => {
        console.log(res);
        alert("Thêm phim thành công");
        window.location.reload();
      },
      (err: any) => {
        console.log(err);
      }
    )

    this.formAddFilm.resetForm();
  }

  //Xóa phim
  deleteFilm(maphim) {
    this._filmSV.deleteFilm(maphim).subscribe(
      (res: any) => {
        console.log(res)
        let index = this.filmArray.findIndex((phim) => phim.MaPhim === maphim);
        this.filmArray.splice(index, 1);
      },
      (err: any) => {
        console.log(err);

      }
    )
  }

  //Đẩy giá trị của phim sắp update vào form
  setFilmValueToForm(film) {
    // console.log(film);
    this.filmForm = new FormGroup({
      maphim: new FormControl(film.MaPhim),
      tenphim: new FormControl(film.TenPhim),
      trailer: new FormControl(film.Trailer),
      hinhanh: new FormControl(film.HinhAnh),
      mota: new FormControl(film.MoTa),
      manhom: new FormControl(film.MaNhom),
      ngaykhoichieu: new FormControl(film.NgayKhoiChieu),
      danhgia: new FormControl(film.DanhGia),

    })
  }

  //Tiến hành update
  updateFilm(){
    console.log(this.filmForm);
    this._filmSV.updateFilm(this.filmForm).subscribe(
      (res:any) => {
        console.log(res);
        if (typeof res === 'object'){
          alert("Cập nhật phim thành công !");
          this._filmSV.getDanhSachPhim().subscribe(
            (res:any) => {
              this.filmArray = res;
            }
          )
        }else {
          alert("Cập nhật phim thất bại !")
        }
        // window.location.reload();
      },
      (err: any ) => {
        console.log(err);
        alert("Cập nhật phim thất bại");
      }
    )
  }

  ngOnInit() {


    this._filmSV.getDanhSachPhim().subscribe(

      (res: any) => {
        console.log(res);

        this.filmArray = res;
        this.isLoading = false;
      },
      (err: any) => {

      }
    )
  }

}

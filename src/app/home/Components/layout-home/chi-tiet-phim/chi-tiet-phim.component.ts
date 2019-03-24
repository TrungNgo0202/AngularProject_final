import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Phim } from 'src/app/models/Phim';
import { ActivatedRoute } from '@angular/router';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { UserService } from 'src/app/services/user.service';
import { LichChieuPhimComponent } from './lich-chieu-phim/lich-chieu-phim.component';
import { VePhimComponent } from './ve-phim/ve-phim.component';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.css']
})
export class ChiTietPhimComponent implements OnInit {
  Film_ID: string = null;  //mã phim
  Film_detail: Phim = null; // chi tiết phim
  Film_schedule: any[] = []; // lịch chiếu phim
  Film_chair_list: any[] = []; // danh sách ghế
  mangGheDangDat: any = []; // mảng ghế user đang đặt
  temp_malichchieu: any = null; // mã lịch chiếu hiện tại đang chọn
  Total_money: any; // tổng tiền
  User: string = null; //Tài khoản hiện tại
  status: boolean = false;

  constructor(private _ActivatedRoute: ActivatedRoute, private _filmSV: PhimApiService, private _user: UserService) { }

  //DOM đến component con, duyệt mảng và thay đổi status để đổi màu suất chiếu
  @ViewChildren(LichChieuPhimComponent) dsSuatChieu: QueryList<LichChieuPhimComponent>;
  get_InfoSuatChieu(maLichChieu: any) {
    if (maLichChieu != this.temp_malichchieu) {
      this._filmSV.getChiTietLichChieu(maLichChieu).subscribe(
        (res: any) => {
          //Đổi màu list suất chiếu
          for (let i = 0; i < this.dsSuatChieu.toArray().length; i++) {
            let SuatChieucomponent: LichChieuPhimComponent = this.dsSuatChieu.toArray()[i];
            if (SuatChieucomponent.Film_schedule_detail.MaLichChieu == maLichChieu) {
              SuatChieucomponent.Film_schedule_detail.status = true;
            }
            else SuatChieucomponent.Film_schedule_detail.status = false;
          }
          this.mangGheDangDat.splice(0, this.mangGheDangDat.length);
          console.log(this.mangGheDangDat);

          this.temp_malichchieu = maLichChieu;
          this.Film_chair_list = res.DanhSachGhe;
          this.Count_total_money();
        }
      )
    }
  }

  //Tính tổng tiền
  Count_total_money() {
    this.Total_money = 0;
    for (let i = 0; i < this.mangGheDangDat.length; i++) {
      this.Total_money += this.mangGheDangDat[i].GiaVe;
    }
  }

  //Khi user bấm vào ghế muốn đặt hoặc hủy ghế vừa đặt
  DatVe(gheDangDat: any) {
    if (gheDangDat.dangDat) {
      this.mangGheDangDat.push(gheDangDat); //thêm vào mảng các ghế user đang đặt
      this.Count_total_money(); //Tính lại tổng tiền
    }
    else {
      for (let i = 0; i < this.mangGheDangDat.length; i++) { //Khi khách hàng hủy ghế
        let gheDD = this.mangGheDangDat[i];
        if (gheDangDat.MaGhe == gheDD.MaGhe) {
          this.mangGheDangDat.splice(i, 1);
        }
      }
      this.Count_total_money();
    }

  }

  //Tiến hành đặt phim
  Proceed_booking_ticket() {
    // this.Ticket_booked.TaiKhoanNguoiDung = this.User_ID;
    if (this.mangGheDangDat.length != 0) {
      let ve = { TaiKhoanNguoiDung: this.User, MaLichChieu: this.temp_malichchieu, DanhSachVe: this.mangGheDangDat }
      // console.log(ve);
      this._filmSV.DatVe(ve).subscribe(
        (res) => {
          console.log(res);
          
          
          alert("Đặt vé thành công");
          //Load lại danh sách ghế, đổi màu đỏ cho những ghế vừa đặt
          this._filmSV.getChiTietLichChieu(this.temp_malichchieu).subscribe(
            (res: any) => {
              this.Film_chair_list = res.DanhSachGhe;
            }
          )
          this.mangGheDangDat.splice(0, this.mangGheDangDat.length);
          this.Count_total_money();
        },
        (err) => {
          console.log(err);

        }
      )
    } else {
      alert("Vui lòng chọn ghế muốn đặt");
    }
  }


  @ViewChildren(VePhimComponent) dsTagAppVe: QueryList<VePhimComponent>;
  HuyGhe(MaGhe: string) {
    this.mangGheDangDat.forEach((ghe: any, index) => {
      if (MaGhe == ghe.MaGhe) {
        this.mangGheDangDat.splice(index, 1)
      }
    });
    for (let i = 0; i < this.dsTagAppVe.toArray().length; i++) {
      let tagVeComponent: VePhimComponent = this.dsTagAppVe.toArray()[i];
      if (tagVeComponent.ghe.MaGhe == MaGhe) {
        tagVeComponent.dangDat = false;
      }
    }
    this.Count_total_money();
  };

  ngOnInit() {

    //Lấy user hiện tại qua service + observable
    this._user.as_user.subscribe(
      (res) => {
        this.User = res.TaiKhoan;
        console.log(this.User);

      }
    )

    this._ActivatedRoute.params.subscribe(
      (res) => {
        this.Film_ID = res["maphim"]; //lấy mã phim

        this._filmSV.getChiTietPhim(this.Film_ID).subscribe(
          (res: any) => {
            this.Film_schedule = res.LichChieu; //Lấy lịch chiếu
            this.Film_detail = res; //Lấy chi tiết phim
            let trailerArr = this.Film_detail.Trailer.split('watch?v=');//Sửa link trailer
            this.Film_detail.Trailer = trailerArr[0] + 'embed/' + trailerArr[1];
          }
        )
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lichsudatphim',
  templateUrl: './lichsudatphim.component.html',
  styleUrls: ['./lichsudatphim.component.css']
})
export class LichsudatphimComponent implements OnInit {
  private film_Booked_History_List: any[] = [];
  private user: any = null;
  constructor(private _filmSV:PhimApiService, private _user:UserService) { }

  ngOnInit() {

    this._user.as_user.subscribe(
      (res:any) => {
        //Lấy lịch sử đặt phim
        this._filmSV.getFilmBookedHistory(res.TaiKhoan).subscribe(
          (res:any) =>{
            this.user = res.TaiKhoan;
            this.film_Booked_History_List = res.DanhSachVeDaDat;
          }
        ),
          (err) =>{
            console.log(err);
            
          }
      }
    )
  
  }

}

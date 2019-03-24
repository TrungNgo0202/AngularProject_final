import { Component, OnInit } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';
import { DanhSachPhim } from 'src/app/models/DanhSachPhim';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.css']
})
export class PhimComponent implements OnInit {
  danhSachPhim : DanhSachPhim ;

  constructor(private _filmSV:PhimApiService) { }

  ngOnInit() {
    this._filmSV.getDanhSachPhim().subscribe(
      (res:any) => {
        console.log(res);
        this.danhSachPhim = res;
        
      },
      (err:any) => {
        console.log(err);
        
      }
    )

  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhimApiService } from 'src/app/services/phim-api.service';

@Component({
  selector: 'app-lich-chieu-phim',
  templateUrl: './lich-chieu-phim.component.html',
  styleUrls: ['./lich-chieu-phim.component.css']
})
export class LichChieuPhimComponent implements OnInit {
  @Input() Film_schedule_detail: any = null;
  @Output() event_getinfoSuatChieu = new EventEmitter();

  get_InfoSuatChieu(){
    let maLichChieu =  this.Film_schedule_detail.MaLichChieu;
    console.log(maLichChieu);
    
    this.event_getinfoSuatChieu.emit(maLichChieu);
  }

  constructor(private _flimSV:PhimApiService) { }

  ngOnInit() {

    this._flimSV.getChiTietLichChieu(this.Film_schedule_detail.MaLichChieu).subscribe(
      (res:any) => {
      },
      (err:any) => {
      }
    )

  }

}

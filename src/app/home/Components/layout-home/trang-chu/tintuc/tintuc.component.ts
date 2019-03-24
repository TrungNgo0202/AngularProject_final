import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {

  loaiTinTuc:string = 'KhuyenMai';
  constructor() { }
  ChonLoaiTin(val){
    this.loaiTinTuc = val;
  }
  ngOnInit() {
  }
}

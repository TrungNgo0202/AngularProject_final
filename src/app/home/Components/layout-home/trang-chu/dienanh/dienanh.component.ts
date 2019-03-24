import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dienanh',
  templateUrl: './dienanh.component.html',
  styleUrls: ['./dienanh.component.css']
})
export class DienanhComponent implements OnInit {
  DanhSachDienAnh = [
    {TieuDeTinTuc:"Marvel mua lại DC",HinhAnh:'../../../assets/img/diem-mat-dan-sao-dinh-dam-trong-bom-tan-lien-minh-cong-ly-15106519084263.jpg'},
    {TieuDeTinTuc:"Ferdinand",HinhAnh:'../../../assets/img/fast-and-furious-9-co-bien-kich-moi-ngay-phat-hanh-cua-phim-doi-tu-2019-sang-2020-15263575332878.jpg'},
    {TieuDeTinTuc:"Trùm Hương Cảng",HinhAnh:'../../../assets/img/nhom-losers-club-lon-dang-dan-dan-lo-dien-trong-sieu-pham-it-chapter-two-15265444875493.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

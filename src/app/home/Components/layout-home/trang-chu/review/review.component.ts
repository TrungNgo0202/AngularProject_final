import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  DanhSachReview = [
    {TieuDeSuKien:"Sự Kiện KFC",HinhAnh:'http://billnguyen.com/wp-content/uploads/2014/04/Event-Showcase1-2.jpg'},
    {TieuDeSuKien:"Sự Kiện Lotte",HinhAnh:'https://static.ybox.vn/2018/3/7/6196b406-2228-11e8-b466-56c566ee3692.png'},
    {TieuDeSuKien:"Sự Kiện Texas",HinhAnh:'http://cafefcdn.com/thumb_w/650/2017/2061185419-kien-nhan-1501344528133.jpg'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

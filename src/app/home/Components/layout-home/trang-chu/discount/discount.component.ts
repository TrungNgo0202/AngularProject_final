import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  danhSachKhuyenMai = [
    {TenKhuyenMai:"Ngày Tri Ân Của Sigma Duck Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng",HinhAnh:'../../../../assets/img/khuyenmai1.jpg',desc:'Từ lâu, chương trình Ngày Tri Ân Nhằm tạo điều kiện thuận lợi hơn cho các khách hàng thả ga xem phim đã trở nên quen thuộc với các khách hàng thân yêu của Sigma Duck Cinema.'},
    {TenKhuyenMai:"Cà Thẻ Tẹt Ga – Cuối Tuần Thật Đã",HinhAnh:'../../../../assets/img/khuyenmai2.jpg',desc:'Sigma Duck Cinema dành tặng các Stars chương trình ưu đãi vô cùng hấp dẫn '},
    {TenKhuyenMai:"Thứ 4 Vui Vẻ - Quẹt Thẻ Liền Tay",HinhAnh:'../../../../assets/img/khuyenmai3.jpg',desc:'Từ ngày 21.08.2018 – 31.01.2019, Sigma Duck Cinema dành tặng các Stars chương trình ưu đãi vô cùng hấp dẫn Thứ 4 Vui Vẻ - Quẹt Thẻ Liền Tay.'},
    {TenKhuyenMai:"Giá Vé U22  - Đồng Giá 45k",HinhAnh:'../../../../assets/img/khuyenmai4.jpg',desc:'Từ 05/06, chỉ 45k/vé 2D lại thả ga bắp nước tại Sigma Duck Cinema.'},
    {TenKhuyenMai:"Thông Báo Ngừng Áp Dụng Voucher WIN",HinhAnh:'../../../../assets/img/khuyenmai5.jpg',desc:'Từ ngày 05.03.2019, Sigma Duck Cinema chính thức ngừng áp dụng voucher WIN (Voucher được sử dụng khi các Stars mua 01vé 2D và combo 2 trở lên) trên toàn hệ thống rạp.'},
    {TenKhuyenMai:"Tôn Vinh Nhan Sắc – Đặc Cách Yêu Thương",HinhAnh:'../../../../assets/img/khuyenmai6.jpg',desc:'Sigma Duck Cinema dành tặng hàng chục ngàn phần quà cho một nửa thế giới từ 07/03-09/03/2019!'},
    {TenKhuyenMai:"Xem Phim Thả Ga, Mang Xe Về Nhà",HinhAnh:'../../../../assets/img/khuyenmai7.jpg',desc:'Còn gì tuyệt vời hơn khi bắt đầu năm mới với những món quà siêu hấp dẫn đến từ Galaxy Cà Mau.'},
    {TenKhuyenMai:"Hướng Dẫn Sử Dụng Máy Gbox",HinhAnh:'../../../../assets/img/khuyenmai8.jpg',desc:'Gbox - Mua Vé Dễ Dàng, Tiết Kiệm Thời Gian'},
    // {TenKhuyenMai:"Thông Báo Về Chương Trình Thành Viên 2018",HinhAnh:'../../../../assets/img/khuyenmai9.jpg',desc:'Năm mới, Sigma Duck Cinema  cũng dành cho các Stars những ưu đãi mới.',href:'https://www.galaxycine.vn/khuyen-mai/thong-bao-ve-chuong-trinh-thanh-vien-2018'},
    // {TenKhuyenMai:"Đặt Vé Online - Không Lo Trễ Nải",HinhAnh:'../../../../assets/img/khuyenmai10.jpg',desc:'Giờ đây, chỉ với một thao tác nhỏ là các Stars có thể đến thẳng phòng chiếu xem phim ngay lập tức.',href:'https://www.galaxycine.vn/khuyen-mai/dat-ve-online-khong-lo-tre-nai'},
  ]
  constructor() { }

  ngOnInit() {
  }

}

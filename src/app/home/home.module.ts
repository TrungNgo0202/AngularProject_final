import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/layout-home/header/header.component';
import { FooterComponent } from './Components/layout-home/footer/footer.component';
import { TrangChuComponent } from './Components/layout-home/trang-chu/trang-chu.component';
import { SliderComponent } from './Components/layout-home/trang-chu/slider/slider.component';
import { PhimComponent } from './Components/layout-home/trang-chu/phim/phim.component';
import { DiscountComponent } from './Components/layout-home/trang-chu/discount/discount.component';
import { InformationComponent } from './Components/layout-home/trang-chu/information/information.component';
import { LayoutHomeComponent } from './Components/layout-home/layout-home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipeModule } from '../pipe/pipe.module';
import { DiscountItemComponent } from './Components/layout-home/trang-chu/discount/discount-item/discount-item.component';
import { PhimItemComponent } from './Components/layout-home/trang-chu/phim/phim-item/phim-item.component';
import { ChiTietPhimComponent } from './Components/layout-home/chi-tiet-phim/chi-tiet-phim.component';
import { LichChieuPhimComponent } from './Components/layout-home/chi-tiet-phim/lich-chieu-phim/lich-chieu-phim.component';
import { VePhimComponent } from './Components/layout-home/chi-tiet-phim/ve-phim/ve-phim.component';
import { LichsudatphimComponent } from './Components/layout-home/lichsudatphim/lichsudatphim.component';
import { TintucComponent } from './Components/layout-home/trang-chu/tintuc/tintuc.component';
import { DienanhComponent } from './Components/layout-home/trang-chu/dienanh/dienanh.component';
import { DienanhItemComponent } from './Components/layout-home/trang-chu/dienanh/dienanh-item/dienanh-item.component';
import { ReviewComponent } from './Components/layout-home/trang-chu/review/review.component';
import { ReviewItemComponent } from './Components/layout-home/trang-chu/review/review-item/review-item.component';
import { ContactComponent } from './Components/layout-home/trang-chu/contact/contact.component';
import { ContactDetailComponent } from './Components/layout-home/trang-chu/contact/contact-detail/contact-detail.component';
import { ContactFormComponent } from './Components/layout-home/trang-chu/contact/contact-form/contact-form.component';


@NgModule({
  declarations: [LayoutHomeComponent, HeaderComponent, FooterComponent, TrangChuComponent, SliderComponent, PhimComponent, DiscountComponent, InformationComponent, DiscountItemComponent, PhimItemComponent, ChiTietPhimComponent, LichChieuPhimComponent, VePhimComponent, LichsudatphimComponent, TintucComponent, DienanhComponent, DienanhItemComponent, ReviewComponent, ReviewItemComponent, ContactComponent, ContactDetailComponent, ContactFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    PipeModule
  ],
  exports:[
    LayoutHomeComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    PhimComponent,
    DiscountComponent,
    InformationComponent
  ]
})
export class HomeModule { }

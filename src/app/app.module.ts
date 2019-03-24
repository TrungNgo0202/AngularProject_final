import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { SigninComponent } from './form/signin/signin.component';
import { SignupComponent } from './form/signup/signup.component';
import { FormModule } from './form/form.module';
import { LoginGuard } from './guard/login.guard';
import { AdminGuard } from './guard/admin.guard';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { LayoutHomeComponent } from './home/Components/layout-home/layout-home.component';
import { ChiTietPhimComponent } from './home/Components/layout-home/chi-tiet-phim/chi-tiet-phim.component';
import { LichsudatphimComponent } from './home/Components/layout-home/lichsudatphim/lichsudatphim.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from './admin/admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes : Routes = [
  {path:'signup',component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  // {path:'users',component: DSNDComponent},
  {path: 'home',component: LayoutHomeComponent,children:[]},
  {path: 'chitiet/:maphim',component:ChiTietPhimComponent,canActivate:[LoginGuard,]},
  {path: 'admin',component:AdminLayoutComponent,canActivate:[AdminGuard,]},
  {path: 'LichSuDatPhim',component:LichsudatphimComponent,canActivate:[LoginGuard],},
  {path: 'QuanLyNguoiDung',component: QuanLyNguoiDungComponent,canActivate:[AdminGuard]},
  {path: 'QuanLyPhim',component:QuanLyNguoiDungComponent,canActivate:[AdminGuard]},
  {path:'**', redirectTo:"home"}
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormModule,
    AdminModule,
    HomeModule,
    NgbModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

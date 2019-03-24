import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { QuanLyNguoiDungComponent } from './admin-layout/quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './admin-layout/quan-ly-phim/quan-ly-phim.component';
import { RouterModule } from '@angular/router';
import { UserFilterPipe } from './admin-layout/user-filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipeModule } from '../pipe/pipe.module';
import { MaterialModule } from 'src/material/material.module';


@NgModule({
  declarations: [AdminLayoutComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent, UserFilterPipe],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule,
    PipeModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class AdminModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  private status: boolean = true;
  private temp_status: boolean = true;
  private doitabFlag:boolean = false;

  DoiTab(status){
    console.log(status);
    
    this.status = status;
    if (this.status != this.temp_status){
      this.temp_status = this.status;
    }
  }



  constructor() { }

  ngOnInit() {
  }

}

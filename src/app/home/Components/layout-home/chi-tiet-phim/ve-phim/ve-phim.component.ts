import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ve-phim',
  templateUrl: './ve-phim.component.html',
  styleUrls: ['./ve-phim.component.css']
})
export class VePhimComponent implements OnInit {
  @Input() ghe:any ;
  @Input() index:number;
  @Output() eventDatVe = new EventEmitter();
  dangDat:boolean = false;
  

    DatVe(){
    this.dangDat = !this.dangDat;
    let gheDangDat = {MaGhe:this.ghe.MaGhe, GiaVe:this.ghe.GiaVe, dangDat:this.dangDat, STT:this.ghe.STT}
    this.eventDatVe.emit(gheDangDat);
  };

  constructor() { }

  ngOnInit() {
  }

}

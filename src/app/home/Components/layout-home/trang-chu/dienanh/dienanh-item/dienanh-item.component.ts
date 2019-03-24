import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dienanh-item',
  templateUrl: './dienanh-item.component.html',
  styleUrls: ['./dienanh-item.component.css']
})
export class DienanhItemComponent implements OnInit {
  @Input() DienAnh;
  constructor() { }

  ngOnInit() {
  }

}

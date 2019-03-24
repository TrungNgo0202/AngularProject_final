import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discount-item',
  templateUrl: './discount-item.component.html',
  styleUrls: ['./discount-item.component.css']
})
export class DiscountItemComponent implements OnInit {
  @Input() ItemKhuyenMai:any;
  constructor() { }

  ngOnInit() {
  }

}

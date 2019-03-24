import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/models/Phim';

@Component({
  selector: 'app-phim-item',
  templateUrl: './phim-item.component.html',
  styleUrls: ['./phim-item.component.css']
})
export class PhimItemComponent implements OnInit {
  @Input() phim: Phim;

  constructor() { }

  ngOnInit() {
  }

}

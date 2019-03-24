import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('contactform') formContact:NgForm
  Contact(form:any){
    console.log(form.value);
  }
  constructor() { }

  ngOnInit() {
  }

}

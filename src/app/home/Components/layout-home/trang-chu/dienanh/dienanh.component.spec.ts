import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienanhComponent } from './dienanh.component';

describe('DienanhComponent', () => {
  let component: DienanhComponent;
  let fixture: ComponentFixture<DienanhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienanhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

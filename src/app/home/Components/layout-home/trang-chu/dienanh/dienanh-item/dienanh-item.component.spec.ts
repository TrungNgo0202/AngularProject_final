import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DienanhItemComponent } from './dienanh-item.component';

describe('DienanhItemComponent', () => {
  let component: DienanhItemComponent;
  let fixture: ComponentFixture<DienanhItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DienanhItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DienanhItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

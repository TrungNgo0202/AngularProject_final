import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichsudatphimComponent } from './lichsudatphim.component';

describe('LichsudatphimComponent', () => {
  let component: LichsudatphimComponent;
  let fixture: ComponentFixture<LichsudatphimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichsudatphimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichsudatphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

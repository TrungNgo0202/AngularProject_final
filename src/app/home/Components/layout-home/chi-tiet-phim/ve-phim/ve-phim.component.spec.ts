import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VePhimComponent } from './ve-phim.component';

describe('VePhimComponent', () => {
  let component: VePhimComponent;
  let fixture: ComponentFixture<VePhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VePhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VePhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

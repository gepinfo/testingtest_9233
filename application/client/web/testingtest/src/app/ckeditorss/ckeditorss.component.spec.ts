import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CkeditorssComponent } from './ckeditorss.component';

describe('CkeditorssComponent', () => {
  let component: CkeditorssComponent;
  let fixture: ComponentFixture<CkeditorssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CkeditorssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CkeditorssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
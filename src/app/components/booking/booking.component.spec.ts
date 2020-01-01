import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  const el = (selector) => fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingComponent ],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    const homes = require('./../../../assets/homes.json');
    const homeData = TestBed.get(MAT_DIALOG_DATA);
    homeData.home = homes[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    expect(el('[id="title"]').textContent).toContain('Home 1');
  });

  it('should contain price', () => {
    expect(el('[id="price"]').textContent).toContain('100');
  });

  it('should show check in input field', () => {
    expect(el('[id="check-in"]')).toBeTruthy();
  });
  
  it('should show check out input field', () => {
    expect(el('[id="check-out"]')).toBeTruthy();
  });

  // Should show total amount
  // Should book the home on clicking book button
});

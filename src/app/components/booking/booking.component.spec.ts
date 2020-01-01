import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  const el = (selector) => fixture.nativeElement.querySelector(selector);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
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
    expect(el('[id="title"]').textContent).toContain('Book Home 1');
  });

  it('should contain price', () => {
    expect(el('[id="price"]').textContent).toContain('$100 per night');
  });

  it('should show check in input field', () => {
    expect(el('[id="check-in"]')).toBeTruthy();
  });
  
  it('should show check out input field', () => {
    expect(el('[id="check-out"]')).toBeTruthy();
  });

  it('should show total', () => {
    const checkIn = el('[id="check-in"] input');
    const checkOut = el('[id="check-out"] input');
    checkIn.value = '01/01/19';
    checkIn.dispatchEvent(new Event('input'));
    checkOut.value = '04/01/19';
    checkOut.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(el('[id="total"]').textContent).toContain('Total: $300');
  });
  
  // Should book the home on clicking book button
});

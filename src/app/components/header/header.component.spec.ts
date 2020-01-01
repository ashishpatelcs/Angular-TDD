import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have logo', () => {
    expect(fixture.nativeElement.querySelector('[id="logo"]')).toBeTruthy();
  });

  it('should have search bar', () => {
    expect(fixture.nativeElement.querySelector('[id="search"]')).toBeTruthy();
  });

  it('should have menu', () => {
    expect(fixture.nativeElement.querySelector('[id="menu"]')).toBeTruthy();
  });

  it('should have filters: home type, dates, guests, price, rooms and amenities', () => {
    expect(fixture.nativeElement.querySelector('[id="home-type"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[id="dates"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[id="guests"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[id="price"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[id="rooms"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[id="amenities"]')).toBeTruthy();
  });
});

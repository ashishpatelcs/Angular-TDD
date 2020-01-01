import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  checkIn;
  checkOut;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data);
  }

  calculateTotal() {
    return moment(this.checkOut, 'DD/MM/YY').diff(moment(this.checkIn, 'DD/MM/YY'), 'days') * +this.data.home.price;
  }

}

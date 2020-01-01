import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {
  homes$: Observable<any>;

  constructor(private dataService: DataService, private dialogService: DialogService) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes();
  }

  openDialog(home) {
    const data = { home };
    this.dialogService.open(BookingComponent, { data, width: 350 });
  }
}

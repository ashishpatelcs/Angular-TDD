import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';

import { HomesComponent } from './homes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataService } from 'src/app/services/data.service';
import { of } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomesComponent ],
      providers: [
        { provide: DataService, useFactory: () => spyOnClass(DataService) },
        { provide: DialogService, useFactory: () => spyOnClass(DialogService) }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    dialogService = TestBed.get(DialogService);

    dataService.getHomes.and.returnValue(of(require('./../../../assets/homes.json')));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list of homes', () => {
    expect(fixture.nativeElement.querySelectorAll('[id="home"]').length).toBe(3);
  });

  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[id="home"]');
    expect(home.querySelector('[id="title"]')).toBeTruthy();
    expect(home.querySelector('[id="location"]')).toBeTruthy();
    expect(home.querySelector('[id="image"]')).toBeTruthy();
  });

  it('should show home book button', () => {
    const home = fixture.nativeElement.querySelector('[id="home"]');
    expect(home.querySelector('[id="book-btn"]')).toBeTruthy();
  });

  it('should call dialog service to open modal on book button click', () => {
    const bookBtn = fixture.nativeElement.querySelector('[id="home"] button');
    bookBtn.click();
    expect(dialogService.open).toHaveBeenCalled();
  });
});

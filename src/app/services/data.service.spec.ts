import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('DataService', () => {
  let httpClient: HttpClient;
  let dataService: DataService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should make api call to get homes list', () => {
    httpClient = TestBed.get(HttpClient);
    const homesMockData = [
      { title: 'Home 1', location: 'Mumbai', image: 'img.jpg' },
      { title: 'Home 2', location: 'Bangalore', image: 'img.jpg' },
      { title: 'Home 3', location: 'Chennai', image: 'img.jpg' }
    ];

    spyOn(httpClient, 'get').and.returnValue(of(homesMockData));

    dataService = TestBed.get(DataService);
    const spy = jasmine.createSpy('spy');

    dataService.getHomes().subscribe(spy);

    expect(spy).toHaveBeenCalledWith(homesMockData);

    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });
});

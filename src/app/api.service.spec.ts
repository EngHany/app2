import { TestBed, inject } from '@angular/core/testing';

//import { ApiService } from './api.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});

export class ApiService {
  
  
}
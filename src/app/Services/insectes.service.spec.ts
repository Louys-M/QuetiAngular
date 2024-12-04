import { TestBed } from '@angular/core/testing';

import { InsectesService } from './insectes.service';

describe('InsectesService', () => {
  let service: InsectesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsectesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

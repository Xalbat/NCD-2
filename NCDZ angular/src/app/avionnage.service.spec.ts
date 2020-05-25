import { TestBed } from '@angular/core/testing';

import { AvionnageService } from './avionnage.service';

describe('AvionnageService', () => {
  let service: AvionnageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvionnageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

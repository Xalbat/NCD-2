import { TestBed } from '@angular/core/testing';

import { ParachutisteService } from './parachutiste.service';

describe('ParachutisteService', () => {
  let service: ParachutisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParachutisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

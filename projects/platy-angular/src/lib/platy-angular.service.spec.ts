import { TestBed } from '@angular/core/testing';

import { PlatyAngularService } from './platy-angular.service';

describe('PlatyAngularService', () => {
  let service: PlatyAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatyAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

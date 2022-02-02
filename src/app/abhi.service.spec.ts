import { TestBed } from '@angular/core/testing';

import { AbhiService } from './abhi.service';

describe('AbhiService', () => {
  let service: AbhiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbhiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

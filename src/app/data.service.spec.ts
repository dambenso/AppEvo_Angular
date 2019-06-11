import { TestBed, inject } from '@angular/core/testing';

import { ProgressRESTService } from './data.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressRESTService]
    });
  });

  it('should be created', inject([ProgressRESTService], (service: ProgressRESTService) => {
    expect(service).toBeTruthy();
  }));
});

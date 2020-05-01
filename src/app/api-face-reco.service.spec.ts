import { TestBed } from '@angular/core/testing';

import { ApiFaceRecoService } from './api-face-reco.service';

describe('ApiFaceRecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiFaceRecoService = TestBed.get(ApiFaceRecoService);
    expect(service).toBeTruthy();
  });
});

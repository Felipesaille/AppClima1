import { TestBed } from '@angular/core/testing';

import { IpInformationService } from './ip-information.service';

describe('IpInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpInformationService = TestBed.get(IpInformationService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ClimaIpService } from './clima-ip.service';

describe('ClimaIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClimaIpService = TestBed.get(ClimaIpService);
    expect(service).toBeTruthy();
  });
});

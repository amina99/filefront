import { TestBed } from '@angular/core/testing';

import { ServicesDemandeService } from './services-demande.service';

describe('ServicesDemandeService', () => {
  let service: ServicesDemandeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesDemandeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { ProfessionalsService } from './professionals.service';

describe('ProfessionalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfessionalsService]
    });
  });

  it('should be created', inject([ProfessionalsService], (service: ProfessionalsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { ClientManagementService } from './client-management.service';

describe('ClientManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientManagementService]
    });
  });

  it('should ...', inject([ClientManagementService], (service: ClientManagementService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { UserEventReportsService } from './user-event-reports.service';

describe('UserEventReportsService', () => {
  let service: UserEventReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEventReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { JobService } from './job.service';
import { DataResponse } from '../component/job-model';

describe('JobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobService = TestBed.get(JobService);
    expect(service).toBeTruthy();
  });

  // it('fetches data from api', () => {
  //   const service: JobService = TestBed.get(JobService);
  //   expect(service.GetJobsData()).toBeTruthy();
  // });
});

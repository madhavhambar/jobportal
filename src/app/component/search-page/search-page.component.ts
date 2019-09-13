import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';
import { Job, DataResponse } from '../job-model';
import * as lodash from 'lodash';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchkey: string;
  jobsDataResponse: DataResponse;
  jobsToDisplay: Job[];
  jobsPage: Job[];

  sortby = 'Relevance';

  pageSize = 10;
  pageNumber = 1;

  constructor(private jobService: JobService) { }

  async ngOnInit() {
    this.jobsDataResponse = await this.jobService.GetJobsData();
    console.log(this.jobsDataResponse);
  }

  Search() {
    this.jobsToDisplay = this.jobsDataResponse.data.filter(e => {
      return e.title.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
        || e.companyname.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
        || e.location.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1
        || e.skills.toLowerCase().indexOf(this.searchkey.toLowerCase()) > -1;
    });
    this.paginate(1);
  }

  paginate(pageNumber: number) {
    this.pageNumber = pageNumber;
    --pageNumber;
    this.jobsPage = this.jobsToDisplay.slice(pageNumber * this.pageSize, (pageNumber + 1) * this.pageSize);
  }

  KeyUp(e) {
    // console.log(e);
    if (e.key === 'Enter') {
      this.Search();
    }
  }

  SortIt() {
    console.log(this.sortby);
    if (this.sortby === 'Location') {
      this.jobsToDisplay = lodash.sortBy(this.jobsToDisplay, e => e.location);
      this.paginate(1);
    } else if (this.sortby === 'Experience') {
      this.jobsToDisplay = lodash.sortBy(this.jobsToDisplay, e => e.experience);
      this.paginate(1);
    } else {
      this.Search();
    }
  }

}

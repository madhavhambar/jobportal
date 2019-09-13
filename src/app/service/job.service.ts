import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job, DataResponse } from '../component/job-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }

    async GetJobsData(): Promise<DataResponse> {
      const promise = new Promise<DataResponse>((resolve, reject) =>
        this.http.get('https://cors-anywhere.herokuapp.com/https://jobsqared.herokuapp.com/jobs').subscribe(
          (response: DataResponse) => {
            console.log(response);
            resolve(response);
          },
          err => { console.log(err); reject(err); }
        )
      );
      return promise;
  }

}

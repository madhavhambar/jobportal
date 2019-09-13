export class Job {
    _id: string;
    applylink: string;
    companyname: string;
    created: Date | string;
    enddate: Date | string;
    experience: string;
    jd: string;
    location: string;
    salary: number;
    skills: string;
    source: string;
    startdate: Date | string;
    timestamp: number;
    title: string;
    type: string;
}

export class DataResponse {
    data: Job[];
    len: number;
}

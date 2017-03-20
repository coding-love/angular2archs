import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ReportOverview } from './report-overview';

const dummyReports: ReportOverview[] = [
  new ReportOverview('Ninja Report', 50),
  new ReportOverview('Minority Report', 10),
  new ReportOverview('The Lennon Report', 20)
];

@Injectable()
export class ReportsService {

  public loadReports(): Observable<ReportOverview[]> {
    return new Observable<ReportOverview[]>(subscriber => {
      setTimeout(() => {
        subscriber.next(dummyReports);
        subscriber.complete();
      }, 2000);
    });
  }


}

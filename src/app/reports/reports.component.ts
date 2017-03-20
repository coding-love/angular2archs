import { ReportOverview } from '../report-overview';
import { ReportsService } from '../reports.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html'
})
export class ReportsComponent implements OnInit {

  public reports: Observable<ReportOverview[]>;
  public loading: boolean;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.loading = true;
    this.reports = this.reportsService
      .loadReports()
      .finally(() => this.loading = false);
  }

}

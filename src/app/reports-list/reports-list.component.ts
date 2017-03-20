import { ReportOverview } from '../report-overview';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html'
})
export class ReportsListComponent {
  public console = console;
  @Input()
  public reports: ReportOverview[] = [];
}

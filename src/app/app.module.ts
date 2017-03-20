import { ReportsService } from './reports.service';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportsListComponent } from './reports-list/reports-list.component';

const routes: Route[] = [
  { path: '', component: ReportsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ReportsComponent,
    ReportsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ReportsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

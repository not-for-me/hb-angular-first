import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import { ResultGraphComponent } from './check-list/check-list-result/result-graph/result-graph.component';

import { CheckListDataService } from './check-list/check-list-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent,
    ResultGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CheckListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

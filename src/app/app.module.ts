import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FxDataService } from './fx-data.service';

import { Sse } from './sse';
import { PairHistoryComponent } from './pair-history/pair-history.component';
import { PairHistoryViewComponent } from './pair-history-view/pair-history-view.component';
import { PairListComponent } from './pair-list/pair-list.component';
import { PairListViewComponent } from './pair-list-view/pair-list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PairHistoryComponent,
    PairHistoryViewComponent,
    PairListComponent,
    PairListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Sse, FxDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

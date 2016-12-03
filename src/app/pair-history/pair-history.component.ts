import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';

import { FxDataService } from '../fx-data.service';
import { FxQuote, placeholderQuote } from '../fx-quote';

@Component({
  selector: 'app-pair-history',
  templateUrl: './pair-history.component.html'
})
export class PairHistoryComponent {

  latest: Observable<FxQuote[]>;

  constructor(fxDataService: FxDataService) {
    this.latest = Observable.concat(
      Observable.range(1, 10).map(v => placeholderQuote),
      fxDataService.fxData
        .filter(fx => fx.symbol === 'EUR/USD')
    )
      .bufferCount(10, 1);
  }

}

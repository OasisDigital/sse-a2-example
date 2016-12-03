import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/scan';

import { FxDataService } from '../fx-data.service';
import { FxQuote } from '../fx-quote';

@Component({
  selector: 'app-pair-list',
  templateUrl: './pair-list.component.html'
})
export class PairListComponent {
  latestQuoteForEachSymbol: Observable<FxQuote[]>;

  constructor(fxDataService: FxDataService) {
    this.latestQuoteForEachSymbol = fxDataService.fxData
      .scan((acc, curr) => acc.set(curr.symbol, curr), new Map())
      .map(acc => {
        const arr = [];
        acc.forEach(val =>  arr.push(val) );
        return arr;
      });
  }
}

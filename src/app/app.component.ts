import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/concat';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/range';

import { FxDataService } from './fx-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latest: Observable<any>;

  constructor(fxDataService: FxDataService) {
    this.latest = Observable.concat(
      Observable.range(1, 10).map(v => { }),
      fxDataService.fxData
      //.filter(fx => fx.symbol === 'EUR/USD')
    )
      .bufferCount(10, 1);
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/filter';

import { Sse } from './sse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Sse]
})
export class AppComponent {
  latest: Observable<any>;

  constructor(sse: Sse) {
    this.latest = sse
      .observe('//localhost:8005/lowfreq')
      //.filter(fx => fx.symbol === 'EUR/USD')
      .bufferCount(5, 1);
  }
}

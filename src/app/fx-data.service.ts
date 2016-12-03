import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Sse } from './sse';

@Injectable()
export class FxDataService {
  fxData: Observable<any>;

  constructor(sse: Sse) {
    this.fxData = sse.observe('//localhost:8005/lowfreq');
  }
}

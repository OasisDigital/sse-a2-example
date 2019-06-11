import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

import { FxQuote } from './fx-quote';
import { Sse } from './sse';

@Injectable({
  providedIn: 'root'
})
export class FxDataService {
  fxData: Observable<FxQuote>;

  constructor(sse: Sse) {
    this.fxData = sse.observe('//localhost:8005/lowfreq').pipe(share());
  }
}

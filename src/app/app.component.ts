import { Component, NgZone } from '@angular/core';

import { Sse } from './sse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Sse]
})
export class AppComponent {
  title = 'app works!';

  constructor(sse: Sse) {
    sse.observe('//localhost:8005/lowfreq').subscribe(d => this.title = d);
  }
}

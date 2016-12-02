import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(zone: NgZone) {
    const EventSource: any = window['EventSource'];
    const fx = new EventSource('//localhost:8005/lowfreq');
    fx.onmessage = evt => {
      const data = evt.data;
      console.log(data);
      // This is "the new scope.$apply"
      zone.run(() => this.title = data);
    };
  }
}

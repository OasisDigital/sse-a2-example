import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    // const EventSource: any = window['EventSource'];
    // const fx = new EventSource('//localhost:8005/lowfreq');
    // fx.onmessage = function (evt) {
    //   const data = evt.data;
    //   console.log(data);
    // };
  }
}

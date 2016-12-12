import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pair-history-chart',
  templateUrl: './pair-history-chart.component.html'
})
export class PairHistoryChartComponent implements OnInit {
  @Input() width: number;
  @Input() height: number;
  @Input() quotes: any;
  @Input() pair: string;

  ngOnInit() {
  }

}

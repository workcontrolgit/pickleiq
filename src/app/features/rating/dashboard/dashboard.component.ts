import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rating-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [RouterLink],
})
export class DashboardComponent implements OnInit {
  itemList: any;

  model20 = { level: '2.0' };
  model25 = { level: '2.5' };
  model30 = { level: '3.0' };
  model35 = { level: '3.5' };
  model40 = { level: '4.0' };
  model45 = { level: '4.5' };
  model50 = { level: '5.0' };

  constructor() {}

  ngOnInit(): void {}
}

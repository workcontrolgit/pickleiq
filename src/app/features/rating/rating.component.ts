import { Component, OnInit } from '@angular/core';

import { NgxPrintElementService } from 'ngx-print-element';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  imports: [DashboardComponent],
})
export class RatingComponent implements OnInit {
  constructor(public print: NgxPrintElementService) {}
  ngOnInit(): void {}
}

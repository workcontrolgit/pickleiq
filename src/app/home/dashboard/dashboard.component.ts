import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [RouterLink],
})
export class DashboardComponent implements OnInit {
  itemList: any;

  constructor() {}

  ngOnInit(): void {
    this.itemList = [
      {
        position_count: 1001,
        employee_count: 40,
        assignment_count: 150,
      },
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { SearchContainerComponent } from './components/search-container/search-container.component';

@Component({
  selector: 'video-search',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
  imports: [SearchContainerComponent],
})
export class TrainingComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Search load');
  }
}

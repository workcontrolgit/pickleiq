// search-list.component.ts

import { Component, OnInit, Input } from '@angular/core';
import { Video } from '@shared/models/search.interface';
import { Logger } from '@core';
import { YouTubePlayer } from '@angular/youtube-player';
import { JsonPipe, DatePipe } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

const log = new Logger('search-list');

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
  standalone: true,
  imports: [YouTubePlayer, NgbAccordionModule, JsonPipe, DatePipe],
})
export class SearchListComponent implements OnInit {
  items = ['First', 'Second', 'Third'];
  @Input() videos: Video[];
  debug: boolean = false;
  private apiLoaded = false;

  constructor() {}

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    log.debug(this.videos);
  }
}

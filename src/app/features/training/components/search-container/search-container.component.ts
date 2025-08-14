import { OnInit } from '@angular/core';
// search-container.component.ts

import { Component } from '@angular/core';
import { VideoService } from '@app/services/api/video.service';
import { Video } from '@shared/models/search.interface';
import { SearchListComponent } from '../search-list/search-list.component';

import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css'],
  imports: [SearchInputComponent, SearchListComponent],
})
export class SearchContainerComponent {
  inputTouched = false;
  loading = false;
  videos: Video[] = [];

  constructor(private searchService: VideoService) {}

  OnInit() {}

  handleSearch(inputValue: string) {
    this.loading = true;
    this.searchService.getVideos(inputValue).subscribe((items: any) => {
      this.videos = items.map(
        (item: {
          snippet: {
            title: any;
            channelId: any;
            channelTitle: any;
            description: any;
            publishedAt: string | number | Date;
            thumbnails: { high: { url: any } };
          };
          id: { videoId: any };
        }) => {
          return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
            channelId: item.snippet.channelId,
            channelUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
            channelTitle: item.snippet.channelTitle,
            description: item.snippet.description,
            publishedAt: new Date(item.snippet.publishedAt),
            thumbnail: item.snippet.thumbnails.high.url,
          };
        }
      );
      this.inputTouched = true;
      this.loading = false;
    });
  }
}

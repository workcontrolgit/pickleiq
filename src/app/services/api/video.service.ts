// search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private apiURL = environment.youtube.apiUrl;
  private apiToken = environment.youtube.apiKey;
  private maxResults = environment.youtube.maxResults;

  constructor(private http: HttpClient) {}

  getVideos(query: string): Observable<any> {
    const url = `${this.apiURL}?q=${query}&key=${this.apiToken}&part=snippet&type=video&maxResults=${this.maxResults}`;
    return this.http.get(url).pipe(map((response: any) => response.items));
  }
}

import { OnInit } from '@angular/core';
// search-input.component.ts

import { Component, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  standalone: true,
})
export class SearchInputComponent implements AfterViewInit {
  @ViewChild('input') inputElement: ElementRef;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}
  OnInit() {
    //this.search.emit(this.inputElement.nativeElement);
  }

  // https://medium.com/angular-in-depth/expecting-the-unexpected-best-practices-for-error-handling-in-angular-21c3662ef9e4
  // https://code-maze.com/net-core-web-development-part11/
  // https://pkief.medium.com/global-error-handling-in-angular-ea395ce174b1
  //https://meetupfeed.io/talk/error-handling-in-angular-complete-guide video

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        distinctUntilChanged(),
        filter((value: string) => value.length > 2),
        map((value) => value)
      )
      .subscribe((value) => {
        this.search.emit('pickleball technique ' + value);
      });
  }
}

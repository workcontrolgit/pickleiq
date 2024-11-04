import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';

import { TrainingComponent } from './training.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    YouTubePlayerModule,
    TrainingRoutingModule,
    NgbAccordionModule,
    TrainingComponent,
    SearchInputComponent,
    SearchListComponent,
    SearchContainerComponent,
  ],
  providers: [],
})
export class TraininghModule {}

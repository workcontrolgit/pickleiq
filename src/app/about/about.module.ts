import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, NgbModule, YouTubePlayerModule, AboutComponent],
})
export class AboutModule {}

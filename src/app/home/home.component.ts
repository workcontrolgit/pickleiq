import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Logger } from '@core';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

const log = new Logger('app-home');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
  imports: [RouterLink, ShareButtonsModule, TranslateModule],
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1077, 10, 1019, 1033, 1043].map((n) => `https://picsum.photos/id/${n}/1920/1080`);

  constructor() {}

  ngOnInit() {}
}

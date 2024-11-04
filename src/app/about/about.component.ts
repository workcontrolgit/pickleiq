import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { AuthService } from '@app/@core/auth/auth.service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [TranslateModule, YouTubePlayerModule],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  accessToken: string;
  idToken: string;
  identityClaims: any;
  profile: any;
  role: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.accessToken = this.authService.accessToken;
    this.idToken = this.authService.idToken;
    this.profile = this.authService.identityClaims;
    if (this.profile != null && this.profile != undefined) {
      this.identityClaims = JSON.stringify(this.profile);
      this.role = JSON.stringify(this.profile.role);
    }
  }
}

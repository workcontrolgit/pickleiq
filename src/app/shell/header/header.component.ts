import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@app/@core/auth/auth.service';
import { AsyncPipe } from '@angular/common';
import { LanguageSelectorComponent } from '../../i18n/language-selector.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbNavModule, NgbCollapse, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    NgbNavModule,
    TranslateModule,
    NgbCollapse,
    RouterLink,
    RouterLinkActive,
    LanguageSelectorComponent,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    AsyncPipe,
  ],
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  isAuthenticated: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated$;
  }

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  get name(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['name'] : null;
  }
  get username(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['preferred_username'] : null;
  }
  get email(): string | null {
    return this.authService.identityClaims ? (this.authService.identityClaims as any)['email'] : null;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService, AuthProvider } from '@app/@core/auth/auth.service';
import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';
import {
  AuthProviderSelectorComponent,
  ProviderSelectionEvent,
} from '@app/@core/auth/auth-provider-selector/auth-provider-selector.component';

@Component({
  selector: 'app-should-login',
  templateUrl: './should-login.component.html',
  styleUrls: ['./should-login.component.scss'],
  imports: [CommonModule, TranslateModule, AuthProviderSelectorComponent],
})
export class ShouldLoginComponent implements OnInit {
  version: string | null = environment.version;
  isLoading = false;
  loadingProvider: AuthProvider | null = null;

  constructor(private authService: AuthService, private oAuthService: OAuthService, private router: Router) {}

  ngOnInit(): void {
    // Component initialization is handled by AuthProviderSelectorComponent
  }

  public async onProviderSelected(event: ProviderSelectionEvent): Promise<void> {
    const provider = event.providerId;

    this.isLoading = true;
    this.loadingProvider = provider;

    try {
      // Use the new dynamic login method
      await this.authService.loginWithProvider(provider);

      // Redirect to home for providers that don't handle their own redirect
      if (provider === 'anonymous') {
        this.router.navigate(['/']);
      }
      // OAuth providers will handle their own redirects
    } catch (error) {
      console.error('Login failed:', error);
      // Handle error (show toast, etc.)
    } finally {
      this.isLoading = false;
      this.loadingProvider = null;
    }
  }
}

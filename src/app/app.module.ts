import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angulartics2Module } from 'angulartics2';

import { environment } from '@env/environment';
import { CoreModule } from '@core';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FallbackComponent } from './fallback.component';
import { ShouldLoginComponent } from './should-login.component';

import { ToastComponent } from '@shared/toast/toast.component';

import { ToastsContainer } from '@app/services/toast/toasts-container.component';

import { NgHttpLoaderModule } from 'ng-http-loader';

import { API_KEY, GoogleSheetsDbService } from 'ng-google-sheets-db';

import { TableGradesService } from './services/api/table-grades.service';
import { TableSkillsService } from './services/api/table-skills.service';

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { ErrorHandler } from '@angular/core';
import { GlobalErrorHandler } from './services/error/global-error-handler';
import { ErrorDialogService } from '@shared/errors/error-dialog.service';

export function initTableGrades(configService: TableGradesService) {
  return () => configService.load();
}

export function initTableSkills(configService: TableSkillsService) {
  return () => configService.load();
}

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    TranslateModule.forRoot(),
    NgHttpLoaderModule.forRoot(),
    NgbModule,
    CoreModule.forRoot(),
    HomeModule,
    NgxGoogleAnalyticsModule.forRoot('G-G7BYVD349P'),
    NgxGoogleAnalyticsRouterModule,
    ReactiveFormsModule,
    Angulartics2Module.forRoot(),
    AppRoutingModule,
    FallbackComponent,
    ShouldLoginComponent,
    ToastComponent,
    ToastsContainer,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [TableGradesService],
      multi: true,
      useFactory: initTableGrades,
    },
    {
      provide: APP_INITIALIZER,
      deps: [TableSkillsService],
      multi: true,
      useFactory: initTableSkills,
    },
    {
      provide: API_KEY,
      useValue: environment.googleSheet.apiKey,
    },
    GoogleSheetsDbService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    ErrorDialogService,
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}

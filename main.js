"use strict";
(self["webpackChunkPickleIQ"] = self["webpackChunkPickleIQ"] || []).push([["main"],{

/***/ 2495:
/*!************************************************************!*\
  !*** ./src/app/@core/auth/auth-app-initializer.factory.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authAppInitializerFactory: () => (/* binding */ authAppInitializerFactory)
/* harmony export */ });
function authAppInitializerFactory(authService) {
  return () => authService.runInitialLoginSequence();
}

/***/ }),

/***/ 3486:
/*!*******************************************!*\
  !*** ./src/app/@core/auth/auth-config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authConfig: () => (/* binding */ authConfig)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);

const authConfig = {
  issuer: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.issuer,
  clientId: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.clientId,
  responseType: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.responseType,
  redirectUri: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.redirectUri,
  postLogoutRedirectUri: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.postLogoutRedirectUri,
  silentRefreshRedirectUri: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.silentRefreshRedirectUri,
  scope: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.scope,
  useSilentRefresh: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.useSilentRefresh,
  silentRefreshTimeout: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.silentRefreshTimeout,
  timeoutFactor: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.timeoutFactor,
  sessionChecksEnabled: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.sessionChecksEnabled,
  showDebugInformation: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.showDebugInformation,
  clearHashAfterLogin: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.clearHashAfterLogin,
  nonceStateSeparator: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.nonceStateSeparator
};

/***/ }),

/***/ 4849:
/*!********************************************************************!*\
  !*** ./src/app/@core/auth/auth-guard-with-forced-login.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuardWithForcedLogin: () => (/* binding */ AuthGuardWithForcedLogin)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7270);



class AuthGuardWithForcedLogin {
  constructor(authService) {
    this.authService = authService;
  }
  canActivate(route, state) {
    return this.authService.isDoneLoading$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(isDone => isDone), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)(_ => this.authService.isAuthenticated$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(isAuthenticated => isAuthenticated || this.authService.login(state.url)));
  }
  static #_ = this.ɵfac = function AuthGuardWithForcedLogin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthGuardWithForcedLogin)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AuthGuardWithForcedLogin,
    factory: AuthGuardWithForcedLogin.ɵfac
  });
}

/***/ }),

/***/ 186:
/*!**************************************************!*\
  !*** ./src/app/@core/auth/auth-guard.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/toast/toaster-service */ 9193);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 7270);




class AuthGuard {
  constructor(toastService, authService) {
    this.toastService = toastService;
    this.authService = authService;
  }
  canActivate(route, state) {
    return this.authService.canActivateProtectedRoutes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(canActivateProtectedRoutes => {
      if (canActivateProtectedRoutes) {
        return true;
      }
      this.showToaster('Access denied', 'Please login to continue access');
      return false;
    }));
  }
  // ngbmodal service
  showToaster(title, message) {
    this.toastService.show({
      textOrTpl: message,
      classname: 'bg-danger text-light',
      delay: 15000,
      header: title
    });
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_0__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac
  });
}

/***/ }),

/***/ 3383:
/*!**************************************************!*\
  !*** ./src/app/@core/auth/auth-module-config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authModuleConfig: () => (/* binding */ authModuleConfig)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);

const authModuleConfig = {
  resourceServer: {
    allowedUrls: [_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint, _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiMockEndpoint],
    sendAccessToken: true
  }
};

/***/ }),

/***/ 7270:
/*!********************************************!*\
  !*** ./src/app/@core/auth/auth.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6042);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);






class AuthService {
  navigateToLoginPage() {
    // TODO: Remember current URL
    this.router.navigateByUrl('/should-login');
  }
  constructor(oauthService, router) {
    this.oauthService = oauthService;
    this.router = router;
    this.isAuthenticatedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isAuthenticated$ = this.isAuthenticatedSubject$.asObservable();
    this.isDoneLoadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject();
    this.isDoneLoading$ = this.isDoneLoadingSubject$.asObservable();
    /**
     * Publishes `true` if and only if (a) all the asynchronous initial
     * login calls have completed or errorred, and (b) the user ended up
     * being authenticated.
     *
     * In essence, it combines:
     *
     * - the latest known state of whether the user is authorized
     * - whether the ajax calls for initial log in have all been done
     */
    this.canActivateProtectedRoutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.combineLatest)([this.isAuthenticated$, this.isDoneLoading$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => values.every(b => b)));
    // Useful for debugging:
    this.oauthService.events.subscribe(event => {
      if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthErrorEvent) {
        console.error('OAuthErrorEvent Object:', event);
      } else {
        console.warn('OAuthEvent Object:', event);
      }
    });
    // This is tricky, as it might cause race conditions (where access_token is set in another
    // tab before everything is said and done there.
    // TODO: Improve this setup. See: https://github.com/jeroenheijmans/sample-angular-oauth2-oidc-with-auth-guards/issues/2
    window.addEventListener('storage', event => {
      // The `key` is `null` if the event was caused by `.clear()`
      if (event.key !== 'access_token' && event.key !== null) {
        return;
      }
      console.warn('Noticed changes to access_token (most likely from another tab), updating isAuthenticated');
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
      if (!this.oauthService.hasValidAccessToken()) {
        this.navigateToLoginPage();
      }
    });
    this.oauthService.events.subscribe(_ => {
      this.isAuthenticatedSubject$.next(this.oauthService.hasValidAccessToken());
    });
    this.oauthService.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => ['token_received'].includes(e.type))).subscribe(e => this.oauthService.loadUserProfile());
    this.oauthService.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => ['session_terminated', 'session_error'].includes(e.type))).subscribe(e => this.navigateToLoginPage());
    this.oauthService.setupAutomaticSilentRefresh();
  }
  runInitialLoginSequence() {
    if (location.hash) {
      console.log('Encountered hash fragment, plotting as table...');
      console.table(location.hash.substr(1).split('&').map(kvp => kvp.split('=')));
    }
    // 0. LOAD CONFIG:
    // First we have to check to see how the IdServer is
    // currently configured:
    return this.oauthService.loadDiscoveryDocument()
    // For demo purposes, we pretend the previous call was very slow
    .then(() => new Promise(resolve => setTimeout(() => resolve(), 1000)))
    // 1. HASH LOGIN:
    // Try to log in via hash fragment after redirect back
    // from IdServer from initImplicitFlow:
    .then(() => this.oauthService.tryLogin()).then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        return Promise.resolve();
      }
      // 2. SILENT LOGIN:
      // Try to log in via a refresh because then we can prevent
      // needing to redirect the user:
      return this.oauthService.silentRefresh().then(() => Promise.resolve()).catch(result => {
        // Subset of situations from https://openid.net/specs/openid-connect-core-1_0.html#AuthError
        // Only the ones where it's reasonably sure that sending the
        // user to the IdServer will help.
        const errorResponsesRequiringUserInteraction = ['interaction_required', 'login_required', 'account_selection_required', 'consent_required'];
        if (result && result.reason && errorResponsesRequiringUserInteraction.indexOf(result.reason.error) >= 0) {
          // 3. ASK FOR LOGIN:
          // At this point we know for sure that we have to ask the
          // user to log in, so we redirect them to the IdServer to
          // enter credentials.
          //
          // Enable this to ALWAYS force a user to login.
          // this.login();
          //
          // Instead, we'll now do this:
          console.warn('User interaction is needed to log in, we will wait for the user to manually log in.');
          return Promise.resolve();
        }
        // We can't handle the truth, just pass on the problem to the
        // next handler.
        return Promise.reject(result);
      });
    }).then(() => {
      this.isDoneLoadingSubject$.next(true);
      // Check for the strings 'undefined' and 'null' just to be sure. Our current
      // login(...) should never have this, but in case someone ever calls
      // initImplicitFlow(undefined | null) this could happen.
      if (this.oauthService.state && this.oauthService.state !== 'undefined' && this.oauthService.state !== 'null') {
        let stateUrl = this.oauthService.state;
        if (stateUrl.startsWith('/') === false) {
          stateUrl = decodeURIComponent(stateUrl);
        }
        console.log(`There was state of ${this.oauthService.state}, so we are sending you to: ${stateUrl}`);
        this.router.navigateByUrl(stateUrl);
      }
    }).catch(() => this.isDoneLoadingSubject$.next(true));
  }
  login(targetUrl) {
    // Note: before version 9.1.0 of the library you needed to
    // call encodeURIComponent on the argument to the method.
    this.oauthService.initLoginFlow(targetUrl || this.router.url);
  }
  logout() {
    this.oauthService.logOut();
  }
  refresh() {
    this.oauthService.silentRefresh();
  }
  hasValidToken() {
    return this.oauthService.hasValidAccessToken();
  }
  // These normally won't be exposed from a service like this, but
  // for debugging it makes sense.
  get accessToken() {
    return this.oauthService.getAccessToken();
  }
  get refreshToken() {
    return this.oauthService.getRefreshToken();
  }
  get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }
  get idToken() {
    return this.oauthService.getIdToken();
  }
  get logoutUrl() {
    return this.oauthService.logoutUrl;
  }
  static #_ = this.ɵfac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac
  });
}

/***/ }),

/***/ 8736:
/*!**************************************************!*\
  !*** ./src/app/@core/auth/role-guard.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleGuard: () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7270);
/* harmony import */ var _app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/toast/toaster-service */ 9193);




class RoleGuard {
  constructor(authService, toastService) {
    this.authService = authService;
    this.toastService = toastService;
  }
  canActivate(route, state) {
    return this.authService.canActivateProtectedRoutes$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(canActivateProtectedRoutes => {
      if (canActivateProtectedRoutes) {
        // role check only if route contain data.role
        // https://javascript.plainenglish.io/4-ways-to-check-whether-the-property-exists-in-a-javascript-object-20c2d96d8f6e
        if (!!route.data.role) {
          const routeRoles = route.data.role;
          this.userProfile = this.authService.identityClaims;
          if (!!this.userProfile.role) {
            const userRoles = this.userProfile.role;
            if (userRoles.includes(routeRoles)) {
              // user's roles contains route's role
              return true;
            } else {
              // toaster-display role user needs to have to access this route;
              this.showToaster('Access denied', 'You do not have role ' + routeRoles);
            }
          }
        }
      }
      return false;
    }));
  }
  // ngbmodal service
  showToaster(title, message) {
    this.toastService.show({
      textOrTpl: 'Record has been updated.',
      classname: 'bg-success text-light',
      delay: 10000
    });
    // this.toastService.show({ textOrTpl: message, classname: 'bg-danger text-light', delay: 15000, header: title });
  }
  static #_ = this.ɵfac = function RoleGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RoleGuard,
    factory: RoleGuard.ɵfac
  });
}

/***/ }),

/***/ 5013:
/*!**************************************!*\
  !*** ./src/app/@core/core.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CoreModule: () => (/* binding */ CoreModule),
/* harmony export */   storageFactory: () => (/* binding */ storageFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-reusable-strategy */ 9831);
/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ 2865);
/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/error-handler.interceptor */ 7161);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);
/* harmony import */ var _auth_auth_app_initializer_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth-app-initializer.factory */ 2495);
/* harmony import */ var _auth_auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth-config */ 3486);
/* harmony import */ var _auth_auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth-guard-with-forced-login.service */ 4849);
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-guard.service */ 186);
/* harmony import */ var _auth_auth_module_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-module-config */ 3383);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth.service */ 7270);
/* harmony import */ var _auth_role_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/role-guard.service */ 8736);
/* harmony import */ var _app_services_error_global_error_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/services/error/global-error-handler */ 3917);








// OIDC Integration








// Global error handler




// We need a factory since localStorage is not available at AOT build time
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
function storageFactory() {
  return localStorage;
}
class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER,
        useFactory: _auth_auth_app_initializer_factory__WEBPACK_IMPORTED_MODULE_3__.authAppInitializerFactory,
        deps: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService],
        multi: true
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__.AuthConfig,
        useValue: _auth_auth_config__WEBPACK_IMPORTED_MODULE_4__.authConfig
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__.OAuthModuleConfig,
        useValue: _auth_auth_module_config__WEBPACK_IMPORTED_MODULE_7__.authModuleConfig
      }, {
        provide: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__.OAuthStorage,
        useFactory: storageFactory
      }]
    };
  }
  constructor(parentModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
  static #_ = this.ɵfac = function CoreModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](CoreModule, 12));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: CoreModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService, _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__.AuthGuard, _auth_role_guard_service__WEBPACK_IMPORTED_MODULE_9__.RoleGuard, _auth_auth_guard_with_forced_login_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuardWithForcedLogin, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
      useClass: _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__.ApiPrefixInterceptor,
      multi: true
    }, {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
      useClass: _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerInterceptor,
      multi: true
    }, {
      provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
      useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_0__.RouteReusableStrategy
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ErrorHandler,
      useClass: _app_services_error_global_error_handler__WEBPACK_IMPORTED_MODULE_10__.GlobalErrorHandler
    }, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.withInterceptorsFromDi)())],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__.OAuthModule.forRoot(), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](CoreModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_12__.OAuthModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 2865:
/*!******************************************************!*\
  !*** ./src/app/@core/http/api-prefix.interceptor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiPrefixInterceptor: () => (/* binding */ ApiPrefixInterceptor)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
class ApiPrefixInterceptor {
  intercept(request, next) {
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({
        url: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serverUrl + request.url
      });
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function ApiPrefixInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiPrefixInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ApiPrefixInterceptor,
    factory: ApiPrefixInterceptor.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7161:
/*!*********************************************************!*\
  !*** ./src/app/@core/http/error-handler.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandlerInterceptor: () => (/* binding */ ErrorHandlerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/logger.service */ 1765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);




const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_1__.Logger('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
class ErrorHandlerInterceptor {
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => this.errorHandler(error)));
  }
  // Customize the default error handler here if needed
  errorHandler(response) {
    if (!_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    throw response;
  }
  static #_ = this.ɵfac = function ErrorHandlerInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ErrorHandlerInterceptor)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ErrorHandlerInterceptor,
    factory: ErrorHandlerInterceptor.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8433:
/*!********************************!*\
  !*** ./src/app/@core/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiPrefixInterceptor: () => (/* reexport safe */ _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__.ApiPrefixInterceptor),
/* harmony export */   CoreModule: () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule),
/* harmony export */   ErrorHandlerInterceptor: () => (/* reexport safe */ _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__.ErrorHandlerInterceptor),
/* harmony export */   LogLevel: () => (/* reexport safe */ _logger_service__WEBPACK_IMPORTED_MODULE_4__.LogLevel),
/* harmony export */   Logger: () => (/* reexport safe */ _logger_service__WEBPACK_IMPORTED_MODULE_4__.Logger),
/* harmony export */   RouteReusableStrategy: () => (/* reexport safe */ _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__.RouteReusableStrategy),
/* harmony export */   UntilDestroy: () => (/* reexport safe */ _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy),
/* harmony export */   storageFactory: () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.storageFactory),
/* harmony export */   untilDestroyed: () => (/* reexport safe */ _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)
/* harmony export */ });
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ 5013);
/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ 2865);
/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http/error-handler.interceptor */ 7161);
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route-reusable-strategy */ 9831);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ 1765);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 7143);







/***/ }),

/***/ 1765:
/*!*****************************************!*\
  !*** ./src/app/@core/logger.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger)
/* harmony export */ });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
  LogLevel[LogLevel["Off"] = 0] = "Off";
  LogLevel[LogLevel["Error"] = 1] = "Error";
  LogLevel[LogLevel["Warning"] = 2] = "Warning";
  LogLevel[LogLevel["Info"] = 3] = "Info";
  LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
  /**
   * Current logging level.
   * Set it to LogLevel.Off to disable logs completely.
   */
  static #_ = this.level = LogLevel.Debug;
  /**
   * Additional log outputs.
   */
  static #_2 = this.outputs = [];
  /**
   * Enables production mode.
   * Sets logging level to LogLevel.Warning.
   */
  static enableProductionMode() {
    Logger.level = LogLevel.Warning;
  }
  constructor(source) {
    this.source = source;
  }
  /**
   * Logs messages or objects  with the debug level.
   * Works the same as console.log().
   */
  debug(...objects) {
    this.log(console.log, LogLevel.Debug, objects);
  }
  /**
   * Logs messages or objects  with the info level.
   * Works the same as console.log().
   */
  info(...objects) {
    this.log(console.info, LogLevel.Info, objects);
  }
  /**
   * Logs messages or objects  with the warning level.
   * Works the same as console.log().
   */
  warn(...objects) {
    this.log(console.warn, LogLevel.Warning, objects);
  }
  /**
   * Logs messages or objects  with the error level.
   * Works the same as console.log().
   */
  error(...objects) {
    this.log(console.error, LogLevel.Error, objects);
  }
  log(func, level, objects) {
    if (level <= Logger.level) {
      const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
      func.apply(console, log);
      Logger.outputs.forEach(output => output.apply(output, [this.source, level, ...objects]));
    }
  }
}

/***/ }),

/***/ 9831:
/*!**************************************************!*\
  !*** ./src/app/@core/route-reusable-strategy.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouteReusableStrategy: () => (/* binding */ RouteReusableStrategy)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
class RouteReusableStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouteReuseStrategy {
  shouldDetach(route) {
    return false;
  }
  store(route, detachedTree) {}
  shouldAttach(route) {
    return false;
  }
  retrieve(route) {
    return null;
  }
  shouldReuseRoute(future, curr) {
    // Reuse the route if the RouteConfig is the same, or if both routes use the
    // same component, because the latter can have different RouteConfigs.
    return future.routeConfig === curr.routeConfig || Boolean(future.routeConfig?.component && future.routeConfig?.component === curr.routeConfig?.component);
  }
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵRouteReusableStrategy_BaseFactory;
    return function RouteReusableStrategy_Factory(__ngFactoryType__) {
      return (ɵRouteReusableStrategy_BaseFactory || (ɵRouteReusableStrategy_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RouteReusableStrategy)))(__ngFactoryType__ || RouteReusableStrategy);
    };
  })();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RouteReusableStrategy,
    factory: RouteReusableStrategy.ɵfac
  });
}

/***/ }),

/***/ 9148:
/*!**********************************************************!*\
  !*** ./src/app/@shared/errors/error-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialogComponent: () => (/* binding */ ErrorDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);


class ErrorDialogComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.title = 'An error has occurred!';
  }
  static #_ = this.ɵfac = function ErrorDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorDialogComponent,
    selectors: [["app-error-dialog"]],
    inputs: {
      title: "title",
      message: "message",
      status: "status"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 34,
    vars: 3,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["role", "alert", 1, "alert", "alert-light"], [1, ""], [1, "text-wrap", "text-break"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function ErrorDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialogComponent_Template_button_click_5_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 6)(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Error Code:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 7)(22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Error Message: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorDialogComponent_Template_button_click_30_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.status, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.message, "");
      }
    },
    styles: [".error-message[_ngcontent-%COMP%] {\n  background: #eee;\n  padding: 1rem;\n  font-family: monospace;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9lcnJvcnMvZXJyb3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1700:
/*!********************************************************!*\
  !*** ./src/app/@shared/errors/error-dialog.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorDialogService: () => (/* binding */ ErrorDialogService)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-dialog.component */ 9148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class ErrorDialogService {
  constructor(injector) {
    this.injector = injector;
  }
  openDialog(message, status) {
    var modalService = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal);
    const modalRef = modalService.open(_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.status = status;
  }
  static #_ = this.ɵfac = function ErrorDialogService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ErrorDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ErrorDialogService,
    factory: ErrorDialogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5796:
/*!*****************************************!*\
  !*** ./src/app/@shared/models/grade.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GradeAttributesMapping: () => (/* binding */ GradeAttributesMapping)
/* harmony export */ });
const GradeAttributesMapping = {
  grade: 'Grade',
  description: 'Description'
};

/***/ }),

/***/ 6562:
/*!*****************************************!*\
  !*** ./src/app/@shared/models/skill.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SkillAttributesMapping: () => (/* binding */ SkillAttributesMapping)
/* harmony export */ });
const SkillAttributesMapping = {
  skillcode: 'Skillcode',
  description: 'Description',
  level: 'Level'
};

/***/ }),

/***/ 421:
/*!*************************************************************!*\
  !*** ./src/app/@shared/toast/toasts-container.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastsContainer: () => (/* binding */ ToastsContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/toast/toaster-service */ 9193);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);






function ToastsContainer_For_1_Conditional_3_ng_template_1_Template(rf, ctx) {}
function ToastsContainer_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ToastsContainer_For_1_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n  ");
  }
  if (rf & 2) {
    const toast_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", toast_r3.textOrTpl);
  }
}
function ToastsContainer_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const toast_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", toast_r3.textOrTpl, " ");
  }
}
function ToastsContainer_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-toast", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("hidden", function ToastsContainer_For_1_Template_ngb_toast_hidden_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.show = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ToastsContainer_For_1_Conditional_3_Template, 3, 1)(4, ToastsContainer_For_1_Conditional_4_Template, 1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
  }
  if (rf & 2) {
    const toast_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](toast_r3.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("header", toast_r3.header)("autohide", true)("delay", toast_r3.delay || 5000);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx_r1.isTemplate(toast_r3) ? 3 : 4);
  }
}
class ToastsContainer {
  constructor() {
    this.toastService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_0__.ToastService);
    this.show = true;
  }
  isTemplate(toast) {
    return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef;
  }
  static #_ = this.ɵfac = function ToastsContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastsContainer)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ToastsContainer,
    selectors: [["app-toasts-container"]],
    hostAttrs: [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1200"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [[3, "hidden", "header", "autohide", "delay"], [3, "ngTemplateOutlet"]],
    template: function ToastsContainer_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](0, ToastsContainer_For_1_Template, 6, 6, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.toastService.toasts);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbToastModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbToast, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shell/shell.service */ 4100);
/* harmony import */ var _should_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./should-login.component */ 7482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [_app_shell_shell_service__WEBPACK_IMPORTED_MODULE_0__.Shell.childRoutes([{
  path: 'about',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_youtube-player_fesm2022_youtube-player_mjs"), __webpack_require__.e("src_app_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 4543)).then(m => m.AboutModule)
}, {
  path: 'shop',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_shop_shop_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/shop/shop.module */ 1927)).then(m => m.ShopModule)
}, {
  path: 'rating',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_rating_rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/rating/rating.module */ 6389)).then(m => m.RatingModule)
}, {
  path: 'training',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_youtube-player_fesm2022_youtube-player_mjs"), __webpack_require__.e("src_app_features_training_training_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/training/training.module */ 2271)).then(m => m.TraininghModule)
}, {
  path: 'position',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_position_position_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/position/position.module */ 169)).then(m => m.PositionModule)
}]), {
  path: 'should-login',
  component: _should_login_component__WEBPACK_IMPORTED_MODULE_1__.ShouldLoginComponent
},
// Fallback when no prior route is matched
{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
      paramsInheritanceStrategy: 'always'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4398);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _app_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/i18n */ 1783);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/@core/auth/auth.service */ 7270);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-http-loader */ 6595);
/* harmony import */ var _shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./@shared/toast/toasts-container.component */ 421);














const _c0 = () => ["\\d", "[a-zA-Z]", "{{filteredUrlPatterns}}"];
const log = new _core__WEBPACK_IMPORTED_MODULE_1__.Logger('App');
let AppComponent = class AppComponent {
  constructor(router, activatedRoute, titleService, translateService, i18nService, authService) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.titleService = titleService;
    this.translateService = translateService;
    this.i18nService = i18nService;
    this.authService = authService;
    // http loader filter
    this.filteredUrlPatterns = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.oidc.issuer + '/connect';
  }
  ngOnInit() {
    // Setup logger
    if (_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
      _core__WEBPACK_IMPORTED_MODULE_1__.Logger.enableProductionMode();
    }
    log.debug('init');
    // Setup translations
    this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.supportedLanguages);
    const onNavigationEnd = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd));
    // Change page title on navigation or language change, based on route data
    (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.translateService.onLangChange, onNavigationEnd).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => {
      let route = this.activatedRoute;
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(route => route.outlet === 'primary'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.switchMap)(route => route.data), (0,_core__WEBPACK_IMPORTED_MODULE_1__.untilDestroyed)(this)).subscribe(event => {
      const title = event.title;
      if (title) {
        this.titleService.setTitle(this.translateService.instant(title));
      }
    });
  }
  ngOnDestroy() {
    this.i18nService.destroy();
  }
  static #_ = this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_i18n__WEBPACK_IMPORTED_MODULE_2__.I18nService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 7,
    vars: 2,
    consts: [["aria-live", "polite", "aria-atomic", "true"], [3, "filteredUrlPatterns"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "app-toasts-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ng-http-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("filteredUrlPatterns", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [ng_http_loader__WEBPACK_IMPORTED_MODULE_13__.NgHttpLoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_4__.ToastsContainer],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_core__WEBPACK_IMPORTED_MODULE_1__.UntilDestroy)()], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   initTableGrades: () => (/* binding */ initTableGrades),
/* harmony export */   initTableSkills: () => (/* binding */ initTableSkills)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var angulartics2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angulartics2 */ 751);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.module */ 5055);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _fallback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fallback.component */ 9619);
/* harmony import */ var _should_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./should-login.component */ 7482);
/* harmony import */ var _app_shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/@shared/toast/toasts-container.component */ 421);
/* harmony import */ var ng_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-http-loader */ 6595);
/* harmony import */ var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-google-sheets-db */ 5183);
/* harmony import */ var _services_api_table_grades_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/api/table-grades.service */ 720);
/* harmony import */ var _services_api_table_skills_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api/table-skills.service */ 6522);
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-google-analytics */ 2599);
/* harmony import */ var _services_error_global_error_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/error/global-error-handler */ 3917);
/* harmony import */ var _shared_errors_error_dialog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/errors/error-dialog.service */ 1700);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./@core/core.module */ 5013);































function initTableGrades(configService) {
  return () => configService.load();
}
function initTableSkills(configService) {
  return () => configService.load();
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.APP_INITIALIZER,
      deps: [_services_api_table_grades_service__WEBPACK_IMPORTED_MODULE_8__.TableGradesService],
      multi: true,
      useFactory: initTableGrades
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.APP_INITIALIZER,
      deps: [_services_api_table_skills_service__WEBPACK_IMPORTED_MODULE_9__.TableSkillsService],
      multi: true,
      useFactory: initTableSkills
    }, {
      provide: ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_14__.API_KEY,
      useValue: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.googleSheet.apiKey
    }, ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_14__.GoogleSheetsDbService, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ErrorHandler,
      useClass: _services_error_global_error_handler__WEBPACK_IMPORTED_MODULE_10__.GlobalErrorHandler
    }, _shared_errors_error_dialog_service__WEBPACK_IMPORTED_MODULE_11__.ErrorDialogService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.withInterceptorsFromDi)())],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('./ngsw-worker.js', {
      enabled: _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
    }), _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot(), ng_http_loader__WEBPACK_IMPORTED_MODULE_20__.NgHttpLoaderModule.forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _core__WEBPACK_IMPORTED_MODULE_1__.CoreModule.forRoot(), _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__.NgxGoogleAnalyticsModule.forRoot('G-G7BYVD349P'), ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__.NgxGoogleAnalyticsRouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, angulartics2__WEBPACK_IMPORTED_MODULE_23__.Angulartics2Module.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _should_login_component__WEBPACK_IMPORTED_MODULE_6__.ShouldLoginComponent, _app_shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_7__.ToastsContainer]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, ng_http_loader__WEBPACK_IMPORTED_MODULE_20__.NgHttpLoaderModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule, _core_core_module__WEBPACK_IMPORTED_MODULE_12__.CoreModule, _home_home_module__WEBPACK_IMPORTED_MODULE_2__.HomeModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__.NgxGoogleAnalyticsModule, ngx_google_analytics__WEBPACK_IMPORTED_MODULE_22__.NgxGoogleAnalyticsRouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, angulartics2__WEBPACK_IMPORTED_MODULE_23__.Angulartics2Module, _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule, _fallback_component__WEBPACK_IMPORTED_MODULE_5__.FallbackComponent, _should_login_component__WEBPACK_IMPORTED_MODULE_6__.ShouldLoginComponent, _app_shared_toast_toasts_container_component__WEBPACK_IMPORTED_MODULE_7__.ToastsContainer]
  });
})();

/***/ }),

/***/ 9619:
/*!***************************************!*\
  !*** ./src/app/fallback.component.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FallbackComponent: () => (/* binding */ FallbackComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FallbackComponent {
  static #_ = this.ɵfac = function FallbackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FallbackComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FallbackComponent,
    selectors: [["app-fallback"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 5,
    vars: 0,
    consts: [[1, "alert", "alert-warning"]],
    template: function FallbackComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "This is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDD73\uFE0F FALLBACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " component.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 577:
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


function DashboardComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skill Ratings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Coaches");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Players");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.position_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.employee_count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.assignment_count);
  }
}
class DashboardComponent {
  constructor() {}
  ngOnInit() {
    this.itemList = [{
      position_count: 1001,
      employee_count: 40,
      assignment_count: 150
    }];
  }
  static #_ = this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["app-dashboard"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    consts: [[1, "card-deck", "my-3"], [1, "card"], ["routerLink", "/rating", 1, "card-link"], [1, "card-body", "card-body-small"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-primary"], [1, "d-flex", "pl-3", "font-weight-light", "float-right"], [1, "card-title", "pt-1", "pb-0", "text-dark"], ["routerLink", "/employee", 1, "card-link"], [1, "card-body"], [1, "fas", "fa-users-cog", "fa-2x", "text-secondary"], [1, "d-flex", "pl-3", "font-weight-light", "float-right", "text-dark"], ["routerLink", "/assignment", 1, "card-link"], [1, "fas", "fa-user-friends", "fa-2x", "text-success"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, DashboardComponent_For_1_Template, 58, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterTrackByIdentity"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.itemList);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 630:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 8179);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 7824);
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shell/shell.service */ 4100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [_app_shell_shell_service__WEBPACK_IMPORTED_MODULE_1__.Shell.childRoutes([{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_2__.marker)('Home')
  }
}])];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ 1075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);








const _c0 = () => ["copy", "facebook", "email", "twitter", "messenger", "whatsapp", "linkedin", "pinterest", "print", "reddit", "sms", "telegram", "tumblr", "viber", "vk", "mix", "line", "xing"];
const log = new _core__WEBPACK_IMPORTED_MODULE_0__.Logger('app-home');
class HomeComponent {
  constructor() {
    this.showNavigationArrows = true;
    this.showNavigationIndicators = true;
    this.images = [1077, 10, 1019, 1033, 1043].map(n => `https://picsum.photos/id/${n}/1920/1080`);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarouselConfig]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 29,
    vars: 4,
    consts: [[1, "container-fluid"], [1, "jumbotron"], [1, "display-4"], ["translate", ""], [1, "lead"], ["routerLink", "/rating", "role", "button", 1, "btn", "btn-primary", "btn-lg"], ["theme", "circles-dark", "url", "https://mickleball.azurewebsites.net", "description", "Evaluation of Pickleball knowledge, skills, and competencies", "twitterAccount", "FujiNguyenIT", 1, "pt-5", 3, "include", "showIcon", "showText"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Hello Pickleballers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "APP_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " app provides a thorough evaluation of knowledge, skills, and competencies for\n      player rating level 2.0 to 5.0\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n\n  Share ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "APP_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " on social media\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "share-buttons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("include", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0))("showIcon", true)("showText", true);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_4__.ShareButtonsModule, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_4__.ShareButtons, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective],
    styles: ["@charset \"UTF-8\";\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\nq[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: \"\u00AB \" \" \u00BB\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbnEge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBxdW90ZXM6IFwiw4LCqyBcIiBcIiDDgsK7XCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 630);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 7824);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 577);
/* harmony import */ var ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-sharebuttons/buttons */ 1075);
/* harmony import */ var ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-sharebuttons/icons */ 9798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);









class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__.ShareButtonsModule, ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__.ShareIconsModule, _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_sharebuttons_buttons__WEBPACK_IMPORTED_MODULE_7__.ShareButtonsModule, ngx_sharebuttons_icons__WEBPACK_IMPORTED_MODULE_8__.ShareIconsModule, _home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent]
  });
})();

/***/ }),

/***/ 9926:
/*!**************************************!*\
  !*** ./src/app/i18n/i18n.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nService: () => (/* binding */ I18nService)
/* harmony export */ });
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/logger.service */ 1765);
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../translations/en-US.json */ 9832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);




const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger('I18nService');
const languageKey = 'language';
class I18nService {
  constructor(translateService) {
    this.translateService = translateService;
    // Embed languages to avoid extra HTTP requests
    translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_1__);
  }
  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param defaultLanguage The default language to use.
   * @param supportedLanguages The list of supported languages.
   */
  init(defaultLanguage, supportedLanguages) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';
    // Warning: this subscription will always be alive for the app's lifetime
    this.langChangeSubscription = this.translateService.onLangChange.subscribe(event => {
      localStorage.setItem(languageKey, event.lang);
    });
  }
  /**
   * Cleans up language change subscription.
   */
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language) {
    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = this.supportedLanguages.includes(language);
    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }
    // Fallback if language is not supported
    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }
    log.debug(`Language set to ${language}`);
    this.translateService.use(language);
  }
  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language() {
    return this.translateService.currentLang;
  }
  static #_ = this.ɵfac = function I18nService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: I18nService,
    factory: I18nService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1783:
/*!*******************************!*\
  !*** ./src/app/i18n/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I18nService: () => (/* reexport safe */ _i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService),
/* harmony export */   LanguageSelectorComponent: () => (/* reexport safe */ _language_selector_component__WEBPACK_IMPORTED_MODULE_1__.LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.service */ 9926);
/* harmony import */ var _language_selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language-selector.component */ 3502);



/***/ }),

/***/ 3502:
/*!*****************************************************!*\
  !*** ./src/app/i18n/language-selector.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSelectorComponent: () => (/* binding */ LanguageSelectorComponent)
/* harmony export */ });
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.service */ 9926);






const _c0 = a0 => ({
  "nav-item": a0
});
function LanguageSelectorComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r0.currentLanguage), "\n  ");
  }
}
function LanguageSelectorComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n    ", ctx_r0.currentLanguage, "\n  ");
  }
}
function LanguageSelectorComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n      ", ctx_r0.currentLanguage, "\n    ");
  }
}
function LanguageSelectorComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSelectorComponent_For_10_Template_button_click_1_listener() {
      const language_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r0.setLanguage(language_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");
  }
  if (rf & 2) {
    const language_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\n      ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, language_r3), "\n    ");
  }
}
class LanguageSelectorComponent {
  constructor(i18nService) {
    this.i18nService = i18nService;
    this.inNavbar = false;
    this.menuClass = '';
  }
  ngOnInit() {}
  setLanguage(language) {
    this.i18nService.language = language;
  }
  get currentLanguage() {
    return this.i18nService.language;
  }
  get languages() {
    return this.i18nService.supportedLanguages;
  }
  static #_ = this.ɵfac = function LanguageSelectorComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LanguageSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_i18n_service__WEBPACK_IMPORTED_MODULE_0__.I18nService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LanguageSelectorComponent,
    selectors: [["app-language-selector"]],
    inputs: {
      inNavbar: "inNavbar",
      menuClass: "menuClass"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 5,
    consts: [["button", ""], ["ngbDropdown", "", 3, "ngClass"], ["ngbDropdownMenu", "", "aria-labelledby", "language-dropdown", 3, "ngClass"], ["id", "language-dropdown", "ngbDropdownToggle", "", 1, "nav-link"], ["id", "language-dropdown", "ngbDropdownToggle", "", 1, "btn", "btn-sm", "btn-secondary"], [1, "dropdown-item", 3, "click"]],
    template: function LanguageSelectorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LanguageSelectorComponent_Conditional_2_Template, 5, 3)(3, LanguageSelectorComponent_Conditional_3_Template, 4, 1)(4, LanguageSelectorComponent_ng_template_4_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](9, LanguageSelectorComponent_For_10_Template, 5, 3, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.inNavbar));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](ctx.inNavbar ? 2 : 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.menuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.languages);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
    styles: [".nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaTE4bi9sYW5ndWFnZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 720:
/*!******************************************************!*\
  !*** ./src/app/services/api/table-grades.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableGradesService: () => (/* binding */ TableGradesService)
/* harmony export */ });
/* harmony import */ var _app_shared_models_grade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/@shared/models/grade */ 5796);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-google-sheets-db */ 5183);





const log = new _core__WEBPACK_IMPORTED_MODULE_2__.Logger('configuration.service');
class TableGradesService {
  get TableGrades() {
    return this.dataTable;
  }
  constructor(googleSheetsDbService) {
    this.googleSheetsDbService = googleSheetsDbService;
    this.dataRequest$ = this.googleSheetsDbService.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleSheet.spreadsheetId, _env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleSheet.worksheetGrades, _app_shared_models_grade__WEBPACK_IMPORTED_MODULE_0__.GradeAttributesMapping);
  }
  load() {
    return new Promise(resolve => {
      this.dataRequest$.subscribe(response => {
        this.dataTable = response;
        resolve(true);
      });
    });
  }
  static #_ = this.ɵfac = function TableGradesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableGradesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__.GoogleSheetsDbService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: TableGradesService,
    factory: TableGradesService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6522:
/*!******************************************************!*\
  !*** ./src/app/services/api/table-skills.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableSkillsService: () => (/* binding */ TableSkillsService)
/* harmony export */ });
/* harmony import */ var _app_shared_models_skill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/@shared/models/skill */ 6562);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-google-sheets-db */ 5183);





const log = new _core__WEBPACK_IMPORTED_MODULE_2__.Logger('configuration.service');
class TableSkillsService {
  get TableSkills() {
    return this.dataTable;
  }
  constructor(googleSheetsDbService) {
    this.googleSheetsDbService = googleSheetsDbService;
    this.dataRequest$ = this.googleSheetsDbService.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleSheet.spreadsheetId, _env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.googleSheet.worksheetSkills, _app_shared_models_skill__WEBPACK_IMPORTED_MODULE_0__.SkillAttributesMapping);
  }
  load() {
    return new Promise(resolve => {
      this.dataRequest$.subscribe(response => {
        this.dataTable = response;
        resolve(true);
      });
    });
  }
  static #_ = this.ɵfac = function TableSkillsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TableSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ng_google_sheets_db__WEBPACK_IMPORTED_MODULE_4__.GoogleSheetsDbService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: TableSkillsService,
    factory: TableSkillsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3917:
/*!********************************************************!*\
  !*** ./src/app/services/error/global-error-handler.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalErrorHandler: () => (/* binding */ GlobalErrorHandler)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _shared_errors_error_dialog_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/errors/error-dialog.service */ 1700);



class GlobalErrorHandler {
  constructor(errorDialogService, zone) {
    this.errorDialogService = errorDialogService;
    this.zone = zone;
  }
  handleError(error) {
    // Check if it's an error from an HTTP response
    console.log(error);
    if (!(error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }
    this.zone.run(() => this.errorDialogService.openDialog(error?.message || 'Undefined client error', error?.status));
    console.error('Error from global error handler', error?.message);
  }
  static #_ = this.ɵfac = function GlobalErrorHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GlobalErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_errors_error_dialog_service__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: GlobalErrorHandler,
    factory: GlobalErrorHandler.ɵfac
  });
}

/***/ }),

/***/ 9193:
/*!***************************************************!*\
  !*** ./src/app/services/toast/toaster-service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class ToastService {
  constructor() {
    this.toasts = [];
  }
  show(toast) {
    this.toasts.push(toast);
  }
  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }
  clear() {
    this.toasts.splice(0, this.toasts.length);
  }
  static #_ = this.ɵfac = function ToastService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ToastService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 905:
/*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _i18n_language_selector_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../i18n/language-selector.component */ 3502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/auth/auth.service */ 7270);








function HeaderComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h6", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Logged in as");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n            ");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.name);
  }
}
function HeaderComponent_Conditional_68_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Conditional_68_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n            ");
  }
}
function HeaderComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Conditional_70_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r0.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n            ");
  }
}
class HeaderComponent {
  constructor(authService) {
    this.authService = authService;
    this.menuHidden = true;
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
  get name() {
    return this.authService.identityClaims ? this.authService.identityClaims['name'] : null;
  }
  get username() {
    return this.authService.identityClaims ? this.authService.identityClaims['preferred_username'] : null;
  }
  get email() {
    return this.authService.identityClaims ? this.authService.identityClaims['email'] : null;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 78,
    vars: 11,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["href", "/", "translate", "", 1, "navbar-brand", "m-3"], ["type", "button", "aria-controls", "navbar-menu", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbar-menu", 1, "collapse", "navbar-collapse", "float-xs-none", 3, "ngbCollapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["routerLink", "/home", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-home"], ["translate", ""], ["routerLink", "/rating", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-tasks"], ["routerLink", "/training", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-table-tennis"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-item", "nav-link"], [1, "fas", "fa-question-circle"], [1, "navbar-nav", "ml-auto"], ["inNavbar", "true", "menuClass", "dropdown-menu dropdown-menu-right"], ["ngbDropdown", "", "display", "dynamic", 1, "nav-item"], ["id", "user-dropdown", "ngbDropdownToggle", "", 1, "nav-link"], [1, "fas", "fa-user-circle"], ["ngbDropdownMenu", "", "aria-labelledby", "user-dropdown"], [1, "dropdown-header"], [1, "dropdown-divider"], ["translate", "", 1, "dropdown-item", 3, "click"], [1, "dropdown-item", 3, "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "APP_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() {
          return ctx.toggleMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Training");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "app-language-selector", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, HeaderComponent_Conditional_66_Template, 12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, HeaderComponent_Conditional_68_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](69, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, HeaderComponent_Conditional_70_Template, 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.menuHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbCollapse", ctx.menuHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 5, ctx.isAuthenticated) === true ? 66 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](69, 7, ctx.isAuthenticated) === true ? 68 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵconditional"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](71, 9, ctx.isAuthenticated) === false ? 70 : -1);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCollapse, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _i18n_language_selector_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSelectorComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.nav-link.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS90aGVtZS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hlbGwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBQUE7QUNFQTtFQUNFLG1CQ2tYTztBRGhYVDs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHBsaWNhdGlvbiBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbi8vIFNldCBGb250IEF3ZXNvbWUgZm9udCBwYXRoXG4kZmEtZm9udC1wYXRoOiBcIn5AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS93ZWJmb250c1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vXG4vLyBPdmVycmlkZSBCb290c3RyYXAgdmFyaWFibGVzIGhlcmUgdG8gc3VpdGUgeW91ciB0aGVtZS5cbi8vIENvcHkgdmFyaWFibGVzIHlvdSB3YW50IHRvIGN1c3RvbWl6ZSBmcm9tIG5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3NcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAjZmZmO1xuJGdyYXktMTAwOiAjZjhmOWZhO1xuJGdyYXktMjAwOiAjZTllY2VmO1xuJGdyYXktMzAwOiAjZGVlMmU2O1xuJGdyYXktNDAwOiAjY2VkNGRhO1xuJGdyYXktNTAwOiAjYWRiNWJkO1xuJGdyYXktNjAwOiAjODY4ZTk2O1xuJGdyYXktNzAwOiAjNDk1MDU3O1xuJGdyYXktODAwOiAjMzQzYTQwO1xuJGdyYXktOTAwOiAjMjEyNTI5O1xuJGJsYWNrOiAjMDAwO1xuXG4kYmx1ZTogIzAwNzNkZDtcbiRpbmRpZ286ICM2NjEwZjI7XG4kcHVycGxlOiAjNmY0MmMxO1xuJHBpbms6ICNlODNlOGM7XG4kcmVkOiAjZGMzNTQ1O1xuJG9yYW5nZTogI2ZkN2UxNDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMyOGE3NDU7XG4kdGVhbDogIzIwYzk5NztcbiRjeWFuOiAjMTdhMmI4O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRibHVlLFxuICBzZWNvbmRhcnk6ICRncmF5LTYwMCxcbiAgc3VjY2VzczogJGdyZWVuLFxuICBpbmZvOiAkY3lhbixcbiAgd2FybmluZzogJHllbGxvdyxcbiAgZGFuZ2VyOiAkcmVkLFxuICBsaWdodDogJGdyYXktMTAwLFxuICBkYXJrOiAkZ3JheS04MDAsXG4pO1xuXG4vLyBVc2UgQm9vdHN0cmFwIGRlZmF1bHRzIGZvciBvdGhlciB2YXJpYWJsZXMsIGltcG9ydGVkIGhlcmUgc28gd2UgY2FuIGFjY2VzcyBhbGwgYXBwIHZhcmlhYmxlcyBpbiBvbmUgcGxhY2Ugd2hlbiB1c2VkXG4vLyBpbiBjb21wb25lbnRzLlxuQGltcG9ydCBcImJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzXCI7XG4iLCJAaW1wb3J0IFwic3JjL3RoZW1lL3RoZW1lLXZhcmlhYmxlc1wiO1xuXG4ubmF2YmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbn1cblxuLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMzVweDtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JheS1jb2xvci12YXJpYWJsZXNcbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JheS1jb2xvci12YXJpYWJsZXNcblxuLy8gZnVzdi1kaXNhYmxlXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JheS1jb2xvcnMtbWFwXG4kZ3JheXM6IChcbiAgXCIxMDBcIjogJGdyYXktMTAwLFxuICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgXCI0MDBcIjogJGdyYXktNDAwLFxuICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgXCI3MDBcIjogJGdyYXktNzAwLFxuICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gIFwiOTAwXCI6ICRncmF5LTkwMFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JheS1jb2xvcnMtbWFwXG4vLyBmdXN2LWVuYWJsZVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sb3ItdmFyaWFibGVzXG4kYmx1ZTogICAgIzBkNmVmZCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2Q2MzM4NCAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMTk4NzU0ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzBkY2FmMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb2xvcnMtbWFwXG4kY29sb3JzOiAoXG4gIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICBcImJsYWNrXCI6ICAgICAgJGJsYWNrLFxuICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb2xvcnMtbWFwXG5cbi8vIFRoZSBjb250cmFzdCByYXRpbyB0byByZWFjaCBhZ2FpbnN0IHdoaXRlLCB0byBkZXRlcm1pbmUgaWYgY29sb3IgY2hhbmdlcyBmcm9tIFwibGlnaHRcIiB0byBcImRhcmtcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgZm9yIFdDQUcgMi4wIGFyZSAzLCA0LjUgYW5kIDcuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0XG4kbWluLWNvbnRyYXN0LXJhdGlvOiAgIDQuNSAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiRjb2xvci1jb250cmFzdC1kYXJrOiAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjb2xvci1jb250cmFzdC1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kYmx1ZS0xMDA6IHRpbnQtY29sb3IoJGJsdWUsIDgwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0yMDA6IHRpbnQtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0zMDA6IHRpbnQtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS00MDA6IHRpbnQtY29sb3IoJGJsdWUsIDIwJSkgIWRlZmF1bHQ7XG4kYmx1ZS01MDA6ICRibHVlICFkZWZhdWx0O1xuJGJsdWUtNjAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTcwMDogc2hhZGUtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS04MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA2MCUpICFkZWZhdWx0O1xuJGJsdWUtOTAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcblxuJGluZGlnby0xMDA6IHRpbnQtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMjAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTMwMDogdGludC1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby00MDA6IHRpbnQtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNTAwOiAkaW5kaWdvICFkZWZhdWx0O1xuJGluZGlnby02MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDIwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTcwMDogc2hhZGUtY29sb3IoJGluZGlnbywgNDAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tODAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA2MCUpICFkZWZhdWx0O1xuJGluZGlnby05MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDgwJSkgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtMTAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTIwMDogdGludC1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS0zMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNDAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTUwMDogJHB1cnBsZSAhZGVmYXVsdDtcbiRwdXJwbGUtNjAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCAyMCUpICFkZWZhdWx0O1xuJHB1cnBsZS03MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDQwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTgwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtOTAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA4MCUpICFkZWZhdWx0O1xuXG4kcGluay0xMDA6IHRpbnQtY29sb3IoJHBpbmssIDgwJSkgIWRlZmF1bHQ7XG4kcGluay0yMDA6IHRpbnQtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay0zMDA6IHRpbnQtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay00MDA6IHRpbnQtY29sb3IoJHBpbmssIDIwJSkgIWRlZmF1bHQ7XG4kcGluay01MDA6ICRwaW5rICFkZWZhdWx0O1xuJHBpbmstNjAwOiBzaGFkZS1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTcwMDogc2hhZGUtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay04MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA2MCUpICFkZWZhdWx0O1xuJHBpbmstOTAwOiBzaGFkZS1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcblxuJHJlZC0xMDA6IHRpbnQtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcbiRyZWQtMjAwOiB0aW50LWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTMwMDogdGludC1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC00MDA6IHRpbnQtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNTAwOiAkcmVkICFkZWZhdWx0O1xuJHJlZC02MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLTcwMDogc2hhZGUtY29sb3IoJHJlZCwgNDAlKSAhZGVmYXVsdDtcbiRyZWQtODAwOiBzaGFkZS1jb2xvcigkcmVkLCA2MCUpICFkZWZhdWx0O1xuJHJlZC05MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDgwJSkgIWRlZmF1bHQ7XG5cbiRvcmFuZ2UtMTAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTIwMDogdGludC1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS0zMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNDAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTUwMDogJG9yYW5nZSAhZGVmYXVsdDtcbiRvcmFuZ2UtNjAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCAyMCUpICFkZWZhdWx0O1xuJG9yYW5nZS03MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDQwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTgwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtOTAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA4MCUpICFkZWZhdWx0O1xuXG4keWVsbG93LTEwMDogdGludC1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuJHllbGxvdy0yMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctMzAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTQwMDogdGludC1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy01MDA6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4keWVsbG93LTYwMDogc2hhZGUtY29sb3IoJHllbGxvdywgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNzAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA0MCUpICFkZWZhdWx0O1xuJHllbGxvdy04MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDYwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTkwMDogc2hhZGUtY29sb3IoJHllbGxvdywgODAlKSAhZGVmYXVsdDtcblxuJGdyZWVuLTEwMDogdGludC1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tMjAwOiB0aW50LWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi0zMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA0MCUpICFkZWZhdWx0O1xuJGdyZWVuLTQwMDogdGludC1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNTAwOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kZ3JlZW4tNjAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNzAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tODAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDYwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tOTAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG5cbiR0ZWFsLTEwMDogdGludC1jb2xvcigkdGVhbCwgODAlKSAhZGVmYXVsdDtcbiR0ZWFsLTIwMDogdGludC1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTMwMDogdGludC1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTQwMDogdGludC1jb2xvcigkdGVhbCwgMjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTUwMDogJHRlYWwgIWRlZmF1bHQ7XG4kdGVhbC02MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNzAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTgwMDogc2hhZGUtY29sb3IoJHRlYWwsIDYwJSkgIWRlZmF1bHQ7XG4kdGVhbC05MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuXG4kY3lhbi0xMDA6IHRpbnQtY29sb3IoJGN5YW4sIDgwJSkgIWRlZmF1bHQ7XG4kY3lhbi0yMDA6IHRpbnQtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi0zMDA6IHRpbnQtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi00MDA6IHRpbnQtY29sb3IoJGN5YW4sIDIwJSkgIWRlZmF1bHQ7XG4kY3lhbi01MDA6ICRjeWFuICFkZWZhdWx0O1xuJGN5YW4tNjAwOiBzaGFkZS1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTcwMDogc2hhZGUtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi04MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA2MCUpICFkZWZhdWx0O1xuJGN5YW4tOTAwOiBzaGFkZS1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcblxuJGJsdWVzOiAoXG4gIFwiYmx1ZS0xMDBcIjogJGJsdWUtMTAwLFxuICBcImJsdWUtMjAwXCI6ICRibHVlLTIwMCxcbiAgXCJibHVlLTMwMFwiOiAkYmx1ZS0zMDAsXG4gIFwiYmx1ZS00MDBcIjogJGJsdWUtNDAwLFxuICBcImJsdWUtNTAwXCI6ICRibHVlLTUwMCxcbiAgXCJibHVlLTYwMFwiOiAkYmx1ZS02MDAsXG4gIFwiYmx1ZS03MDBcIjogJGJsdWUtNzAwLFxuICBcImJsdWUtODAwXCI6ICRibHVlLTgwMCxcbiAgXCJibHVlLTkwMFwiOiAkYmx1ZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRpbmRpZ29zOiAoXG4gIFwiaW5kaWdvLTEwMFwiOiAkaW5kaWdvLTEwMCxcbiAgXCJpbmRpZ28tMjAwXCI6ICRpbmRpZ28tMjAwLFxuICBcImluZGlnby0zMDBcIjogJGluZGlnby0zMDAsXG4gIFwiaW5kaWdvLTQwMFwiOiAkaW5kaWdvLTQwMCxcbiAgXCJpbmRpZ28tNTAwXCI6ICRpbmRpZ28tNTAwLFxuICBcImluZGlnby02MDBcIjogJGluZGlnby02MDAsXG4gIFwiaW5kaWdvLTcwMFwiOiAkaW5kaWdvLTcwMCxcbiAgXCJpbmRpZ28tODAwXCI6ICRpbmRpZ28tODAwLFxuICBcImluZGlnby05MDBcIjogJGluZGlnby05MDBcbikgIWRlZmF1bHQ7XG5cbiRwdXJwbGVzOiAoXG4gIFwicHVycGxlLTEwMFwiOiAkcHVycGxlLTEwMCxcbiAgXCJwdXJwbGUtMjAwXCI6ICRwdXJwbGUtMjAwLFxuICBcInB1cnBsZS0zMDBcIjogJHB1cnBsZS0zMDAsXG4gIFwicHVycGxlLTQwMFwiOiAkcHVycGxlLTQwMCxcbiAgXCJwdXJwbGUtNTAwXCI6ICRwdXJwbGUtNTAwLFxuICBcInB1cnBsZS02MDBcIjogJHB1cnBsZS02MDAsXG4gIFwicHVycGxlLTcwMFwiOiAkcHVycGxlLTcwMCxcbiAgXCJwdXJwbGUtODAwXCI6ICRwdXJwbGUtODAwLFxuICBcInB1cnBsZS05MDBcIjogJHB1cnBsZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRwaW5rczogKFxuICBcInBpbmstMTAwXCI6ICRwaW5rLTEwMCxcbiAgXCJwaW5rLTIwMFwiOiAkcGluay0yMDAsXG4gIFwicGluay0zMDBcIjogJHBpbmstMzAwLFxuICBcInBpbmstNDAwXCI6ICRwaW5rLTQwMCxcbiAgXCJwaW5rLTUwMFwiOiAkcGluay01MDAsXG4gIFwicGluay02MDBcIjogJHBpbmstNjAwLFxuICBcInBpbmstNzAwXCI6ICRwaW5rLTcwMCxcbiAgXCJwaW5rLTgwMFwiOiAkcGluay04MDAsXG4gIFwicGluay05MDBcIjogJHBpbmstOTAwXG4pICFkZWZhdWx0O1xuXG4kcmVkczogKFxuICBcInJlZC0xMDBcIjogJHJlZC0xMDAsXG4gIFwicmVkLTIwMFwiOiAkcmVkLTIwMCxcbiAgXCJyZWQtMzAwXCI6ICRyZWQtMzAwLFxuICBcInJlZC00MDBcIjogJHJlZC00MDAsXG4gIFwicmVkLTUwMFwiOiAkcmVkLTUwMCxcbiAgXCJyZWQtNjAwXCI6ICRyZWQtNjAwLFxuICBcInJlZC03MDBcIjogJHJlZC03MDAsXG4gIFwicmVkLTgwMFwiOiAkcmVkLTgwMCxcbiAgXCJyZWQtOTAwXCI6ICRyZWQtOTAwXG4pICFkZWZhdWx0O1xuXG4kb3JhbmdlczogKFxuICBcIm9yYW5nZS0xMDBcIjogJG9yYW5nZS0xMDAsXG4gIFwib3JhbmdlLTIwMFwiOiAkb3JhbmdlLTIwMCxcbiAgXCJvcmFuZ2UtMzAwXCI6ICRvcmFuZ2UtMzAwLFxuICBcIm9yYW5nZS00MDBcIjogJG9yYW5nZS00MDAsXG4gIFwib3JhbmdlLTUwMFwiOiAkb3JhbmdlLTUwMCxcbiAgXCJvcmFuZ2UtNjAwXCI6ICRvcmFuZ2UtNjAwLFxuICBcIm9yYW5nZS03MDBcIjogJG9yYW5nZS03MDAsXG4gIFwib3JhbmdlLTgwMFwiOiAkb3JhbmdlLTgwMCxcbiAgXCJvcmFuZ2UtOTAwXCI6ICRvcmFuZ2UtOTAwXG4pICFkZWZhdWx0O1xuXG4keWVsbG93czogKFxuICBcInllbGxvdy0xMDBcIjogJHllbGxvdy0xMDAsXG4gIFwieWVsbG93LTIwMFwiOiAkeWVsbG93LTIwMCxcbiAgXCJ5ZWxsb3ctMzAwXCI6ICR5ZWxsb3ctMzAwLFxuICBcInllbGxvdy00MDBcIjogJHllbGxvdy00MDAsXG4gIFwieWVsbG93LTUwMFwiOiAkeWVsbG93LTUwMCxcbiAgXCJ5ZWxsb3ctNjAwXCI6ICR5ZWxsb3ctNjAwLFxuICBcInllbGxvdy03MDBcIjogJHllbGxvdy03MDAsXG4gIFwieWVsbG93LTgwMFwiOiAkeWVsbG93LTgwMCxcbiAgXCJ5ZWxsb3ctOTAwXCI6ICR5ZWxsb3ctOTAwXG4pICFkZWZhdWx0O1xuXG4kZ3JlZW5zOiAoXG4gIFwiZ3JlZW4tMTAwXCI6ICRncmVlbi0xMDAsXG4gIFwiZ3JlZW4tMjAwXCI6ICRncmVlbi0yMDAsXG4gIFwiZ3JlZW4tMzAwXCI6ICRncmVlbi0zMDAsXG4gIFwiZ3JlZW4tNDAwXCI6ICRncmVlbi00MDAsXG4gIFwiZ3JlZW4tNTAwXCI6ICRncmVlbi01MDAsXG4gIFwiZ3JlZW4tNjAwXCI6ICRncmVlbi02MDAsXG4gIFwiZ3JlZW4tNzAwXCI6ICRncmVlbi03MDAsXG4gIFwiZ3JlZW4tODAwXCI6ICRncmVlbi04MDAsXG4gIFwiZ3JlZW4tOTAwXCI6ICRncmVlbi05MDBcbikgIWRlZmF1bHQ7XG5cbiR0ZWFsczogKFxuICBcInRlYWwtMTAwXCI6ICR0ZWFsLTEwMCxcbiAgXCJ0ZWFsLTIwMFwiOiAkdGVhbC0yMDAsXG4gIFwidGVhbC0zMDBcIjogJHRlYWwtMzAwLFxuICBcInRlYWwtNDAwXCI6ICR0ZWFsLTQwMCxcbiAgXCJ0ZWFsLTUwMFwiOiAkdGVhbC01MDAsXG4gIFwidGVhbC02MDBcIjogJHRlYWwtNjAwLFxuICBcInRlYWwtNzAwXCI6ICR0ZWFsLTcwMCxcbiAgXCJ0ZWFsLTgwMFwiOiAkdGVhbC04MDAsXG4gIFwidGVhbC05MDBcIjogJHRlYWwtOTAwXG4pICFkZWZhdWx0O1xuXG4kY3lhbnM6IChcbiAgXCJjeWFuLTEwMFwiOiAkY3lhbi0xMDAsXG4gIFwiY3lhbi0yMDBcIjogJGN5YW4tMjAwLFxuICBcImN5YW4tMzAwXCI6ICRjeWFuLTMwMCxcbiAgXCJjeWFuLTQwMFwiOiAkY3lhbi00MDAsXG4gIFwiY3lhbi01MDBcIjogJGN5YW4tNTAwLFxuICBcImN5YW4tNjAwXCI6ICRjeWFuLTYwMCxcbiAgXCJjeWFuLTcwMFwiOiAkY3lhbi03MDAsXG4gIFwiY3lhbi04MDBcIjogJGN5YW4tODAwLFxuICBcImN5YW4tOTAwXCI6ICRjeWFuLTkwMFxuKSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvci12YXJpYWJsZXNcbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICBcImluZm9cIjogICAgICAgJGluZm8sXG4gIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gIFwiZGFya1wiOiAgICAgICAkZGFya1xuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3JzLW1hcFxuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbjogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc21vb3RoLXNjcm9sbDogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1jb250YWluZXItY2xhc3NlczogICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtY3NzZ3JpZDogICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1idXR0b24tcG9pbnRlcnM6ICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmZzOiAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1uZWdhdGl2ZS1tYXJnaW5zOiAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzOiAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciA6cm9vdCBDU1MgdmFyaWFibGVzXG5cbiR2YXJpYWJsZS1wcmVmaXg6ICAgICAgICAgICAgIGJzLSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjAgZm9yIHRoZSBzaG9ydGVyIGAkcHJlZml4YFxuJHByZWZpeDogICAgICAgICAgICAgICAgICAgICAgJHZhcmlhYmxlLXByZWZpeCAhZGVmYXVsdDtcblxuLy8gR3JhZGllbnRcbi8vXG4vLyBUaGUgZ3JhZGllbnQgd2hpY2ggaXMgYWRkZWQgdG8gY29tcG9uZW50cyBpZiBgJGVuYWJsZS1ncmFkaWVudHNgIGlzIGB0cnVlYFxuLy8gVGhpcyBncmFkaWVudCBpcyBhbHNvIGFkZGVkIHRvIGVsZW1lbnRzIHdpdGggYC5iZy1ncmFkaWVudGBcbi8vIHNjc3MtZG9jcy1zdGFydCB2YXJpYWJsZS1ncmFkaWVudFxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKCR3aGl0ZSwgLjE1KSwgcmdiYSgkd2hpdGUsIDApKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdmFyaWFibGUtZ3JhZGllbnRcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBzcGFjZXItdmFyaWFibGVzLW1hcHNcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKFxuICAwOiAwLFxuICAxOiAkc3BhY2VyICogLjI1LFxuICAyOiAkc3BhY2VyICogLjUsXG4gIDM6ICRzcGFjZXIsXG4gIDQ6ICRzcGFjZXIgKiAxLjUsXG4gIDU6ICRzcGFjZXIgKiAzLFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgc3BhY2VyLXZhcmlhYmxlcy1tYXBzXG5cbi8vIFBvc2l0aW9uXG4vL1xuLy8gRGVmaW5lIHRoZSBlZGdlIHBvc2l0aW9uaW5nIGFuY2hvcnMgb2YgdGhlIHBvc2l0aW9uIHV0aWxpdGllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBvc2l0aW9uLW1hcFxuJHBvc2l0aW9uLXZhbHVlczogKFxuICAwOiAwLFxuICA1MDogNTAlLFxuICAxMDA6IDEwMCVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBvc2l0aW9uLW1hcFxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRib2R5LXRleHQtYWxpZ246ICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4kbGluay1zaGFkZS1wZXJjZW50YWdlOiAgICAgICAgICAgICAgICAgICAyMCUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBzaGlmdC1jb2xvcigkbGluay1jb2xvciwgJGxpbmstc2hhZGUtcGVyY2VudGFnZSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kc3RyZXRjaGVkLWxpbmstcHNldWRvLWVsZW1lbnQ6ICAgICAgICAgICBhZnRlciAhZGVmYXVsdDtcbiRzdHJldGNoZWQtbGluay16LWluZGV4OiAgICAgICAgICAgICAgICAgIDEgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyaWQtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JpZC1icmVha3BvaW50c1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHhcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuLy8gQ29udGFpbmVyIHBhZGRpbmdcblxuJGNvbnRhaW5lci1wYWRkaW5nLXg6ICRncmlkLWd1dHRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXZhcmlhYmxlc1xuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci13aWR0aHM6IChcbiAgMTogMXB4LFxuICAyOiAycHgsXG4gIDM6IDNweCxcbiAgNDogNHB4LFxuICA1OiA1cHhcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItc3R5bGU6ICAgICAgICAgICAgICAgIHNvbGlkICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvci10cmFuc2x1Y2VudDogICAgcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3JkZXItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLTJ4bDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIk5vdG8gU2Fuc1wiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBhZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncywgYW5kIG1hcmdpbnNcbi8vICRmb250LXNpemUtYmFzZSBhZmZlY3RzIHRoZSBmb250IHNpemUgb2YgdGhlIGJvZHkgdGV4dFxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6ICAgICAgICA2MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAyICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb250LXNpemVzXG4kZm9udC1zaXplczogKFxuICAxOiAkaDEtZm9udC1zaXplLFxuICAyOiAkaDItZm9udC1zaXplLFxuICAzOiAkaDMtZm9udC1zaXplLFxuICA0OiAkaDQtZm9udC1zaXplLFxuICA1OiAkaDUtZm9udC1zaXplLFxuICA2OiAkaDYtZm9udC1zaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXNpemVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBoZWFkaW5ncy12YXJpYWJsZXNcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1zdHlsZTogICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaGVhZGluZ3MtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkaXNwbGF5LWhlYWRpbmdzXG4kZGlzcGxheS1mb250LXNpemVzOiAoXG4gIDE6IDVyZW0sXG4gIDI6IDQuNXJlbSxcbiAgMzogNHJlbSxcbiAgNDogMy41cmVtLFxuICA1OiAzcmVtLFxuICA2OiAyLjVyZW1cbikgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5LWZvbnQtZmFtaWx5OiBudWxsICFkZWZhdWx0O1xuJGRpc3BsYXktZm9udC1zdHlsZTogIG51bGwgIWRlZmF1bHQ7XG4kZGlzcGxheS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZGlzcGxheS1oZWFkaW5nc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdHlwZS12YXJpYWJsZXNcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIC44NzVlbSAhZGVmYXVsdDtcblxuJHN1Yi1zdXAtZm9udC1zaXplOiAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGluaXRpYWxpc20tZm9udC1zaXplOiAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGhyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kaHItYmctY29sb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjIuMFxuJGhyLWhlaWdodDogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjBcbi8vIGZ1c3YtZW5hYmxlXG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIEFsbG93cyBmb3IgaW5oZXJpdGVkIGNvbG9yc1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRoci1vcGFjaXR5OiAgICAgICAgICAgICAgICAgIC4yNSAhZGVmYXVsdDtcblxuJGxlZ2VuZC1tYXJnaW4tYm90dG9tOiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtd2VpZ2h0OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4xODc1ZW0gIWRlZmF1bHQ7XG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAkeWVsbG93LTEwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdHlwZS12YXJpYWJsZXNcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS12YXJpYWJsZXNcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduOiAgIHRvcCAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtY29sb3I6ICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmctZmFjdG9yOiAgICAgLjA1ICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmc6ICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1zdHJpcGVkLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmctZmFjdG9yOiAgICAgIC4xICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1hY3RpdmUtYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnLWZhY3RvcjogICAgICAgLjA3NSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtaG92ZXItYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1mYWN0b3I6ICAgICAgICAgLjEgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWNvbHVtbnMtb3JkZXI6IGV2ZW4gIWRlZmF1bHQ7XG5cbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6IGN1cnJlbnRjb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1zY2FsZTogICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGFibGUtbG9vcFxuJHRhYmxlLXZhcmlhbnRzOiAoXG4gIFwicHJpbWFyeVwiOiAgICBzaGlmdC1jb2xvcigkcHJpbWFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzZWNvbmRhcnlcIjogIHNoaWZ0LWNvbG9yKCRzZWNvbmRhcnksICR0YWJsZS1iZy1zY2FsZSksXG4gIFwic3VjY2Vzc1wiOiAgICBzaGlmdC1jb2xvcigkc3VjY2VzcywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJpbmZvXCI6ICAgICAgIHNoaWZ0LWNvbG9yKCRpbmZvLCAkdGFibGUtYmctc2NhbGUpLFxuICBcIndhcm5pbmdcIjogICAgc2hpZnQtY29sb3IoJHdhcm5pbmcsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwiZGFuZ2VyXCI6ICAgICBzaGlmdC1jb2xvcigkZGFuZ2VyLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmssXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS1sb29wXG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1idG4tdmFyaWFibGVzXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eTogLjI1ICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yLW9wYWNpdHkpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ibHVyOiAgICAgICAgICAwICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgJGlucHV0LWJ0bi1mb2N1cy1ibHVyICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBpbnB1dC1idG4tdmFyaWFibGVzXG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLXZhcmlhYmxlc1xuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstY29sb3IpICFkZWZhdWx0O1xuJGJ0bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGJ0bi1ob3Zlci1iZy1zaGFkZS1hbW91bnQ6ICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYmctdGludC1hbW91bnQ6ICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci1zaGFkZS1hbW91bnQ6ICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1ib3JkZXItdGludC1hbW91bnQ6ICAgIDEwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXNoYWRlLWFtb3VudDogICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1iZy10aW50LWFtb3VudDogICAgICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXNoYWRlLWFtb3VudDogIDI1JSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudDogICAxMCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJ0bi12YXJpYWJsZXNcblxuXG4vLyBGb3Jtc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1sYWJlbC12YXJpYWJsZXNcbiRmb3JtLWxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zdHlsZTogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1pbnB1dC12YXJpYWJsZXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDUwJSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAqIC41KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tY29sb3Itd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0taW5wdXQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWNoZWNrLXZhcmlhYmxlc1xuJGZvcm0tY2hlY2staW5wdXQtd2lkdGg6ICAgICAgICAgICAgICAgICAgMWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbWluLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1wYWRkaW5nLXN0YXJ0OiAgICAgICAgICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1hY3RpdmUtZmlsdGVyOiAgICAgICAgICBicmlnaHRuZXNzKDkwJSkgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgIDFweCBzb2xpZCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcmFkaW8tYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm9yZGVyOiAgICAgICAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcjogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAgICRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nbTYgMTAgMyAzIDYtNicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWNoZWNrZWQtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzInIGZpbGw9JyN7JGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwaDgnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stYnRuLWNoZWNrLWRpc2FibGVkLW9wYWNpdHk6ICAgICRidG4tZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi1lbmQ6ICAgIDFyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tY2hlY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcbiRmb3JtLXN3aXRjaC1jb2xvcjogICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAyZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtcGFkZGluZy1zdGFydDogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICsgLjVlbSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1iZy1pbWFnZTogICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRmb3JtLXN3aXRjaC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYm9yZGVyLXJhZGl1czogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXRyYW5zaXRpb246ICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yOiAgICAgICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtZm9jdXMtYmctaW1hZ2U6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtZm9jdXMtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1pbWFnZTogICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1wb3NpdGlvbjogcmlnaHQgY2VudGVyICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGlucHV0LWdyb3VwLXZhcmlhYmxlc1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBpbnB1dC1ncm91cC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tc2VsZWN0LXZhcmlhYmxlc1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgICAgJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgZm9yIGJhY2tncm91bmQtaW1hZ2VcbiRmb3JtLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXBvc2l0aW9uOiAgICAgICAgICAgcmlnaHQgJGZvcm0tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgICAxNnB4IDEycHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2Jz48cGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdtMiA1IDYgNiA2LTYnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctZW5kOiAkZm9ybS1zZWxlY3QtcGFkZGluZy14ICogMi41ICsgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgIGNlbnRlciByaWdodCAkZm9ybS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRmb3JtLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cy1zbTogICAgJGlucHV0LWJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzLWxnOiAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXRyYW5zaXRpb246ICAgICAgICAgICRpbnB1dC10cmFuc2l0aW9uICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tcmFuZ2UtdmFyaWFibGVzXG4kZm9ybS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgICRib3gtc2hhZG93LWluc2V0ICFkZWZhdWx0O1xuXG4kZm9ybS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkZm9ybS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gRWRnZVxuJGZvcm0tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDcwJSkgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItdHJhbnNpdGlvbjogICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1yYW5nZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmlsZS12YXJpYWJsZXNcbiRmb3JtLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGZvcm0tZmlsZS1idXR0b24taG92ZXItYmc6ICAgICAgIHNoYWRlLWNvbG9yKCRmb3JtLWZpbGUtYnV0dG9uLWJnLCA1JSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmlsZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG4kZm9ybS1mbG9hdGluZy1oZWlnaHQ6ICAgICAgICAgICAgYWRkKDMuNXJlbSwgJGlucHV0LWhlaWdodC1ib3JkZXIpICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGluZS1oZWlnaHQ6ICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXg6ICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10OiAgIDEuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy1iOiAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC1vcGFjaXR5OiAgICAgLjY1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtdHJhbnNmb3JtOiAgIHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtLjVyZW0pIHRyYW5zbGF0ZVgoLjE1cmVtKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1mbG9hdGluZy12YXJpYWJsZXNcblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZlZWRiYWNrLXZhcmlhYmxlc1xuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvcm0tdGV4dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXN0eWxlOiAgICAgICAgICAkZm9ybS10ZXh0LWZvbnQtc3R5bGUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgICRkYW5nZXIgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzMuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmVlZGJhY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKFxuICBcInZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICksXG4gIFwiaW52YWxpZFwiOiAoXG4gICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB6aW5kZXgtc3RhY2tcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtb2ZmY2FudmFzLWJhY2tkcm9wOiAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW9mZmNhbnZhczogICAgICAgICAgICAgICAgICAxMDQ1ICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTUgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA4MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9hc3Q6ICAgICAgICAgICAgICAgICAgICAgIDEwOTAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHppbmRleC1zdGFja1xuXG5cbi8vIE5hdnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdi12YXJpYWJsZXNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1mb250LXNpemU6ICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG5hdi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstY29sb3IpICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJG5hdi1saW5rLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXYtdmFyaWFibGVzXG5cblxuLy8gTmF2YmFyXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItdmFyaWFibGVzXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1tYXJnaW4tZW5kOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb2N1cy13aWR0aDogICAgICAgICRidG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbjogICAgICAgICBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRuYXZiYXItbGlnaHQtY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogICAgICAgICAgcmdiYSgkYmxhY2ssIC43KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuOSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKCRibGFjaywgLjMpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWljb24tYmc6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnPjxwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgLjEpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbmF2YmFyLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgbmF2YmFyLWRhcmstdmFyaWFibGVzXG4kbmF2YmFyLWRhcmstY29sb3I6ICAgICAgICAgICAgICAgICByZ2JhKCR3aGl0ZSwgLjU1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvcjogICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNzUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgkd2hpdGUsIC4yNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1pY29uLWJnOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMCAzMCc+PHBhdGggc3Ryb2tlPScjeyRuYXZiYXItZGFyay1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLXRvZ2dsZXItYm9yZGVyLWNvbG9yOiAgcmdiYSgkd2hpdGUsIC4xKSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItZGFyay12YXJpYWJsZXNcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkcm9wZG93bi12YXJpYWJsZXNcbiRkcm9wZG93bi1taW4td2lkdGg6ICAgICAgICAgICAgICAgIDEwcmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGRyb3Bkb3duLXNwYWNlcjogICAgICAgICAgICAgICAgICAgLjEyNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1jb2xvcjogICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogICAgICBzdWJ0cmFjdCgkZHJvcGRvd24tYm9yZGVyLXJhZGl1cywgJGRyb3Bkb3duLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGl2aWRlci1iZzogICAgICAgICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgIHNoYWRlLWNvbG9yKCRkcm9wZG93bi1saW5rLWNvbG9yLCAxMCUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAkZ3JheS01MDAgIWRlZmF1bHQ7XG5cbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteTogICAgICAgICAgICRzcGFjZXIgKiAuMjUgIWRlZmF1bHQ7XG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6ICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteDogICAgICAgICAkZHJvcGRvd24taXRlbS1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteTogICAgICAgICAkZHJvcGRvd24tcGFkZGluZy15ICFkZWZhdWx0O1xuLy8gZnVzdi1kaXNhYmxlXG4kZHJvcGRvd24taGVhZGVyLXBhZGRpbmc6ICAgICAgICAgICAkZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteSAkZHJvcGRvd24taGVhZGVyLXBhZGRpbmcteCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjBcbi8vIGZ1c3YtZW5hYmxlXG4vLyBzY3NzLWRvY3MtZW5kIGRyb3Bkb3duLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tZGFyay12YXJpYWJsZXNcbiRkcm9wZG93bi1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJvcmRlci1jb2xvcjogICAgICAgICRkcm9wZG93bi1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1kaXZpZGVyLWJnOiAgICAgICAgICAkZHJvcGRvd24tZGl2aWRlci1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWJveC1zaGFkb3c6ICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWNvbG9yOiAgICAgICAgICAkZHJvcGRvd24tZGFyay1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItY29sb3I6ICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstaG92ZXItYmc6ICAgICAgIHJnYmEoJHdoaXRlLCAuMTUpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtY29sb3I6ICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1hY3RpdmUtYmc6ICAgICAgJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNTAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstaGVhZGVyLWNvbG9yOiAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi1kYXJrLXZhcmlhYmxlc1xuXG5cbi8vIFBhZ2luYXRpb25cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBhZ2luYXRpb24tdmFyaWFibGVzXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14OiAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6ICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstY29sb3IpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tbWFyZ2luLXN0YXJ0OiAgICAgICAgICAgKCRwYWdpbmF0aW9uLWJvcmRlci13aWR0aCAqIC0xKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZm9jdXMtY29sb3I6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogICAgICAgICAgMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJHBhZ2luYXRpb24tYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLXRyYW5zaXRpb246ICAgICAgICAgICAgICBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtc206ICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXJhZGl1cy1sZzogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBhZ2luYXRpb24tdmFyaWFibGVzXG5cblxuLy8gUGxhY2Vob2xkZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwbGFjZWhvbGRlcnNcbiRwbGFjZWhvbGRlci1vcGFjaXR5LW1heDogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJHBsYWNlaG9sZGVyLW9wYWNpdHktbWluOiAgICAgICAgICAgLjIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBsYWNlaG9sZGVyc1xuXG4vLyBDYXJkc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZC12YXJpYWJsZXNcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1zcGFjZXIteDogICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtdGl0bGUtc3BhY2VyLXk6ICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgc3VidHJhY3QoJGNhcmQtYm9yZGVyLXJhZGl1cywgJGNhcmQtYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICRjYXJkLXNwYWNlci15ICogLjUgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteCAhZGVmYXVsdDtcbiRjYXJkLWNhcC1iZzogICAgICAgICAgICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDMpICFkZWZhdWx0O1xuJGNhcmQtY2FwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcmQtaW1nLW92ZXJsYXktcGFkZGluZzogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLWdyb3VwLW1hcmdpbjogICAgICAgICAgICAgICAgICRncmlkLWd1dHRlci13aWR0aCAqIC41ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJkLXZhcmlhYmxlc1xuXG4vLyBBY2NvcmRpb25cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGFjY29yZGlvbi12YXJpYWJsZXNcbiRhY2NvcmRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7IC8vIFNhc3MgdmFyaWFibGUgYmVjYXVzZSBvZiAkYWNjb3JkaW9uLWJ1dHRvbi1pY29uXG4kYWNjb3JkaW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgc3VidHJhY3QoJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzLCAkYWNjb3JkaW9uLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLXBhZGRpbmcteTogICAgICAgICAgICAgICRhY2NvcmRpb24tcGFkZGluZy15ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy14OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1jb2xvcjogICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYmc6ICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWFjY29yZGlvbi1iZykgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgICAkYnRuLXRyYW5zaXRpb24sIGJvcmRlci1yYWRpdXMgLjE1cyBlYXNlICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWJnOiAgICAgICAgICAgICAgdGludC1jb2xvcigkY29tcG9uZW50LWFjdGl2ZS1iZywgOTAlKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgIHNoYWRlLWNvbG9yKCRwcmltYXJ5LCAxMCUpICFkZWZhdWx0O1xuXG4kYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3JkZXItY29sb3I6ICAgICAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tZm9jdXMtYm94LXNoYWRvdzogICAgICAgJGJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kYWNjb3JkaW9uLWljb24td2lkdGg6ICAgICAgICAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGFjY29yZGlvbi1idXR0b24tY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAkYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tdHJhbnNpdGlvbjogICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuJGFjY29yZGlvbi1pY29uLXRyYW5zZm9ybTogICAgICAgICAgICAgICAgcm90YXRlKC0xODBkZWcpICFkZWZhdWx0O1xuXG4kYWNjb3JkaW9uLWJ1dHRvbi1pY29uOiAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRhY2NvcmRpb24taWNvbi1jb2xvcn0nPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1pY29uOiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGFjY29yZGlvbi1pY29uLWFjdGl2ZS1jb2xvcn0nPjxwYXRoIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTTEuNjQ2IDQuNjQ2YS41LjUgMCAwIDEgLjcwOCAwTDggMTAuMjkzbDUuNjQ2LTUuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDggMGwtNi02YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYWNjb3JkaW9uLXZhcmlhYmxlc1xuXG4vLyBUb29sdGlwc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdG9vbHRpcC12YXJpYWJsZXNcbiR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc20gIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiR0b29sdGlwLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICRibGFjayAhZGVmYXVsdDtcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjI1ICFkZWZhdWx0O1xuJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgJHNwYWNlciAqIC41ICFkZWZhdWx0O1xuJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gVE9ETzogcmVtb3ZlIHRoaXMgaW4gdjZcblxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW0gIWRlZmF1bHQ7XG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbSAhZGVmYXVsdDtcbi8vIGZ1c3YtZGlzYWJsZVxuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiBCb290c3RyYXAgNS4yLjAgZm9yIENTUyB2YXJpYWJsZXNcbi8vIGZ1c3YtZW5hYmxlXG4vLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtdmFyaWFibGVzXG5cbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLWZlZWRiYWNrLXZhcmlhYmxlc1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAkdG9vbHRpcC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogICAgICR0b29sdGlwLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtZm9udC1zaXplOiAgICAgJHRvb2x0aXAtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogICBudWxsICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAgICAgICAkdG9vbHRpcC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0b29sdGlwLWZlZWRiYWNrLXZhcmlhYmxlc1xuXG5cbi8vIFBvcG92ZXJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwb3BvdmVyLXZhcmlhYmxlc1xuJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4ICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1pbm5lci1ib3JkZXItcmFkaXVzOiAgICAgICBzdWJ0cmFjdCgkcG9wb3Zlci1ib3JkZXItcmFkaXVzLCAkcG9wb3Zlci1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWhlYWRlci1mb250LXNpemU6ICAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIHNoYWRlLWNvbG9yKCRwb3BvdmVyLWJnLCA2JSkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgcG9wb3Zlci12YXJpYWJsZXNcblxuLy8gZnVzdi1kaXNhYmxlXG4vLyBEZXByZWNhdGVkIGluIEJvb3RzdHJhcCA1LjIuMCBmb3IgQ1NTIHZhcmlhYmxlc1xuJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmcgIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cblxuLy8gVG9hc3RzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b2FzdC12YXJpYWJsZXNcbiR0b2FzdC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAgIDM1MHB4ICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuODc1cmVtICFkZWZhdWx0O1xuJHRvYXN0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0b2FzdC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9hc3QtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcbiR0b2FzdC1zcGFjaW5nOiAgICAgICAgICAgICAgICAgICAgICRjb250YWluZXItcGFkZGluZy14ICFkZWZhdWx0O1xuXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6ICAgICByZ2JhKCR3aGl0ZSwgLjg1KSAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHJnYmEoJGJsYWNrLCAuMDUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0b2FzdC12YXJpYWJsZXNcblxuXG4vLyBCYWRnZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJhZGdlLXZhcmlhYmxlc1xuJGJhZGdlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRiYWRnZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRiYWRnZS1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgIC4zNWVtICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgLjY1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYmFkZ2UtdmFyaWFibGVzXG5cblxuLy8gTW9kYWxzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBtb2RhbC12YXJpYWJsZXNcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG5cbiRtb2RhbC1mb290ZXItbWFyZ2luLWJldHdlZW46ICAgICAgIC41cmVtICFkZWZhdWx0O1xuXG4kbW9kYWwtZGlhbG9nLW1hcmdpbjogICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6ICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kbW9kYWwtY29udGVudC1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1pbm5lci1ib3JkZXItcmFkaXVzOiBzdWJ0cmFjdCgkbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzLCAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm94LXNoYWRvdy14czogICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAgICAgLjUgIWRlZmF1bHQ7XG5cbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgICAgJG1vZGFsLWlubmVyLXBhZGRpbmcgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogICAgICAgICAgICAgICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14ICFkZWZhdWx0OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cbiRtb2RhbC1mb290ZXItYmc6ICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogICAgICAgICAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kbW9kYWwtc206ICAgICAgICAgICAgICAgICAgICAgICAgICAzMDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgICAgICAgIDUwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLWxnOiAgICAgICAgICAgICAgICAgICAgICAgICAgODAwcHggIWRlZmF1bHQ7XG4kbW9kYWwteGw6ICAgICAgICAgICAgICAgICAgICAgICAgICAxMTQwcHggIWRlZmF1bHQ7XG5cbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogICAgICAgICAgICAgIHRyYW5zbGF0ZSgwLCAtNTBweCkgIWRlZmF1bHQ7XG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06ICAgICAgICAgICAgICBub25lICFkZWZhdWx0O1xuJG1vZGFsLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIC4zcyBlYXNlLW91dCAhZGVmYXVsdDtcbiRtb2RhbC1zY2FsZS10cmFuc2Zvcm06ICAgICAgICAgICAgIHNjYWxlKDEuMDIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBtb2RhbC12YXJpYWJsZXNcblxuXG4vLyBBbGVydHNcbi8vXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGFsZXJ0LXZhcmlhYmxlc1xuJGFsZXJ0LXBhZGRpbmcteTogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LXBhZGRpbmcteDogICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGFsZXJ0LW1hcmdpbi1ib3R0b206ICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgICAgJGZvbnQtd2VpZ2h0LWJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kYWxlcnQtYmctc2NhbGU6ICAgICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXNjYWxlOiAgICAgICAgICAgIC03MCUgIWRlZmF1bHQ7XG4kYWxlcnQtY29sb3Itc2NhbGU6ICAgICAgICAgICAgIDQwJSAhZGVmYXVsdDtcbiRhbGVydC1kaXNtaXNzaWJsZS1wYWRkaW5nLXI6ICAgJGFsZXJ0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIDN4IGNvdmVycyB3aWR0aCBvZiB4IHBsdXMgZGVmYXVsdCBwYWRkaW5nIG9uIGVpdGhlciBzaWRlXG4vLyBzY3NzLWRvY3MtZW5kIGFsZXJ0LXZhcmlhYmxlc1xuXG5cbi8vIFByb2dyZXNzIGJhcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHByb2dyZXNzLXZhcmlhYmxlc1xuJHByb2dyZXNzLWhlaWdodDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIC43NSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iZzogICAgICAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgJGJveC1zaGFkb3ctaW5zZXQgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAgICAgICAkcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYW5pbWF0aW9uLXRpbWluZzogICAgIDFzIGxpbmVhciBpbmZpbml0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogICAgICAgICAgIHdpZHRoIC42cyBlYXNlICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwcm9ncmVzcy12YXJpYWJsZXNcblxuXG4vLyBMaXN0IGdyb3VwXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBsaXN0LWdyb3VwLXZhcmlhYmxlc1xuJGxpc3QtZ3JvdXAtY29sb3I6ICAgICAgICAgICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYmc6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4xMjUpICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteTogICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1iZy1zY2FsZTogICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tY29sb3Itc2NhbGU6ICAgICAgIDQwJSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICAgICAgICAgICAgICAgJGdyYXktMTAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRsaXN0LWdyb3VwLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJGxpc3QtZ3JvdXAtYmcgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogICAgICAgICAgICRncmF5LTcwMCAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogICAgICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvciAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGxpc3QtZ3JvdXAtdmFyaWFibGVzXG5cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGh1bWJuYWlsLXZhcmlhYmxlc1xuJHRodW1ibmFpbC1wYWRkaW5nOiAgICAgICAgICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJHRodW1ibmFpbC1iZzogICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm94LXNoYWRvdzogICAgICAgICAgICAgICRib3gtc2hhZG93LXNtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aHVtYm5haWwtdmFyaWFibGVzXG5cblxuLy8gRmlndXJlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZmlndXJlLXZhcmlhYmxlc1xuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogICAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRmaWd1cmUtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZmlndXJlLXZhcmlhYmxlc1xuXG5cbi8vIEJyZWFkY3J1bWJzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBicmVhZGNydW1iLXZhcmlhYmxlc1xuJGJyZWFkY3J1bWItZm9udC1zaXplOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteTogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nLXg6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXI6ICAgICAgICAgICAgICAgIHF1b3RlKFwiL1wiKSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWRpdmlkZXItZmxpcHBlZDogICAgICAgICRicmVhZGNydW1iLWRpdmlkZXIgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1ib3JkZXItcmFkaXVzOiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBicmVhZGNydW1iLXZhcmlhYmxlc1xuXG4vLyBDYXJvdXNlbFxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2Fyb3VzZWwtdmFyaWFibGVzXG4kY2Fyb3VzZWwtY29udHJvbC1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWhvdmVyLW9wYWNpdHk6ICAgICAuOSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xNXMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWluZGljYXRvci13aWR0aDogICAgICAgICAgIDMwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1oaXQtYXJlYS1oZWlnaHQ6IDEwcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogICAgICAgICAgM3B4ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1vcGFjaXR5OiAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYWN0aXZlLW9wYWNpdHk6ICAxICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiAgICAgIG9wYWNpdHkgLjZzIGVhc2UgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiAgICAgICAgICAgICA3MCUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNhcHRpb24tcGFkZGluZy15OiAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1zcGFjZXI6ICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtaWNvbi13aWR0aDogICAgICAgIDJyZW0gIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nPjxwYXRoIGQ9J00xMS4zNTQgMS42NDZhLjUuNSAwIDAgMSAwIC43MDhMNS43MDcgOGw1LjY0NyA1LjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC02LTZhLjUuNSAwIDAgMSAwLS43MDhsNi02YS41LjUgMCAwIDEgLjcwOCAweicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbi1iZzogICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nPjxwYXRoIGQ9J000LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgICAuNnMgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0ICFkZWZhdWx0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxuLy8gc2Nzcy1kb2NzLWVuZCBjYXJvdXNlbC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcm91c2VsLWRhcmstdmFyaWFibGVzXG4kY2Fyb3VzZWwtZGFyay1pbmRpY2F0b3ItYWN0aXZlLWJnOiAgJGJsYWNrICFkZWZhdWx0O1xuJGNhcm91c2VsLWRhcmstY2FwdGlvbi1jb2xvcjogICAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjYXJvdXNlbC1kYXJrLWNvbnRyb2wtaWNvbi1maWx0ZXI6ICBpbnZlcnQoMSkgZ3JheXNjYWxlKDEwMCkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNhcm91c2VsLWRhcmstdmFyaWFibGVzXG5cblxuLy8gU3Bpbm5lcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwaW5uZXItdmFyaWFibGVzXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItdmVydGljYWwtYWxpZ246ICAtLjEyNWVtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgICAuMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWFuaW1hdGlvbi1zcGVlZDogLjc1cyAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgc3Bpbm5lci12YXJpYWJsZXNcblxuXG4vLyBDbG9zZVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2xvc2UtdmFyaWFibGVzXG4kYnRuLWNsb3NlLXdpZHRoOiAgICAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaGVpZ2h0OiAgICAgICAgICAgJGJ0bi1jbG9zZS13aWR0aCAhZGVmYXVsdDtcbiRidG4tY2xvc2UtcGFkZGluZy14OiAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXBhZGRpbmcteTogICAgICAgICRidG4tY2xvc2UtcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1jb2xvcjogICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWJnOiAgICAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRidG4tY2xvc2UtY29sb3J9Jz48cGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMCAxIDEuNDE0IDBMOCA2LjU4NiAxNC4yOTMuMjkzYTEgMSAwIDEgMSAxLjQxNCAxLjQxNEw5LjQxNCA4bDYuMjkzIDYuMjkzYTEgMSAwIDAgMS0xLjQxNCAxLjQxNEw4IDkuNDE0bC02LjI5MyA2LjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAgMSAwLTEuNDE0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZm9jdXMtc2hhZG93OiAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1vcGFjaXR5OiAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaG92ZXItb3BhY2l0eTogICAgLjc1ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1mb2N1cy1vcGFjaXR5OiAgICAxICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXdoaXRlLWZpbHRlcjogICAgIGludmVydCgxKSBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyMDAlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2xvc2UtdmFyaWFibGVzXG5cblxuLy8gT2ZmY2FudmFzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBvZmZjYW52YXMtdmFyaWFibGVzXG4kb2ZmY2FudmFzLXBhZGRpbmcteTogICAgICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtcGFkZGluZy14OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ob3Jpem9udGFsLXdpZHRoOiAgICAgICAgNDAwcHggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXZlcnRpY2FsLWhlaWdodDogICAgICAgICAzMHZoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgLjNzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10aXRsZS1saW5lLWhlaWdodDogICAgICAgJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iZy1jb2xvcjogICAgICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1jb2xvciAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAkbW9kYWwtYmFja2Ryb3AtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgb2ZmY2FudmFzLXZhcmlhYmxlc1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjE4NzVyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktYmcpICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjAsIHJlbW92aW5nIGluIHY2XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3100:
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShellComponent: () => (/* binding */ ShellComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 905);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class ShellComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShellComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ShellComponent,
    selectors: [["app-shell"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 0,
    template: function ShellComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n");
      }
    },
    dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4100:
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shell: () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component */ 3100);

/**
 * Provides helper methods to create routes.
 */
class Shell {
  // pageTitle: string;
  // constructor(
  //   private route: ActivatedRoute
  // ) {}
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes) {
    return {
      path: '',
      component: _shell_component__WEBPACK_IMPORTED_MODULE_0__.ShellComponent,
      children: routes
    };
  }
}

/***/ }),

/***/ 7482:
/*!*******************************************!*\
  !*** ./src/app/should-login.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShouldLoginComponent: () => (/* binding */ ShouldLoginComponent)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/auth/auth.service */ 7270);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ 7451);






class ShouldLoginComponent {
  constructor(authService, oAuthService) {
    this.authService = authService;
    this.oAuthService = oAuthService;
    this.version = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
  }
  login($event) {
    $event.preventDefault();
    this.oAuthService.initLoginFlow();
  }
  static #_ = this.ɵfac = function ShouldLoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShouldLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__.OAuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShouldLoginComponent,
    selectors: [["app-should-login"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 40,
    vars: 1,
    consts: [[1, "login-container", "bg-light"], [1, "login-box"], ["translate", ""], [1, "d-inline-block"], [1, "d-inline-block", "ml-3"], [1, "container"], [1, "card", "col-md-6", "mt-3", "mx-auto"], [1, "card-body"], [1, "card-title", "text-center"], [1, "far", "fa-3x", "fa-user-circle", "text-muted"], [1, "alert", "alert-dark"], [1, "btn", "btn-primary", "w-100", 3, "click"]],
    template: function ShouldLoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "APP_NAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n            You need to be logged in to view requested page. Please log in before continuing.\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShouldLoginComponent_Template_button_click_29_listener($event) {
          return ctx.login($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("v", ctx.version, "");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective],
    styles: ["\n\n\n\n.login-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.login-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\n  border-left: 4px solid theme-color(\"danger\");\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy90aGVtZS90aGVtZS12YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hvdWxkLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FDR0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0FBQ0Y7O0FBR0U7RUFDRSxXQUFBO0FBQUoiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQXBwbGljYXRpb24gZ2xvYmFsIHZhcmlhYmxlcy5cbiAqL1xuXG4vLyBTZXQgRm9udCBBd2Vzb21lIGZvbnQgcGF0aFxuJGZhLWZvbnQtcGF0aDogXCJ+QGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvd2ViZm9udHNcIjtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBCb290c3RyYXAgdmFyaWFibGVzXG4vL1xuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHZhcmlhYmxlcyBoZXJlIHRvIHN1aXRlIHlvdXIgdGhlbWUuXG4vLyBDb3B5IHZhcmlhYmxlcyB5b3Ugd2FudCB0byBjdXN0b21pemUgZnJvbSBub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzXG5cbi8vXG4vLyBDb2xvciBzeXN0ZW1cbi8vXG5cbiR3aGl0ZTogI2ZmZjtcbiRncmF5LTEwMDogI2Y4ZjlmYTtcbiRncmF5LTIwMDogI2U5ZWNlZjtcbiRncmF5LTMwMDogI2RlZTJlNjtcbiRncmF5LTQwMDogI2NlZDRkYTtcbiRncmF5LTUwMDogI2FkYjViZDtcbiRncmF5LTYwMDogIzg2OGU5NjtcbiRncmF5LTcwMDogIzQ5NTA1NztcbiRncmF5LTgwMDogIzM0M2E0MDtcbiRncmF5LTkwMDogIzIxMjUyOTtcbiRibGFjazogIzAwMDtcblxuJGJsdWU6ICMwMDczZGQ7XG4kaW5kaWdvOiAjNjYxMGYyO1xuJHB1cnBsZTogIzZmNDJjMTtcbiRwaW5rOiAjZTgzZThjO1xuJHJlZDogI2RjMzU0NTtcbiRvcmFuZ2U6ICNmZDdlMTQ7XG4keWVsbG93OiAjZmZjMTA3O1xuJGdyZWVuOiAjMjhhNzQ1O1xuJHRlYWw6ICMyMGM5OTc7XG4kY3lhbjogIzE3YTJiODtcblxuJHRoZW1lLWNvbG9yczogKFxuICBwcmltYXJ5OiAkYmx1ZSxcbiAgc2Vjb25kYXJ5OiAkZ3JheS02MDAsXG4gIHN1Y2Nlc3M6ICRncmVlbixcbiAgaW5mbzogJGN5YW4sXG4gIHdhcm5pbmc6ICR5ZWxsb3csXG4gIGRhbmdlcjogJHJlZCxcbiAgbGlnaHQ6ICRncmF5LTEwMCxcbiAgZGFyazogJGdyYXktODAwLFxuKTtcblxuLy8gVXNlIEJvb3RzdHJhcCBkZWZhdWx0cyBmb3Igb3RoZXIgdmFyaWFibGVzLCBpbXBvcnRlZCBoZXJlIHNvIHdlIGNhbiBhY2Nlc3MgYWxsIGFwcCB2YXJpYWJsZXMgaW4gb25lIHBsYWNlIHdoZW4gdXNlZFxuLy8gaW4gY29tcG9uZW50cy5cbkBpbXBvcnQgXCJib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zXCI7XG5AaW1wb3J0IFwiYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlc1wiO1xuIiwiQGltcG9ydCBcInNyYy90aGVtZS90aGVtZS12YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJib290c3RyYXAvc2Nzcy9taXhpbnMvX2JyZWFrcG9pbnRzXCI7XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmxvZ2luLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpO1xufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 620:
/*!**********************************!*\
  !*** ./src/environments/.env.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ env)
/* harmony export */ });
const env = {
  npm_package_version: '1.0.0'
};

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.env */ 620);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.

const environment = {
  production: false,
  version: _env__WEBPACK_IMPORTED_MODULE_0__.env.npm_package_version + '-dev',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  loadSampleData: false,
  //REST API server
  apiEndpoint: 'https://localhost:44378/api/v1',
  //Api_Endpoint: 'https://cat-netcore-api.azurewebsites.net/api/v1',
  //Api_Endpoint: 'https://mickleball-netcore-api.azurewebsites.net/api/v1',
  apiMockEndpoint: 'https://angular-datatables-demo-server.herokuapp.com',
  evaluationInstruction: {
    level20: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level25: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 2.5 should ALSO possess all 2.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level30: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 3.0 should ALSO possess all 2.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level35: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 3.5 should ALSO possess all 3.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level40: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 4.0 should ALSO possess all 3.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level45: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 4.5 should ALSO possess all 4.0 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>',
    level50: '<div class="alert alert-success"><h4>Section 2 - Skill Evaluation</h4><span class="fw-normal">Select a rating for each skill code.  Skill level 5.0 should ALSO possess all 4.5 skills.</span><p><div>A = Solid, consistent performance <br>B = Good basic form, but needs work <br> C = Attempted but very poorly executed/needs work <br>D = Not observed or not able to execute </div></p></div>'
  },
  // skills list in googlesheet
  googleSheet: {
    apiKey: 'AIzaSyC3AgyGHXMyj8j-iFZ4ucrenprWrZm0VKI',
    spreadsheetId: '17zEoQvmjqBHoDykjxgun4upXg5QT6KooHnuAp_wXmac',
    worksheetGrades: 'Grades',
    worksheetSkills: 'Skills'
  },
  // training video search in youtube
  youtube: {
    apiUrl: 'https://www.googleapis.com/youtube/v3/search',
    apiKey: 'AIzaSyAq9W0tD3SJxtn6RE0aUcBseMMz_WcKhAU',
    maxResults: 10
  },
  //IdentityServer/OIDC Configuration
  oidc: {
    // issuer: 'https://localhost:44310', // running on localhost
    // issuer: 'https://cat-token-identity.azurewebsites.net', // demo identityserver in Azure
    issuer: 'https://cat-token-identity.azurewebsites.net',
    // identityserver in Azure
    clientId: 'MickleballClient',
    // client id setup in IdentityServer4
    responseType: 'code',
    //code flow PKCE
    redirectUri: window.location.origin + '/auth-callback',
    postLogoutRedirectUri: window.location.origin,
    silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
    scope: 'openid profile email roles app.api.employeeprofile.read',
    // Ask offline_access to support refresh token refreshes
    useSilentRefresh: true,
    // Needed for Code Flow to suggest using iframe-based refreshes
    silentRefreshTimeout: 50000,
    // For faster testing
    timeoutFactor: 0.25,
    // For faster testing
    sessionChecksEnabled: false,
    showDebugInformation: false,
    // Also requires enabling "Verbose" level in devtools
    clearHashAfterLogin: false,
    // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
    nonceStateSeparator: 'semicolon' // Real semicolon gets mangled by IdentityServer's URI encoding
  },
  sampleModel40: {
    level: '4.0',
    playername: 'Fuji Nguyen',
    playeremail: 'fuji.nguyen@workcontrol.com',
    assessmentDate: '2022-10-24',
    '40-1': 'D',
    '40-2': 'A',
    '40-3': 'A',
    '40-4': 'A',
    '40-5': 'A',
    '40-6': 'A',
    '40-7': 'A',
    '40-8': 'A',
    '40-9': 'A',
    '40-10': 'A',
    '40-11': 'A',
    '40-12': 'D',
    '40-13': 'A',
    '40-14': 'B',
    '40-15': 'A',
    '40-16': 'A',
    '40-17': 'A',
    '40-18': 'A',
    '40-19': 'B',
    '40-20': 'A',
    '40-21': 'A',
    '40-22': 'C',
    evaluatorname: 'Emily Nguyen',
    evaluatoremail: 'emily@gmail.com',
    Notes: 'Lefty user',
    terms: true
  }
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/app.module */ 635);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 5312);
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 9832:
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"APP_NAME":"PickleIQ","Detail":"Detail","Hello world !":"Hello world !","Master":"Master","Version":"Version"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
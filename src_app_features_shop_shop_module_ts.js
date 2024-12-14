"use strict";
(self["webpackChunkPickleIQ"] = self["webpackChunkPickleIQ"] || []).push([["src_app_features_shop_shop_module_ts"],{

/***/ 6238:
/*!******************************************************!*\
  !*** ./src/app/features/shop/shop-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopRoutingModule: () => (/* binding */ ShopRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 8179);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop.component */ 6040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);





const routes = [
// Module is lazy loaded, see app-routing.module.ts
{
  path: '',
  component: _shop_component__WEBPACK_IMPORTED_MODULE_0__.ShopComponent,
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_1__.marker)('Shop')
  }
}];
class ShopRoutingModule {
  static #_ = this.ɵfac = function ShopRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShopRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ShopRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShopRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6040:
/*!*************************************************!*\
  !*** ./src/app/features/shop/shop.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopComponent: () => (/* binding */ ShopComponent)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@core/auth/auth.service */ 7270);





class ShopComponent {
  constructor(authService) {
    this.authService = authService;
    this.version = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
  }
  ngOnInit() {
    this.accessToken = this.authService.accessToken;
    this.idToken = this.authService.idToken;
    this.profile = this.authService.identityClaims;
    if (this.profile != null && this.profile != undefined) {
      this.identityClaims = JSON.stringify(this.profile);
      this.role = JSON.stringify(this.profile.role);
    }
  }
  static #_ = this.ɵfac = function ShopComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShopComponent,
    selectors: [["app-shop"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 116,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "jumbotron", "text-center"], ["translate", ""], [1, "card-group"], [1, "card", 2, "width", "18rem"], [1, "card-header"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B07GVDXW5D&asins=B07GVDXW5D&linkId=8ec4fcd14ea39dc8caf9b395e8a239a7&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], [1, "card-body"], [1, "card-text"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B074PD873C&asins=B074PD873C&linkId=be7a53ed6fc34bda5a2377255d746bf2&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B07G72DTSK&asins=B07G72DTSK&linkId=0c7264a69a7ed75029561c8c2213808a&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B07H8SB8C1&asins=B07H8SB8C1&linkId=fcb06e84b5ca8f5bf7b3c6ec032270f0&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B07XMKF4NM&asins=B07XMKF4NM&linkId=02bac86c0060de4874be5ba58ed23948&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B072QRW9KH&asins=B072QRW9KH&linkId=cbe70f297a11fc317081b9cbd77d93a0&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"], ["sandbox", "allow-popups allow-scripts allow-modals allow-forms allow-same-origin", "marginwidth", "0", "marginheight", "0", "scrolling", "no", "frameborder", "0", "src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtrustConstantResourceUrl"]`//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=fujinguyen-20&language=en_US&marketplace=amazon&region=US&placement=B07W5KC7JJ&asins=B07W5KC7JJ&linkId=cb893b50fd14e8c1bf5bc4b0a934276f&show_border=false&link_opens_in_new_window=true`, 2, "width", "120px", "height", "240px"]],
    template: function ShopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "The essential Pickelball training equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Paddle Set");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "iframe", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n          Starter pickleball set, passed USAPA testing and approved for sanctioned tournament play.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Ball 100-Pack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "iframe", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n          Bring 20-50 balls to practice drill so you and your partner have productive drill time vs chasing out ball.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Ball Hopper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "iframe", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "\n          The Gamma hopper can easily pick up and hold 50 standard size pickle balls. There is no need to chase every\n          ball that goes out of bounds.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Pickup Tube");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\n          No more bending and reaching for pickle balls. The tube effortlessly retrieves, stores and transports pickle\n          balls.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Pickleball Net");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "iframe", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "\n          This easy-assemble pickleball net is built on wheels for easy maneuverability and comes with a premium travel\n          bag.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "Water Bottle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "iframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Fill and refill your bottle and take it with you to the practice drills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Baseball Cap");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "iframe", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\n          Protect your skin from harmful UV rays and keep your hair out of your face and eyes by wearing this\n          comfortable baseball cap.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\n");
      }
    },
    dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1927:
/*!**********************************************!*\
  !*** ./src/app/features/shop/shop.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShopModule: () => (/* binding */ ShopModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shop-routing.module */ 6238);
/* harmony import */ var _shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.component */ 6040);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);






class ShopModule {
  static #_ = this.ɵfac = function ShopModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ShopModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: ShopModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _shop_component__WEBPACK_IMPORTED_MODULE_1__.ShopComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShopModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _shop_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShopRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _shop_component__WEBPACK_IMPORTED_MODULE_1__.ShopComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_shop_shop_module_ts.js.map
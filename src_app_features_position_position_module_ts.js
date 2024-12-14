"use strict";
(self["webpackChunkPickleIQ"] = self["webpackChunkPickleIQ"] || []).push([["src_app_features_position_position_module_ts"],{

/***/ 2050:
/*!************************************************************!*\
  !*** ./src/app/@shared/classes/query-string-parameters.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryStringParameters: () => (/* binding */ QueryStringParameters)
/* harmony export */ });
class QueryStringParameters {
  constructor() {
    this.toString = () => this.paramsAndValues.join('&');
    this.paramsAndValues = [];
  }
  push(key, value) {
    value = encodeURIComponent(value.toString());
    this.paramsAndValues.push([key, value].join('='));
  }
}

/***/ }),

/***/ 1564:
/*!************************************************!*\
  !*** ./src/app/@shared/classes/url-builder.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlBuilder: () => (/* binding */ UrlBuilder)
/* harmony export */ });
/* harmony import */ var _query_string_parameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-string-parameters */ 2050);
// Application Classes

class UrlBuilder {
  constructor(baseUrl, action, queryString) {
    this.baseUrl = baseUrl;
    this.action = action;
    this.url = [baseUrl, action].join('/');
    this.queryString = queryString || new _query_string_parameters__WEBPACK_IMPORTED_MODULE_0__.QueryStringParameters();
  }
  toString() {
    const qs = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}

/***/ }),

/***/ 7326:
/*!******************************************************************************!*\
  !*** ./src/app/@shared/confirmation-dialog/confirmation-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogComponent: () => (/* binding */ ConfirmationDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);


class ConfirmationDialogComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
  }
  ngOnInit() {}
  decline() {
    this.activeModal.close(false);
  }
  accept() {
    this.activeModal.close(true);
  }
  dismiss() {
    this.activeModal.dismiss();
  }
  static #_ = this.ɵfac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ConfirmationDialogComponent,
    selectors: [["app-confirmation-dialog"]],
    inputs: {
      title: "title",
      message: "message",
      btnOkText: "btnOkText",
      btnCancelText: "btnCancelText"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 24,
    vars: 4,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function ConfirmationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_5_listener() {
          return ctx.dismiss();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_17_listener() {
          return ctx.decline();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationDialogComponent_Template_button_click_20_listener() {
          return ctx.accept();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  ", ctx.message, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnCancelText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnOkText);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3754:
/*!****************************************************!*\
  !*** ./src/app/@shared/loader/loader.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LoaderComponent {
  constructor() {
    this.isLoading = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function LoaderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    inputs: {
      isLoading: "isLoading",
      message: "message"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 2,
    consts: [[1, "text-xs-center", 3, "hidden"], [1, "fas", "fa-cog", "fa-spin", "fa-3x"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
      }
    },
    styles: [".fa[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQHNoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5773:
/*!******************************************!*\
  !*** ./src/app/@shared/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/loader.component */ 3754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
    imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent],
    exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent]
  });
})();

/***/ }),

/***/ 4101:
/*!***************************************************************************************!*\
  !*** ./src/app/features/employee/detail/employee-detail/employee-detail.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmployeeDetailComponent: () => (/* binding */ EmployeeDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);




class EmployeeDetailComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.title = 'Employee Detail';
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function EmployeeDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EmployeeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: EmployeeDetailComponent,
    selectors: [["app-employee-detail"]],
    inputs: {
      title: "title",
      employee: "employee"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 91,
    vars: 12,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "table", "table-striped"], ["scope", "row"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function EmployeeDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailComponent_Template_button_click_5_listener() {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Employee ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Position Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Birthday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Employee Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeDetailComponent_Template_button_click_87_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.employee.prefix, " ", ctx.employee.firstName, " ", ctx.employee.lastName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.position.positionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 10, ctx.employee.birthday));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.employee.employeeNumber);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7828:
/*!***********************************************************************!*\
  !*** ./src/app/features/position/detail/position-detail.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionDetailComponent: () => (/* binding */ PositionDetailComponent)
/* harmony export */ });
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/logger.service */ 1765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 1661);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 2223);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/toast/toaster-service */ 9193);
/* harmony import */ var _app_services_api_api_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/api/api-http.service */ 5728);
/* harmony import */ var _app_services_api_api_endpoints_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/api/api-endpoints.service */ 8874);
/* harmony import */ var _app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/services/modal/modal.service */ 5957);





// validation

// dropdownbox library ng-select https://github.com/ng-select/ng-select

// boostrap tooltip https://ng-bootstrap.github.io/#/components/tooltip/examples













const _c0 = () => ["/position"];
const _c1 = a0 => ({
  "is-invalid": a0
});
function PositionDetailComponent_ng_template_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n              ");
  }
  if (rf & 2) {
    const item_r1 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", item_r1.name, " (", item_r1.minSalary, " - ", item_r1.maxSalary, ")");
  }
}
function PositionDetailComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n              ");
  }
  if (rf & 2) {
    const item_r2 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate3"]("", item_r2.name, " (", item_r2.minSalary, " - ", item_r2.maxSalary, ")");
  }
}
function PositionDetailComponent_Conditional_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PositionDetailComponent_Conditional_136_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onCreate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n          ");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.entryForm.invalid || !ctx_r3.isAddNew);
  }
}
function PositionDetailComponent_Conditional_137_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PositionDetailComponent_Conditional_137_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PositionDetailComponent_Conditional_137_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r3.onDelete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n          ");
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.entryForm.invalid || ctx_r3.isAddNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.entryForm.invalid || ctx_r3.isAddNew);
  }
}
// logger
const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger('Detail');
class PositionDetailComponent {
  constructor(toastService, route, formBuilder, apiHttpService, apiEndpointsService, modalService) {
    this.toastService = toastService;
    this.route = route;
    this.formBuilder = formBuilder;
    this.apiHttpService = apiHttpService;
    this.apiEndpointsService = apiEndpointsService;
    this.modalService = modalService;
    // @ViewChild('successTpl') successTpl!: TemplateRef<any>;
    // @ViewChild('dangerTpl') dangerTpl!: TemplateRef<any>;
    // @ViewChild('standardTpl') standardTpl!: TemplateRef<any>;
    this.isPlaceholderFixed = false;
    this.formMode = 'New';
    this.isAddNew = false;
    this.submitted = false;
    this.createForm();
    this.readDepartments();
    this.readSalaryRanges();
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id !== undefined) {
        this.read(this.route.snapshot.paramMap.get('id'));
        this.formMode = 'Edit';
      } else {
        this.isAddNew = true;
        this.formMode = 'New';
      }
    });
    log.debug('ngOnInit:', this.id);
  }
  // Handle Create button click
  onCreate() {
    this.create(this.entryForm.value);
    log.debug('onCreate: ', this.entryForm.value);
    log.debug('onCreate: ', this.entryForm.get('positionNumber').value);
  }
  // Handle Update button click
  onUpdate() {
    // log.debug('onUpdate: ', this.entryForm.value);
    // log.debug('onUpdate: ', this.entryForm.get('positionNumber')!.value);
    this.put(this.entryForm.get('id').value, this.entryForm.value);
    this.showToaster('Great job!', 'Data is updated');
  }
  // Handle Delete button click
  onDelete() {
    this.modalService.OpenConfirmDialog('Position deletion', 'Are you sure you want to delete?').then(Yes => {
      if (Yes) {
        this.delete(this.entryForm.get('id').value);
        log.debug('onDelete: ', this.entryForm.value);
      }
    }).catch(() => {
      log.debug('onDelete: ', 'Cancel');
    });
  }
  // CRUD > Read, map to REST/HTTP GET
  read(id) {
    this.apiHttpService.get(this.apiEndpointsService.getPositionByIdEndpoint(id), id).subscribe({
      //Assign resp to class-level model object.
      next: resp => {
        //Assign data to class-level model object.
        this.position = resp.data;
        //Populate reactive form controls with model object properties.
        this.entryForm.setValue({
          id: this.position.id,
          positionNumber: this.position.positionNumber,
          positionTitle: this.position.positionTitle,
          positionDescription: this.position.positionDescription,
          departmentId: this.position.departmentId,
          salaryRangeId: this.position.salaryRangeId
        });
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  delete(id) {
    this.apiHttpService.delete(this.apiEndpointsService.deletePositionByIdEndpoint(id), id).subscribe({
      next: resp => {
        log.debug(resp);
        this.showToaster('Great job!', 'Data is deleted');
        this.entryForm.reset();
        this.isAddNew = true;
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  // CRUD > Create, map to REST/HTTP POST
  create(data) {
    this.apiHttpService.post(this.apiEndpointsService.postPositionsEndpoint(), data).subscribe({
      next: resp => {
        this.id = resp.data;
        this.showToaster('Great job!', 'Data is inserted');
        this.entryForm.reset();
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  // CRUD > Update, map to REST/HTTP PUT
  put(id, data) {
    this.apiHttpService.put(this.apiEndpointsService.putPositionsEndpoint(id), data).subscribe({
      next: resp => {
        this.id = resp.data; //guid return in data
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  readDepartments() {
    this.apiHttpService.get(this.apiEndpointsService.getDepartmentsEndpoint()).subscribe({
      //Assign resp to class-level model object.
      next: resp => {
        //Assign data to class-level model object.
        this.departments = resp;
        log.debug('Departments ', this.departments);
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  readSalaryRanges() {
    this.apiHttpService.get(this.apiEndpointsService.getSalaryRangesEndpoint()).subscribe({
      //Assign resp to class-level model object.
      next: resp => {
        //Assign data to class-level model object.
        this.salaryRanges = resp;
        log.debug('SalaryRanges ', this.salaryRanges);
      },
      error: error => {
        log.debug(error);
      }
    });
  }
  // reactive form
  createForm() {
    this.entryForm = this.formBuilder.group({
      id: [''],
      positionNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      positionTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      positionDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      departmentId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      salaryRangeId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
    });
  }
  // showStandard(template: TemplateRef<any>) {
  // 	this.toastService.show({ textOrTpl: template });
  // }
  // showSuccess(template: TemplateRef<any>) {
  // 	this.toastService.show({ textOrTpl: "Record has been updated.", classname: 'bg-success text-light', delay: 10000 });
  // }
  // showDanger(template: TemplateRef<any>) {
  // 	this.toastService.show({ textOrTpl: template, classname: 'bg-danger text-light', delay: 15000 });
  // }
  // call toaster service
  showToaster(title, message) {
    this.toastService.show({
      textOrTpl: message,
      classname: 'bg-success text-light',
      delay: 2000,
      header: title
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.entryForm.controls;
  }
  static #_ = this.ɵfac = function PositionDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PositionDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_toast_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_api_api_http_service__WEBPACK_IMPORTED_MODULE_2__.ApiHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_api_api_endpoints_service__WEBPACK_IMPORTED_MODULE_3__.ApiEndpointsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_services_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: PositionDetailComponent,
    selectors: [["app-detail"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
    decls: 144,
    vars: 39,
    consts: [[1, "container-fluid"], ["novalidate", "", 3, "formGroup"], [1, "card"], [1, "card-header"], [1, "float-start"], [1, "text-secondary"], [1, "float-end"], ["ngbTooltip", "Click to Return to Previous Page", 1, "btn", "text-dark", 3, "routerLink"], [1, "fa", "fa-arrow-left"], [1, "card-body"], ["translate", "", 1, "alert", "alert-danger", 3, "hidden"], [1, "form-group"], ["for", "id", 1, "fw-bold"], [1, "d-block", "mb-3"], ["type", "text", "formControlName", "id", "autocomplete", "id", "readonly", "", 1, "form-control", 3, "ngClass", "placeholder"], ["hidden", "", "translate", ""], ["translate", "", 1, "text-danger", 3, "hidden"], ["for", "positionNumber", 1, "fw-bold"], ["type", "text", "formControlName", "positionNumber", "autocomplete", "positionNumber", "required", "", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "positionTitle", 1, "fw-bold"], ["type", "text", "formControlName", "positionTitle", "autocomplete", "current-positionTitle", "required", "", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "positionDescription", 1, "fw-bold"], ["type", "text", "rows", "5", "formControlName", "positionDescription", "autocomplete", "current-positionDescription", "required", "", 1, "form-control", 3, "ngClass", "placeholder"], ["for", "department", 1, "fw-bold"], ["bindLabel", "name", "formControlName", "departmentId", "bindValue", "id", "placeholder", "Select Department", 3, "items", "fixedPlaceholder"], ["for", "salaryRange", 1, "fw-bold"], ["bindLabel", "name", "formControlName", "salaryRangeId", "bindValue", "id", "placeholder", "Select Salary Range", 3, "items", "fixedPlaceholder"], ["ng-label-tmp", ""], ["ng-option-tmp", ""], [1, "card-footer"], [1, "float-left"], ["type", "submit", "ngbTooltip", "Click to Add New Record", 1, "btn", "btn-primary", "w-20", 3, "click", "disabled"], ["translate", ""], [1, "fas", "fa-plus"], ["type", "submit", "ngbTooltip", "Click to Save Changes", 1, "btn", "btn-primary", "w-20", 3, "click", "disabled"], [1, "fas", "fa-edit"], ["type", "submit", "ngbTooltip", "Click to Remove Record", 1, "btn", "btn-danger", "w-20", 3, "click", "disabled"], [1, "fas", "fa-trash-alt"]],
    template: function PositionDetailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "\n          Position Number, Title, Description or Salary incorrect.\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Id is required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Position Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "PositionNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "\n              Please enter a position number. This information is required.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Position Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Position Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "\n              Please provide the title of the position. This field is required.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, "Position Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "PositionDescription");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](91, "\n              Don't forget to add a description! It helps employees to understand the role.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](94, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "ng-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, "\n              Please select the department for this position. It's necessary for org chart.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](109, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Salary Group/Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, "\n\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "ng-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](116, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, PositionDetailComponent_ng_template_117_Template, 4, 3, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](119, PositionDetailComponent_ng_template_119_Template, 4, 3, "ng-template", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](123, "Salary Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](124, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126, "\n              Please choose a salary range. This information is vital for budgeting and candidate expectations.\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](130, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](134, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](136, PositionDetailComponent_Conditional_136_Template, 8, 1)(137, PositionDetailComponent_Conditional_137_Template, 17, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](140, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](141, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](143, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.entryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](31, _c1, ctx.f.id.errors))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](39, 22, "Auto Assigned Id"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.id.valid || ctx.f.id.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](33, _c1, ctx.f.positionNumber.errors))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](54, 24, "Enter position number here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.positionNumber.valid || ctx.f.positionNumber.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c1, ctx.f.positionTitle.errors))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 26, "Enter Position Title Here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.positionTitle.valid || ctx.f.positionTitle.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](37, _c1, ctx.f.positionDescription.errors))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](84, 28, "Describe the key responsibilities and qualifications..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.positionDescription.valid || ctx.f.positionDescription.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.departments)("fixedPlaceholder", ctx.isPlaceholderFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.departmentId.valid || ctx.f.departmentId.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.salaryRanges)("fixedPlaceholder", ctx.isPlaceholderFixed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.f.salaryRangeId.valid || ctx.f.salaryRangeId.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵconditional"](ctx.isAddNew ? 136 : 137);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__.RxReactiveFormsModule, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__.AsyncValidationDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__.RxwebFormDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_8__.RxFormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionTemplateDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgLabelTemplateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbTooltip],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7108:
/*!*******************************************************************!*\
  !*** ./src/app/features/position/list/position-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionListComponent: () => (/* binding */ PositionListComponent)
/* harmony export */ });
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/logger.service */ 1765);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 6017);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_api_api_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/api/api-http.service */ 5728);
/* harmony import */ var _app_services_api_api_endpoints_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/services/api/api-endpoints.service */ 8874);



// boostrap tooltip https://ng-bootstrap.github.io/#/components/tooltip/examples







const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => ["/position/detail"];
function PositionListComponent_Conditional_43_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PositionListComponent_Conditional_43_For_4_Template_tr_click_1_listener() {
      const position_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.wholeRowClick(position_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\n            ");
  }
  if (rf & 2) {
    const position_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\n                ", position_r2.positionNumber, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](position_r2.positionTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](position_r2.department.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("\n                ", position_r2.salaryRange.minSalary, " - ", position_r2.salaryRange.maxSalary, "\n              ");
  }
}
function PositionListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](3, PositionListComponent_Conditional_43_For_4_Template, 16, 5, null, null, _forTrack0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n\n          ");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx_r2.positions);
  }
}
function PositionListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "No data!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n          ");
  }
}
const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger('Position');
class PositionListComponent {
  constructor(apiHttpService, apiEndpointsService, router) {
    this.apiHttpService = apiHttpService;
    this.apiEndpointsService = apiEndpointsService;
    this.router = router;
    //dtOptions: DataTables.Settings = {};
    this.dtOptions = {};
    this.positions = [];
    this.message = '';
  }
  wholeRowClick(position) {
    // get record id
    const positionId = position ? position.id : null;
    // load detail component
    this.router.navigate(['/position/detail', {
      id: positionId
    }]);
    log.debug('Whole row clicked.', position);
  }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters, callback) => {
        // Call WebAPI to get positions
        this.apiHttpService.post(this.apiEndpointsService.postPositionsPagedEndpoint(), dataTablesParameters).subscribe(resp => {
          this.positions = resp.data;
          // log.debug('dump positions', this.positions);
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: []
          });
        });
      },
      // Set column title and data field
      columns: [{
        title: 'Position Number',
        data: 'PositionNumber'
      }, {
        title: 'Position Title',
        data: 'PositionTitle'
      }, {
        title: 'Department',
        data: 'Department'
      }, {
        title: 'Salary Range (min-max)',
        data: ''
      }],
      columnDefs: [{
        orderable: true,
        targets: 0
      },
      // Enable sorting on first column
      {
        orderable: true,
        targets: 1
      },
      // Enable sorting on second column
      {
        orderable: true,
        targets: 2
      },
      // Disable sorting on third column
      {
        orderable: false,
        targets: 3
      } // Enable sorting on fourth column
      //   // Specify orderable for other columns as needed
      ]
    };
  }
  static #_ = this.ɵfac = function PositionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PositionListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_api_api_http_service__WEBPACK_IMPORTED_MODULE_1__.ApiHttpService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_services_api_api_endpoints_service__WEBPACK_IMPORTED_MODULE_2__.ApiEndpointsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PositionListComponent,
    selectors: [["app-position-list"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 53,
    vars: 4,
    consts: [[1, "container-fluid", "mt-3"], [1, "card"], [1, "card-header"], [1, "float-start"], [1, "text-secondary"], [1, "float-end"], ["ngbTooltip", "Click to Create New Entry", 1, "btn", "btn-primary", 3, "routerLink"], [1, "fa", "fa-plus"], [1, "card-body"], [1, "row", "table-responsive"], ["datatable", "", 1, "table", "table-hover", 3, "dtOptions"], [1, "d-none", "d-sm-table-cell"], [1, "card-footer"], [3, "click"], ["colspan", "4", 1, "no-data-available"]],
    template: function PositionListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Position Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Position Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Salary Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, PositionListComponent_Conditional_43_Template, 6, 0)(44, PositionListComponent_Conditional_44_Template, 10, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n      Hint: Searchable and sortable columns are Position Number, Position Title and Department\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](ctx.positions.length !== 0 ? 43 : 44);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTablesModule, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
    styles: ["table.dataTable td.dataTables_empty {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcG9zaXRpb24vbGlzdC9wb3NpdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHRhYmxlLmRhdGFUYWJsZSB0ZC5kYXRhVGFibGVzX2VtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2296:
/*!**************************************************************!*\
  !*** ./src/app/features/position/position-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionRoutingModule: () => (/* binding */ PositionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _list_position_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/position-list.component */ 7108);
/* harmony import */ var _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/position-detail.component */ 7828);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 8179);
/* harmony import */ var _core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth-guard.service */ 186);
/* harmony import */ var _core_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/role-guard.service */ 8736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: '',
  component: _list_position_list_component__WEBPACK_IMPORTED_MODULE_0__.PositionListComponent,
  canActivate: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__.marker)('Position')
  }
}, {
  path: 'detail',
  component: _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_1__.PositionDetailComponent,
  canActivate: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_3__.RoleGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__.marker)('Position New'),
    role: 'HRAdmin'
  }
}, {
  path: 'detail/:id',
  component: _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_1__.PositionDetailComponent,
  canActivate: [_core_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__.AuthGuard, _core_auth_role_guard_service__WEBPACK_IMPORTED_MODULE_3__.RoleGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_4__.marker)('Position Detail'),
    role: 'HRAdmin'
  }
}];
class PositionRoutingModule {
  static #_ = this.ɵfac = function PositionRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PositionRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PositionRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PositionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 4710:
/*!*********************************************************!*\
  !*** ./src/app/features/position/position.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionComponent: () => (/* binding */ PositionComponent)
/* harmony export */ });
/* harmony import */ var _list_position_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/position-list.component */ 7108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PositionComponent {
  constructor() {
    this.active = 1;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function PositionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PositionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: PositionComponent,
    selectors: [["app-position"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 0,
    template: function PositionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-position-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n");
      }
    },
    dependencies: [_list_position_list_component__WEBPACK_IMPORTED_MODULE_0__.PositionListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 169:
/*!******************************************************!*\
  !*** ./src/app/features/position/position.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PositionModule: () => (/* binding */ PositionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 5773);
/* harmony import */ var _position_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./position-routing.module */ 2296);
/* harmony import */ var _position_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./position.component */ 4710);
/* harmony import */ var _list_position_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list/position-list.component */ 7108);
/* harmony import */ var _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail/position-detail.component */ 7828);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 1661);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-datatables */ 6017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);











class PositionModule {
  static #_ = this.ɵfac = function PositionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || PositionModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: PositionModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _position_routing_module__WEBPACK_IMPORTED_MODULE_1__.PositionRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_9__.RxReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_10__.DataTablesModule, _position_component__WEBPACK_IMPORTED_MODULE_2__.PositionComponent, _list_position_list_component__WEBPACK_IMPORTED_MODULE_3__.PositionListComponent, _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_4__.PositionDetailComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](PositionModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule, _position_routing_module__WEBPACK_IMPORTED_MODULE_1__.PositionRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_9__.RxReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_10__.DataTablesModule, _position_component__WEBPACK_IMPORTED_MODULE_2__.PositionComponent, _list_position_list_component__WEBPACK_IMPORTED_MODULE_3__.PositionListComponent, _detail_position_detail_component__WEBPACK_IMPORTED_MODULE_4__.PositionDetailComponent]
  });
})();

/***/ }),

/***/ 8874:
/*!*******************************************************!*\
  !*** ./src/app/services/api/api-endpoints.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiEndpointsService: () => (/* binding */ ApiEndpointsService)
/* harmony export */ });
/* harmony import */ var _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/classes/url-builder */ 1564);
/* harmony import */ var _shared_classes_query_string_parameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/query-string-parameters */ 2050);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
// Application Classes


// Application Constants
// import { Constants } from '@app/config/constants';


// Returns the api endpoints urls to use in services in a consistent way
class ApiEndpointsService {
  constructor() {
    /* #region EXAMPLES */
    this.getDataByIdEndpoint = id => this.createUrlWithPathVariables('data', [id]);
    this.getDataByIdAndCodeEndpoint = (id, code) => this.createUrlWithPathVariables('data', [id, code]);
    // call Mock endpoint
    this.getNewsEndpoint = () => this.createUrl('41gRGwOaw', true);
    this.invalidUrlEndpoint = () => this.createUrl('invalidurl', true);
    // TALENT MANAGEMENT
    // call Positions endpoint
    this.getPositionByIdEndpoint = id => this.createUrlWithPathVariables('Positions', [id]);
    this.deletePositionByIdEndpoint = id => this.createUrlWithPathVariables('Positions', [id]);
    this.postPositionsPagedEndpoint = () => this.createUrl('Positions/Paged');
    this.postPositionsEndpoint = () => this.createUrl('Positions');
    this.putPositionsEndpoint = id => this.createUrlWithPathVariables('Positions', [id]);
    // call Employees endpoint
    this.postEmployeesPagedEndpoint = () => this.createUrl('Employees/Paged');
    // call Departments endpoint
    this.getDepartmentsEndpoint = () => this.createUrl('Departments');
    // call SalaryRanges endpoint
    this.getSalaryRangesEndpoint = () => this.createUrl('SalaryRanges');
    // call regular endpoint without boolean true at end
    this.getPersonsEndpoint = () => this.createUrl('Persons');
    // Call API technique https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64
    // call Mock endpoint
    // https://angular-datatables-demo-server.herokuapp.com
    // call Evaluations endpoint
    this.getEvaluationByIdEndpoint = id => this.createUrlWithPathVariables('Evaluations', [id]);
    // call Positions endpoint
    this.postPersonsEndpoint = () => this.createUrl('', true);
  } //private constants: Constants // Application Constants
  getDataByIdCodeAndYearEndpoint(id, code, year) {
    const queryString = new _shared_classes_query_string_parameters__WEBPACK_IMPORTED_MODULE_1__.QueryStringParameters();
    queryString.push('year', year);
    return `${this.createUrlWithPathVariables('data', [id, code])}?${queryString.toString()}`;
  }
  getProductListByCountryCodeEndpoint(countryCode) {
    return this.createUrlWithQueryParameters('productlist', qs => qs.push('countryCode', countryCode));
  }
  getProductListByCountryAndPostalCodeEndpoint(countryCode, postalCode) {
    return this.createUrlWithQueryParameters('productlist', qs => {
      qs.push('countryCode', countryCode);
      qs.push('postalCode', postalCode);
    });
  }
  getEvaluationByPlayerIdAndSkillLevelEndpoint(playerId, skillLevel) {
    return this.createUrlWithQueryParameters('Evaluations', qs => {
      qs.push('PlayerId', playerId);
      qs.push('SkillLevel', skillLevel);
    });
  }
  // call regular endpoint without boolean true at end
  // https://localhost:44378/api/v1 (ASP.NET CORE REST API.  Repo https://github.com/workcontrolgit/AngularNgxDataTableBackend)
  // public putPositionsPagedEndpoint = (id: string): string => this.createUrlWithPathVariables('Positions', [id]);
  /* #endregion */
  /* #region URL CREATOR */
  // URL
  createUrl(action, isMockAPI = false) {
    const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_0__.UrlBuilder(isMockAPI ? _env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiMockEndpoint : _env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiEndpoint, action);
    return urlBuilder.toString();
  }
  // URL WITH QUERY PARAMS
  createUrlWithQueryParameters(action, queryStringHandler) {
    const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_0__.UrlBuilder(_env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiEndpoint, action);
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  // URL WITH PATH VARIABLES
  createUrlWithPathVariables(action, pathVariables = []) {
    let encodedPathVariablesUrl = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder = new _shared_classes_url_builder__WEBPACK_IMPORTED_MODULE_0__.UrlBuilder(_env_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiEndpoint, `${action}${encodedPathVariablesUrl}`);
    return urlBuilder.toString();
  }
  static #_ = this.ɵfac = function ApiEndpointsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiEndpointsService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ApiEndpointsService,
    factory: ApiEndpointsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5728:
/*!**************************************************!*\
  !*** ./src/app/services/api/api-http.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiHttpService: () => (/* binding */ ApiHttpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class ApiHttpService {
  constructor(
  // Angular Modules
  http) {
    this.http = http;
    this.get = (url, options) => this.http.get(url, options);
    this.post = (url, data, options) => this.http.post(url, data, options);
    this.put = (url, data, options) => this.http.put(url, data, options);
    this.delete = (url, options) => this.http.delete(url, options);
  }
  static #_ = this.ɵfac = function ApiHttpService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ApiHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ApiHttpService,
    factory: ApiHttpService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5957:
/*!*************************************************!*\
  !*** ./src/app/services/modal/modal.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalService: () => (/* binding */ ModalService)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _shared_errors_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/errors/error-dialog.component */ 9148);
/* harmony import */ var _shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/confirmation-dialog/confirmation-dialog.component */ 7326);
/* harmony import */ var _app_features_employee_detail_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/features/employee/detail/employee-detail/employee-detail.component */ 4101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





class ModalService {
  constructor(injector) {
    this.injector = injector;
    this.modalService = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal);
  }
  OpenEmployeeDetailDialog(title, employee) {
    //var modalService = this.injector.get(NgbModal);
    const modalRef = this.modalService.open(_app_features_employee_detail_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_2__.EmployeeDetailComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.employee = employee;
  }
  OpenErrorDialog(title, message, status) {
    //var modalService = this.injector.get(NgbModal);
    const modalRef = this.modalService.open(_shared_errors_error_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ErrorDialogComponent);
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.status = status;
  }
  OpenConfirmDialog(title, message, btnOkText = 'OK', btnCancelText = 'Cancel', dialogSize = 'sm') {
    const modalRef = this.modalService.open(_shared_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmationDialogComponent, {
      size: dialogSize
    });
    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.btnOkText = btnOkText;
    modalRef.componentInstance.btnCancelText = btnCancelText;
    return modalRef.result;
  }
  static #_ = this.ɵfac = function ModalService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ModalService,
    factory: ModalService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3658:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   audit: () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);



function audit(durationSelector) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let hasValue = false;
    let lastValue = null;
    let durationSubscriber = null;
    let isComplete = false;
    const endDuration = () => {
      durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
      durationSubscriber = null;
      if (hasValue) {
        hasValue = false;
        const value = lastValue;
        lastValue = null;
        subscriber.next(value);
      }
      isComplete && subscriber.complete();
    };
    const cleanupDuration = () => {
      durationSubscriber = null;
      isComplete && subscriber.complete();
    };
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => {
      hasValue = true;
      lastValue = value;
      if (!durationSubscriber) {
        (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = (0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, endDuration, cleanupDuration));
      }
    }, () => {
      isComplete = true;
      (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
    }));
  });
}

/***/ }),

/***/ 2351:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   auditTime: () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 3658);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 4876);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}

/***/ }),

/***/ 1860:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameAction: () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationFrameProvider */ 5571);


class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.requestAnimationFrame(() => scheduler.flush(undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.cancelAnimationFrame(id);
      scheduler._scheduled = undefined;
    }
    return undefined;
  }
}

/***/ }),

/***/ 4909:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationFrameScheduler: () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 8206:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapAction: () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 2083);
/* harmony import */ var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./immediateProvider */ 3701);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
  constructor(scheduler, work) {
    super(scheduler, work);
    this.scheduler = scheduler;
    this.work = work;
  }
  requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
  }
  recycleAsyncId(scheduler, id, delay = 0) {
    var _a;
    if (delay != null ? delay > 0 : this.delay > 0) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    const {
      actions
    } = scheduler;
    if (id != null && ((_a = actions[actions.length - 1]) === null || _a === void 0 ? void 0 : _a.id) !== id) {
      _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);
      if (scheduler._scheduled === id) {
        scheduler._scheduled = undefined;
      }
    }
    return undefined;
  }
}

/***/ }),

/***/ 9835:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsapScheduler: () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2400);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
  flush(action) {
    this._active = true;
    const flushId = this._scheduled;
    this._scheduled = undefined;
    const {
      actions
    } = this;
    let error;
    action = action || actions.shift();
    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while ((action = actions[0]) && action.id === flushId && actions.shift());
    this._active = false;
    if (error) {
      while ((action = actions[0]) && action.id === flushId && actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}

/***/ }),

/***/ 614:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrame: () => (/* binding */ animationFrame),
/* harmony export */   animationFrameScheduler: () => (/* binding */ animationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 1860);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 4909);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;

/***/ }),

/***/ 5571:
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/animationFrameProvider.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFrameProvider: () => (/* binding */ animationFrameProvider)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2510);

const animationFrameProvider = {
  schedule(callback) {
    let request = requestAnimationFrame;
    let cancel = cancelAnimationFrame;
    const {
      delegate
    } = animationFrameProvider;
    if (delegate) {
      request = delegate.requestAnimationFrame;
      cancel = delegate.cancelAnimationFrame;
    }
    const handle = request(timestamp => {
      cancel = undefined;
      callback(timestamp);
    });
    return new _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription(() => cancel === null || cancel === void 0 ? void 0 : cancel(handle));
  },
  requestAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame)(...args);
  },
  cancelAnimationFrame(...args) {
    const {
      delegate
    } = animationFrameProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame)(...args);
  },
  delegate: undefined
};

/***/ }),

/***/ 7180:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asap: () => (/* binding */ asap),
/* harmony export */   asapScheduler: () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 8206);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 9835);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;

/***/ }),

/***/ 3701:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/immediateProvider.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   immediateProvider: () => (/* binding */ immediateProvider)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Immediate */ 733);

const {
  setImmediate,
  clearImmediate
} = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate;
const immediateProvider = {
  setImmediate(...args) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate)(...args);
  },
  clearImmediate(handle) {
    const {
      delegate
    } = immediateProvider;
    return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
  },
  delegate: undefined
};

/***/ }),

/***/ 733:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immediate: () => (/* binding */ Immediate),
/* harmony export */   TestTools: () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
let resolved;
const activeHandles = {};
function findAndClearHandle(handle) {
  if (handle in activeHandles) {
    delete activeHandles[handle];
    return true;
  }
  return false;
}
const Immediate = {
  setImmediate(cb) {
    const handle = nextHandle++;
    activeHandles[handle] = true;
    if (!resolved) {
      resolved = Promise.resolve();
    }
    resolved.then(() => findAndClearHandle(handle) && cb());
    return handle;
  },
  clearImmediate(handle) {
    findAndClearHandle(handle);
  }
};
const TestTools = {
  pending() {
    return Object.keys(activeHandles).length;
  }
};

/***/ }),

/***/ 2223:
/*!****************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/fesm2022/ng-select-ng-select.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleService: () => (/* binding */ ConsoleService),
/* harmony export */   DefaultSelectionModel: () => (/* binding */ DefaultSelectionModel),
/* harmony export */   DefaultSelectionModelFactory: () => (/* binding */ DefaultSelectionModelFactory),
/* harmony export */   NgDropdownPanelComponent: () => (/* binding */ NgDropdownPanelComponent),
/* harmony export */   NgDropdownPanelService: () => (/* binding */ NgDropdownPanelService),
/* harmony export */   NgFooterTemplateDirective: () => (/* binding */ NgFooterTemplateDirective),
/* harmony export */   NgHeaderTemplateDirective: () => (/* binding */ NgHeaderTemplateDirective),
/* harmony export */   NgItemLabelDirective: () => (/* binding */ NgItemLabelDirective),
/* harmony export */   NgLabelTemplateDirective: () => (/* binding */ NgLabelTemplateDirective),
/* harmony export */   NgLoadingSpinnerTemplateDirective: () => (/* binding */ NgLoadingSpinnerTemplateDirective),
/* harmony export */   NgLoadingTextTemplateDirective: () => (/* binding */ NgLoadingTextTemplateDirective),
/* harmony export */   NgMultiLabelTemplateDirective: () => (/* binding */ NgMultiLabelTemplateDirective),
/* harmony export */   NgNotFoundTemplateDirective: () => (/* binding */ NgNotFoundTemplateDirective),
/* harmony export */   NgOptgroupTemplateDirective: () => (/* binding */ NgOptgroupTemplateDirective),
/* harmony export */   NgOptionComponent: () => (/* binding */ NgOptionComponent),
/* harmony export */   NgOptionTemplateDirective: () => (/* binding */ NgOptionTemplateDirective),
/* harmony export */   NgPlaceholderTemplateDirective: () => (/* binding */ NgPlaceholderTemplateDirective),
/* harmony export */   NgSelectComponent: () => (/* binding */ NgSelectComponent),
/* harmony export */   NgSelectConfig: () => (/* binding */ NgSelectConfig),
/* harmony export */   NgSelectModule: () => (/* binding */ NgSelectModule),
/* harmony export */   NgTagTemplateDirective: () => (/* binding */ NgTagTemplateDirective),
/* harmony export */   NgTypeToSearchTemplateDirective: () => (/* binding */ NgTypeToSearchTemplateDirective),
/* harmony export */   SELECTION_MODEL_FACTORY: () => (/* binding */ SELECTION_MODEL_FACTORY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 614);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 7180);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);






const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = ["*"];
const _c4 = a0 => ({
  searchTerm: a0
});
function NgDropdownPanelComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r0.filterValue));
  }
}
function NgDropdownPanelComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r0.filterValue));
  }
}
const _c5 = ["searchInput"];
const _c6 = ["clearButton"];
const _c7 = (a0, a1, a2) => ({
  item: a0,
  clear: a1,
  label: a2
});
const _c8 = (a0, a1) => ({
  items: a0,
  clear: a1
});
const _c9 = (a0, a1, a2, a3) => ({
  item: a0,
  item$: a1,
  index: a2,
  searchTerm: a3
});
function NgSelectComponent_Conditional_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.placeholder);
  }
}
function NgSelectComponent_Conditional_2_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_2_ng_template_0_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_2_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultPlaceholderTemplate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.placeholderTemplate || defaultPlaceholderTemplate_r3);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_Conditional_3_For_1_ng_template_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.unselect(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 24);
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r5.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_3_For_1_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_3_For_1_ng_template_1_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_3_For_1_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const defaultLabelTemplate_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.labelTemplate || defaultLabelTemplate_r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c7, item_r5.value, ctx_r1.clearItem, item_r5.label));
  }
}
function NgSelectComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](0, NgSelectComponent_Conditional_3_For_1_Template, 4, 8, "div", 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentInstance"]().trackByOption, true);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1.selectedItems);
  }
}
function NgSelectComponent_Conditional_4_ng_template_0_Template(rf, ctx) {}
function NgSelectComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_4_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c8, ctx_r1.selectedValues, ctx_r1.clearItem));
  }
}
function NgSelectComponent_Conditional_8_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 25);
  }
}
function NgSelectComponent_Conditional_8_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_8_ng_template_0_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_8_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultLoadingSpinnerTemplate_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loadingSpinnerTemplate || defaultLoadingSpinnerTemplate_r8);
  }
}
function NgSelectComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15, 4)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r1.clearAllText);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 31);
  }
  if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r11.label)("escape", ctx_r1.escapeHTML);
  }
}
function NgSelectComponent_Conditional_12_For_3_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_Conditional_12_For_3_Template_div_click_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.toggleItem(item_r11));
    })("mouseover", function NgSelectComponent_Conditional_12_For_3_Template_div_mouseover_0_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.onItemHover(item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_12_For_3_ng_template_1_Template, 1, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_12_For_3_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const defaultOptionTemplate_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r11.disabled)("ng-option-selected", item_r11.selected)("ng-optgroup", item_r11.children)("ng-option", !item_r11.children)("ng-option-child", !!item_r11.parent)("ng-option-marked", item_r11 === ctx_r1.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r11.children ? "group" : "option")("aria-selected", item_r11.selected)("id", item_r11 == null ? null : item_r11.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r11.children ? ctx_r1.optgroupTemplate || defaultOptionTemplate_r12 : ctx_r1.optionTemplate || defaultOptionTemplate_r12)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c9, item_r11.value, item_r11, item_r11.index, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r1.searchTerm, "\"");
  }
}
function NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_mouseover_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.itemsList.unmarkItem());
    })("click", function NgSelectComponent_Conditional_12_Conditional_4_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.selectTag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_Conditional_12_Conditional_4_ng_template_1_Template, 4, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(3, NgSelectComponent_Conditional_12_Conditional_4_ng_template_3_Template, 0, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const defaultTagTemplate_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r1.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.tagTemplate || defaultTagTemplate_r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.notFoundText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_5_ng_template_0_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_5_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultNotFoundTemplate_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.notFoundTemplate || defaultNotFoundTemplate_r15)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.typeToSearchText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_6_ng_template_0_Template, 2, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 19);
  }
  if (rf & 2) {
    const defaultTypeToSearchTemplate_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.typeToSearchTemplate || defaultTypeToSearchTemplate_r16);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.loadingText);
  }
}
function NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {}
function NgSelectComponent_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_Conditional_12_Conditional_7_ng_template_0_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, NgSelectComponent_Conditional_12_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const defaultLoadingTextTemplate_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.loadingTextTemplate || defaultLoadingTextTemplate_r17)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r1.searchTerm));
  }
}
function NgSelectComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_update_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.viewPortItems = $event);
    })("scroll", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scroll.emit($event));
    })("scrollToEnd", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.scrollToEnd.emit($event));
    })("outsideClick", function NgSelectComponent_Conditional_12_Template_ng_dropdown_panel_outsideClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, NgSelectComponent_Conditional_12_For_3_Template, 4, 22, "div", 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcomponentInstance"]().trackByOption, true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_Conditional_12_Conditional_4_Template, 4, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_Conditional_12_Conditional_5_Template, 3, 4)(6, NgSelectComponent_Conditional_12_Conditional_6_Template, 3, 1)(7, NgSelectComponent_Conditional_12_Conditional_7_Template, 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r1.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r1.virtualScroll)("bufferAmount", ctx_r1.bufferAmount)("appendTo", ctx_r1.appendTo)("position", ctx_r1.dropdownPosition)("headerTemplate", ctx_r1.headerTemplate)("footerTemplate", ctx_r1.footerTemplate)("filterValue", ctx_r1.searchTerm)("items", ctx_r1.itemsList.filteredItems)("markedItem", ctx_r1.itemsList.markedItem)("ngClass", ctx_r1.appendTo ? ctx_r1.ngClass ? ctx_r1.ngClass : ctx_r1.classes : null)("id", ctx_r1.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx_r1.viewPortItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showAddTag ? 4 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showNoItemsFound() ? 5 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.showTypeToSearch() ? 6 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r1.loading && ctx_r1.itemsList.filteredItems.length === 0 ? 7 : -1);
  }
}
const unescapedHTMLExp = /[&<>"']/g;
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
function escapeHTML(value) {
  return value && hasUnescapedHTMLExp.test(value) ? value.replace(unescapedHTMLExp, chr => htmlEscapes[chr]) : value;
}
function isDefined(value) {
  return value !== undefined && value !== null;
}
function isObject(value) {
  return typeof value === 'object' && isDefined(value);
}
function isPromise(value) {
  return value instanceof Promise;
}
function isFunction(value) {
  return value instanceof Function;
}
class NgItemLabelDirective {
  constructor(element) {
    this.element = element;
    this.escape = true;
  }
  ngOnChanges(changes) {
    this.element.nativeElement.innerHTML = this.escape ? escapeHTML(this.ngItemLabel) : this.ngItemLabel;
  }
  static #_ = this.ɵfac = function NgItemLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgItemLabelDirective,
    selectors: [["", "ngItemLabel", ""]],
    inputs: {
      ngItemLabel: "ngItemLabel",
      escape: "escape"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngItemLabel]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    ngItemLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    escape: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class NgOptionTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgOptionTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgOptionTemplateDirective,
    selectors: [["", "ng-option-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-option-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgOptgroupTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgOptgroupTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgOptgroupTemplateDirective,
    selectors: [["", "ng-optgroup-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-optgroup-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLabelTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLabelTemplateDirective,
    selectors: [["", "ng-label-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-label-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgMultiLabelTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgMultiLabelTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgMultiLabelTemplateDirective,
    selectors: [["", "ng-multi-label-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-multi-label-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgHeaderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgHeaderTemplateDirective,
    selectors: [["", "ng-header-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-header-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgFooterTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgFooterTemplateDirective,
    selectors: [["", "ng-footer-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-footer-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgNotFoundTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgNotFoundTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgNotFoundTemplateDirective,
    selectors: [["", "ng-notfound-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-notfound-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgPlaceholderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgPlaceholderTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgPlaceholderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgPlaceholderTemplateDirective,
    selectors: [["", "ng-placeholder-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgPlaceholderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-placeholder-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgTypeToSearchTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgTypeToSearchTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgTypeToSearchTemplateDirective,
    selectors: [["", "ng-typetosearch-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-typetosearch-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLoadingTextTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLoadingTextTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLoadingTextTemplateDirective,
    selectors: [["", "ng-loadingtext-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-loadingtext-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgTagTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgTagTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgTagTemplateDirective,
    selectors: [["", "ng-tag-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-tag-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
class NgLoadingSpinnerTemplateDirective {
  constructor(template) {
    this.template = template;
  }
  static #_ = this.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgLoadingSpinnerTemplateDirective,
    selectors: [["", "ng-loadingspinner-tmp", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: '[ng-loadingspinner-tmp]',
      standalone: true
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
  }], null);
})();
function newId() {
  // First character is an 'a', it's good practice to tag id to begin with a letter
  return 'axxxxxxxxxxx'.replace(/[x]/g, () => {
    // eslint-disable-next-line no-bitwise
    const val = Math.random() * 16 | 0;
    return val.toString(16);
  });
}
const diacritics = {
  '\u24B6': 'A',
  '\uFF21': 'A',
  '\u00C0': 'A',
  '\u00C1': 'A',
  '\u00C2': 'A',
  '\u1EA6': 'A',
  '\u1EA4': 'A',
  '\u1EAA': 'A',
  '\u1EA8': 'A',
  '\u00C3': 'A',
  '\u0100': 'A',
  '\u0102': 'A',
  '\u1EB0': 'A',
  '\u1EAE': 'A',
  '\u1EB4': 'A',
  '\u1EB2': 'A',
  '\u0226': 'A',
  '\u01E0': 'A',
  '\u00C4': 'A',
  '\u01DE': 'A',
  '\u1EA2': 'A',
  '\u00C5': 'A',
  '\u01FA': 'A',
  '\u01CD': 'A',
  '\u0200': 'A',
  '\u0202': 'A',
  '\u1EA0': 'A',
  '\u1EAC': 'A',
  '\u1EB6': 'A',
  '\u1E00': 'A',
  '\u0104': 'A',
  '\u023A': 'A',
  '\u2C6F': 'A',
  '\uA732': 'AA',
  '\u00C6': 'AE',
  '\u01FC': 'AE',
  '\u01E2': 'AE',
  '\uA734': 'AO',
  '\uA736': 'AU',
  '\uA738': 'AV',
  '\uA73A': 'AV',
  '\uA73C': 'AY',
  '\u24B7': 'B',
  '\uFF22': 'B',
  '\u1E02': 'B',
  '\u1E04': 'B',
  '\u1E06': 'B',
  '\u0243': 'B',
  '\u0182': 'B',
  '\u0181': 'B',
  '\u24B8': 'C',
  '\uFF23': 'C',
  '\u0106': 'C',
  '\u0108': 'C',
  '\u010A': 'C',
  '\u010C': 'C',
  '\u00C7': 'C',
  '\u1E08': 'C',
  '\u0187': 'C',
  '\u023B': 'C',
  '\uA73E': 'C',
  '\u24B9': 'D',
  '\uFF24': 'D',
  '\u1E0A': 'D',
  '\u010E': 'D',
  '\u1E0C': 'D',
  '\u1E10': 'D',
  '\u1E12': 'D',
  '\u1E0E': 'D',
  '\u0110': 'D',
  '\u018B': 'D',
  '\u018A': 'D',
  '\u0189': 'D',
  '\uA779': 'D',
  '\u01F1': 'DZ',
  '\u01C4': 'DZ',
  '\u01F2': 'Dz',
  '\u01C5': 'Dz',
  '\u24BA': 'E',
  '\uFF25': 'E',
  '\u00C8': 'E',
  '\u00C9': 'E',
  '\u00CA': 'E',
  '\u1EC0': 'E',
  '\u1EBE': 'E',
  '\u1EC4': 'E',
  '\u1EC2': 'E',
  '\u1EBC': 'E',
  '\u0112': 'E',
  '\u1E14': 'E',
  '\u1E16': 'E',
  '\u0114': 'E',
  '\u0116': 'E',
  '\u00CB': 'E',
  '\u1EBA': 'E',
  '\u011A': 'E',
  '\u0204': 'E',
  '\u0206': 'E',
  '\u1EB8': 'E',
  '\u1EC6': 'E',
  '\u0228': 'E',
  '\u1E1C': 'E',
  '\u0118': 'E',
  '\u1E18': 'E',
  '\u1E1A': 'E',
  '\u0190': 'E',
  '\u018E': 'E',
  '\u24BB': 'F',
  '\uFF26': 'F',
  '\u1E1E': 'F',
  '\u0191': 'F',
  '\uA77B': 'F',
  '\u24BC': 'G',
  '\uFF27': 'G',
  '\u01F4': 'G',
  '\u011C': 'G',
  '\u1E20': 'G',
  '\u011E': 'G',
  '\u0120': 'G',
  '\u01E6': 'G',
  '\u0122': 'G',
  '\u01E4': 'G',
  '\u0193': 'G',
  '\uA7A0': 'G',
  '\uA77D': 'G',
  '\uA77E': 'G',
  '\u24BD': 'H',
  '\uFF28': 'H',
  '\u0124': 'H',
  '\u1E22': 'H',
  '\u1E26': 'H',
  '\u021E': 'H',
  '\u1E24': 'H',
  '\u1E28': 'H',
  '\u1E2A': 'H',
  '\u0126': 'H',
  '\u2C67': 'H',
  '\u2C75': 'H',
  '\uA78D': 'H',
  '\u24BE': 'I',
  '\uFF29': 'I',
  '\u00CC': 'I',
  '\u00CD': 'I',
  '\u00CE': 'I',
  '\u0128': 'I',
  '\u012A': 'I',
  '\u012C': 'I',
  '\u0130': 'I',
  '\u00CF': 'I',
  '\u1E2E': 'I',
  '\u1EC8': 'I',
  '\u01CF': 'I',
  '\u0208': 'I',
  '\u020A': 'I',
  '\u1ECA': 'I',
  '\u012E': 'I',
  '\u1E2C': 'I',
  '\u0197': 'I',
  '\u24BF': 'J',
  '\uFF2A': 'J',
  '\u0134': 'J',
  '\u0248': 'J',
  '\u24C0': 'K',
  '\uFF2B': 'K',
  '\u1E30': 'K',
  '\u01E8': 'K',
  '\u1E32': 'K',
  '\u0136': 'K',
  '\u1E34': 'K',
  '\u0198': 'K',
  '\u2C69': 'K',
  '\uA740': 'K',
  '\uA742': 'K',
  '\uA744': 'K',
  '\uA7A2': 'K',
  '\u24C1': 'L',
  '\uFF2C': 'L',
  '\u013F': 'L',
  '\u0139': 'L',
  '\u013D': 'L',
  '\u1E36': 'L',
  '\u1E38': 'L',
  '\u013B': 'L',
  '\u1E3C': 'L',
  '\u1E3A': 'L',
  '\u0141': 'L',
  '\u023D': 'L',
  '\u2C62': 'L',
  '\u2C60': 'L',
  '\uA748': 'L',
  '\uA746': 'L',
  '\uA780': 'L',
  '\u01C7': 'LJ',
  '\u01C8': 'Lj',
  '\u24C2': 'M',
  '\uFF2D': 'M',
  '\u1E3E': 'M',
  '\u1E40': 'M',
  '\u1E42': 'M',
  '\u2C6E': 'M',
  '\u019C': 'M',
  '\u24C3': 'N',
  '\uFF2E': 'N',
  '\u01F8': 'N',
  '\u0143': 'N',
  '\u00D1': 'N',
  '\u1E44': 'N',
  '\u0147': 'N',
  '\u1E46': 'N',
  '\u0145': 'N',
  '\u1E4A': 'N',
  '\u1E48': 'N',
  '\u0220': 'N',
  '\u019D': 'N',
  '\uA790': 'N',
  '\uA7A4': 'N',
  '\u01CA': 'NJ',
  '\u01CB': 'Nj',
  '\u24C4': 'O',
  '\uFF2F': 'O',
  '\u00D2': 'O',
  '\u00D3': 'O',
  '\u00D4': 'O',
  '\u1ED2': 'O',
  '\u1ED0': 'O',
  '\u1ED6': 'O',
  '\u1ED4': 'O',
  '\u00D5': 'O',
  '\u1E4C': 'O',
  '\u022C': 'O',
  '\u1E4E': 'O',
  '\u014C': 'O',
  '\u1E50': 'O',
  '\u1E52': 'O',
  '\u014E': 'O',
  '\u022E': 'O',
  '\u0230': 'O',
  '\u00D6': 'O',
  '\u022A': 'O',
  '\u1ECE': 'O',
  '\u0150': 'O',
  '\u01D1': 'O',
  '\u020C': 'O',
  '\u020E': 'O',
  '\u01A0': 'O',
  '\u1EDC': 'O',
  '\u1EDA': 'O',
  '\u1EE0': 'O',
  '\u1EDE': 'O',
  '\u1EE2': 'O',
  '\u1ECC': 'O',
  '\u1ED8': 'O',
  '\u01EA': 'O',
  '\u01EC': 'O',
  '\u00D8': 'O',
  '\u01FE': 'O',
  '\u0186': 'O',
  '\u019F': 'O',
  '\uA74A': 'O',
  '\uA74C': 'O',
  '\u01A2': 'OI',
  '\uA74E': 'OO',
  '\u0222': 'OU',
  '\u24C5': 'P',
  '\uFF30': 'P',
  '\u1E54': 'P',
  '\u1E56': 'P',
  '\u01A4': 'P',
  '\u2C63': 'P',
  '\uA750': 'P',
  '\uA752': 'P',
  '\uA754': 'P',
  '\u24C6': 'Q',
  '\uFF31': 'Q',
  '\uA756': 'Q',
  '\uA758': 'Q',
  '\u024A': 'Q',
  '\u24C7': 'R',
  '\uFF32': 'R',
  '\u0154': 'R',
  '\u1E58': 'R',
  '\u0158': 'R',
  '\u0210': 'R',
  '\u0212': 'R',
  '\u1E5A': 'R',
  '\u1E5C': 'R',
  '\u0156': 'R',
  '\u1E5E': 'R',
  '\u024C': 'R',
  '\u2C64': 'R',
  '\uA75A': 'R',
  '\uA7A6': 'R',
  '\uA782': 'R',
  '\u24C8': 'S',
  '\uFF33': 'S',
  '\u1E9E': 'S',
  '\u015A': 'S',
  '\u1E64': 'S',
  '\u015C': 'S',
  '\u1E60': 'S',
  '\u0160': 'S',
  '\u1E66': 'S',
  '\u1E62': 'S',
  '\u1E68': 'S',
  '\u0218': 'S',
  '\u015E': 'S',
  '\u2C7E': 'S',
  '\uA7A8': 'S',
  '\uA784': 'S',
  '\u24C9': 'T',
  '\uFF34': 'T',
  '\u1E6A': 'T',
  '\u0164': 'T',
  '\u1E6C': 'T',
  '\u021A': 'T',
  '\u0162': 'T',
  '\u1E70': 'T',
  '\u1E6E': 'T',
  '\u0166': 'T',
  '\u01AC': 'T',
  '\u01AE': 'T',
  '\u023E': 'T',
  '\uA786': 'T',
  '\uA728': 'TZ',
  '\u24CA': 'U',
  '\uFF35': 'U',
  '\u00D9': 'U',
  '\u00DA': 'U',
  '\u00DB': 'U',
  '\u0168': 'U',
  '\u1E78': 'U',
  '\u016A': 'U',
  '\u1E7A': 'U',
  '\u016C': 'U',
  '\u00DC': 'U',
  '\u01DB': 'U',
  '\u01D7': 'U',
  '\u01D5': 'U',
  '\u01D9': 'U',
  '\u1EE6': 'U',
  '\u016E': 'U',
  '\u0170': 'U',
  '\u01D3': 'U',
  '\u0214': 'U',
  '\u0216': 'U',
  '\u01AF': 'U',
  '\u1EEA': 'U',
  '\u1EE8': 'U',
  '\u1EEE': 'U',
  '\u1EEC': 'U',
  '\u1EF0': 'U',
  '\u1EE4': 'U',
  '\u1E72': 'U',
  '\u0172': 'U',
  '\u1E76': 'U',
  '\u1E74': 'U',
  '\u0244': 'U',
  '\u24CB': 'V',
  '\uFF36': 'V',
  '\u1E7C': 'V',
  '\u1E7E': 'V',
  '\u01B2': 'V',
  '\uA75E': 'V',
  '\u0245': 'V',
  '\uA760': 'VY',
  '\u24CC': 'W',
  '\uFF37': 'W',
  '\u1E80': 'W',
  '\u1E82': 'W',
  '\u0174': 'W',
  '\u1E86': 'W',
  '\u1E84': 'W',
  '\u1E88': 'W',
  '\u2C72': 'W',
  '\u24CD': 'X',
  '\uFF38': 'X',
  '\u1E8A': 'X',
  '\u1E8C': 'X',
  '\u24CE': 'Y',
  '\uFF39': 'Y',
  '\u1EF2': 'Y',
  '\u00DD': 'Y',
  '\u0176': 'Y',
  '\u1EF8': 'Y',
  '\u0232': 'Y',
  '\u1E8E': 'Y',
  '\u0178': 'Y',
  '\u1EF6': 'Y',
  '\u1EF4': 'Y',
  '\u01B3': 'Y',
  '\u024E': 'Y',
  '\u1EFE': 'Y',
  '\u24CF': 'Z',
  '\uFF3A': 'Z',
  '\u0179': 'Z',
  '\u1E90': 'Z',
  '\u017B': 'Z',
  '\u017D': 'Z',
  '\u1E92': 'Z',
  '\u1E94': 'Z',
  '\u01B5': 'Z',
  '\u0224': 'Z',
  '\u2C7F': 'Z',
  '\u2C6B': 'Z',
  '\uA762': 'Z',
  '\u24D0': 'a',
  '\uFF41': 'a',
  '\u1E9A': 'a',
  '\u00E0': 'a',
  '\u00E1': 'a',
  '\u00E2': 'a',
  '\u1EA7': 'a',
  '\u1EA5': 'a',
  '\u1EAB': 'a',
  '\u1EA9': 'a',
  '\u00E3': 'a',
  '\u0101': 'a',
  '\u0103': 'a',
  '\u1EB1': 'a',
  '\u1EAF': 'a',
  '\u1EB5': 'a',
  '\u1EB3': 'a',
  '\u0227': 'a',
  '\u01E1': 'a',
  '\u00E4': 'a',
  '\u01DF': 'a',
  '\u1EA3': 'a',
  '\u00E5': 'a',
  '\u01FB': 'a',
  '\u01CE': 'a',
  '\u0201': 'a',
  '\u0203': 'a',
  '\u1EA1': 'a',
  '\u1EAD': 'a',
  '\u1EB7': 'a',
  '\u1E01': 'a',
  '\u0105': 'a',
  '\u2C65': 'a',
  '\u0250': 'a',
  '\uA733': 'aa',
  '\u00E6': 'ae',
  '\u01FD': 'ae',
  '\u01E3': 'ae',
  '\uA735': 'ao',
  '\uA737': 'au',
  '\uA739': 'av',
  '\uA73B': 'av',
  '\uA73D': 'ay',
  '\u24D1': 'b',
  '\uFF42': 'b',
  '\u1E03': 'b',
  '\u1E05': 'b',
  '\u1E07': 'b',
  '\u0180': 'b',
  '\u0183': 'b',
  '\u0253': 'b',
  '\u24D2': 'c',
  '\uFF43': 'c',
  '\u0107': 'c',
  '\u0109': 'c',
  '\u010B': 'c',
  '\u010D': 'c',
  '\u00E7': 'c',
  '\u1E09': 'c',
  '\u0188': 'c',
  '\u023C': 'c',
  '\uA73F': 'c',
  '\u2184': 'c',
  '\u24D3': 'd',
  '\uFF44': 'd',
  '\u1E0B': 'd',
  '\u010F': 'd',
  '\u1E0D': 'd',
  '\u1E11': 'd',
  '\u1E13': 'd',
  '\u1E0F': 'd',
  '\u0111': 'd',
  '\u018C': 'd',
  '\u0256': 'd',
  '\u0257': 'd',
  '\uA77A': 'd',
  '\u01F3': 'dz',
  '\u01C6': 'dz',
  '\u24D4': 'e',
  '\uFF45': 'e',
  '\u00E8': 'e',
  '\u00E9': 'e',
  '\u00EA': 'e',
  '\u1EC1': 'e',
  '\u1EBF': 'e',
  '\u1EC5': 'e',
  '\u1EC3': 'e',
  '\u1EBD': 'e',
  '\u0113': 'e',
  '\u1E15': 'e',
  '\u1E17': 'e',
  '\u0115': 'e',
  '\u0117': 'e',
  '\u00EB': 'e',
  '\u1EBB': 'e',
  '\u011B': 'e',
  '\u0205': 'e',
  '\u0207': 'e',
  '\u1EB9': 'e',
  '\u1EC7': 'e',
  '\u0229': 'e',
  '\u1E1D': 'e',
  '\u0119': 'e',
  '\u1E19': 'e',
  '\u1E1B': 'e',
  '\u0247': 'e',
  '\u025B': 'e',
  '\u01DD': 'e',
  '\u24D5': 'f',
  '\uFF46': 'f',
  '\u1E1F': 'f',
  '\u0192': 'f',
  '\uA77C': 'f',
  '\u24D6': 'g',
  '\uFF47': 'g',
  '\u01F5': 'g',
  '\u011D': 'g',
  '\u1E21': 'g',
  '\u011F': 'g',
  '\u0121': 'g',
  '\u01E7': 'g',
  '\u0123': 'g',
  '\u01E5': 'g',
  '\u0260': 'g',
  '\uA7A1': 'g',
  '\u1D79': 'g',
  '\uA77F': 'g',
  '\u24D7': 'h',
  '\uFF48': 'h',
  '\u0125': 'h',
  '\u1E23': 'h',
  '\u1E27': 'h',
  '\u021F': 'h',
  '\u1E25': 'h',
  '\u1E29': 'h',
  '\u1E2B': 'h',
  '\u1E96': 'h',
  '\u0127': 'h',
  '\u2C68': 'h',
  '\u2C76': 'h',
  '\u0265': 'h',
  '\u0195': 'hv',
  '\u24D8': 'i',
  '\uFF49': 'i',
  '\u00EC': 'i',
  '\u00ED': 'i',
  '\u00EE': 'i',
  '\u0129': 'i',
  '\u012B': 'i',
  '\u012D': 'i',
  '\u00EF': 'i',
  '\u1E2F': 'i',
  '\u1EC9': 'i',
  '\u01D0': 'i',
  '\u0209': 'i',
  '\u020B': 'i',
  '\u1ECB': 'i',
  '\u012F': 'i',
  '\u1E2D': 'i',
  '\u0268': 'i',
  '\u0131': 'i',
  '\u24D9': 'j',
  '\uFF4A': 'j',
  '\u0135': 'j',
  '\u01F0': 'j',
  '\u0249': 'j',
  '\u24DA': 'k',
  '\uFF4B': 'k',
  '\u1E31': 'k',
  '\u01E9': 'k',
  '\u1E33': 'k',
  '\u0137': 'k',
  '\u1E35': 'k',
  '\u0199': 'k',
  '\u2C6A': 'k',
  '\uA741': 'k',
  '\uA743': 'k',
  '\uA745': 'k',
  '\uA7A3': 'k',
  '\u24DB': 'l',
  '\uFF4C': 'l',
  '\u0140': 'l',
  '\u013A': 'l',
  '\u013E': 'l',
  '\u1E37': 'l',
  '\u1E39': 'l',
  '\u013C': 'l',
  '\u1E3D': 'l',
  '\u1E3B': 'l',
  '\u017F': 'l',
  '\u0142': 'l',
  '\u019A': 'l',
  '\u026B': 'l',
  '\u2C61': 'l',
  '\uA749': 'l',
  '\uA781': 'l',
  '\uA747': 'l',
  '\u01C9': 'lj',
  '\u24DC': 'm',
  '\uFF4D': 'm',
  '\u1E3F': 'm',
  '\u1E41': 'm',
  '\u1E43': 'm',
  '\u0271': 'm',
  '\u026F': 'm',
  '\u24DD': 'n',
  '\uFF4E': 'n',
  '\u01F9': 'n',
  '\u0144': 'n',
  '\u00F1': 'n',
  '\u1E45': 'n',
  '\u0148': 'n',
  '\u1E47': 'n',
  '\u0146': 'n',
  '\u1E4B': 'n',
  '\u1E49': 'n',
  '\u019E': 'n',
  '\u0272': 'n',
  '\u0149': 'n',
  '\uA791': 'n',
  '\uA7A5': 'n',
  '\u01CC': 'nj',
  '\u24DE': 'o',
  '\uFF4F': 'o',
  '\u00F2': 'o',
  '\u00F3': 'o',
  '\u00F4': 'o',
  '\u1ED3': 'o',
  '\u1ED1': 'o',
  '\u1ED7': 'o',
  '\u1ED5': 'o',
  '\u00F5': 'o',
  '\u1E4D': 'o',
  '\u022D': 'o',
  '\u1E4F': 'o',
  '\u014D': 'o',
  '\u1E51': 'o',
  '\u1E53': 'o',
  '\u014F': 'o',
  '\u022F': 'o',
  '\u0231': 'o',
  '\u00F6': 'o',
  '\u022B': 'o',
  '\u1ECF': 'o',
  '\u0151': 'o',
  '\u01D2': 'o',
  '\u020D': 'o',
  '\u020F': 'o',
  '\u01A1': 'o',
  '\u1EDD': 'o',
  '\u1EDB': 'o',
  '\u1EE1': 'o',
  '\u1EDF': 'o',
  '\u1EE3': 'o',
  '\u1ECD': 'o',
  '\u1ED9': 'o',
  '\u01EB': 'o',
  '\u01ED': 'o',
  '\u00F8': 'o',
  '\u01FF': 'o',
  '\u0254': 'o',
  '\uA74B': 'o',
  '\uA74D': 'o',
  '\u0275': 'o',
  '\u01A3': 'oi',
  '\u0223': 'ou',
  '\uA74F': 'oo',
  '\u24DF': 'p',
  '\uFF50': 'p',
  '\u1E55': 'p',
  '\u1E57': 'p',
  '\u01A5': 'p',
  '\u1D7D': 'p',
  '\uA751': 'p',
  '\uA753': 'p',
  '\uA755': 'p',
  '\u24E0': 'q',
  '\uFF51': 'q',
  '\u024B': 'q',
  '\uA757': 'q',
  '\uA759': 'q',
  '\u24E1': 'r',
  '\uFF52': 'r',
  '\u0155': 'r',
  '\u1E59': 'r',
  '\u0159': 'r',
  '\u0211': 'r',
  '\u0213': 'r',
  '\u1E5B': 'r',
  '\u1E5D': 'r',
  '\u0157': 'r',
  '\u1E5F': 'r',
  '\u024D': 'r',
  '\u027D': 'r',
  '\uA75B': 'r',
  '\uA7A7': 'r',
  '\uA783': 'r',
  '\u24E2': 's',
  '\uFF53': 's',
  '\u00DF': 's',
  '\u015B': 's',
  '\u1E65': 's',
  '\u015D': 's',
  '\u1E61': 's',
  '\u0161': 's',
  '\u1E67': 's',
  '\u1E63': 's',
  '\u1E69': 's',
  '\u0219': 's',
  '\u015F': 's',
  '\u023F': 's',
  '\uA7A9': 's',
  '\uA785': 's',
  '\u1E9B': 's',
  '\u24E3': 't',
  '\uFF54': 't',
  '\u1E6B': 't',
  '\u1E97': 't',
  '\u0165': 't',
  '\u1E6D': 't',
  '\u021B': 't',
  '\u0163': 't',
  '\u1E71': 't',
  '\u1E6F': 't',
  '\u0167': 't',
  '\u01AD': 't',
  '\u0288': 't',
  '\u2C66': 't',
  '\uA787': 't',
  '\uA729': 'tz',
  '\u24E4': 'u',
  '\uFF55': 'u',
  '\u00F9': 'u',
  '\u00FA': 'u',
  '\u00FB': 'u',
  '\u0169': 'u',
  '\u1E79': 'u',
  '\u016B': 'u',
  '\u1E7B': 'u',
  '\u016D': 'u',
  '\u00FC': 'u',
  '\u01DC': 'u',
  '\u01D8': 'u',
  '\u01D6': 'u',
  '\u01DA': 'u',
  '\u1EE7': 'u',
  '\u016F': 'u',
  '\u0171': 'u',
  '\u01D4': 'u',
  '\u0215': 'u',
  '\u0217': 'u',
  '\u01B0': 'u',
  '\u1EEB': 'u',
  '\u1EE9': 'u',
  '\u1EEF': 'u',
  '\u1EED': 'u',
  '\u1EF1': 'u',
  '\u1EE5': 'u',
  '\u1E73': 'u',
  '\u0173': 'u',
  '\u1E77': 'u',
  '\u1E75': 'u',
  '\u0289': 'u',
  '\u24E5': 'v',
  '\uFF56': 'v',
  '\u1E7D': 'v',
  '\u1E7F': 'v',
  '\u028B': 'v',
  '\uA75F': 'v',
  '\u028C': 'v',
  '\uA761': 'vy',
  '\u24E6': 'w',
  '\uFF57': 'w',
  '\u1E81': 'w',
  '\u1E83': 'w',
  '\u0175': 'w',
  '\u1E87': 'w',
  '\u1E85': 'w',
  '\u1E98': 'w',
  '\u1E89': 'w',
  '\u2C73': 'w',
  '\u24E7': 'x',
  '\uFF58': 'x',
  '\u1E8B': 'x',
  '\u1E8D': 'x',
  '\u24E8': 'y',
  '\uFF59': 'y',
  '\u1EF3': 'y',
  '\u00FD': 'y',
  '\u0177': 'y',
  '\u1EF9': 'y',
  '\u0233': 'y',
  '\u1E8F': 'y',
  '\u00FF': 'y',
  '\u1EF7': 'y',
  '\u1E99': 'y',
  '\u1EF5': 'y',
  '\u01B4': 'y',
  '\u024F': 'y',
  '\u1EFF': 'y',
  '\u24E9': 'z',
  '\uFF5A': 'z',
  '\u017A': 'z',
  '\u1E91': 'z',
  '\u017C': 'z',
  '\u017E': 'z',
  '\u1E93': 'z',
  '\u1E95': 'z',
  '\u01B6': 'z',
  '\u0225': 'z',
  '\u0240': 'z',
  '\u2C6C': 'z',
  '\uA763': 'z',
  '\u0386': '\u0391',
  '\u0388': '\u0395',
  '\u0389': '\u0397',
  '\u038A': '\u0399',
  '\u03AA': '\u0399',
  '\u038C': '\u039F',
  '\u038E': '\u03A5',
  '\u03AB': '\u03A5',
  '\u038F': '\u03A9',
  '\u03AC': '\u03B1',
  '\u03AD': '\u03B5',
  '\u03AE': '\u03B7',
  '\u03AF': '\u03B9',
  '\u03CA': '\u03B9',
  '\u0390': '\u03B9',
  '\u03CC': '\u03BF',
  '\u03CD': '\u03C5',
  '\u03CB': '\u03C5',
  '\u03B0': '\u03C5',
  '\u03C9': '\u03C9',
  '\u03C2': '\u03C3'
};
function stripSpecialChars(text) {
  const match = a => diacritics[a] || a;
  return text.replace(/[^\u0000-\u007E]/g, match);
}
class ItemsList {
  constructor(_ngSelect, _selectionModel) {
    this._ngSelect = _ngSelect;
    this._selectionModel = _selectionModel;
    this._items = [];
    this._filteredItems = [];
    this._markedIndex = -1;
  }
  get items() {
    return this._items;
  }
  get filteredItems() {
    return this._filteredItems;
  }
  get markedIndex() {
    return this._markedIndex;
  }
  get selectedItems() {
    return this._selectionModel.value;
  }
  get markedItem() {
    return this._filteredItems[this._markedIndex];
  }
  get noItemsToSelect() {
    return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
  }
  get maxItemsSelected() {
    return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
  }
  get lastSelectedItem() {
    let i = this.selectedItems.length - 1;
    for (; i >= 0; i--) {
      const item = this.selectedItems[i];
      if (!item.disabled) {
        return item;
      }
    }
    return null;
  }
  setItems(items) {
    this._items = items.map((item, index) => this.mapItem(item, index));
    if (this._ngSelect.groupBy) {
      this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
      this._items = this._flatten(this._groups);
    } else {
      this._groups = new Map();
      this._groups.set(undefined, this._items);
    }
    this._filteredItems = [...this._items];
  }
  select(item) {
    if (item.selected || this.maxItemsSelected) {
      return;
    }
    const multiple = this._ngSelect.multiple;
    if (!multiple) {
      this.clearSelected();
    }
    this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
    if (this._ngSelect.hideSelected) {
      this._hideSelected(item);
    }
  }
  unselect(item) {
    if (!item.selected) {
      return;
    }
    this._selectionModel.unselect(item, this._ngSelect.multiple);
    if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
      this._showSelected(item);
    }
  }
  findItem(value) {
    let findBy;
    if (this._ngSelect.compareWith) {
      findBy = item => this._ngSelect.compareWith(item.value, value);
    } else if (this._ngSelect.bindValue) {
      findBy = item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value;
    } else {
      findBy = item => item.value === value || !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel);
    }
    return this._items.find(item => findBy(item));
  }
  addItem(item) {
    const option = this.mapItem(item, this._items.length);
    this._items.push(option);
    this._filteredItems.push(option);
    return option;
  }
  clearSelected(keepDisabled = false) {
    this._selectionModel.clear(keepDisabled);
    this._items.forEach(item => {
      item.selected = keepDisabled && item.selected && item.disabled;
      item.marked = false;
    });
    if (this._ngSelect.hideSelected) {
      this.resetFilteredItems();
    }
  }
  findByLabel(term) {
    term = stripSpecialChars(term).toLocaleLowerCase();
    return this.filteredItems.find(item => {
      const label = stripSpecialChars(item.label).toLocaleLowerCase();
      return label.substr(0, term.length) === term;
    });
  }
  filter(term) {
    if (!term) {
      this.resetFilteredItems();
      return;
    }
    this._filteredItems = [];
    term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
    const match = this._ngSelect.searchFn || this._defaultSearchFn;
    const hideSelected = this._ngSelect.hideSelected;
    for (const key of Array.from(this._groups.keys())) {
      const matchedItems = [];
      for (const item of this._groups.get(key)) {
        if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
          continue;
        }
        const searchItem = this._ngSelect.searchFn ? item.value : item;
        if (match(term, searchItem)) {
          matchedItems.push(item);
        }
      }
      if (matchedItems.length > 0) {
        const [last] = matchedItems.slice(-1);
        if (last.parent) {
          const head = this._items.find(x => x === last.parent);
          this._filteredItems.push(head);
        }
        this._filteredItems.push(...matchedItems);
      }
    }
  }
  resetFilteredItems() {
    if (this._filteredItems.length === this._items.length) {
      return;
    }
    if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
      this._filteredItems = this._items.filter(x => !x.selected);
    } else {
      this._filteredItems = this._items;
    }
  }
  unmarkItem() {
    this._markedIndex = -1;
  }
  markNextItem() {
    this._stepToItem(+1);
  }
  markPreviousItem() {
    this._stepToItem(-1);
  }
  markItem(item) {
    this._markedIndex = this._filteredItems.indexOf(item);
  }
  markSelectedOrDefault(markDefault) {
    if (this._filteredItems.length === 0) {
      return;
    }
    const lastMarkedIndex = this._getLastMarkedIndex();
    if (lastMarkedIndex > -1) {
      this._markedIndex = lastMarkedIndex;
    } else {
      this._markedIndex = markDefault ? this.filteredItems.findIndex(x => !x.disabled) : -1;
    }
  }
  resolveNested(option, key) {
    if (!isObject(option)) {
      return option;
    }
    if (key.indexOf('.') === -1) {
      return option[key];
    } else {
      const keys = key.split('.');
      let value = option;
      for (let i = 0, len = keys.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[keys[i]];
      }
      return value;
    }
  }
  mapItem(item, index) {
    const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
    const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
    return {
      index,
      label: isDefined(label) ? label.toString() : '',
      value,
      disabled: item.disabled,
      htmlId: `${this._ngSelect.dropdownId}-${index}`
    };
  }
  mapSelectedItems() {
    const multiple = this._ngSelect.multiple;
    for (const selected of this.selectedItems) {
      const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
      const item = isDefined(value) ? this.findItem(value) : null;
      this._selectionModel.unselect(selected, multiple);
      this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
    }
    if (this._ngSelect.hideSelected) {
      this._filteredItems = this.filteredItems.filter(x => this.selectedItems.indexOf(x) === -1);
    }
  }
  _showSelected(item) {
    this._filteredItems.push(item);
    if (item.parent) {
      const parent = item.parent;
      const parentExists = this._filteredItems.find(x => x === parent);
      if (!parentExists) {
        this._filteredItems.push(parent);
      }
    } else if (item.children) {
      for (const child of item.children) {
        child.selected = false;
        this._filteredItems.push(child);
      }
    }
    this._filteredItems = [...this._filteredItems.sort((a, b) => a.index - b.index)];
  }
  _hideSelected(item) {
    this._filteredItems = this._filteredItems.filter(x => x !== item);
    if (item.parent) {
      const children = item.parent.children;
      if (children.every(x => x.selected)) {
        this._filteredItems = this._filteredItems.filter(x => x !== item.parent);
      }
    } else if (item.children) {
      this._filteredItems = this.filteredItems.filter(x => x.parent !== item);
    }
  }
  _defaultSearchFn(search, opt) {
    const label = stripSpecialChars(opt.label).toLocaleLowerCase();
    return label.indexOf(search) > -1;
  }
  _getNextItemIndex(steps) {
    if (steps > 0) {
      return this._markedIndex >= this._filteredItems.length - 1 ? 0 : this._markedIndex + 1;
    }
    return this._markedIndex <= 0 ? this._filteredItems.length - 1 : this._markedIndex - 1;
  }
  _stepToItem(steps) {
    if (this._filteredItems.length === 0 || this._filteredItems.every(x => x.disabled)) {
      return;
    }
    this._markedIndex = this._getNextItemIndex(steps);
    if (this.markedItem.disabled) {
      this._stepToItem(steps);
    }
  }
  _getLastMarkedIndex() {
    if (this._ngSelect.hideSelected) {
      return -1;
    }
    if (this._markedIndex > -1 && this.markedItem === undefined) {
      return -1;
    }
    const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
    if (this.lastSelectedItem && selectedIndex < 0) {
      return -1;
    }
    return Math.max(this.markedIndex, selectedIndex);
  }
  _groupBy(items, prop) {
    const groups = new Map();
    if (items.length === 0) {
      return groups;
    }
    // Check if items are already grouped by given key.
    if (Array.isArray(items[0].value[prop])) {
      for (const item of items) {
        const children = (item.value[prop] || []).map((x, index) => this.mapItem(x, index));
        groups.set(item, children);
      }
      return groups;
    }
    const isFnKey = isFunction(this._ngSelect.groupBy);
    const keyFn = item => {
      const key = isFnKey ? prop(item.value) : item.value[prop];
      return isDefined(key) ? key : undefined;
    };
    // Group items by key.
    for (const item of items) {
      const key = keyFn(item);
      const group = groups.get(key);
      if (group) {
        group.push(item);
      } else {
        groups.set(key, [item]);
      }
    }
    return groups;
  }
  _flatten(groups) {
    const isGroupByFn = isFunction(this._ngSelect.groupBy);
    const items = [];
    for (const key of Array.from(groups.keys())) {
      let i = items.length;
      if (key === undefined) {
        const withoutGroup = groups.get(undefined) || [];
        items.push(...withoutGroup.map(x => {
          x.index = i++;
          return x;
        }));
        continue;
      }
      const isObjectKey = isObject(key);
      const parent = {
        label: isObjectKey ? '' : String(key),
        children: undefined,
        parent: null,
        index: i++,
        disabled: !this._ngSelect.selectableGroup,
        htmlId: newId()
      };
      const groupKey = isGroupByFn ? this._ngSelect.bindLabel : this._ngSelect.groupBy;
      const groupValue = this._ngSelect.groupValue || (() => {
        if (isObjectKey) {
          return key.value;
        }
        return {
          [groupKey]: key
        };
      });
      const children = groups.get(key).map(x => {
        x.parent = parent;
        x.children = undefined;
        x.index = i++;
        return x;
      });
      parent.children = children;
      parent.value = groupValue(key, children.map(x => x.value));
      items.push(parent);
      items.push(...children);
    }
    return items;
  }
}
var KeyCode;
(function (KeyCode) {
  KeyCode[KeyCode["Tab"] = 9] = "Tab";
  KeyCode[KeyCode["Enter"] = 13] = "Enter";
  KeyCode[KeyCode["Esc"] = 27] = "Esc";
  KeyCode[KeyCode["Space"] = 32] = "Space";
  KeyCode[KeyCode["ArrowUp"] = 38] = "ArrowUp";
  KeyCode[KeyCode["ArrowDown"] = 40] = "ArrowDown";
  KeyCode[KeyCode["Backspace"] = 8] = "Backspace";
})(KeyCode || (KeyCode = {}));
class NgDropdownPanelService {
  constructor() {
    this._dimensions = {
      itemHeight: 0,
      panelHeight: 0,
      itemsPerViewport: 0
    };
  }
  get dimensions() {
    return this._dimensions;
  }
  calculateItems(scrollPos, itemsLength, buffer) {
    const d = this._dimensions;
    const scrollHeight = d.itemHeight * itemsLength;
    const scrollTop = Math.max(0, scrollPos);
    const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
    let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
    const maxStartEnd = end;
    const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
    let start = Math.min(maxStart, Math.floor(indexByScrollTop));
    let topPadding = d.itemHeight * Math.ceil(start) - d.itemHeight * Math.min(start, buffer);
    topPadding = !isNaN(topPadding) ? topPadding : 0;
    start = !isNaN(start) ? start : -1;
    end = !isNaN(end) ? end : -1;
    start -= buffer;
    start = Math.max(0, start);
    end += buffer;
    end = Math.min(itemsLength, end);
    return {
      topPadding,
      scrollHeight,
      start,
      end
    };
  }
  setDimensions(itemHeight, panelHeight) {
    const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
    this._dimensions = {
      itemHeight,
      panelHeight,
      itemsPerViewport
    };
  }
  getScrollTo(itemTop, itemHeight, lastScroll) {
    const {
      panelHeight
    } = this.dimensions;
    const itemBottom = itemTop + itemHeight;
    const top = lastScroll;
    const bottom = top + panelHeight;
    if (panelHeight >= itemBottom && lastScroll === itemTop) {
      return null;
    }
    if (itemBottom > bottom) {
      return top + itemBottom - bottom;
    } else if (itemTop <= top) {
      return itemTop;
    }
    return null;
  }
  static #_ = this.ɵfac = function NgDropdownPanelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgDropdownPanelService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NgDropdownPanelService,
    factory: NgDropdownPanelService.ɵfac
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
const CSS_POSITIONS = ['top', 'right', 'bottom', 'left'];
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
  constructor(_renderer, _zone, _panelService, _elementRef, _document) {
    this._renderer = _renderer;
    this._zone = _zone;
    this._panelService = _panelService;
    this._document = _document;
    this.items = [];
    this.position = 'auto';
    this.virtualScroll = false;
    this.filterValue = null;
    this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._scrollToEndFired = false;
    this._updateScrollHeight = false;
    this._lastScrollPosition = 0;
    this._dropdown = _elementRef.nativeElement;
  }
  get currentPosition() {
    return this._currentPosition;
  }
  get itemsLength() {
    return this._itemsLength;
  }
  set itemsLength(value) {
    if (value !== this._itemsLength) {
      this._itemsLength = value;
      this._onItemsLengthChanged();
    }
  }
  get _startOffset() {
    if (this.markedItem) {
      const {
        itemHeight,
        panelHeight
      } = this._panelService.dimensions;
      const offset = this.markedItem.index * itemHeight;
      return panelHeight > offset ? 0 : offset;
    }
    return 0;
  }
  ngOnInit() {
    this._select = this._dropdown.parentElement;
    this._virtualPadding = this.paddingElementRef.nativeElement;
    this._scrollablePanel = this.scrollElementRef.nativeElement;
    this._contentPanel = this.contentElementRef.nativeElement;
    this._handleScroll();
    this._handleOutsideClick();
    this._appendDropdown();
    this._setupMousedownListener();
  }
  ngOnChanges(changes) {
    if (changes.items) {
      const change = changes.items;
      this._onItemsChange(change.currentValue, change.firstChange);
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
    this._destroy$.unsubscribe();
    if (this.appendTo) {
      this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
    }
  }
  scrollTo(option, startFromOption = false) {
    if (!option) {
      return;
    }
    const index = this.items.indexOf(option);
    if (index < 0 || index >= this.itemsLength) {
      return;
    }
    let scrollTo;
    if (this.virtualScroll) {
      const itemHeight = this._panelService.dimensions.itemHeight;
      scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
    } else {
      const item = this._dropdown.querySelector(`#${option.htmlId}`);
      const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
      scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
    }
    if (isDefined(scrollTo)) {
      this._scrollablePanel.scrollTop = scrollTo;
    }
  }
  scrollToTag() {
    const panel = this._scrollablePanel;
    panel.scrollTop = panel.scrollHeight - panel.clientHeight;
  }
  adjustPosition() {
    this._updateYPosition();
  }
  _handleDropdownPosition() {
    this._currentPosition = this._calculateCurrentPosition(this._dropdown);
    if (CSS_POSITIONS.includes(this._currentPosition)) {
      this._updateDropdownClass(this._currentPosition);
    } else {
      this._updateDropdownClass('bottom');
    }
    if (this.appendTo) {
      this._updateYPosition();
    }
    this._dropdown.style.opacity = '1';
  }
  _updateDropdownClass(currentPosition) {
    CSS_POSITIONS.forEach(position => {
      const REMOVE_CSS_CLASS = `ng-select-${position}`;
      this._renderer.removeClass(this._dropdown, REMOVE_CSS_CLASS);
      this._renderer.removeClass(this._select, REMOVE_CSS_CLASS);
    });
    const ADD_CSS_CLASS = `ng-select-${currentPosition}`;
    this._renderer.addClass(this._dropdown, ADD_CSS_CLASS);
    this._renderer.addClass(this._select, ADD_CSS_CLASS);
  }
  _handleScroll() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(e => {
        const path = e.path || e.composedPath && e.composedPath();
        if (!path || path.length === 0 && !e.target) {
          return;
        }
        const scrollTop = !path || path.length === 0 ? e.target.scrollTop : path[0].scrollTop;
        this._onContentScrolled(scrollTop);
      });
    });
  }
  _handleOutsideClick() {
    if (!this._document) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', {
        capture: true
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'click', {
        capture: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe($event => this._checkToClose($event));
    });
  }
  _checkToClose($event) {
    if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
      return;
    }
    const path = $event.path || $event.composedPath && $event.composedPath();
    if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
      return;
    }
    this._zone.run(() => this.outsideClick.emit());
  }
  _onItemsChange(items, firstChange) {
    this.items = items || [];
    this._scrollToEndFired = false;
    this.itemsLength = items.length;
    if (this.virtualScroll) {
      this._updateItemsRange(firstChange);
    } else {
      this._setVirtualHeight();
      this._updateItems(firstChange);
    }
  }
  _updateItems(firstChange) {
    this.update.emit(this.items);
    if (firstChange === false) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      Promise.resolve().then(() => {
        const panelHeight = this._scrollablePanel.clientHeight;
        this._panelService.setDimensions(0, panelHeight);
        this._handleDropdownPosition();
        this.scrollTo(this.markedItem, firstChange);
      });
    });
  }
  _updateItemsRange(firstChange) {
    this._zone.runOutsideAngular(() => {
      this._measureDimensions().then(() => {
        if (firstChange) {
          this._renderItemsRange(this._startOffset);
          this._handleDropdownPosition();
        } else {
          this._renderItemsRange();
        }
      });
    });
  }
  _onContentScrolled(scrollTop) {
    if (this.virtualScroll) {
      this._renderItemsRange(scrollTop);
    }
    this._lastScrollPosition = scrollTop;
    this._fireScrollToEnd(scrollTop);
  }
  _updateVirtualHeight(height) {
    if (this._updateScrollHeight) {
      this._virtualPadding.style.height = `${height}px`;
      this._updateScrollHeight = false;
    }
  }
  _setVirtualHeight() {
    if (!this._virtualPadding) {
      return;
    }
    this._virtualPadding.style.height = `0px`;
  }
  _onItemsLengthChanged() {
    this._updateScrollHeight = true;
  }
  _renderItemsRange(scrollTop = null) {
    if (scrollTop && this._lastScrollPosition === scrollTop) {
      return;
    }
    scrollTop = scrollTop || this._scrollablePanel.scrollTop;
    const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
    this._updateVirtualHeight(range.scrollHeight);
    this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
    this._zone.run(() => {
      this.update.emit(this.items.slice(range.start, range.end));
      this.scroll.emit({
        start: range.start,
        end: range.end
      });
    });
    if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
      this._scrollablePanel.scrollTop = scrollTop;
      this._lastScrollPosition = scrollTop;
    }
  }
  _measureDimensions() {
    if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
      return Promise.resolve(this._panelService.dimensions);
    }
    const [first] = this.items;
    this.update.emit([first]);
    return Promise.resolve().then(() => {
      const option = this._dropdown.querySelector(`#${first.htmlId}`);
      const optionHeight = option.clientHeight;
      this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
      const panelHeight = this._scrollablePanel.clientHeight;
      this._panelService.setDimensions(optionHeight, panelHeight);
      return this._panelService.dimensions;
    });
  }
  _fireScrollToEnd(scrollTop) {
    if (this._scrollToEndFired || scrollTop === 0) {
      return;
    }
    const padding = this.virtualScroll ? this._virtualPadding : this._contentPanel;
    if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight - 1) {
      this._zone.run(() => this.scrollToEnd.emit());
      this._scrollToEndFired = true;
    }
  }
  _calculateCurrentPosition(dropdownEl) {
    if (this.position !== 'auto') {
      return this.position;
    }
    const selectRect = this._select.getBoundingClientRect();
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const offsetTop = selectRect.top + window.pageYOffset;
    const height = selectRect.height;
    const dropdownHeight = dropdownEl.getBoundingClientRect().height;
    if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
      return 'top';
    } else {
      return 'bottom';
    }
  }
  _appendDropdown() {
    if (!this.appendTo) {
      return;
    }
    this._parent = document.querySelector(this.appendTo);
    if (!this._parent) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
    }
    this._updateXPosition();
    this._parent.appendChild(this._dropdown);
  }
  _updateXPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const offsetLeft = select.left - parent.left;
    this._dropdown.style.left = offsetLeft + 'px';
    this._dropdown.style.width = select.width + 'px';
    this._dropdown.style.minWidth = select.width + 'px';
  }
  _updateYPosition() {
    const select = this._select.getBoundingClientRect();
    const parent = this._parent.getBoundingClientRect();
    const delta = select.height;
    if (this._currentPosition === 'top') {
      const offsetBottom = parent.bottom - select.bottom;
      this._dropdown.style.bottom = offsetBottom + delta + 'px';
      this._dropdown.style.top = 'auto';
    } else if (this._currentPosition === 'bottom') {
      const offsetTop = select.top - parent.top;
      this._dropdown.style.top = offsetTop + delta + 'px';
      this._dropdown.style.bottom = 'auto';
    }
  }
  _setupMousedownListener() {
    this._zone.runOutsideAngular(() => {
      (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._dropdown, 'mousedown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(event => {
        const target = event.target;
        if (target.tagName === 'INPUT') {
          return;
        }
        event.preventDefault();
      });
    });
  }
  static #_ = this.ɵfac = function NgDropdownPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgDropdownPanelComponent,
    selectors: [["ng-dropdown-panel"]],
    viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
      }
    },
    inputs: {
      items: "items",
      markedItem: "markedItem",
      position: "position",
      appendTo: "appendTo",
      bufferAmount: "bufferAmount",
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      headerTemplate: "headerTemplate",
      footerTemplate: "footerTemplate",
      filterValue: "filterValue"
    },
    outputs: {
      update: "update",
      scroll: "scroll",
      scrollToEnd: "scrollToEnd",
      outsideClick: "outsideClick"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 6,
    consts: [["scroll", ""], ["padding", ""], ["content", ""], [1, "ng-dropdown-header"], ["role", "listbox", 1, "ng-dropdown-panel-items", "scroll-host"], [1, "ng-dropdown-footer"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function NgDropdownPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_Conditional_0_Template, 2, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_Conditional_8_Template, 2, 4, "div", 5);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.headerTemplate ? 0 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.footerTemplate ? 8 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      selector: 'ng-dropdown-panel',
      standalone: true,
      template: `
		@if (headerTemplate) {
			<div class="ng-dropdown-header">
				<ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
		<div #scroll role="listbox" class="ng-dropdown-panel-items scroll-host">
			<div #padding [class.total-padding]="virtualScroll"></div>
			<div #content [class.scrollable-content]="virtualScroll && items.length">
				<ng-content />
			</div>
		</div>
		@if (footerTemplate) {
			<div class="ng-dropdown-footer">
				<ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }" />
			</div>
		}
	`,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: NgDropdownPanelService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
    }]
  }], {
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markedItem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    filterValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    update: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    outsideClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    contentElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['content', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    scrollElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['scroll', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }],
    paddingElementRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['padding', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef,
        static: true
      }]
    }]
  });
})();
class NgOptionComponent {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.disabled = false;
    this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  get label() {
    return (this.elementRef.nativeElement.textContent || '').trim();
  }
  ngOnChanges(changes) {
    if (changes.disabled) {
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled
      });
    }
  }
  ngAfterViewChecked() {
    if (this.label !== this._previousLabel) {
      this._previousLabel = this.label;
      this.stateChange$.next({
        value: this.value,
        disabled: this.disabled,
        label: this.elementRef.nativeElement.innerHTML
      });
    }
  }
  ngOnDestroy() {
    this.stateChange$.complete();
  }
  static #_ = this.ɵfac = function NgOptionComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgOptionComponent,
    selectors: [["ng-option"]],
    inputs: {
      value: "value",
      disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    template: function NgOptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-option',
      standalone: true,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `<ng-content />`
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }], {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }]
  });
})();
function DefaultSelectionModelFactory() {
  return new DefaultSelectionModel();
}
class DefaultSelectionModel {
  constructor() {
    this._selected = [];
  }
  get value() {
    return this._selected;
  }
  select(item, multiple, groupAsModel) {
    item.selected = true;
    if (!item.children || !multiple && groupAsModel) {
      this._selected.push(item);
    }
    if (multiple) {
      if (item.parent) {
        const childrenCount = item.parent.children.length;
        const selectedCount = item.parent.children.filter(x => x.selected).length;
        item.parent.selected = childrenCount === selectedCount;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, true);
        this._removeChildren(item);
        if (groupAsModel && this._activeChildren(item)) {
          this._selected = [...this._selected.filter(x => x.parent !== item), item];
        } else {
          this._selected = [...this._selected, ...item.children.filter(x => !x.disabled)];
        }
      }
    }
  }
  unselect(item, multiple) {
    this._selected = this._selected.filter(x => x !== item);
    item.selected = false;
    if (multiple) {
      if (item.parent && item.parent.selected) {
        const children = item.parent.children;
        this._removeParent(item.parent);
        this._removeChildren(item.parent);
        this._selected.push(...children.filter(x => x !== item && !x.disabled));
        item.parent.selected = false;
      } else if (item.children) {
        this._setChildrenSelectedState(item.children, false);
        this._removeChildren(item);
      }
    }
  }
  clear(keepDisabled) {
    this._selected = keepDisabled ? this._selected.filter(x => x.disabled) : [];
  }
  _setChildrenSelectedState(children, selected) {
    for (const child of children) {
      if (child.disabled) {
        continue;
      }
      child.selected = selected;
    }
  }
  _removeChildren(parent) {
    this._selected = [...this._selected.filter(x => x.parent !== parent), ...parent.children.filter(x => x.parent === parent && x.disabled && x.selected)];
  }
  _removeParent(parent) {
    this._selected = this._selected.filter(x => x !== parent);
  }
  _activeChildren(item) {
    return item.children.every(x => !x.disabled || x.selected);
  }
}
class NgSelectConfig {
  constructor() {
    this.fixedPlaceholder = true;
    this.notFoundText = 'No items found';
    this.typeToSearchText = 'Type to search';
    this.addTagText = 'Add item';
    this.loadingText = 'Loading...';
    this.clearAllText = 'Clear all';
    this.disableVirtualScroll = true;
    this.openOnEnter = true;
    this.appearance = 'underline';
  }
  static #_ = this.ɵfac = function NgSelectConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgSelectConfig)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: NgSelectConfig,
    factory: NgSelectConfig.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ConsoleService {
  warn(message) {
    console.warn(message);
  }
  static #_ = this.ɵfac = function ConsoleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ConsoleService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ConsoleService,
    factory: ConsoleService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
  constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
    this.classes = classes;
    this.autoFocus = autoFocus;
    this.config = config;
    this._cd = _cd;
    this._console = _console;
    this.markFirst = true;
    this.fixedPlaceholder = true;
    this.preventToggleOnRightClick = false;
    this.dropdownPosition = 'auto';
    this.loading = false;
    this.closeOnSelect = true;
    this.hideSelected = false;
    this.selectOnTab = false;
    this.bufferAmount = 4;
    this.selectableGroup = false;
    this.selectableGroupAsModel = true;
    this.searchFn = null;
    this.trackByFn = null;
    this.clearOnBackspace = true;
    this.labelForId = null;
    this.inputAttrs = {};
    this.readonly = false;
    this.searchWhileComposing = true;
    this.minTermLength = 0;
    this.editableSearchTerm = false;
    this.ngClass = null;
    this.multiple = false;
    this.addTag = false;
    this.searchable = true;
    this.clearable = true;
    this.isOpen = false;
    // output events
    this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.useDefaultClass = true;
    this.viewPortItems = [];
    this.searchTerm = null;
    this.dropdownId = newId();
    this.escapeHTML = true;
    this._defaultLabel = 'label';
    this._pressedKeys = [];
    this._isComposing = false;
    this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._items = [];
    this.keyDownFn = _ => true;
    this.clearItem = item => {
      const option = this.selectedItems.find(x => x.value === item);
      this.unselect(option);
    };
    this.trackByOption = (_, item) => {
      if (this.trackByFn) {
        return this.trackByFn(item.value);
      }
      return item;
    };
    this._onChange = _ => {};
    this._onTouched = () => {};
    this._mergeGlobalConfig(config);
    this.itemsList = new ItemsList(this, newSelectionModel ? newSelectionModel() : DefaultSelectionModelFactory());
    this.element = _elementRef.nativeElement;
  }
  get filtered() {
    return !!this.searchTerm && this.searchable || this._isComposing;
  }
  get single() {
    return !this.multiple;
  }
  get items() {
    return this._items;
  }
  set items(value) {
    this._itemsAreUsed = true;
    this._items = value ?? [];
  }
  get disabled() {
    return this.readonly || this._disabled;
  }
  get compareWith() {
    return this._compareWith;
  }
  set compareWith(fn) {
    if (fn !== undefined && fn !== null && !isFunction(fn)) {
      throw Error('`compareWith` must be a function.');
    }
    this._compareWith = fn;
  }
  get clearSearchOnAdd() {
    if (isDefined(this._clearSearchOnAdd)) {
      return this._clearSearchOnAdd;
    } else if (isDefined(this.config.clearSearchOnAdd)) {
      return this.config.clearSearchOnAdd;
    }
    return this.closeOnSelect;
  }
  set clearSearchOnAdd(value) {
    this._clearSearchOnAdd = value;
  }
  get deselectOnClick() {
    if (isDefined(this._deselectOnClick)) {
      return this._deselectOnClick;
    } else if (isDefined(this.config.deselectOnClick)) {
      return this.config.deselectOnClick;
    }
    return this.multiple;
  }
  set deselectOnClick(value) {
    this._deselectOnClick = value;
  }
  get selectedItems() {
    return this.itemsList.selectedItems;
  }
  get selectedValues() {
    return this.selectedItems.map(x => x.value);
  }
  get hasValue() {
    return this.selectedItems.length > 0;
  }
  get currentPanelPosition() {
    if (this.dropdownPanel) {
      return this.dropdownPanel.currentPosition;
    }
    return undefined;
  }
  get showAddTag() {
    if (!this._validTerm) {
      return false;
    }
    const term = this.searchTerm.toLowerCase().trim();
    return this.addTag && !this.itemsList.filteredItems.some(x => x.label.toLowerCase() === term) && (!this.hideSelected && this.isOpen || !this.selectedItems.some(x => x.label.toLowerCase() === term)) && !this.loading;
  }
  get _editableSearchTerm() {
    return this.editableSearchTerm && !this.multiple;
  }
  get _isTypeahead() {
    return this.typeahead && this.typeahead.observers.length > 0;
  }
  get _validTerm() {
    const term = this.searchTerm && this.searchTerm.trim();
    return term && term.length >= this.minTermLength;
  }
  ngOnInit() {
    this._handleKeyPresses();
    this._setInputAttributes();
  }
  ngOnChanges(changes) {
    if (changes.multiple) {
      this.itemsList.clearSelected();
    }
    if (changes.items) {
      this._setItems(changes.items.currentValue || []);
    }
    if (changes.isOpen) {
      this._manualOpen = isDefined(changes.isOpen.currentValue);
    }
  }
  ngAfterViewInit() {
    if (!this._itemsAreUsed) {
      this.escapeHTML = false;
      this._setItemsFromNgOptions();
    }
    if (isDefined(this.autoFocus)) {
      this.focus();
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  handleKeyDown($event) {
    const keyCode = KeyCode[$event.which];
    if (keyCode) {
      if (this.keyDownFn($event) === false) {
        return;
      }
      this.handleKeyCode($event);
    } else if ($event.key && $event.key.length === 1) {
      this._keyPress$.next($event.key.toLocaleLowerCase());
    }
  }
  handleKeyCode($event) {
    const target = $event.target;
    if (this.clearButton && this.clearButton.nativeElement === target) {
      this.handleKeyCodeClear($event);
    } else {
      this.handleKeyCodeInput($event);
    }
  }
  handleKeyCodeInput($event) {
    switch ($event.which) {
      case KeyCode.ArrowDown:
        this._handleArrowDown($event);
        break;
      case KeyCode.ArrowUp:
        this._handleArrowUp($event);
        break;
      case KeyCode.Space:
        this._handleSpace($event);
        break;
      case KeyCode.Enter:
        this._handleEnter($event);
        break;
      case KeyCode.Tab:
        this._handleTab($event);
        break;
      case KeyCode.Esc:
        this.close();
        $event.preventDefault();
        break;
      case KeyCode.Backspace:
        this._handleBackspace();
        break;
    }
  }
  handleKeyCodeClear($event) {
    switch ($event.which) {
      case KeyCode.Enter:
        this.handleClearClick();
        $event.preventDefault();
        break;
    }
  }
  handleMousedown($event) {
    if (this.preventToggleOnRightClick && $event.button === 2) {
      return false;
    }
    const target = $event.target;
    if (target.tagName !== 'INPUT') {
      $event.preventDefault();
    }
    if (target.classList.contains('ng-clear-wrapper')) {
      this.handleClearClick();
      return;
    }
    if (target.classList.contains('ng-arrow-wrapper')) {
      this.handleArrowClick();
      return;
    }
    if (target.classList.contains('ng-value-icon')) {
      return;
    }
    if (!this.focused) {
      this.focus();
    }
    if (this.searchable) {
      this.open();
    } else {
      this.toggle();
    }
  }
  handleArrowClick() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  handleClearClick() {
    if (this.hasValue) {
      this.itemsList.clearSelected(true);
      this._updateNgModel();
    }
    this._clearSearch();
    this.focus();
    this.clearEvent.emit();
    this._onSelectionChanged();
  }
  clearModel() {
    if (!this.clearable) {
      return;
    }
    this.itemsList.clearSelected();
    this._updateNgModel();
  }
  writeValue(value) {
    this.itemsList.clearSelected();
    this._handleWriteValue(value);
    this._cd.markForCheck();
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(state) {
    this._disabled = state;
    this._cd.markForCheck();
  }
  toggle() {
    if (!this.isOpen) {
      this.open();
    } else {
      this.close();
    }
  }
  open() {
    if (this.disabled || this.isOpen || this._manualOpen) {
      return;
    }
    if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
      return;
    }
    this.isOpen = true;
    this.itemsList.markSelectedOrDefault(this.markFirst);
    this.openEvent.emit();
    if (!this.searchTerm) {
      this.focus();
    }
    this.detectChanges();
  }
  close() {
    if (!this.isOpen || this._manualOpen) {
      return;
    }
    this.isOpen = false;
    this._isComposing = false;
    if (!this._editableSearchTerm) {
      this._clearSearch();
    } else {
      this.itemsList.resetFilteredItems();
    }
    this.itemsList.unmarkItem();
    this._onTouched();
    this.closeEvent.emit();
    this._cd.markForCheck();
  }
  toggleItem(item) {
    if (!item || item.disabled || this.disabled) {
      return;
    }
    if (this.deselectOnClick && item.selected) {
      this.unselect(item);
    } else {
      this.select(item);
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
  }
  select(item) {
    if (!item.selected) {
      this.itemsList.select(item);
      if (this.clearSearchOnAdd && !this._editableSearchTerm) {
        this._clearSearch();
      }
      this._updateNgModel();
      if (this.multiple) {
        this.addEvent.emit(item.value);
      }
    }
    if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
      this.close();
    }
    this._onSelectionChanged();
  }
  focus() {
    this.searchInput.nativeElement.focus();
  }
  blur() {
    this.searchInput.nativeElement.blur();
  }
  unselect(item) {
    if (!item) {
      return;
    }
    this.itemsList.unselect(item);
    this.focus();
    this._updateNgModel();
    this.removeEvent.emit(item.value);
    this._onSelectionChanged();
  }
  selectTag() {
    let tag;
    if (isFunction(this.addTag)) {
      tag = this.addTag(this.searchTerm);
    } else {
      tag = this._primitive ? this.searchTerm : {
        [this.bindLabel]: this.searchTerm
      };
    }
    const handleTag = item => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item);
    if (isPromise(tag)) {
      tag.then(item => this.select(handleTag(item))).catch(() => {});
    } else if (tag) {
      this.select(handleTag(tag));
    }
  }
  showClear() {
    return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
  }
  focusOnClear() {
    this.blur();
    if (this.clearButton) {
      this.clearButton.nativeElement.focus();
    }
  }
  showNoItemsFound() {
    const empty = this.itemsList.filteredItems.length === 0;
    return (empty && !this._isTypeahead && !this.loading || empty && this._isTypeahead && this._validTerm && !this.loading) && !this.showAddTag;
  }
  showTypeToSearch() {
    const empty = this.itemsList.filteredItems.length === 0;
    return empty && this._isTypeahead && !this._validTerm && !this.loading;
  }
  onCompositionStart() {
    this._isComposing = true;
  }
  onCompositionEnd(term) {
    this._isComposing = false;
    if (this.searchWhileComposing) {
      return;
    }
    this.filter(term);
  }
  filter(term) {
    if (this._isComposing && !this.searchWhileComposing) {
      return;
    }
    this.searchTerm = term;
    if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
      this.typeahead.next(term);
    }
    if (!this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
      if (this.isOpen) {
        this.itemsList.markSelectedOrDefault(this.markFirst);
      }
    }
    this.searchEvent.emit({
      term,
      items: this.itemsList.filteredItems.map(x => x.value)
    });
    this.open();
  }
  onInputFocus($event) {
    if (this.focused) {
      return;
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.element.classList.add('ng-select-focused');
    this.focusEvent.emit($event);
    this.focused = true;
  }
  onInputBlur($event) {
    this.element.classList.remove('ng-select-focused');
    this.blurEvent.emit($event);
    if (!this.isOpen && !this.disabled) {
      this._onTouched();
    }
    if (this._editableSearchTerm) {
      this._setSearchTermFromItems();
    }
    this.focused = false;
  }
  onItemHover(item) {
    if (item.disabled) {
      return;
    }
    this.itemsList.markItem(item);
  }
  detectChanges() {
    if (!this._cd.destroyed) {
      this._cd.detectChanges();
    }
  }
  _setSearchTermFromItems() {
    const selected = this.selectedItems && this.selectedItems[0];
    this.searchTerm = selected && selected.label || null;
  }
  _setItems(items) {
    const firstItem = items[0];
    this.bindLabel = this.bindLabel || this._defaultLabel;
    this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
    this.itemsList.setItems(items);
    if (items.length > 0 && this.hasValue) {
      this.itemsList.mapSelectedItems();
    }
    if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
      this.itemsList.filter(this.searchTerm);
    }
    if (this._isTypeahead || this.isOpen) {
      this.itemsList.markSelectedOrDefault(this.markFirst);
    }
  }
  _setItemsFromNgOptions() {
    const mapNgOptions = options => {
      this.items = options.map(option => ({
        $ngOptionValue: option.value,
        $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
        disabled: option.disabled
      }));
      this.itemsList.setItems(this.items);
      if (this.hasValue) {
        this.itemsList.mapSelectedItems();
      }
      this.detectChanges();
    };
    const handleOptionChange = () => {
      const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
      (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map(option => option.stateChange$)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed)).subscribe(option => {
        const item = this.itemsList.findItem(option.value);
        item.disabled = option.disabled;
        item.label = option.label || item.label;
        this._cd.detectChanges();
      });
    };
    this.ngOptions.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$)).subscribe(options => {
      this.bindLabel = this._defaultLabel;
      mapNgOptions(options);
      handleOptionChange();
    });
  }
  _isValidWriteValue(value) {
    if (!isDefined(value) || this.multiple && value === '' || Array.isArray(value) && value.length === 0) {
      return false;
    }
    const validateBinding = item => {
      if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
        this._console.warn(`Setting object(${JSON.stringify(item)}) as your model with bindValue is not allowed unless [compareWith] is used.`);
        return false;
      }
      return true;
    };
    if (this.multiple) {
      if (!Array.isArray(value)) {
        this._console.warn('Multiple select ngModel should be array.');
        return false;
      }
      return value.every(item => validateBinding(item));
    } else {
      return validateBinding(value);
    }
  }
  _handleWriteValue(ngModel) {
    if (!this._isValidWriteValue(ngModel)) {
      return;
    }
    const select = val => {
      let item = this.itemsList.findItem(val);
      if (item) {
        this.itemsList.select(item);
      } else {
        const isValObject = isObject(val);
        const isPrimitive = !isValObject && !this.bindValue;
        if (isValObject || isPrimitive) {
          this.itemsList.select(this.itemsList.mapItem(val, null));
        } else if (this.bindValue) {
          item = {
            [this.bindLabel]: null,
            [this.bindValue]: val
          };
          this.itemsList.select(this.itemsList.mapItem(item, null));
        }
      }
    };
    if (this.multiple) {
      ngModel.forEach(item => select(item));
    } else {
      select(ngModel);
    }
  }
  _handleKeyPresses() {
    if (this.searchable) {
      return;
    }
    this._keyPress$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(letter => this._pressedKeys.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)(() => this._pressedKeys.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)(() => this._pressedKeys.join(''))).subscribe(term => {
      const item = this.itemsList.findByLabel(term);
      if (item) {
        if (this.isOpen) {
          this.itemsList.markItem(item);
          this._scrollToMarked();
          this._cd.markForCheck();
        } else {
          this.select(item);
        }
      }
      this._pressedKeys = [];
    });
  }
  _setInputAttributes() {
    const input = this.searchInput.nativeElement;
    const attributes = {
      type: 'text',
      autocorrect: 'off',
      autocapitalize: 'off',
      autocomplete: this.labelForId ? 'off' : this.dropdownId,
      ...this.inputAttrs
    };
    for (const key of Object.keys(attributes)) {
      input.setAttribute(key, attributes[key]);
    }
  }
  _updateNgModel() {
    const model = [];
    for (const item of this.selectedItems) {
      if (this.bindValue) {
        let value = null;
        if (item.children) {
          const groupKey = this.groupValue ? this.bindValue : this.groupBy;
          value = item.value[groupKey || this.groupBy];
        } else {
          value = this.itemsList.resolveNested(item.value, this.bindValue);
        }
        model.push(value);
      } else {
        model.push(item.value);
      }
    }
    const selected = this.selectedItems.map(x => x.value);
    if (this.multiple) {
      this._onChange(model);
      this.changeEvent.emit(selected);
    } else {
      this._onChange(isDefined(model[0]) ? model[0] : null);
      this.changeEvent.emit(selected[0]);
    }
    this._cd.markForCheck();
  }
  _clearSearch() {
    if (!this.searchTerm) {
      return;
    }
    this._changeSearch(null);
    this.itemsList.resetFilteredItems();
  }
  _changeSearch(searchTerm) {
    this.searchTerm = searchTerm;
    if (this._isTypeahead) {
      this.typeahead.next(searchTerm);
    }
  }
  _scrollToMarked() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollTo(this.itemsList.markedItem);
  }
  _scrollToTag() {
    if (!this.isOpen || !this.dropdownPanel) {
      return;
    }
    this.dropdownPanel.scrollToTag();
  }
  _onSelectionChanged() {
    if (this.isOpen && this.deselectOnClick && this.appendTo) {
      // Make sure items are rendered.
      this._cd.detectChanges();
      this.dropdownPanel.adjustPosition();
    }
  }
  _handleTab($event) {
    if (this.isOpen === false) {
      if (this.showClear() && !$event.shiftKey) {
        this.focusOnClear();
        $event.preventDefault();
      } else if (!this.addTag) {
        return;
      }
    }
    if (this.selectOnTab) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
        $event.preventDefault();
      } else if (this.showAddTag) {
        this.selectTag();
        $event.preventDefault();
      } else {
        this.close();
      }
    } else {
      this.close();
    }
  }
  _handleEnter($event) {
    if (this.isOpen || this._manualOpen) {
      if (this.itemsList.markedItem) {
        this.toggleItem(this.itemsList.markedItem);
      } else if (this.showAddTag) {
        this.selectTag();
      }
    } else if (this.openOnEnter) {
      this.open();
    } else {
      return;
    }
    $event.preventDefault();
  }
  _handleSpace($event) {
    if (this.isOpen || this._manualOpen) {
      return;
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowDown($event) {
    if (this._nextItemIsTag(+1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markNextItem();
      this._scrollToMarked();
    }
    this.open();
    $event.preventDefault();
  }
  _handleArrowUp($event) {
    if (!this.isOpen) {
      return;
    }
    if (this._nextItemIsTag(-1)) {
      this.itemsList.unmarkItem();
      this._scrollToTag();
    } else {
      this.itemsList.markPreviousItem();
      this._scrollToMarked();
    }
    $event.preventDefault();
  }
  _nextItemIsTag(nextStep) {
    const nextIndex = this.itemsList.markedIndex + nextStep;
    return this.addTag && this.searchTerm && this.itemsList.markedItem && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
  }
  _handleBackspace() {
    if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
      return;
    }
    if (this.multiple) {
      this.unselect(this.itemsList.lastSelectedItem);
    } else {
      this.clearModel();
    }
  }
  _mergeGlobalConfig(config) {
    this.placeholder = this.placeholder || config.placeholder;
    this.fixedPlaceholder = this.fixedPlaceholder || config.fixedPlaceholder;
    this.notFoundText = this.notFoundText || config.notFoundText;
    this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
    this.addTagText = this.addTagText || config.addTagText;
    this.loadingText = this.loadingText || config.loadingText;
    this.clearAllText = this.clearAllText || config.clearAllText;
    this.virtualScroll = isDefined(this.virtualScroll) ? this.virtualScroll : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
    this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
    this.appendTo = this.appendTo || config.appendTo;
    this.bindValue = this.bindValue || config.bindValue;
    this.bindLabel = this.bindLabel || config.bindLabel;
    this.appearance = this.appearance || config.appearance;
  }
  static #_ = this.ɵfac = function NgSelectComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService));
  };
  static #_2 = this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NgSelectComponent,
    selectors: [["ng-select"]],
    contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgPlaceholderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.placeholderTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
      }
    },
    viewQuery: function NgSelectComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clearButton = _t.first);
      }
    },
    hostVars: 20,
    hostBindings: function NgSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) {
          return ctx.handleKeyDown($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-typeahead", ctx.typeahead)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select", ctx.useDefaultClass)("ng-select-filtered", ctx.filtered)("ng-select-single", ctx.single)("ng-select-disabled", ctx.disabled);
      }
    },
    inputs: {
      bindLabel: "bindLabel",
      bindValue: "bindValue",
      ariaLabel: "ariaLabel",
      markFirst: [2, "markFirst", "markFirst", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      placeholder: "placeholder",
      fixedPlaceholder: "fixedPlaceholder",
      notFoundText: "notFoundText",
      typeToSearchText: "typeToSearchText",
      preventToggleOnRightClick: "preventToggleOnRightClick",
      addTagText: "addTagText",
      loadingText: "loadingText",
      clearAllText: "clearAllText",
      appearance: "appearance",
      dropdownPosition: "dropdownPosition",
      appendTo: "appendTo",
      loading: [2, "loading", "loading", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      closeOnSelect: [2, "closeOnSelect", "closeOnSelect", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      hideSelected: [2, "hideSelected", "hideSelected", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectOnTab: [2, "selectOnTab", "selectOnTab", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      openOnEnter: [2, "openOnEnter", "openOnEnter", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      maxSelectedItems: [2, "maxSelectedItems", "maxSelectedItems", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      groupBy: "groupBy",
      groupValue: "groupValue",
      bufferAmount: [2, "bufferAmount", "bufferAmount", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectableGroup: [2, "selectableGroup", "selectableGroup", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      selectableGroupAsModel: [2, "selectableGroupAsModel", "selectableGroupAsModel", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      searchFn: "searchFn",
      trackByFn: "trackByFn",
      clearOnBackspace: [2, "clearOnBackspace", "clearOnBackspace", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      labelForId: "labelForId",
      inputAttrs: "inputAttrs",
      tabIndex: [2, "tabIndex", "tabIndex", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      readonly: [2, "readonly", "readonly", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      searchWhileComposing: [2, "searchWhileComposing", "searchWhileComposing", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      minTermLength: [2, "minTermLength", "minTermLength", _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute],
      editableSearchTerm: [2, "editableSearchTerm", "editableSearchTerm", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      ngClass: "ngClass",
      typeahead: "typeahead",
      multiple: [2, "multiple", "multiple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      addTag: "addTag",
      searchable: [2, "searchable", "searchable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      clearable: [2, "clearable", "clearable", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
      isOpen: "isOpen",
      items: "items",
      compareWith: "compareWith",
      clearSearchOnAdd: "clearSearchOnAdd",
      deselectOnClick: "deselectOnClick",
      keyDownFn: "keyDownFn"
    },
    outputs: {
      blurEvent: "blur",
      focusEvent: "focus",
      changeEvent: "change",
      openEvent: "open",
      closeEvent: "close",
      searchEvent: "search",
      clearEvent: "clear",
      addEvent: "add",
      removeEvent: "remove",
      scroll: "scroll",
      scrollToEnd: "scrollToEnd"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
      useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
      multi: true
    }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 13,
    vars: 19,
    consts: [["searchInput", ""], ["defaultPlaceholderTemplate", ""], ["defaultLabelTemplate", ""], ["defaultLoadingSpinnerTemplate", ""], ["clearButton", ""], ["defaultOptionTemplate", ""], ["defaultTagTemplate", ""], ["defaultNotFoundTemplate", ""], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""], [1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-input"], ["aria-autocomplete", "list", "role", "combobox", 3, "blur", "change", "compositionend", "compositionstart", "focus", "input", "disabled", "readOnly", "value"], ["role", "button", "tabindex", "0", 1, "ng-clear-wrapper", 3, "title"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id"], [3, "ngTemplateOutlet"], [1, "ng-placeholder"], [1, "ng-value", 3, "ng-value-disabled"], [1, "ng-value"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], [1, "ng-spinner-loader"], ["aria-hidden", "true", 1, "ng-clear"], ["role", "listbox", "aria-label", "Options list", 1, "ng-dropdown-panel", 3, "update", "scroll", "scrollToEnd", "outsideClick", "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id"], [1, "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked"], ["role", "option", 1, "ng-option", 3, "ng-option-marked"], [1, "ng-option", 3, "click", "mouseover"], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], [1, "ng-tag-label"], [1, "ng-option", "ng-option-disabled"]],
    template: function NgSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.handleMousedown($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_Conditional_2_Template, 3, 1)(3, NgSelectComponent_Conditional_3_Template, 2, 0)(4, NgSelectComponent_Conditional_4_Template, 1, 5, null, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13)(6, "input", 14, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function NgSelectComponent_Template_input_blur_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputBlur($event));
        })("change", function NgSelectComponent_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event.stopPropagation());
        })("compositionend", function NgSelectComponent_Template_input_compositionend_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const searchInput_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionEnd(searchInput_r7.value));
        })("compositionstart", function NgSelectComponent_Template_input_compositionstart_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onCompositionStart());
        })("focus", function NgSelectComponent_Template_input_focus_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onInputFocus($event));
        })("input", function NgSelectComponent_Template_input_input_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const searchInput_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.filter(searchInput_r7.value));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgSelectComponent_Conditional_8_Template, 3, 1)(9, NgSelectComponent_Conditional_9_Template, 4, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NgSelectComponent_Conditional_12_Template, 8, 17, "ng-dropdown-panel", 18);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.selectedItems.length === 0 && !ctx.searchTerm || ctx.fixedPlaceholder === true ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((!ctx.multiLabelTemplate || !ctx.multiple) && ctx.selectedItems.length > 0 ? 3 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.multiple && ctx.multiLabelTemplate && ctx.selectedValues.length > 0 ? 4 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null)("aria-controls", ctx.isOpen ? ctx.dropdownId : null)("aria-expanded", ctx.isOpen)("aria-label", ctx.ariaLabel)("id", ctx.labelForId)("tabindex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.loading ? 8 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.showClear() ? 9 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.isOpen ? 12 : -1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
    styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ng-select',
      standalone: true,
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgSelectComponent),
        multi: true
      }, NgDropdownPanelService],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass],
      template: "<div\n\t(mousedown)=\"handleMousedown($event)\"\n\t[class.ng-appearance-outline]=\"appearance === 'outline'\"\n\t[class.ng-has-value]=\"hasValue\"\n\tclass=\"ng-select-container\">\n\t<div class=\"ng-value-container\">\n\t\t@if ((selectedItems.length === 0 && !searchTerm) || fixedPlaceholder === true) {\n\t\t\t<ng-template #defaultPlaceholderTemplate>\n\t\t\t\t<div class=\"ng-placeholder\">{{ placeholder }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template [ngTemplateOutlet]=\"placeholderTemplate || defaultPlaceholderTemplate\"> </ng-template>\n\t\t}\n\n\t\t@if ((!multiLabelTemplate || !multiple) && selectedItems.length > 0) {\n\t\t\t@for (item of selectedItems; track trackByOption($index, item)) {\n\t\t\t\t<div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\">\n\t\t\t\t\t<ng-template #defaultLabelTemplate>\n\t\t\t\t\t\t<span class=\"ng-value-icon left\" (click)=\"unselect(item)\" aria-hidden=\"true\">\u00D7</span>\n\t\t\t\t\t\t<span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t}\n\n\t\t@if (multiple && multiLabelTemplate && selectedValues.length > 0) {\n\t\t\t<ng-template [ngTemplateOutlet]=\"multiLabelTemplate\" [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n\t\t\t</ng-template>\n\t\t}\n\n\t\t<div class=\"ng-input\">\n\t\t\t<input\n\t\t\t\t#searchInput\n\t\t\t\t(blur)=\"onInputBlur($event)\"\n\t\t\t\t(change)=\"$event.stopPropagation()\"\n\t\t\t\t(compositionend)=\"onCompositionEnd(searchInput.value)\"\n\t\t\t\t(compositionstart)=\"onCompositionStart()\"\n\t\t\t\t(focus)=\"onInputFocus($event)\"\n\t\t\t\t(input)=\"filter(searchInput.value)\"\n\t\t\t\t[attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\"\n\t\t\t\t[attr.aria-controls]=\"isOpen ? dropdownId : null\"\n\t\t\t\t[attr.aria-expanded]=\"isOpen\"\n\t\t\t\t[attr.aria-label]=\"ariaLabel\"\n\t\t\t\t[attr.id]=\"labelForId\"\n\t\t\t\t[attr.tabindex]=\"tabIndex\"\n\t\t\t\t[disabled]=\"disabled\"\n\t\t\t\t[readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n\t\t\t\t[value]=\"searchTerm ? searchTerm : ''\"\n\t\t\t\taria-autocomplete=\"list\"\n\t\t\t\trole=\"combobox\" />\n\t\t</div>\n\t</div>\n\n\t@if (loading) {\n\t\t<ng-template #defaultLoadingSpinnerTemplate>\n\t\t\t<div class=\"ng-spinner-loader\"></div>\n\t\t</ng-template>\n\t\t<ng-template [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\"></ng-template>\n\t}\n\n\t@if (showClear()) {\n\t\t<span class=\"ng-clear-wrapper\" role=\"button\" tabindex=\"0\" title=\"{{ clearAllText }}\" #clearButton>\n\t\t\t<span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n\t\t</span>\n\t}\n\n\t<span class=\"ng-arrow-wrapper\">\n\t\t<span class=\"ng-arrow\"></span>\n\t</span>\n</div>\n\n@if (isOpen) {\n\t<ng-dropdown-panel\n\t\tclass=\"ng-dropdown-panel\"\n\t\t[virtualScroll]=\"virtualScroll\"\n\t\t[bufferAmount]=\"bufferAmount\"\n\t\t[appendTo]=\"appendTo\"\n\t\t[position]=\"dropdownPosition\"\n\t\t[headerTemplate]=\"headerTemplate\"\n\t\t[footerTemplate]=\"footerTemplate\"\n\t\t[filterValue]=\"searchTerm\"\n\t\t[items]=\"itemsList.filteredItems\"\n\t\t[markedItem]=\"itemsList.markedItem\"\n\t\t(update)=\"viewPortItems = $event\"\n\t\t(scroll)=\"scroll.emit($event)\"\n\t\t(scrollToEnd)=\"scrollToEnd.emit($event)\"\n\t\t(outsideClick)=\"close()\"\n\t\t[class.ng-select-multiple]=\"multiple\"\n\t\t[ngClass]=\"appendTo ? (ngClass ? ngClass : classes) : null\"\n\t\t[id]=\"dropdownId\"\n\t\trole=\"listbox\"\n\t\taria-label=\"Options list\">\n\t\t<ng-container>\n\t\t\t@for (item of viewPortItems; track trackByOption($index, item)) {\n\t\t\t\t<div\n\t\t\t\t\tclass=\"ng-option\"\n\t\t\t\t\t[attr.role]=\"item.children ? 'group' : 'option'\"\n\t\t\t\t\t(click)=\"toggleItem(item)\"\n\t\t\t\t\t(mouseover)=\"onItemHover(item)\"\n\t\t\t\t\t[class.ng-option-disabled]=\"item.disabled\"\n\t\t\t\t\t[class.ng-option-selected]=\"item.selected\"\n\t\t\t\t\t[class.ng-optgroup]=\"item.children\"\n\t\t\t\t\t[class.ng-option]=\"!item.children\"\n\t\t\t\t\t[class.ng-option-child]=\"!!item.parent\"\n\t\t\t\t\t[class.ng-option-marked]=\"item === itemsList.markedItem\"\n\t\t\t\t\t[attr.aria-selected]=\"item.selected\"\n\t\t\t\t\t[attr.id]=\"item?.htmlId\">\n\t\t\t\t\t<ng-template #defaultOptionTemplate>\n\t\t\t\t\t\t<span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"\n\t\t\t\t\t\t\titem.children ? optgroupTemplate || defaultOptionTemplate : optionTemplate || defaultOptionTemplate\n\t\t\t\t\t\t\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ item: item.value, item$: item, index: item.index, searchTerm: searchTerm }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t\t@if (showAddTag) {\n\t\t\t\t<div\n\t\t\t\t\tclass=\"ng-option\"\n\t\t\t\t\t[class.ng-option-marked]=\"!itemsList.markedItem\"\n\t\t\t\t\t(mouseover)=\"itemsList.unmarkItem()\"\n\t\t\t\t\trole=\"option\"\n\t\t\t\t\t(click)=\"selectTag()\">\n\t\t\t\t\t<ng-template #defaultTagTemplate>\n\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t><span class=\"ng-tag-label\">{{ addTagText }}</span\n\t\t\t\t\t\t\t>\"{{ searchTerm }}\"</span\n\t\t\t\t\t\t>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template\n\t\t\t\t\t\t[ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n\t\t\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t\t\t</ng-template>\n\t\t\t\t</div>\n\t\t\t}\n\t\t</ng-container>\n\t\t@if (showNoItemsFound()) {\n\t\t\t<ng-template #defaultNotFoundTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ notFoundText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t</ng-template>\n\t\t}\n\t\t@if (showTypeToSearch()) {\n\t\t\t<ng-template #defaultTypeToSearchTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ typeToSearchText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\"></ng-template>\n\t\t}\n\t\t@if (loading && itemsList.filteredItems.length === 0) {\n\t\t\t<ng-template #defaultLoadingTextTemplate>\n\t\t\t\t<div class=\"ng-option ng-option-disabled\">{{ loadingText }}</div>\n\t\t\t</ng-template>\n\t\t\t<ng-template\n\t\t\t\t[ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n\t\t\t</ng-template>\n\t\t}\n\t</ng-dropdown-panel>\n}\n",
      styles: ["@charset \"UTF-8\";.ng-select{position:relative;display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:unset;user-select:unset;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:\"\\200b\"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n"]
    }]
  }], () => [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['class']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
      args: ['autofocus']
    }]
  }, {
    type: NgSelectConfig
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [SELECTION_MODEL_FACTORY]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: ConsoleService
  }], {
    bindLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bindValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    markFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fixedPlaceholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    notFoundText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeToSearchText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    preventToggleOnRightClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    addTagText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearAllText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dropdownPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loading: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    closeOnSelect: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    hideSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectOnTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    openOnEnter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    maxSelectedItems: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    groupBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bufferAmount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    virtualScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectableGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    selectableGroupAsModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    searchFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearOnBackspace: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    labelForId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    inputAttrs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tabIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    searchWhileComposing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    minTermLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute
      }]
    }],
    editableSearchTerm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }],
    ngClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    typeahead: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-typeahead']
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-multiple']
    }],
    addTag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-taggable']
    }],
    searchable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-searchable']
    }],
    clearable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        transform: _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-clearable']
    }],
    isOpen: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-opened']
    }],
    blurEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['blur']
    }],
    focusEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['focus']
    }],
    changeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['change']
    }],
    openEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['open']
    }],
    closeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['close']
    }],
    searchEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['search']
    }],
    clearEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['clear']
    }],
    addEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['add']
    }],
    removeEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['remove']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scroll']
    }],
    scrollToEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['scrollToEnd']
    }],
    optionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptionTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    optgroupTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgOptgroupTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    labelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    multiLabelTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgMultiLabelTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    headerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    notFoundTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgNotFoundTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgPlaceholderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    typeToSearchTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTypeToSearchTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingTextTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingTextTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    tagTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgTagTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    loadingSpinnerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [NgLoadingSpinnerTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }],
    dropdownPanel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => NgDropdownPanelComponent)]
    }],
    searchInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['searchInput', {
        static: true
      }]
    }],
    clearButton: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['clearButton']
    }],
    ngOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [NgOptionComponent, {
        descendants: true
      }]
    }],
    useDefaultClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select']
    }],
    filtered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-filtered']
    }],
    single: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-single']
    }],
    items: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ng-select-disabled']
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    clearSearchOnAdd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    deselectOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    keyDownFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    handleKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class NgSelectModule {
  static #_ = this.ɵfac = function NgSelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgSelectModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgSelectModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: SELECTION_MODEL_FACTORY,
      useValue: DefaultSelectionModelFactory
    }]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective],
      exports: [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgPlaceholderTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective],
      providers: [{
        provide: SELECTION_MODEL_FACTORY,
        useValue: DefaultSelectionModelFactory
      }]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ng-select
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1661:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@rxweb/reactive-form-validators/fesm2020/rxweb-reactive-form-validators.mjs ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncValidationDirective: () => (/* binding */ AsyncValidationDirective),
/* harmony export */   ErrorMessageBindingStrategy: () => (/* binding */ ErrorMessageBindingStrategy),
/* harmony export */   FileControlDirective: () => (/* binding */ FileControlDirective),
/* harmony export */   FormBuilderConfiguration: () => (/* binding */ FormBuilderConfiguration),
/* harmony export */   HtmlControlTemplateDirective: () => (/* binding */ HtmlControlTemplateDirective),
/* harmony export */   IAbstractControl: () => (/* binding */ IAbstractControl),
/* harmony export */   ImageFileControlDirective: () => (/* binding */ ImageFileControlDirective),
/* harmony export */   IpVersion: () => (/* binding */ IpVersion),
/* harmony export */   NumericValueType: () => (/* binding */ NumericValueType),
/* harmony export */   ReactiveFormConfig: () => (/* binding */ ReactiveFormConfig),
/* harmony export */   ReactiveTypedFormsModule: () => (/* binding */ ReactiveTypedFormsModule),
/* harmony export */   ResetFormType: () => (/* binding */ ResetFormType),
/* harmony export */   RxFormArray: () => (/* binding */ RxFormArray),
/* harmony export */   RxFormBuilder: () => (/* binding */ RxFormBuilder),
/* harmony export */   RxFormControl: () => (/* binding */ RxFormControl),
/* harmony export */   RxFormControlDirective: () => (/* binding */ RxFormControlDirective),
/* harmony export */   RxFormGroup: () => (/* binding */ RxFormGroup),
/* harmony export */   RxReactiveFormsModule: () => (/* binding */ RxReactiveFormsModule),
/* harmony export */   RxwebFormDirective: () => (/* binding */ RxwebFormDirective),
/* harmony export */   RxwebValidators: () => (/* binding */ RxwebValidators),
/* harmony export */   TypedForm: () => (/* binding */ TypedForm),
/* harmony export */   TypedFormBuilder: () => (/* binding */ TypedFormBuilder),
/* harmony export */   UrlValidationType: () => (/* binding */ UrlValidationType),
/* harmony export */   ValidationAlphabetLocale: () => (/* binding */ ValidationAlphabetLocale),
/* harmony export */   allOf: () => (/* binding */ allOf),
/* harmony export */   allOfAsync: () => (/* binding */ allOfAsync),
/* harmony export */   alpha: () => (/* binding */ alpha),
/* harmony export */   alphaAsync: () => (/* binding */ alphaAsync),
/* harmony export */   alphaNumeric: () => (/* binding */ alphaNumeric),
/* harmony export */   alphaNumericAsync: () => (/* binding */ alphaNumericAsync),
/* harmony export */   and: () => (/* binding */ and),
/* harmony export */   ascii: () => (/* binding */ ascii),
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   blacklist: () => (/* binding */ blacklist),
/* harmony export */   choice: () => (/* binding */ choice),
/* harmony export */   choiceAsync: () => (/* binding */ choiceAsync),
/* harmony export */   compare: () => (/* binding */ compare),
/* harmony export */   compose: () => (/* binding */ compose),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   containsAsync: () => (/* binding */ containsAsync),
/* harmony export */   creditCard: () => (/* binding */ creditCard),
/* harmony export */   creditCardAsync: () => (/* binding */ creditCardAsync),
/* harmony export */   cusip: () => (/* binding */ cusip),
/* harmony export */   custom: () => (/* binding */ custom),
/* harmony export */   customAsync: () => (/* binding */ customAsync),
/* harmony export */   dataUri: () => (/* binding */ dataUri),
/* harmony export */   date: () => (/* binding */ date),
/* harmony export */   dateAsync: () => (/* binding */ dateAsync),
/* harmony export */   different: () => (/* binding */ different),
/* harmony export */   digit: () => (/* binding */ digit),
/* harmony export */   disable: () => (/* binding */ disable),
/* harmony export */   elementClass: () => (/* binding */ elementClass),
/* harmony export */   email: () => (/* binding */ email),
/* harmony export */   endsWith: () => (/* binding */ endsWith),
/* harmony export */   endsWithAsync: () => (/* binding */ endsWithAsync),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   escape: () => (/* binding */ escape),
/* harmony export */   even: () => (/* binding */ even),
/* harmony export */   extension: () => (/* binding */ extension),
/* harmony export */   extensionAsync: () => (/* binding */ extensionAsync),
/* harmony export */   factor: () => (/* binding */ factor),
/* harmony export */   factorAsync: () => (/* binding */ factorAsync),
/* harmony export */   file: () => (/* binding */ file),
/* harmony export */   fileAsync: () => (/* binding */ fileAsync),
/* harmony export */   fileSize: () => (/* binding */ fileSize),
/* harmony export */   fileSizeAsync: () => (/* binding */ fileSizeAsync),
/* harmony export */   greaterThan: () => (/* binding */ greaterThan),
/* harmony export */   greaterThanAsync: () => (/* binding */ greaterThanAsync),
/* harmony export */   greaterThanEqualTo: () => (/* binding */ greaterThanEqualTo),
/* harmony export */   greaterThanEqualToAsync: () => (/* binding */ greaterThanEqualToAsync),
/* harmony export */   grid: () => (/* binding */ grid),
/* harmony export */   hexColor: () => (/* binding */ hexColor),
/* harmony export */   image: () => (/* binding */ image),
/* harmony export */   imageAsync: () => (/* binding */ imageAsync),
/* harmony export */   json: () => (/* binding */ json),
/* harmony export */   latLong: () => (/* binding */ latLong),
/* harmony export */   latitude: () => (/* binding */ latitude),
/* harmony export */   leapYear: () => (/* binding */ leapYear),
/* harmony export */   lessThan: () => (/* binding */ lessThan),
/* harmony export */   lessThanAsync: () => (/* binding */ lessThanAsync),
/* harmony export */   lessThanEqualTo: () => (/* binding */ lessThanEqualTo),
/* harmony export */   lessThanEqualToAsync: () => (/* binding */ lessThanEqualToAsync),
/* harmony export */   longitude: () => (/* binding */ longitude),
/* harmony export */   lowerCase: () => (/* binding */ lowerCase),
/* harmony export */   ltrim: () => (/* binding */ ltrim),
/* harmony export */   mac: () => (/* binding */ mac),
/* harmony export */   mask: () => (/* binding */ mask),
/* harmony export */   maxDate: () => (/* binding */ maxDate),
/* harmony export */   maxDateAsync: () => (/* binding */ maxDateAsync),
/* harmony export */   maxLength: () => (/* binding */ maxLength),
/* harmony export */   maxLengthAsync: () => (/* binding */ maxLengthAsync),
/* harmony export */   maxNumber: () => (/* binding */ maxNumber),
/* harmony export */   maxNumberAsync: () => (/* binding */ maxNumberAsync),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   maxTimeAsync: () => (/* binding */ maxTimeAsync),
/* harmony export */   minDate: () => (/* binding */ minDate),
/* harmony export */   minDateAsync: () => (/* binding */ minDateAsync),
/* harmony export */   minLength: () => (/* binding */ minLength),
/* harmony export */   minLengthAsync: () => (/* binding */ minLengthAsync),
/* harmony export */   minNumber: () => (/* binding */ minNumber),
/* harmony export */   minNumberAsync: () => (/* binding */ minNumberAsync),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minTimeAsync: () => (/* binding */ minTimeAsync),
/* harmony export */   model: () => (/* binding */ model),
/* harmony export */   noneOf: () => (/* binding */ noneOf),
/* harmony export */   noneOfAsync: () => (/* binding */ noneOfAsync),
/* harmony export */   not: () => (/* binding */ not),
/* harmony export */   notEmpty: () => (/* binding */ notEmpty),
/* harmony export */   numeric: () => (/* binding */ numeric),
/* harmony export */   numericAsync: () => (/* binding */ numericAsync),
/* harmony export */   odd: () => (/* binding */ odd),
/* harmony export */   oneOf: () => (/* binding */ oneOf),
/* harmony export */   oneOfAsync: () => (/* binding */ oneOfAsync),
/* harmony export */   or: () => (/* binding */ or),
/* harmony export */   password: () => (/* binding */ password),
/* harmony export */   passwordAsync: () => (/* binding */ passwordAsync),
/* harmony export */   pattern: () => (/* binding */ pattern),
/* harmony export */   patternAsync: () => (/* binding */ patternAsync),
/* harmony export */   port: () => (/* binding */ port),
/* harmony export */   prefix: () => (/* binding */ prefix),
/* harmony export */   primeNumber: () => (/* binding */ primeNumber),
/* harmony export */   prop: () => (/* binding */ prop),
/* harmony export */   propArray: () => (/* binding */ propArray),
/* harmony export */   propObject: () => (/* binding */ propObject),
/* harmony export */   range: () => (/* binding */ range),
/* harmony export */   rangeAsync: () => (/* binding */ rangeAsync),
/* harmony export */   required: () => (/* binding */ required),
/* harmony export */   requiredTrue: () => (/* binding */ requiredTrue),
/* harmony export */   rtrim: () => (/* binding */ rtrim),
/* harmony export */   rule: () => (/* binding */ rule),
/* harmony export */   sanitize: () => (/* binding */ sanitize),
/* harmony export */   startsWith: () => (/* binding */ startsWith),
/* harmony export */   startsWithAsync: () => (/* binding */ startsWithAsync),
/* harmony export */   stripLow: () => (/* binding */ stripLow),
/* harmony export */   suffix: () => (/* binding */ suffix),
/* harmony export */   time: () => (/* binding */ time),
/* harmony export */   timeAsync: () => (/* binding */ timeAsync),
/* harmony export */   toBoolean: () => (/* binding */ toBoolean),
/* harmony export */   toDate: () => (/* binding */ toDate),
/* harmony export */   toDouble: () => (/* binding */ toDouble),
/* harmony export */   toFloat: () => (/* binding */ toFloat),
/* harmony export */   toInt: () => (/* binding */ toInt),
/* harmony export */   toString: () => (/* binding */ toString),
/* harmony export */   trim: () => (/* binding */ trim),
/* harmony export */   unique: () => (/* binding */ unique),
/* harmony export */   updateOn: () => (/* binding */ updateOn),
/* harmony export */   upperCase: () => (/* binding */ upperCase),
/* harmony export */   url: () => (/* binding */ url),
/* harmony export */   urlAsync: () => (/* binding */ urlAsync),
/* harmony export */   whitelist: () => (/* binding */ whitelist)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);







class TypedForm {}
const ValidationAlphabetLocale = {
  'danish': 'danish',
  'french': 'french',
  'german': 'german',
  'greek': 'greek',
  'spanish': 'spanish',
  'russian': 'russian'
};
const CONTROLS_ERROR = "controlsError";
const VALUE_CHANGED_SYNC = "valueChangedSync";
const FUNCTION_STRING = "function";
const OBJECT_STRING = "object";
const RX_WEB_VALIDATOR = "rxwebValidator";
const NUMBER = "number";
const BOOLEAN$1 = "boolean";
const CUSTOM = "custom";
const TEMPLATE_VALIDATION_CONFIG = "template-validation-config";
const CONDITIONAL_VALIDATOR = "conditionalValidator";
const VALIDATOR_CONFIG$2 = "validatorConfig";
const THIS = "this";
const RXCODE = "-rxw-";
const MODEL = "model";
const MODEL_INSTANCE = "modelInstance";
const PATCH = "patch";
class Linq {
  static functionCreator(expression) {
    var functionSetter = [];
    var match = expression.match(/^\s*\(?\s*([^)]*)\s*\)?\s*=>(.*)/);
    var splitSelect = match[2].split(",");
    for (var i = 0; i < splitSelect.length; i++) {
      var equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*|===|!==|==|!=|>=|>|<=|<|(.*)/);
      if (equalToOperator !== null) {
        functionSetter = new Function(match[1], "return " + equalToOperator.input);
      } else {
        equalToOperator = splitSelect[i].match(/^\s*\(?\s*([^)]*)\s*\)?\s*=(.*)/);
        if (equalToOperator === null) {
          functionSetter = new Function(match[1], "return " + splitSelect.input);
        } else {
          functionSetter = new Function(match[1], "return " + equalToOperator.input);
        }
      }
    }
    if (splitSelect.length == 0) functionSetter = {
      accessFunction: new Function(match[1], "return " + match[2])
    };
    return functionSetter;
  }
  static execute(jObject, config, parentObject, modelInstance, isDynamicConfig) {
    let expressionFunction = isDynamicConfig ? config.dynamicConfig : config.conditionalExpression;
    let lastParam = isDynamicConfig ? config : modelInstance;
    if (parentObject && typeof expressionFunction == "string") expressionFunction = Linq.functionCreator(expressionFunction);
    if (parentObject && expressionFunction) return modelInstance && modelInstance.constructor !== Object ? expressionFunction.call(modelInstance, parentObject, jObject, lastParam) : expressionFunction(parentObject, jObject, lastParam);
    return true;
  }
  static getConditionPath(texts) {
    let path = "";
    for (var i = 1; i < texts.length; i++) path += texts.length - 1 == i ? texts[i].trim() : `${texts[i].trim()}.`;
    return path;
  }
  static expressionParser(expression, isNonValidationExpression) {
    let splitExpressions = [];
    let columns = [];
    let expressionString = expression.toString();
    let expressionArguments = Linq.extractArguments(expressionString);
    if (expressionArguments.length > 0) {
      let splitTexts = [];
      expressionString.replace(/\s/g, '').replace(new RegExp(/{|}/, "g"), "").split(new RegExp(/return|===|!==|==|!=|>=|>|<=|<|&&/)).forEach(t => {
        let texts = t.replace(/\(|\)/g, "").split("||");
        for (let text of texts) splitTexts.push(text);
      });
      splitTexts.forEach(t => {
        expressionArguments.forEach((x, i) => {
          t = t.trim();
          if (t.startsWith(x + '.')) {
            var splitText = t.split('.');
            if (splitText.length == 2 || splitText.length >= 2 && isNonValidationExpression) {
              if (!isNonValidationExpression) columns.push({
                propName: splitText[1].trim(),
                argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
              });else columns.push({
                propName: this.getConditionPath(splitText),
                argumentIndex: i == 3 ? 0 : i == 2 ? 1 : i == 1 ? -1 : i
              });
            } else {
              var arrayProp = splitText[1].split('[');
              let jObject = {
                propName: splitText[splitText.length - 1].trim(),
                objectPropName: arrayProp[0],
                arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined,
                argumentIndex: i === 3 ? 0 : i === 2 ? 1 : i
              };
              columns.push(jObject);
            }
          }
        });
      });
    }
    return columns;
  }
  static extractArguments(splitText) {
    let expressionArguments = [THIS];
    if (splitText[0].trim() !== "(" && !splitText.trim().startsWith("function")) {
      let text = splitText[0].split("=>")[0];
      expressionArguments.push(text.trim().replace("(", "").replace(")", ""));
    } else {
      let splitTexts = splitText.match(/\(([^)]+)\)/g);
      if (splitTexts && splitTexts[0]) splitTexts[0].split(",").forEach(t => expressionArguments.push(t.trim().replace("(", "").replace(")", "")));
    }
    return expressionArguments;
  }
  static expressionColumns(expression, isNonValidationExpression = false) {
    var columns = [];
    let splitExpressions = [];
    if (typeof expression == "string") {
      expression.split("=>")[1].split(" && ").forEach(t => {
        t.split(" || ").forEach(x => {
          splitExpressions.push(x.trim().split(' ')[0]);
        });
      });
      splitExpressions.forEach(t => {
        var splitText = t.split('.');
        if (splitText.length == 2) columns.push({
          propName: splitText[1].trim()
        });else {
          var arrayProp = splitText[1].split('[');
          let jObject = {
            propName: splitText[splitText.length - 1].trim(),
            objectPropName: arrayProp[0],
            arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
          };
          columns.push(jObject);
        }
      });
    } else {
      columns = Linq.expressionParser(expression, isNonValidationExpression);
    }
    return columns;
  }
  static dynamicConfigParser(expression, propName) {
    let controlNames = [];
    let expressionString = expression.toString();
    let expressionArguments = Linq.extractArguments(expressionString);
    let splitString = expressionString.replace(new RegExp(/\r?\n|\r|;/g), ' ').replace(/["%()\{}=\\?�`'#<>|,;:+-]+/g, " ").split(/ /g);
    if (expressionArguments.length > 3) expressionArguments.splice(expressionArguments.length - 1, 1);
    expressionArguments.forEach(t => {
      splitString.filter(x => x != `${t}.${propName}` && x.startsWith(`${t}.`)).forEach(x => {
        let split = x.split('.');
        if (split.length == 2) controlNames.push({
          propName: x.replace(`${t}.`, '')
        });else {
          var arrayProp = split[1].split('[');
          let jObject = {
            propName: split[split.length - 1].trim(),
            objectPropName: arrayProp[0],
            arrayIndex: arrayProp.length > 1 ? arrayProp[1].replace("]", "") : undefined
          };
          controlNames.push(jObject);
        }
      });
    });
    return controlNames;
  }
}
const AnnotationTypes = {
  numeric: 'numeric',
  required: 'required',
  minLength: 'minLength',
  maxLength: 'maxLength',
  minNumber: 'minNumber',
  maxNumber: 'maxNumber',
  pattern: 'pattern',
  password: 'password',
  compare: 'compare',
  minDate: 'minDate',
  maxDate: 'maxDate',
  alpha: 'alpha',
  alphaNumeric: 'alphaNumeric',
  email: 'email',
  hexColor: 'hexColor',
  lowerCase: 'lowerCase',
  url: 'url',
  upperCase: 'upperCase',
  nested: 'nested',
  propArray: 'propArray',
  propObject: 'propObject',
  contains: 'contains',
  range: 'range',
  custom: 'custom',
  digit: "digit",
  creditCard: "creditCard",
  time: "time",
  json: "json",
  greaterThan: "greaterThan",
  greaterThanEqualTo: "greaterThanEqualTo",
  lessThan: "lessThan",
  lessThanEqualTo: "lessThanEqualTo",
  choice: "choice",
  different: "different",
  even: "even",
  odd: "odd",
  factor: "factor",
  leapYear: "leapYear",
  allOf: "allOf",
  oneOf: "oneOf",
  noneOf: "noneOf",
  mac: "mac",
  ascii: "ascii",
  dataUri: "dataUri",
  port: "port",
  latLong: "latLong",
  extension: "extension",
  fileSize: "fileSize",
  endsWith: "endsWith",
  startsWith: "startsWith",
  primeNumber: "primeNumber",
  latitude: "latitude",
  longitude: "longitude",
  compose: "compose",
  rule: "rule",
  file: "file",
  image: "image",
  unique: "unique",
  notEmpty: "notEmpty",
  ip: "ip",
  cusip: "cusip",
  grid: "grid",
  date: 'date',
  and: 'and',
  or: 'or',
  not: 'not',
  minTime: 'minTime',
  maxTime: 'maxTime',
  requiredTrue: 'requiredTrue',
  mask: 'mask',
  iban: 'iban',
  updateOn: 'updateOn'
};
const INVALID = "INVALID";
const PROPERTY = "property";
const OBJECT_PROPERTY = "objectProperty";
const ARRAY_PROPERTY = "arrayProperty";
const STRING = "string";
const MESSAGE = "message";
const BLANK = "";
const KEYPRESS = "onkeypress";
const ONCHANGE = "onchange";
const ONCLICK = "onclick";
const ONKEYUP = "onkeyup";
const ONBLUR = "onblur";
const ONFOCUS = "onfocus";
const ELEMENT_VALUE = "value";
const BLUR = "blur";
const FOCUS = "focus";
const CHANGE = "change";
const KEY_DOWN = "keydown";
const KEY_PRESS = "keypress";
const PASTE = "paste";
const INPUT = "INPUT";
const SELECT = "SELECT";
const CHECKBOX = "checkbox";
const RADIO = "radio";
const FILE = "file";
const TEXTAREA = "textarea";
const DECORATORS = {
  disabled: 'disabled',
  error: 'error',
  trim: 'trim',
  ltrim: 'ltrim',
  rtrim: 'rtrim',
  blacklist: 'blacklist',
  stripLow: 'stripLow',
  toBoolean: 'toBoolean',
  toDate: 'toDate',
  toDouble: 'toDouble',
  toFloat: 'toFloat',
  toInt: 'toInt',
  string: 'toString',
  whitelist: 'whitelist',
  escape: 'escape',
  prefix: 'prefix',
  suffix: 'suffix',
  sanitize: 'sanitize',
  elementClass: 'elementClass',
  updateOn: 'updateOn'
};
const defaultContainer = new class {
  constructor() {
    this.instances = [];
    this.modelIncrementCount = 0;
  }
  get(instanceFunc) {
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    return instance;
  }
  getInstance(target, parameterIndex, propertyKey, decoratorType) {
    let isPropertyKey = propertyKey != undefined;
    let instanceFunc = !isPropertyKey ? target : target.constructor;
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    if (!instance) instance = this.addInstanceContainer(instanceFunc);
    return instance;
  }
  addPropsConfig(target, configs) {
    let instanceContainer = this.instances.filter(instance => instance.instance == target)[0];
    if (instanceContainer) {
      for (let config of configs) {
        for (let prop of config.propNames) {
          let propertyInfo = instanceContainer.properties.filter(t => t.name == prop && t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY)[0];
          if (propertyInfo) {
            this.addPropConfig(target, [propertyInfo], config);
          } else if (prop === ":all:") this.addPropConfig(target, instanceContainer.properties.filter(t => t.propertyType !== OBJECT_PROPERTY && t.propertyType !== ARRAY_PROPERTY), config);
        }
      }
    } else if (configs === undefined) this.addInstanceContainer(target);
  }
  addPropConfig(target, properties, config) {
    for (var propertyInfo of properties) {
      let excludeProp = false;
      if (config.excludePropNames) excludeProp = config.excludePropNames.filter(t => t == propertyInfo.name)[0] !== undefined;
      if (!excludeProp) {
        if (config.validationConfig) for (let typeName in config.validationConfig) {
          this.init({
            constructor: target
          }, 0, propertyInfo.name, typeName, config.validationConfig[typeName] === true ? undefined : config.validationConfig[typeName], false);
        }
        if (config.error) this.addDecoratorConfig({
          constructor: target
        }, 0, propertyInfo.name, config.error, DECORATORS.error);
        if (config.disable) this.addDecoratorConfig({
          constructor: target
        }, 0, propertyInfo.name, config.disable, DECORATORS.disabled);
        if (config.elementClass) this.addDecoratorConfig({
          constructor: target
        }, 0, propertyInfo.name, config.elementClass, DECORATORS.elementClass);
        if (config.ignore) propertyInfo.ignore = config.ignore;
      }
    }
  }
  addSanitizer(target, parameterIndex, propertyKey, decoratorType, value) {
    let instance = this.getInstance(target, parameterIndex, propertyKey, decoratorType);
    if (instance) {
      if (!instance.sanitizers[propertyKey]) instance.sanitizers[propertyKey] = [];
      instance.sanitizers[propertyKey].push({
        name: decoratorType,
        config: value
      });
    }
  }
  addDecoratorConfig(target, parameterIndex, propertyKey, config, decoratorType) {
    let isPropertyKey = propertyKey != undefined;
    let instanceFunc = !isPropertyKey ? target : target.constructor;
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    if (!instance) instance = this.addInstanceContainer(instanceFunc);
    instance.nonValidationDecorators[decoratorType].conditionalExpressions[propertyKey] = config.conditionalExpression;
    let columns = Linq.expressionColumns(config.conditionalExpression, true);
    columns.forEach(column => {
      if (column.argumentIndex !== -1) {
        let columnName = !column.objectPropName ? `${column.propName}${RXCODE}${column.argumentIndex}` : `${column.objectPropName}.${column.propName}${RXCODE}${column.argumentIndex}`;
        if (!instance.nonValidationDecorators[decoratorType].changeDetection[columnName]) instance.nonValidationDecorators[decoratorType].changeDetection[columnName] = [];
        let disabledColumns = instance.nonValidationDecorators[decoratorType].changeDetection[columnName];
        if (disabledColumns.indexOf(columnName) === -1) disabledColumns.push(propertyKey);
      } else {
        if (!instance.nonValidationDecorators[decoratorType].controlProp[propertyKey]) instance.nonValidationDecorators[decoratorType].controlProp[propertyKey] = {};
        instance.nonValidationDecorators[decoratorType].controlProp[propertyKey][column.propName.replace(";", "")] = true;
      }
    });
  }
  init(target, parameterIndex, propertyKey, annotationType, config, isAsync) {
    var decoratorConfiguration = {
      propertyIndex: parameterIndex,
      propertyName: propertyKey,
      annotationType: annotationType,
      config: config,
      isAsync: isAsync,
      isValidator: annotationType !== "updateOn"
    };
    let isPropertyKey = propertyKey != undefined;
    this.addAnnotation(!isPropertyKey ? target : target.constructor, decoratorConfiguration);
  }
  initPropertyObject(name, propertyType, entity, target, config) {
    var propertyInfo = {
      name: name,
      propertyType: propertyType,
      entity: entity,
      dataPropertyName: config ? config.name : undefined,
      entityProvider: config ? config.entityProvider : undefined,
      defaultValue: config ? config.defaultValue : undefined,
      objectConfig: config && config.autoCreate ? {
        autoCreate: config.autoCreate
      } : undefined
    };
    defaultContainer.addProperty(target.constructor, propertyInfo);
  }
  addInstanceContainer(instanceFunc) {
    let instanceContainer = {
      instance: instanceFunc,
      propertyAnnotations: [],
      properties: [],
      nonValidationDecorators: {
        disabled: {
          conditionalExpressions: {},
          changeDetection: {},
          controlProp: {}
        },
        error: {
          conditionalExpressions: {},
          changeDetection: {},
          controlProp: {}
        },
        elementClass: {
          conditionalExpressions: {},
          changeDetection: {},
          controlProp: {}
        }
      },
      sanitizers: {}
    };
    this.instances.push(instanceContainer);
    return instanceContainer;
  }
  addProperty(instanceFunc, propertyInfo, isFromAnnotation = false) {
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    if (instance) {
      this.addPropertyInfo(instance, propertyInfo, !isFromAnnotation);
    } else {
      instance = this.addInstanceContainer(instanceFunc);
      this.addPropertyInfo(instance, propertyInfo);
    }
  }
  addPropertyInfo(instance, propertyInfo, isAddProperty = false) {
    var property = this.getProperty(instance, propertyInfo);
    if (!property) instance.properties.push(propertyInfo);else if (isAddProperty) this.updateProperty(property, propertyInfo);
    if (property && propertyInfo.messageNexus) property.messageNexus = propertyInfo.messageNexus;
  }
  addAnnotation(instanceFunc, decoratorConfiguration) {
    this.addProperty(instanceFunc, {
      propertyType: PROPERTY,
      name: decoratorConfiguration.propertyName
    }, true);
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    if (instance) instance.propertyAnnotations.push(decoratorConfiguration);else {
      instance = this.addInstanceContainer(instanceFunc);
      instance.propertyAnnotations.push(decoratorConfiguration);
    }
    if (decoratorConfiguration.config && decoratorConfiguration.config.conditionalExpression) {
      let columns = Linq.expressionColumns(decoratorConfiguration.config.conditionalExpression);
      this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
    }
    if (decoratorConfiguration.config && decoratorConfiguration.config.dynamicConfig) {
      let columns = Linq.dynamicConfigParser(decoratorConfiguration.config.dynamicConfig, decoratorConfiguration.propertyName);
      this.addChangeValidation(instance, decoratorConfiguration.propertyName, columns);
    }
    this.setConditionalColumns(instance, decoratorConfiguration);
  }
  setConditionalColumns(instance, decoratorConfiguration) {
    if (instance && decoratorConfiguration.config) {
      if (decoratorConfiguration.annotationType == AnnotationTypes.and || decoratorConfiguration.annotationType == AnnotationTypes.or || decoratorConfiguration.annotationType == AnnotationTypes.not) {
        Object.keys(decoratorConfiguration.config.validation).forEach(t => {
          if (typeof decoratorConfiguration.config.validation[t] !== "boolean") this.setLogicalConditional(instance, t, decoratorConfiguration.config.validation[t].fieldName, decoratorConfiguration.propertyName);
        });
      } else this.setLogicalConditional(instance, decoratorConfiguration.annotationType, decoratorConfiguration.config.fieldName, decoratorConfiguration.propertyName);
    }
  }
  setLogicalConditional(instance, annotationType, fieldName, propertyName) {
    if (instance && (annotationType == AnnotationTypes.compare || annotationType == AnnotationTypes.greaterThan || annotationType == AnnotationTypes.greaterThanEqualTo || annotationType == AnnotationTypes.lessThan || annotationType == AnnotationTypes.lessThanEqualTo || annotationType == AnnotationTypes.different || annotationType == AnnotationTypes.factor || annotationType == AnnotationTypes.minTime || annotationType == AnnotationTypes.maxTime || annotationType == AnnotationTypes.creditCard && fieldName || (annotationType == AnnotationTypes.minDate || annotationType == AnnotationTypes.maxDate) && fieldName)) {
      this.setConditionalValueProp(instance, fieldName, propertyName);
    }
  }
  setConditionalValueProp(instance, propName, refPropName) {
    if (propName) {
      let splitProps = propName.split ? propName.split('.') : '';
      if (splitProps.length < 2) {
        if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
        if (!instance.conditionalValidationProps[propName]) instance.conditionalValidationProps[propName] = [];
        if (instance.conditionalValidationProps[propName].indexOf(refPropName) == -1) instance.conditionalValidationProps[propName].push(refPropName);
      } else this.addChangeValidation(instance, refPropName, [{
        argumentIndex: 1,
        objectPropName: splitProps[0],
        propName: splitProps[1],
        referencePropName: refPropName
      }]);
    }
  }
  addChangeValidation(instance, propertyName, columns) {
    if (instance) {
      if (!instance.conditionalValidationProps) instance.conditionalValidationProps = {};
      columns.forEach(t => {
        if (t.propName && !t.objectPropName) {
          if (!instance.conditionalValidationProps[t.propName]) instance.conditionalValidationProps[t.propName] = [];
          if (instance.conditionalValidationProps[t.propName].indexOf(propertyName) == -1) instance.conditionalValidationProps[t.propName].push(propertyName);
        } else {
          if (t.propName && t.objectPropName) {
            if (!instance.conditionalObjectProps) instance.conditionalObjectProps = [];
            t.referencePropName = propertyName;
            instance.conditionalObjectProps.push(t);
          }
        }
      });
    }
  }
  clearInstance(instanceFunc) {
    let instance = this.instances.filter(instance => instance.instance === instanceFunc)[0];
    if (instance) {
      let indexOf = this.instances.indexOf(instance);
      this.instances.splice(indexOf, 1);
    }
  }
  getProperty(instance, propertyInfo) {
    return instance.properties.filter(t => t.name == propertyInfo.name)[0];
  }
  updateProperty(property, currentProperty) {
    property.dataPropertyName = currentProperty.dataPropertyName;
    property.defaultValue = currentProperty.defaultValue;
  }
}();
function baseDecoratorFunction(annotationType, config, isAsync = false) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.init(target, parameterIndex, propertyKey, annotationType, config, isAsync);
  };
}
const RegExRule = {
  alpha: /^[a-zA-Z]+$/,
  alphaExits: /[a-zA-Z]/,
  alphaWithSpace: /^[a-zA-Z\s]+$/,
  macId: /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/,
  onlyDigit: /^[0-9]+$/,
  isDigitExits: /[0-9]/,
  lowerCase: /[a-z]/,
  upperCase: /[A-Z]/,
  specialCharacter: /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
  advancedEmail: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  basicEmail: /^(([^<>()\[\]\\.,,:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  alphaNumeric: /^[0-9a-zA-Z]+$/,
  alphaNumericWithSpace: /^[0-9a-zA-Z\s]+$/,
  hexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
  strictHexColor: /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i,
  float: /^(?:[-+]?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/,
  decimal: /^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/,
  hexaDecimal: /^[0-9A-F]+$/i,
  date: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
  time: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
  timeWithSeconds: /^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
  url: /^(https?:\/\/(?:www\.|(?!www)|(?!a-zA-Z))[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www)|(?!a-zA-Z))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/,
  localhostUrl: /^(https?:\/\/localhost\:([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])|https?:\/\/localhost\::([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))$/,
  interanetUrl: /^(https?:\/\/[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9])$/,
  ascii: /^[\x00-\x7F]+$/,
  dataUri: /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)$/i,
  lat: /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/,
  long: /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/,
  ipV4: /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
  ipV6: /^((?:[a-fA-F\d]{1,4}:){7}(?:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-fA-F\d]{1,4}|:)|(?:[a-fA-F\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,2}|:)|(?:[a-fA-F\d]{1,4}:){4}(?:(:[a-fA-F\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,3}|:)|(?:[a-fA-F\d]{1,4}:){3}(?:(:[a-fA-F\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,4}|:)|(?:[a-fA-F\d]{1,4}:){2}(?:(:[a-fA-F\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,5}|:)|(?:[a-fA-F\d]{1,4}:){1}(?:(:[a-fA-F\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(:[a-fA-F\d]{1,4}){1,6}|:)|(?::((?::[a-fA-F\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-fA-F\d]{1,4}){1,7}|:)))(%[0-9a-zA-Z]{1,})?$/,
  cidrV4: /^(3[0-2]|[12]?[0-9])$/,
  cidrV6: /^(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  cusip: /^[0-9A-Z]{9}$/,
  grid: /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g
};
const ALPHABET = "alphabet";
const DIGIT = "digit";
const CONTAINS = "contains";
const LOWERCASE = "lowerCase";
const UPPERCASE = "upperCase";
const SPECIAL_CHARACTER = "specialCharacter";
const MIN_LENGTH = "minLength";
const MAX_LENGTH = "maxLength";
class RegexValidator {
  static isExits(value, regex) {
    return value.match(regex) != null;
  }
  static isValid(value, regex) {
    return regex.test(value);
  }
  static isNotBlank(value, isRemoveSpace = false) {
    return !isRemoveSpace ? value === 0 || value !== undefined && value !== null && value !== "" : value === 0 || value !== undefined && value !== null && String(value).trim() !== "";
  }
  static isValidPassword(passwordValidation, value) {
    let isValid = false;
    let jObject = {};
    let keyName = "status";
    let objectProperties = Object.getOwnPropertyNames(passwordValidation);
    for (let propertyName of objectProperties) {
      switch (propertyName) {
        case ALPHABET:
          isValid = RegexValidator.isExits(value, RegExRule.alphaExits);
          keyName = ALPHABET;
          break;
        case DIGIT:
          isValid = RegexValidator.isValid(value, RegExRule.isDigitExits);
          keyName = DIGIT;
          break;
        case CONTAINS:
          isValid = value.indexOf(passwordValidation[CONTAINS]) != -1;
          keyName = CONTAINS;
          break;
        case LOWERCASE:
          isValid = RegexValidator.isValid(value, RegExRule.lowerCase);
          keyName = LOWERCASE;
          break;
        case UPPERCASE:
          isValid = RegexValidator.isValid(value, RegExRule.upperCase);
          keyName = UPPERCASE;
          break;
        case SPECIAL_CHARACTER:
          isValid = RegexValidator.isExits(value, RegExRule.specialCharacter);
          keyName = SPECIAL_CHARACTER;
          break;
        case MIN_LENGTH:
          isValid = value.length >= passwordValidation[propertyName];
          keyName = MIN_LENGTH;
          break;
        case MAX_LENGTH:
          isValid = value.length <= passwordValidation[propertyName];
          keyName = MAX_LENGTH;
          break;
      }
      if (!isValid) break;
    }
    return {
      isValid: isValid,
      keyName: keyName
    };
  }
  static isZero(value) {
    return value == 0;
  }
  static commaRegex() {
    return new RegExp(",", "g");
  }
}
class ReactiveFormConfig {
  static set(jObject) {
    if (jObject) ReactiveFormConfig.json = jObject;
  }
  static get(path) {
    let jObject;
    if (ReactiveFormConfig.json) {
      let splitPath = path.split('.');
      for (let columnName of splitPath) {
        jObject = !jObject ? ReactiveFormConfig.json[columnName] : jObject[columnName];
        if (!jObject) break;
      }
    }
    return jObject;
  }
}
ReactiveFormConfig.i18n = {};
ReactiveFormConfig.number = {};
ReactiveFormConfig.json = {};
ReactiveFormConfig.autoInstancePush = false;
class ObjectMaker {
  static toJson(key, config, values, additional = {}) {
    ObjectMaker.setMessage();
    let message = config ? config.message : null;
    let messageKey = undefined;
    if (!message && config && config.messageKey) messageKey = config.messageKey;
    let messageText = message ? message : ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey || key] ? ReactiveFormConfig.json.validationMessage[messageKey || key] : '';
    values.forEach((t, index) => {
      if (t instanceof Date) t = this.getDateString(t);
      messageText = messageText.replace(`{{${index}}}`, t);
    });
    if (config && config.messageNexus) Object.keys(config.messageNexus).forEach(propName => {
      messageText = messageText.replace(`{{${propName}}}`, config.messageNexus[propName]);
    });
    let jObject = {};
    jObject[key] = {
      message: messageText,
      refValues: values
    };
    if (config && config.isAddMessageKey) jObject["messageKey"] = messageKey;
    if (additional) {
      if (additional.min) jObject[key].min = additional.min;
      if (additional.max) jObject[key].max = additional.max;
    }
    return jObject;
  }
  static null() {
    return null;
  }
  static getPasswordMessage() {
    let messageKey = "password";
    return ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.validationMessage && ReactiveFormConfig.json.validationMessage[messageKey] ? ReactiveFormConfig.json.validationMessage[messageKey] : '';
  }
  static setMessage() {
    if (ReactiveFormConfig.i18n && ReactiveFormConfig.i18n.validationMessage && ObjectMaker.language !== ReactiveFormConfig.i18n.language) {
      if (!ReactiveFormConfig.json) ReactiveFormConfig.json = {};
      ReactiveFormConfig.json.validationMessage = ReactiveFormConfig.i18n.validationMessage();
      ObjectMaker.language = ReactiveFormConfig.i18n.language;
    }
  }
  static getDateString(value) {
    let seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
    let dateFormat = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
    if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
      seperator = ReactiveFormConfig.json.internationalization.seperator;
      dateFormat = ReactiveFormConfig.json.internationalization.dateFormat;
    }
    let result = '';
    let year = value.getFullYear().toString();
    let month = String(value.getMonth() + 1);
    let day = String(value.getDay());
    switch (dateFormat) {
      case 'ymd':
        result = "".concat(year, seperator, month, seperator, day);
        break;
      case 'dmy':
        result = "".concat(day, seperator, month, seperator, year);
        break;
      case 'mdy':
        result = "".concat(month, seperator, day, seperator, year);
        break;
    }
    return result;
  }
}
ObjectMaker.language = "";
function isObjectType(value) {
  return !(typeof value == "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Date);
}
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}
function clone(jsonObject) {
  let jObject = {};
  if (isObjectType(jsonObject)) {
    for (var columnName in jsonObject) {
      if (columnName != "formGroup") {
        if (Array.isArray(jsonObject[columnName])) {
          jObject[columnName] = [];
          for (let row of jsonObject[columnName]) {
            if (isObject(row)) jObject[columnName].push(clone(row));else jObject[columnName].push(row);
          }
        } else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp)) jObject[columnName] = clone(jsonObject[columnName]);else jObject[columnName] = jsonObject[columnName];
      }
    }
    return jObject;
  } else return jsonObject;
}
function merge(firstObject, secondObject) {
  for (var columnName in secondObject) {
    if (Array.isArray(secondObject[columnName])) {
      if (!firstObject[columnName]) firstObject[columnName] = [];
      for (let row of secondObject[columnName]) firstObject[columnName].push(clone(row));
    } else if (typeof firstObject[columnName] == "object" && !(firstObject[columnName] instanceof RegExp)) firstObject[columnName] = merge(firstObject[columnName], secondObject[columnName]);else firstObject[columnName] = secondObject[columnName];
  }
  return firstObject;
}
function isMatched(jsonObject, compareObject) {
  let isModified = false;
  for (var columnName in compareObject) {
    if (Array.isArray(jsonObject[columnName])) {
      for (var i = 0; i < jsonObject[columnName].length; i++) {
        isModified = isMatched(jsonObject[columnName][i], compareObject[columnName][i]);
      }
    } else if (typeof jsonObject[columnName] == "object" && !(jsonObject[columnName] instanceof RegExp)) isModified = isMatched(jsonObject[columnName], compareObject[columnName]);else isModified = !(jsonObject[columnName] == compareObject[columnName]);
    if (isModified) break;
  }
  return isModified;
}
const PROP_ARRAY = "propArray";
class RxFormArray extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray {
  constructor(arrayObject, controls, validatorOrOpts, asyncValidator, arrayConfig) {
    super(controls, validatorOrOpts, asyncValidator);
    this.arrayObject = arrayObject;
    this.arrayConfig = arrayConfig;
    this._isModified = false;
    this._modified = [];
    this.cloneObject(arrayObject);
  }
  get isModified() {
    return this._isModified;
  }
  push(control, options = {
    isAddedInstance: false
  }) {
    let formGroup = this.root;
    if (this.arrayObject) if (control.modelInstance) {
      if (!options.isAddedInstance) this.arrayObject.push(control.modelInstance);else this.arrayObject[this.arrayObject.length] = control.modelInstance;
    }
    super.push(control);
    if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
    this.patch();
    this.checkValidation();
  }
  patch() {
    this.checkModification();
    if (this.parent) this.parent[PATCH]();
  }
  resetForm(options) {
    if (options && options.index >= 0 && options.groupOption) {
      this.controls[options.index].resetForm(options.groupOption);
    } else {
      for (var i = 0; i < this._baseValue.length; i++) {
        if (this.controls[i] !== undefined) this.controls[i].resetForm({
          value: this._baseValue[i]
        });else if (options && options.pushFunction) {
          let formGroup = options.pushFunction(this._baseValue[i]);
          this.push(formGroup);
        }
      }
    }
  }
  commit() {
    this._baseValue = [];
    for (let formGroup of this.controls) {
      formGroup.commit();
      this._baseValue.push(clone(formGroup.value));
    }
    this.patch();
  }
  removeAt(index, options = {
    isRemovedInstance: false
  }) {
    let formGroup = this.root;
    if (!options.isRemovedInstance) this.arrayObject.splice(index, 1);else {
      for (var i = index; i < this.arrayObject.length - 1; i++) this.arrayObject[i] = this.arrayObject[i + 1];
      this.arrayObject.pop();
    }
    super.removeAt(index, options);
    if (formGroup[VALUE_CHANGED_SYNC]) formGroup.valueChangedSync();
    this.patch();
    this.checkValidation();
  }
  checkValidation() {
    setTimeout(() => {
      if (this.arrayConfig != undefined && this.arrayConfig.allowMaxIndex && this.length > this.arrayConfig.allowMaxIndex) this.setErrors(ObjectMaker.toJson(PROP_ARRAY, this.arrayConfig, [this.length, this.arrayConfig.allowMaxIndex]));else if (this.errors && this.errors[PROP_ARRAY]) delete this.errors[PROP_ARRAY];
    });
  }
  checkModification() {
    this._isModified = !(this._baseValue.length == this.controls.length);
    if (!this._isModified) for (var i = 0; i < this.controls.length; i++) {
      this._isModified = isMatched(this._baseValue[i], this.controls[i].value);
      if (this._isModified) break;
    }
  }
  cloneObject(value) {
    this._baseValue = [];
    for (let row of value) {
      this._baseValue.push(clone(row));
    }
  }
}
var NumericValueType;
(function (NumericValueType) {
  NumericValueType[NumericValueType["PositiveNumber"] = 1] = "PositiveNumber";
  NumericValueType[NumericValueType["NegativeNumber"] = 2] = "NegativeNumber";
  NumericValueType[NumericValueType["Both"] = 3] = "Both";
})(NumericValueType || (NumericValueType = {}));
var IpVersion;
(function (IpVersion) {
  IpVersion[IpVersion["V4"] = 1] = "V4";
  IpVersion[IpVersion["V6"] = 2] = "V6";
  IpVersion[IpVersion["AnyOne"] = 3] = "AnyOne";
})(IpVersion || (IpVersion = {}));
var ErrorMessageBindingStrategy;
(function (ErrorMessageBindingStrategy) {
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["None"] = 0] = "None";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnSubmit"] = 1] = "OnSubmit";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirty"] = 2] = "OnDirty";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouched"] = 3] = "OnTouched";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrTouched"] = 4] = "OnDirtyOrTouched";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnDirtyOrSubmit"] = 5] = "OnDirtyOrSubmit";
  ErrorMessageBindingStrategy[ErrorMessageBindingStrategy["OnTouchedOrSubmit"] = 6] = "OnTouchedOrSubmit";
})(ErrorMessageBindingStrategy || (ErrorMessageBindingStrategy = {}));
var ResetFormType;
(function (ResetFormType) {
  ResetFormType[ResetFormType["ControlsOnly"] = 1] = "ControlsOnly";
  ResetFormType[ResetFormType["FormGroupsOnly"] = 2] = "FormGroupsOnly";
  ResetFormType[ResetFormType["FormArraysOnly"] = 3] = "FormArraysOnly";
  ResetFormType[ResetFormType["ControlsAndFormGroupsOnly"] = 4] = "ControlsAndFormGroupsOnly";
  ResetFormType[ResetFormType["DefinedPropsOnly"] = 5] = "DefinedPropsOnly";
  ResetFormType[ResetFormType["All"] = 6] = "All";
})(ResetFormType || (ResetFormType = {}));
const MODEL_INSTANCE_VALUE = "modelInstanceValue";
class ApplicationUtil {
  static getParentObjectValue(control) {
    if (control.parent) {
      let parent = this.parentObjectValue(control.parent);
      return parent.value;
    }
    return {};
  }
  static getParentModelInstanceValue(control) {
    if (control.parent) {
      let parent = this.parentObjectValue(control.parent);
      return parent[MODEL_INSTANCE_VALUE];
    }
    return {};
  }
  static getRootFormGroup(control) {
    if (control.parent) {
      return this.getRootFormGroup(control.parent);
    }
    return control;
  }
  static getParentControl(control) {
    if (control.parent) {
      let parent = this.parentObjectValue(control.parent);
      return parent;
    }
    return control;
  }
  static getFormControlName(control) {
    let controlName = '';
    if (control.parent) {
      for (var formControlName in control.parent.controls) {
        if (control.parent.controls[formControlName] == control) {
          controlName = formControlName;
          break;
        }
      }
    }
    return controlName;
  }
  static getParentFormArray(control) {
    if (control.parent && !(control.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray || control.parent instanceof RxFormArray)) {
      let parent = this.getParentFormArray(control.parent);
      return parent;
    }
    return control.parent;
  }
  static toLower(value) {
    if (value) return String(value).toLowerCase().trim();
    return value;
  }
  static getControl(fieldName, formGroup) {
    let splitText = fieldName.split('.');
    if (splitText.length > 1) {
      var formControl = formGroup;
      splitText.forEach((name, index) => {
        formControl = formControl.controls[name];
      });
      return formControl;
    } else return formGroup.controls[fieldName];
  }
  static getFormControl(fieldName, control) {
    let splitText = fieldName.split('.');
    if (splitText.length > 1 && control.parent) {
      var formControl = this.getParentControl(control);
      splitText.forEach((name, index) => {
        formControl = formControl.controls[name];
      });
      return formControl;
    }
    return control.parent ? control.parent.get([fieldName]) : undefined;
  }
  static parentObjectValue(control) {
    if (!control.parent) return control;else control = this.parentObjectValue(control.parent);
    return control;
  }
  static isNumeric(value) {
    return value - parseFloat(value) + 1 >= 0;
  }
  static notEqualTo(primaryValue, secondaryValue) {
    let firstValue = primaryValue === undefined || primaryValue === null ? "" : primaryValue;
    let secondValue = secondaryValue === undefined || secondaryValue === null ? "" : secondaryValue;
    if (firstValue instanceof Date && secondValue instanceof Date) return +firstValue != +secondValue;
    return firstValue != secondValue;
  }
  static numericValidation(allowDecimal, acceptValue) {
    let decimalSymbol;
    if (ReactiveFormConfig && ReactiveFormConfig.number) {
      decimalSymbol = ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
    } else {
      decimalSymbol = ".";
    }
    acceptValue = acceptValue == undefined ? NumericValueType.PositiveNumber : acceptValue;
    let regex = /^[0-9]+$/;
    switch (acceptValue) {
      case NumericValueType.PositiveNumber:
        regex = !allowDecimal ? /^[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[0-9\.]+$/ : /^[0-9\,]+$/;
        break;
      case NumericValueType.NegativeNumber:
        regex = !allowDecimal ? /^[-][0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-][0-9\.]+$/ : /^[-][0-9\,]+$/;
        break;
      case NumericValueType.Both:
        regex = !allowDecimal ? /^[-|+]?[0-9]+$/ : decimalSymbol == "." || decimalSymbol == undefined ? /^[-|+]?[0-9\.]+$/ : /^[-|+]?[0-9\,]+$/;
        break;
    }
    return regex;
  }
  static configureControl(control, config, type) {
    if (!control.validatorConfig) {
      let jObject = {};
      jObject[type] = config;
      Object.assign(control, {
        validatorConfig: jObject
      });
    } else control.validatorConfig[type] = config;
  }
  static lowerCaseWithTrim(value) {
    return typeof value === "string" ? value.toLowerCase().trim() : String(value).toLowerCase().trim();
  }
  /** Check if a value is an object */
  static isObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
  }
  /** Check if a value is an object */
  static isArray(value) {
    return Array.isArray(value);
  }
  static cloneValue(value) {
    return ApplicationUtil.isObject(value) ? ApplicationUtil.isArray(value) ? [...value] : {
      ...value
    } : value;
  }
}
function instanceProvider(instanceFunc, entityObject) {
  let instance = defaultContainer.get(instanceFunc);
  let prototype = entityObject ? entityObject.__proto__ : getInstance(instanceFunc, []).__proto__;
  if (prototype.__proto__) {
    let isLoop = false;
    do {
      isLoop = prototype.__proto__.constructor != Object;
      if (isLoop) {
        let extendClassInstance = defaultContainer.get(prototype.__proto__.constructor);
        instance = merge(clone(instance), clone(extendClassInstance));
        prototype = prototype.__proto__;
      }
    } while (isLoop);
  }
  return instance;
}
function getInstance(model, objectArguments) {
  let classInstance = Object.create(model.prototype);
  try {
    model.apply(classInstance, objectArguments);
  } catch (ex) {
    ///resolution of issue https://github.com/rxweb/rxweb/issues/188
    classInstance = Reflect.construct(model, objectArguments);
  }
  return classInstance;
}
class DisableProvider {
  constructor(decoratorType, entityObject) {
    this.decoratorType = decoratorType;
    this.entityObject = entityObject;
  }
  getFormGroupName(currentFormGroup) {
    let keyName = '';
    if (currentFormGroup.parent) for (var controlName of Object.keys(currentFormGroup.parent.controls)) if (currentFormGroup.parent.controls[controlName] == currentFormGroup) {
      keyName = controlName;
      break;
    }
    return keyName;
  }
  zeroArgumentProcess(control, columnName) {
    let disabledColumns = [];
    this.getDisabledColumns(control.parent, `${columnName}${RXCODE}0`, false).forEach(t => disabledColumns.push(t));
    let path = this.topControlPath(control, columnName);
    let splitPath = path.split(".");
    if (splitPath.length > 1) {
      let rootFormGroup = ApplicationUtil.getRootFormGroup(control);
      this.getDisabledColumns(rootFormGroup, `${path}${RXCODE}0`, true).forEach(t => disabledColumns.push(t));
      let controlPath = '';
      for (var i = 0; i < splitPath.length - 2; i++) {
        let controlName = splitPath[i];
        controlPath = `${path.replace(`${controlName}.`, '')}${RXCODE}-0`;
        if (rootFormGroup.controls[controlName]) {
          this.getDisabledColumns(rootFormGroup.controls[controlName], controlPath, true, controlName).forEach(t => disabledColumns.push(t));
          rootFormGroup = rootFormGroup.controls[controlName];
        }
      }
    }
    return disabledColumns;
  }
  getDisabledColumns(formGroup, columnName, isRoot, pathName = "") {
    if (formGroup[MODEL_INSTANCE]) {
      let instanceContainer = instanceProvider(formGroup[MODEL_INSTANCE].constructor, this.entityObject);
      return this.getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName);
    }
    return [];
  }
  getChangeDetectionColumns(instanceContainer, columnName, isRoot, pathName = "") {
    let conditionalDisableControls = [];
    let columns = instanceContainer.nonValidationDecorators[this.decoratorType].changeDetection[columnName];
    if (columns) {
      columns.forEach(t => {
        conditionalDisableControls.push({
          controlPath: pathName ? `${pathName}.${t}` : t,
          conditionalExpression: instanceContainer.nonValidationDecorators[this.decoratorType].conditionalExpressions[t],
          isRoot: isRoot
        });
      });
    }
    return conditionalDisableControls;
  }
  topControlPath(control, columnName) {
    if (control.parent) {
      let name = this.getFormGroupName(control.parent);
      if (name) {
        columnName = `${name}.${columnName}`;
        return this.topControlPath(control.parent, columnName);
      }
    }
    return columnName;
  }
  childControlDisabledExpression(formGroup, columnName, path = "") {
    let disabledColumns = [];
    if (formGroup[MODEL_INSTANCE]) {
      let instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
      if (instanceContainer) {
        this.getChangeDetectionColumns(instanceContainer, columnName, true, path).forEach(t => disabledColumns.push(t));
        var props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY);
        props.forEach(t => {
          if (formGroup.controls[t.name]) {
            let columns = this.getDisabledColumns(formGroup.controls[t.name], columnName, true, path ? `${path}.${t.name}` : `${t.name}`);
            columns.forEach(x => disabledColumns.push(x));
            this.childControlDisabledExpression(formGroup.controls[t.name], columnName, path ? `${path}.${t.name}` : `${t.name}`).forEach(y => disabledColumns.push(y));
          }
        });
      }
    }
    return disabledColumns;
  }
  oneArgumentProcess(control, columnName) {
    let path = this.topControlPath(control, columnName);
    let rootFormGroup = ApplicationUtil.getRootFormGroup(control);
    let childColumns = this.childControlDisabledExpression(rootFormGroup, path);
    return childColumns;
  }
}
const ISO_DATE_REGEX = /^(?:[\+-]?\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[\.,]\d+(?!:))?)?(?:\2[0-5]\d(?:[\.,]\d+)?)?(?:[zZ]|(?:[\+-])(?:[01]\d|2[0-3]):?(?:[0-5]\d)?)?)?)?$/;
class DateProvider {
  isDate(value) {
    return value instanceof Date && !isNaN(value.valueOf());
  }
  getRegex(dateFormat) {
    var regExp;
    switch (dateFormat) {
      case 'ymd':
        regExp = "^(?:[0-9]{4})-(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])$";
        break;
      case 'dmy':
        regExp = "^(3[01]|[12][0-9]|0?[1-9])-(1[0-2]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
        break;
      case 'mdy':
        regExp = "^(1[0-2]|0?[1-9])-(3[01]|[12][0-9]|0?[1-9])-(?:[0-9]{2})?[0-9]{2}$";
        break;
    }
    return new RegExp(regExp);
  }
  regex(config) {
    var regExp;
    if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) regExp = this.getRegex(config.dateFormat || ReactiveFormConfig.json.internationalization.dateFormat);else regExp = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? this.getRegex(config.dateFormat || ReactiveFormConfig.json.baseConfig.dateFormat) : this.getRegex(config.dateFormat || "mdy");
    return regExp;
  }
  getDate(value, configDateFormat = undefined, isBaseFormat = false) {
    let year, month, day;
    if (!this.isDate(value)) {
      let seperator;
      let dateFormat;
      if (ISO_DATE_REGEX.test(value)) {
        return new Date(value);
      } else {
        seperator = ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator ? ReactiveFormConfig.json.baseConfig.seperator : "/";
        dateFormat = configDateFormat || ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.dateFormat ? ReactiveFormConfig.json.baseConfig.dateFormat : "mdy";
      }
      if (!isBaseFormat && ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.dateFormat && ReactiveFormConfig.json.internationalization.seperator) {
        seperator = ReactiveFormConfig.json.internationalization.seperator;
        dateFormat = configDateFormat || ReactiveFormConfig.json.internationalization.dateFormat;
      }
      switch (dateFormat) {
        case 'ymd':
          [year, month, day] = value.split(seperator).map(val => +val);
          break;
        case 'dmy':
          [day, month, year] = value.split(seperator).map(val => +val);
          break;
        case 'mdy':
          [month, day, year] = value.split(seperator).map(val => +val);
          break;
      }
      return new Date(year, month - 1, day);
    } else return value;
  }
  isValid(value, config) {
    if (config && config.isValid) return config.isValid(value);
    if (typeof value == "string") {
      // Fixed issue : https://github.com/rxweb/rxweb/issues/280 & feature request : https://github.com/rxweb/rxweb/issues/295
      if (config && config.allowISODate && ISO_DATE_REGEX.test(value)) return true;
      let seperator = '/';
      if (ReactiveFormConfig && ReactiveFormConfig.json && ReactiveFormConfig.json.baseConfig && ReactiveFormConfig.json.baseConfig.seperator) seperator = ReactiveFormConfig.json.baseConfig.seperator;
      if (ReactiveFormConfig.json && ReactiveFormConfig.json.internationalization && ReactiveFormConfig.json.internationalization.seperator) seperator = ReactiveFormConfig.json.internationalization.seperator;
      if (value.split(seperator).length !== 3) return false;
      value = value.replace(seperator, '-').replace(seperator, '-');
      return this.regex(config).test(value);
    } else return this.isDate(value);
  }
  getConfigDateValue(config) {
    let date = config.value;
    if (config.value && typeof config.value == "string") {
      date = this.getDate(config.value, config.dateFormat, true);
    }
    return date;
  }
  getCompareDate(config, control) {
    let date = this.getConfigDateValue(config);
    if (config.fieldName) {
      let checkControl = ApplicationUtil.getFormControl(config.fieldName, control);
      if (checkControl && checkControl.value) {
        date = this.getDate(checkControl.value, config.dateFormat);
      }
    }
    return date;
  }
}
function isNotBlank(value) {
  return value !== undefined && value !== null && value !== "";
}
function trim$1(value) {
  if (isNotBlank(value)) if (typeof value === "string") return value.trim();
  return value;
}
;
function ltrim$1(value) {
  if (isNotBlank(value)) if (typeof value === "string") return value.replace(/^\s+/g, '');
  return value;
}
function rtrim$1(value) {
  if (isNotBlank(value)) if (typeof value === "string") return value.replace(/\s+$/g, '');
  return value;
}
function blacklist$1(value, chars) {
  if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp('[$' + chars + ']+', 'g'), '');
  return value;
}
;
function stripLow$1(value, keepNewLines) {
  let chars = keepNewLines === true ? '\x00-\x09\x0B\x0C\x0E-\x1F\x7F' : '\x00-\x1F\x7F';
  return blacklist$1(value, chars);
}
function toBoolean$1(value, strict) {
  if (isNotBlank(value)) {
    if (strict) {
      return value === '1' || value === 'true';
    }
    return value !== '0' && value !== 'false' && value !== '';
  }
  return value;
}
function toFloat$1(value) {
  if (isNotBlank(value)) {
    var decimalSymbol = '.';
    if (ReactiveFormConfig && ReactiveFormConfig.number) {
      decimalSymbol = ReactiveFormConfig.json && ReactiveFormConfig.json.allowDecimalSymbol ? ReactiveFormConfig.json.allowDecimalSymbol : ReactiveFormConfig.number.decimalSymbol;
    }
    if (decimalSymbol == ',' && typeof value == "string") value = value.replace(',', '.');
    if (ApplicationUtil.isNumeric(value)) return parseFloat(value);
  }
  return null;
}
function toDouble$1(value) {
  return toFloat$1(value);
}
function toInt$1(value, radix) {
  if (isNotBlank(value)) if (ApplicationUtil.isNumeric(value)) return parseInt(value, radix || 10);
  return null;
}
function toString$1(value, radix) {
  if (isNotBlank(value)) return String(value);
  return value;
}
function whitelist$1(value, chars) {
  if (isNotBlank(value)) if (typeof value === "string") return value.replace(new RegExp(`[^${chars}]+`, 'g'), '');
  return value;
}
function toDate$1(value, config) {
  var dateProvider = new DateProvider();
  if (isNotBlank(value)) if (typeof value === "string" && dateProvider.isValid(value, config)) {
    value = dateProvider.getDate(value);
    return value;
  }
  return null;
}
function escape$1(value) {
  if (isNotBlank(value)) return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
  return value;
}
function prefix$1(value, text) {
  if (isNotBlank(value)) return `${text}${value}`;
  return value;
}
function suffix$1(value, text) {
  if (isNotBlank(value)) return `${value}${text}`;
  return value;
}
function sanitize$1(value, config) {
  return config.custom(value);
}
const SANITIZERS = {
  trim: trim$1,
  ltrim: ltrim$1,
  rtrim: rtrim$1,
  blacklist: blacklist$1,
  stripLow: stripLow$1,
  toBoolean: toBoolean$1,
  toDouble: toDouble$1,
  toFloat: toFloat$1,
  toInt: toInt$1,
  'toString': toString$1,
  whitelist: whitelist$1,
  toDate: toDate$1,
  escape: escape$1,
  prefix: prefix$1,
  suffix: suffix$1,
  sanitize: sanitize$1
};
const DIRTY = "dirty";
const TOUCHED = "touched";
const UNTOUCHED = "untouched";
const PRISTINE = "pristine";
const PENDING = "pending";
class RxFormControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl {
  constructor(formState, validator, asyncValidator, entityObject, baseObject, controlName, _sanitizers) {
    super(formState, validator, asyncValidator);
    this.entityObject = entityObject;
    this.baseObject = baseObject;
    this._sanitizers = _sanitizers;
    this._errorMessages = [];
    this._childColumns = [];
    this._refDisableControls = [];
    this._refMessageControls = [];
    this._refClassNameControls = [];
    this._isPassedExpression = false;
    this._dirty = false;
    this.backEndErrors = {};
    this.defineErrorsProperty();
    this._baseValue = formState === undefined ? null : this.getFormState(formState);
    this._isModified = false;
    this.keyName = controlName;
    this._validators = validator.validators;
    this._asyncValidators = validator.asyncValidators;
    this._errorMessageBindingStrategy = ReactiveFormConfig.get("reactiveForm.errorMessageBindingStrategy");
    if (this._sanitizers) {
      var floatSanitizer = this._sanitizers.filter(t => t.name == "toFloat")[0];
      if (floatSanitizer && this._baseValue && ReactiveFormConfig.number && ReactiveFormConfig.number.decimalSymbol == ",") {
        let baseValue = String(this._baseValue);
        if (baseValue.indexOf('.') != -1) {
          this._baseValue = baseValue.replace(".", ReactiveFormConfig.number.decimalSymbol);
          super.setValue(this._baseValue);
        }
      }
    }
  }
  get errorMessages() {
    if (!this._messageExpression) {
      if (this._errorMessages.length == 0 && this.errors) this.setControlErrorMessages();
    } else if (this._messageExpression && !this._isPassedExpression) return [];
    if (!this.errors && this._errorMessages.length > 0) this.setControlErrorMessages();
    if (this._language != this.getLanguage()) this.setControlErrorMessages();
    return this._errorMessages;
  }
  get errorMessage() {
    if (!this._messageExpression) {
      if (this._errorMessage == undefined && this.errors) this.setControlErrorMessages();
    } else if (this._messageExpression && !this._isPassedExpression) return undefined;
    if (!this.errors && this._errorMessage) this.setControlErrorMessages();
    if (this._language != this.getLanguage()) this.setControlErrorMessages();
    return this._errorMessage;
  }
  defineErrorsProperty() {
    Object.defineProperty(this, "errors", {
      configurable: true,
      get() {
        if (this._language && this._language != this.getLanguage() && this.validator) {
          this["errors"] = this.validator(this);
        }
        return this._errors;
      },
      set(value) {
        this._errors = value;
      }
    });
  }
  getFormState(value) {
    let baseValue = value;
    if (Array.isArray(value)) {
      baseValue = [];
      value.forEach(t => baseValue.push(t));
    }
    return baseValue;
  }
  get isModified() {
    return this._isModified;
  }
  getValidators() {
    return this.getValidatorSource(this._validators);
  }
  getAsyncValidators() {
    return this.getValidatorSource(this._asyncValidators);
  }
  getValidatorSource(validators) {
    if (validators) return Array.isArray(validators) ? [...validators] : [validators];
    return [];
  }
  setValidators(newValidator) {
    this._validators = newValidator;
    super.setValidators(newValidator);
  }
  setAsyncValidators(newValidator) {
    this._asyncValidators = newValidator;
    super.setAsyncValidators(newValidator);
  }
  setValue(value, options) {
    this.parent.changing = true;
    let parsedValue = this.getSanitizedValue(value);
    if (options && options.dirty) this.baseObject[this.keyName] = value;
    this.entityObject[this.keyName] = parsedValue;
    super.setValue(value, options);
    this.bindError();
    this.bindClassName();
    this.executeExpressions();
    this.callPatch();
    if (options && !options.updateChanged && this.root[VALUE_CHANGED_SYNC]) {
      this.root[VALUE_CHANGED_SYNC]();
    }
    this.parent.changing = false;
  }
  getControlValue() {
    return this.getSanitizedValue(this.value);
  }
  bindError() {
    if (this._messageExpression) this._isPassedExpression = this.executeExpression(this._messageExpression, this);
    this.setControlErrorMessages();
    var t = this;
    t["errors"] = this.errors;
  }
  bindClassName() {
    if (this.updateOnElementClass && typeof this.updateOnElementClass === "function") {
      let className = this.executeExpression(this._classNameExpression, this);
      let updateElement = this.updateOnElementClass;
      updateElement(className);
    }
  }
  setBackEndErrors(error) {
    Object.keys(error).forEach(key => this.backEndErrors[key] = error[key]);
    this.setControlErrorMessages();
  }
  clearBackEndErrors(errors) {
    if (!errors) this.backEndErrors = {};else Object.keys(errors).forEach(t => delete this.backEndErrors[t]);
    this.setControlErrorMessages();
  }
  markAsTouched(opts) {
    let currentState = this.touched;
    super.markAsTouched(opts);
    if (currentState != this.touched) this.runControlPropChangeExpression([TOUCHED, UNTOUCHED]);
  }
  markAsUntouched(opts) {
    let currentState = this.untouched;
    super.markAsUntouched(opts);
    if (currentState != this.untouched) this.runControlPropChangeExpression([UNTOUCHED, TOUCHED]);
  }
  markAsDirty(opts) {
    let currentState = this._dirty;
    super.markAsDirty(opts);
    this._dirty = true;
    if (currentState != this._dirty) this.runControlPropChangeExpression([DIRTY]);
  }
  markAsPristine(opts) {
    let currentState = this.pristine;
    super.markAsPristine(opts);
    if (currentState != this.pristine) this.runControlPropChangeExpression([PRISTINE]);
  }
  markAsPending(opts) {
    let currentState = this.pending;
    super.markAsDirty(opts);
    if (currentState != this.pending) this.runControlPropChangeExpression([PENDING]);
  }
  runControlPropChangeExpression(propNames) {
    propNames.forEach(name => {
      if (this._controlProp && this._messageExpression && this._controlProp[name] || !this._messageExpression && this.checkErrorMessageStrategy()) this.bindError();
      if (this._classNameControlProp && this._classNameControlProp[name]) this.bindClassName();
    });
  }
  refresh() {
    this.getMessageExpression(this.parent, this.keyName);
    this.bindConditionalControls(DECORATORS.disabled, "_refDisableControls");
    this.bindConditionalControls(DECORATORS.error, "_refMessageControls");
    this.bindConditionalControls(DECORATORS.elementClass, "_refClassNameControls");
    this.executeExpressions();
    this.bindError();
  }
  reset(value, options = {}) {
    if (value !== undefined) this.setValue(value, options);else this.setValue(this.getFormState(this._baseValue), options);
    this._dirty = false;
  }
  commit() {
    this._baseValue = this.value;
    this.callPatch();
  }
  callPatch() {
    this._isModified = this.getValue(this._baseValue) != this.getValue(this.value);
    if (this.parent && this.parent[PATCH]) this.parent[PATCH](this.keyName);
  }
  checkErrorMessageStrategy() {
    let isBind = true;
    switch (this._errorMessageBindingStrategy) {
      case ErrorMessageBindingStrategy.OnSubmit:
        isBind = this.parent.submitted;
        break;
      case ErrorMessageBindingStrategy.OnDirty:
        isBind = this._dirty;
        break;
      case ErrorMessageBindingStrategy.OnTouched:
        isBind = this.touched;
        break;
      case ErrorMessageBindingStrategy.OnDirtyOrTouched:
        isBind = this._dirty || this.touched;
        break;
      case ErrorMessageBindingStrategy.OnDirtyOrSubmit:
        isBind = this._dirty || this.parent.submitted;
        break;
      case ErrorMessageBindingStrategy.OnTouchedOrSubmit:
        isBind = this.touched || this.parent.submitted;
        break;
      default:
        isBind = true;
    }
    return isBind;
  }
  executeExpressions() {
    this.processExpression("_refDisableControls", "disabled");
    this.processExpression("_refMessageControls", "bindError");
    this.processExpression("_refClassNameControls", "bindClassName");
  }
  getMessageExpression(formGroup, keyName) {
    if (formGroup[MODEL_INSTANCE]) {
      let instanceContainer = defaultContainer.get(formGroup[MODEL_INSTANCE].constructor);
      if (instanceContainer) {
        this._messageExpression = instanceContainer.nonValidationDecorators.error.conditionalExpressions[keyName];
        this._controlProp = instanceContainer.nonValidationDecorators.error.controlProp[this.keyName];
        this._classNameExpression = instanceContainer.nonValidationDecorators.elementClass.conditionalExpressions[keyName];
        this._classNameControlProp = instanceContainer.nonValidationDecorators.elementClass.controlProp[keyName];
        if (this._classNameExpression) this.updateOnElementClass = true;
      }
    }
  }
  getSanitizedValue(value) {
    if (this._sanitizers) {
      for (let sanitizer of this._sanitizers) {
        value = SANITIZERS[sanitizer.name](value, sanitizer.config);
      }
    }
    return value;
  }
  bindConditionalControls(decoratorType, refName) {
    this._disableProvider = new DisableProvider(decoratorType, this.entityObject);
    this[refName] = this._disableProvider.zeroArgumentProcess(this, this.keyName);
    this._disableProvider.oneArgumentProcess(this, `${this.keyName}${RXCODE}1`).forEach(t => this[refName].push(t));
  }
  setControlErrorMessages() {
    if (!this._messageExpression && this.checkErrorMessageStrategy() || this._isPassedExpression) {
      this._errorMessages = [];
      if (this.errors) {
        Object.keys(this.errors).forEach(t => {
          if (this.parent) {
            this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(this.errors, t);
            if (!this._errorMessage) {
              let errorObject = ObjectMaker.toJson(t, undefined, [this.errors[t][t]]);
              this.parent[CONTROLS_ERROR][this.keyName] = this._errorMessage = this.getErrorMessage(errorObject, t);
            }
          } else this._errorMessage = this.getErrorMessage(this.errors, t);
          this._errorMessages.push(this._errorMessage);
        });
      } else {
        this._errorMessage = undefined;
        if (this.parent) {
          this.parent[CONTROLS_ERROR][this.keyName] = undefined;
          delete this.parent[CONTROLS_ERROR][this.keyName];
        }
      }
      let backEndErrors = Object.keys(this.backEndErrors);
      if (backEndErrors.length > 0) backEndErrors.forEach(t => {
        this._errorMessages.push(this._errorMessage = this.backEndErrors[t]);
      });
    } else {
      this._errorMessages = [];
      this._errorMessage = undefined;
    }
    this._language = this.getLanguage();
  }
  getLanguage() {
    return ReactiveFormConfig.i18n && ReactiveFormConfig.i18n.language ? ReactiveFormConfig.i18n.language : undefined;
  }
  getErrorMessage(errorObject, keyName) {
    if (errorObject[keyName][MESSAGE]) return errorObject[keyName][MESSAGE];
    return;
  }
  processExpression(propName, operationType) {
    if (this[propName]) for (var controlInfo of this[propName]) {
      let control = controlInfo.isRoot ? ApplicationUtil.getControl(controlInfo.controlPath, ApplicationUtil.getRootFormGroup(this)) : ApplicationUtil.getFormControl(controlInfo.controlPath, this);
      if (control) {
        if (operationType == "disabled") {
          let result = this.executeExpression(controlInfo.conditionalExpression, control);
          if (result) control.disable();else control.enable();
        } else if (operationType == "bindError") control.bindError();else if (operationType == "bindClassName") control.bindClassName();
      }
    }
  }
  executeExpression(expression, control) {
    return expression.call(control.parent[MODEL_INSTANCE], control, ApplicationUtil.getParentModelInstanceValue(this), control.parent[MODEL_INSTANCE]);
  }
  getValue(value) {
    return value !== undefined && value !== null && value !== "" ? value : "";
  }
}
const OBJECT = "object";
const BOOLEAN = "boolean";
class FormDataProvider {
  convertToFormData(jObject, options) {
    return this.convertFormData(jObject, undefined, undefined, options);
  }
  convertFormData(jObject, currentFormData, parentKey, options) {
    let formData = currentFormData || new FormData();
    let propName = '';
    for (var columnName in jObject) {
      propName = !parentKey ? columnName : `${parentKey}[${columnName}]`;
      if (Array.isArray(jObject[columnName])) {
        jObject[columnName].forEach((row, index) => {
          propName = `${columnName}[${index}]`;
          if (typeof row === OBJECT) this.convertFormData(row, formData, propName, options);else this.nonObjectValueBind(row, formData, propName, options);
        });
      } else if (jObject[columnName] !== null && !(jObject[columnName] instanceof Date) && typeof jObject[columnName] === OBJECT && !(jObject[columnName] instanceof File || jObject[columnName] instanceof FileList)) {
        this.convertFormData(jObject[columnName], formData, propName, options);
      } else {
        this.nonObjectValueBind(jObject[columnName], formData, propName, options);
      }
    }
    return formData;
  }
  nonObjectValueBind(value, formData, propName, options) {
    if (typeof value === BOOLEAN) {
      let formValue = value ? true : false;
      formData.append(propName, formValue);
    } else if (value instanceof FileList) {
      for (var i = 0; i < value.length; i++) {
        formData.append(options && options.excludeImageIndex && value.length === 1 ? propName : `${propName}[${i}]`, value.item(i));
      }
    } else {
      if (RegexValidator.isNotBlank(value)) formData.append(propName, value);
    }
  }
}
function isResetControl(controlName, control, options) {
  let isReset = true;
  if (options) {
    isReset = false;
    if (options.resetType) switch (options.resetType) {
      case ResetFormType.ControlsOnly:
        isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl;
        break;
      case ResetFormType.ControlsAndFormGroupsOnly:
        isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup;
        break;
      case ResetFormType.FormGroupsOnly:
        isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup;
        break;
      case ResetFormType.FormArraysOnly:
        isReset = control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray;
        break;
      case ResetFormType.DefinedPropsOnly:
        isReset = options.value ? Object.keys(options.value).indexOf(controlName) != -1 : false;
        break;
      default:
        isReset = true;
        break;
    }
    if (!isReset && options.with) isReset = options.with.filter(x => x.split('.')[0] == controlName.split('.')[0])[0] !== undefined;
    if (!isReset && options.value && (options.resetType === undefined || options.resetType !== ResetFormType.DefinedPropsOnly)) isReset = true;
  }
  return isReset;
}
function getNestedOptions(controlName, options) {
  if (options) {
    let jObjectOptions = {};
    if (options.resetType) jObjectOptions.resetType = options.resetType == ResetFormType.FormGroupsOnly || options.resetType == ResetFormType.FormArraysOnly ? ResetFormType.ControlsOnly : options.resetType;
    if (options.with) {
      let nestedControls = options.with.filter(t => t.split('.')[0] == controlName);
      let controlNames = nestedControls.map(x => {
        let splitControls = x.split('.');
        splitControls.splice(0, 1);
        return splitControls.join('.');
      });
      jObjectOptions.with = controlNames;
    }
    if (options.value && options.value[controlName]) jObjectOptions.value = options.value[controlName];
    jObjectOptions = Object.keys(jObjectOptions).length > 0 ? jObjectOptions : undefined;
    return jObjectOptions;
  }
  return undefined;
}
class RxFormGroup extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup {
  constructor(model, entityObject, controls, validatorOrOpts, asyncValidator) {
    super(controls, validatorOrOpts, asyncValidator);
    this.model = model;
    this.entityObject = entityObject;
    this._modified = {};
    this._isModified = false;
    this.changing = false;
    this.baseObject = {};
    for (var column in this.entityObject) this.baseObject[column] = this.entityObject[column];
    this.formDataProvider = new FormDataProvider();
  }
  bindPrimaryKey(modelInstance, jObject) {
    let instanceContainer = defaultContainer.get(modelInstance.constructor);
    if (instanceContainer) {
      let primaryKeyProp = instanceContainer.properties.filter(x => x.isPrimaryKey)[0];
      if (primaryKeyProp && this.modelInstance[primaryKeyProp.name]) jObject[primaryKeyProp.name] = this.modelInstance[primaryKeyProp.name];
    }
  }
  get modifiedValue() {
    let jObject = {};
    if (Object.keys(this._modified).length > 0) {
      this.bindPrimaryKey(this.modelInstance, jObject);
      for (var columnName in this._modified) {
        if (this.controls[columnName] instanceof RxFormGroup) jObject[columnName] = this.controls[columnName].modifiedValue;else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
          let formArray = this.controls[columnName];
          jObject[columnName] = [];
          for (var i = 0; i < this._modified[columnName].length; i++) {
            let modifiedValue = formArray.controls[i].modifiedValue;
            if (Object.keys(modifiedValue).length > 0) jObject[columnName].push(modifiedValue);
          }
          if (jObject[columnName].length == 0) delete jObject[columnName];
        } else jObject[columnName] = this._modified[columnName];
      }
      return jObject;
    }
    return this._modified;
  }
  get isModified() {
    return this._isModified;
  }
  patch(controlName) {
    if (controlName) {
      let control = this.controls[controlName];
      this.processModified(controlName, control);
    } else {
      this.nestedFormsModification();
    }
    this._isModified = Object.keys(this._modified).length > 0;
    if (!this._isModified) this.nestedArrayIsModified();
    if (this.parent && this.parent.patch) this.parent.patch();
  }
  isDirty() {
    let isDirty = false;
    for (let name in this.value) {
      let currentValue = this.modelInstance[name];
      if (!(this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray)) {
        isDirty = ApplicationUtil.notEqualTo(this.baseObject[name], currentValue);
      } else if (this.controls[name] instanceof RxFormGroup) isDirty = this.controls[name].isDirty();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        for (let formGroup of this.controls[name].controls) {
          isDirty = formGroup.isDirty();
        }
      }
      if (isDirty) break;
    }
    return isDirty;
  }
  resetForm(options) {
    for (let name in this.controls) {
      if (isResetControl(name, this.controls[name], options)) {
        if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) this.controls[name].resetForm(getNestedOptions(name, options));else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
          this.controls[name].resetForm(options && options.value ? options.value[name] : undefined);
        } else {
          if (options && options.value && RegexValidator.isNotBlank(options.value[name])) this.controls[name].reset(options.value[name]);else this.controls[name].reset();
        }
      }
    }
  }
  commit() {
    for (let name in this.controls) {
      if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) this.controls[name].commit();else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        this.controls[name].commit();
      } else {
        this.controls[name].commit();
      }
    }
  }
  patchModelValue(value, options) {
    if (value) {
      for (let name in this.controls) {
        if (this.controls[name] instanceof RxFormGroup && value[name]) this.controls[name].patchModelValue(value[name], options);else if (this.controls[name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray && Array.isArray(value[name])) {
          let index = 0;
          for (let formGroup of this.controls[name].controls) {
            if (value[name][index]) formGroup.patchModelValue(value[name][index], options);
            index = index + 1;
          }
        } else if (value[name] !== undefined) this.controls[name].patchValue(value[name], options);
      }
    }
  }
  getErrorSummary(onlyMessage) {
    let jObject = {};
    Object.keys(this.controls).forEach(columnName => {
      if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
        let error = this.controls[columnName].getErrorSummary(false);
        if (Object.keys(error).length > 0) jObject[columnName] = error;
      } else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        let index = 0;
        for (let formGroup of this.controls[columnName].controls) {
          let error = formGroup.getErrorSummary(false);
          if (Object.keys(error).length > 0) {
            error.index = index;
            if (!jObject[columnName]) jObject[columnName] = [];
            jObject[columnName].push(error);
          }
          index++;
        }
      } else {
        if (this.controls[columnName].errors) {
          let error = this.controls[columnName].errors;
          if (onlyMessage) for (let validationName in error) jObject[columnName] = error[validationName].message;else jObject[columnName] = error;
        }
      }
    });
    return jObject;
  }
  valueChangedSync() {
    Object.keys(this.controls).forEach(columnName => {
      if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || this.controls[columnName] instanceof RxFormGroup) && !(this.entityObject[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || this.entityObject[columnName] instanceof RxFormControl) && this.controls[columnName].getControlValue && ApplicationUtil.notEqualTo(this.controls[columnName].getControlValue(), this.entityObject[columnName])) {
        this.controls[columnName].setValue(this.entityObject[columnName], {
          updateChanged: true
        });
      } else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray || this.controls[columnName] instanceof RxFormArray) {
        for (let formGroup of this.controls[columnName].controls) {
          formGroup.valueChangedSync();
        }
      } else if (this.controls[columnName] instanceof RxFormGroup) {
        this.controls[columnName].valueChangedSync();
      }
    });
  }
  refreshDisable() {
    Object.keys(this.controls).forEach(columnName => {
      if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || this.controls[columnName] instanceof RxFormGroup)) {
        this.controls[columnName].refresh();
      } else if (this.controls[columnName] instanceof RxFormGroup) {
        this.controls[columnName].refreshDisable();
      }
    });
  }
  bindErrorMessages() {
    Object.keys(this.controls).forEach(columnName => {
      if (!(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray || this.controls[columnName] instanceof RxFormArray) && !(this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || this.controls[columnName] instanceof RxFormGroup)) {
        this.controls[columnName].bindError();
      } else if (this.controls[columnName] instanceof RxFormGroup) {
        this.controls[columnName].bindErrorMessages();
      }
    });
  }
  get submitted() {
    return this._submitted;
  }
  set submitted(value) {
    this._submitted = value;
    Object.keys(this.controls).forEach(columnName => {
      if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        let formArray = this.controls[columnName];
        for (let formGroup of formArray.controls) formGroup.submitted = value;
      } else if (this.controls[columnName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
        this.controls[columnName].submitted = value;
      } else this.controls[columnName].bindError();
    });
  }
  get modelInstanceValue() {
    return clone(this.entityObject);
  }
  get modelInstance() {
    return this.entityObject;
  }
  get controlsError() {
    return this.getErrorSummary(true);
  }
  toFormData(options) {
    return this.formDataProvider.convertToFormData(this.value, options);
  }
  processModified(controlName, control) {
    if (control.isModified) this._modified[controlName] = control.value;else delete this._modified[controlName];
    this._isModified = Object.keys(this._modified).length > 0;
  }
  nestedArrayIsModified() {
    for (var controlName in this.controls) {
      if (this.controls[controlName] instanceof RxFormArray) this._isModified = this.controls[controlName].isModified;
      if (this._isModified) break;
    }
  }
  setBackEndErrors(errors) {
    Object.keys(errors).forEach(controlName => {
      if (this.controls[controlName]) {
        if (this.controls[controlName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) this.controls[controlName].setBackEndErrors(errors[controlName]);else this.controls[controlName].setBackEndErrors(errors[controlName]);
      }
    });
  }
  clearBackEndErrors(errors) {
    let clearErrors = errors ? Object.keys(errors) : Object.keys(this.controls);
    clearErrors.forEach(controlName => {
      if (this.controls[controlName]) {
        if (this.controls[controlName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) errors ? this.controls[controlName].clearBackEndErrors(errors[controlName]) : this.controls[controlName].clearBackEndErrors();else errors ? this.controls[controlName].clearBackEndErrors(errors[controlName]) : this.controls[controlName].clearBackEndErrors();
      }
    });
  }
  nestedFormsModification() {
    for (var controlName in this.controls) {
      if (this.controls[controlName] instanceof RxFormGroup) this.processModified(controlName, this.controls[controlName]);else if (this.controls[controlName] instanceof RxFormArray) {
        if (this.controls[controlName].isModified) {
          let formGroups = this.controls[controlName].controls;
          this._modified[controlName] = [];
          for (var formGroup of formGroups) {
            if (formGroup.isModified) {
              if (!this._modified[controlName]) this._modified[controlName] = [];
              this._modified[controlName].push(formGroup.modifiedValue);
            }
          }
          if (this._modified[controlName].length == 0) delete this._modified[controlName];
        } else if (this._modified[controlName]) delete this._modified[controlName];
      }
    }
  }
}
class FormProvider {
  static ProcessRule(control, config, isDynamicConfig = false) {
    if (config && config.expressionProcessed) return true;
    const formGroupValue = ApplicationUtil.getParentObjectValue(control);
    const parentObject = control.parent ? ApplicationUtil.cloneValue(control.parent.value) : undefined;
    let modelInstance = undefined;
    if (control.parent && control.parent instanceof RxFormGroup) modelInstance = control.parent.modelInstance;
    if (parentObject) {
      this.updateFormControlValue(parentObject, control.parent.controls, control, config);
      this.forDisableUpdate(parentObject, config);
    } else if (config.conditionalExpression) return false;
    return Linq.execute(formGroupValue, config, parentObject, modelInstance, isDynamicConfig);
  }
  static updateFormControlValue(parentObject, controls, control, config) {
    for (var controlName in parentObject) {
      if (!(parentObject[controlName] instanceof Object)) if (controls[controlName] === control) {
        parentObject[controlName] = control.value;
        break;
      }
    }
  }
  static forDisableUpdate(parentObject, config) {
    if (config.disableConfig) Object.keys(config.disableConfig).forEach(column => {
      parentObject[column] = config.disableConfig[column];
    });
  }
}
class ValidatorValueChecker {
  static pass(control, config) {
    if (FormProvider.ProcessRule(control, config)) return RegexValidator.isNotBlank(control.value);else return false;
  }
  static passArrayValue(control, config) {
    if (FormProvider.ProcessRule(control, config)) return typeof control.value === "string" ? RegexValidator.isNotBlank(control.value) : control.value instanceof Array;else return false;
  }
}
const ARRAY_CONFIG = "ArrayConfig";
const FIELD_CONFIG = "FieldConfig";
const IP_CONFIG = "IpConfig";
const NUMBER_CONFIG = "NumberConfig";
const PASSWORD_CONFIG = "PasswordConfig";
const PATTERN_CONFIG = "PatternConfig";
const RANGE_CONFIG = "RangeConfig";
const RELATIONAL_OPERATOR_CONFIG = "RelationalOperatorConfig";
const CONFIG_REQUIRED_FIELDS = {
  [ARRAY_CONFIG]: ["matchValues"],
  [FIELD_CONFIG]: ["fieldName"],
  [IP_CONFIG]: ["version"],
  [PASSWORD_CONFIG]: ["validation"],
  [NUMBER_CONFIG]: ["value"],
  [PATTERN_CONFIG]: ["expression"],
  [RANGE_CONFIG]: ["minimumNumber", "maximumNumber"]
};
function getConfigObject(config, control, configName = '') {
  return config != undefined && config != true ? configProvider(control, config, configName) : {};
}
function configProvider(control, config, configName) {
  if (config.dynamicConfig) {
    let currentConfig = FormProvider.ProcessRule(control, clone(config), true);
    if (typeof currentConfig != "boolean") {
      currentConfig.conditionalExpression = config.conditionalExpression;
      currentConfig.dynamicConfig = config.dynamicConfig;
      Object.keys(config).forEach(t => {
        if (t != "conditionalExpression" && t != "dynamicConfig" || currentConfig[t] === undefined) {
          currentConfig[t] = config[t];
        }
      });
      return currentConfig;
    } else return config;
  }
  return checkRequiredProps(config, configName);
}
function checkRequiredProps(config, configName) {
  let props = CONFIG_REQUIRED_FIELDS[configName];
  if (configName) {
    props.forEach(prop => {
      if (config[prop] === undefined) throw new Error(`Pass the property of '${prop}' with value in the ${configName}, otherwise it won't work.`);
    });
  }
  return config;
}
const alphabet = {
  'danish': /^[A-ZÆØÅ]+$/i,
  'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'german': /^[A-ZÄÖÜß]+$/i,
  'spanish': /^[a-zñáéíóúü]+$/i,
  'russian': /^[А-ЯЁ]+$/i
};
const alphaWithWhitespace = {
  'danish': /^[A-ZÆØÅ\s]+$/i,
  'french': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]+$/i,
  'german': /^[A-ZÄÖÜß\s]+$/i,
  'spanish': /^[a-zñáéíóúü\s]+$/i,
  'russian': /^[А-ЯЁ\s]+$/i
};
const alphanumeric = {
  'danish': /^[0-9A-ZÆØÅ]+$/i,
  'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'german': /^[0-9A-ZÄÖÜß]+$/i,
  'spanish': /^[0-9a-zñáéíóúü]+$/i,
  'russian': /^[0-9А-ЯЁ]+$/i
};
const alphanumericWithWitespace = {
  'danish': /^[0-9A-ZÆØÅ\s]+$/i,
  'french': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]+$/i,
  'german': /^[0-9A-ZÄÖÜß\s]+$/i,
  'spanish': /^[0-9a-zñáéíóúü\s]+$/i,
  'russian': /^[0-9А-ЯЁ\s]+$/i
};
function alphaValidation(configModel, control, regExps, key) {
  let config = getConfigObject(configModel, control);
  if (ValidatorValueChecker.pass(control, config)) {
    regExps = getRegex(key, regExps, config);
    var isValid = !config || !config.allowWhiteSpace ? RegexValidator.isValid(control.value, regExps[0]) : RegexValidator.isValid(control.value, regExps[1]);
    if (!isValid) return ObjectMaker.toJson(key, config, [control.value]);
  }
  return ObjectMaker.null();
}
function getRegex(key, regExps, config) {
  if (config.allowCharacters) if (config.allowWhiteSpace) regExps[1] = new RegExp(`^[0-9a-zA-Z @${config.allowCharacters}]+$`, ``);else regExps[0] = new RegExp(`^[0-9a-zA-Z @${config.allowCharacters}]+$`, ``);
  switch (key) {
    case "alpha":
      var alphaLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alpha ? ReactiveFormConfig.json.defaultValidationLocale.alpha : "";
      return [alphaLocale && alphaLocale in alphabet ? alphabet[alphaLocale] : regExps[0], alphaLocale && alphaLocale in alphaWithWhitespace ? alphaWithWhitespace[alphaLocale] : regExps[1]];
      break;
    case "alphaNumeric":
      var alphaNumericLocale = config.locale ? config.locale : ReactiveFormConfig.json && ReactiveFormConfig.json.defaultValidationLocale && ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric ? ReactiveFormConfig.json.defaultValidationLocale.alphaNumeric : "";
      return [alphaNumericLocale && alphaNumericLocale in alphanumeric ? alphanumeric[alphaNumericLocale] : regExps[0], alphaNumericLocale && alphaNumericLocale in alphanumericWithWitespace ? alphanumericWithWitespace[alphaNumericLocale] : regExps[1]];
      break;
  }
}
function alphaValidator(configModel) {
  return control => {
    return alphaValidation(configModel, control, [RegExRule.alpha, RegExRule.alphaWithSpace], AnnotationTypes.alpha);
  };
}
function alphaNumericValidator(configModel) {
  return control => {
    return alphaValidation(configModel, control, [RegExRule.alphaNumeric, RegExRule.alphaNumericWithSpace], AnnotationTypes.alphaNumeric);
  };
}
function compareValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, FIELD_CONFIG);
    const compareControl = ApplicationUtil.getFormControl(config.fieldName, control);
    const controlValue = control.value;
    const compareControlValue = compareControl ? compareControl.value : '';
    if (RegexValidator.isNotBlank(controlValue) || RegexValidator.isNotBlank(compareControlValue)) {
      if (!(compareControl && compareControl.value === controlValue)) return ObjectMaker.toJson(AnnotationTypes.compare, config, [controlValue, compareControlValue]);
    }
    return ObjectMaker.null();
  };
}
function containsValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let failed = false;
      const values = config.values ? config.values : [config.value];
      for (let value of values) {
        failed = control.value.indexOf(value) == -1;
        if (!failed) break;
      }
      if (failed) return ObjectMaker.toJson(AnnotationTypes.contains, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function checkLength(length, checks) {
  let isPassed = false;
  for (let check of checks) {
    isPassed = check == length;
    if (isPassed) break;
  }
  return isPassed;
}
function calculate(numbers) {
  let numberSum = 0;
  for (var i = 0; i < numbers.length; i++) numberSum += parseInt(numbers.substring(i, i + 1));
  let deltas = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
  for (var i = numbers.length - 1; i >= 0; i -= 2) {
    numberSum += deltas[parseInt(numbers.substring(i, i + 1))];
  }
  let mod = numberSum % 10;
  mod = 10 - mod;
  if (mod == 10) mod = 0;
  return mod;
}
function creditCardValidator(configModel) {
  let cardDigits = {
    AmericanExpress: [15],
    DinersClub: [14, 16, 19],
    Discover: [16, 19],
    JCB: [16, 19],
    Maestro: [12, 16, 19],
    MasterCard: [16],
    Visa: [13, 16, 19]
  };
  function validate(creditCardNumber) {
    var digit = parseInt(creditCardNumber.substring(creditCardNumber.length - 1, creditCardNumber.length));
    return calculate(creditCardNumber.substring(0, creditCardNumber.length - 1)) == parseInt(String(digit)) ? !0 : !1;
  }
  function getCardProviderName(cardNumber) {
    var cardProviderName = "";
    return /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/.test(cardNumber) ? cardProviderName = "Maestro" : /^5[1-5]/.test(cardNumber) ? cardProviderName = "MasterCard" : /^4/.test(cardNumber) ? cardProviderName = "Visa" : /^3[47]/.test(cardNumber) ? cardProviderName = "AmericanExpress" : /^(?:2131|1800|35)/.test(cardNumber) ? cardProviderName = "JCB" : /^3(?:0[0-5]|[68])/.test(cardNumber) ? cardProviderName = "DinersClub" : /^6(?:011|5)/.test(cardNumber) && (cardProviderName = "Discover"), cardProviderName;
  }
  return control => {
    const controlValue = control.value;
    let config = getConfigObject(configModel, control);
    const parentObject = control.parent ? control.parent.value : undefined;
    if (FormProvider.ProcessRule(control, config)) {
      if (RegexValidator.isNotBlank(controlValue)) {
        let isValid = false;
        let cardTypes = config.fieldName && parentObject[config.fieldName] ? [parentObject[config.fieldName]] : config.creditCardTypes;
        let cardType = '';
        for (let creditCardType of cardTypes) {
          isValid = checkLength(controlValue.length, cardDigits[creditCardType]) && getCardProviderName(controlValue) == creditCardType && validate(controlValue);
          cardType = creditCardType;
          if (isValid) break;
        }
        if (!isValid) return ObjectMaker.toJson(AnnotationTypes.creditCard, config, [controlValue, cardType]);
      }
    }
    return ObjectMaker.null();
  };
}
function regexValidation(configModel, control, regExp, key) {
  let config = getConfigObject(configModel, control);
  return validate(config, control, regExp, key);
}
function validate(config, control, regExp, key) {
  if (ValidatorValueChecker.pass(control, config)) {
    if (!RegexValidator.isValid(control.value, regExp)) return ObjectMaker.toJson(key, config, [control.value]);
  }
  return ObjectMaker.null();
}
function digitValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.onlyDigit, AnnotationTypes.digit);
  };
}
function emailValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.basicEmail, AnnotationTypes.email);
  };
}
function hexColorValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.strictHexColor, AnnotationTypes.hexColor);
  };
}
function lowercaseValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(control.value === control.value.toLowerCase())) return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
const OPERATORS = {
  lessThan: "<",
  greaterThan: ">",
  lessThanEqualTo: "<=",
  greaterThanEqualTo: ">="
};
function runCondition$1(leftValue, rightValue, operator) {
  let result = false;
  switch (operator) {
    case OPERATORS.lessThan:
    case OPERATORS.greaterThan:
      result = leftValue > rightValue;
      break;
    case OPERATORS.lessThanEqualTo:
    case OPERATORS.greaterThanEqualTo:
      result = leftValue >= rightValue;
      break;
  }
  return result;
}
function dateChecker(control, config, operationType) {
  config = getConfigObject(config, control);
  var dateProvider = new DateProvider();
  if (FormProvider.ProcessRule(control, config)) {
    if (RegexValidator.isNotBlank(control.value)) {
      let checkDate = dateProvider.getCompareDate(config, control);
      if (dateProvider.isDate(control.value) || dateProvider.isValid(control.value, config)) {
        let currentControlValue = dateProvider.getDate(control.value);
        let isValid = operationType == AnnotationTypes.minDate ? runCondition$1(currentControlValue, checkDate, config.operator || OPERATORS.greaterThanEqualTo) : runCondition$1(checkDate, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
        if (!isValid) return ObjectMaker.toJson(operationType, config, [control.value, checkDate]);
      } else return ObjectMaker.toJson(operationType, config, [control.value, checkDate]);
    }
  }
  return ObjectMaker.null();
}
function validateDate(control, config, operationType) {
  config = getConfigObject(config, control);
  var dateProvider = new DateProvider();
  if (FormProvider.ProcessRule(control, config)) {
    if (RegexValidator.isNotBlank(control.value)) {
      if (!dateProvider.isDate(control.value) && !dateProvider.isValid(control.value, config)) {
        return ObjectMaker.toJson(operationType, config, [control.value]);
      }
    }
  }
  return ObjectMaker.null();
}
function maxDateValidator(configModel) {
  return control => {
    return dateChecker(control, configModel, AnnotationTypes.maxDate);
  };
}
function maxLengthValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, NUMBER_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(control.value.length <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxLength, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function maxNumberValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, NUMBER_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(parseFloat(control.value) <= config.value)) return ObjectMaker.toJson(AnnotationTypes.maxNumber, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function minDateValidator(configModel) {
  return control => {
    return dateChecker(control, configModel, AnnotationTypes.minDate);
  };
}
function minLengthValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, NUMBER_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(String(control.value).length >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minLength, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function minNumberValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, NUMBER_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(parseFloat(control.value) >= config.value)) return ObjectMaker.toJson(AnnotationTypes.minNumber, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function passwordValidator(configModel) {
  function getMessageObject(jObject, keyName) {
    if (!jObject.message && !jObject.messageKey) {
      let message = ObjectMaker.getPasswordMessage();
      jObject.message = message && typeof message == "string" ? message : ApplicationUtil.isObject(message) ? message[keyName] : "";
      if (!jObject.message) jObject.message = message["password"];
      jObject.messageKey = "";
    }
    return jObject;
  }
  return control => {
    let config = getConfigObject(configModel, control, PASSWORD_CONFIG);
    let controlValue = control.value;
    if (RegexValidator.isNotBlank(controlValue)) {
      let validation = RegexValidator.isValidPassword(config.validation, controlValue);
      let jObject = {};
      jObject.message = config.message && config.message[validation.keyName] ? config.message[validation.keyName] : typeof config.message == "string" ? config.message : '';
      jObject.messageKey = config.messageKey && config.messageKey[validation.keyName] ? config.messageKey[validation.keyName] : typeof config.messageKey == "string" ? config.messageKey : "";
      jObject = getMessageObject(jObject, validation.keyName);
      if (!validation.isValid) return ObjectMaker.toJson(AnnotationTypes.password, jObject, [controlValue]);
    }
    return ObjectMaker.null();
  };
}
function rangeValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, RANGE_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!((control.value || control.value === 0) && parseFloat(control.value) >= config.minimumNumber && parseFloat(control.value) <= config.maximumNumber)) return ObjectMaker.toJson(AnnotationTypes.range, config, [control.value, config.minimumNumber, config.maximumNumber]);
    }
    return ObjectMaker.null();
  };
}
function uppercaseValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(control.value === control.value.toUpperCase())) return ObjectMaker.toJson(AnnotationTypes.upperCase, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function requiredValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (!RegexValidator.isNotBlank(control.value)) {
        return ObjectMaker.toJson(AnnotationTypes.required, config, []);
      }
    }
    return ObjectMaker.null();
  };
}
function patternValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, PATTERN_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      for (var pattern in config.expression) if (!RegexValidator.isValid(control.value, config.expression[pattern])) return ObjectMaker.toJson(pattern, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function timeValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let isValid = config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.time, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function urlValidation(configModel, control) {
  var regex = RegExRule.url;
  let config = getConfigObject(configModel, control);
  if (config && config.urlValidationType) {
    switch (config.urlValidationType) {
      case 1:
        regex = RegExRule.url;
        break;
      case 2:
        regex = RegExRule.localhostUrl;
        break;
      case 3:
        regex = RegExRule.interanetUrl;
        break;
    }
  }
  return validate(config, control, regex, AnnotationTypes.url);
}
function urlValidator(configModel) {
  return control => {
    return urlValidation(configModel, control);
  };
}
function jsonValidator(configModel) {
  function process(value) {
    var result = false;
    try {
      var json = JSON.parse(value);
      result = !!json && typeof json === 'object';
    } catch (ex) {
      result = false;
    }
    return result;
  }
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!process(control.value)) return ObjectMaker.toJson(AnnotationTypes.json, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
const operatorOpposite = {
  [AnnotationTypes.greaterThan]: AnnotationTypes.lessThan,
  [AnnotationTypes.lessThan]: AnnotationTypes.greaterThan,
  [AnnotationTypes.greaterThanEqualTo]: AnnotationTypes.lessThanEqualTo,
  [AnnotationTypes.lessThanEqualTo]: AnnotationTypes.greaterThanEqualTo
};
function relationalCheck(control, config, relationalOperatorName) {
  config = getConfigObject(config, control);
  const matchControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
  const matchControlValue = matchControl ? matchControl.value : config.value !== undefined ? config.value : '';
  if (FormProvider.ProcessRule(control, config)) {
    if (config.isArrayControl) return arrayControlValidation(control, config, relationalOperatorName);
    if (isValid$1(control, matchControlValue, relationalOperatorName) === false) return ObjectMaker.toJson(relationalOperatorName, config, [control.value, matchControlValue]);
  }
  return ObjectMaker.null();
}
function isValid$1(control, matchControlValue, relationalOperatorName) {
  if (RegexValidator.isNotBlank(control.value) && RegexValidator.isNotBlank(matchControlValue)) {
    let isValid = false;
    switch (relationalOperatorName) {
      case AnnotationTypes.greaterThan:
        isValid = parseFloat(control.value) > parseFloat(matchControlValue);
        break;
      case AnnotationTypes.lessThan:
        isValid = parseFloat(control.value) < parseFloat(matchControlValue);
        break;
      case AnnotationTypes.greaterThanEqualTo:
        isValid = parseFloat(control.value) >= parseFloat(matchControlValue);
        break;
      case AnnotationTypes.lessThanEqualTo:
        isValid = parseFloat(control.value) <= parseFloat(matchControlValue);
        break;
    }
    return isValid;
  }
  return null;
}
function setTimeFunc(invalidateControls) {
  let timeOut = setTimeout(() => {
    invalidateControls.forEach(t => {
      t.updateValueAndValidity();
    });
    clearTimeout(timeOut);
  }, 200);
}
function arrayControlValidation(control, config, relationalOperatorName) {
  let formArray = ApplicationUtil.getParentFormArray(control);
  let parentFormGroup = control.parent ? control.parent : undefined;
  let oppositeOperator = operatorOpposite[relationalOperatorName];
  let updateValidityControls = [];
  if (formArray && parentFormGroup && formArray.controls.length > 1) {
    let indexOf = formArray.controls.indexOf(parentFormGroup);
    let fieldName = ApplicationUtil.getFormControlName(control);
    let valid = true;
    if (indexOf > 0) valid = validateControl(formArray, control, indexOf - 1, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls);
    if (valid && formArray.controls.length > indexOf + 1) valid = validateControl(formArray, control, indexOf + 1, fieldName, relationalOperatorName, relationalOperatorName, updateValidityControls);
    if (updateValidityControls.length > 0) setTimeFunc(updateValidityControls);
    if (valid === false) return ObjectMaker.toJson(relationalOperatorName, config, [control.value]);
  }
  return ObjectMaker.null();
}
function validateControl(formArray, control, indexOf, fieldName, oppositeOperator, relationalOperatorName, updateValidityControls) {
  let valid = false;
  let formGroup = formArray.controls[indexOf];
  if (formGroup && formGroup.controls) {
    let formControl = formGroup.controls[fieldName];
    valid = isValid$1(control, formControl.value, oppositeOperator);
    if (valid && formControl.errors && formControl.errors[relationalOperatorName]) updateValidityControls.push(formControl);
  }
  return valid;
}
function greaterThanValidator(configModel) {
  return control => {
    return relationalCheck(control, configModel, AnnotationTypes.greaterThan);
  };
}
function greaterThanEqualToValidator(configModel) {
  return control => {
    return relationalCheck(control, configModel, AnnotationTypes.greaterThanEqualTo);
  };
}
function lessThanEqualToValidator(configModel) {
  return control => {
    return relationalCheck(control, configModel, AnnotationTypes.lessThanEqualTo);
  };
}
function lessThanValidator(configModel) {
  return control => {
    return relationalCheck(control, configModel, AnnotationTypes.lessThan);
  };
}
function choiceValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (control.value instanceof Array) {
        config.minLength = config.minLength == undefined ? 0 : config.minLength;
        config.maxLength = config.maxLength == undefined ? 0 : config.maxLength;
        if (control.value.length < config.minLength || config.maxLength !== 0 && control.value.length > config.maxLength) return ObjectMaker.toJson(AnnotationTypes.choice, config, [control.value]);
      }
    }
    return ObjectMaker.null();
  };
}
function differentValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, FIELD_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      const differentControl = ApplicationUtil.getFormControl(config.fieldName, control);
      const differentControlValue = differentControl ? differentControl.value : '';
      if (!(differentControl && differentControl.value != control.value)) return ObjectMaker.toJson(AnnotationTypes.different, config, [control.value, differentControlValue]);
    }
    return ObjectMaker.null();
  };
}
function numericValidator(configModel) {
  return control => {
    if (configModel && (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.numeric])) ApplicationUtil.configureControl(control, configModel, AnnotationTypes.numeric);
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!RegexValidator.isValid(control.value, ApplicationUtil.numericValidation(config.allowDecimal, config.acceptValue))) return ObjectMaker.toJson(AnnotationTypes.numeric, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function evenValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(control.value % 2 == 0)) return ObjectMaker.toJson(AnnotationTypes.even, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function oddValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!!(control.value % 2 == 0) || !ApplicationUtil.isNumeric(control.value)) return ObjectMaker.toJson(AnnotationTypes.odd, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function factorValidator(configModel) {
  function positiveFactors(dividend, value) {
    let isPositive = false;
    for (var index = 1; index <= Math.floor(Math.sqrt(dividend)); index += 1) {
      if (dividend % index === 0) {
        if (index == value) isPositive = true;
        if (dividend / index !== index) if (dividend / index == value) isPositive = true;
        if (isPositive) break;
      }
    }
    return isPositive;
  }
  return control => {
    let config = getConfigObject(configModel, control);
    const dividendField = control.parent && config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
    const dividend = config.fieldName && dividendField ? dividendField.value : config.dividend;
    if (FormProvider.ProcessRule(control, config)) {
      if (RegexValidator.isNotBlank(control.value) && dividend > 0) {
        if (!RegexValidator.isValid(control.value, RegExRule.onlyDigit) || !positiveFactors(dividend, parseInt(control.value))) return ObjectMaker.toJson(AnnotationTypes.factor, config, [control.value]);
      }
    }
    return ObjectMaker.null();
  };
}
function leapYearValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      var isValid = control.value % 100 === 0 ? control.value % 400 === 0 : control.value % 4 === 0;
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.leapYear, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function allOfValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, ARRAY_CONFIG);
    if (ValidatorValueChecker.passArrayValue(control, config)) {
      var testResult = false;
      for (let value of config.matchValues) {
        testResult = control.value.some(y => y == value);
        if (!testResult) break;
      }
      if (!testResult) return ObjectMaker.toJson(AnnotationTypes.allOf, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function oneOfValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, ARRAY_CONFIG);
    if (ValidatorValueChecker.passArrayValue(control, config)) {
      var testResult = false;
      for (let value of config.matchValues) {
        let matchValue = ApplicationUtil.lowerCaseWithTrim(value);
        testResult = Array.isArray(control.value) ? control.value.some(y => ApplicationUtil.lowerCaseWithTrim(y) === matchValue) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
        if (testResult) break;
      }
      if (!testResult) return ObjectMaker.toJson(AnnotationTypes.oneOf, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function noneOfValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, ARRAY_CONFIG);
    if (FormProvider.ProcessRule(control, config)) {
      var testResult = false;
      for (let value of config.matchValues) {
        let matchValue = ApplicationUtil.lowerCaseWithTrim(value);
        testResult = Array.isArray(control.value) ? control.value.some(y => ApplicationUtil.lowerCaseWithTrim(y) === matchValue) : ApplicationUtil.lowerCaseWithTrim(control.value) === matchValue;
        if (testResult) break;
      }
      if (testResult) return ObjectMaker.toJson(AnnotationTypes.noneOf, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function macValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.macId, AnnotationTypes.mac);
  };
}
function asciiValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.ascii, AnnotationTypes.ascii);
  };
}
function dataUriValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.dataUri, AnnotationTypes.dataUri);
  };
}
function portValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let isValid = RegexValidator.isValid(control.value, RegExRule.onlyDigit) && control.value >= 0 && control.value <= 65535;
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.port, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function latLongValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let splitText = control.value.split(',');
      if (!(splitText.length > 1 && RegexValidator.isValid(splitText[0], RegExRule.lat) && RegexValidator.isValid(splitText[1], RegExRule.long))) return ObjectMaker.toJson(AnnotationTypes.latLong, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function extensionValidator(configModel) {
  return (control, files) => {
    let config = getConfigObject(configModel, control);
    if (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.extension]) ApplicationUtil.configureControl(control, config, AnnotationTypes.extension);
    if (files && FormProvider.ProcessRule(control, config)) {
      if (RegexValidator.isNotBlank(control.value)) {
        let testResult = true;
        let extension = '';
        for (var i = 0; i < files.length; i++) {
          let file = files.item(i);
          let splitText = file.name.split(".");
          extension = splitText[splitText.length - 1];
          let result = config.extensions.filter(t => {
            return extension.toLowerCase() == t.toLowerCase();
          })[0];
          if (!result && !configModel.isExcludeExtensions) {
            testResult = false;
            break;
          } else {
            if (result && configModel.isExcludeExtensions) {
              testResult = false;
              break;
            }
          }
        }
        if (!testResult) return ObjectMaker.toJson(AnnotationTypes.extension, config, [extension, config.extensions.join(",")]);
      }
    }
    return ObjectMaker.null();
  };
}
function fileSizeValidator(configModel) {
  return (control, files) => {
    let config = getConfigObject(configModel, control);
    if (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.fileSize]) ApplicationUtil.configureControl(control, config, AnnotationTypes.fileSize);
    if (files && FormProvider.ProcessRule(control, config)) {
      if (RegexValidator.isNotBlank(control.value)) {
        let minFileSize = config.minSize ? config.minSize : 0;
        let testResult = false;
        let fileSize = 0;
        for (var i = 0; i < files.length; i++) {
          let file = files.item(i);
          fileSize = file.size;
          testResult = !(fileSize >= minFileSize && fileSize <= config.maxSize);
          if (testResult) break;
        }
        if (testResult) return ObjectMaker.toJson(AnnotationTypes.fileSize, config, [fileSize, minFileSize, config.maxSize]);
      }
    }
    return ObjectMaker.null();
  };
}
function endsWithValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let failed = false;
      let values = config.values ? config.values : [config.value];
      for (let value of values) {
        var endString = String(control.value).substr(control.value.length - value.length, value.length);
        failed = endString != value;
        if (!failed) break;
      }
      if (failed) return ObjectMaker.toJson(AnnotationTypes.endsWith, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function startsWithValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let failed = false;
      let values = config.values ? config.values : [config.value];
      for (let value of values) {
        let startString = String(control.value).substr(0, value.length);
        failed = config.isRestrict && String(startString).toLowerCase() == String(value).toLowerCase() || !config.isRestrict && startString != value;
        if (!failed) break;
      }
      if (failed) return ObjectMaker.toJson(AnnotationTypes.startsWith, config, [control.value, config.value]);
    }
    return ObjectMaker.null();
  };
}
function primeNumberValidator(configModel) {
  function isPrime(value) {
    let isPrimeNumber = value != 1;
    for (var i = 2; i < value; i++) {
      if (value % i == 0) {
        isPrimeNumber = false;
        break;
      }
    }
    return isPrimeNumber;
  }
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!ApplicationUtil.isNumeric(control.value) || !isPrime(control.value)) return ObjectMaker.toJson(AnnotationTypes.primeNumber, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function latitudeValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.lat, AnnotationTypes.latitude);
  };
}
function longitudeValidator(configModel) {
  return control => {
    return regexValidation(configModel, control, RegExRule.long, AnnotationTypes.longitude);
  };
}
function composeValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (config.validators) {
        let result = undefined;
        for (let validator of config.validators) {
          result = validator(control);
          if (result) break;
        }
        if (result) return config.messageKey || config.message ? ObjectMaker.toJson(config.messageKey || AnnotationTypes.compose, config, [control.value]) : result;
      }
    }
    return ObjectMaker.null();
  };
}
function ruleValidator(configModel, entity) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      let result = null;
      for (let rule of config.customRules) {
        result = rule(entity);
        if (result) break;
      }
      if (result) return result;
    }
    return ObjectMaker.null();
  };
}
function fileValidator(configModel) {
  return (control, files) => {
    let config = getConfigObject(configModel, control);
    if (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.file]) ApplicationUtil.configureControl(control, config, AnnotationTypes.file);
    if (files) {
      if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
          let minFiles = config.minFiles ? config.minFiles : 0;
          let maxFiles = config.maxFiles ? config.maxFiles : files.length;
          if (!(files.length > 0 && files[0] instanceof File && files.length >= minFiles && files.length <= maxFiles)) return ObjectMaker.toJson(AnnotationTypes.file, config, [files.length, minFiles, maxFiles]);
        }
      }
    }
    return ObjectMaker.null();
  };
}
function customValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      const formGroupValue = ApplicationUtil.getParentObjectValue(control);
      const parentObject = control.parent ? control.parent.value : undefined;
      let result = null;
      for (let rule of config.customRules) {
        result = rule(formGroupValue, parentObject, config.additionalValue);
        if (result) break;
      }
      if (result) return result;
    }
    return ObjectMaker.null();
  };
}
function uniqueValidator(configModel) {
  var setTimeoutFunc = (invalidateControls, controlValues) => {
    let timeOut = setTimeout(() => {
      invalidateControls.forEach(t => {
        let isMatched = controlValues.filter(x => x == t.value)[0];
        if (!isMatched) t.updateValueAndValidity();
      });
      clearTimeout(timeOut);
    }, 200);
  };
  var additionalValidation = (config, fieldName, formGroup, formArray, currentValue) => {
    let indexOf = formArray.controls.indexOf(formGroup);
    let formArrayValue = [];
    if (indexOf != -1) {
      formArray.value.forEach((t, i) => {
        if (indexOf != i) formArrayValue.push(t);
      });
      return config.additionalValidation(currentValue, indexOf, fieldName, formGroup.value, formArrayValue);
    }
    return false;
  };
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (RegexValidator.isNotBlank(control.value)) {
        let formArray = ApplicationUtil.getParentFormArray(control);
        let parentFormGroup = control.parent ? control.parent : undefined;
        let invalidateControls = [];
        let controlValues = [];
        if (formArray && parentFormGroup) {
          let currentValue = control.value;
          let fieldName = ApplicationUtil.getFormControlName(control);
          let isMatched = false;
          for (let formGroup of formArray.controls) {
            if (formGroup != parentFormGroup) {
              isMatched = ApplicationUtil.toLower(formGroup.controls[fieldName].value) == ApplicationUtil.toLower(currentValue) && !(formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]);
              if (formGroup.controls[fieldName].errors && formGroup.controls[fieldName].errors[AnnotationTypes.unique]) {
                var matchedControl = formArray.controls.filter(t => t.controls[fieldName] != formGroup.controls[fieldName] && ApplicationUtil.toLower(t.controls[fieldName].value) == ApplicationUtil.toLower(formGroup.controls[fieldName].value))[0];
                if (!matchedControl) invalidateControls.push(formGroup.controls[fieldName]);
              } else controlValues.push(formGroup.controls[fieldName].value);
            }
            if (isMatched) break;
          }
          if (invalidateControls.length > 0) setTimeoutFunc(invalidateControls, controlValues);
          let validation = false;
          if (config.additionalValidation) {
            validation = additionalValidation(config, fieldName, parentFormGroup, formArray, currentValue);
          }
          if (isMatched && !validation) return ObjectMaker.toJson(AnnotationTypes.unique, config, [control.value]);
        }
      }
    }
    return ObjectMaker.null();
  };
}
function imageValidator(configModel) {
  return (control, files) => {
    let config = getConfigObject(configModel, control);
    if (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.image]) ApplicationUtil.configureControl(control, config, AnnotationTypes.image);
    if (!files) return ObjectMaker.null();
    return new Promise((resolve, reject) => {
      if (FormProvider.ProcessRule(control, config)) {
        if (RegexValidator.isNotBlank(control.value)) {
          let testResult = false;
          for (var i = 0; i < files.length; i++) {
            let file = files.item(i);
            let type = file.type ? file.type.split('/') : [];
            testResult = type.length > 1 && type[0] == "image";
            if (!testResult) break;
            let image = new Image();
            config.minWidth = config.minWidth ? config.minWidth : 0;
            config.minHeight = config.minHeight ? config.minHeight : 0;
            image.onload = () => {
              testResult = image.width >= config.minWidth && image.height >= config.minHeight && image.width <= config.maxWidth && image.height <= config.maxHeight;
              if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, [image.width, image.height]));else resolve(ObjectMaker.null());
            };
            image.onerror = () => {
              resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
            };
            image.src = URL.createObjectURL(file);
          }
          if (!testResult) resolve(ObjectMaker.toJson(AnnotationTypes.image, config, []));
        }
      }
      return ObjectMaker.null();
    });
  };
}
function notEmptyValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (!RegexValidator.isNotBlank(control.value, true)) {
        return ObjectMaker.toJson(AnnotationTypes.notEmpty, config, []);
      }
    }
    return ObjectMaker.null();
  };
}
function checkIpV4(value) {
  let isValid = RegexValidator.isValid(value, RegExRule.ipV4);
  if (isValid) {
    const splitDots = value.split('.');
    for (let ipNum of splitDots) {
      isValid = ipNum <= 255;
      if (!isValid) break;
    }
  }
  return isValid;
}
function checkIpV6(value) {
  return RegexValidator.isValid(value, RegExRule.ipV6);
}
function ipValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control, IP_CONFIG);
    if (ValidatorValueChecker.pass(control, config)) {
      let values = config.isCidr ? control.value.split('/') : [control.value];
      var isValid = config.version == IpVersion.V4 ? checkIpV4(values[0]) : config.version == IpVersion.V6 ? checkIpV6(values[0]) : checkIpV4(values[0]) || checkIpV6(values[0]);
      if (config.isCidr && isValid) {
        isValid = values.length > 1 ? config.version == IpVersion.V4 ? RegexValidator.isValid(values[1], RegExRule.cidrV4) : config.version == IpVersion.V6 ? RegexValidator.isValid(values[1], RegExRule.cidrV6) : RegexValidator.isValid(values[1], RegExRule.cidrV4) || RegexValidator.isValid(values[1], RegExRule.cidrV6) : false;
      }
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.ip, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function cusipValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      var controlValue = control.value.toUpperCase();
      let isValid = RegexValidator.isValid(controlValue, RegExRule.cusip);
      if (isValid) {
        let numericValues = controlValue.split("").map(value => {
          var charCode = value.charCodeAt(0);
          return charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0) ? charCode - "A".charCodeAt(0) + 10 : value;
        });
        let totalCount = 0;
        for (var i = 0; i < numericValues.length - 1; i++) {
          var numericValue = parseInt(numericValues[i], 10);
          if (i % 2 !== 0) {
            numericValue *= 2;
          }
          if (numericValue > 9) {
            numericValue -= 9;
          }
          totalCount += numericValue;
        }
        totalCount = (10 - totalCount % 10) % 10;
        isValid = totalCount == numericValues[numericValues.length - 1];
      }
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.cusip, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function gridValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let controlValue = control.value.toUpperCase();
      var isValid = RegexValidator.isValid(controlValue, RegExRule.grid);
      if (isValid) {
        controlValue = controlValue.replace(/\s/g, '').replace(/-/g, '');
        if ('GRID:' === controlValue.substr(0, 5)) {
          controlValue = controlValue.substr(5);
        }
        let alphaNums = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var alphaNumLength = alphaNums.length,
          length = controlValue.length,
          check = Math.floor(alphaNumLength / 2);
        for (var i = 0; i < length; i++) {
          check = ((check || alphaNumLength) * 2 % (alphaNumLength + 1) + alphaNums.indexOf(controlValue.charAt(i))) % alphaNumLength;
        }
        isValid = check === 1;
      }
      if (!isValid) return ObjectMaker.toJson(AnnotationTypes.grid, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function dateValidator(configModel) {
  return control => {
    return validateDate(control, configModel, AnnotationTypes.date);
  };
}
function runCondition(leftValue, rightValue, operator) {
  let result = false;
  switch (operator) {
    case OPERATORS.lessThan:
    case OPERATORS.greaterThan:
      result = leftValue > rightValue;
      break;
    case OPERATORS.lessThanEqualTo:
    case OPERATORS.greaterThanEqualTo:
      result = leftValue >= rightValue;
      break;
  }
  return result;
}
function isValid(control, config) {
  return config.allowSeconds ? RegexValidator.isValid(control.value, RegExRule.timeWithSeconds) : RegexValidator.isValid(control.value, RegExRule.time);
}
function getTime(value) {
  let splitTime = value ? value.split(':') : [];
  return new Date(1970, 0, 1, splitTime[0] ? splitTime[0] : 0, splitTime[1] ? splitTime[1] : 0, splitTime[2] ? splitTime[2] : 0).getTime();
}
function timeChecker(control, config, operationType) {
  config = getConfigObject(config, control);
  if (FormProvider.ProcessRule(control, config)) {
    if (RegexValidator.isNotBlank(control.value)) {
      if (isValid(control, config)) {
        let crossFormControl = config.fieldName ? ApplicationUtil.getFormControl(config.fieldName, control) : undefined;
        let crossControlValue = crossFormControl ? getTime(crossFormControl.value) : getTime(config.value);
        let currentControlValue = getTime(control.value);
        let isValid = operationType == AnnotationTypes.minTime ? runCondition(currentControlValue, crossControlValue, config.operator || OPERATORS.greaterThanEqualTo) : runCondition(crossControlValue, currentControlValue, config.operator || OPERATORS.lessThanEqualTo);
        let additionalValue = {
          [operationType == AnnotationTypes.minTime ? "min" : "max"]: crossControlValue
        };
        if (!isValid) return ObjectMaker.toJson(operationType, config, [control.value], additionalValue);
      } else return ObjectMaker.toJson(operationType, config, [control.value]);
    }
  }
  return ObjectMaker.null();
}
function minTimeValidator(configModel) {
  return control => {
    return timeChecker(control, configModel, AnnotationTypes.minTime);
  };
}
function maxTimeValidator(configModel) {
  return control => {
    return timeChecker(control, configModel, AnnotationTypes.maxTime);
  };
}
function requiredTrueValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (FormProvider.ProcessRule(control, config)) {
      if (control.value !== true) {
        return ObjectMaker.toJson(AnnotationTypes.requiredTrue, config, []);
      }
    }
    return ObjectMaker.null();
  };
}
function maskValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (!control[VALIDATOR_CONFIG$2] || !control[VALIDATOR_CONFIG$2][AnnotationTypes.mask]) ApplicationUtil.configureControl(control, config, AnnotationTypes.mask);
    return null;
  };
}
const IBAN_COUNTRY_CODE_REGEX = {
  AD: /^(AD[0-9]{2})\d{8}[A-Z0-9]{12}$/,
  AE: /^(AE[0-9]{2})\d{3}\d{16}$/,
  AL: /^(AL[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  AT: /^(AT[0-9]{2})\d{16}$/,
  AZ: /^(AZ[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  BA: /^(BA[0-9]{2})\d{16}$/,
  BE: /^(BE[0-9]{2})\d{12}$/,
  BG: /^(BG[0-9]{2})[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
  BH: /^(BH[0-9]{2})[A-Z]{4}[A-Z0-9]{14}$/,
  BR: /^(BR[0-9]{2})\d{23}[A-Z]{1}[A-Z0-9]{1}$/,
  BY: /^(BY[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  CH: /^(CH[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  CR: /^(CR[0-9]{2})\d{18}$/,
  CY: /^(CY[0-9]{2})\d{8}[A-Z0-9]{16}$/,
  CZ: /^(CZ[0-9]{2})\d{20}$/,
  DE: /^(DE[0-9]{2})\d{18}$/,
  DK: /^(DK[0-9]{2})\d{14}$/,
  DO: /^(DO[0-9]{2})[A-Z]{4}\d{20}$/,
  EE: /^(EE[0-9]{2})\d{16}$/,
  EG: /^(EG[0-9]{2})\d{25}$/,
  ES: /^(ES[0-9]{2})\d{20}$/,
  FI: /^(FI[0-9]{2})\d{14}$/,
  FO: /^(FO[0-9]{2})\d{14}$/,
  FR: /^(FR[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  GB: /^(GB[0-9]{2})[A-Z]{4}\d{14}$/,
  GE: /^(GE[0-9]{2})[A-Z0-9]{2}\d{16}$/,
  GI: /^(GI[0-9]{2})[A-Z]{4}[A-Z0-9]{15}$/,
  GL: /^(GL[0-9]{2})\d{14}$/,
  GR: /^(GR[0-9]{2})\d{7}[A-Z0-9]{16}$/,
  GT: /^(GT[0-9]{2})[A-Z0-9]{4}[A-Z0-9]{20}$/,
  HR: /^(HR[0-9]{2})\d{17}$/,
  HU: /^(HU[0-9]{2})\d{24}$/,
  IE: /^(IE[0-9]{2})[A-Z0-9]{4}\d{14}$/,
  IL: /^(IL[0-9]{2})\d{19}$/,
  IQ: /^(IQ[0-9]{2})[A-Z]{4}\d{15}$/,
  IR: /^(IR[0-9]{2})0\d{2}0\d{18}$/,
  IS: /^(IS[0-9]{2})\d{22}$/,
  IT: /^(IT[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  JO: /^(JO[0-9]{2})[A-Z]{4}\d{22}$/,
  KW: /^(KW[0-9]{2})[A-Z]{4}[A-Z0-9]{22}$/,
  KZ: /^(KZ[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LB: /^(LB[0-9]{2})\d{4}[A-Z0-9]{20}$/,
  LC: /^(LC[0-9]{2})[A-Z]{4}[A-Z0-9]{24}$/,
  LI: /^(LI[0-9]{2})\d{5}[A-Z0-9]{12}$/,
  LT: /^(LT[0-9]{2})\d{16}$/,
  LU: /^(LU[0-9]{2})\d{3}[A-Z0-9]{13}$/,
  LV: /^(LV[0-9]{2})[A-Z]{4}[A-Z0-9]{13}$/,
  MC: /^(MC[0-9]{2})\d{10}[A-Z0-9]{11}\d{2}$/,
  MD: /^(MD[0-9]{2})[A-Z0-9]{20}$/,
  ME: /^(ME[0-9]{2})\d{18}$/,
  MK: /^(MK[0-9]{2})\d{3}[A-Z0-9]{10}\d{2}$/,
  MR: /^(MR[0-9]{2})\d{23}$/,
  MT: /^(MT[0-9]{2})[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
  MU: /^(MU[0-9]{2})[A-Z]{4}\d{19}[A-Z]{3}$/,
  NL: /^(NL[0-9]{2})[A-Z]{4}\d{10}$/,
  NO: /^(NO[0-9]{2})\d{11}$/,
  PK: /^(PK[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  PL: /^(PL[0-9]{2})\d{24}$/,
  PS: /^(PS[0-9]{2})[A-Z0-9]{4}\d{21}$/,
  PT: /^(PT[0-9]{2})\d{21}$/,
  QA: /^(QA[0-9]{2})[A-Z]{4}[A-Z0-9]{21}$/,
  RO: /^(RO[0-9]{2})[A-Z]{4}[A-Z0-9]{16}$/,
  RS: /^(RS[0-9]{2})\d{18}$/,
  SA: /^(SA[0-9]{2})\d{2}[A-Z0-9]{18}$/,
  SC: /^(SC[0-9]{2})[A-Z]{4}\d{20}[A-Z]{3}$/,
  SE: /^(SE[0-9]{2})\d{20}$/,
  SI: /^(SI[0-9]{2})\d{15}$/,
  SK: /^(SK[0-9]{2})\d{20}$/,
  SM: /^(SM[0-9]{2})[A-Z]{1}\d{10}[A-Z0-9]{12}$/,
  SV: /^(SV[0-9]{2})[A-Z0-9]{4}\d{20}$/,
  TL: /^(TL[0-9]{2})\d{19}$/,
  TN: /^(TN[0-9]{2})\d{20}$/,
  TR: /^(TR[0-9]{2})\d{5}[A-Z0-9]{17}$/,
  UA: /^(UA[0-9]{2})\d{6}[A-Z0-9]{19}$/,
  VA: /^(VA[0-9]{2})\d{18}$/,
  VG: /^(VG[0-9]{2})[A-Z0-9]{4}\d{16}$/,
  XK: /^(XK[0-9]{2})\d{16}$/
};
function hasValidIbanFormat(value, countryCode) {
  const strippedStr = value.replace(/[\s\-]+/gi, '').toUpperCase();
  const isoCountryCode = countryCode || strippedStr.slice(0, 2).toUpperCase();
  return isoCountryCode in IBAN_COUNTRY_CODE_REGEX && IBAN_COUNTRY_CODE_REGEX[isoCountryCode].test(strippedStr);
}
function hasValidIbanChecksum(str) {
  const strippedStr = str.replace(/[^A-Z0-9]+/gi, '').toUpperCase(); // Keep only digits and A-Z latin alphabetic
  const rearranged = strippedStr.slice(4) + strippedStr.slice(0, 4);
  const alphaCapsReplacedWithDigits = rearranged.replace(/[A-Z]/g, char => char.charCodeAt(0) - 55);
  const remainder = alphaCapsReplacedWithDigits.match(/\d{1,7}/g).reduce((acc, value) => Number(acc + value) % 97, '');
  return remainder === 1;
}
function ibanValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      if (!(hasValidIbanFormat(control.value, config.countryCode) && hasValidIbanChecksum(control.value))) return ObjectMaker.toJson(AnnotationTypes.iban, config, [control.value, config.countryCode]);
    }
    return ObjectMaker.null();
  };
}
const APP_VALIDATORS = {
  "alphaNumeric": alphaNumericValidator,
  "alpha": alphaValidator,
  "compare": compareValidator,
  "email": emailValidator,
  "hexColor": hexColorValidator,
  "lowerCase": lowercaseValidator,
  "maxDate": maxDateValidator,
  "maxNumber": maxNumberValidator,
  "minDate": minDateValidator,
  "minNumber": minNumberValidator,
  "contains": containsValidator,
  "upperCase": uppercaseValidator,
  "maxLength": maxLengthValidator,
  "minLength": minLengthValidator,
  "password": passwordValidator,
  "range": rangeValidator,
  "required": requiredValidator,
  "creditCard": creditCardValidator,
  "digit": digitValidator,
  "pattern": patternValidator,
  "time": timeValidator,
  "url": urlValidator,
  "json": jsonValidator,
  "greaterThan": greaterThanValidator,
  "greaterThanEqualTo": greaterThanEqualToValidator,
  "lessThan": lessThanValidator,
  "lessThanEqualTo": lessThanEqualToValidator,
  "choice": choiceValidator,
  "different": differentValidator,
  "numeric": numericValidator,
  "even": evenValidator,
  "odd": oddValidator,
  "factor": factorValidator,
  "leapYear": leapYearValidator,
  "allOf": allOfValidator,
  "oneOf": oneOfValidator,
  "noneOf": noneOfValidator,
  "mac": macValidator,
  "ascii": asciiValidator,
  "dataUri": dataUriValidator,
  "port": portValidator,
  "latLong": latLongValidator,
  "extension": extensionValidator,
  "fileSize": fileSizeValidator,
  "endsWith": endsWithValidator,
  "startsWith": startsWithValidator,
  "primeNumber": primeNumberValidator,
  "latitude": latitudeValidator,
  "longitude": longitudeValidator,
  "compose": composeValidator,
  "rule": ruleValidator,
  "file": fileValidator,
  "unique": uniqueValidator,
  "image": imageValidator,
  "notEmpty": notEmptyValidator,
  "ip": ipValidator,
  "cusip": cusipValidator,
  "grid": gridValidator,
  "date": dateValidator,
  "minTime": minTimeValidator,
  "maxTime": maxTimeValidator,
  "requiredTrue": requiredTrueValidator,
  "mask": maskValidator,
  "iban": ibanValidator
};
function baseAsyncValidator(configModel, validatorName) {
  return control => {
    configModel = configModel || {};
    if (configModel.validatorConfig) {
      if (FormProvider.ProcessRule(control, configModel)) {
        return configModel.validatorConfig.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resolveConfig(configModel, validatorName, control)));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
    } else return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(resolveConfig(configModel, validatorName, control)(configModel));
  };
}
function resolveConfig(configModel, validatorName, control) {
  return config => {
    let configClone = {
      ...configModel,
      ...config,
      ...{
        expressionProcessed: true
      }
    };
    return APP_VALIDATORS[validatorName](configClone)(control);
  };
}
function alpha(config) {
  return baseDecoratorFunction(AnnotationTypes.alpha, config);
}
function alphaAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.alpha, [baseAsyncValidator(config, AnnotationTypes.alpha)], true);
}
function alphaNumeric(config) {
  return baseDecoratorFunction(AnnotationTypes.alphaNumeric, config);
}
function alphaNumericAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.alphaNumeric, [baseAsyncValidator(config, AnnotationTypes.alphaNumeric)], true);
}
function compare(config) {
  return baseDecoratorFunction(AnnotationTypes.compare, config);
}
function contains(config) {
  return baseDecoratorFunction(AnnotationTypes.contains, config);
}
function containsAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.contains, [baseAsyncValidator(config, AnnotationTypes.contains)], true);
}
function creditCard(config) {
  return baseDecoratorFunction(AnnotationTypes.creditCard, config);
}
function creditCardAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.creditCard, [baseAsyncValidator(config, AnnotationTypes.creditCard)], true);
}
function digit(config) {
  return baseDecoratorFunction(AnnotationTypes.digit, config);
}
function email(config) {
  return baseDecoratorFunction(AnnotationTypes.email, config);
}
function hexColor(config) {
  return baseDecoratorFunction(AnnotationTypes.hexColor, config);
}
function lowerCase(config) {
  return baseDecoratorFunction(AnnotationTypes.lowerCase, config);
}
function maxDate(config) {
  return baseDecoratorFunction(AnnotationTypes.maxDate, config);
}
function maxDateAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.maxDate, [baseAsyncValidator(config, AnnotationTypes.maxDate)], true);
}
function maxLength(config) {
  return baseDecoratorFunction(AnnotationTypes.maxLength, config);
}
function maxLengthAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.maxLength, [baseAsyncValidator(config, AnnotationTypes.maxLength)], true);
}
function minDate(config) {
  return baseDecoratorFunction(AnnotationTypes.minDate, config);
}
function minDateAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.minDate, [baseAsyncValidator(config, AnnotationTypes.minDate)], true);
}
function maxNumber(config) {
  return baseDecoratorFunction(AnnotationTypes.maxNumber, config);
}
function maxNumberAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.maxNumber, [baseAsyncValidator(config, AnnotationTypes.maxNumber)], true);
}
function minLength(config) {
  return baseDecoratorFunction(AnnotationTypes.minLength, config);
}
function minLengthAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.minLength, [baseAsyncValidator(config, AnnotationTypes.minLength)], true);
}
function minNumber(config) {
  return baseDecoratorFunction(AnnotationTypes.minNumber, config);
}
function minNumberAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.minNumber, [baseAsyncValidator(config, AnnotationTypes.minNumber)], true);
}
function password(config) {
  return baseDecoratorFunction(AnnotationTypes.password, config);
}
function passwordAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.password, [baseAsyncValidator(config, AnnotationTypes.password)], true);
}
function pattern(config) {
  return baseDecoratorFunction(AnnotationTypes.pattern, config);
}
function patternAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.pattern, [baseAsyncValidator(config, AnnotationTypes.pattern)], true);
}
function propArray(entity, config) {
  return function (target, propertyKey, parameterIndex) {
    var propertyInfo = {
      name: propertyKey,
      propertyType: ARRAY_PROPERTY,
      entity: entity,
      dataPropertyName: config ? config.name : undefined,
      entityProvider: config ? config.entityProvider : undefined,
      arrayConfig: config ? {
        allowMaxIndex: config.allowMaxIndex,
        messageKey: config.messageKey,
        createBlank: config.createBlank
      } : undefined
    };
    defaultContainer.addProperty(target.constructor, propertyInfo);
  };
}
function propObject(entity, config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.initPropertyObject(propertyKey, OBJECT_PROPERTY, entity, target, config);
  };
}
function prop(config) {
  return function (target, propertyKey, parameterIndex) {
    var propertyInfo = {
      name: propertyKey,
      propertyType: PROPERTY,
      dataPropertyName: config ? config.name : undefined,
      defaultValue: config ? config.defaultValue : undefined,
      ignore: config ? config.ignore : undefined,
      isPrimaryKey: config ? config.isPrimaryKey : undefined,
      messageNexus: config ? config.messageNexus : undefined
    };
    defaultContainer.addProperty(target.constructor, propertyInfo);
  };
}
function range(config) {
  return baseDecoratorFunction(AnnotationTypes.range, config);
}
function rangeAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.range, [baseAsyncValidator(config, AnnotationTypes.range)], true);
}
function required(config) {
  return baseDecoratorFunction(AnnotationTypes.required, config);
}
function upperCase(config) {
  return baseDecoratorFunction(AnnotationTypes.upperCase, config);
}
function time(config) {
  return baseDecoratorFunction(AnnotationTypes.time, config);
}
function timeAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.time, [baseAsyncValidator(config, AnnotationTypes.time)], true);
}
function url(config) {
  return baseDecoratorFunction(AnnotationTypes.url, config);
}
function urlAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.url, [baseAsyncValidator(config, AnnotationTypes.url)], true);
}
function json(config) {
  return baseDecoratorFunction(AnnotationTypes.json, config);
}
function greaterThan(config) {
  return baseDecoratorFunction(AnnotationTypes.greaterThan, config);
}
function greaterThanAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.greaterThan, [baseAsyncValidator(config, AnnotationTypes.greaterThan)], true);
}
function greaterThanEqualTo(config) {
  return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, config);
}
function greaterThanEqualToAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.greaterThanEqualTo, [baseAsyncValidator(config, AnnotationTypes.greaterThanEqualTo)], true);
}
function lessThanEqualTo(config) {
  return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, config);
}
function lessThanEqualToAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.lessThanEqualTo, [baseAsyncValidator(config, AnnotationTypes.lessThanEqualTo)], true);
}
function lessThan(config) {
  return baseDecoratorFunction(AnnotationTypes.lessThan, config);
}
function lessThanAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.lessThan, [baseAsyncValidator(config, AnnotationTypes.lessThan)], true);
}
function choice(config) {
  return baseDecoratorFunction(AnnotationTypes.choice, config);
}
function choiceAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.choice, [baseAsyncValidator(config, AnnotationTypes.choice)], true);
}
function different(config) {
  return baseDecoratorFunction(AnnotationTypes.different, config);
}
function numeric(config) {
  return baseDecoratorFunction(AnnotationTypes.numeric, config);
}
function numericAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.numeric, [baseAsyncValidator(config, AnnotationTypes.numeric)], true);
}
function even(config) {
  return baseDecoratorFunction(AnnotationTypes.even, config);
}
function odd(config) {
  return baseDecoratorFunction(AnnotationTypes.odd, config);
}
function factor(config) {
  return baseDecoratorFunction(AnnotationTypes.factor, config);
}
function factorAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.factor, [baseAsyncValidator(config, AnnotationTypes.factor)], true);
}
function leapYear(config) {
  return baseDecoratorFunction(AnnotationTypes.leapYear, config);
}
function allOf(config) {
  return baseDecoratorFunction(AnnotationTypes.allOf, config);
}
function allOfAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.allOf, [baseAsyncValidator(config, AnnotationTypes.allOf)], true);
}
function oneOf(config) {
  return baseDecoratorFunction(AnnotationTypes.oneOf, config);
}
function oneOfAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.oneOf, [baseAsyncValidator(config, AnnotationTypes.oneOf)], true);
}
function noneOf(config) {
  return baseDecoratorFunction(AnnotationTypes.noneOf, config);
}
function noneOfAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.noneOf, [baseAsyncValidator(config, AnnotationTypes.noneOf)], true);
}
function mac(config) {
  return baseDecoratorFunction(AnnotationTypes.mac, config);
}
function ascii(config) {
  return baseDecoratorFunction(AnnotationTypes.ascii, config);
}
function dataUri(config) {
  return baseDecoratorFunction(AnnotationTypes.dataUri, config);
}
function port(config) {
  return baseDecoratorFunction(AnnotationTypes.port, config);
}
function latLong(config) {
  return baseDecoratorFunction(AnnotationTypes.latLong, config);
}
function extension(config) {
  return baseDecoratorFunction(AnnotationTypes.extension, config);
}
function extensionAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.extension, [baseAsyncValidator(config, AnnotationTypes.extension)], true);
}
function fileSize(config) {
  return baseDecoratorFunction(AnnotationTypes.fileSize, config);
}
function fileSizeAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.fileSize, [baseAsyncValidator(config, AnnotationTypes.fileSize)], true);
}
function endsWith(config) {
  return baseDecoratorFunction(AnnotationTypes.endsWith, config);
}
function endsWithAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.endsWith, [baseAsyncValidator(config, AnnotationTypes.endsWith)], true);
}
function startsWith(config) {
  return baseDecoratorFunction(AnnotationTypes.startsWith, config);
}
function startsWithAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.startsWith, [baseAsyncValidator(config, AnnotationTypes.startsWith)], true);
}
function primeNumber(config) {
  return baseDecoratorFunction(AnnotationTypes.primeNumber, config);
}
function latitude(config) {
  return baseDecoratorFunction(AnnotationTypes.latitude, config);
}
function longitude(config) {
  return baseDecoratorFunction(AnnotationTypes.longitude, config);
}
function rule(config) {
  return baseDecoratorFunction(AnnotationTypes.rule, config);
}
function file(config) {
  return baseDecoratorFunction(AnnotationTypes.file, config);
}
function fileAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.file, [baseAsyncValidator(config, AnnotationTypes.file)], true);
}
function custom(config) {
  return baseDecoratorFunction(AnnotationTypes.custom, config);
}
function customAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.custom, [baseAsyncValidator(config, AnnotationTypes.custom)], true);
}
function unique(config) {
  return baseDecoratorFunction(AnnotationTypes.unique, config);
}
function image(config) {
  return baseDecoratorFunction(AnnotationTypes.image, config);
}
function imageAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.image, [baseAsyncValidator(config, AnnotationTypes.image)], true);
}
function notEmpty(config) {
  return baseDecoratorFunction(AnnotationTypes.notEmpty, config);
}
function async(validators) {
  return baseDecoratorFunction(AnnotationTypes.async, validators, true);
}
function cusip(config) {
  return baseDecoratorFunction(AnnotationTypes.cusip, config);
}
function grid(config) {
  return baseDecoratorFunction(AnnotationTypes.grid, config);
}
function date(config) {
  return baseDecoratorFunction(AnnotationTypes.date, config);
}
function dateAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.date, [baseAsyncValidator(config, AnnotationTypes.date)], true);
}
function disable(config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.disabled);
  };
}
function error(config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.error);
  };
}
function and(config) {
  return baseDecoratorFunction(AnnotationTypes.and, config);
}
function or(config) {
  return baseDecoratorFunction(AnnotationTypes.or, config);
}
function not(config) {
  return baseDecoratorFunction(AnnotationTypes.not, config);
}
function trim() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.trim);
  };
}
function ltrim() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.ltrim);
  };
}
function rtrim() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.rtrim);
  };
}
function blacklist(chars) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.blacklist, chars);
  };
}
function stripLow(keepNewLines) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.stripLow, keepNewLines);
  };
}
function toBoolean(strict) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toBoolean, strict);
  };
}
function toDouble() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDouble);
  };
}
function toFloat() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toFloat);
  };
}
function toInt(radix) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toInt, radix);
  };
}
function toString() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.string);
  };
}
function whitelist(chars) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.whitelist, chars);
  };
}
function toDate(config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.toDate, config);
  };
}
function escape() {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.escape);
  };
}
function prefix(text) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.prefix, text);
  };
}
function suffix(text) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.suffix, text);
  };
}
function model(config) {
  return function (target) {
    defaultContainer.addPropsConfig(target, config);
  };
}
function sanitize(config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addSanitizer(target, parameterIndex, propertyKey, DECORATORS.sanitize, config);
  };
}
function elementClass(config) {
  return function (target, propertyKey, parameterIndex) {
    defaultContainer.addDecoratorConfig(target, parameterIndex, propertyKey, config, DECORATORS.elementClass);
  };
}
function minTime(config) {
  return baseDecoratorFunction(AnnotationTypes.minTime, config);
}
function minTimeAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.minTime, [baseAsyncValidator(config, AnnotationTypes.minTime)], true);
}
function maxTime(config) {
  return baseDecoratorFunction(AnnotationTypes.maxTime, config);
}
function maxTimeAsync(config) {
  return baseDecoratorFunction(AnnotationTypes.maxTime, [baseAsyncValidator(config, AnnotationTypes.maxTime)], true);
}
function compose(config) {
  return baseDecoratorFunction(AnnotationTypes.compose, config);
}
function requiredTrue(config) {
  return baseDecoratorFunction(AnnotationTypes.requiredTrue, config);
}
function mask(config) {
  return baseDecoratorFunction(AnnotationTypes.mask, config);
}
function updateOn(config) {
  return baseDecoratorFunction(AnnotationTypes.updateOn, config);
}
class HtmlControlTemplateDirective {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
HtmlControlTemplateDirective.ɵfac = function HtmlControlTemplateDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || HtmlControlTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef));
};
HtmlControlTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: HtmlControlTemplateDirective,
  selectors: [["", "htmlControlTemplate", ""]],
  inputs: {
    type: [0, "htmlControlTemplate", "type"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](HtmlControlTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[htmlControlTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['htmlControlTemplate']
    }]
  });
})();
class BaseDirective {
  applyValidations(controls, model = null) {
    if (this.model) {
      let modelConfig = defaultContainer.get(model || this.model.constructor);
      if (modelConfig) {
        modelConfig.properties.forEach(property => {
          if (controls[property.name]) {
            switch (property.propertyType) {
              case PROPERTY:
                this.setValidatorConfig(controls[property.name], modelConfig, property);
                break;
              case OBJECT_PROPERTY:
                this.applyValidations(controls[property.name].controls, property.entity);
                break;
            }
          }
        });
      }
    }
  }
  setValidatorConfig(control, modelConfig, property) {
    let annotations = modelConfig.propertyAnnotations.filter(t => t.propertyName == property.name);
    annotations.forEach(annotation => {
      if (!control[TEMPLATE_VALIDATION_CONFIG]) control[TEMPLATE_VALIDATION_CONFIG] = {};
      ApplicationUtil.configureControl(control, annotation.config ? annotation.config : "", annotation.annotationType);
    });
  }
}
BaseDirective.ɵfac = function BaseDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BaseDirective)();
};
BaseDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BaseDirective,
  inputs: {
    model: "model"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive
  }], null, {
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
const DISABLED_EXPRESSION = "disableExpression";
function conditionalChangeValidator(conditionalValidationProps) {
  var timeOuts = [];
  var oldValue = undefined;
  var setTimeOut = (control, config) => {
    if (control[DISABLED_EXPRESSION]) runDisabledExpression(control, config);
    var timeOut = setTimeout(t => {
      clearTimeout(timeOut);
      control.updateValueAndValidity({
        emitEvent: false
      });
    }, 100);
  };
  return control => {
    let value = control.value;
    if (control.parent && oldValue != value) {
      const rootFormGroup = ApplicationUtil.getRootFormGroup(control);
      const parentFormGroup = control.parent;
      oldValue = value;
      timeOuts = [];
      let controlName = ApplicationUtil.getFormControlName(control);
      let disabledConfig = {
        [controlName]: value
      };
      conditionalValidationProps.forEach(t => {
        let a = control;
        if (t.indexOf("[]") != -1) {
          var splitText = t.split("[]");
          var formArray = rootFormGroup.get([splitText[0]]);
          if (formArray) formArray.controls.forEach(formGroup => {
            var abstractControl = formGroup.get(splitText[1]);
            if (abstractControl) {
              setTimeOut(abstractControl, disabledConfig);
            }
          });
        } else {
          let splitText = t.split('.');
          if (splitText.length > 1) {
            var control = null;
            t.split('.').forEach((name, index) => {
              control = index == 0 ? rootFormGroup.controls[name] : control.controls[name];
            });
          } else {
            control = parentFormGroup.controls[t];
          }
          if (control) {
            setTimeOut(control, disabledConfig);
          }
        }
      });
    }
    return ObjectMaker.null();
  };
}
function runDisabledExpression(control, config) {
  let isDisabled = FormProvider.ProcessRule(control, {
    conditionalExpression: control[DISABLED_EXPRESSION],
    disableConfig: config
  });
  if (isDisabled && !control.disabled) control.disable();else if (control.disabled) control.enable();
}
class RxwebFormDirective extends BaseDirective {
  constructor() {
    super(...arguments);
    this.clearTimeoutNumber = 0;
    this.validationRule = {};
  }
  ngAfterContentInit() {
    if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent == null) {
      this.expressionProcessor(this.formGroup.controls);
      this.setConditionalValidator(this.formGroup.controls);
    } else if (this.formGroup && !this.formGroup[MODEL] && this.formGroup.parent instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
      this.expressionProcessor(this.formGroup.controls);
      this.setConditionalValidator(this.formGroup.controls);
    } else if (this.ngForm) {
      this.configureModelValidations();
    }
  }
  configureModelValidations() {
    this.clearTimeoutNumber = setTimeout(() => {
      clearTimeout(this.clearTimeoutNumber);
      this.applyValidations(this.ngForm.form.controls);
      this.expressionProcessor(this.ngForm.form.controls);
      this.setConditionalValidator(this.ngForm.form.controls);
      this.updateValueAndValidity(this.ngForm.form.controls);
    }, 500);
  }
  updateValueAndValidity(controls) {
    Object.keys(controls).forEach(key => {
      if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) this.updateValueAndValidity(controls[key].controls);else if (controls[key] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) this.updateValueAndValidity(controls[key].controls);else controls[key].updateValueAndValidity();
    });
  }
  expressionProcessor(controls, rootFieldName = "") {
    Object.keys(controls).forEach(fieldName => {
      let formControl = controls[fieldName];
      if (formControl.validatorConfig) {
        Object.keys(AnnotationTypes).forEach(validatorName => {
          if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].disableExpression) {
            formControl["disableExpression"] = formControl.validatorConfig[validatorName].disableExpression;
            let columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].disableExpression);
            columns.forEach(t => {
              defaultContainer.setConditionalValueProp(this.validationRule, rootFieldName + t.propName, fieldName);
            });
          }
          if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].conditionalExpression) {
            let columns = Linq.expressionColumns(formControl.validatorConfig[validatorName].conditionalExpression);
            columns.forEach(t => {
              defaultContainer.setConditionalValueProp(this.validationRule, rootFieldName + t.propName, fieldName);
            });
          }
          if (formControl.validatorConfig[validatorName] && formControl.validatorConfig[validatorName].dynamicConfig) {
            let columns = Linq.dynamicConfigParser(formControl.validatorConfig[validatorName].dynamicConfig, fieldName);
            columns.forEach(t => {
              defaultContainer.setConditionalValueProp(this.validationRule, rootFieldName + t.propName, fieldName);
            });
          }
          if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.and || validatorName == AnnotationTypes.or || validatorName == AnnotationTypes.not)) {
            Object.keys(formControl.validatorConfig[validatorName].validation).forEach(t => {
              if (typeof formControl.validatorConfig[validatorName].validation[t] !== "boolean") defaultContainer.setLogicalConditional(this.validationRule, t, formControl.validatorConfig[validatorName].validation[t].fieldName, fieldName);
            });
          } else if (formControl.validatorConfig[validatorName] && (validatorName == AnnotationTypes.compare || validatorName == AnnotationTypes.greaterThan || validatorName == AnnotationTypes.greaterThanEqualTo || validatorName == AnnotationTypes.lessThan || validatorName == AnnotationTypes.lessThanEqualTo || validatorName == AnnotationTypes.different || validatorName == AnnotationTypes.factor || validatorName == AnnotationTypes.minTime || validatorName == AnnotationTypes.maxTime || validatorName == AnnotationTypes.creditCard && formControl.validatorConfig[validatorName].fieldName || (validatorName == AnnotationTypes.minDate || validatorName == AnnotationTypes.maxDate) && formControl.validatorConfig[validatorName].fieldName)) {
            defaultContainer.setConditionalValueProp(this.validationRule, formControl.validatorConfig[validatorName].fieldName, fieldName);
          }
        });
      } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup) {
        this.expressionProcessor(formControl.controls, `${fieldName}.`);
      } else if (formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        if (formControl.controls) formControl.controls.forEach((t, i) => {
          if (t.controls) this.expressionProcessor(t.controls, `${fieldName}[]`);
        });
      }
    });
  }
  setConditionalValidator(controls) {
    Object.keys(controls).forEach(fieldName => {
      if (this.validationRule.conditionalValidationProps && this.validationRule.conditionalValidationProps[fieldName]) {
        controls[fieldName][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(this.validationRule.conditionalValidationProps[fieldName]);
      } else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup && this.validationRule.conditionalObjectProps) {
        var fields = this.validationRule.conditionalObjectProps.filter(t => t.objectPropName == fieldName);
        let nestedFormGroup = controls[fieldName];
        let propWiseConditionalControls = {};
        fields.forEach(x => {
          if (!propWiseConditionalControls[x.propName]) propWiseConditionalControls[x.propName] = [];
          propWiseConditionalControls[x.propName].push(x.referencePropName);
        });
        Object.keys(propWiseConditionalControls).forEach(key => {
          nestedFormGroup.controls[key][CONDITIONAL_VALIDATOR] = conditionalChangeValidator(propWiseConditionalControls[key]);
        });
      } else if (controls[fieldName] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        //fix https://github.com/rxweb/rxweb/issues/274
        controls[fieldName].controls.forEach((t, i) => {
          if (t.controls == undefined) this.setConditionalValidator({
            [i]: t
          });else this.setConditionalValidator(t.controls);
        });
      }
    });
  }
  ngOnDestroy() {}
}
RxwebFormDirective.ɵfac = /* @__PURE__ */(() => {
  let ɵRxwebFormDirective_BaseFactory;
  return function RxwebFormDirective_Factory(__ngFactoryType__) {
    return (ɵRxwebFormDirective_BaseFactory || (ɵRxwebFormDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](RxwebFormDirective)))(__ngFactoryType__ || RxwebFormDirective);
  };
})();
RxwebFormDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: RxwebFormDirective,
  selectors: [["", "formGroup", ""], ["", "rxwebForm", ""]],
  inputs: {
    formGroup: "formGroup",
    ngForm: [0, "rxwebForm", "ngForm"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RxwebFormDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[formGroup],[rxwebForm]'
    }]
  }], null, {
    formGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    ngForm: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['rxwebForm']
    }]
  });
})();
class AsyncValidationDirective {
  validate(control) {
    if (this.async) return this.async(control);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
}
AsyncValidationDirective.ɵfac = function AsyncValidationDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AsyncValidationDirective)();
};
AsyncValidationDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: AsyncValidationDirective,
  selectors: [["", "ngModel", ""], ["", "formControlName", ""], ["", "formControl", ""]],
  inputs: {
    async: "async"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_ASYNC_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => AsyncValidationDirective),
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AsyncValidationDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ngModel],[formControlName],[formControl]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_ASYNC_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => AsyncValidationDirective),
        multi: true
      }]
    }]
  }], null, {
    async: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
const VALIDATOR_CONFIG$1 = "validatorConfig";
const FILE_VALIDATOR_NAMES = ["extension", "fileSize", "file"];
class FileControlDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.isProcessed = false;
    this.validators = [];
    this.onChange = _ => {};
    this.onTouched = () => {};
    this.element = elementRef.nativeElement;
  }
  onChangeCall(element) {
    let files = element.files;
    if (this.writeFile) this.onChange(files);else {
      if (files.length > 0) this.onChange(element.value);else this.onChange(undefined);
    }
  }
  writeValue(value) {}
  registerOnChange(invocation) {
    this.onChange = invocation;
  }
  registerOnTouched(invocation) {
    this.onTouched = invocation;
  }
  set extension(config) {
    this.pushValidator(FILE_VALIDATOR_NAMES[0], config);
  }
  set fileSize(config) {
    this.pushValidator(FILE_VALIDATOR_NAMES[1], config);
  }
  set file(config) {
    this.pushValidator(FILE_VALIDATOR_NAMES[2], config);
  }
  setConfig(control) {
    FILE_VALIDATOR_NAMES.forEach(t => {
      if (!this[t] && control[VALIDATOR_CONFIG$1] && control[VALIDATOR_CONFIG$1][t]) this[t] = control[VALIDATOR_CONFIG$1][t];
    });
    this.isProcessed = true;
  }
  pushValidator(validatorName, config) {
    if (config) this.validators.push(APP_VALIDATORS[validatorName](config));
  }
  validate(control) {
    if (!this.isProcessed) this.setConfig(control);
    var result = null;
    for (var validator of this.validators) {
      result = validator(control, this.element.files);
      if (result) break;
    }
    return result;
  }
}
FileControlDirective.ɵfac = function FileControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
FileControlDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: FileControlDirective,
  selectors: [["input", "type", "file"]],
  hostBindings: function FileControlDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FileControlDirective_change_HostBindingHandler($event) {
        return ctx.onChangeCall($event.target);
      })("blur", function FileControlDirective_blur_HostBindingHandler() {
        return ctx.onTouched();
      });
    }
  },
  inputs: {
    writeFile: "writeFile",
    extension: "extension",
    fileSize: "fileSize",
    file: "file"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
    useExisting: FileControlDirective,
    multi: true
  }, {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => FileControlDirective),
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FileControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: "input[type=file]",
      host: {
        "(change)": "onChangeCall($event.target)",
        "(blur)": "onTouched()"
      },
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALUE_ACCESSOR,
        useExisting: FileControlDirective,
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => FileControlDirective),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    writeFile: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    extension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    fileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    file: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
const VALIDATOR_CONFIG = "validatorConfig";
class ImageFileControlDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.isProcessed = false;
    this.element = elementRef.nativeElement;
  }
  set image(config) {
    this.imageValidation = APP_VALIDATORS.image(config);
  }
  setConfig(control) {
    let image = "image";
    if (!this[image] && control[VALIDATOR_CONFIG] && control[VALIDATOR_CONFIG][image]) this[image] = control[VALIDATOR_CONFIG][image];
    this.isProcessed = true;
  }
  validate(control) {
    if (!this.isProcessed) this.setConfig(control);
    if (this.imageValidation) {
      return this.imageValidation(control, this.element.files);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
  }
}
ImageFileControlDirective.ɵfac = function ImageFileControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ImageFileControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
ImageFileControlDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ImageFileControlDirective,
  selectors: [["input", "type", "file"]],
  inputs: {
    image: "image"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_ASYNC_VALIDATORS,
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => ImageFileControlDirective),
    multi: true
  }])]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ImageFileControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: "input[type=file]",
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_ASYNC_VALIDATORS,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => ImageFileControlDirective),
        multi: true
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }];
  }, {
    image: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
class ControlExpressionProcess {
  constructor() {
    this.controlConfig = {};
    this.isProcessed = false;
  }
  setModelConfig(control) {
    this.isProcessed = true;
    if (this.controlConfig && this.controlConfig.validatorConfig) {
      control[VALIDATOR_CONFIG$2] = this.controlConfig.validatorConfig;
      this.controlConfig = undefined;
    }
  }
}
ControlExpressionProcess.ɵfac = function ControlExpressionProcess_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ControlExpressionProcess)();
};
ControlExpressionProcess.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ControlExpressionProcess,
  inputs: {
    name: "name",
    formControlName: "formControlName"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ControlExpressionProcess, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive
  }], null, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
class BaseValidator extends ControlExpressionProcess {
  constructor() {
    super(...arguments);
    this.validators = [];
  }
  validation(control) {
    let result = null;
    for (let validator of this.validators) {
      result = validator(control);
      if (result) break;
    }
    if (!result && this.maskProvider) result = this.maskProvider.validate();
    return result;
  }
  setEventName() {
    var eventName = '';
    switch (this.element.tagName) {
      case INPUT:
      case TEXTAREA:
        eventName = this.element.type == CHECKBOX || this.element.type == RADIO || this.element.type == FILE ? CHANGE : INPUT;
        break;
      case SELECT:
        eventName = CHANGE;
        break;
    }
    this.eventName = eventName.toLowerCase();
  }
}
BaseValidator.ɵfac = /* @__PURE__ */(() => {
  let ɵBaseValidator_BaseFactory;
  return function BaseValidator_Factory(__ngFactoryType__) {
    return (ɵBaseValidator_BaseFactory || (ɵBaseValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](BaseValidator)))(__ngFactoryType__ || BaseValidator);
  };
})();
BaseValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: BaseValidator,
  inputs: {
    formControl: "formControl"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive
  }], null, {
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
const SIMPLE_EMAIL_VALIDATION = "simple-email-validation";
const ADVANCED_EMAIL_VALIDATION = "advanced-email-validation";
class MaskProvider {
  constructor(input, mask, renderer, formControl, config) {
    this.input = input;
    this.mask = mask;
    this.renderer = renderer;
    this.formControl = formControl;
    this.config = config;
    this.eventListeners = [];
    this.oldValue = '';
    this.type = 'text';
    this.slotChar = '_';
    this.autoClear = false;
    this.isInvalid = false;
    this.internalProcess = false;
    this.bind();
  }
  bind() {
    if (RegexValidator.isNotBlank(this.formControl.value)) this.input.value = this.formControl.value;
    this.tests = [];
    this.partialPosition = this.mask.length;
    this.len = this.mask.length;
    this.firstNonMaskPos = null;
    this.defs = {
      '9': '[0-9]',
      'a': '[A-Za-z]',
      '*': '[A-Za-z0-9]'
    };
    this.androidChrome = false;
    let maskTokens = this.mask.split('');
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c == '?') {
        this.len--;
        this.partialPosition = i;
      } else if (this.defs[c]) {
        this.tests.push(new RegExp(this.defs[c]));
        if (this.firstNonMaskPos === null) {
          this.firstNonMaskPos = this.tests.length - 1;
        }
        if (i < this.partialPosition) {
          this.lastRequiredNonMaskPos = this.tests.length - 1;
        }
      } else {
        this.tests.push(null);
      }
    }
    this.minLength = this.config.minLength ? this.lastRequiredNonMaskPos - (this.lastRequiredNonMaskPos - this.config.minLength) : this.lastRequiredNonMaskPos;
    this.buffer = [];
    for (let i = 0; i < maskTokens.length; i++) {
      let c = maskTokens[i];
      if (c != '?') {
        if (this.defs[c]) this.buffer.push(this.getPlaceholder(i));else this.buffer.push(c);
      }
    }
    this.defaultBuffer = this.buffer.join('');
    this.focusText = this.input.value;
    this.bindEvents();
    this.checkVal();
  }
  bindEvents() {
    this.eventListeners.push(this.renderer.listen(this.input, FOCUS, this.onFocus.bind(this)));
    this.eventListeners.push(this.renderer.listen(this.input, BLUR, this.onBlur.bind(this)));
    this.eventListeners.push(this.renderer.listen(this.input, KEY_DOWN, this.onKeyDown.bind(this)));
    this.eventListeners.push(this.renderer.listen(this.input, KEY_PRESS, this.onKeyPress.bind(this)));
    this.eventListeners.push(this.renderer.listen(this.input, "input", this.onInput.bind(this)));
    this.eventListeners.push(this.renderer.listen(this.input, PASTE, this.handleInputChange.bind(this)));
  }
  validate() {
    if (this.input.value && this.oldValue != this.input.value) {
      this.checkVal(true);
      this.isCompleted(null, true);
      this.oldValue = this.input.value;
    }
    let config = getConfigObject(this.config, this.formControl);
    if (RegexValidator.isNotBlank(this.getUnmaskedValue()) && FormProvider.ProcessRule(this.formControl, config)) {
      if (this.isInvalid) {
        return ObjectMaker.toJson(AnnotationTypes.mask, config, [this.formControl.value]);
      }
    }
    return ObjectMaker.null();
  }
  writeValue(value) {
    this.value = value;
    if (this.input) {
      if (this.value == undefined || this.value == null) {
        this.input.value = '';
      }
      this.checkVal();
    }
    this.updateFilledState();
  }
  caret(first, last) {
    let range, begin, end;
    if (!this.input.offsetParent || this.input !== document.activeElement) {
      return;
    }
    if (typeof first == 'number') {
      begin = first;
      end = typeof last === 'number' ? last : begin;
      if (this.input.setSelectionRange) {
        this.input.setSelectionRange(begin, end);
      } else if (this.input['createTextRange']) {
        range = this.input['createTextRange']();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', begin);
        range.select();
      }
    } else {
      if (this.input.setSelectionRange) {
        begin = this.input.selectionStart;
        end = this.input.selectionEnd;
      } else if (document['selection'] && document['selection'].createRange) {
        range = document['selection'].createRange();
        begin = 0 - range.duplicate().moveStart('character', -100000);
        end = begin + range.text.length;
      }
      return {
        begin: begin,
        end: end
      };
    }
  }
  isCompleted(lastRequiredNonMaskPos, isNotRunValidator) {
    let completed;
    lastRequiredNonMaskPos = lastRequiredNonMaskPos || this.lastRequiredNonMaskPos;
    for (let i = this.firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
      if (this.tests[i] && this.buffer[i] === this.getPlaceholder(i)) {
        return false;
      }
    }
    this.isInvalid = false;
    if (!isNotRunValidator) this.formControl.updateValueAndValidity();
    return true;
  }
  getPlaceholder(i) {
    if (i < this.slotChar.length) {
      return this.slotChar.charAt(i);
    }
    return this.slotChar.charAt(0);
  }
  seekNext(pos) {
    while (++pos < this.len && !this.tests[pos]);
    return pos;
  }
  seekPrev(pos) {
    while (--pos >= 0 && !this.tests[pos]);
    return pos;
  }
  shiftL(begin, end) {
    let i, j;
    if (begin < 0) {
      return;
    }
    for (i = begin, j = this.seekNext(end); i < this.len; i++) {
      if (this.tests[i]) {
        if (j < this.len && this.tests[i].test(this.buffer[j])) {
          this.buffer[i] = this.buffer[j];
          this.buffer[j] = this.getPlaceholder(j);
        } else {
          break;
        }
        j = this.seekNext(j);
      }
    }
    this.writeBuffer();
    this.caret(Math.max(this.firstNonMaskPos, begin));
  }
  shiftR(pos) {
    let i, c, j, t;
    for (i = pos, c = this.getPlaceholder(pos); i < this.len; i++) {
      if (this.tests[i]) {
        j = this.seekNext(i);
        t = this.buffer[i];
        this.buffer[i] = c;
        if (j < this.len && this.tests[j].test(t)) {
          c = t;
        } else {
          break;
        }
      }
    }
  }
  handleAndroidInput(e) {
    var curVal = this.input.value;
    var pos = this.caret();
    if (this.oldVal && this.oldVal.length && this.oldVal.length > curVal.length) {
      this.checkVal(true);
      while (pos.begin > 0 && !this.tests[pos.begin - 1]) pos.begin--;
      if (pos.begin === 0) {
        while (pos.begin < this.firstNonMaskPos && !this.tests[pos.begin]) pos.begin++;
      }
      this.caret(pos.begin, pos.begin);
    } else {
      var pos2 = this.checkVal(true);
      while (pos.begin < this.len && !this.tests[pos.begin]) pos.begin++;
      this.caret(pos.begin, pos.begin);
    }
    if (this.isCompleted()) {
      this.isInvalid = false;
    } else {
      this.isInvalid = true;
      this.formControl.updateValueAndValidity();
    }
  }
  onBlur(e) {
    this.focus = false;
    this.checkVal();
    this.updateModel(e);
    this.updateFilledState();
    if (this.input.value != this.focusText) {
      let event = document.createEvent('HTMLEvents');
      event.initEvent('change', true, false);
      this.input.dispatchEvent(event);
      let maskedValue = this.input.value;
      this.formControl.setValue(this.config.valueWithMask ? maskedValue : this.getUnmaskedValue());
      this.input.value = maskedValue;
    }
  }
  onKeyDown(e) {
    let k = e.which || e.keyCode,
      pos,
      begin,
      end;
    let iPhone = false;
    this.oldVal = this.input.value;
    let controlValid = this.config.minLength ? this.isCompleted(this.minLength + 1) : false;
    if (k === 8 || k === 46 || iPhone && k === 127) {
      pos = this.caret();
      begin = pos.begin;
      end = pos.end;
      if (end - begin === 0) {
        begin = k !== 46 ? this.seekPrev(begin) : end = this.seekNext(begin - 1);
        end = k === 46 ? this.seekNext(end) : end;
      }
      this.clearBuffer(begin, end);
      this.shiftL(begin, end - 1);
      this.setControlValue(e, false, controlValid);
      this.updateModel(e);
      e.preventDefault();
    } else if (k === 13) {
      this.onBlur(e);
      this.setControlValue(e, false, controlValid);
      this.updateModel(e);
    } else if (k === 27) {
      this.input.value = this.focusText;
      this.caret(0, this.checkVal());
      this.updateModel(e);
      this.setControlValue(e, false, controlValid);
      e.preventDefault();
    }
  }
  onKeyPress(e) {
    var k = e.which || e.keyCode,
      pos = this.caret(),
      p,
      c,
      next,
      completed;
    if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {
      return;
    } else if (k && k !== 13) {
      if (pos.end - pos.begin !== 0) {
        this.clearBuffer(pos.begin, pos.end);
        this.shiftL(pos.begin, pos.end - 1);
      }
      p = this.seekNext(pos.begin - 1);
      if (p < this.len) {
        c = String.fromCharCode(k);
        if (this.tests[p].test(c)) {
          this.shiftR(p);
          this.buffer[p] = c;
          this.writeBuffer();
          next = this.seekNext(p);
          this.caret(next);
          if (pos.begin <= this.lastRequiredNonMaskPos) {
            completed = this.isCompleted();
          }
        }
      }
      e.preventDefault();
    }
    this.updateModel(e);
    if (completed === undefined) completed = this.isCompleted();
    this.setControlValue(e, completed, this.config.minLength ? this.isCompleted(this.minLength) : false);
  }
  clearBuffer(start, end) {
    let i;
    for (i = start; i < end && i < this.len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.getPlaceholder(i);
      }
    }
  }
  writeBuffer() {
    this.input.value = this.buffer.join('');
  }
  checkVal(allow) {
    let test = this.input.value,
      lastMatch = -1,
      i,
      c,
      pos;
    for (i = 0, pos = 0; i < this.len; i++) {
      if (this.tests[i]) {
        this.buffer[i] = this.getPlaceholder(i);
        while (pos++ < test.length) {
          c = test.charAt(pos - 1);
          if (this.tests[i].test(c)) {
            this.buffer[i] = c;
            lastMatch = i;
            break;
          }
        }
        if (pos > test.length) {
          this.clearBuffer(i + 1, this.len);
          break;
        }
      } else {
        if (this.buffer[i] === test.charAt(pos)) {
          pos++;
        }
        if (i < this.partialPosition) {
          lastMatch = i;
        }
      }
    }
    if (allow) {
      this.writeBuffer();
    } else if (lastMatch + 1 < this.partialPosition && (!this.config.minLength || !(lastMatch >= this.minLength))) {
      if (this.autoClear || this.buffer.join('') === this.defaultBuffer) {
        this.isInvalid = true;
      } else {
        this.isInvalid = true;
        this.writeBuffer();
      }
    } else {
      this.writeBuffer();
      this.input.value = this.input.value.substring(0, lastMatch + 1);
    }
    return this.partialPosition ? i : this.firstNonMaskPos;
  }
  onFocus(event) {
    this.focus = true;
    clearTimeout(this.caretTimeoutId);
    let pos;
    this.focusText = this.input.value;
    pos = this.checkVal();
    this.caretTimeoutId = setTimeout(() => {
      if (this.input !== document.activeElement) {
        return;
      }
      this.writeBuffer();
      if (pos == this.mask.replace("?", "").length) {
        this.caret(0, pos);
      } else {
        this.caret(pos);
      }
      this.updateFilledState();
    }, 10);
  }
  onInput(event) {
    if (this.androidChrome) this.handleAndroidInput(event);else this.handleInputChange(event);
  }
  setControlValue(e, isValid, isValidControl) {
    this.isInvalid = isValidControl ? !isValidControl : !isValid;
    let value = this.input.value;
    let controlValue = '';
    if (!this.isInvalid) controlValue = this.config.valueWithMask ? value : this.getUnmaskedValue();
    this.formControl.setValue(controlValue);
    this.oldValue = this.input.value = value;
    if (!isValid) this.onFocus(e);
  }
  handleInputChange(event) {
    setTimeout(() => {
      var pos = this.checkVal(true);
      this.caret(pos);
      this.updateModel(event);
      this.setControlValue(event, this.isCompleted());
    }, 0);
  }
  getUnmaskedValue() {
    let unmaskedBuffer = [];
    for (let i = 0; i < this.buffer.length; i++) {
      let c = this.buffer[i];
      if (this.tests[i] && c != this.getPlaceholder(i)) {
        unmaskedBuffer.push(c);
      }
    }
    return unmaskedBuffer.join('');
  }
  updateModel(e) {}
  updateFilledState() {
    this.filled = this.input && this.input.value != '';
  }
  onDestroy() {
    let eventCount = this.eventListeners.length;
    for (var i = 0; i < eventCount; i++) {
      this.eventListeners[0]();
      this.eventListeners.splice(0, 1);
    }
    this.eventListeners = [];
  }
}
class DecimalProvider {
  constructor(decimalPipe, localeId) {
    this.decimalPipe = decimalPipe;
    this.localeId = localeId;
    this.decimalSeperator = ".";
    this.groupSeperator = ",";
    this.isSetConfig = false;
    this.decimalSeperator = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.getLocaleNumberSymbol)(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NumberSymbol.Decimal);
    ;
    this.groupSeperator = (0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.getLocaleNumberSymbol)(localeId, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NumberSymbol.Group);
    this.setSymbolInConfig();
  }
  replacer(value) {
    value = String(value);
    if (!this.isSetConfig) this.bindConfig();
    value = value.split(this.groupSeperator).join(BLANK);
    if (this.allowDecimalSymbol) value = value.replace(this.decimalSeperator, this.allowDecimalSymbol);
    var splitValue = value.split(this.decimalSeperator);
    value = splitValue.length > 1 && splitValue[1] && RegexValidator.isZero(splitValue[1]) ? splitValue[0] : value;
    return value;
  }
  transFormDecimal(value, digitsInfo, persistZero) {
    value = String(value);
    if (!value) {
      return value;
    }
    let transformedValue = this.decimalPipe.transform(value.replace(ReactiveFormConfig.number.groupSymbol, "").replace(this.decimalSeperator, "."), digitsInfo, this.localeId);
    if (persistZero && value.indexOf(this.decimalSeperator)) {
      let splitTransformed = transformedValue.split(".");
      let splitDigitsInfo = digitsInfo ? digitsInfo.split("-") : [];
      let digits = splitDigitsInfo.length > 1 ? parseInt(splitDigitsInfo[splitDigitsInfo.length - 1]) : 0;
      if (splitTransformed.length > 1 && splitDigitsInfo.length > 0 && digits !== 0 && splitTransformed[1].length !== digits) {
        let diff = digits - splitTransformed[1].length;
        for (let i = 0; i < diff; i++) {
          transformedValue += "0";
        }
      }
    }
    return transformedValue;
  }
  setSymbolInConfig() {
    ReactiveFormConfig.number = {
      decimalSymbol: this.decimalSeperator,
      groupSymbol: this.groupSeperator
    };
  }
  bindConfig() {
    if (ReactiveFormConfig.json) {
      if (ReactiveFormConfig.json.localeId) this.localeId = ReactiveFormConfig.json.localeId;
      if (ReactiveFormConfig.json.allowDecimalSymbol) this.allowDecimalSymbol = ReactiveFormConfig.json.allowDecimalSymbol;
    }
    this.isSetConfig = true;
  }
}
DecimalProvider.ɵfac = function DecimalProvider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DecimalProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID));
};
DecimalProvider.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DecimalProvider,
  factory: DecimalProvider.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](DecimalProvider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.LOCALE_ID]
      }]
    }];
  }, null);
})();
const NGMODEL_BINDING = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(() => RxFormControlDirective),
  multi: true
};
const ALLOW_VALIDATOR_WITHOUT_CONFIG = ['required', 'notEmpty', 'alpha', 'alphaNumeric', 'ascii', 'dataUri', 'digit', 'email', 'even', 'hexColor', 'json', 'latitude', 'latLong', 'leapYear', 'longitude', 'lowerCase', 'mac', 'odd', 'port', 'primeNumber', 'time', 'upperCase', 'url', 'unique', 'cusip', 'gird'];
const NUMERIC = "numeric";
const IS_FORMAT = "isFormat";
const DIGITS_INFO = "digitsInfo";
class RxFormControlDirective extends BaseValidator {
  constructor(elementRef, renderer, decimalProvider) {
    super();
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.decimalProvider = decimalProvider;
    this.eventListeners = [];
    this.isNumericSubscribed = false;
    this.isFocusCalled = false;
    this.isMasked = false;
    this.element = elementRef.nativeElement;
    this.setEventName();
  }
  set validationControls(value) {
    this.controls = value;
  }
  get validationControls() {
    return this.controls;
  }
  ngOnInit() {
    let validators = [];
    Object.keys(APP_VALIDATORS).forEach(validatorName => {
      if (this[`rx${validatorName}`] || ALLOW_VALIDATOR_WITHOUT_CONFIG.indexOf(validatorName) != -1 && this[`rx${validatorName}`] == BLANK) {
        validators.push(APP_VALIDATORS[validatorName](this[`rx${validatorName}`]));
        if (this.name && !(this.formControlName && this.formControl)) {
          ApplicationUtil.configureControl(this.controlConfig, this[`rx${validatorName}`], validatorName);
        }
      }
    });
    if (validators.length > 0) this.validators = validators;
    if (this.rxnumeric && (this.rxnumeric.isFormat || this.rxnumeric.digitsInfo)) {
      this.bindNumericElementEvent();
    }
  }
  blurEvent() {
    if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric)) {
      if (this.formControl.value !== null && this.formControl.value !== undefined) {
        let value = this.decimalProvider.transFormDecimal(this.formControl.value, this.rxnumeric.digitsInfo, this.rxnumeric.persistZero);
        value = !this.rxnumeric.isFormat ? this.decimalProvider.replacer(value) : value;
        this.setValueOnElement(value);
      }
      this.isFocusCalled = false;
    }
  }
  bindNumericElementEvent(config) {
    if (config) this.rxnumeric = config;
    let listener = this.renderer.listen(this.element, BLUR, this.blurEvent.bind(this));
    this.eventListeners.push(listener);
    listener = this.renderer.listen(this.element, FOCUS, event => {
      this.isFocusCalled = true;
      if (!(this.formControl && this.formControl.errors && this.formControl.errors.numeric) && this.formControl.value != null) {
        let value = this.decimalProvider.replacer(this.element.value);
        this.setValueOnElement(value);
      }
    });
    this.eventListeners.push(listener);
  }
  bindValueChangeEvent() {
    if (this.eventName != BLANK) {
      let listener = this.renderer.listen(this.element, this.eventName, () => {
        Object.keys(this.validationControls).forEach(fieldName => {
          this.validationControls[fieldName].updateValueAndValidity();
        });
      });
      this.eventListeners.push(listener);
    }
  }
  subscribeNumericFormatter() {
    if (this.formControl[VALIDATOR_CONFIG$2] && this.formControl[VALIDATOR_CONFIG$2][NUMERIC] && (this.formControl[VALIDATOR_CONFIG$2][NUMERIC][IS_FORMAT] || this.formControl[VALIDATOR_CONFIG$2][NUMERIC][DIGITS_INFO])) {
      if (!this.isNumericSubscribed) {
        this.bindNumericElementEvent(this.formControl[VALIDATOR_CONFIG$2][NUMERIC]);
        this.isNumericSubscribed = true;
      }
      if (!this.isFocusCalled && RegexValidator.isNotBlank(this.formControl.value)) {
        this.blurEvent();
      }
    }
  }
  subscribeMaskValidator() {
    if (this.formControl[VALIDATOR_CONFIG$2] && this.formControl[VALIDATOR_CONFIG$2]["mask"] && !this.isMasked) {
      let config = this.formControl[VALIDATOR_CONFIG$2]["mask"];
      this.maskProvider = new MaskProvider(this.element, config.mask, this.renderer, this.formControl, config);
      this.isMasked = true;
    }
  }
  setValueOnElement(value) {
    this.renderer.setProperty(this.element, ELEMENT_VALUE, value);
  }
  setTemplateValidators(control) {
    for (let validatorName in control[VALIDATOR_CONFIG$2]) {
      this[validatorName] = control[VALIDATOR_CONFIG$2][validatorName];
    }
    delete control[TEMPLATE_VALIDATION_CONFIG];
    delete control[VALIDATOR_CONFIG$2];
    this.ngOnInit();
  }
  updateOnElementClass(element) {
    var previousClassName = '';
    return function (className) {
      if (previousClassName) element.classList.remove(previousClassName);
      if (className) element.classList.add(className);
      previousClassName = className;
    };
  }
  setValidatorConfig(control) {
    if (!this.formControl) {
      this.formControl = control;
      let rxFormControl = this.formControl;
      if (rxFormControl.updateOnElementClass) rxFormControl.updateOnElementClass = this.updateOnElementClass(this.element);
    }
    this.subscribeMaskValidator();
    this.subscribeNumericFormatter();
    if (control[TEMPLATE_VALIDATION_CONFIG]) this.setTemplateValidators(control);
    if (control[CONDITIONAL_VALIDATOR]) {
      this.conditionalValidator = control[CONDITIONAL_VALIDATOR];
      delete control[CONDITIONAL_VALIDATOR];
    }
  }
  validate(control) {
    this.setValidatorConfig(control);
    if (this.conditionalValidator) this.conditionalValidator(control);
    if (!this.isProcessed) this.setModelConfig(control);
    return this.validators && this.validators.length > 0 || this.maskProvider ? this.validation(control) : null;
  }
  ngOnDestroy() {
    this.controls = undefined;
    let eventCount = this.eventListeners.length;
    for (var i = 0; i < eventCount; i++) {
      this.eventListeners[0]();
      this.eventListeners.splice(0, 1);
    }
    this.eventListeners = [];
    if (this.maskProvider) this.maskProvider.onDestroy();
  }
}
RxFormControlDirective.ɵfac = function RxFormControlDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RxFormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](DecimalProvider));
};
RxFormControlDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: RxFormControlDirective,
  selectors: [["", "ngModel", ""], ["", "formControlName", ""], ["", "formControl", ""]],
  inputs: {
    rxalpha: "rxalpha",
    rxalphaNumeric: "rxalphaNumeric",
    rxascii: "rxascii",
    rxcompare: "rxcompare",
    rxcompose: "rxcompose",
    rxcontains: "rxcontains",
    rxcreditCard: "rxcreditCard",
    rxdataUri: "rxdataUri",
    rxdifferent: "rxdifferent",
    rxdigit: "rxdigit",
    rxemail: "rxemail",
    rxendsWith: "rxendsWith",
    rxeven: "rxeven",
    rxextension: "rxextension",
    rxfactor: "rxfactor",
    rxfileSize: "rxfileSize",
    rxgreaterThanEqualTo: "rxgreaterThanEqualTo",
    rxgreaterThan: "rxgreaterThan",
    rxhexColor: "rxhexColor",
    rxjson: "rxjson",
    rxlatitude: "rxlatitude",
    rxlatLong: "rxlatLong",
    rxleapYear: "rxleapYear",
    rxlessThan: "rxlessThan",
    rxlessThanEqualTo: "rxlessThanEqualTo",
    rxlongitude: "rxlongitude",
    rxlowerCase: "rxlowerCase",
    rxmac: "rxmac",
    rxmaxDate: "rxmaxDate",
    rxmaxLength: "rxmaxLength",
    rxmaxNumber: "rxmaxNumber",
    rxminDate: "rxminDate",
    rxminLength: "rxminLength",
    rxminNumber: "rxminNumber",
    rxnumeric: "rxnumeric",
    rxodd: "rxodd",
    rxpassword: "rxpassword",
    rxport: "rxport",
    rxprimeNumber: "rxprimeNumber",
    rxrequired: "rxrequired",
    rxrange: "rxrange",
    rxrule: "rxrule",
    rxstartsWith: "rxstartsWith",
    rxtime: "rxtime",
    rxupperCase: "rxupperCase",
    rxurl: "rxurl",
    rxunique: "rxunique",
    rxnotEmpty: "rxnotEmpty",
    rxcusip: "rxcusip",
    rxgrid: "rxgrid",
    rxdate: "rxdate"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NGMODEL_BINDING]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RxFormControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[ngModel],[formControlName],[formControl]',
      providers: [NGMODEL_BINDING]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2
    }, {
      type: DecimalProvider
    }];
  }, {
    rxalpha: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxalphaNumeric: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxascii: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxcompare: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxcompose: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxcontains: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxcreditCard: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxdataUri: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxdifferent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxdigit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxemail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxendsWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxeven: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxextension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxfactor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxfileSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxgreaterThanEqualTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxgreaterThan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxhexColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxjson: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlatitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlatLong: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxleapYear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlessThan: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlessThanEqualTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlongitude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxlowerCase: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxmac: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxmaxDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxmaxLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxmaxNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxminDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxminLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxminNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxnumeric: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxodd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxpassword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxport: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxprimeNumber: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxrequired: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxrange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxrule: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxstartsWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxtime: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxupperCase: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxurl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxunique: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxnotEmpty: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxcusip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxgrid: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    rxdate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  });
})();
var UrlValidationType;
(function (UrlValidationType) {
  UrlValidationType[UrlValidationType["FQDN"] = 1] = "FQDN";
  UrlValidationType[UrlValidationType["LocalHost"] = 2] = "LocalHost";
  UrlValidationType[UrlValidationType["IntranetServer"] = 3] = "IntranetServer";
})(UrlValidationType || (UrlValidationType = {}));
class FormBuilderConfiguration {
  constructor(formBuilderConfiguration) {
    if (formBuilderConfiguration) for (var column in formBuilderConfiguration) this[column] = formBuilderConfiguration[column];
  }
}
class IAbstractControl extends _angular_forms__WEBPACK_IMPORTED_MODULE_0__.AbstractControl {}
class ControlHostDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef;
  }
  set portal(context) {
    if (context.templateRef) {
      if (this.view) {
        this.view.destroy();
        this.view = undefined;
      }
      this.view = this.viewContainerRef.createEmbeddedView(context.templateRef, context);
    }
  }
  ngOnDestroy() {
    if (this.view) this.view.destroy();
    if (this.viewContainerRef) this.viewContainerRef.clear();
  }
}
ControlHostDirective.ɵfac = function ControlHostDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ControlHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef));
};
ControlHostDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ControlHostDirective,
  selectors: [["", "controlHost", ""]],
  inputs: {
    portal: [0, "controlHost", "portal"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ControlHostDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
    args: [{
      selector: '[controlHost]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
    }];
  }, {
    portal: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
      args: ['controlHost']
    }]
  });
})();
class BaseFormBuilder {
  constructor() {}
  createInstance() {
    let instance = {};
    defaultContainer.modelIncrementCount = defaultContainer.modelIncrementCount + 1;
    let modelName = `RxWebModel${defaultContainer.modelIncrementCount}`;
    instance.constructor = Function(`"use strict";return(function ${modelName}(){ })`)();
    return instance;
  }
  createClassObject(model, formBuilderConfiguration, classInstance) {
    let instanceContainer = defaultContainer.get(model);
    let autoInstanceConfig = formBuilderConfiguration ? formBuilderConfiguration.autoInstanceConfig : undefined;
    if (!autoInstanceConfig) {
      return classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, []);
    } else {
      classInstance = classInstance && typeof classInstance != "function" ? classInstance : getInstance(model, autoInstanceConfig.arguments || []);
      if (autoInstanceConfig.objectPropInstanceConfig && autoInstanceConfig.objectPropInstanceConfig.length > 0) {
        autoInstanceConfig.objectPropInstanceConfig.forEach(t => {
          let objectProperty = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == OBJECT_PROPERTY)[0];
          if (objectProperty) {
            let data = classInstance[t.propertyName];
            classInstance[t.propertyName] = getInstance(objectProperty.entity, t.arguments || []);
            if (data) this.setObjectValue(data, classInstance[t.propertyName]);
          }
        });
      }
      if (autoInstanceConfig.arrayPropInstanceConfig && autoInstanceConfig.arrayPropInstanceConfig.length > 0) {
        autoInstanceConfig.arrayPropInstanceConfig.forEach(t => {
          let property = instanceContainer.properties.filter(property => property.name == t.propertyName && property.propertyType == ARRAY_PROPERTY)[0];
          if (property) {
            let data = classInstance[t.propertyName];
            classInstance[t.propertyName] = [];
            for (var i = 0; i < t.rowItems; i++) {
              let instance = getInstance(property.entity, t.arguments || []);
              if (data && data[i]) this.setObjectValue(data[i], instance);
              classInstance[t.propertyName].push(instance);
            }
          }
        });
      }
      return classInstance;
    }
  }
  updateObject(model, entityObject, formBuilderConfiguration) {
    let instanceContainer = instanceProvider(model);
    let classInstance = getInstance(model, []);
    if (instanceContainer) {
      instanceContainer.properties.forEach(t => {
        let entity = (t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY) && t.entity ? t.entity : formBuilderConfiguration && formBuilderConfiguration.genericEntities ? formBuilderConfiguration.genericEntities[t.name] : undefined;
        if (!entity && t.entityProvider) entity = t.entityProvider.call(entityObject);
        switch (t.propertyType) {
          case PROPERTY:
            classInstance[t.name] = this.getValue(entityObject, t, formBuilderConfiguration);
            break;
          case OBJECT_PROPERTY:
            let objectValue = this.getValue(entityObject, t, formBuilderConfiguration);
            if (objectValue) classInstance[t.name] = this.updateObject(entity, objectValue, formBuilderConfiguration);
            break;
          case ARRAY_PROPERTY:
            let arrayObjectValue = this.getValue(entityObject, t, formBuilderConfiguration);
            if (arrayObjectValue && Array.isArray(arrayObjectValue)) {
              classInstance[t.name] = [];
              for (let row of arrayObjectValue) {
                let instanceObject = this.updateObject(entity, row, formBuilderConfiguration);
                classInstance[t.name].push(instanceObject);
              }
            }
            break;
        }
      });
    }
    return classInstance;
  }
  instaceProvider(instanceFunc, entityObject) {
    return instanceProvider(instanceFunc, entityObject);
  }
  getDefaultValue(propertyInfo, value, formBuilderConfiguration) {
    let defaultValue = formBuilderConfiguration && formBuilderConfiguration.propsConfig && formBuilderConfiguration.propsConfig[propertyInfo.name] && formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue && !RegexValidator.isNotBlank(value) ? formBuilderConfiguration.propsConfig[propertyInfo.name].defaultValue : propertyInfo.defaultValue != undefined && !RegexValidator.isNotBlank(value) ? propertyInfo.defaultValue : value;
    return defaultValue;
  }
  sanitizeValue(instanceContainer, propertyName, value, entityObject, baseObject) {
    if (instanceContainer.sanitizers && instanceContainer.sanitizers[propertyName]) {
      for (let sanitizer of instanceContainer.sanitizers[propertyName]) value = SANITIZERS[sanitizer.name](value, sanitizer.config);
    }
    if (entityObject[propertyName] !== undefined && entityObject[propertyName] !== value) entityObject[propertyName] = value;
    if (baseObject[propertyName] !== undefined && baseObject[propertyName] !== value) baseObject[propertyName] = value;
    return value;
  }
  getValue(entityObject, propertyInfo, formBuilderConfiguration) {
    let propValue = propertyInfo.dataPropertyName ? entityObject[propertyInfo.dataPropertyName] : entityObject[propertyInfo.name];
    return this.getDefaultValue(propertyInfo, propValue, formBuilderConfiguration);
  }
  setObjectValue(entityObject, classInstance) {
    for (var column in entityObject) {
      classInstance[column] = entityObject[column];
    }
  }
}
function andValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let validatorNames = Object.keys(config.validation);
      let failed = false;
      for (var validatorName of validatorNames) {
        failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
        if (failed) break;
      }
      if (failed) return ObjectMaker.toJson(AnnotationTypes.and, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function orValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let validatorNames = Object.keys(config.validation);
      let failed = false;
      for (var validatorName of validatorNames) {
        failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
        if (!failed) break;
      }
      if (failed) return ObjectMaker.toJson(AnnotationTypes.or, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
function notValidator(configModel) {
  return control => {
    let config = getConfigObject(configModel, control);
    if (ValidatorValueChecker.pass(control, config)) {
      let validatorNames = Object.keys(config.validation);
      let failed = false;
      for (var validatorName of validatorNames) {
        failed = typeof config.validation[validatorName] == "boolean" ? APP_VALIDATORS[validatorName]()(control) : APP_VALIDATORS[validatorName](config.validation[validatorName])(control);
        if (!failed) break;
      }
      if (!failed) return ObjectMaker.toJson(AnnotationTypes.not, config, [control.value]);
    }
    return ObjectMaker.null();
  };
}
const LOGICAL_VALIDATORS = {
  and: andValidator,
  or: orValidator,
  not: notValidator
};
const ASYNC = "async";
const ENTITY_OBJECT = "entityObject";
class RxFormBuilder extends BaseFormBuilder {
  constructor() {
    super();
    this.conditionalObjectProps = [];
    this.conditionalValidationInstance = {};
    this.builderConfigurationConditionalObjectProps = [];
    this.formGroupPropOtherValidator = {};
    this.currentFormGroupPropOtherValidator = {};
    this.isNested = false;
    this.isGroupCalled = false;
    this.isNestedBinding = false;
  }
  getInstanceContainer(instanceFunc, entityObject) {
    return this.instaceProvider(instanceFunc, entityObject);
  }
  setValue(formGroup, object) {
    for (var col in object) {
      var control = formGroup.get([col]);
      control.setValue(object[col]);
      control.updateValueAndValidity();
    }
  }
  extractExpressions(fomrBuilderConfiguration) {
    if (fomrBuilderConfiguration && fomrBuilderConfiguration.dynamicValidation) {
      for (var property in fomrBuilderConfiguration.dynamicValidation) {
        for (var decorator in fomrBuilderConfiguration.dynamicValidation[property]) {
          if (fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression) {
            let columns = Linq.expressionColumns(fomrBuilderConfiguration.dynamicValidation[property][decorator].conditionalExpression);
            defaultContainer.addChangeValidation(this.conditionalValidationInstance, property, columns);
          }
        }
      }
    }
    return null;
  }
  addAsyncValidation(property, propertyValidators, propValidationConfig) {
    let asyncValidators = [];
    if (propertyValidators) {
      for (let propertyValidator of propertyValidators) {
        if (propertyValidator.isAsync) propertyValidator.config.forEach(t => {
          asyncValidators.push(t);
        });
      }
    }
    if (propValidationConfig && propValidationConfig[ASYNC]) {
      propValidationConfig[ASYNC].forEach(t => {
        asyncValidators.push(t);
      });
    }
    return asyncValidators;
  }
  addFormControl(property, propertyValidators, propValidationConfig, instance, entity) {
    let validators = [];
    let columns = [];
    if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name] || this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) {
      let props = [];
      if (instance.conditionalValidationProps && instance.conditionalValidationProps[property.name]) instance.conditionalValidationProps[property.name].forEach(t => props.push(t));
      if (this.conditionalValidationInstance.conditionalValidationProps && this.conditionalValidationInstance.conditionalValidationProps[property.name]) this.conditionalValidationInstance.conditionalValidationProps[property.name].forEach(t => props.push(t));
      validators.push(conditionalChangeValidator(props));
    }
    if (this.conditionalObjectProps.length > 0 || this.builderConfigurationConditionalObjectProps.length > 0) {
      let propConditions = [];
      if (this.conditionalObjectProps) propConditions = this.conditionalObjectProps.filter(t => t.propName == property.name);
      if (this.builderConfigurationConditionalObjectProps) this.builderConfigurationConditionalObjectProps.filter(t => t.propName == property.name).forEach(t => propConditions.push(t));
      propConditions.forEach(t => {
        if (t.referencePropName && columns.indexOf(t.referencePropName) == -1) columns.push(t.referencePropName);
      });
      if (columns.length > 0) validators.push(conditionalChangeValidator(columns));
    }
    for (let propertyValidator of propertyValidators) {
      if (!propertyValidator.isAsync) {
        let config = propertyValidator.config;
        if (property.messageNexus) config = config ? {
          ...{
            messageNexus: property.messageNexus
          },
          ...config
        } : {
          messageNexus: property.messageNexus
        };
        switch (propertyValidator.annotationType) {
          case AnnotationTypes.rule:
            validators.push(APP_VALIDATORS[propertyValidator.annotationType](config, entity));
            break;
          case AnnotationTypes.and:
          case AnnotationTypes.or:
          case AnnotationTypes.not:
            validators.push(LOGICAL_VALIDATORS[propertyValidator.annotationType](config));
            break;
          default:
            validators.push(APP_VALIDATORS[propertyValidator.annotationType](config));
            break;
        }
      }
    }
    if (propValidationConfig) this.additionalValidation(validators, propValidationConfig);
    if (this.currentFormGroupPropOtherValidator[property.name]) this.currentFormGroupPropOtherValidator[property.name].forEach(t => {
      validators.push(t);
    });
    return validators;
  }
  additionalValidation(validations, propValidationConfig) {
    for (var col in AnnotationTypes) {
      if (propValidationConfig[AnnotationTypes[col]] && col != "custom") {
        validations.push(APP_VALIDATORS[AnnotationTypes[col]](propValidationConfig[AnnotationTypes[col]]));
      } else if (col == AnnotationTypes.custom && propValidationConfig[AnnotationTypes[col]]) validations.push(propValidationConfig[col]);
    }
  }
  getEntity(object, formBuilderConfiguration, propertyName, isSameObjectConstructor = false) {
    if (formBuilderConfiguration && formBuilderConfiguration.genericEntities && formBuilderConfiguration.genericEntities[propertyName]) return formBuilderConfiguration.genericEntities[propertyName];
    return isSameObjectConstructor ? object.constructor : undefined;
  }
  getObjectPropertyInstance(object, propertyInfo, formBuilderConfiguration) {
    if (propertyInfo.propertyType == OBJECT_PROPERTY && object[propertyInfo.name]) return object[propertyInfo.name].constructor;else if (propertyInfo.propertyType == ARRAY_PROPERTY && object[propertyInfo.name] && object[propertyInfo.name].length > 0) return object[propertyInfo.name][0].constructor;
    return this.getEntity(object, formBuilderConfiguration, propertyInfo.name);
  }
  checkObjectPropAdditionalValidation(instanceContainer, object, formBuilderConfiguration) {
    var props = instanceContainer.properties.filter(t => t.propertyType == OBJECT_PROPERTY || t.propertyType == ARRAY_PROPERTY);
    props.forEach(t => {
      let entity = t.entity;
      if (!t.entity) entity = this.getObjectPropertyInstance(object, t, formBuilderConfiguration);
      if (entity) {
        let instance = this.getInstanceContainer(entity, null);
        if (instance && instance.conditionalValidationProps) {
          for (var key in instance.conditionalValidationProps) {
            var prop = instanceContainer.properties.filter(t => t.name == key)[0];
            if (prop) {
              if (!instanceContainer.conditionalValidationProps) instanceContainer.conditionalValidationProps = {};
              if (!instanceContainer.conditionalValidationProps[key]) instanceContainer.conditionalValidationProps[key] = [];
              instance.conditionalValidationProps[key].forEach(x => {
                if (t.propertyType != ARRAY_PROPERTY) instanceContainer.conditionalValidationProps[key].push([t.name, x].join('.'));else instanceContainer.conditionalValidationProps[key].push([t.name, x].join('[]'));
              });
            }
          }
        }
      }
    });
  }
  getObject(model, entityObject, formBuilderConfiguration) {
    let json = {};
    if (typeof model == FUNCTION_STRING) json.model = model;
    if (typeof model == FUNCTION_STRING && entityObject instanceof FormBuilderConfiguration) {
      json.entityObject = this.createClassObject(json.model, entityObject);
    }
    if (entityObject && !(entityObject instanceof FormBuilderConfiguration)) json.entityObject = entityObject;
    if (entityObject instanceof FormBuilderConfiguration && !formBuilderConfiguration) json.formBuilderConfiguration = entityObject;else if (!(entityObject instanceof FormBuilderConfiguration) && formBuilderConfiguration) {
      json.formBuilderConfiguration = formBuilderConfiguration;
      json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, json.entityObject);
    }
    if (!entityObject) {
      if (typeof model == OBJECT_STRING) json.model = model.constructor;
      json.entityObject = this.createClassObject(json.model, json.formBuilderConfiguration, model);
    } else if (model && entityObject instanceof FormBuilderConfiguration && typeof model == OBJECT_STRING) {
      json[MODEL] = model.constructor;
      json[ENTITY_OBJECT] = this.createClassObject(json.model, json.formBuilderConfiguration, model);
    }
    return json;
  }
  control(value, validators, asyncValidators) {
    return new RxFormControl(value, validators, asyncValidators, {}, {}, '', []);
  }
  array(values, validatorConfig) {
    let formArray = this.group({
      temp: values
    }, validatorConfig).get("temp");
    var formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder();
    return formBuilder.array(formArray.controls);
  }
  group(groupObject, validatorConfig) {
    let modelInstance = super.createInstance();
    let entityObject = {};
    this.formGroupPropOtherValidator = {};
    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
    this.createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig);
    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
    this.isGroupCalled = true;
    let formGroup = this.formGroup(modelInstance.constructor, entityObject, validatorConfig);
    this.isGroupCalled = false;
    this.formGroupPropOtherValidator = {};
    this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator;
    this.formGroupPropOtherValidator = {};
    return formGroup;
  }
  applyAllPropValidator(propName, validatorConfig, modelInstance) {
    if (validatorConfig && validatorConfig.applyAllProps) {
      if (!(validatorConfig.excludeProps && validatorConfig.excludeProps.length > 0 && validatorConfig.excludeProps.indexOf(propName) == -1)) {
        validatorConfig.applyAllProps.forEach(t => {
          if (t.name == RX_WEB_VALIDATOR) {
            t(propName, modelInstance);
          } else {
            if (!this.currentFormGroupPropOtherValidator[propName]) this.currentFormGroupPropOtherValidator[propName] = [];
            this.currentFormGroupPropOtherValidator[propName].push(t);
          }
        });
      }
    }
  }
  dynamicValidationPropCheck(propName, validatorConfig) {
    return validatorConfig == undefined ? true : !validatorConfig.dynamicValidationConfigurationPropertyName ? true : validatorConfig.dynamicValidationConfigurationPropertyName == propName ? false : true;
  }
  isNotObject(value) {
    return value instanceof Date || value === null || typeof value != OBJECT_STRING;
  }
  createValidatorFormGroup(groupObject, entityObject, modelInstance, validatorConfig) {
    for (var propName in groupObject) {
      var prop = groupObject[propName];
      if (prop instanceof Array && prop.length > 0 && this.isNotObject(prop[0])) {
        let propValidators = prop.length > 1 && prop[1] instanceof Array ? prop[1] : prop.length == 2 ? [prop[1]] : [];
        let propertyAdded = false;
        for (var i = 0; i < propValidators.length; i++) {
          if (propValidators[i].name == RX_WEB_VALIDATOR) {
            propValidators[i](propName, modelInstance);
            propertyAdded = true;
          } else {
            if (!this.currentFormGroupPropOtherValidator[propName]) this.currentFormGroupPropOtherValidator[propName] = [];
            this.currentFormGroupPropOtherValidator[propName].push(propValidators[i]);
          }
        }
        if (!propertyAdded) defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
          constructor: modelInstance
        });
        this.applyAllPropValidator(propName, validatorConfig, modelInstance);
      } else if (prop === null || prop === undefined || typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN$1 || prop instanceof Date) {
        defaultContainer.initPropertyObject(propName, PROPERTY, undefined, typeof modelInstance == OBJECT_STRING ? modelInstance : {
          constructor: modelInstance
        });
        this.applyAllPropValidator(propName, validatorConfig, modelInstance);
      } else if (prop instanceof Array) {
        if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
          entityObject[propName] = prop;
        } else {
          let propModelInstance = super.createInstance();
          if (typeof modelInstance == "function") modelInstance.constructor = modelInstance;
          defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, propModelInstance.constructor, modelInstance);
          entityObject[propName] = [];
          for (let row of prop) {
            let jObject = {};
            entityObject[propName].push(jObject);
            this.createValidatorFormGroup(row, jObject, propModelInstance.constructor, validatorConfig);
          }
        }
      } else if (typeof prop == OBJECT_STRING && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || prop instanceof RxFormControl)) {
        let formGroup = prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray ? prop.controls[0] : prop;
        if (!formGroup.model && (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || prop instanceof RxFormGroup)) {
          formGroup = this.group(formGroup.controls);
        }
        if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || prop instanceof RxFormGroup) {
          entityObject[propName] = prop;
          defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, formGroup.model, modelInstance);
        } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
          entityObject[propName] = prop;
          defaultContainer.initPropertyObject(propName, ARRAY_PROPERTY, formGroup.model, modelInstance);
        } else {
          if (this.dynamicValidationPropCheck(propName, validatorConfig)) {
            this.formGroupPropOtherValidator[propName] = {};
            this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[propName];
            let propModelInstance = super.createInstance();
            entityObject[propName] = {};
            entityObject[propName].constructor = propModelInstance.constructor;
            defaultContainer.initPropertyObject(propName, OBJECT_PROPERTY, entityObject[propName].constructor, modelInstance.constructor == Function ? {
              constructor: modelInstance
            } : modelInstance);
            let objectValidationConfig = this.getValidatorConfig(validatorConfig, groupObject, propName + ".");
            this.createValidatorFormGroup(groupObject[propName], entityObject[propName], entityObject[propName].constructor, objectValidationConfig);
          } else entityObject[propName] = groupObject[propName];
        }
      }
      if (typeof prop == STRING || typeof prop == NUMBER || typeof prop == BOOLEAN$1 || prop instanceof Date) {
        entityObject[propName] = prop;
      } else if (prop && prop.length > 0 && this.isNotObject(prop[0]) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || prop instanceof RxFormControl) && !(prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray)) {
        entityObject[propName] = prop[0];
      } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) {
        entityObject[propName] = prop;
      } else if (prop instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || prop instanceof RxFormControl) {
        entityObject[propName] = prop;
        defaultContainer.initPropertyObject(propName, PROPERTY, undefined, modelInstance.constructor ? modelInstance : {
          constructor: modelInstance
        });
      }
    }
  }
  getValidatorConfig(validatorConfig, entityObject, rootPropertyName, arrayPropertyName) {
    let excludeProps = [];
    let includeProps = [];
    let ignoreUndefinedProps = [];
    if (!validatorConfig) return {};
    const validationProps = this.getObjectForProperty(validatorConfig.dynamicValidation, rootPropertyName, arrayPropertyName);
    const abstractControlOptions = this.getObjectForProperty(validatorConfig.abstractControlOptions, rootPropertyName, arrayPropertyName);
    if (validatorConfig.excludeProps) excludeProps = this.getProps(validatorConfig.excludeProps, rootPropertyName);
    if (validatorConfig.includeProps) includeProps = this.getProps(validatorConfig.includeProps, rootPropertyName);
    if (validatorConfig.ignoreUndefinedProps) ignoreUndefinedProps = this.getProps(validatorConfig.ignoreUndefinedProps, rootPropertyName, true);
    if (!Object.keys(abstractControlOptions).length && rootPropertyName.endsWith('.') && validatorConfig.abstractControlOptions && validatorConfig.abstractControlOptions[rootPropertyName.substring(0, rootPropertyName.length - 1)]) abstractControlOptions['global'] = validatorConfig.abstractControlOptions[rootPropertyName.substring(0, rootPropertyName.length - 1)];
    const dynamicValidation = validatorConfig.dynamicValidationConfigurationPropertyName && entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] ? entityObject[validatorConfig.dynamicValidationConfigurationPropertyName] : validationProps;
    return {
      ignoreUndefinedProps: ignoreUndefinedProps,
      includeProps: includeProps,
      dynamicValidation: dynamicValidation,
      excludeProps: excludeProps,
      abstractControlOptions: abstractControlOptions
    };
  }
  getObjectForProperty(rootObject, rootPropertyName, arrayPropertyName) {
    const result = {};
    for (let propName in rootObject) {
      if (!propName.startsWith(rootPropertyName) && (!arrayPropertyName || !propName.startsWith(arrayPropertyName))) continue;
      let splitProp = propName.split(".", 2)[1];
      if (!splitProp) continue;
      result[splitProp] = rootObject[propName];
    }
    return result;
  }
  getProps(properties, rootPropertyName, isIgnoreProp = false) {
    let props = [];
    for (let prop of properties) {
      if (prop.indexOf(rootPropertyName) != -1) {
        let splitProps = prop.split(".");
        if (splitProps.length == 2) {
          props.push(splitProps[1]);
        } else if (splitProps.length > 2) {
          splitProps.splice(0, 1);
          props.push(splitProps.join("."));
        }
      }
    }
    if (isIgnoreProp && properties.filter(x => x == rootPropertyName.replace('.', '')).length == 1) props.push(':self:');
    return props;
  }
  formGroup(model, entityObject, formBuilderConfiguration) {
    let json = this.getObject(model, entityObject, formBuilderConfiguration);
    model = json.model;
    entityObject = json.entityObject;
    if (entityObject.constructor != model && !this.isGroupCalled) {
      entityObject = json.entityObject = this.updateObject(model, json.entityObject, formBuilderConfiguration);
    }
    formBuilderConfiguration = json.formBuilderConfiguration;
    if (formBuilderConfiguration) this.extractExpressions(formBuilderConfiguration);
    let instanceContainer = this.getInstanceContainer(model, entityObject);
    this.checkObjectPropAdditionalValidation(instanceContainer, entityObject, formBuilderConfiguration);
    let formGroupObject = {};
    let extendedProperties = {};
    let formChildGroup = undefined;
    let formArrayGroup = undefined;
    var additionalValidations = {};
    instanceContainer.properties.forEach(property => {
      let isIncludeProp = true;
      if (formBuilderConfiguration) {
        if (formBuilderConfiguration.excludeProps && formBuilderConfiguration.excludeProps.length > 0) isIncludeProp = formBuilderConfiguration.excludeProps.indexOf(property.name) == -1;
        if (formBuilderConfiguration.dynamicValidation) additionalValidations = formBuilderConfiguration.dynamicValidation;
        if (formBuilderConfiguration.includeProps && formBuilderConfiguration.includeProps.length > 0) isIncludeProp = formBuilderConfiguration.includeProps.indexOf(property.name) != -1;
        if (formBuilderConfiguration.ignoreUndefinedProps && formBuilderConfiguration.ignoreUndefinedProps.length > 0) {
          isIncludeProp = !(property.propertyType == PROPERTY && !RegexValidator.isNotBlank(json.entityObject[property.name]) && (formBuilderConfiguration.ignoreUndefinedProps.indexOf(property.name) !== -1 || formBuilderConfiguration.ignoreUndefinedProps.indexOf(":self:") !== -1));
        }
      }
      if (property.ignore) isIncludeProp = !property.ignore.call(json.entityObject, json.entityObject);
      if (isIncludeProp) {
        switch (property.propertyType) {
          case PROPERTY:
            if (!(entityObject[property.name] instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl || entityObject[property.name] instanceof RxFormControl)) {
              let propertyValidators = instanceContainer.propertyAnnotations.filter(t => t.propertyName == property.name && t.isValidator);
              let updateOn = instanceContainer.propertyAnnotations.filter(t => t.propertyName == property.name && !t.isValidator && t.annotationType === "updateOn")[0];
              let sanitizeValue = super.sanitizeValue(instanceContainer, property.name, super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration), json.entityObject, Object.assign({}, json.entityObject));
              if (entityObject[property.name] === undefined && sanitizeValue) entityObject[property.name] = sanitizeValue;
              let validators = this.addFormControl(property, propertyValidators, additionalValidations[property.name], instanceContainer, entityObject);
              let abstractControlOptions = {
                validators: validators,
                asyncValidators: this.addAsyncValidation(property, propertyValidators, additionalValidations[property.name])
              };
              abstractControlOptions = this.getAbstractControlOptions(property.name, formBuilderConfiguration, abstractControlOptions);
              if (updateOn && !abstractControlOptions.updateOn) abstractControlOptions.updateOn = updateOn.config.runOn;
              formGroupObject[property.name] = new RxFormControl(sanitizeValue, abstractControlOptions, undefined, json.entityObject, Object.assign({}, json.entityObject), property.name, instanceContainer.sanitizers[property.name]);
              this.isNested = false;
            } else formGroupObject[property.name] = super.getDefaultValue(property, entityObject[property.name], formBuilderConfiguration);
            extendedProperties[property.name] = true;
            break;
          case OBJECT_PROPERTY:
            let objectValue = entityObject[property.name];
            objectValue = !objectValue && property.defaultValue ? property.defaultValue : objectValue;
            if (!objectValue && property.objectConfig && property.objectConfig.autoCreate) objectValue = this.createClassObject(property.entity, {});
            if (objectValue && objectValue instanceof Object && !(objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || objectValue instanceof RxFormGroup)) {
              this.isNestedBinding = this.isNested = true;
              if (instanceContainer && instanceContainer.conditionalObjectProps) this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name);
              if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps) this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name);
              if (this.formGroupPropOtherValidator[property.name]) this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
              let objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, objectValue, `${property.name}.`);
              let entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
              formGroupObject[property.name] = this.formGroup(entity || property.entity || this.getEntity(objectValue, formBuilderConfiguration, property.name, true), objectValue, objectValidationConfig);
              this.conditionalObjectProps = [];
              this.builderConfigurationConditionalObjectProps = [];
              this.isNestedBinding = this.isNested = false;
            } else if (objectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup || objectValue instanceof RxFormGroup) formGroupObject[property.name] = objectValue;
            break;
          case ARRAY_PROPERTY:
            let arrayObjectValue = entityObject[property.name];
            if (arrayObjectValue && arrayObjectValue instanceof Array && !(arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray)) {
              this.isNestedBinding = this.isNested = true;
              var formArrayGroup = [];
              let index = 0;
              let entity = property.entityProvider ? property.entityProvider.call(entityObject) : undefined;
              let objectValidationConfig = null;
              for (let subObject of arrayObjectValue) {
                if (instanceContainer && instanceContainer.conditionalObjectProps) this.conditionalObjectProps = instanceContainer.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                if (this.conditionalValidationInstance && this.conditionalValidationInstance.conditionalObjectProps) this.builderConfigurationConditionalObjectProps = this.conditionalValidationInstance.conditionalObjectProps.filter(t => t.objectPropName == property.name && t.arrayIndex == index);
                if (this.formGroupPropOtherValidator[property.name]) this.currentFormGroupPropOtherValidator = this.formGroupPropOtherValidator[property.name];
                objectValidationConfig = this.getValidatorConfig(formBuilderConfiguration, subObject, `${property.name}.`, `${property.name}[${index}].`);
                formArrayGroup.push(this.formGroup(entity || property.entity || this.getEntity(subObject, formBuilderConfiguration, property.name, true), subObject, objectValidationConfig));
                index++;
                this.conditionalObjectProps = [];
                this.builderConfigurationConditionalObjectProps = [];
              }
              let abstractControlOptions = this.getAbstractControlOptions(property.name, formBuilderConfiguration, {});
              formGroupObject[property.name] = new RxFormArray(arrayObjectValue, formArrayGroup, abstractControlOptions, null, property.arrayConfig);
              if (ReactiveFormConfig.autoInstancePush) {
                arrayObjectValue.push = instance => {
                  let formGroup = this.formGroup(instance.constructor, instance, objectValidationConfig);
                  formGroupObject[property.name].push(formGroup, {
                    isAddedInstance: true
                  });
                  return 0;
                };
                arrayObjectValue.splice = (start, deleteCount) => {
                  let end = start + deleteCount - 1;
                  for (var i = start; i <= end; i++) {
                    formGroupObject[property.name].removeAt(i, {
                      isRemovedInstance: true
                    });
                  }
                  return [];
                };
              }
              this.isNestedBinding = this.isNested = false;
            } else if (arrayObjectValue instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormArray) formGroupObject[property.name] = arrayObjectValue;else if (property.arrayConfig && property.arrayConfig.createBlank) formGroupObject[property.name] = new RxFormArray([], [], null, null, property.arrayConfig);
            break;
        }
      }
    });
    if (!this.isNested) {
      this.conditionalValidationInstance = {};
      this.builderConfigurationConditionalObjectProps = [];
    }
    let abstractControlOptions = {
      validators: [],
      asyncValidators: [],
      updateOn: formBuilderConfiguration && formBuilderConfiguration.abstractControlOptions && formBuilderConfiguration.abstractControlOptions['global'] ? formBuilderConfiguration.abstractControlOptions['global'] : undefined
    };
    abstractControlOptions = this.getAbstractControlOptions("global", formBuilderConfiguration, abstractControlOptions);
    let formGroup = new RxFormGroup(json.model, json.entityObject, formGroupObject, abstractControlOptions);
    if (defaultContainer.isExperimental) {
      json.entityObject["formGroup"] = formGroup;
      this.overrideProperties(formGroup, json.entityObject, extendedProperties);
    }
    if (!this.isNestedBinding && !this.isGroupCalled) formGroup.refreshDisable();
    return formGroup;
  }
  overrideProperties(formGroup, entityObject, properties) {
    Object.keys(properties).forEach(t => {
      this.overrideProp(entityObject, t, formGroup);
    });
  }
  getAbstractControlOptions(name, formBuilderConfiguration, abstractControlOptions) {
    if (formBuilderConfiguration && formBuilderConfiguration.abstractControlOptions && formBuilderConfiguration.abstractControlOptions[name]) abstractControlOptions.updateOn = formBuilderConfiguration.abstractControlOptions[name];
    const controlOptions = formBuilderConfiguration ? formBuilderConfiguration.baseAbstractControlOptions : null;
    if (controlOptions && controlOptions[name]) {
      if (controlOptions[name].updateOn) abstractControlOptions.updateOn = controlOptions[name].updateOn;
      if (controlOptions[name].validators) {
        if (Array.isArray(controlOptions[name].validators)) controlOptions[name].validators.forEach(validator => abstractControlOptions.validators.push(validator));else abstractControlOptions.validators.push(controlOptions[name].validators);
      }
      if (controlOptions[name].asyncValidators) {
        if (Array.isArray(controlOptions[name].asyncValidators)) controlOptions[name].asyncValidators.forEach(validator => abstractControlOptions.asyncValidators.push(validator));else abstractControlOptions.asyncValidators.push(controlOptions[name].validators);
      }
    }
    return abstractControlOptions;
  }
  overrideProp(entityObject, propName, formGroup) {
    let descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(entityObject), propName);
    let value = entityObject[propName];
    let oldValue = null;
    Object.defineProperty(entityObject, propName, {
      get: () => {
        return descriptor ? descriptor.get.call(entityObject) : value;
      },
      set: v => {
        value = v;
        if (oldValue != v) {
          if (descriptor) descriptor.set.call(entityObject, v);
          if (!formGroup.changing && formGroup.controls[propName]) {
            formGroup.controls[propName].setValue(v);
          }
        }
        oldValue = v;
      }
    });
  }
}
RxFormBuilder.ɵfac = function RxFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RxFormBuilder)();
};
RxFormBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: RxFormBuilder,
  factory: RxFormBuilder.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RxFormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [];
  }, null);
})();
class TypedFormBuilder {
  constructor() {
    this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder();
    this.rxFormBuilder = new RxFormBuilder();
  }
  group(controlsConfig, options) {
    let paramOptions = options || {};
    if (typeof controlsConfig == FUNCTION_STRING) return !(paramOptions && paramOptions.isInstance) ? this.rxFormBuilder.formGroup(controlsConfig, paramOptions.data, paramOptions.config) : this.rxFormBuilder.formGroup(controlsConfig, paramOptions.data, paramOptions.config).modelInstance;
    return this.formBuilder.group(controlsConfig, options);
  }
}
TypedFormBuilder.ɵfac = function TypedFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TypedFormBuilder)();
};
TypedFormBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: TypedFormBuilder,
  factory: TypedFormBuilder.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TypedFormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
  }], function () {
    return [];
  }, null);
})();
class RxReactiveFormsModule {
  static forRoot() {
    return {
      ngModule: RxReactiveFormsModule,
      providers: []
    };
  }
}
RxReactiveFormsModule.ɵfac = function RxReactiveFormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || RxReactiveFormsModule)();
};
RxReactiveFormsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: RxReactiveFormsModule
});
RxReactiveFormsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](RxReactiveFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: [RxwebFormDirective, HtmlControlTemplateDirective, ControlHostDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective, AsyncValidationDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule],
      providers: [RxFormBuilder, DecimalProvider, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
      exports: [AsyncValidationDirective, RxwebFormDirective, HtmlControlTemplateDirective, RxFormControlDirective, FileControlDirective, ImageFileControlDirective]
    }]
  }], null, null);
})();
// Experimental
class ReactiveTypedFormsModule {
  constructor() {
    defaultContainer.isExperimental = true;
    ReactiveFormConfig.autoInstancePush = true;
  }
  static forRoot() {
    return {
      ngModule: ReactiveTypedFormsModule,
      providers: []
    };
  }
}
ReactiveTypedFormsModule.ɵfac = function ReactiveTypedFormsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ReactiveTypedFormsModule)();
};
ReactiveTypedFormsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ReactiveTypedFormsModule
});
ReactiveTypedFormsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder,
    useClass: TypedFormBuilder
  }, TypedFormBuilder],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, RxReactiveFormsModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ReactiveTypedFormsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
    args: [{
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, RxReactiveFormsModule.forRoot()],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder,
        useClass: TypedFormBuilder
      }, TypedFormBuilder],
      exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.ReactiveFormsModule]
    }]
  }], function () {
    return [];
  }, null);
})();
function baseValidator(config, type, validator) {
  var rxwebValidator = (control, target) => {
    if (typeof control == STRING) defaultContainer.init(target, 0, control, type, config, false);else {
      if (config && (!control.validatorConfig || !control.validatorConfig[type])) ApplicationUtil.configureControl(control, config, type);
      return validator(control);
    }
    return null;
  };
  Object.defineProperty(rxwebValidator, "name", {
    value: RX_WEB_VALIDATOR
  });
  return rxwebValidator;
}
function baseAsyncValidatorExtension(config, type, validator) {
  var rxwebValidator = (control, target) => {
    if (typeof control == STRING) defaultContainer.init(target, 0, control, type, config, true);else {
      if (config && (!control.validatorConfig || !control.validatorConfig[type])) ApplicationUtil.configureControl(control, config, type);
      return validator(control);
    }
    return null;
  };
  Object.defineProperty(rxwebValidator, "name", {
    value: RX_WEB_VALIDATOR
  });
  return rxwebValidator;
}
function alphaValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.alpha, alphaValidator(config));
}
function alphaAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.alpha, baseAsyncValidator(config, AnnotationTypes.alpha));
}
function allOfValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.allOf, allOfValidator(config));
}
function allOfAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.allOf, baseAsyncValidator(config, AnnotationTypes.allOf));
}
function alphaNumericValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.alphaNumeric, alphaNumericValidator(config));
}
function alphaNumericAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.alphaNumeric, baseAsyncValidator(config, AnnotationTypes.alphaNumeric));
}
function choiceValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.choice, choiceValidator(config));
}
function choiceAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.choice, baseAsyncValidator(config, AnnotationTypes.choice));
}
function compareValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.compare, compareValidator(config));
}
function containsValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.contains, containsValidator(config));
}
function containsAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.contains, baseAsyncValidator(config, AnnotationTypes.contains));
}
function creditCardValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.creditCard, creditCardValidator(config));
}
function creditCardAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.creditCard, baseAsyncValidator(config, AnnotationTypes.creditCard));
}
function differentValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.different, differentValidator(config));
}
function digitValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.digit, digitValidator(config));
}
function emailValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.email, emailValidator(config));
}
function evenValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.even, evenValidator(config));
}
function factorValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.factor, factorValidator(config));
}
function factorAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.factor, baseAsyncValidator(config, AnnotationTypes.factor));
}
function greaterThanEqualToValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.greaterThanEqualTo, greaterThanEqualToValidator(config));
}
function greaterThanEqualToAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.greaterThanEqualTo, baseAsyncValidator(config, AnnotationTypes.greaterThanEqualTo));
}
function greaterThanValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.greaterThan, greaterThanValidator(config));
}
function greaterThanAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.greaterThan, baseAsyncValidator(config, AnnotationTypes.greaterThan));
}
function hexColorValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.hexColor, hexColorValidator(config));
}
function jsonValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.json, jsonValidator(config));
}
function leapYearValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.leapYear, leapYearValidator(config));
}
function lessThanEqualToValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.lessThanEqualTo, lessThanEqualToValidator(config));
}
function lessThanEqualToAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.lessThanEqualTo, baseAsyncValidator(config, AnnotationTypes.lessThanEqualTo));
}
function lessThanValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.lessThan, lessThanValidator(config));
}
function lessThanAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.lessThan, baseAsyncValidator(config, AnnotationTypes.lessThan));
}
function lowerCaseValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.lowerCase, lowercaseValidator(config));
}
function macValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.mac, macValidator(config));
}
function maxDateValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.maxDate, maxDateValidator(config));
}
function maxDateAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.maxDate, baseAsyncValidator(config, AnnotationTypes.maxDate));
}
function maxLengthValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.maxLength, maxLengthValidator(config));
}
function maxLengthAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.maxLength, baseAsyncValidator(config, AnnotationTypes.maxLength));
}
function maxNumberValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.maxNumber, maxNumberValidator(config));
}
function maxNumberAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.maxNumber, baseAsyncValidator(config, AnnotationTypes.maxNumber));
}
function minDateValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.minDate, minDateValidator(config));
}
function minDateAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.minDate, baseAsyncValidator(config, AnnotationTypes.minDate));
}
function minLengthValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.minLength, minLengthValidator(config));
}
function minLengthAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.minLength, baseAsyncValidator(config, AnnotationTypes.minLength));
}
function minNumberValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.minNumber, minNumberValidator(config));
}
function minNumberAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.minNumber, baseAsyncValidator(config, AnnotationTypes.minNumber));
}
function noneOfValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.noneOf, noneOfValidator(config));
}
function noneOfAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.noneOf, baseAsyncValidator(config, AnnotationTypes.noneOf));
}
function numericValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.numeric, numericValidator(config));
}
function numericAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.numeric, baseAsyncValidator(config, AnnotationTypes.numeric));
}
function oddValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.odd, oddValidator(config));
}
function oneOfValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.oneOf, oneOfValidator(config));
}
function oneOfAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.oneOf, baseAsyncValidator(config, AnnotationTypes.oneOf));
}
function passwordcValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.password, passwordValidator(config));
}
function passwordAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.password, baseAsyncValidator(config, AnnotationTypes.password));
}
function patternValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.pattern, patternValidator(config));
}
function patternAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.pattern, baseAsyncValidator(config, AnnotationTypes.pattern));
}
function rangeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.range, rangeValidator(config));
}
function rangeAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.range, baseAsyncValidator(config, AnnotationTypes.range));
}
function requiredValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.required, requiredValidator(config));
}
function timeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.time, timeValidator(config));
}
function timeAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.time, baseAsyncValidator(config, AnnotationTypes.time));
}
function upperCaseValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.upperCase, uppercaseValidator(config));
}
function urlValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.url, urlValidator(config));
}
function urlAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.url, baseAsyncValidator(config, AnnotationTypes.url));
}
function asciiValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.ascii, asciiValidator(config));
}
function dataUriValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.dataUri, dataUriValidator(config));
}
function portValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.port, portValidator(config));
}
function latLongValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.latLong, latLongValidator(config));
}
function extensionValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.extension, control => {
    return null;
  });
}
function extensionAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.extension, baseAsyncValidator(config, AnnotationTypes.extension));
}
function fileSizeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.fileSize, control => {
    return null;
  });
}
function fileSizeAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.fileSize, baseAsyncValidator(config, AnnotationTypes.fileSize));
}
function endsWithValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.endsWith, endsWithValidator(config));
}
function endsWithAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.endsWith, baseAsyncValidator(config, AnnotationTypes.endsWith));
}
function startsWithValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.startsWithWith, startsWithValidator(config));
}
function startsWithAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.startsWithWith, baseAsyncValidator(config, AnnotationTypes.startsWith));
}
function primeNumberValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.primeNumber, primeNumberValidator(config));
}
function latitudeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.latitude, latitudeValidator(config));
}
function longitudeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.longitude, longitudeValidator(config));
}
function composeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.compose, composeValidator(config));
}
function fileValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.file, control => {
    return null;
  });
}
function fileAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.file, baseAsyncValidator(config, AnnotationTypes.file));
}
function customValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.custom, customValidator(config));
}
function customAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.custom, baseAsyncValidator(config, AnnotationTypes.custom));
}
function uniqueValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.unique, uniqueValidator(config));
}
function imageValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.image, control => {
    return null;
  });
}
function imageAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.image, baseAsyncValidator(config, AnnotationTypes.image));
}
function notEmptyValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.notEmpty, notEmptyValidator(config));
}
function ipValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.ip, ipValidator(config));
}
function ipAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.ip, baseAsyncValidator(config, AnnotationTypes.ip));
}
function cusipValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.cusip, cusipValidator(config));
}
function gridValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.grid, gridValidator(config));
}
function dateValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.date, dateValidator(config));
}
function dateAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.date, baseAsyncValidator(config, AnnotationTypes.date));
}
function andValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.and, andValidator(config));
}
function orValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.or, orValidator(config));
}
function notValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.not, notValidator(config));
}
function minTimeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.minTime, minTimeValidator(config));
}
function minTimeAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.minTime, baseAsyncValidator(config, AnnotationTypes.minTime));
}
function maxTimeValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.maxTime, maxTimeValidator(config));
}
function maxTimeAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.maxTime, baseAsyncValidator(config, AnnotationTypes.maxTime));
}
function requiredTrueValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.requiredTrue, requiredTrueValidator(config));
}
function maskValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.mask, maskValidator(config));
}
function ibanValidatorExtension(config) {
  return baseValidator(config, AnnotationTypes.iban, ibanValidator(config));
}
function ibanAsyncValidatorExtension(config) {
  return baseAsyncValidatorExtension(config, AnnotationTypes.iban, baseAsyncValidator(config, AnnotationTypes.iban));
}
class RxwebValidators {}
RxwebValidators.alpha = alphaValidatorExtension;
RxwebValidators.allOf = allOfValidatorExtension;
RxwebValidators.alphaNumeric = alphaNumericValidatorExtension;
RxwebValidators.choice = choiceValidatorExtension;
RxwebValidators.compare = compareValidatorExtension;
RxwebValidators.contains = containsValidatorExtension;
RxwebValidators.creditCard = creditCardValidatorExtension;
RxwebValidators.different = differentValidatorExtension;
RxwebValidators.digit = digitValidatorExtension;
RxwebValidators.email = emailValidatorExtension;
RxwebValidators.even = evenValidatorExtension;
RxwebValidators.factor = factorValidatorExtension;
RxwebValidators.greaterThanEqualTo = greaterThanEqualToValidatorExtension;
RxwebValidators.greaterThan = greaterThanValidatorExtension;
RxwebValidators.hexColor = hexColorValidatorExtension;
RxwebValidators.json = jsonValidatorExtension;
RxwebValidators.leapYear = leapYearValidatorExtension;
RxwebValidators.lessThanEqualTo = lessThanEqualToValidatorExtension;
RxwebValidators.lessThan = lessThanValidatorExtension;
RxwebValidators.lowerCase = lowerCaseValidatorExtension;
RxwebValidators.mac = macValidatorExtension;
RxwebValidators.maxDate = maxDateValidatorExtension;
RxwebValidators.maxLength = maxLengthValidatorExtension;
RxwebValidators.maxNumber = maxNumberValidatorExtension;
RxwebValidators.minDate = minDateValidatorExtension;
RxwebValidators.minLength = minLengthValidatorExtension;
RxwebValidators.minNumber = minNumberValidatorExtension;
RxwebValidators.noneOf = noneOfValidatorExtension;
RxwebValidators.numeric = numericValidatorExtension;
RxwebValidators.odd = oddValidatorExtension;
RxwebValidators.oneOf = oneOfValidatorExtension;
RxwebValidators.password = passwordcValidatorExtension;
RxwebValidators.pattern = patternValidatorExtension;
RxwebValidators.range = rangeValidatorExtension;
RxwebValidators.required = requiredValidatorExtension;
RxwebValidators.time = timeValidatorExtension;
RxwebValidators.upperCase = upperCaseValidatorExtension;
RxwebValidators.url = urlValidatorExtension;
RxwebValidators.ascii = asciiValidatorExtension;
RxwebValidators.dataUri = dataUriValidatorExtension;
RxwebValidators.port = portValidatorExtension;
RxwebValidators.latLong = latLongValidatorExtension;
RxwebValidators.extension = extensionValidatorExtension;
RxwebValidators.fileSize = fileSizeValidatorExtension;
RxwebValidators.endsWith = endsWithValidatorExtension;
RxwebValidators.startsWith = startsWithValidatorExtension;
RxwebValidators.primeNumber = primeNumberValidatorExtension;
RxwebValidators.latitude = latitudeValidatorExtension;
RxwebValidators.longitude = longitudeValidatorExtension;
RxwebValidators.compose = composeValidatorExtension;
RxwebValidators.file = fileValidatorExtension;
RxwebValidators.custom = customValidatorExtension;
RxwebValidators.unique = uniqueValidatorExtension;
RxwebValidators.image = imageValidatorExtension;
RxwebValidators.notEmpty = notEmptyValidatorExtension;
RxwebValidators.ip = ipValidatorExtension;
RxwebValidators.cusip = cusipValidatorExtension;
RxwebValidators.grid = gridValidatorExtension;
RxwebValidators.date = dateValidatorExtension;
RxwebValidators.and = andValidatorExtension;
RxwebValidators.or = orValidatorExtension;
RxwebValidators.not = notValidatorExtension;
RxwebValidators.minTime = minTimeValidatorExtension;
RxwebValidators.maxTime = maxTimeValidatorExtension;
RxwebValidators.requiredTrue = requiredTrueValidatorExtension;
RxwebValidators.mask = maskValidatorExtension;
RxwebValidators.iban = ibanValidatorExtension;
RxwebValidators.alphaAsync = alphaAsyncValidatorExtension;
RxwebValidators.alphaNumericAsync = alphaNumericAsyncValidatorExtension;
RxwebValidators.allOfAsync = allOfAsyncValidatorExtension;
RxwebValidators.choiceAsync = choiceAsyncValidatorExtension;
RxwebValidators.containsAsync = containsAsyncValidatorExtension;
RxwebValidators.creditCardAsync = creditCardAsyncValidatorExtension;
RxwebValidators.customAsync = customAsyncValidatorExtension;
RxwebValidators.dateAsync = dateAsyncValidatorExtension;
RxwebValidators.endsWithAsync = endsWithAsyncValidatorExtension;
RxwebValidators.extensionAsync = extensionAsyncValidatorExtension;
RxwebValidators.factorAsync = factorAsyncValidatorExtension;
RxwebValidators.fileSizeAsync = fileSizeAsyncValidatorExtension;
RxwebValidators.fileAsync = fileAsyncValidatorExtension;
RxwebValidators.greaterThanEqualToAsync = greaterThanEqualToAsyncValidatorExtension;
RxwebValidators.greaterThanAsync = greaterThanAsyncValidatorExtension;
RxwebValidators.imageAsync = imageAsyncValidatorExtension;
RxwebValidators.ipAsync = ipAsyncValidatorExtension;
RxwebValidators.lessThanEqualToAsync = lessThanEqualToAsyncValidatorExtension;
RxwebValidators.lessThanAsync = lessThanAsyncValidatorExtension;
RxwebValidators.maxDateAsync = maxDateAsyncValidatorExtension;
RxwebValidators.maxLengthAsync = maxLengthAsyncValidatorExtension;
RxwebValidators.maxNumberAsync = maxNumberAsyncValidatorExtension;
RxwebValidators.maxTimeAsync = maxTimeAsyncValidatorExtension;
RxwebValidators.minDateAsync = minDateAsyncValidatorExtension;
RxwebValidators.minLengthAsync = minLengthAsyncValidatorExtension;
RxwebValidators.minNumberAsync = minNumberAsyncValidatorExtension;
RxwebValidators.minTimeAsync = minTimeAsyncValidatorExtension;
RxwebValidators.noneOfAsync = noneOfAsyncValidatorExtension;
RxwebValidators.numericAsync = numericAsyncValidatorExtension;
RxwebValidators.oneOfAsync = oneOfAsyncValidatorExtension;
RxwebValidators.passwordAsync = passwordAsyncValidatorExtension;
RxwebValidators.patternAsync = patternAsyncValidatorExtension;
RxwebValidators.rangeAsync = rangeAsyncValidatorExtension;
RxwebValidators.startsWithAsync = startsWithAsyncValidatorExtension;
RxwebValidators.timeAsync = timeAsyncValidatorExtension;
RxwebValidators.urlAsync = urlAsyncValidatorExtension;
RxwebValidators.ibanAsync = ibanAsyncValidatorExtension;

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6017:
/*!*************************************************************************!*\
  !*** ./node_modules/angular-datatables/fesm2022/angular-datatables.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataTableDirective: () => (/* binding */ DataTableDirective),
/* harmony export */   DataTablesModule: () => (/* binding */ DataTablesModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);





/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
class DataTableDirective {
  constructor(el, vcr, renderer) {
    this.el = el;
    this.vcr = vcr;
    this.renderer = renderer;
    /**
     * The DataTable option you pass to configure your table.
     */
    this.dtOptions = {};
  }
  ngOnInit() {
    if (this.dtTrigger) {
      this.dtTrigger.subscribe(options => {
        this.displayTable(options);
      });
    } else {
      this.displayTable(null);
    }
  }
  ngOnDestroy() {
    if (this.dtTrigger) {
      this.dtTrigger.unsubscribe();
    }
    if (this.dt) {
      this.dt.destroy(true);
    }
  }
  displayTable(dtOptions) {
    // assign new options if provided
    if (dtOptions) {
      this.dtOptions = dtOptions;
    }
    this.dtInstance = new Promise((resolve, reject) => {
      Promise.resolve(this.dtOptions).then(resolvedDTOptions => {
        // validate object
        const isTableEmpty = Object.keys(resolvedDTOptions).length === 0 && $('tbody tr', this.el.nativeElement).length === 0;
        if (isTableEmpty) {
          reject('Both the table and dtOptions cannot be empty');
          return;
        }
        // Set a column unique
        if (resolvedDTOptions.columns) {
          resolvedDTOptions.columns.forEach(col => {
            if ((col.id ?? '').trim() === '') {
              col.id = this.getColumnUniqueId();
            }
          });
        }
        // Using setTimeout as a "hack" to be "part" of NgZone
        setTimeout(() => {
          // Assign DT properties here
          let options = {
            rowCallback: (row, data, index) => {
              if (resolvedDTOptions.columns) {
                const columns = resolvedDTOptions.columns;
                this.applyNgPipeTransform(row, columns);
                this.applyNgRefTemplate(row, columns, data);
              }
              // run user specified row callback if provided.
              if (resolvedDTOptions.rowCallback) {
                resolvedDTOptions.rowCallback(row, data, index);
              }
            }
          };
          // merge user's config with ours
          options = Object.assign({}, resolvedDTOptions, options);
          this.dt = $(this.el.nativeElement).DataTable(options);
          resolve(this.dt);
        });
      });
    });
  }
  applyNgPipeTransform(row, columns) {
    // Filter columns with pipe declared
    const colsWithPipe = columns.filter(x => x.ngPipeInstance && !x.ngTemplateRef);
    colsWithPipe.forEach(el => {
      const pipe = el.ngPipeInstance;
      const pipeArgs = el.ngPipeArgs || [];
      // find index of column using `data` attr
      const i = columns.filter(c => c.visible !== false).findIndex(e => e.id === el.id);
      // get <td> element which holds data using index
      const rowFromCol = row.childNodes.item(i);
      // Transform data with Pipe and PipeArgs
      const rowVal = $(rowFromCol).text();
      const rowValAfter = pipe.transform(rowVal, ...pipeArgs);
      // Apply transformed string to <td>
      $(rowFromCol).text(rowValAfter);
    });
  }
  applyNgRefTemplate(row, columns, data) {
    // Filter columns using `ngTemplateRef`
    const colsWithTemplate = columns.filter(x => x.ngTemplateRef && !x.ngPipeInstance);
    colsWithTemplate.forEach(el => {
      const {
        ref,
        context
      } = el.ngTemplateRef;
      // get <td> element which holds data using index
      const i = columns.filter(c => c.visible !== false).findIndex(e => e.id === el.id);
      const cellFromIndex = row.childNodes.item(i);
      // reset cell before applying transform
      $(cellFromIndex).html('');
      // render onto DOM
      // finalize context to be sent to user
      const _context = Object.assign({}, context, context?.userData, {
        adtData: data
      });
      const instance = this.vcr.createEmbeddedView(ref, _context);
      this.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
    });
  }
  getColumnUniqueId() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result.trim();
  }
  static #_ = this.ɵfac = function DataTableDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DataTableDirective,
    selectors: [["", "datatable", ""]],
    inputs: {
      dtOptions: "dtOptions",
      dtTrigger: "dtTrigger"
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[datatable]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }], {
    dtOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dtTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
class DataTablesModule {
  static #_ = this.ɵfac = function DataTablesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DataTablesModule)();
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: DataTablesModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      declarations: [DataTableDirective],
      exports: [DataTableDirective]
    }]
  }], null, null);
})();

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_position_position_module_ts.js.map
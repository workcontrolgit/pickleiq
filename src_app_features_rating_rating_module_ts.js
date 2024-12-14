"use strict";
(self["webpackChunkPickleIQ"] = self["webpackChunkPickleIQ"] || []).push([["src_app_features_rating_rating_module_ts"],{

/***/ 5070:
/*!************************************************************************!*\
  !*** ./src/app/@shared/components/date-piker/date-picker.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatePickerValueAccessor: () => (/* binding */ DatePickerValueAccessor)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class DatePickerValueAccessor {
  constructor() {
    this.onChange = _ => {
      console.log(_);
    };
    this.onTouched = () => {};
  }
  writeValue(value) {}
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  static #_ = this.ɵfac = function DatePickerValueAccessor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DatePickerValueAccessor)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DatePickerValueAccessor,
    selectors: [["input", "type", "bootstrap-date"]],
    hostBindings: function DatePickerValueAccessor_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DatePickerValueAccessor_change_HostBindingHandler($event) {
          return ctx.onChange($event);
        })("blur", function DatePickerValueAccessor_blur_HostBindingHandler() {
          return ctx.onTouched();
        });
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
      useExisting: DatePickerValueAccessor,
      multi: true
    }])]
  });
}

/***/ }),

/***/ 709:
/*!***********************************************************************!*\
  !*** ./src/app/@shared/components/date-piker/date-piker.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatePikerComponent: () => (/* binding */ DatePikerComponent)
/* harmony export */ });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






class DatePikerComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FieldType {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵDatePikerComponent_BaseFactory;
    return function DatePikerComponent_Factory(__ngFactoryType__) {
      return (ɵDatePikerComponent_BaseFactory || (ɵDatePikerComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DatePikerComponent)))(__ngFactoryType__ || DatePikerComponent);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DatePikerComponent,
    selectors: [["formly-field-date-piker"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 14,
    vars: 2,
    consts: [["d", "ngbDatepicker"], [1, "input-group"], ["ngbDatepicker", "", 1, "form-control", 3, "formControl", "formlyAttributes"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fa", "fa-calendar"]],
    template: function DatePikerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatePikerComponent_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
          const d_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](d_r2.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.formControl)("formlyAttributes", ctx.field);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbInputDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__["ɵFormlyAttributes"]],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7804:
/*!*******************************************************************************!*\
  !*** ./src/app/@shared/components/warning-dialog/warning-dialog-component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningDialogComponent: () => (/* binding */ WarningDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);


class WarningDialogComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.title = 'Oopsy!';
    this.messsage = 'Please fill in all required form fields.';
  }
  static #_ = this.ɵfac = function WarningDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || WarningDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WarningDialogComponent,
    selectors: [["ngbd-modal-content"]],
    inputs: {
      title: "title",
      messsage: "messsage"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 20,
    vars: 2,
    consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
    template: function WarningDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialogComponent_Template_button_click_5_listener() {
          return ctx.activeModal.dismiss("Cross click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WarningDialogComponent_Template_button_click_16_listener() {
          return ctx.activeModal.close("Close click");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.messsage);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 4741:
/*!***************************************************************************!*\
  !*** ./src/app/@shared/components/wrappers/filedset-wrapper.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldsetWrapper: () => (/* binding */ FieldsetWrapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ 4385);



const _c0 = ["fieldComponent"];
function FieldsetWrapper_ng_template_2_Template(rf, ctx) {}
class FieldsetWrapper extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FieldWrapper {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵFieldsetWrapper_BaseFactory;
    return function FieldsetWrapper_Factory(__ngFactoryType__) {
      return (ɵFieldsetWrapper_BaseFactory || (ɵFieldsetWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FieldsetWrapper)))(__ngFactoryType__ || FieldsetWrapper);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FieldsetWrapper,
    selectors: [["formly-wrapper-fieldset"]],
    viewQuery: function FieldsetWrapper_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.fieldComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 6,
    vars: 2,
    consts: [["fieldComponent", ""], [1, "form-group"]],
    template: function FieldsetWrapper_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FieldsetWrapper_ng_template_2_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-error", ctx.showError);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 5635:
/*!************************************************************************!*\
  !*** ./src/app/@shared/components/wrappers/label-wrapper.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LabelWrapper: () => (/* binding */ LabelWrapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ 4385);



const _c0 = ["fieldComponent"];
function LabelWrapper_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " * ");
  }
}
function LabelWrapper_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LabelWrapper_Conditional_0_Conditional_3_Template, 1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n  ", ctx_r0.to.label, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx_r0.to.required && ctx_r0.to.hideRequiredMarker !== true ? 3 : -1);
  }
}
function LabelWrapper_ng_template_1_Template(rf, ctx) {}
class LabelWrapper extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper {
  static #_ = this.ɵfac = /*@__PURE__*/(() => {
    let ɵLabelWrapper_BaseFactory;
    return function LabelWrapper_Factory(__ngFactoryType__) {
      return (ɵLabelWrapper_BaseFactory || (ɵLabelWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](LabelWrapper)))(__ngFactoryType__ || LabelWrapper);
    };
  })();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LabelWrapper,
    selectors: [["formly-wrapper-label"]],
    viewQuery: function LabelWrapper_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fieldComponent = _t.first);
      }
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 4,
    vars: 1,
    consts: [["fieldComponent", ""], [1, "form-control-label", "control-label"]],
    template: function LabelWrapper_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LabelWrapper_Conditional_0_Template, 5, 3)(1, LabelWrapper_ng_template_1_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.to.label ? 0 : -1);
      }
    },
    encapsulation: 2
  });
}

/***/ }),

/***/ 1070:
/*!******************************************************************!*\
  !*** ./src/app/features/rating/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


class DashboardComponent {
  constructor() {
    this.model20 = {
      level: '2.0'
    };
    this.model25 = {
      level: '2.5'
    };
    this.model30 = {
      level: '3.0'
    };
    this.model35 = {
      level: '3.5'
    };
    this.model40 = {
      level: '4.0'
    };
    this.model45 = {
      level: '4.5'
    };
    this.model50 = {
      level: '5.0'
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DashboardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["rating-dashboard"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
    decls: 101,
    vars: 14,
    consts: [[1, "card-group", "my-3"], [1, "card"], ["routerLink", "/rating/level20", 1, "card-link", "nounderline", 3, "state"], [1, "card-body", "card-body-small"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-primary"], [1, "d-flex", "pl-3", "font-weight-light", "text-dark", "text-nowrap"], ["routerLink", "/rating/level25", 1, "card-link", "nounderline", 3, "state"], [1, "card-body"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-secondary"], ["routerLink", "/rating/level30", 1, "card-link", "nounderline", 3, "state"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-success"], [1, "d-flex", "pl-3", "font-weight-light", "text-dark"], ["routerLink", "/rating/level35", 1, "card-link", "nounderline", 3, "state"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-danger"], ["routerLink", "/rating/level40", 1, "card-link", "nounderline", 3, "state"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-info"], ["routerLink", "/rating/level45", 1, "card-link", "nounderline", 3, "state"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-dark"], ["routerLink", "/rating/level50", 1, "card-link", "nounderline", 3, "state"], [1, "fas", "fa-clipboard-list", "fa-2x", "text-muted"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model20["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model25["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model30["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model35["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model40["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model45["level"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx.model50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.model50["level"]);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".nounderline[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmF0aW5nL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdW5kZXJsaW5lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2880:
/*!********************************************************************!*\
  !*** ./src/app/features/rating/evaluation/evaluation.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvaluationComponent: () => (/* binding */ EvaluationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _app_shared_components_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/@shared/components/warning-dialog/warning-dialog-component */ 7804);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _app_services_form_formfield_skillrating_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/services/form/formfield-skillrating.service */ 1500);







 // Import FormsModule for ngModel






function EvaluationComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n");
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx_r0.model), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Active: ", ctx_r0.active, "");
  }
}
const log = new _core__WEBPACK_IMPORTED_MODULE_2__.Logger('EvaluationComponent');
class EvaluationComponent {
  constructor(serviceFormFields, modalService) {
    this.serviceFormFields = serviceFormFields;
    this.modalService = modalService;
    // ngx formly
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter(); // Emit changes to the parent
    this.active = 1;
    this.options = {};
    // show: boolean = false;
    this.debug = false;
    this.jsonText = '';
    this.ValidEvaluationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  ngOnInit() {
    log.error(this.model);
    var skillLevel = this.model['level'];
    var instructions;
    switch (skillLevel) {
      case '2.0':
        {
          // If skillLevel is '2.0', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level20;
          break;
        }
      case '2.5':
        {
          // If skillLevel is '2.5', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level25;
          break;
        }
      case '3.0':
        {
          // If skillLevel is '3.0', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level30;
          break;
        }
      case '3.5':
        {
          // If skillLevel is '3.5', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level35;
          break;
        }
      case '4.0':
        {
          // If skillLevel is '4.0', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level40;
          break;
        }
      case '4.5':
        {
          // If skillLevel is '4.5', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level45;
          break;
        }
      case '5.0':
        {
          // If skillLevel is '5.0', set instructions to the corresponding environment variable
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level50;
          break;
        }
      default:
        {
          // If skillLevel doesn't match any case, set instructions to 'undefined'
          instructions = 'undefined';
          break;
        }
    }
    this.fields = this.serviceFormFields.getFormFields(skillLevel);
  }
  submit() {
    log.error(this.model);
    if (this.form.invalid) {
      this.open();
    } else {
      this.ValidEvaluationEvent.emit(this.form.valid);
    }
  }
  open() {
    const modalRef = this.modalService.open(_app_shared_components_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_1__.WarningDialogComponent);
  }
  onFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        this.model = json;
        this.modelChange.emit(this.model); // Emit the updated model to the parent
      } catch (e) {
        console.error('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  }
  static #_ = this.ɵfac = function EvaluationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || EvaluationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_services_form_formfield_skillrating_service__WEBPACK_IMPORTED_MODULE_3__.FormfieldSkillRatingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: EvaluationComponent,
    selectors: [["app-evaluation"]],
    inputs: {
      model: "model"
    },
    outputs: {
      modelChange: "modelChange",
      ValidEvaluationEvent: "ValidEvaluationEvent"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 37,
    vars: 6,
    consts: [[1, "container-fluid"], [1, "d-flex", "justify-content-between"], [1, "text-secondary"], [1, "ml-auto"], ["ngbTooltip", "Upload evaluation data from a local file", 1, "btn", "btn-link", "m-1", "print-none"], ["type", "file", "hidden", "", 3, "change"], [1, "fst-italic"], [3, "ngSubmit", "formGroup"], [3, "model", "fields", "options", "form"], [1, "d-flex", "mt-3"], ["type", "submit", "ngbTooltip", "Submit the form and save changes", 1, "btn", "btn-primary", "me-2"]],
    template: function EvaluationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Evaluation Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n        Upload Evaluation\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EvaluationComponent_Template_input_change_15_listener($event) {
          return ctx.onFileUpload($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Fields marked with * are required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EvaluationComponent_Template_form_ngSubmit_23_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "formly-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, EvaluationComponent_Conditional_36_Template, 8, 4);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx.model)("fields", ctx.fields)("options", ctx.options)("form", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.debug ? 36 : -1);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.FormlyModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.FormlyForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
    styles: [".container[_ngcontent-%COMP%] {\n  max-width: 600px;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcmF0aW5nL2V2YWx1YXRpb24vZXZhbHVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 7996:
/*!********************************************************!*\
  !*** ./src/app/features/rating/form/form.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormComponent: () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 8433);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reportcard/reportcard.component */ 9096);
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../evaluation/evaluation.component */ 2880);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);







 // Import FormsModule for ngModel


function FormComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-evaluation", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("modelChange", function FormComponent_ng_template_13_Template_app_evaluation_modelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.updateModel($event));
    })("ValidEvaluationEvent", function FormComponent_ng_template_13_Template_app_evaluation_ValidEvaluationEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectTab($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\n      ");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r2.model);
  }
}
function FormComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-reportcard", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\n      ");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("model", ctx_r2.model);
  }
}
function FormComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r2.model));
  }
}
const log = new _core__WEBPACK_IMPORTED_MODULE_0__.Logger('FormComponent');
class FormComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    // ngx formly
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({});
    this.active = 1;
    this.disabled = true;
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
      this.model = data.model;
      this.skillLevel = this.model['level'];
    });
  }
  selectTab(isValidForm) {
    this.active = 2;
    this.disabled = !isValidForm;
  }
  ngOnInit() {
    this.logModel();
    this.applyDebugMode();
  }
  logModel() {
    log.error(this.model);
  }
  applyDebugMode() {
    this.debug = _env_environment__WEBPACK_IMPORTED_MODULE_3__.environment.loadSampleData;
    if (this.debug) {
      this.model = this.getUpdatedModel();
    }
  }
  getUpdatedModel() {
    const skillLevel = this.model?.['level']; // Safe access to avoid potential errors
    return this.updateModelBasedOnSkillLevel(skillLevel);
  }
  updateModelBasedOnSkillLevel(skillLevel) {
    if (skillLevel === '4.0') {
      return _env_environment__WEBPACK_IMPORTED_MODULE_3__.environment.sampleModel40; // load sample data
    }
    return this.model; // Default: return the original model
  }
  // Handle the model update from the child component
  updateModel(updatedModel) {
    this.model = updatedModel; // Update the parent model
    console.log('Parent Model Updated:', this.model);
  }
  static #_ = this.ɵfac = function FormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FormComponent,
    selectors: [["app-form"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
    decls: 30,
    vars: 7,
    consts: [["nav", "ngbNav"], [1, "container-fluid"], [1, "text-secondary"], ["ngbNav", "", 1, "nav-tabs", 3, "activeIdChange", "activeId"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [3, "ngbNavItem", "disabled"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "modelChange", "ValidEvaluationEvent", "model"], [3, "model"]],
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("activeIdChange", function FormComponent_Template_ul_activeIdChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.active, $event) || (ctx.active = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, FormComponent_ng_template_13_Template, 3, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Report Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FormComponent_ng_template_21_Template, 3, 1, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, FormComponent_Conditional_29_Template, 5, 3);
      }
      if (rf & 2) {
        const nav_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Level ", ctx.skillLevel, " Skill Assessment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", nav_r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵconditional"](ctx.debug ? 29 : -1);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavContent, _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_2__.EvaluationComponent, _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_1__.ReportcardComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbNavOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8036:
/*!**********************************************************!*\
  !*** ./src/app/features/rating/rating-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingRoutingModule: () => (/* binding */ RatingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating.component */ 1810);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.component */ 7996);
/* harmony import */ var _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reportcard/reportcard.component */ 9096);
/* harmony import */ var _biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @biesbjerg/ngx-translate-extract-marker */ 8179);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







// import { NgbdModalComponent } from '../../@shared/components/modal/modal-component';
const model20 = {
  level: '2.0'
};
const model25 = {
  level: '2.5'
};
const model30 = {
  level: '3.0'
};
const model35 = {
  level: '3.5'
};
const model40 = {
  level: '4.0'
};
const model45 = {
  level: '4.5'
};
const model50 = {
  level: '5.0'
};
const routes = [{
  path: '',
  component: _rating_component__WEBPACK_IMPORTED_MODULE_0__.RatingComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Ratings')
  }
}, {
  path: 'level20',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 2.0 Players'),
    model: model20
  }
}, {
  path: 'level25',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 2.5 Players'),
    model: model25
  }
}, {
  path: 'level30',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 3.0 Players'),
    model: model30
  }
}, {
  path: 'level35',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 3.5 Players'),
    model: model35
  }
}, {
  path: 'level40',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 4.0 Players'),
    model: model40
  }
}, {
  path: 'level45',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 4.5 Players'),
    model: model45
  }
}, {
  path: 'level50',
  component: _form_form_component__WEBPACK_IMPORTED_MODULE_1__.FormComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment for 5.0 Players'),
    model: model50
  }
}, {
  path: 'reportcard',
  component: _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_2__.ReportcardComponent,
  //canActivate: [AuthGuard],
  data: {
    title: (0,_biesbjerg_ngx_translate_extract_marker__WEBPACK_IMPORTED_MODULE_3__.marker)('Skill Assessment Report Card')
  }
}
// {
//   path: 'modal',
//   component: NgbdModalComponent,
//   //canActivate: [AuthGuard],
//   data: { title: marker('Skill Assessment Report Card') },
// },
];
class RatingRoutingModule {
  static #_ = this.ɵfac = function RatingRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RatingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: RatingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RatingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 1810:
/*!*****************************************************!*\
  !*** ./src/app/features/rating/rating.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RatingComponent: () => (/* binding */ RatingComponent)
/* harmony export */ });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 1070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-print-element */ 675);



class RatingComponent {
  constructor(print) {
    this.print = print;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function RatingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RatingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_print_element__WEBPACK_IMPORTED_MODULE_2__.NgxPrintElementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RatingComponent,
    selectors: [["app-rating"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    decls: 8,
    vars: 0,
    consts: [[1, "container-fluid"]],
    template: function RatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Skill Levels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "rating-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");
      }
    },
    dependencies: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6389:
/*!**************************************************!*\
  !*** ./src/app/features/rating/rating.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailValidator: () => (/* binding */ EmailValidator),
/* harmony export */   EmailValidatorMessage: () => (/* binding */ EmailValidatorMessage),
/* harmony export */   RatingModule: () => (/* binding */ RatingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-formly/bootstrap */ 1037);
/* harmony import */ var _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-routing.module */ 8036);
/* harmony import */ var _rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rating.component */ 1810);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 1070);
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ 7996);
/* harmony import */ var _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportcard/reportcard.component */ 9096);
/* harmony import */ var _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./evaluation/evaluation.component */ 2880);
/* harmony import */ var _shared_components_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../@shared/components/warning-dialog/warning-dialog-component */ 7804);
/* harmony import */ var _shared_components_date_piker_date_piker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@shared/components/date-piker/date-piker.component */ 709);
/* harmony import */ var _shared_components_date_piker_date_picker_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../@shared/components/date-piker/date-picker.directive */ 5070);
/* harmony import */ var _shared_components_wrappers_filedset_wrapper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../@shared/components/wrappers/filedset-wrapper.component */ 4741);
/* harmony import */ var _shared_components_wrappers_label_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../@shared/components/wrappers/label-wrapper.component */ 5635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);
















// import { NgxPrintElementService } from 'ngx-print-element';



// TODO move into service
function EmailValidator(control) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(control.value) ? null : {
    email: true
  };
}
function EmailValidatorMessage(err, field) {
  return `"${field?.formControl?.value}" is not a valid email address`;
}
class RatingModule {
  static #_ = this.ɵfac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RatingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: RatingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_15__.FormlyModule.forRoot({
      types: [{
        name: 'date',
        component: _shared_components_date_piker_date_piker_component__WEBPACK_IMPORTED_MODULE_7__.DatePikerComponent,
        wrappers: ['label', 'fieldset']
      }],
      wrappers: [{
        name: 'label',
        component: _shared_components_wrappers_label_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.LabelWrapper
      }, {
        name: 'fieldset',
        component: _shared_components_wrappers_filedset_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.FieldsetWrapper
      }],
      validationMessages: [{
        name: 'required',
        message: 'This field is required'
      }, {
        name: 'email',
        message: EmailValidatorMessage
      }],
      validators: [{
        name: 'email',
        validation: EmailValidator
      }]
    }), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
    // NgxPrintElementService,
    _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_16__.FormlyBootstrapModule, _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingRoutingModule, _form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormComponent, _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_4__.ReportcardComponent, _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_5__.EvaluationComponent, _shared_components_date_piker_date_piker_component__WEBPACK_IMPORTED_MODULE_7__.DatePikerComponent]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RatingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_15__.FormlyModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
    // NgxPrintElementService,
    _ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_16__.FormlyBootstrapModule, _rating_routing_module__WEBPACK_IMPORTED_MODULE_0__.RatingRoutingModule, _rating_component__WEBPACK_IMPORTED_MODULE_1__.RatingComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _form_form_component__WEBPACK_IMPORTED_MODULE_3__.FormComponent, _reportcard_reportcard_component__WEBPACK_IMPORTED_MODULE_4__.ReportcardComponent, _evaluation_evaluation_component__WEBPACK_IMPORTED_MODULE_5__.EvaluationComponent, _shared_components_warning_dialog_warning_dialog_component__WEBPACK_IMPORTED_MODULE_6__.WarningDialogComponent, _shared_components_date_piker_date_piker_component__WEBPACK_IMPORTED_MODULE_7__.DatePikerComponent, _shared_components_date_piker_date_picker_directive__WEBPACK_IMPORTED_MODULE_8__.DatePickerValueAccessor, _shared_components_wrappers_filedset_wrapper_component__WEBPACK_IMPORTED_MODULE_9__.FieldsetWrapper, _shared_components_wrappers_label_wrapper_component__WEBPACK_IMPORTED_MODULE_10__.LabelWrapper]
  });
})();

/***/ }),

/***/ 9096:
/*!********************************************************************!*\
  !*** ./src/app/features/rating/reportcard/reportcard.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportcardComponent: () => (/* binding */ ReportcardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _core_logger_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/logger.service */ 1765);
/* harmony import */ var ngx_print_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-print-element */ 675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_form_formfield_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/form/formfield-control.service */ 6333);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);









const _c0 = ["tableRef"];
function ReportcardComponent_For_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n          ");
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r2.Skillcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r2.Description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getGradeColor(skill_r2.Rating));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](skill_r2.Rating);
  }
}
const log = new _core_logger_service__WEBPACK_IMPORTED_MODULE_0__.Logger('ReportcardComponent');
class ReportcardComponent {
  constructor(formfieldControlService, router, print) {
    this.formfieldControlService = formfieldControlService;
    this.router = router;
    this.print = print;
    this.config = {
      printMode: 'template',
      // template-popup
      popupProperties: 'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
      pageTitle: 'Hello World',
      templateString: "<header>I'm part of the template header</header>{{printBody}}<footer>I'm part of the template footer</footer>",
      stylesheets: [{
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      }],
      styles: ['header, footer{ text-align: center; }', 'body .bg-success{ background-color: #4dcf83 !important; }', 'body .bg-danger{ background-color: #f96868 !important; }']
    };
    this.model = {};
    this.colorGradeA = 'text-success fw-bolder';
    this.colorGradeB = 'text-info fw-bolder';
    this.colorGradeC = 'text-warning fw-bolder';
    this.colorGradeD = 'text-danger fw-bolder';
    //myObjArray: any = [];
    this.objSkillRating = [];
    // this.model = this.router.getCurrentNavigation().extras.state;
    // console.log(this.router.getCurrentNavigation().extras.state);
    // this.previousUrl = this.router.getCurrentNavigation().previousNavigation.finalUrl.toString();
    // console.log(this.router.getCurrentNavigation().previousNavigation.finalUrl.toString());
  }
  ngOnInit() {
    // rating level 4.0
    var objSkillByLevel;
    var skillcode;
    var description;
    var rating;
    var evalString;
    var filterLevel;
    log.error(this.model);
    filterLevel = this.model['level'];
    objSkillByLevel = this.formfieldControlService.LstSkillcode(filterLevel);
    for (let i = 0; i < objSkillByLevel.length; i++) {
      skillcode = objSkillByLevel[i].skillcode;
      description = objSkillByLevel[i].description;
      evalString = "this.model['" + skillcode + "']";
      rating = eval(evalString);
      this.objSkillRating.push({
        Skillcode: skillcode,
        Description: description,
        Rating: rating
      });
    }
  }
  getGradeColor(rating) {
    const classMap = {
      A: this.colorGradeA,
      B: this.colorGradeB,
      C: this.colorGradeC,
      D: this.colorGradeD
    };
    return classMap[rating] || ''; // Default to an empty string if no match
  }
  onPrint1(el) {
    this.print.print(el).subscribe(console.log);
  }
  exportToJSON() {
    const playerName = (this.model.playername || 'Unknown_Player').replace(/\s+/g, '_');
    const assessmentDate = this.model.assessmentDate || 'Unknown_Date';
    const formattedDate = assessmentDate.replace(/-/g, ''); // Remove hyphens for file name
    const fileName = `${playerName}_${formattedDate}_evaluation.json`;
    const jsonData = JSON.stringify(this.model, null, 2);
    const blob = new Blob([jsonData], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    // a.download = 'pickle_skill_evaluation.json';
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }
  static #_ = this.ɵfac = function ReportcardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ReportcardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_services_form_formfield_control_service__WEBPACK_IMPORTED_MODULE_1__.FormfieldControlService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_print_element__WEBPACK_IMPORTED_MODULE_4__.NgxPrintElementService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReportcardComponent,
    selectors: [["app-reportcard"]],
    viewQuery: function ReportcardComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tableElement = _t.first);
      }
    },
    inputs: {
      model: "model"
    },
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 144,
    vars: 9,
    consts: [["tableRef", ""], ["ngxPrintElement", "", "id", "printSection", 1, "container-fluid"], [1, "d-flex", "justify-content-between"], [1, "text-secondary"], [1, "ml-auto"], ["ngbTooltip", "Print the report card as a PDF document", 1, "btn", "btn-link", "m-1", "print-none", 3, "click"], ["ngbTooltip", "Save the evaluation data locally as a file", 1, "btn", "btn-link", "m-1", "print-none", 3, "click"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "row", "row-cols-2"], [1, "col"], ["ng-if", "!model['level']", 1, "col"], [1, "card", "mt-3"], [1, "table", "mt-3"], ["scope", "col"], [1, "alert", "alert-warning", "mt-3"], [1, "text-success"], [1, "text-info"], [1, "text-warning"], [1, "text-danger"], [3, "ngClass"]],
    template: function ReportcardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Pickleball Report Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportcardComponent_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onPrint1(ctx.tableElement));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n        Print PDF\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReportcardComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.exportToJSON());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n        Download Evaluation\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Player Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 11)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 11)(41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 11)(46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Assessment Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 12)(52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Skill Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Skill Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "Skill Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](88, ReportcardComponent_For_89_Template, 16, 4, null, null, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Evaluator Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 11)(107, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 11)(112, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Evaluation Notes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Rating Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "A = Solid, consistent performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "B = Good basic form, but needs work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "C = Attempted but very poorly executed/needs work");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "D = Not observed or not able to execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](142, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "\n");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model.playername, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model["playeremail"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 7, ctx.model["assessmentDate"]), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model["level"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.objSkillRating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model["evaluatorname"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model["evaluatoremail"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.model["Notes"], "\n    ");
      }
    },
    dependencies: [ngx_print_element__WEBPACK_IMPORTED_MODULE_4__.NgxPrintElementDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltipModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6333:
/*!************************************************************!*\
  !*** ./src/app/services/form/formfield-control.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormfieldControlService: () => (/* binding */ FormfieldControlService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_api_table_grades_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/services/api/table-grades.service */ 720);
/* harmony import */ var _app_services_api_table_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/api/table-skills.service */ 6522);



class FormfieldControlService {
  constructor(tblGradesService, tblSkillsService) {
    this.tblGradesService = tblGradesService;
    this.tblSkillsService = tblSkillsService;
    this.SelectRatingPlaceholder = 'Select a rating';
    this.TableGrades = this.tblGradesService.TableGrades;
    // public readonly TableSkillCode = this.databaseService.TableSkillCode;
    this.TableSkills = this.tblSkillsService.TableSkills;
    this.GeneralFields = [{
      className: 'section-label',
      template: '<div class="alert alert-warning"><h4>Section 1 - Player Information</h4></div>'
    }, {
      key: 'playername',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter player name',
        required: true
      }
    }, {
      key: 'playeremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter player email',
        required: true
      },
      validators: {
        validation: [this.EmailValidator]
      }
    }, {
      key: 'assessmentDate',
      type: 'input',
      templateOptions: {
        label: 'Assessment Date',
        placeholder: 'Enter date',
        required: true,
        type: 'date'
      }
    }];
    this.SummaryFields = [{
      className: 'section-label',
      template: '<div class="alert alert-info"><h4>Section 3 - Evaluator Information</h4></div>'
    }, {
      key: 'evaluatorname',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'enter evaluator name',
        required: true
      }
    }, {
      key: 'evaluatoremail',
      type: 'input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'enter evaluator email',
        required: true
      },
      validators: {
        validation: [this.EmailValidator]
      }
    }, {
      key: 'Notes',
      type: 'textarea',
      props: {
        label: 'Evaluation Notes',
        placeholder: 'enter any notes about the assessment here',
        rows: 5
      }
    }, {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'I hereby declare that the assessment is true and correct to the best of my knowledge.',
        required: true,
        pattern: 'true',
        defaultValue: false
      }
    }];
  }
  getGradeLetters() {
    var lstGrades = [];
    for (let i = 0; i < this.TableGrades.length; i++) {
      lstGrades.push({
        label: this.TableGrades[i].grade,
        value: this.TableGrades[i].grade
      });
    }
    return lstGrades;
  }
  EmailValidator(control) {
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(control.value) ? null : {
      email: true
    };
  }
  EmailValidatorMessage(err, field) {
    return `"${field?.formControl?.value}" is not a valid email address`;
  }
  LstSkillcode(filterBy) {
    filterBy = filterBy.toLocaleLowerCase();
    return this.TableSkills.filter(Skillcode => Skillcode.level.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  static #_ = this.ɵfac = function FormfieldControlService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormfieldControlService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services_api_table_grades_service__WEBPACK_IMPORTED_MODULE_0__.TableGradesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services_api_table_skills_service__WEBPACK_IMPORTED_MODULE_1__.TableSkillsService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FormfieldControlService,
    factory: FormfieldControlService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1500:
/*!****************************************************************!*\
  !*** ./src/app/services/form/formfield-skillrating.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormfieldSkillRatingService: () => (/* binding */ FormfieldSkillRatingService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_services_form_formfield_control_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/services/form/formfield-control.service */ 6333);



class FormfieldSkillRatingService {
  constructor(formfieldControlService) {
    this.formfieldControlService = formfieldControlService;
    this.gradeLetters = this.formfieldControlService.getGradeLetters();
    this.generalFields = this.formfieldControlService.GeneralFields;
    this.summaryFields = this.formfieldControlService.SummaryFields;
    this.selectRatingPlaceholder = this.formfieldControlService.SelectRatingPlaceholder;
  }
  getFormFields(skillLevel) {
    // var filterLevel = '4.0';
    var skillcodeList = this.formfieldControlService.LstSkillcode(skillLevel);
    // var instruction2 = '<ngx-teleport-outlet name="toolbar"></ngx-teleport-outlet>'
    var instructions;
    switch (skillLevel) {
      case '2.0':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level20;
          break;
        }
      case '2.5':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level25;
          break;
        }
      case '3.0':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level30;
          break;
        }
      case '3.5':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level35;
          break;
        }
      case '4.0':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level40;
          break;
        }
      case '4.5':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level45;
          break;
        }
      case '5.0':
        {
          instructions = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.evaluationInstruction.level50;
          break;
        }
      default:
        {
          instructions = 'undefined';
          break;
        }
    }
    this.ratingFields = [{
      key: 'level'
    }, {
      className: 'section-label',
      template: instructions
      //template: instruction2,
    }];
    for (let i = 0; i < skillcodeList.length; i++) {
      this.ratingFields.push({
        key: skillcodeList[i].skillcode,
        type: 'radio',
        props: {
          label: skillcodeList[i].skillcode + ' ' + skillcodeList[i].description,
          options: this.gradeLetters,
          required: true,
          placeholder: this.selectRatingPlaceholder
        }
      });
    }
    // combine three section 1, 2 and 3
    this.fields = this.generalFields.concat(this.ratingFields).concat(this.summaryFields);
    return this.fields;
  }
  static #_ = this.ɵfac = function FormfieldSkillRatingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FormfieldSkillRatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_app_services_form_formfield_control_service__WEBPACK_IMPORTED_MODULE_1__.FormfieldControlService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: FormfieldSkillRatingService,
    factory: FormfieldSkillRatingService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 567:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-addons.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapAddonsModule: () => (/* binding */ FormlyBootstrapAddonsModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = ["fieldTypeTemplate"];
function FormlyWrapperAddons_ng_template_0_div_1_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.props.addonLeft.class);
  }
}
function FormlyWrapperAddons_ng_template_0_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.props.addonLeft.text);
  }
}
function FormlyWrapperAddons_ng_template_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormlyWrapperAddons_ng_template_0_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.addonLeftClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyWrapperAddons_ng_template_0_div_1_i_1_Template, 1, 1, "i", 5)(2, FormlyWrapperAddons_ng_template_0_div_1_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-group-btn", ctx_r1.props.addonLeft.onClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonLeft.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonLeft.text);
  }
}
function FormlyWrapperAddons_ng_template_0_div_4_i_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.props.addonRight.class);
  }
}
function FormlyWrapperAddons_ng_template_0_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.props.addonRight.text);
  }
}
function FormlyWrapperAddons_ng_template_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormlyWrapperAddons_ng_template_0_div_4_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.addonRightClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyWrapperAddons_ng_template_0_div_4_i_1_Template, 1, 1, "i", 5)(2, FormlyWrapperAddons_ng_template_0_div_4_span_2_Template, 2, 1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("input-group-btn", ctx_r1.props.addonRight.onClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonRight.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonRight.text);
  }
}
function FormlyWrapperAddons_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyWrapperAddons_ng_template_0_div_1_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormlyWrapperAddons_ng_template_0_div_4_Template, 3, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-validation", ctx_r1.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonLeft);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.props.addonRight);
  }
}
class FormlyWrapperAddons extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper {
  constructor(hostContainerRef) {
    super();
    this.hostContainerRef = hostContainerRef;
  }
  set content(templateRef) {
    if (templateRef && this.hostContainerRef) {
      this.hostContainerRef.createEmbeddedView(templateRef);
    }
  }
  addonRightClick($event) {
    this.props.addonRight.onClick?.(this.field, $event);
  }
  addonLeftClick($event) {
    this.props.addonLeft.onClick?.(this.field, $event);
  }
}
FormlyWrapperAddons.ɵfac = function FormlyWrapperAddons_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyWrapperAddons)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
FormlyWrapperAddons.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyWrapperAddons,
  selectors: [["formly-wrapper-addons"]],
  viewQuery: function FormlyWrapperAddons_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], ["fieldComponent", ""], [1, "input-group"], ["class", "input-group-text", 3, "input-group-btn", "click", 4, "ngIf"], [1, "input-group-text", 3, "click"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"]],
  template: function FormlyWrapperAddons_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyWrapperAddons_ng_template_0_Template, 5, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
  styles: ["formly-wrapper-form-field .input-group-btn{cursor:pointer}\n"],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyWrapperAddons, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-wrapper-addons',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      template: "<ng-template #fieldTypeTemplate>\n  <div class=\"input-group\" [class.has-validation]=\"showError\">\n    <div\n      class=\"input-group-text\"\n      *ngIf=\"props.addonLeft\"\n      [class.input-group-btn]=\"props.addonLeft.onClick\"\n      (click)=\"addonLeftClick($event)\"\n    >\n      <i [ngClass]=\"props.addonLeft.class\" *ngIf=\"props.addonLeft.class\"></i>\n      <span *ngIf=\"props.addonLeft.text\">{{ props.addonLeft.text }}</span>\n    </div>\n    <ng-container #fieldComponent></ng-container>\n    <div\n      class=\"input-group-text\"\n      *ngIf=\"props.addonRight\"\n      [class.input-group-btn]=\"props.addonRight.onClick\"\n      (click)=\"addonRightClick($event)\"\n    >\n      <i [ngClass]=\"props.addonRight.class\" *ngIf=\"props.addonRight.class\"></i>\n      <span *ngIf=\"props.addonRight.text\">{{ props.addonRight.text }}</span>\n    </div>\n  </div>\n</ng-template>\n",
      styles: ["formly-wrapper-form-field .input-group-btn{cursor:pointer}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fieldTypeTemplate', {
        static: true
      }]
    }]
  });
})();
function addonsExtension(field) {
  if (!field.props || field.wrappers && field.wrappers.indexOf('addons') !== -1) {
    return;
  }
  if (field.props.addonLeft || field.props.addonRight) {
    field.wrappers = [...(field.wrappers || []), 'addons'];
  }
}
class FormlyBootstrapAddonsModule {}
FormlyBootstrapAddonsModule.ɵfac = function FormlyBootstrapAddonsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapAddonsModule)();
};
FormlyBootstrapAddonsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapAddonsModule
});
FormlyBootstrapAddonsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild({
    wrappers: [{
      name: 'addons',
      component: FormlyWrapperAddons
    }],
    extensions: [{
      name: 'addons',
      extension: {
        postPopulate: addonsExtension
      }
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapAddonsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyWrapperAddons],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild({
        wrappers: [{
          name: 'addons',
          component: FormlyWrapperAddons
        }],
        extensions: [{
          name: 'addons',
          extension: {
            postPopulate: addonsExtension
          }
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5801:
/*!***************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-checkbox.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapCheckboxModule: () => (/* binding */ FormlyBootstrapCheckboxModule),
/* harmony export */   FormlyFieldCheckbox: () => (/* binding */ FormlyFieldCheckbox)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);









const _c0 = (a0, a1) => ({
  "form-check-inline": a0,
  "form-switch": a1
});
function FormlyFieldCheckbox_ng_template_0_label_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FormlyFieldCheckbox_ng_template_0_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormlyFieldCheckbox_ng_template_0_label_2_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.props.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.props.required && ctx_r0.props.hideRequiredMarker !== true);
  }
}
function FormlyFieldCheckbox_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormlyFieldCheckbox_ng_template_0_label_2_Template, 3, 3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, ctx_r0.props.formCheck === "inline" || ctx_r0.props.formCheck === "inline-switch", ctx_r0.props.formCheck === "switch" || ctx_r0.props.formCheck === "inline-switch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.showError)("position-static", ctx_r0.props.formCheck === "nolabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("indeterminate", ctx_r0.props.indeterminate && ctx_r0.formControl.value == null)("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r0.id + "-formly-validation-error")("aria-invalid", ctx_r0.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.props.formCheck !== "nolabel");
  }
}
class FormlyFieldCheckbox extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        indeterminate: true,
        hideLabel: true,
        formCheck: 'default'
      }
    };
  }
}
FormlyFieldCheckbox.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyFieldCheckbox_BaseFactory;
  return function FormlyFieldCheckbox_Factory(__ngFactoryType__) {
    return (ɵFormlyFieldCheckbox_BaseFactory || (ɵFormlyFieldCheckbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldCheckbox)))(__ngFactoryType__ || FormlyFieldCheckbox);
  };
})();
FormlyFieldCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldCheckbox,
  selectors: [["formly-field-checkbox"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], [1, "form-check", 3, "ngClass"], ["type", "checkbox", 1, "form-check-input", 3, "indeterminate", "formControl", "formlyAttributes"], ["class", "form-check-label", 3, "for", 4, "ngIf"], [1, "form-check-label", 3, "for"], ["aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true"]],
  template: function FormlyFieldCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldCheckbox_ng_template_0_Template, 3, 14, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["ɵFormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-checkbox',
      template: `
    <ng-template #fieldTypeTemplate>
      <div
        class="form-check"
        [ngClass]="{
          'form-check-inline': props.formCheck === 'inline' || props.formCheck === 'inline-switch',
          'form-switch': props.formCheck === 'switch' || props.formCheck === 'inline-switch'
        }"
      >
        <input
          type="checkbox"
          [class.is-invalid]="showError"
          class="form-check-input"
          [class.position-static]="props.formCheck === 'nolabel'"
          [indeterminate]="props.indeterminate && formControl.value == null"
          [formControl]="formControl"
          [formlyAttributes]="field"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
        />
        <label *ngIf="props.formCheck !== 'nolabel'" [for]="id" class="form-check-label">
          {{ props.label }}
          <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
        </label>
      </div>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class FormlyBootstrapCheckboxModule {}
FormlyBootstrapCheckboxModule.ɵfac = function FormlyBootstrapCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapCheckboxModule)();
};
FormlyBootstrapCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapCheckboxModule
});
FormlyBootstrapCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
    types: [{
      name: 'checkbox',
      component: FormlyFieldCheckbox,
      wrappers: ['form-field']
    }, {
      name: 'boolean',
      extends: 'checkbox'
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldCheckbox],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
        types: [{
          name: 'checkbox',
          component: FormlyFieldCheckbox,
          wrappers: ['form-field']
        }, {
          name: 'boolean',
          extends: 'checkbox'
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1651:
/*!*****************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-form-field.mjs ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldType: () => (/* binding */ FieldType),
/* harmony export */   FormlyBootstrapFormFieldModule: () => (/* binding */ FormlyBootstrapFormFieldModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);







function FormlyWrapperFormField_ng_template_0_label_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FormlyWrapperFormField_ng_template_0_label_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormlyWrapperFormField_ng_template_0_label_0_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.props.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.props.required && ctx_r0.props.hideRequiredMarker !== true);
  }
}
function FormlyWrapperFormField_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyWrapperFormField_ng_template_0_label_0_Template, 3, 3, "label", 6);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.props.label && ctx_r0.props.hideLabel !== true);
  }
}
function FormlyWrapperFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const labelTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r2);
  }
}
function FormlyWrapperFormField_ng_template_4_Template(rf, ctx) {}
function FormlyWrapperFormField_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const labelTemplate_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", labelTemplate_r2);
  }
}
function FormlyWrapperFormField_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "formly-validation-message", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "block");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx_r0.id, "-formly-validation-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx_r0.field);
  }
}
function FormlyWrapperFormField_small_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.props.description);
  }
}
const _c0 = ["fieldTypeTemplate"];
class FormlyWrapperFormField extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldWrapper {}
FormlyWrapperFormField.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyWrapperFormField_BaseFactory;
  return function FormlyWrapperFormField_Factory(__ngFactoryType__) {
    return (ɵFormlyWrapperFormField_BaseFactory || (ɵFormlyWrapperFormField_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyWrapperFormField)))(__ngFactoryType__ || FormlyWrapperFormField);
  };
})();
FormlyWrapperFormField.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyWrapperFormField,
  selectors: [["formly-wrapper-form-field"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 8,
  consts: [["labelTemplate", ""], ["fieldComponent", ""], [1, "mb-3"], [4, "ngIf"], ["class", "invalid-feedback", 3, "display", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], ["class", "form-label", 4, "ngIf"], [1, "form-label"], ["aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true"], [3, "ngTemplateOutlet"], [1, "invalid-feedback"], ["role", "alert", 3, "id", "field"], [1, "form-text", "text-muted"]],
  template: function FormlyWrapperFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyWrapperFormField_ng_template_0_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormlyWrapperFormField_ng_container_3_Template, 2, 1, "ng-container", 3)(4, FormlyWrapperFormField_ng_template_4_Template, 0, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, FormlyWrapperFormField_ng_container_6_Template, 2, 1, "ng-container", 3)(7, FormlyWrapperFormField_div_7_Template, 2, 5, "div", 4)(8, FormlyWrapperFormField_small_8_Template, 2, 1, "small", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-floating", ctx.props.labelPosition === "floating")("has-error", ctx.showError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.labelPosition !== "floating");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.labelPosition === "floating");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.props.description);
    }
  },
  dependencies: [_ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__["ɵFormlyValidationMessage"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyWrapperFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-wrapper-form-field',
      template: `
    <ng-template #labelTemplate>
      <label *ngIf="props.label && props.hideLabel !== true" [attr.for]="id" class="form-label">
        {{ props.label }}
        <span *ngIf="props.required && props.hideRequiredMarker !== true" aria-hidden="true">*</span>
      </label>
    </ng-template>

    <div class="mb-3" [class.form-floating]="props.labelPosition === 'floating'" [class.has-error]="showError">
      <ng-container *ngIf="props.labelPosition !== 'floating'">
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      </ng-container>

      <ng-template #fieldComponent></ng-template>

      <ng-container *ngIf="props.labelPosition === 'floating'">
        <ng-container [ngTemplateOutlet]="labelTemplate"></ng-container>
      </ng-container>

      <div *ngIf="showError" class="invalid-feedback" [style.display]="'block'">
        <formly-validation-message
          id="{{ id }}-formly-validation-error"
          [field]="field"
          role="alert"
        ></formly-validation-message>
      </div>

      <small *ngIf="props.description" class="form-text text-muted">{{ props.description }}</small>
    </div>
  `
    }]
  }], null, null);
})();
class FormlyBootstrapFormFieldModule {}
FormlyBootstrapFormFieldModule.ɵfac = function FormlyBootstrapFormFieldModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapFormFieldModule)();
};
FormlyBootstrapFormFieldModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapFormFieldModule
});
FormlyBootstrapFormFieldModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild({
    wrappers: [{
      name: 'form-field',
      component: FormlyWrapperFormField
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyWrapperFormField],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FormlyModule.forChild({
        wrappers: [{
          name: 'form-field',
          component: FormlyWrapperFormField
        }]
      })]
    }]
  }], null, null);
})();
class FieldType extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor(hostContainerRef) {
    super();
    this.hostContainerRef = hostContainerRef;
  }
  set content(templateRef) {
    if (templateRef && this.hostContainerRef) {
      this.hostContainerRef.createEmbeddedView(templateRef);
    }
  }
}
FieldType.ɵfac = function FieldType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FieldType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, 8));
};
FieldType.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FieldType,
  viewQuery: function FieldType_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldType, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fieldTypeTemplate', {
        static: true
      }]
    }]
  });
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1937:
/*!************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-input.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapInputModule: () => (/* binding */ FormlyBootstrapInputModule),
/* harmony export */   FormlyFieldInput: () => (/* binding */ FormlyFieldInput)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);









function FormlyFieldInput_ng_template_0_input_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 3);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx_r0.type)("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r0.id + "-formly-validation-error")("aria-invalid", ctx_r0.showError);
  }
}
function FormlyFieldInput_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.formControl)("formlyAttributes", ctx_r0.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r0.id + "-formly-validation-error")("aria-invalid", ctx_r0.showError);
  }
}
function FormlyFieldInput_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldInput_ng_template_0_input_0_Template, 1, 7, "input", 2)(1, FormlyFieldInput_ng_template_0_ng_template_1_Template, 1, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const numberTmp_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.type !== "number")("ngIfElse", numberTmp_r2);
  }
}
class FormlyFieldInput extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  get type() {
    return this.props.type || 'text';
  }
}
FormlyFieldInput.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyFieldInput_BaseFactory;
  return function FormlyFieldInput_Factory(__ngFactoryType__) {
    return (ɵFormlyFieldInput_BaseFactory || (ɵFormlyFieldInput_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldInput)))(__ngFactoryType__ || FormlyFieldInput);
  };
})();
FormlyFieldInput.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldInput,
  selectors: [["formly-field-input"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], ["numberTmp", ""], ["class", "form-control", 3, "type", "formControl", "formlyAttributes", "is-invalid", 4, "ngIf", "ngIfElse"], [1, "form-control", 3, "type", "formControl", "formlyAttributes"], ["type", "number", 1, "form-control", 3, "formControl", "formlyAttributes"]],
  template: function FormlyFieldInput_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldInput_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["ɵFormlyAttributes"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-input',
      template: `
    <ng-template #fieldTypeTemplate>
      <input
        *ngIf="type !== 'number'; else numberTmp"
        [type]="type"
        [formControl]="formControl"
        class="form-control"
        [formlyAttributes]="field"
        [class.is-invalid]="showError"
        [attr.aria-describedby]="id + '-formly-validation-error'"
        [attr.aria-invalid]="showError"
      />
      <ng-template #numberTmp>
        <input
          type="number"
          [formControl]="formControl"
          class="form-control"
          [formlyAttributes]="field"
          [class.is-invalid]="showError"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
        />
      </ng-template>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class FormlyBootstrapInputModule {}
FormlyBootstrapInputModule.ɵfac = function FormlyBootstrapInputModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapInputModule)();
};
FormlyBootstrapInputModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapInputModule
});
FormlyBootstrapInputModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
    types: [{
      name: 'input',
      component: FormlyFieldInput,
      wrappers: ['form-field']
    }, {
      name: 'string',
      extends: 'input'
    }, {
      name: 'number',
      extends: 'input',
      defaultOptions: {
        props: {
          type: 'number'
        }
      }
    }, {
      name: 'integer',
      extends: 'input',
      defaultOptions: {
        props: {
          type: 'number'
        }
      }
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldInput],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
        types: [{
          name: 'input',
          component: FormlyFieldInput,
          wrappers: ['form-field']
        }, {
          name: 'string',
          extends: 'input'
        }, {
          name: 'number',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number'
            }
          }
        }, {
          name: 'integer',
          extends: 'input',
          defaultOptions: {
            props: {
              type: 'number'
            }
          }
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7122:
/*!********************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-multicheckbox.mjs ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapMultiCheckboxModule: () => (/* binding */ FormlyBootstrapMultiCheckboxModule),
/* harmony export */   FormlyFieldMultiCheckbox: () => (/* binding */ FormlyFieldMultiCheckbox)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core/select */ 9774);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);










const _c0 = (a0, a1) => ({
  "form-check-inline": a0,
  "form-switch": a1
});
function FormlyFieldMultiCheckbox_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormlyFieldMultiCheckbox_ng_template_0_div_0_Template_input_change_1_listener($event) {
      const option_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onChange(option_r2.value, $event.target.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c0, ctx_r2.props.formCheck === "inline" || ctx_r2.props.formCheck === "inline-switch", ctx_r2.props.formCheck === "switch" || ctx_r2.props.formCheck === "inline-switch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id + "_" + i_r4)("value", option_r2.value)("checked", ctx_r2.isChecked(option_r2))("formlyAttributes", ctx_r2.field)("disabled", ctx_r2.formControl.disabled || option_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r2.id + "-formly-validation-error")("aria-invalid", ctx_r2.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r2.id + "_" + i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r2.label, " ");
  }
}
function FormlyFieldMultiCheckbox_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldMultiCheckbox_ng_template_0_div_0_Template, 4, 15, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "formlySelectOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r2.props.options, ctx_r2.field)));
  }
}
class FormlyFieldMultiCheckbox extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        formCheck: 'default' // 'default' | 'inline' | 'switch' | 'inline-switch'
      }
    };
  }
  onChange(value, checked) {
    this.formControl.markAsDirty();
    if (this.props.type === 'array') {
      this.formControl.patchValue(checked ? [...(this.formControl.value || []), value] : [...(this.formControl.value || [])].filter(o => o !== value));
    } else {
      this.formControl.patchValue({
        ...this.formControl.value,
        [value]: checked
      });
    }
    this.formControl.markAsTouched();
  }
  isChecked(option) {
    const value = this.formControl.value;
    return value && (this.props.type === 'array' ? value.indexOf(option.value) !== -1 : value[option.value]);
  }
}
FormlyFieldMultiCheckbox.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyFieldMultiCheckbox_BaseFactory;
  return function FormlyFieldMultiCheckbox_Factory(__ngFactoryType__) {
    return (ɵFormlyFieldMultiCheckbox_BaseFactory || (ɵFormlyFieldMultiCheckbox_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldMultiCheckbox)))(__ngFactoryType__ || FormlyFieldMultiCheckbox);
  };
})();
FormlyFieldMultiCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldMultiCheckbox,
  selectors: [["formly-field-multicheckbox"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], ["class", "form-check", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "form-check", 3, "ngClass"], ["type", "checkbox", 1, "form-check-input", 3, "change", "id", "value", "checked", "formlyAttributes", "disabled"], [1, "form-check-label", 3, "for"]],
  template: function FormlyFieldMultiCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldMultiCheckbox_ng_template_0_Template, 3, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["ɵFormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_4__.FormlySelectOptionsPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldMultiCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-multicheckbox',
      template: `
    <ng-template #fieldTypeTemplate>
      <div
        *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index"
        class="form-check"
        [ngClass]="{
          'form-check-inline': props.formCheck === 'inline' || props.formCheck === 'inline-switch',
          'form-switch': props.formCheck === 'switch' || props.formCheck === 'inline-switch'
        }"
      >
        <input
          type="checkbox"
          [id]="id + '_' + i"
          class="form-check-input"
          [class.is-invalid]="showError"
          [value]="option.value"
          [checked]="isChecked(option)"
          [formlyAttributes]="field"
          [disabled]="formControl.disabled || option.disabled"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
          (change)="onChange(option.value, $any($event.target).checked)"
        />
        <label class="form-check-label" [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class FormlyBootstrapMultiCheckboxModule {}
FormlyBootstrapMultiCheckboxModule.ɵfac = function FormlyBootstrapMultiCheckboxModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapMultiCheckboxModule)();
};
FormlyBootstrapMultiCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapMultiCheckboxModule
});
FormlyBootstrapMultiCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_4__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyModule.forChild({
    types: [{
      name: 'multicheckbox',
      component: FormlyFieldMultiCheckbox,
      wrappers: ['form-field']
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapMultiCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldMultiCheckbox],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_4__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyModule.forChild({
        types: [{
          name: 'multicheckbox',
          component: FormlyFieldMultiCheckbox,
          wrappers: ['form-field']
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 6771:
/*!************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-radio.mjs ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapRadioModule: () => (/* binding */ FormlyBootstrapRadioModule),
/* harmony export */   FormlyFieldRadio: () => (/* binding */ FormlyFieldRadio)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core/select */ 9774);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);











function FormlyFieldRadio_ng_template_0_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-check-inline", ctx_r2.props.formCheck === "inline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r2.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.id + "_" + i_r2)("name", ctx_r2.field.name || ctx_r2.id)("value", option_r1.value)("formControl", option_r1.disabled ? ctx_r2.disabledControl : ctx_r2.formControl)("formlyAttributes", ctx_r2.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", option_r1.value)("aria-describedby", ctx_r2.id + "-formly-validation-error")("aria-invalid", ctx_r2.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx_r2.id + "_" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
  }
}
function FormlyFieldRadio_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldRadio_ng_template_0_div_0_Template, 4, 14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "formlySelectOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r2.props.options, ctx_r2.field)));
  }
}
class FormlyFieldRadio extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        formCheck: 'default'
      }
    };
  }
  get disabledControl() {
    return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({
      value: this.formControl.value,
      disabled: true
    });
  }
}
FormlyFieldRadio.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyFieldRadio_BaseFactory;
  return function FormlyFieldRadio_Factory(__ngFactoryType__) {
    return (ɵFormlyFieldRadio_BaseFactory || (ɵFormlyFieldRadio_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldRadio)))(__ngFactoryType__ || FormlyFieldRadio);
  };
})();
FormlyFieldRadio.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldRadio,
  selectors: [["formly-field-radio"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], ["class", "form-check", 3, "form-check-inline", 4, "ngFor", "ngForOf"], [1, "form-check"], ["type", "radio", 1, "form-check-input", 3, "id", "name", "value", "formControl", "formlyAttributes"], [1, "form-check-label", 3, "for"]],
  template: function FormlyFieldRadio_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldRadio_ng_template_0_Template, 3, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__["ɵFormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectOptionsPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldRadio, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-radio',
      template: `
    <ng-template #fieldTypeTemplate>
      <div
        *ngFor="let option of props.options | formlySelectOptions : field | async; let i = index"
        class="form-check"
        [class.form-check-inline]="props.formCheck === 'inline'"
      >
        <input
          type="radio"
          [id]="id + '_' + i"
          class="form-check-input"
          [name]="field.name || id"
          [class.is-invalid]="showError"
          [attr.value]="option.value"
          [value]="option.value"
          [formControl]="option.disabled ? disabledControl : formControl"
          [formlyAttributes]="field"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
        />
        <label class="form-check-label" [for]="id + '_' + i">
          {{ option.label }}
        </label>
      </div>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class FormlyBootstrapRadioModule {}
FormlyBootstrapRadioModule.ɵfac = function FormlyBootstrapRadioModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapRadioModule)();
};
FormlyBootstrapRadioModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapRadioModule
});
FormlyBootstrapRadioModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
    types: [{
      name: 'radio',
      component: FormlyFieldRadio,
      wrappers: ['form-field']
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapRadioModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldRadio],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_5__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forChild({
        types: [{
          name: 'radio',
          component: FormlyFieldRadio,
          wrappers: ['form-field']
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 5066:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-select.mjs ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapSelectModule: () => (/* binding */ FormlyBootstrapSelectModule),
/* harmony export */   FormlyFieldSelect: () => (/* binding */ FormlyFieldSelect)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/core/select */ 9774);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4334);












function FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", opt_r1.value)("disabled", opt_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r1.label, " ");
  }
}
function FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_ng_template_2_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", child_r2.value)("disabled", child_r2.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r2.label, " ");
  }
}
function FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_ng_template_2_option_1_Template, 2, 3, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", opt_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", opt_r1.group);
  }
}
function FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_option_1_Template, 2, 3, "option", 7)(2, FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r1 = ctx.$implicit;
    const optgroup_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !opt_r1.group)("ngIfElse", optgroup_r3);
  }
}
function FormlyFieldSelect_ng_template_0_select_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_select_0_ng_container_1_ng_container_1_Template, 4, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opts_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", opts_r4);
  }
}
function FormlyFieldSelect_ng_template_0_select_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_select_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "formlySelectOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r4.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.formControl)("compareWith", ctx_r4.props.compareWith)("formlyAttributes", ctx_r4.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r4.id + "-formly-validation-error")("aria-invalid", ctx_r4.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 8, ctx_r4.props.options, ctx_r4.field)));
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.props.placeholder);
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", opt_r6.value)("disabled", opt_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", opt_r6.label, " ");
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_ng_template_2_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const child_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", child_r7.value)("disabled", child_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r7.label, " ");
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "optgroup", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_ng_template_2_option_1_Template, 2, 3, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", opt_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", opt_r6.group);
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_option_1_Template, 2, 3, "option", 7)(2, FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_ng_template_2_Template, 2, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    const optgroup_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !opt_r6.group)("ngIfElse", optgroup_r8);
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_ng_container_1_Template, 4, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const opts_r9 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", opts_r9);
  }
}
function FormlyFieldSelect_ng_template_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormlyFieldSelect_ng_template_0_ng_template_1_option_1_Template, 2, 2, "option", 12)(2, FormlyFieldSelect_ng_template_0_ng_template_1_ng_container_2_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "formlySelectOptions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r4.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.formControl)("compareWith", ctx_r4.props.compareWith)("formlyAttributes", ctx_r4.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r4.id + "-formly-validation-error")("aria-invalid", ctx_r4.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.props.placeholder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 9, ctx_r4.props.options, ctx_r4.field)));
  }
}
function FormlyFieldSelect_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldSelect_ng_template_0_select_0_Template, 4, 13, "select", 3)(1, FormlyFieldSelect_ng_template_0_ng_template_1_Template, 5, 14, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const singleSelect_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.props.multiple)("ngIfElse", singleSelect_r10);
  }
}
class FormlyFieldSelect extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor(ngZone, hostContainerRef) {
    super(hostContainerRef);
    this.ngZone = ngZone;
    this.defaultOptions = {
      props: {
        compareWith(o1, o2) {
          return o1 === o2;
        }
      }
    };
  }
  // workaround for https://github.com/angular/angular/issues/10010
  /**
   * TODO: Check if this is still needed
   */
  set selectAccessor(s) {
    if (!s) {
      return;
    }
    const writeValue = s.writeValue.bind(s);
    if (s._getOptionId(s.value) === null) {
      writeValue(s.value);
    }
    s.writeValue = value => {
      const id = s._idCounter;
      writeValue(value);
      if (value === null) {
        this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(() => {
          if (id !== s._idCounter && s._getOptionId(value) === null && s._elementRef.nativeElement.selectedIndex !== -1) {
            writeValue(value);
          }
        });
      }
    };
  }
}
FormlyFieldSelect.ɵfac = function FormlyFieldSelect_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyFieldSelect)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
};
FormlyFieldSelect.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldSelect,
  selectors: [["formly-field-select"]],
  viewQuery: function FormlyFieldSelect_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectAccessor = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], ["singleSelect", ""], ["optgroup", ""], ["class", "form-select", "multiple", "", 3, "formControl", "compareWith", "is-invalid", "formlyAttributes", 4, "ngIf", "ngIfElse"], ["multiple", "", 1, "form-select", 3, "formControl", "compareWith", "formlyAttributes"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "ngValue", "disabled", 4, "ngIf", "ngIfElse"], [3, "ngValue", "disabled"], [3, "label"], [3, "ngValue", "disabled", 4, "ngFor", "ngForOf"], [1, "form-select", 3, "formControl", "compareWith", "formlyAttributes"], [3, "ngValue", 4, "ngIf"], [3, "ngValue"]],
  template: function FormlyFieldSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldSelect_ng_template_0_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__["ɵFormlyAttributes"], _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_6__.FormlySelectOptionsPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-select',
      template: `
    <ng-template #fieldTypeTemplate>
      <select
        *ngIf="props.multiple; else singleSelect"
        class="form-select"
        multiple
        [formControl]="formControl"
        [compareWith]="props.compareWith"
        [class.is-invalid]="showError"
        [formlyAttributes]="field"
        [attr.aria-describedby]="id + '-formly-validation-error'"
        [attr.aria-invalid]="showError"
      >
        <ng-container *ngIf="props.options | formlySelectOptions : field | async as opts">
          <ng-container *ngFor="let opt of opts">
            <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">
              {{ opt.label }}
            </option>
            <ng-template #optgroup>
              <optgroup [label]="opt.label">
                <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                  {{ child.label }}
                </option>
              </optgroup>
            </ng-template>
          </ng-container>
        </ng-container>
      </select>

      <ng-template #singleSelect>
        <select
          class="form-select"
          [formControl]="formControl"
          [compareWith]="props.compareWith"
          [class.is-invalid]="showError"
          [formlyAttributes]="field"
          [attr.aria-describedby]="id + '-formly-validation-error'"
          [attr.aria-invalid]="showError"
        >
          <option *ngIf="props.placeholder" [ngValue]="undefined">{{ props.placeholder }}</option>
          <ng-container *ngIf="props.options | formlySelectOptions : field | async as opts">
            <ng-container *ngFor="let opt of opts">
              <option *ngIf="!opt.group; else optgroup" [ngValue]="opt.value" [disabled]="opt.disabled">
                {{ opt.label }}
              </option>
              <ng-template #optgroup>
                <optgroup [label]="opt.label">
                  <option *ngFor="let child of opt.group" [ngValue]="child.value" [disabled]="child.disabled">
                    {{ child.label }}
                  </option>
                </optgroup>
              </ng-template>
            </ng-container>
          </ng-container>
        </select>
      </ng-template>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }];
  }, {
    selectAccessor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor]
    }]
  });
})();
class FormlyBootstrapSelectModule {}
FormlyBootstrapSelectModule.ɵfac = function FormlyBootstrapSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapSelectModule)();
};
FormlyBootstrapSelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapSelectModule
});
FormlyBootstrapSelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_6__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__.FormlyModule.forChild({
    types: [{
      name: 'select',
      component: FormlyFieldSelect,
      wrappers: ['form-field']
    }, {
      name: 'enum',
      extends: 'select'
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldSelect],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core_select__WEBPACK_IMPORTED_MODULE_6__.FormlySelectModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_5__.FormlyModule.forChild({
        types: [{
          name: 'select',
          component: FormlyFieldSelect,
          wrappers: ['form-field']
        }, {
          name: 'enum',
          extends: 'select'
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4764:
/*!***************************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-textarea.mjs ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapTextAreaModule: () => (/* binding */ FormlyBootstrapTextAreaModule),
/* harmony export */   FormlyFieldTextArea: () => (/* binding */ FormlyFieldTextArea)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/core */ 4385);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);








function FormlyFieldTextArea_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "textarea", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx_r0.showError);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.formControl)("cols", ctx_r0.props.cols)("rows", ctx_r0.props.rows)("formlyAttributes", ctx_r0.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-describedby", ctx_r0.id + "-formly-validation-error")("aria-invalid", ctx_r0.showError);
  }
}
class FormlyFieldTextArea extends _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  constructor() {
    super(...arguments);
    this.defaultOptions = {
      props: {
        cols: 1,
        rows: 1
      }
    };
  }
}
FormlyFieldTextArea.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyFieldTextArea_BaseFactory;
  return function FormlyFieldTextArea_Factory(__ngFactoryType__) {
    return (ɵFormlyFieldTextArea_BaseFactory || (ɵFormlyFieldTextArea_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyFieldTextArea)))(__ngFactoryType__ || FormlyFieldTextArea);
  };
})();
FormlyFieldTextArea.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyFieldTextArea,
  selectors: [["formly-field-textarea"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 0,
  consts: [["fieldTypeTemplate", ""], [1, "form-control", 3, "formControl", "cols", "rows", "formlyAttributes"]],
  template: function FormlyFieldTextArea_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyFieldTextArea_ng_template_0_Template, 1, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__["ɵFormlyAttributes"]],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldTextArea, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field-textarea',
      template: `
    <ng-template #fieldTypeTemplate>
      <textarea
        [formControl]="formControl"
        [cols]="props.cols"
        [rows]="props.rows"
        class="form-control"
        [class.is-invalid]="showError"
        [formlyAttributes]="field"
        [attr.aria-describedby]="id + '-formly-validation-error'"
        [attr.aria-invalid]="showError"
      ></textarea>
    </ng-template>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
class FormlyBootstrapTextAreaModule {}
FormlyBootstrapTextAreaModule.ɵfac = function FormlyBootstrapTextAreaModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapTextAreaModule)();
};
FormlyBootstrapTextAreaModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapTextAreaModule
});
FormlyBootstrapTextAreaModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyModule.forChild({
    types: [{
      name: 'textarea',
      component: FormlyFieldTextArea,
      wrappers: ['form-field']
    }]
  })]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapTextAreaModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyFieldTextArea],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.FormlyModule.forChild({
        types: [{
          name: 'textarea',
          component: FormlyFieldTextArea,
          wrappers: ['form-field']
        }]
      })]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1037:
/*!******************************************************************************!*\
  !*** ./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlyBootstrapModule: () => (/* binding */ FormlyBootstrapModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/bootstrap/form-field */ 1651);
/* harmony import */ var _ngx_formly_bootstrap_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/bootstrap/input */ 1937);
/* harmony import */ var _ngx_formly_bootstrap_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-formly/bootstrap/textarea */ 4764);
/* harmony import */ var _ngx_formly_bootstrap_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/bootstrap/radio */ 6771);
/* harmony import */ var _ngx_formly_bootstrap_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-formly/bootstrap/checkbox */ 5801);
/* harmony import */ var _ngx_formly_bootstrap_multicheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-formly/bootstrap/multicheckbox */ 7122);
/* harmony import */ var _ngx_formly_bootstrap_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-formly/bootstrap/select */ 5066);
/* harmony import */ var _ngx_formly_bootstrap_addons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-formly/bootstrap/addons */ 567);










class FormlyBootstrapModule {}
FormlyBootstrapModule.ɵfac = function FormlyBootstrapModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyBootstrapModule)();
};
FormlyBootstrapModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyBootstrapModule
});
FormlyBootstrapModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_bootstrap_input__WEBPACK_IMPORTED_MODULE_2__.FormlyBootstrapInputModule, _ngx_formly_bootstrap_textarea__WEBPACK_IMPORTED_MODULE_3__.FormlyBootstrapTextAreaModule, _ngx_formly_bootstrap_radio__WEBPACK_IMPORTED_MODULE_4__.FormlyBootstrapRadioModule, _ngx_formly_bootstrap_checkbox__WEBPACK_IMPORTED_MODULE_5__.FormlyBootstrapCheckboxModule, _ngx_formly_bootstrap_multicheckbox__WEBPACK_IMPORTED_MODULE_6__.FormlyBootstrapMultiCheckboxModule, _ngx_formly_bootstrap_select__WEBPACK_IMPORTED_MODULE_7__.FormlyBootstrapSelectModule, _ngx_formly_bootstrap_addons__WEBPACK_IMPORTED_MODULE_8__.FormlyBootstrapAddonsModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyBootstrapModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_ngx_formly_bootstrap_form_field__WEBPACK_IMPORTED_MODULE_1__.FormlyBootstrapFormFieldModule, _ngx_formly_bootstrap_input__WEBPACK_IMPORTED_MODULE_2__.FormlyBootstrapInputModule, _ngx_formly_bootstrap_textarea__WEBPACK_IMPORTED_MODULE_3__.FormlyBootstrapTextAreaModule, _ngx_formly_bootstrap_radio__WEBPACK_IMPORTED_MODULE_4__.FormlyBootstrapRadioModule, _ngx_formly_bootstrap_checkbox__WEBPACK_IMPORTED_MODULE_5__.FormlyBootstrapCheckboxModule, _ngx_formly_bootstrap_multicheckbox__WEBPACK_IMPORTED_MODULE_6__.FormlyBootstrapMultiCheckboxModule, _ngx_formly_bootstrap_select__WEBPACK_IMPORTED_MODULE_7__.FormlyBootstrapSelectModule, _ngx_formly_bootstrap_addons__WEBPACK_IMPORTED_MODULE_8__.FormlyBootstrapAddonsModule]
    }]
  }], null, null);
})();

/*
 * Public API Surface of bootstrap
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9774:
/*!***************************************************************************!*\
  !*** ./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core-select.mjs ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormlySelectModule: () => (/* binding */ FormlySelectModule),
/* harmony export */   FormlySelectOptionsPipe: () => (/* binding */ FormlySelectOptionsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);




class FormlySelectOptionsPipe {
  transform(options, field) {
    if (!(options instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable)) {
      options = this.observableOf(options, field);
    } else {
      this.dispose();
    }
    return options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(value => this.transformOptions(value, field)));
  }
  ngOnDestroy() {
    this.dispose();
  }
  transformOptions(options, field) {
    const to = this.transformSelectProps(field);
    const opts = [];
    const groups = {};
    options?.forEach(option => {
      const o = this.transformOption(option, to);
      if (o.group) {
        const id = groups[o.label];
        if (id === undefined) {
          groups[o.label] = opts.push(o) - 1;
        } else {
          o.group.forEach(o => opts[id].group.push(o));
        }
      } else {
        opts.push(o);
      }
    });
    return opts;
  }
  transformOption(option, props) {
    const group = props.groupProp(option);
    if (Array.isArray(group)) {
      return {
        label: props.labelProp(option),
        group: group.map(opt => this.transformOption(opt, props))
      };
    }
    option = {
      label: props.labelProp(option),
      value: props.valueProp(option),
      disabled: !!props.disabledProp(option)
    };
    if (group) {
      return {
        label: group,
        group: [option]
      };
    }
    return option;
  }
  transformSelectProps(field) {
    const props = field?.props || field?.templateOptions || {};
    const selectPropFn = prop => typeof prop === 'function' ? prop : o => o[prop];
    return {
      groupProp: selectPropFn(props.groupProp || 'group'),
      labelProp: selectPropFn(props.labelProp || 'label'),
      valueProp: selectPropFn(props.valueProp || 'value'),
      disabledProp: selectPropFn(props.disabledProp || 'disabled')
    };
  }
  dispose() {
    if (this._options) {
      this._options.complete();
      this._options = null;
    }
    if (this._subscription) {
      this._subscription.unsubscribe();
      this._subscription = null;
    }
  }
  observableOf(options, f) {
    this.dispose();
    if (f && f.options && f.options.fieldChanges) {
      this._subscription = f.options.fieldChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(({
        property,
        type,
        field
      }) => {
        return type === 'expressionChanges' && (property.indexOf('templateOptions.options') === 0 || property.indexOf('props.options') === 0) && field === f && Array.isArray(field.props.options) && !!this._options;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => this._options.next(f.props.options))).subscribe();
    }
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(options);
    return this._options.asObservable();
  }
}
FormlySelectOptionsPipe.ɵfac = function FormlySelectOptionsPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlySelectOptionsPipe)();
};
FormlySelectOptionsPipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefinePipe"]({
  name: "formlySelectOptions",
  type: FormlySelectOptionsPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FormlySelectOptionsPipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Pipe,
    args: [{
      name: 'formlySelectOptions'
    }]
  }], null, null);
})();
class FormlySelectModule {}
FormlySelectModule.ɵfac = function FormlySelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlySelectModule)();
};
FormlySelectModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: FormlySelectModule
});
FormlySelectModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](FormlySelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule,
    args: [{
      declarations: [FormlySelectOptionsPipe],
      exports: [FormlySelectOptionsPipe]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4385:
/*!********************************************************************!*\
  !*** ./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORMLY_CONFIG: () => (/* binding */ FORMLY_CONFIG),
/* harmony export */   FieldArrayType: () => (/* binding */ FieldArrayType),
/* harmony export */   FieldType: () => (/* binding */ FieldType),
/* harmony export */   FieldWrapper: () => (/* binding */ FieldWrapper),
/* harmony export */   FormlyConfig: () => (/* binding */ FormlyConfig),
/* harmony export */   FormlyField: () => (/* binding */ FormlyField),
/* harmony export */   FormlyForm: () => (/* binding */ FormlyForm),
/* harmony export */   FormlyFormBuilder: () => (/* binding */ FormlyFormBuilder),
/* harmony export */   FormlyModule: () => (/* binding */ FormlyModule),
/* harmony export */   "ɵFormlyAttributes": () => (/* binding */ FormlyAttributes),
/* harmony export */   "ɵFormlyGroup": () => (/* binding */ FormlyGroup),
/* harmony export */   "ɵFormlyTemplate": () => (/* binding */ FormlyTemplate),
/* harmony export */   "ɵFormlyValidationMessage": () => (/* binding */ FormlyValidationMessage),
/* harmony export */   "ɵclone": () => (/* binding */ clone),
/* harmony export */   "ɵdefineHiddenProp": () => (/* binding */ defineHiddenProp),
/* harmony export */   "ɵgetFieldValue": () => (/* binding */ getFieldValue),
/* harmony export */   "ɵhasKey": () => (/* binding */ hasKey),
/* harmony export */   "ɵobserve": () => (/* binding */ observe),
/* harmony export */   "ɵreverseDeepMerge": () => (/* binding */ reverseDeepMerge)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2551);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);









const _c0 = ["container"];
function FormlyField_ng_template_0_Template(rf, ctx) {}
const _c1 = ["*"];
function FormlyGroup_formly_field_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 1);
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", f_r1);
  }
}
const _c2 = ["fieldComponent"];
function disableTreeValidityCall(form, callback) {
  const _updateTreeValidity = form._updateTreeValidity.bind(form);
  form._updateTreeValidity = () => {};
  callback();
  form._updateTreeValidity = _updateTreeValidity;
}
function getFieldId(formId, field, index) {
  if (field.id) {
    return field.id;
  }
  let type = field.type;
  if (!type && field.template) {
    type = 'template';
  }
  if (type instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.Type) {
    type = type.prototype.constructor.name;
  }
  return [formId, type, field.key, index].join('_');
}
function hasKey(field) {
  return !isNil(field.key) && field.key !== '' && (!Array.isArray(field.key) || field.key.length > 0);
}
function getKeyPath(field) {
  if (!hasKey(field)) {
    return [];
  }
  /* We store the keyPath in the field for performance reasons. This function will be called frequently. */
  if (field._keyPath?.key !== field.key) {
    let path = [];
    if (typeof field.key === 'string') {
      const key = field.key.indexOf('[') === -1 ? field.key : field.key.replace(/\[(\w+)\]/g, '.$1');
      path = key.indexOf('.') !== -1 ? key.split('.') : [key];
    } else if (Array.isArray(field.key)) {
      path = field.key.slice(0);
    } else {
      path = [`${field.key}`];
    }
    defineHiddenProp(field, '_keyPath', {
      key: field.key,
      path
    });
  }
  return field._keyPath.path.slice(0);
}
const FORMLY_VALIDATORS = ['required', 'pattern', 'minLength', 'maxLength', 'min', 'max'];
function assignFieldValue(field, value) {
  let paths = getKeyPath(field);
  if (paths.length === 0) {
    return;
  }
  let root = field;
  while (root.parent) {
    root = root.parent;
    paths = [...getKeyPath(root), ...paths];
  }
  if (value === undefined && field.resetOnHide) {
    const k = paths.pop();
    const m = paths.reduce((model, path) => model[path] || {}, root.model);
    delete m[k];
    return;
  }
  assignModelValue(root.model, paths, value);
}
function assignModelValue(model, paths, value) {
  for (let i = 0; i < paths.length - 1; i++) {
    const path = paths[i];
    if (!model[path] || !isObject(model[path])) {
      model[path] = /^\d+$/.test(paths[i + 1]) ? [] : {};
    }
    model = model[path];
  }
  model[paths[paths.length - 1]] = clone(value);
}
function getFieldValue(field) {
  let model = field.parent ? field.parent.model : field.model;
  for (const path of getKeyPath(field)) {
    if (!model) {
      return model;
    }
    model = model[path];
  }
  return model;
}
function reverseDeepMerge(dest, ...args) {
  args.forEach(src => {
    for (const srcArg in src) {
      if (isNil(dest[srcArg]) || isBlankString(dest[srcArg])) {
        dest[srcArg] = clone(src[srcArg]);
      } else if (objAndSameType(dest[srcArg], src[srcArg])) {
        reverseDeepMerge(dest[srcArg], src[srcArg]);
      }
    }
  });
  return dest;
}
// check a value is null or undefined
function isNil(value) {
  return value == null;
}
function isUndefined(value) {
  return value === undefined;
}
function isBlankString(value) {
  return value === '';
}
function isFunction(value) {
  return typeof value === 'function';
}
function objAndSameType(obj1, obj2) {
  return isObject(obj1) && isObject(obj2) && Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2) && !(Array.isArray(obj1) || Array.isArray(obj2));
}
function isObject(x) {
  return x != null && typeof x === 'object';
}
function isPromise(obj) {
  return !!obj && typeof obj.then === 'function';
}
function clone(value) {
  if (!isObject(value) || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(value) || value instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef || /* instanceof SafeHtmlImpl */value.changingThisBreaksApplicationSecurity || ['RegExp', 'FileList', 'File', 'Blob'].indexOf(value.constructor.name) !== -1) {
    return value;
  }
  if (value instanceof Set) {
    return new Set(value);
  }
  if (value instanceof Map) {
    return new Map(value);
  }
  if (value instanceof Uint8Array) {
    return new Uint8Array(value);
  }
  if (value instanceof Uint16Array) {
    return new Uint16Array(value);
  }
  if (value instanceof Uint32Array) {
    return new Uint32Array(value);
  }
  // https://github.com/moment/moment/blob/master/moment.js#L252
  if (value._isAMomentObject && isFunction(value.clone)) {
    return value.clone();
  }
  if (value instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.AbstractControl) {
    return null;
  }
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  if (Array.isArray(value)) {
    return value.slice(0).map(v => clone(v));
  }
  // best way to clone a js object maybe
  // https://stackoverflow.com/questions/41474986/how-to-clone-a-javascript-es6-class-instance
  const proto = Object.getPrototypeOf(value);
  let c = Object.create(proto);
  c = Object.setPrototypeOf(c, proto);
  // need to make a deep copy so we dont use Object.assign
  // also Object.assign wont copy property descriptor exactly
  return Object.keys(value).reduce((newVal, prop) => {
    const propDesc = Object.getOwnPropertyDescriptor(value, prop);
    if (propDesc.get) {
      Object.defineProperty(newVal, prop, propDesc);
    } else {
      newVal[prop] = clone(value[prop]);
    }
    return newVal;
  }, c);
}
function defineHiddenProp(field, prop, defaultValue) {
  Object.defineProperty(field, prop, {
    enumerable: false,
    writable: true,
    configurable: true
  });
  field[prop] = defaultValue;
}
function observeDeep(source, paths, setFn) {
  let observers = [];
  const unsubscribe = () => {
    observers.forEach(observer => observer());
    observers = [];
  };
  const observer = observe(source, paths, ({
    firstChange,
    currentValue
  }) => {
    !firstChange && setFn();
    unsubscribe();
    if (isObject(currentValue) && currentValue.constructor.name === 'Object') {
      Object.keys(currentValue).forEach(prop => {
        observers.push(observeDeep(source, [...paths, prop], setFn));
      });
    }
  });
  return () => {
    observer.unsubscribe();
    unsubscribe();
  };
}
function observe(o, paths, setFn) {
  if (!o._observers) {
    defineHiddenProp(o, '_observers', {});
  }
  let target = o;
  for (let i = 0; i < paths.length - 1; i++) {
    if (!target[paths[i]] || !isObject(target[paths[i]])) {
      target[paths[i]] = /^\d+$/.test(paths[i + 1]) ? [] : {};
    }
    target = target[paths[i]];
  }
  const key = paths[paths.length - 1];
  const prop = paths.join('.');
  if (!o._observers[prop]) {
    o._observers[prop] = {
      value: target[key],
      onChange: []
    };
  }
  const state = o._observers[prop];
  if (target[key] !== state.value) {
    state.value = target[key];
  }
  if (setFn && state.onChange.indexOf(setFn) === -1) {
    state.onChange.push(setFn);
    setFn({
      currentValue: state.value,
      firstChange: true
    });
    if (state.onChange.length >= 1 && isObject(target)) {
      const {
        enumerable
      } = Object.getOwnPropertyDescriptor(target, key) || {
        enumerable: true
      };
      Object.defineProperty(target, key, {
        enumerable,
        configurable: true,
        get: () => state.value,
        set: currentValue => {
          if (currentValue !== state.value) {
            const previousValue = state.value;
            state.value = currentValue;
            state.onChange.forEach(changeFn => changeFn({
              previousValue,
              currentValue,
              firstChange: false
            }));
          }
        }
      });
    }
  }
  return {
    setValue(currentValue, emitEvent = true) {
      if (currentValue === state.value) {
        return;
      }
      const previousValue = state.value;
      state.value = currentValue;
      state.onChange.forEach(changeFn => {
        if (changeFn !== setFn && emitEvent) {
          changeFn({
            previousValue,
            currentValue,
            firstChange: false
          });
        }
      });
    },
    unsubscribe() {
      state.onChange = state.onChange.filter(changeFn => changeFn !== setFn);
      if (state.onChange.length === 0) {
        delete o._observers[prop];
      }
    }
  };
}
function getField(f, key) {
  key = Array.isArray(key) ? key.join('.') : key;
  if (!f.fieldGroup) {
    return undefined;
  }
  for (let i = 0, len = f.fieldGroup.length; i < len; i++) {
    const c = f.fieldGroup[i];
    const k = Array.isArray(c.key) ? c.key.join('.') : c.key;
    if (k === key) {
      return c;
    }
    if (c.fieldGroup && (isNil(k) || key.indexOf(`${k}.`) === 0)) {
      const field = getField(c, isNil(k) ? key : key.slice(k.length + 1));
      if (field) {
        return field;
      }
    }
  }
  return undefined;
}
function markFieldForCheck(field) {
  field._componentRefs?.forEach(ref => {
    // NOTE: we cannot use ref.changeDetectorRef, see https://github.com/ngx-formly/ngx-formly/issues/2191
    if (ref instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentRef) {
      const changeDetectorRef = ref.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      changeDetectorRef.markForCheck();
    } else {
      ref.markForCheck();
    }
  });
}
function isNoopNgZone(ngZone) {
  return ngZone instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵNoopNgZone"];
}
function isHiddenField(field) {
  const isHidden = f => f.hide || f.expressions?.hide || f.hideExpression;
  let setDefaultValue = !field.resetOnHide || !isHidden(field);
  if (!isHidden(field) && field.resetOnHide) {
    let parent = field.parent;
    while (parent && !isHidden(parent)) {
      parent = parent.parent;
    }
    setDefaultValue = !parent || !isHidden(parent);
  }
  return !setDefaultValue;
}
function isSignalRequired() {
  return +_angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION.major >= 18 && +_angular_core__WEBPACK_IMPORTED_MODULE_0__.VERSION.minor >= 1;
}

/**
 * An InjectionToken for registering additional formly config options (types, wrappers ...).
 */
const FORMLY_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FORMLY_CONFIG');
/**
 * Maintains list of formly config options. This can be used to register new field type.
 */
class FormlyConfig {
  constructor() {
    this.types = {};
    this.validators = {};
    this.wrappers = {};
    this.messages = {};
    this.extras = {
      checkExpressionOn: 'modelChange',
      lazyRender: true,
      resetFieldOnHide: true,
      renderFormlyFieldElement: true,
      showError(field) {
        return field.formControl?.invalid && (field.formControl?.touched || field.options.parentForm?.submitted || !!field.field.validation?.show);
      }
    };
    this.extensions = {};
    this.presets = {};
    this.extensionsByPriority = {};
  }
  addConfig(config) {
    if (config.types) {
      config.types.forEach(type => this.setType(type));
    }
    if (config.validators) {
      config.validators.forEach(validator => this.setValidator(validator));
    }
    if (config.wrappers) {
      config.wrappers.forEach(wrapper => this.setWrapper(wrapper));
    }
    if (config.validationMessages) {
      config.validationMessages.forEach(validation => this.addValidatorMessage(validation.name, validation.message));
    }
    if (config.extensions) {
      this.setSortedExtensions(config.extensions);
    }
    if (config.extras) {
      this.extras = {
        ...this.extras,
        ...config.extras
      };
    }
    if (config.presets) {
      this.presets = {
        ...this.presets,
        ...config.presets.reduce((acc, curr) => ({
          ...acc,
          [curr.name]: curr.config
        }), {})
      };
    }
  }
  /**
   * Allows you to specify a custom type which you can use in your field configuration.
   * You can pass an object of options, or an array of objects of options.
   */
  setType(options) {
    if (Array.isArray(options)) {
      options.forEach(option => this.setType(option));
    } else {
      if (!this.types[options.name]) {
        this.types[options.name] = {
          name: options.name
        };
      }
      ['component', 'extends', 'defaultOptions', 'wrappers'].forEach(prop => {
        if (options.hasOwnProperty(prop)) {
          this.types[options.name][prop] = options[prop];
        }
      });
    }
  }
  getType(name, throwIfNotFound = false) {
    if (name instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.Type) {
      return {
        component: name,
        name: name.prototype.constructor.name
      };
    }
    if (!this.types[name]) {
      if (throwIfNotFound) {
        throw new Error(`[Formly Error] The type "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
      }
      return null;
    }
    this.mergeExtendedType(name);
    return this.types[name];
  }
  /** @ignore */
  getMergedField(field = {}) {
    const type = this.getType(field.type);
    if (!type) {
      return;
    }
    if (type.defaultOptions) {
      reverseDeepMerge(field, type.defaultOptions);
    }
    const extendDefaults = type.extends && this.getType(type.extends).defaultOptions;
    if (extendDefaults) {
      reverseDeepMerge(field, extendDefaults);
    }
    if (field?.optionsTypes) {
      field.optionsTypes.forEach(option => {
        const defaultOptions = this.getType(option).defaultOptions;
        if (defaultOptions) {
          reverseDeepMerge(field, defaultOptions);
        }
      });
    }
    const componentRef = this.resolveFieldTypeRef(field);
    if (componentRef?.instance?.defaultOptions) {
      reverseDeepMerge(field, componentRef.instance.defaultOptions);
    }
    if (!field.wrappers && type.wrappers) {
      field.wrappers = [...type.wrappers];
    }
  }
  /** @ignore @internal */
  resolveFieldTypeRef(field = {}) {
    const type = this.getType(field.type);
    if (!type) {
      return null;
    }
    if (!type.component || type._componentRef) {
      return type._componentRef;
    }
    const {
      _viewContainerRef,
      _injector
    } = field.options;
    if (!_viewContainerRef || !_injector) {
      return null;
    }
    const componentRef = _viewContainerRef.createComponent(type.component, {
      injector: _injector
    });
    defineHiddenProp(type, '_componentRef', componentRef);
    try {
      componentRef.destroy();
    } catch (e) {
      console.error(`An error occurred while destroying the Formly component type "${field.type}"`, e);
    }
    return type._componentRef;
  }
  setWrapper(options) {
    this.wrappers[options.name] = options;
    if (options.types) {
      options.types.forEach(type => {
        this.setTypeWrapper(type, options.name);
      });
    }
  }
  getWrapper(name) {
    if (name instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.Type) {
      return {
        component: name,
        name: name.prototype.constructor.name
      };
    }
    if (!this.wrappers[name]) {
      throw new Error(`[Formly Error] The wrapper "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
    }
    return this.wrappers[name];
  }
  /** @ignore */
  setTypeWrapper(type, name) {
    if (!this.types[type]) {
      this.types[type] = {};
    }
    if (!this.types[type].wrappers) {
      this.types[type].wrappers = [];
    }
    if (this.types[type].wrappers.indexOf(name) === -1) {
      this.types[type].wrappers.push(name);
    }
  }
  setValidator(options) {
    this.validators[options.name] = options;
  }
  getValidator(name) {
    if (!this.validators[name]) {
      throw new Error(`[Formly Error] The validator "${name}" could not be found. Please make sure that is registered through the FormlyModule declaration.`);
    }
    return this.validators[name];
  }
  addValidatorMessage(name, message) {
    this.messages[name] = message;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      const deprecated = {
        minlength: 'minLength',
        maxlength: 'maxLength'
      };
      if (deprecated[name]) {
        console.warn(`Formly deprecation: passing validation messages key '${name}' is deprecated since v6.0, use '${deprecated[name]}' instead.`);
        this.messages[deprecated[name]] = message;
      }
    }
  }
  getValidatorMessage(name) {
    return this.messages[name];
  }
  setSortedExtensions(extensionOptions) {
    // insert new extensions, grouped by priority
    extensionOptions.forEach(extensionOption => {
      const priority = extensionOption.priority ?? 1;
      this.extensionsByPriority[priority] = {
        ...this.extensionsByPriority[priority],
        [extensionOption.name]: extensionOption.extension
      };
    });
    // flatten extensions object with sorted keys
    this.extensions = Object.keys(this.extensionsByPriority).map(Number).sort((a, b) => a - b).reduce((acc, prio) => ({
      ...acc,
      ...this.extensionsByPriority[prio]
    }), {});
  }
  mergeExtendedType(name) {
    if (!this.types[name].extends) {
      return;
    }
    const extendedType = this.getType(this.types[name].extends);
    if (!this.types[name].component) {
      this.types[name].component = extendedType.component;
    }
    if (!this.types[name].wrappers) {
      this.types[name].wrappers = extendedType.wrappers;
    }
  }
}
FormlyConfig.ɵfac = function FormlyConfig_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyConfig)();
};
FormlyConfig.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FormlyConfig,
  factory: FormlyConfig.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyConfig, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class FormlyFormBuilder {
  constructor(config, injector, viewContainerRef, parentForm) {
    this.config = config;
    this.injector = injector;
    this.viewContainerRef = viewContainerRef;
    this.parentForm = parentForm;
  }
  buildForm(form, fieldGroup = [], model, options) {
    this.build({
      fieldGroup,
      model,
      form,
      options
    });
  }
  build(field) {
    if (!this.config.extensions.core) {
      throw new Error('NgxFormly: missing `forRoot()` call. use `forRoot()` when registering the `FormlyModule`.');
    }
    if (!field.parent) {
      this._setOptions(field);
    }
    disableTreeValidityCall(field.form, () => {
      this._build(field);
      // TODO: add test for https://github.com/ngx-formly/ngx-formly/issues/3910
      if (!field.parent || field.fieldArray) {
        // detect changes early to avoid reset value by hidden fields
        const options = field.options;
        if (field.parent && isHiddenField(field)) {
          // when hide is used in expression set defaul value will not be set until detect hide changes
          // which causes default value not set on new item is added
          options._hiddenFieldsForCheck?.push(field);
        }
        options.checkExpressions?.(field, true);
        options._detectChanges?.(field);
      }
    });
  }
  _build(field) {
    if (!field) {
      return;
    }
    const extensions = Object.values(this.config.extensions);
    extensions.forEach(extension => extension.prePopulate?.(field));
    extensions.forEach(extension => extension.onPopulate?.(field));
    field.fieldGroup?.forEach(f => this._build(f));
    extensions.forEach(extension => extension.postPopulate?.(field));
  }
  _setOptions(field) {
    field.form = field.form || new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
    field.model = field.model || {};
    field.options = field.options || {};
    const options = field.options;
    if (!options._viewContainerRef) {
      defineHiddenProp(options, '_viewContainerRef', this.viewContainerRef);
    }
    if (!options._injector) {
      defineHiddenProp(options, '_injector', this.injector);
    }
    if (!options.build) {
      options._buildForm = () => {
        console.warn(`Formly: 'options._buildForm' is deprecated since v6.0, use 'options.build' instead.`);
        this.build(field);
      };
      options.build = (f = field) => {
        this.build(f);
        return f;
      };
    }
    if (!options.parentForm && this.parentForm) {
      defineHiddenProp(options, 'parentForm', this.parentForm);
      if (!isSignalRequired()) {
        observe(options, ['parentForm', 'submitted'], ({
          firstChange
        }) => {
          if (!firstChange) {
            options.detectChanges(field);
          }
        });
      }
    }
  }
}
FormlyFormBuilder.ɵfac = function FormlyFormBuilder_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyFormBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, 8));
};
FormlyFormBuilder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FormlyFormBuilder,
  factory: FormlyFormBuilder.ɵfac,
  providedIn: 'root'
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFormBuilder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: FormlyConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();
function unregisterControl(field, emitEvent = false) {
  const control = field.formControl;
  const fieldIndex = control._fields ? control._fields.indexOf(field) : -1;
  if (fieldIndex !== -1) {
    control._fields.splice(fieldIndex, 1);
  }
  const form = control.parent;
  if (!form) {
    return;
  }
  const opts = {
    emitEvent
  };
  if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
    const key = form.controls.findIndex(c => c === control);
    if (key !== -1) {
      form.removeAt(key, opts);
    }
  } else if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup) {
    const paths = getKeyPath(field);
    const key = paths[paths.length - 1];
    if (form.get([key]) === control) {
      form.removeControl(key, opts);
    }
  }
  control.setParent(null);
}
function findControl(field) {
  if (field.formControl) {
    return field.formControl;
  }
  if (field.shareFormControl === false) {
    return null;
  }
  return field.form?.get(getKeyPath(field));
}
function registerControl(field, control, emitEvent = false) {
  control = control || field.formControl;
  if (!control._fields) {
    defineHiddenProp(control, '_fields', []);
  }
  if (control._fields.indexOf(field) === -1) {
    control._fields.push(field);
  }
  if (!field.formControl && control) {
    defineHiddenProp(field, 'formControl', control);
    control.setValidators(null);
    control.setAsyncValidators(null);
    field.props.disabled = !!field.props.disabled;
    const disabledObserver = observe(field, ['props', 'disabled'], ({
      firstChange,
      currentValue
    }) => {
      if (!firstChange) {
        currentValue ? field.formControl.disable() : field.formControl.enable();
      }
    });
    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
      control.registerOnDisabledChange(disabledObserver.setValue);
    }
  }
  if (!field.form || !hasKey(field)) {
    return;
  }
  let form = field.form;
  const paths = getKeyPath(field);
  const value = getFieldValue(field);
  if (!(isNil(control.value) && isNil(value)) && control.value !== value && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
    control.patchValue(value);
  }
  for (let i = 0; i < paths.length - 1; i++) {
    const path = paths[i];
    if (!form.get([path])) {
      form.setControl(path, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}), {
        emitEvent
      });
    }
    form = form.get([path]);
  }
  const key = paths[paths.length - 1];
  if (!field._hide && form.get([key]) !== control) {
    form.setControl(key, control, {
      emitEvent
    });
  }
}
function updateValidity(c, onlySelf = false) {
  const status = c.status;
  const value = c.value;
  c.updateValueAndValidity({
    emitEvent: false,
    onlySelf
  });
  if (status !== c.status) {
    c.statusChanges.emit(c.status);
  }
  if (value !== c.value) {
    c.valueChanges.emit(c.value);
  }
}
function clearControl(form) {
  delete form?._fields;
  form.setValidators(null);
  form.setAsyncValidators(null);
  if (form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup || form instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
    Object.values(form.controls).forEach(c => clearControl(c));
  }
}
class FormlyTemplate {
  constructor(ref) {
    this.ref = ref;
  }
  ngOnChanges() {
    this.name = this.name || 'formly-group';
  }
}
FormlyTemplate.ɵfac = function FormlyTemplate_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyTemplate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
FormlyTemplate.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FormlyTemplate,
  selectors: [["", "formlyTemplate", ""]],
  inputs: {
    name: [0, "formlyTemplate", "name"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyTemplate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[formlyTemplate]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['formlyTemplate']
    }]
  });
})();
// workarround for https://github.com/angular/angular/issues/43227#issuecomment-904173738
class FormlyFieldTemplates {}
FormlyFieldTemplates.ɵfac = function FormlyFieldTemplates_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyFieldTemplates)();
};
FormlyFieldTemplates.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FormlyFieldTemplates,
  factory: FormlyFieldTemplates.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyFieldTemplates, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * The `<formly-field>` component is used to render the UI widget (layout + type) of a given `field`.
 */
class FormlyField {
  constructor(config, renderer, _elementRef, hostContainerRef, form) {
    this.config = config;
    this.renderer = renderer;
    this._elementRef = _elementRef;
    this.hostContainerRef = hostContainerRef;
    this.form = form;
    this.hostObservers = [];
    this.componentRefs = [];
    this.hooksObservers = [];
    this.detectFieldBuild = false;
    this.valueChangesUnsubscribe = () => {};
  }
  get containerRef() {
    return this.config.extras.renderFormlyFieldElement ? this.viewContainerRef : this.hostContainerRef;
  }
  get elementRef() {
    if (this.config.extras.renderFormlyFieldElement) {
      return this._elementRef;
    }
    if (this.componentRefs?.[0] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentRef) {
      return this.componentRefs[0].location;
    }
    return null;
  }
  ngAfterContentInit() {
    this.triggerHook('afterContentInit');
  }
  ngAfterViewInit() {
    this.triggerHook('afterViewInit');
  }
  ngDoCheck() {
    if (this.detectFieldBuild && this.field && this.field.options) {
      this.render();
    }
  }
  ngOnInit() {
    this.triggerHook('onInit');
  }
  ngOnChanges(changes) {
    this.triggerHook('onChanges', changes);
  }
  ngOnDestroy() {
    this.resetRefs(this.field);
    this.hostObservers.forEach(hostObserver => hostObserver.unsubscribe());
    this.hooksObservers.forEach(unsubscribe => unsubscribe());
    this.valueChangesUnsubscribe();
    this.triggerHook('onDestroy');
  }
  renderField(containerRef, f, wrappers = []) {
    if (this.containerRef === containerRef) {
      this.resetRefs(this.field);
      this.containerRef.clear();
      wrappers = this.field?.wrappers;
    }
    if (wrappers?.length > 0) {
      const [wrapper, ...wps] = wrappers;
      const {
        component
      } = this.config.getWrapper(wrapper);
      const ref = containerRef.createComponent(component);
      this.attachComponentRef(ref, f);
      observe(ref.instance, ['fieldComponent'], ({
        currentValue,
        previousValue,
        firstChange
      }) => {
        if (currentValue) {
          if (previousValue && previousValue._lContainer === currentValue._lContainer) {
            return;
          }
          const viewRef = previousValue ? previousValue.detach() : null;
          if (viewRef && !viewRef.destroyed) {
            currentValue.insert(viewRef);
          } else {
            this.renderField(currentValue, f, wps);
          }
          !firstChange && ref.changeDetectorRef.detectChanges();
        }
      });
    } else if (f?.type) {
      const inlineType = this.form?.templates?.find(ref => ref.name === f.type);
      let ref;
      if (inlineType) {
        ref = containerRef.createEmbeddedView(inlineType.ref, {
          $implicit: f
        });
      } else {
        const {
          component
        } = this.config.getType(f.type, true);
        ref = containerRef.createComponent(component);
      }
      this.attachComponentRef(ref, f);
    }
  }
  triggerHook(name, changes) {
    if (name === 'onInit' || name === 'onChanges' && changes.field && !changes.field.firstChange) {
      this.valueChangesUnsubscribe();
      this.valueChangesUnsubscribe = this.fieldChanges(this.field);
    }
    if (this.field?.hooks?.[name]) {
      if (!changes || changes.field) {
        const r = this.field.hooks[name](this.field);
        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(r) && ['onInit', 'afterContentInit', 'afterViewInit'].indexOf(name) !== -1) {
          const sub = r.subscribe();
          this.hooksObservers.push(() => sub.unsubscribe());
        }
      }
    }
    if (name === 'onChanges' && changes.field) {
      this.resetRefs(changes.field.previousValue);
      this.render();
    }
  }
  attachComponentRef(ref, field) {
    this.componentRefs.push(ref);
    field._componentRefs.push(ref);
    if (ref instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentRef) {
      Object.assign(ref.instance, {
        field
      });
    }
  }
  render() {
    if (!this.field) {
      return;
    }
    // require Formly build
    if (!this.field.options) {
      this.detectFieldBuild = true;
      return;
    }
    this.detectFieldBuild = false;
    this.hostObservers.forEach(hostObserver => hostObserver.unsubscribe());
    this.hostObservers = [observe(this.field, ['hide'], ({
      firstChange,
      currentValue
    }) => {
      const containerRef = this.containerRef;
      if (this.config.extras.lazyRender === false) {
        firstChange && this.renderField(containerRef, this.field);
        if (!firstChange || firstChange && currentValue) {
          this.elementRef && this.renderer.setStyle(this.elementRef.nativeElement, 'display', currentValue ? 'none' : '');
        }
      } else {
        if (currentValue) {
          containerRef.clear();
          if (this.field.className) {
            this.renderer.removeAttribute(this.elementRef.nativeElement, 'class');
          }
        } else {
          this.renderField(containerRef, this.field);
          if (this.field.className) {
            this.renderer.setAttribute(this.elementRef.nativeElement, 'class', this.field.className);
          }
        }
      }
      !firstChange && this.field.options.detectChanges(this.field);
    }), observe(this.field, ['className'], ({
      firstChange,
      currentValue
    }) => {
      if ((!firstChange || firstChange && currentValue) && (!this.config.extras.lazyRender || this.field.hide !== true)) {
        this.elementRef && this.renderer.setAttribute(this.elementRef.nativeElement, 'class', currentValue);
      }
    })];
    if (!isSignalRequired()) {
      ['touched', 'pristine', 'status'].forEach(prop => this.hostObservers.push(observe(this.field, ['formControl', prop], ({
        firstChange
      }) => !firstChange && markFieldForCheck(this.field))));
    } else if (this.field.formControl) {
      const events = this.field.formControl.events.subscribe(() => markFieldForCheck(this.field));
      this.hostObservers.push(events);
    }
  }
  resetRefs(field) {
    if (field) {
      if (field._localFields) {
        field._localFields = [];
      } else {
        defineHiddenProp(this.field, '_localFields', []);
      }
      if (field._componentRefs) {
        field._componentRefs = field._componentRefs.filter(ref => this.componentRefs.indexOf(ref) === -1);
      } else {
        defineHiddenProp(this.field, '_componentRefs', []);
      }
    }
    this.componentRefs = [];
  }
  fieldChanges(field) {
    if (!field) {
      return () => {};
    }
    const subscribes = [observeDeep(field, ['props'], () => field.options.detectChanges(field))];
    if (field.options) {
      subscribes.push(observeDeep(field.options, ['formState'], () => field.options.detectChanges(field)));
    }
    for (const key of Object.keys(field._expressions || {})) {
      const expressionObserver = observe(field, ['_expressions', key], ({
        currentValue,
        previousValue
      }) => {
        if (previousValue?.subscription) {
          previousValue.subscription.unsubscribe();
          previousValue.subscription = null;
        }
        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(currentValue.value$)) {
          currentValue.subscription = currentValue.value$.subscribe();
        }
      });
      subscribes.push(() => {
        if (field._expressions[key]?.subscription) {
          field._expressions[key].subscription.unsubscribe();
        }
        expressionObserver.unsubscribe();
      });
    }
    for (const path of [['focus'], ['template'], ['fieldGroupClassName'], ['validation', 'show']]) {
      const fieldObserver = observe(field, path, ({
        firstChange
      }) => !firstChange && field.options.detectChanges(field));
      subscribes.push(() => fieldObserver.unsubscribe());
    }
    if (field.formControl && !field.fieldGroup) {
      const control = field.formControl;
      let valueChanges = control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(value => {
        field.parsers?.map(parserFn => value = parserFn(value, field));
        if (!Object.is(value, field.formControl.value)) {
          field.formControl.setValue(value);
        }
        return value;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)((x, y) => {
        if (x !== y || Array.isArray(x) || isObject(x)) {
          return false;
        }
        return true;
      }));
      if (control.value !== getFieldValue(field)) {
        valueChanges = valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(control.value));
      }
      const {
        updateOn,
        debounce
      } = field.modelOptions;
      if ((!updateOn || updateOn === 'change') && debounce?.default > 0) {
        valueChanges = control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(debounce.default));
      }
      const sub = valueChanges.subscribe(value => {
        // workaround for https://github.com/angular/angular/issues/13792
        if (control._fields?.length > 1 && control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
          control.patchValue(value, {
            emitEvent: false,
            onlySelf: true
          });
        }
        if (hasKey(field)) {
          assignFieldValue(field, value);
        }
        field.options.fieldChanges.next({
          value,
          field,
          type: 'valueChanges'
        });
      });
      subscribes.push(() => sub.unsubscribe());
    }
    let templateFieldsSubs = [];
    observe(field, ['_localFields'], ({
      currentValue
    }) => {
      templateFieldsSubs.forEach(unsubscribe => unsubscribe());
      templateFieldsSubs = (currentValue || []).map(f => this.fieldChanges(f));
    });
    return () => {
      subscribes.forEach(unsubscribe => unsubscribe());
      templateFieldsSubs.forEach(unsubscribe => unsubscribe());
    };
  }
}
FormlyField.ɵfac = function FormlyField_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyField)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyFieldTemplates, 8));
};
FormlyField.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyField,
  selectors: [["formly-field"]],
  viewQuery: function FormlyField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContainerRef = _t.first);
    }
  },
  inputs: {
    field: "field"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 0,
  consts: [["container", ""]],
  template: function FormlyField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyField_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    }
  },
  styles: ["[_nghost-%COMP%]:empty{display:none}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-field',
      template: '<ng-template #container></ng-template>',
      styles: [":host:empty{display:none}\n"]
    }]
  }], function () {
    return [{
      type: FormlyConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: FormlyFieldTemplates,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    viewContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['container', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }]
  });
})();

/**
 * The `<form-form>` component is the main container of the form,
 * which takes care of managing the form state
 * and delegates the rendering of each field to `<formly-field>` component.
 */
class FormlyForm {
  constructor(builder, config, ngZone, fieldTemplates) {
    this.builder = builder;
    this.config = config;
    this.ngZone = ngZone;
    this.fieldTemplates = fieldTemplates;
    /** Event that is emitted when the model value is changed */
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.field = {
      type: 'formly-group'
    };
    this._modelChangeValue = {};
    this.valueChangesUnsubscribe = () => {};
  }
  /** The form instance which allow to track model value and validation status. */
  set form(form) {
    this.field.form = form;
  }
  get form() {
    return this.field.form;
  }
  /** The model to be represented by the form. */
  set model(model) {
    if (this.config.extras.immutable && this._modelChangeValue === model) {
      return;
    }
    this.setField({
      model
    });
  }
  get model() {
    return this.field.model;
  }
  /** The field configurations for building the form. */
  set fields(fieldGroup) {
    this.setField({
      fieldGroup
    });
  }
  get fields() {
    return this.field.fieldGroup;
  }
  /** Options for the form. */
  set options(options) {
    this.setField({
      options
    });
  }
  get options() {
    return this.field.options;
  }
  set templates(templates) {
    this.fieldTemplates.templates = templates;
  }
  ngDoCheck() {
    if (this.config.extras.checkExpressionOn === 'changeDetectionCheck') {
      this.checkExpressionChange();
    }
  }
  ngOnChanges(changes) {
    if (changes.fields && this.form) {
      clearControl(this.form);
    }
    if (changes.fields || changes.form || changes.model && this._modelChangeValue !== changes.model.currentValue) {
      this.valueChangesUnsubscribe();
      this.builder.build(this.field);
      this.valueChangesUnsubscribe = this.valueChanges();
    }
  }
  ngOnDestroy() {
    this.valueChangesUnsubscribe();
  }
  checkExpressionChange() {
    this.field.options.checkExpressions?.(this.field);
  }
  valueChanges() {
    this.valueChangesUnsubscribe();
    let formEvents = null;
    if (isSignalRequired()) {
      let submitted = this.options?.parentForm?.submitted;
      formEvents = this.form.events.subscribe(() => {
        if (submitted !== this.options?.parentForm?.submitted) {
          this.options.detectChanges(this.field);
          submitted = this.options?.parentForm?.submitted;
        }
      });
    }
    const valueChanges = this.field.options.fieldChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(({
      field,
      type
    }) => hasKey(field) && type === 'valueChanges'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => isNoopNgZone(this.ngZone) ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null) : this.ngZone.onStable.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)))).subscribe(() => this.ngZone.runGuarded(() => {
      // runGuarded is used to keep in sync the expression changes
      // https://github.com/ngx-formly/ngx-formly/issues/2095
      this.checkExpressionChange();
      this.modelChange.emit(this._modelChangeValue = clone(this.model));
    }));
    return () => {
      formEvents?.unsubscribe();
      valueChanges.unsubscribe();
    };
  }
  setField(field) {
    if (this.config.extras.immutable) {
      this.field = {
        ...this.field,
        ...clone(field)
      };
    } else {
      Object.keys(field).forEach(p => this.field[p] = field[p]);
    }
  }
}
FormlyForm.ɵfac = function FormlyForm_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyFieldTemplates));
};
FormlyForm.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyForm,
  selectors: [["formly-form"]],
  contentQueries: function FormlyForm_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, FormlyTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    }
  },
  inputs: {
    form: "form",
    model: "model",
    fields: "fields",
    options: "options"
  },
  outputs: {
    modelChange: "modelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([FormlyFormBuilder, FormlyFieldTemplates]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "field"]],
  template: function FormlyForm_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "formly-field", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("field", ctx.field);
    }
  },
  dependencies: [FormlyField],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyForm, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-form',
      template: '<formly-field [field]="field"></formly-field>',
      providers: [FormlyFormBuilder, FormlyFieldTemplates],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: FormlyFormBuilder
    }, {
      type: FormlyConfig
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: FormlyFieldTemplates
    }];
  }, {
    form: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fields: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    modelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    templates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [FormlyTemplate]
    }]
  });
})();

/**
 * Allow to link the `field` HTML attributes (`id`, `name` ...) and Event attributes (`focus`, `blur` ...) to an element in the DOM.
 */
class FormlyAttributes {
  constructor(renderer, elementRef, _document) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.uiAttributesCache = {};
    /**
     * HostBinding doesn't register listeners conditionally which may produce some perf issues.
     *
     * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1991
     */
    this.uiEvents = {
      listeners: [],
      events: ['click', 'keyup', 'keydown', 'keypress', 'focus', 'blur', 'change'],
      callback: (eventName, $event) => {
        switch (eventName) {
          case 'focus':
            return this.onFocus($event);
          case 'blur':
            return this.onBlur($event);
          case 'change':
            return this.onChange($event);
          default:
            return this.props[eventName](this.field, $event);
        }
      }
    };
    this.document = _document;
  }
  get props() {
    return this.field.props || {};
  }
  get fieldAttrElements() {
    return this.field?.['_elementRefs'] || [];
  }
  ngOnChanges(changes) {
    if (changes.field) {
      this.field.name && this.setAttribute('name', this.field.name);
      this.uiEvents.listeners.forEach(listener => listener());
      this.uiEvents.events.forEach(eventName => {
        if (this.props?.[eventName] || ['focus', 'blur', 'change'].indexOf(eventName) !== -1) {
          this.uiEvents.listeners.push(this.renderer.listen(this.elementRef.nativeElement, eventName, e => this.uiEvents.callback(eventName, e)));
        }
      });
      if (this.props?.attributes) {
        observe(this.field, ['props', 'attributes'], ({
          currentValue,
          previousValue
        }) => {
          if (previousValue) {
            Object.keys(previousValue).forEach(attr => this.removeAttribute(attr));
          }
          if (currentValue) {
            Object.keys(currentValue).forEach(attr => {
              if (currentValue[attr] != null) {
                this.setAttribute(attr, currentValue[attr]);
              }
            });
          }
        });
      }
      this.detachElementRef(changes.field.previousValue);
      this.attachElementRef(changes.field.currentValue);
      if (this.fieldAttrElements.length === 1) {
        !this.id && this.field.id && this.setAttribute('id', this.field.id);
        this.focusObserver = observe(this.field, ['focus'], ({
          currentValue
        }) => {
          this.toggleFocus(currentValue);
        });
      }
    }
    if (changes.id) {
      this.setAttribute('id', this.id);
    }
  }
  /**
   * We need to re-evaluate all the attributes on every change detection cycle, because
   * by using a HostBinding we run into certain edge cases. This means that whatever logic
   * is in here has to be super lean or we risk seriously damaging or destroying the performance.
   *
   * Formly issue: https://github.com/ngx-formly/ngx-formly/issues/1317
   * Material issue: https://github.com/angular/components/issues/14024
   */
  ngDoCheck() {
    if (!this.uiAttributes) {
      const element = this.elementRef.nativeElement;
      this.uiAttributes = [...FORMLY_VALIDATORS, 'tabindex', 'placeholder', 'readonly', 'disabled', 'step'].filter(attr => !element.hasAttribute || !element.hasAttribute(attr));
    }
    for (let i = 0; i < this.uiAttributes.length; i++) {
      const attr = this.uiAttributes[i];
      const value = this.props[attr];
      if (this.uiAttributesCache[attr] !== value && (!this.props.attributes || !this.props.attributes.hasOwnProperty(attr.toLowerCase()))) {
        this.uiAttributesCache[attr] = value;
        if (value || value === 0) {
          this.setAttribute(attr, value === true ? attr : `${value}`);
        } else {
          this.removeAttribute(attr);
        }
      }
    }
  }
  ngOnDestroy() {
    this.uiEvents.listeners.forEach(listener => listener());
    this.detachElementRef(this.field);
    this.focusObserver?.unsubscribe();
  }
  toggleFocus(value) {
    const element = this.fieldAttrElements ? this.fieldAttrElements[0] : null;
    if (!element || !element.nativeElement.focus) {
      return;
    }
    const isFocused = !!this.document.activeElement && this.fieldAttrElements.some(({
      nativeElement
    }) => this.document.activeElement === nativeElement || nativeElement.contains(this.document.activeElement));
    if (value && !isFocused) {
      Promise.resolve().then(() => element.nativeElement.focus());
    } else if (!value && isFocused) {
      Promise.resolve().then(() => element.nativeElement.blur());
    }
  }
  onFocus($event) {
    this.focusObserver?.setValue(true);
    this.props.focus?.(this.field, $event);
  }
  onBlur($event) {
    this.focusObserver?.setValue(false);
    this.props.blur?.(this.field, $event);
  }
  // handle custom `change` event, for regular ones rely on DOM listener
  onHostChange($event) {
    if ($event instanceof Event) {
      return;
    }
    this.onChange($event);
  }
  onChange($event) {
    this.props.change?.(this.field, $event);
    this.field.formControl?.markAsDirty();
  }
  attachElementRef(f) {
    if (!f) {
      return;
    }
    if (f['_elementRefs']?.indexOf(this.elementRef) === -1) {
      f['_elementRefs'].push(this.elementRef);
    } else {
      defineHiddenProp(f, '_elementRefs', [this.elementRef]);
    }
  }
  detachElementRef(f) {
    const index = f?.['_elementRefs'] ? this.fieldAttrElements.indexOf(this.elementRef) : -1;
    if (index !== -1) {
      f['_elementRefs'].splice(index, 1);
    }
  }
  setAttribute(attr, value) {
    this.renderer.setAttribute(this.elementRef.nativeElement, attr, value);
  }
  removeAttribute(attr) {
    this.renderer.removeAttribute(this.elementRef.nativeElement, attr);
  }
}
FormlyAttributes.ɵfac = function FormlyAttributes_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyAttributes)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
};
FormlyAttributes.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FormlyAttributes,
  selectors: [["", "formlyAttributes", ""]],
  hostBindings: function FormlyAttributes_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormlyAttributes_change_HostBindingHandler($event) {
        return ctx.onHostChange($event);
      });
    }
  },
  inputs: {
    field: [0, "formlyAttributes", "field"],
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyAttributes, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[formlyAttributes]',
      host: {
        '(change)': 'onHostChange($event)'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['formlyAttributes']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class FieldType {
  constructor() {
    this.field = {};
  }
  set _formlyControls(controls) {
    const f = this.field;
    f._localFields = controls.map(c => c.control._fields || []).flat().filter(f => f.formControl !== this.field.formControl);
  }
  get model() {
    return this.field.model;
  }
  get form() {
    return this.field.form;
  }
  get options() {
    return this.field.options;
  }
  get key() {
    return this.field.key;
  }
  get formControl() {
    return this.field.formControl;
  }
  get props() {
    return this.field.props || {};
  }
  /** @deprecated Use `props` instead. */
  get to() {
    return this.props;
  }
  get showError() {
    return this.options.showError(this);
  }
  get id() {
    return this.field.id;
  }
  get formState() {
    return this.options?.formState || {};
  }
}
FieldType.ɵfac = function FieldType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FieldType)();
};
FieldType.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FieldType,
  viewQuery: function FieldType_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._formlyControls = _t);
    }
  },
  inputs: {
    field: "field"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldType, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    _formlyControls: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
      args: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControl]
    }],
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/** @ignore */
class FormlyGroup extends FieldType {}
FormlyGroup.ɵfac = /* @__PURE__ */(() => {
  let ɵFormlyGroup_BaseFactory;
  return function FormlyGroup_Factory(__ngFactoryType__) {
    return (ɵFormlyGroup_BaseFactory || (ɵFormlyGroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FormlyGroup)))(__ngFactoryType__ || FormlyGroup);
  };
})();
FormlyGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyGroup,
  selectors: [["formly-group"]],
  hostVars: 2,
  hostBindings: function FormlyGroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.field.fieldGroupClassName || "");
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "field", 4, "ngFor", "ngForOf"], [3, "field"]],
  template: function FormlyGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FormlyGroup_formly_field_0_Template, 1, 1, "formly-field", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.field.fieldGroup);
    }
  },
  dependencies: [FormlyField, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-group',
      template: `
    <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
    <ng-content></ng-content>
  `,
      host: {
        '[class]': 'field.fieldGroupClassName || ""'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();

/**
 * The `<formly-validation-message>` component renders the error message of a given `field`.
 */
class FormlyValidationMessage {
  constructor(config) {
    this.config = config;
  }
  ngOnChanges() {
    const EXPR_VALIDATORS = FORMLY_VALIDATORS.map(v => `templateOptions.${v}`);
    this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.merge)(this.field.formControl.statusChanges, !this.field.options ? (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null) : this.field.options.fieldChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(({
      field,
      type,
      property
    }) => {
      return field === this.field && type === 'expressionChanges' && (property.indexOf('validation') !== -1 || EXPR_VALIDATORS.indexOf(property) !== -1);
    }))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(this.errorMessage) ? this.errorMessage : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.errorMessage)));
  }
  get errorMessage() {
    const fieldForm = this.field.formControl;
    for (const error in fieldForm.errors) {
      if (fieldForm.errors.hasOwnProperty(error)) {
        let message = this.config.getValidatorMessage(error);
        if (isObject(fieldForm.errors[error])) {
          if (fieldForm.errors[error].errorPath) {
            return undefined;
          }
          if (fieldForm.errors[error].message) {
            message = fieldForm.errors[error].message;
          }
        }
        if (this.field.validation?.messages?.[error]) {
          message = this.field.validation.messages[error];
        }
        if (this.field.validators?.[error]?.message) {
          message = this.field.validators[error].message;
        }
        if (this.field.asyncValidators?.[error]?.message) {
          message = this.field.asyncValidators[error].message;
        }
        if (typeof message === 'function') {
          return message(fieldForm.errors[error], this.field);
        }
        return message;
      }
    }
    return undefined;
  }
}
FormlyValidationMessage.ɵfac = function FormlyValidationMessage_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyValidationMessage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FormlyConfig));
};
FormlyValidationMessage.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyValidationMessage,
  selectors: [["formly-validation-message"]],
  inputs: {
    field: "field"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 2,
  vars: 3,
  template: function FormlyValidationMessage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.errorMessage$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyValidationMessage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-validation-message',
      template: '{{ errorMessage$ | async }}',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: FormlyConfig
    }];
  }, {
    field: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class FieldArrayType extends FieldType {
  onPopulate(field) {
    if (hasKey(field)) {
      const control = findControl(field);
      registerControl(field, control ? control : new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([], {
        updateOn: field.modelOptions.updateOn
      }));
    }
    field.fieldGroup = field.fieldGroup || [];
    const length = Array.isArray(field.model) ? field.model.length : 0;
    if (field.fieldGroup.length > length) {
      for (let i = field.fieldGroup.length - 1; i >= length; --i) {
        unregisterControl(field.fieldGroup[i], true);
        field.fieldGroup.splice(i, 1);
      }
    }
    for (let i = field.fieldGroup.length; i < length; i++) {
      const f = {
        ...clone(typeof field.fieldArray === 'function' ? field.fieldArray(field) : field.fieldArray)
      };
      if (f.key !== null) {
        f.key = `${i}`;
      }
      field.fieldGroup.push(f);
    }
  }
  add(i, initialModel, {
    markAsDirty
  } = {
    markAsDirty: true
  }) {
    i = i == null ? this.field.fieldGroup.length : i;
    if (!this.model) {
      assignFieldValue(this.field, []);
    }
    this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);
    this.markFieldForCheck(this.field.fieldGroup[i]);
    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }
  remove(i, {
    markAsDirty
  } = {
    markAsDirty: true
  }) {
    this.model.splice(i, 1);
    const field = this.field.fieldGroup[i];
    this.field.fieldGroup.splice(i, 1);
    this.field.fieldGroup.forEach((f, key) => this.updateArrayElementKey(f, `${key}`));
    unregisterControl(field, true);
    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }
  _build() {
    const fields = this.field.formControl._fields ?? [this.field];
    fields.forEach(f => this.options.build(f));
    this.options.fieldChanges.next({
      field: this.field,
      value: getFieldValue(this.field),
      type: 'valueChanges'
    });
  }
  updateArrayElementKey(f, newKey) {
    if (hasKey(f)) {
      f.key = newKey;
      return;
    }
    if (!f.fieldGroup?.length) {
      return;
    }
    for (let i = 0; i < f.fieldGroup.length; i++) {
      this.updateArrayElementKey(f.fieldGroup[i], newKey);
    }
  }
  markFieldForCheck(f) {
    if (!f) {
      return;
    }
    f.fieldGroup?.forEach(c => this.markFieldForCheck(c));
    if (f.hide === false) {
      this.options._hiddenFieldsForCheck.push(f);
    }
  }
}
FieldArrayType.ɵfac = /* @__PURE__ */(() => {
  let ɵFieldArrayType_BaseFactory;
  return function FieldArrayType_Factory(__ngFactoryType__) {
    return (ɵFieldArrayType_BaseFactory || (ɵFieldArrayType_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FieldArrayType)))(__ngFactoryType__ || FieldArrayType);
  };
})();
FieldArrayType.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FieldArrayType,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldArrayType, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, null);
})();
class FieldWrapper extends FieldType {
  set _formlyControls(_) {}
  set _staticContent(content) {
    this.fieldComponent = content;
  }
}
FieldWrapper.ɵfac = /* @__PURE__ */(() => {
  let ɵFieldWrapper_BaseFactory;
  return function FieldWrapper_Factory(__ngFactoryType__) {
    return (ɵFieldWrapper_BaseFactory || (ɵFieldWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FieldWrapper)))(__ngFactoryType__ || FieldWrapper);
  };
})();
FieldWrapper.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FieldWrapper,
  viewQuery: function FieldWrapper_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fieldComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._staticContent = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FieldWrapper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], null, {
    fieldComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fieldComponent', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
      }]
    }],
    _staticContent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fieldComponent', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }]
  });
})();

/** @ignore */
class FormlyTemplateType extends FieldType {
  constructor(sanitizer) {
    super();
    this.sanitizer = sanitizer;
    this.innerHtml = {};
  }
  get template() {
    if (this.field && this.field.template !== this.innerHtml.template) {
      this.innerHtml = {
        template: this.field.template,
        content: this.props.safeHtml ? this.sanitizer.bypassSecurityTrustHtml(this.field.template) : this.field.template
      };
    }
    return this.innerHtml.content;
  }
}
FormlyTemplateType.ɵfac = function FormlyTemplateType_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyTemplateType)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer));
};
FormlyTemplateType.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormlyTemplateType,
  selectors: [["formly-template"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  decls: 1,
  vars: 1,
  consts: [[3, "innerHtml"]],
  template: function FormlyTemplateType_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.template, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyTemplateType, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'formly-template',
      template: `<div [innerHtml]="template"></div>`,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
    }];
  }, null);
})();
function evalStringExpression(expression, argNames) {
  try {
    return Function(...argNames, `return ${expression};`);
  } catch (error) {
    console.error(error);
  }
}
function evalExpression(expression, thisArg, argVal) {
  if (typeof expression === 'function') {
    return expression.apply(thisArg, argVal);
  } else {
    return expression ? true : false;
  }
}
class FieldExpressionExtension {
  onPopulate(field) {
    if (field._expressions) {
      return;
    }
    // cache built expression
    defineHiddenProp(field, '_expressions', {});
    observe(field, ['hide'], ({
      currentValue,
      firstChange
    }) => {
      defineHiddenProp(field, '_hide', !!currentValue);
      if (!firstChange || firstChange && currentValue === true) {
        field.props.hidden = currentValue;
        field.options._hiddenFieldsForCheck.push(field);
      }
    });
    if (field.hideExpression) {
      observe(field, ['hideExpression'], ({
        currentValue: expr
      }) => {
        field._expressions.hide = this.parseExpressions(field, 'hide', typeof expr === 'boolean' ? () => expr : expr);
      });
    }
    const evalExpr = (key, expr) => {
      if (typeof expr === 'string' || isFunction(expr)) {
        field._expressions[key] = this.parseExpressions(field, key, expr);
      } else if (expr instanceof rxjs__WEBPACK_IMPORTED_MODULE_14__.Observable) {
        field._expressions[key] = {
          value$: expr.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(v => {
            this.evalExpr(field, key, v);
            field.options._detectChanges(field);
          }))
        };
      }
    };
    field.expressions = field.expressions || {};
    for (const key of Object.keys(field.expressions)) {
      observe(field, ['expressions', key], ({
        currentValue: expr
      }) => {
        evalExpr(key, isFunction(expr) ? (...args) => expr(field, args[3]) : expr);
      });
    }
    field.expressionProperties = field.expressionProperties || {};
    for (const key of Object.keys(field.expressionProperties)) {
      observe(field, ['expressionProperties', key], ({
        currentValue
      }) => evalExpr(key, currentValue));
    }
  }
  postPopulate(field) {
    if (field.parent) {
      return;
    }
    if (!field.options.checkExpressions) {
      let checkLocked = false;
      field.options.checkExpressions = (f, ignoreCache) => {
        if (checkLocked) {
          return;
        }
        checkLocked = true;
        const fieldChanged = this.checkExpressions(f, ignoreCache);
        const options = field.options;
        options._hiddenFieldsForCheck.sort(f => f.hide ? -1 : 1).forEach(f => this.changeHideState(f, f.hide, !ignoreCache));
        options._hiddenFieldsForCheck = [];
        if (fieldChanged) {
          this.checkExpressions(field);
        }
        checkLocked = false;
      };
      field.options._checkField = (f, ignoreCache) => {
        console.warn(`Formly: 'options._checkField' is deprecated since v6.0, use 'options.checkExpressions' instead.`);
        field.options.checkExpressions(f, ignoreCache);
      };
    }
  }
  parseExpressions(field, path, expr) {
    let parentExpression;
    if (field.parent && ['hide', 'props.disabled'].includes(path)) {
      const rootValue = f => {
        return path === 'hide' ? f.hide : f.props.disabled;
      };
      parentExpression = () => {
        let root = field.parent;
        while (root.parent && !rootValue(root)) {
          root = root.parent;
        }
        return rootValue(root);
      };
    }
    expr = expr || (() => false);
    if (typeof expr === 'string') {
      expr = evalStringExpression(expr, ['model', 'formState', 'field']);
    }
    let currentValue;
    return {
      callback: ignoreCache => {
        try {
          const exprValue = evalExpression(parentExpression ? (...args) => parentExpression(field) || expr(...args) : expr, {
            field
          }, [field.model, field.options.formState, field, ignoreCache]);
          if (ignoreCache || currentValue !== exprValue && (!isObject(exprValue) || (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(exprValue) || JSON.stringify(exprValue) !== JSON.stringify(currentValue))) {
            currentValue = exprValue;
            this.evalExpr(field, path, exprValue);
            return true;
          }
          return false;
        } catch (error) {
          error.message = `[Formly Error] [Expression "${path}"] ${error.message}`;
          throw error;
        }
      }
    };
  }
  checkExpressions(field, ignoreCache = false) {
    if (!field) {
      return false;
    }
    let fieldChanged = false;
    if (field._expressions) {
      for (const key of Object.keys(field._expressions)) {
        field._expressions[key].callback?.(ignoreCache) && (fieldChanged = true);
      }
    }
    field.fieldGroup?.forEach(f => this.checkExpressions(f, ignoreCache) && (fieldChanged = true));
    return fieldChanged;
  }
  changeDisabledState(field, value) {
    if (field.fieldGroup) {
      field.fieldGroup.filter(f => !f._expressions.hasOwnProperty('props.disabled')).forEach(f => this.changeDisabledState(f, value));
    }
    if (hasKey(field) && field.props.disabled !== value) {
      field.props.disabled = value;
    }
  }
  changeHideState(field, hide, resetOnHide) {
    if (field.fieldGroup) {
      field.fieldGroup.filter(f => f && !f._expressions.hide).forEach(f => this.changeHideState(f, hide, resetOnHide));
    }
    if (field.formControl && hasKey(field)) {
      defineHiddenProp(field, '_hide', !!(hide || field.hide));
      const c = field.formControl;
      if (c._fields?.length > 1) {
        updateValidity(c);
      }
      if (hide === true && (!c._fields || c._fields.every(f => !!f._hide))) {
        unregisterControl(field, true);
        if (resetOnHide && field.resetOnHide) {
          assignFieldValue(field, undefined);
          field.formControl.reset({
            value: undefined,
            disabled: field.formControl.disabled
          });
          field.options.fieldChanges.next({
            value: undefined,
            field,
            type: 'valueChanges'
          });
          if (field.fieldGroup && field.formControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray) {
            field.fieldGroup.length = 0;
          }
        }
      } else if (hide === false) {
        if (field.resetOnHide && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field))) {
          assignFieldValue(field, field.defaultValue);
        }
        registerControl(field, undefined, true);
        if (field.resetOnHide && field.fieldArray && field.fieldGroup?.length !== field.model?.length) {
          field.options.build(field);
        }
      }
    }
    if (field.options.fieldChanges) {
      field.options.fieldChanges.next({
        field,
        type: 'hidden',
        value: hide
      });
    }
  }
  evalExpr(field, prop, value) {
    if (prop.indexOf('model.') === 0) {
      const key = prop.replace(/^model\./, ''),
        parent = field.fieldGroup ? field : field.parent;
      let control = field?.key === key ? field.formControl : field.form.get(key);
      if (!control && field.get(key)) {
        control = field.get(key).formControl;
      }
      assignFieldValue({
        key,
        parent,
        model: field.model
      }, value);
      if (control && !(isNil(control.value) && isNil(value)) && control.value !== value) {
        control.patchValue(value);
      }
    } else {
      try {
        let target = field;
        const paths = this._evalExpressionPath(field, prop);
        const lastIndex = paths.length - 1;
        for (let i = 0; i < lastIndex; i++) {
          target = target[paths[i]];
        }
        target[paths[lastIndex]] = value;
      } catch (error) {
        error.message = `[Formly Error] [Expression "${prop}"] ${error.message}`;
        throw error;
      }
      if (['templateOptions.disabled', 'props.disabled'].includes(prop) && hasKey(field)) {
        this.changeDisabledState(field, value);
      }
    }
    this.emitExpressionChanges(field, prop, value);
  }
  emitExpressionChanges(field, property, value) {
    if (!field.options.fieldChanges) {
      return;
    }
    field.options.fieldChanges.next({
      field,
      type: 'expressionChanges',
      property,
      value
    });
  }
  _evalExpressionPath(field, prop) {
    if (field._expressions[prop] && field._expressions[prop].paths) {
      return field._expressions[prop].paths;
    }
    let paths = [];
    if (prop.indexOf('[') === -1) {
      paths = prop.split('.');
    } else {
      prop.split(/[[\]]{1,2}/) // https://stackoverflow.com/a/20198206
      .filter(p => p).forEach(path => {
        const arrayPath = path.match(/['|"](.*?)['|"]/);
        if (arrayPath) {
          paths.push(arrayPath[1]);
        } else {
          paths.push(...path.split('.').filter(p => p));
        }
      });
    }
    if (field._expressions[prop]) {
      field._expressions[prop].paths = paths;
    }
    return paths;
  }
}
class FieldValidationExtension {
  constructor(config) {
    this.config = config;
  }
  onPopulate(field) {
    this.initFieldValidation(field, 'validators');
    this.initFieldValidation(field, 'asyncValidators');
  }
  initFieldValidation(field, type) {
    const validators = [];
    if (type === 'validators' && !(field.hasOwnProperty('fieldGroup') && !hasKey(field))) {
      validators.push(this.getPredefinedFieldValidation(field));
    }
    if (field[type]) {
      for (const validatorName of Object.keys(field[type])) {
        validatorName === 'validation' ? validators.push(...field[type].validation.map(v => this.wrapNgValidatorFn(field, v))) : validators.push(this.wrapNgValidatorFn(field, field[type][validatorName], validatorName));
      }
    }
    defineHiddenProp(field, '_' + type, validators);
  }
  getPredefinedFieldValidation(field) {
    let VALIDATORS = [];
    FORMLY_VALIDATORS.forEach(opt => observe(field, ['props', opt], ({
      currentValue,
      firstChange
    }) => {
      VALIDATORS = VALIDATORS.filter(o => o !== opt);
      if (opt === 'required' && currentValue != null && typeof currentValue !== 'boolean') {
        console.warn(`Formly: Invalid prop 'required' of type '${typeof currentValue}', expected 'boolean' (Field:${field.key}).`);
      }
      if (currentValue != null && currentValue !== false) {
        VALIDATORS.push(opt);
      }
      if (!firstChange && field.formControl) {
        updateValidity(field.formControl);
      }
    }));
    return control => {
      if (VALIDATORS.length === 0) {
        return null;
      }
      return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(VALIDATORS.map(opt => () => {
        const value = field.props[opt];
        switch (opt) {
          case 'required':
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required(control);
          case 'pattern':
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(value)(control);
          case 'minLength':
            const minLengthResult = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(value)(control);
            const minLengthKey = this.config.getValidatorMessage('minlength') || field.validation?.messages?.minlength ? 'minlength' : 'minLength';
            return minLengthResult ? {
              [minLengthKey]: minLengthResult.minlength
            } : null;
          case 'maxLength':
            const maxLengthResult = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(value)(control);
            const maxLengthKey = this.config.getValidatorMessage('maxlength') || field.validation?.messages?.maxlength ? 'maxlength' : 'maxLength';
            return maxLengthResult ? {
              [maxLengthKey]: maxLengthResult.maxlength
            } : null;
          case 'min':
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(value)(control);
          case 'max':
            return _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(value)(control);
          default:
            return null;
        }
      }))(control);
    };
  }
  wrapNgValidatorFn(field, validator, validatorName) {
    let validatorOption;
    if (typeof validator === 'string') {
      validatorOption = clone(this.config.getValidator(validator));
    }
    if (typeof validator === 'object' && validator.name) {
      validatorOption = clone(this.config.getValidator(validator.name));
      if (validator.options) {
        validatorOption.options = validator.options;
      }
    }
    if (typeof validator === 'object' && validator.expression) {
      const {
        expression,
        ...options
      } = validator;
      validatorOption = {
        name: validatorName,
        validation: expression,
        options: Object.keys(options).length > 0 ? options : null
      };
    }
    if (typeof validator === 'function') {
      validatorOption = {
        name: validatorName,
        validation: validator
      };
    }
    return control => {
      const errors = validatorOption.validation(control, field, validatorOption.options);
      if (isPromise(errors)) {
        return errors.then(v => this.handleResult(field, validatorName ? !!v : v, validatorOption));
      }
      if ((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.isObservable)(errors)) {
        return errors.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(v => this.handleResult(field, validatorName ? !!v : v, validatorOption)));
      }
      return this.handleResult(field, validatorName ? !!errors : errors, validatorOption);
    };
  }
  handleResult(field, errors, {
    name,
    options
  }) {
    if (typeof errors === 'boolean') {
      errors = errors ? null : {
        [name]: options ? options : true
      };
    }
    const ctrl = field.formControl;
    ctrl?._childrenErrors?.[name]?.();
    if (isObject(errors)) {
      Object.keys(errors).forEach(name => {
        const errorPath = errors[name].errorPath ? errors[name].errorPath : options?.errorPath;
        const childCtrl = errorPath ? field.formControl.get(errorPath) : null;
        if (childCtrl) {
          const {
            errorPath: _errorPath,
            ...opts
          } = errors[name];
          childCtrl.setErrors({
            ...(childCtrl.errors || {}),
            [name]: opts
          });
          !ctrl._childrenErrors && defineHiddenProp(ctrl, '_childrenErrors', {});
          ctrl._childrenErrors[name] = () => {
            const {
              [name]: _toDelete,
              ...childErrors
            } = childCtrl.errors || {};
            childCtrl.setErrors(Object.keys(childErrors).length === 0 ? null : childErrors);
          };
        }
      });
    }
    return errors;
  }
}
class FieldFormExtension {
  prePopulate(field) {
    if (!this.root) {
      this.root = field;
    }
    if (field.parent) {
      Object.defineProperty(field, 'form', {
        get: () => field.parent.formControl,
        configurable: true
      });
    }
  }
  onPopulate(field) {
    if (field.hasOwnProperty('fieldGroup') && !hasKey(field)) {
      defineHiddenProp(field, 'formControl', field.form);
    } else {
      this.addFormControl(field);
    }
  }
  postPopulate(field) {
    if (this.root !== field) {
      return;
    }
    this.root = null;
    const markForCheck = this.setValidators(field);
    if (markForCheck && field.parent) {
      let parent = field.parent;
      while (parent) {
        if (hasKey(parent) || !parent.parent) {
          updateValidity(parent.formControl, true);
        }
        parent = parent.parent;
      }
    }
  }
  addFormControl(field) {
    let control = findControl(field);
    if (field.fieldArray) {
      return;
    }
    if (!control) {
      const controlOptions = {
        updateOn: field.modelOptions.updateOn
      };
      if (field.fieldGroup) {
        control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({}, controlOptions);
      } else {
        const value = hasKey(field) ? getFieldValue(field) : field.defaultValue;
        control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl({
          value,
          disabled: !!field.props.disabled
        }, {
          ...controlOptions,
          initialValueIsDefault: true
        });
      }
    } else {
      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
        const value = hasKey(field) ? getFieldValue(field) : field.defaultValue;
        control.defaultValue = value;
      }
    }
    registerControl(field, control);
  }
  setValidators(field, disabled = false) {
    if (disabled === false && hasKey(field) && field.props?.disabled) {
      disabled = true;
    }
    let markForCheck = false;
    field.fieldGroup?.forEach(f => f && this.setValidators(f, disabled) && (markForCheck = true));
    if (hasKey(field) || !field.parent || !hasKey(field) && !field.fieldGroup) {
      const {
        formControl: c
      } = field;
      if (c) {
        if (hasKey(field) && c instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl) {
          if (disabled && c.enabled) {
            c.disable({
              emitEvent: false,
              onlySelf: true
            });
            markForCheck = true;
          }
          if (!disabled && c.disabled) {
            c.enable({
              emitEvent: false,
              onlySelf: true
            });
            markForCheck = true;
          }
        }
        if (null === c.validator && this.hasValidators(field, '_validators')) {
          c.setValidators(() => {
            const v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.compose(this.mergeValidators(field, '_validators'));
            return v ? v(c) : null;
          });
          markForCheck = true;
        }
        if (null === c.asyncValidator && this.hasValidators(field, '_asyncValidators')) {
          c.setAsyncValidators(() => {
            const v = _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.composeAsync(this.mergeValidators(field, '_asyncValidators'));
            return v ? v(c) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
          });
          markForCheck = true;
        }
        if (markForCheck) {
          updateValidity(c, true);
          // update validity of `FormGroup` instance created by field with nested key.
          let parent = c.parent;
          for (let i = 1; i < getKeyPath(field).length; i++) {
            if (parent) {
              updateValidity(parent, true);
              parent = parent.parent;
            }
          }
        }
      }
    }
    return markForCheck;
  }
  hasValidators(field, type) {
    const c = field.formControl;
    if (c?._fields?.length > 1 && c._fields.some(f => f[type].length > 0)) {
      return true;
    } else if (field[type].length > 0) {
      return true;
    }
    return field.fieldGroup?.some(f => f?.fieldGroup && !hasKey(f) && this.hasValidators(f, type));
  }
  mergeValidators(field, type) {
    const validators = [];
    const c = field.formControl;
    if (c?._fields?.length > 1) {
      c._fields.filter(f => !f._hide).forEach(f => validators.push(...f[type]));
    } else if (field[type]) {
      validators.push(...field[type]);
    }
    if (field.fieldGroup) {
      field.fieldGroup.filter(f => f?.fieldGroup && !hasKey(f)).forEach(f => validators.push(...this.mergeValidators(f, type)));
    }
    return validators;
  }
}
class CoreExtension {
  constructor(config) {
    this.config = config;
    this.formId = 0;
  }
  prePopulate(field) {
    const root = field.parent;
    this.initRootOptions(field);
    this.initFieldProps(field);
    if (root) {
      Object.defineProperty(field, 'options', {
        get: () => root.options,
        configurable: true
      });
      Object.defineProperty(field, 'model', {
        get: () => hasKey(field) && field.fieldGroup ? getFieldValue(field) : root.model,
        configurable: true
      });
    }
    Object.defineProperty(field, 'get', {
      value: key => getField(field, key),
      configurable: true
    });
    this.getFieldComponentInstance(field).prePopulate?.(field);
  }
  onPopulate(field) {
    this.initFieldOptions(field);
    this.getFieldComponentInstance(field).onPopulate?.(field);
    if (field.fieldGroup) {
      field.fieldGroup.forEach((f, index) => {
        if (f) {
          Object.defineProperty(f, 'parent', {
            get: () => field,
            configurable: true
          });
          Object.defineProperty(f, 'index', {
            get: () => index,
            configurable: true
          });
        }
        this.formId++;
      });
    }
  }
  postPopulate(field) {
    this.getFieldComponentInstance(field).postPopulate?.(field);
  }
  initFieldProps(field) {
    field.props ?? (field.props = field.templateOptions);
    Object.defineProperty(field, 'templateOptions', {
      get: () => field.props,
      set: props => field.props = props,
      configurable: true
    });
  }
  initRootOptions(field) {
    if (field.parent) {
      return;
    }
    const options = field.options;
    field.options.formState = field.options.formState || {};
    if (!options.showError) {
      options.showError = this.config.extras.showError;
    }
    if (!options.fieldChanges) {
      defineHiddenProp(options, 'fieldChanges', new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject());
    }
    if (!options._hiddenFieldsForCheck) {
      options._hiddenFieldsForCheck = [];
    }
    options._markForCheck = f => {
      console.warn(`Formly: 'options._markForCheck' is deprecated since v6.0, use 'options.detectChanges' instead.`);
      options.detectChanges(f);
    };
    options._detectChanges = f => {
      if (f._componentRefs) {
        markFieldForCheck(f);
      }
      f.fieldGroup?.forEach(f => f && options._detectChanges(f));
    };
    options.detectChanges = f => {
      f.options.checkExpressions?.(f);
      options._detectChanges(f);
    };
    options.resetModel = model => {
      model = clone(model ?? options._initialModel);
      if (field.model) {
        Object.keys(field.model).forEach(k => delete field.model[k]);
        Object.assign(field.model, model || {});
      }
      if (!isSignalRequired()) {
        observe(options, ['parentForm', 'submitted']).setValue(false, false);
      }
      options.build(field);
      field.form.reset(field.model);
    };
    options.updateInitialValue = model => options._initialModel = clone(model ?? field.model);
    field.options.updateInitialValue();
  }
  initFieldOptions(field) {
    reverseDeepMerge(field, {
      id: getFieldId(`formly_${this.formId}`, field, field.index),
      hooks: {},
      modelOptions: {},
      validation: {
        messages: {}
      },
      props: !field.type || !hasKey(field) ? {} : {
        label: '',
        placeholder: '',
        disabled: false
      }
    });
    if (this.config.extras.resetFieldOnHide && field.resetOnHide !== false) {
      field.resetOnHide = true;
    }
    if (field.type !== 'formly-template' && (field.template || field.expressions?.template || field.expressionProperties?.template)) {
      field.type = 'formly-template';
    }
    if (!field.type && field.fieldGroup) {
      field.type = 'formly-group';
    }
    if (field.type) {
      this.config.getMergedField(field);
    }
    if (hasKey(field) && !isUndefined(field.defaultValue) && isUndefined(getFieldValue(field)) && !isHiddenField(field)) {
      assignFieldValue(field, field.defaultValue);
    }
    field.wrappers = field.wrappers || [];
  }
  getFieldComponentInstance(field) {
    const componentRefInstance = () => {
      let componentRef = this.config.resolveFieldTypeRef(field);
      const fieldComponentRef = field._componentRefs?.slice(-1)[0];
      if (fieldComponentRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentRef && fieldComponentRef?.componentType === componentRef?.componentType) {
        componentRef = fieldComponentRef;
      }
      return componentRef?.instance;
    };
    if (!field._proxyInstance) {
      defineHiddenProp(field, '_proxyInstance', new Proxy({}, {
        get: (_, prop) => componentRefInstance()?.[prop],
        set: (_, prop, value) => componentRefInstance()[prop] = value
      }));
    }
    return field._proxyInstance;
  }
}
function defaultFormlyConfig(config) {
  return {
    types: [{
      name: 'formly-group',
      component: FormlyGroup
    }, {
      name: 'formly-template',
      component: FormlyTemplateType
    }],
    extensions: [{
      name: 'core',
      extension: new CoreExtension(config),
      priority: -250
    }, {
      name: 'field-validation',
      extension: new FieldValidationExtension(config),
      priority: -200
    }, {
      name: 'field-form',
      extension: new FieldFormExtension(),
      priority: -150
    }, {
      name: 'field-expression',
      extension: new FieldExpressionExtension(),
      priority: -100
    }]
  };
}
class FormlyModule {
  constructor(configService, configs = []) {
    if (!configs) {
      return;
    }
    configs.forEach(config => configService.addConfig(config));
  }
  static forRoot(config = {}) {
    return {
      ngModule: FormlyModule,
      providers: [{
        provide: FORMLY_CONFIG,
        multi: true,
        useFactory: defaultFormlyConfig,
        deps: [FormlyConfig]
      }, {
        provide: FORMLY_CONFIG,
        useValue: config,
        multi: true
      }, FormlyConfig, FormlyFormBuilder]
    };
  }
  static forChild(config = {}) {
    return {
      ngModule: FormlyModule,
      providers: [{
        provide: FORMLY_CONFIG,
        multi: true,
        useFactory: defaultFormlyConfig,
        deps: [FormlyConfig]
      }, {
        provide: FORMLY_CONFIG,
        useValue: config,
        multi: true
      }, FormlyFormBuilder]
    };
  }
}
FormlyModule.ɵfac = function FormlyModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormlyModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FormlyConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FORMLY_CONFIG, 8));
};
FormlyModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: FormlyModule
});
FormlyModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormlyModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage, FormlyTemplateType],
      exports: [FormlyTemplate, FormlyForm, FormlyField, FormlyAttributes, FormlyGroup, FormlyValidationMessage],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]
    }]
  }], function () {
    return [{
      type: FormlyConfig
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FORMLY_CONFIG]
      }]
    }];
  }, null);
})();

/*
 * Public API Surface of core
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 675:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-print-element/fesm2022/ngx-print-element.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxPrintElementComponent: () => (/* binding */ NgxPrintElementComponent),
/* harmony export */   NgxPrintElementDirective: () => (/* binding */ NgxPrintElementDirective),
/* harmony export */   NgxPrintElementService: () => (/* binding */ NgxPrintElementService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 819);



const _c0 = ["*"];
const defaultOptions = {
  htmlType: 'domObj',
  printMode: 'template',
  pageTitle: '',
  templateString: '',
  popupProperties: '',
  stylesheets: [],
  styles: [],
  baseHref: ''
};
/**
 * HEAD Element
 * @returns
 */
const HEAD = () => {
  const head = document.getElementsByTagName('head')[0];
  const ID = Math.round(Math.random() * 9999999).toString();
  const nameUID = `ngx-print-element-${ID}`;
  const nameUIDHead = `ngx-print-element-head-${ID}`;
  const nameUIDBody = `ngx-print-element-body-${ID}`;
  const nameUIDIFrame = `ngx-print-element-iframe-${ID}`;
  return {
    head,
    nameUID,
    nameUIDHead,
    nameUIDBody,
    nameUIDIFrame
  };
};
/**
 * ADD_STYLE_HEAD
 * @param _H
 */
const ADD_STYLE_HEAD = _H => {
  const style = document.createElement('style');
  style.innerHTML = BUILD_STYLE(_H);
  style.id = `${_H.nameUIDHead}`;
  _H.head.appendChild(style);
};
/**
 * BUILD_STYLE
 * @param _H
 * @returns
 */
const BUILD_STYLE = _H => {
  return `
  @media print {
    .${_H.nameUIDBody} {
      visibility: hidden !important;
    }
    .${_H.nameUID},
    .${_H.nameUID} * {
        visibility: visible !important;
    }
    .${_H.nameUID} {
        position: absolute !important;
        left: 0 !important;
        top: 0 !important;
    }
    .${_H.nameUID} .print-none {
        display: none !important;
    }
    /* ----- Author: DaiDH ----- */
    /* Copyright (C) 2022 - ${new Date().getFullYear()} */
  }`;
};
/**
 * REMOVE_STYLE_HEAD
 * @param _H
 */
const REMOVE_STYLE_HEAD = _H => {
  const styleToRemove = document.getElementById(_H.nameUIDHead);
  if (styleToRemove) {
    _H.head.removeChild(styleToRemove);
  }
};
/**
 * getBaseHref
 * @param options
 * @returns
 */
const getBaseHref = options => {
  const port = window.location.port ? `:${window.location.port}` : '';
  const buildURL = `${window.location.protocol}//${window.location.hostname}${port}${window.location.pathname}`;
  const finalURL = options.baseHref ? options.baseHref : buildURL;
  return finalURL;
};
/**
 * getMarkup
 * print-html-element
 * @param element
 * @param options
 * @param _H
 * @returns
 */
const getMarkup = (element, options, _H) => {
  const template = options.templateString;
  const templateRegex = new RegExp(/{{\s*printBody\s*}}/gi);
  let stylesheets;
  let styles;
  const html = [];
  if (options.htmlType === 'domObj') {
    element = element.outerHTML;
  }
  if (options.htmlType === 'text') {
    element = element.innerText;
  }
  if (template && templateRegex.test(template)) {
    element = template.replace(templateRegex, element);
  }
  html.push(`<html><head><title>${options.pageTitle || ''}</title>`);
  // If stylesheet URL's or list of stylesheet URL's are specified, override page stylesheets
  if (options.stylesheets) {
    stylesheets = Array.isArray(options.stylesheets) ? options.stylesheets : [options.stylesheets];
  } else {
    stylesheets = Array.prototype.slice.call(document.getElementsByTagName('link')).map(link => link);
  }
  stylesheets.forEach(f => {
    html.push(`<link rel="${f.rel}" href="${f.href}">`);
  });
  // If inline styles or list of inline styles are specified, override inline styles
  if (options.styles) {
    styles = Array.isArray(options.styles) ? [...options.styles, BUILD_STYLE(_H)] : [options.styles + BUILD_STYLE(_H)];
  } else {
    styles = Array.prototype.slice.call(document.getElementsByTagName('style')).map(style => style.innerHTML);
  }
  styles.forEach(style => {
    html.push(`<style type="text/css">${style}</style>`);
  });
  html.push(`<base href="${getBaseHref(options)}"/>`);
  html.push(`</head><body class="${_H.nameUID}">`);
  html.push(element);
  html.push('</body></html>');
  return html.join('');
};
/**
 * Print window.open
 * @param element
 * @param selfOptions
 * @param as
 */
const printElementWindow = (element, selfOptions = {}, as) => {
  try {
    const options = {
      ...defaultOptions,
      ...selfOptions
    };
    const container = element.nativeElement;
    const _H = HEAD();
    // New window
    const printWindow = window.open('about:blank', 'printElementWindow', options.popupProperties);
    const printDocument = printWindow && printWindow.document;
    // Get markup to be printed
    const markup = getMarkup(container, options, _H);
    ADD_STYLE_HEAD(_H);
    // Close
    const onPrintFinished = printed => {
      printDocument.close();
      printWindow.close();
      REMOVE_STYLE_HEAD(_H);
      AS_COMPLETE(as, {
        close: true
      });
    };
    // Print
    printWindow.focus();
    printDocument.write(markup);
    setTimeout(() => onPrintFinished(printWindow.print()), selfOptions && selfOptions.windowOpenTimeout || 500);
    printWindow.onbeforeprint = event => AS_COMPLETE(as, event);
    printWindow.onafterprint = event => AS_COMPLETE(as, event);
  } catch (error) {
    AS_COMPLETE(as, error);
  }
};
/**
 * Print iFrame
 * @param element
 * @param selfOptions
 * @param as
 */
const printIFrame = (element, selfOptions = {}, as) => {
  try {
    // Declare
    const options = {
      ...defaultOptions,
      ...selfOptions
    };
    const container = element.nativeElement;
    const _H = HEAD();
    // Get markup to be printed
    const markup = getMarkup(container, options, _H);
    // Create iframe
    let iframe = document.createElement('iframe');
    iframe.setAttribute('id', _H.nameUIDIFrame);
    iframe.setAttribute('class', _H.nameUIDIFrame);
    iframe.setAttribute('src', 'about:blank');
    iframe.setAttribute('frameBorder', '0');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('style', 'position:fixed;bottom:100%;right:100%;');
    document.body.appendChild(iframe);
    let iDocument = null;
    if (iframe.contentDocument) {
      iDocument = iframe.contentDocument;
    } else if (iframe.contentWindow) {
      iDocument = iframe.contentWindow.document;
    }
    ADD_STYLE_HEAD(_H);
    // SetTimeout fixesiframe printMode does not work in firefox
    setTimeout(() => {
      // Close
      const onPrintFinished = printed => {
        iDocument.close();
        REMOVE_STYLE_HEAD(_H);
        iframe.remove();
        AS_COMPLETE(as, {
          close: true
        });
      };
      // Print
      iframe.contentWindow.focus();
      iDocument.open();
      iDocument.write(markup);
      setTimeout(() => onPrintFinished(iframe.contentWindow.print()), selfOptions && selfOptions.windowOpenTimeout || 200);
      iframe.contentWindow.onbeforeprint = event => AS_COMPLETE(as, event);
      iframe.contentWindow.onafterprint = event => AS_COMPLETE(as, event);
    });
  } catch (error) {
    AS_COMPLETE(as, error);
  }
};
/**
 * Print default
 * @param element
 * @param renderer
 * @param as
 */
const printDefault = (element, renderer, selfOptions = {}, as) => {
  try {
    // Declare
    const container = element.nativeElement;
    const _H = HEAD();
    // Add visibility hidden into body
    const bodyEls = Array.from(document.querySelectorAll('body'));
    if (bodyEls.length) {
      bodyEls.forEach(f => f && f.classList.add(_H.nameUIDBody));
      renderer.addClass(container, _H.nameUID);
      ADD_STYLE_HEAD(_H);
    }
    // Close
    const onPrintFinished = printed => {
      // Clear visibility: hidden
      bodyEls.forEach(f => f && f.classList.remove(_H.nameUIDBody));
      renderer.setAttribute(container, 'class', container.className.replace(_H.nameUID, ''));
      REMOVE_STYLE_HEAD(_H);
      AS_COMPLETE(as, {
        close: true
      });
    };
    // Print
    window.focus();
    setTimeout(() => onPrintFinished(window.print()), selfOptions && selfOptions.windowOpenTimeout || 0);
    window.onbeforeprint = event => AS_COMPLETE(as, event);
    window.onafterprint = event => AS_COMPLETE(as, event);
  } catch (error) {
    AS_COMPLETE(as, error);
  }
};
/**
 * Rxjs complete
 * @param as
 * @param data
 * @param error
 */
const AS_COMPLETE = (as, data, error = null) => {
  error ? as.error(error) : as.next(data);
};
class NgxPrintElementService {
  renderer;
  /**
   * Print
   * @param element
   * @param config
   * @returns
   */
  print(element, config) {
    const as = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    // Create and insert new print section
    if (element) {
      // Element
      if (config) {
        // Config
        if (config.printMode === 'template') {
          // iframe
          printIFrame(element, config, as);
        }
        if (config.printMode === 'template-popup') {
          // windows
          printElementWindow(element, config, as);
        }
      } else {
        // No config
        printDefault(element, this.renderer, config, as);
      }
    }
    return as;
  }
  static ɵfac = function NgxPrintElementService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgxPrintElementService)();
  };
  static ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NgxPrintElementService,
    factory: NgxPrintElementService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPrintElementService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class NgxPrintElementDirective {
  renderer;
  prints;
  constructor(renderer, prints) {
    this.renderer = renderer;
    this.prints = prints;
  }
  ngOnInit() {
    this.prints.renderer = this.renderer;
  }
  static ɵfac = function NgxPrintElementDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgxPrintElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxPrintElementService));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: NgxPrintElementDirective,
    selectors: [["", "ngxPrintElement", ""]],
    standalone: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPrintElementDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      standalone: true,
      selector: '[ngxPrintElement]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
  }, {
    type: NgxPrintElementService
  }], null);
})();
class NgxPrintElementComponent {
  prints;
  constructor(prints) {
    this.prints = prints;
  }
  /**
   * Print
   * @param elementRef
   * @param config
   * @returns
   */
  print(elementRef, config) {
    return this.prints.print(elementRef, config);
  }
  static ɵfac = function NgxPrintElementComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || NgxPrintElementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxPrintElementService));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NgxPrintElementComponent,
    selectors: [["ngx-print-element"]],
    exportAs: ["element"],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function NgxPrintElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      }
    },
    encapsulation: 2
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPrintElementComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'ngx-print-element',
      standalone: true,
      imports: [],
      template: `<ng-content></ng-content>`,
      exportAs: 'element'
    }]
  }], () => [{
    type: NgxPrintElementService
  }], null);
})();

/*
 * Public API Surface of ngx-print-element
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_rating_rating_module_ts.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-passes-manage-passes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-passes/manage-passes.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-passes/manage-passes.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>manage-passes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/manage-passes/manage-passes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/manage-passes/manage-passes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ManagePassesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePassesPageRoutingModule", function() { return ManagePassesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manage_passes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-passes.page */ "./src/app/pages/manage-passes/manage-passes.page.ts");




const routes = [
    {
        path: '',
        component: _manage_passes_page__WEBPACK_IMPORTED_MODULE_3__["ManagePassesPage"]
    }
];
let ManagePassesPageRoutingModule = class ManagePassesPageRoutingModule {
};
ManagePassesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManagePassesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/manage-passes/manage-passes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-passes/manage-passes.module.ts ***!
  \*************************************************************/
/*! exports provided: ManagePassesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePassesPageModule", function() { return ManagePassesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_passes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-passes-routing.module */ "./src/app/pages/manage-passes/manage-passes-routing.module.ts");
/* harmony import */ var _manage_passes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-passes.page */ "./src/app/pages/manage-passes/manage-passes.page.ts");







let ManagePassesPageModule = class ManagePassesPageModule {
};
ManagePassesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_passes_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagePassesPageRoutingModule"]
        ],
        declarations: [_manage_passes_page__WEBPACK_IMPORTED_MODULE_6__["ManagePassesPage"]]
    })
], ManagePassesPageModule);



/***/ }),

/***/ "./src/app/pages/manage-passes/manage-passes.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-passes/manage-passes.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1wYXNzZXMvbWFuYWdlLXBhc3Nlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/manage-passes/manage-passes.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-passes/manage-passes.page.ts ***!
  \***********************************************************/
/*! exports provided: ManagePassesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePassesPage", function() { return ManagePassesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ManagePassesPage = class ManagePassesPage {
    constructor() { }
    ngOnInit() {
    }
};
ManagePassesPage.ctorParameters = () => [];
ManagePassesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-passes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-passes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-passes/manage-passes.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-passes.page.scss */ "./src/app/pages/manage-passes/manage-passes.page.scss")).default]
    })
], ManagePassesPage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-passes-manage-passes-module-es2015.js.map
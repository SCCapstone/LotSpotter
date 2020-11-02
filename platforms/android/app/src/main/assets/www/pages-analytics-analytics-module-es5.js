(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-analytics-analytics-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAnalyticsAnalyticsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>analytics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/analytics/analytics-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/analytics/analytics-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AnalyticsPageRoutingModule */

    /***/
    function srcAppPagesAnalyticsAnalyticsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsPageRoutingModule", function () {
        return AnalyticsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _analytics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./analytics.page */
      "./src/app/pages/analytics/analytics.page.ts");

      var routes = [{
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_3__["AnalyticsPage"]
      }];

      var AnalyticsPageRoutingModule = function AnalyticsPageRoutingModule() {
        _classCallCheck(this, AnalyticsPageRoutingModule);
      };

      AnalyticsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AnalyticsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/analytics/analytics.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/analytics/analytics.module.ts ***!
      \*****************************************************/

    /*! exports provided: AnalyticsPageModule */

    /***/
    function srcAppPagesAnalyticsAnalyticsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function () {
        return AnalyticsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./analytics-routing.module */
      "./src/app/pages/analytics/analytics-routing.module.ts");
      /* harmony import */


      var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./analytics.page */
      "./src/app/pages/analytics/analytics.page.ts");

      var AnalyticsPageModule = function AnalyticsPageModule() {
        _classCallCheck(this, AnalyticsPageModule);
      };

      AnalyticsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnalyticsPageRoutingModule"]],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]]
      })], AnalyticsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/analytics/analytics.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/analytics/analytics.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAnalyticsAnalyticsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FuYWx5dGljcy9hbmFseXRpY3MucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/analytics/analytics.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/analytics/analytics.page.ts ***!
      \***************************************************/

    /*! exports provided: AnalyticsPage */

    /***/
    function srcAppPagesAnalyticsAnalyticsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function () {
        return AnalyticsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AnalyticsPage = /*#__PURE__*/function () {
        function AnalyticsPage() {
          _classCallCheck(this, AnalyticsPage);
        }

        _createClass(AnalyticsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AnalyticsPage;
      }();

      AnalyticsPage.ctorParameters = function () {
        return [];
      };

      AnalyticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./analytics.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./analytics.page.scss */
        "./src/app/pages/analytics/analytics.page.scss"))["default"]]
      })], AnalyticsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-analytics-analytics-module-es5.js.map
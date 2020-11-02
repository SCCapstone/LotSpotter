(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-available-lots-available-lots-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/available-lots/available-lots.page.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/available-lots/available-lots.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAvailableLotsAvailableLotsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>available-lots</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/available-lots/available-lots-routing.module.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/available-lots/available-lots-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AvailableLotsPageRoutingModule */

    /***/
    function srcAppPagesAvailableLotsAvailableLotsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailableLotsPageRoutingModule", function () {
        return AvailableLotsPageRoutingModule;
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


      var _available_lots_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./available-lots.page */
      "./src/app/pages/available-lots/available-lots.page.ts");

      var routes = [{
        path: '',
        component: _available_lots_page__WEBPACK_IMPORTED_MODULE_3__["AvailableLotsPage"]
      }];

      var AvailableLotsPageRoutingModule = function AvailableLotsPageRoutingModule() {
        _classCallCheck(this, AvailableLotsPageRoutingModule);
      };

      AvailableLotsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AvailableLotsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/available-lots/available-lots.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/available-lots/available-lots.module.ts ***!
      \***************************************************************/

    /*! exports provided: AvailableLotsPageModule */

    /***/
    function srcAppPagesAvailableLotsAvailableLotsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailableLotsPageModule", function () {
        return AvailableLotsPageModule;
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


      var _available_lots_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./available-lots-routing.module */
      "./src/app/pages/available-lots/available-lots-routing.module.ts");
      /* harmony import */


      var _available_lots_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./available-lots.page */
      "./src/app/pages/available-lots/available-lots.page.ts");

      var AvailableLotsPageModule = function AvailableLotsPageModule() {
        _classCallCheck(this, AvailableLotsPageModule);
      };

      AvailableLotsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _available_lots_routing_module__WEBPACK_IMPORTED_MODULE_5__["AvailableLotsPageRoutingModule"]],
        declarations: [_available_lots_page__WEBPACK_IMPORTED_MODULE_6__["AvailableLotsPage"]]
      })], AvailableLotsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/available-lots/available-lots.page.scss":
    /*!***************************************************************!*\
      !*** ./src/app/pages/available-lots/available-lots.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAvailableLotsAvailableLotsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F2YWlsYWJsZS1sb3RzL2F2YWlsYWJsZS1sb3RzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/available-lots/available-lots.page.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/available-lots/available-lots.page.ts ***!
      \*************************************************************/

    /*! exports provided: AvailableLotsPage */

    /***/
    function srcAppPagesAvailableLotsAvailableLotsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AvailableLotsPage", function () {
        return AvailableLotsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AvailableLotsPage = /*#__PURE__*/function () {
        function AvailableLotsPage() {
          _classCallCheck(this, AvailableLotsPage);
        }

        _createClass(AvailableLotsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AvailableLotsPage;
      }();

      AvailableLotsPage.ctorParameters = function () {
        return [];
      };

      AvailableLotsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-available-lots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./available-lots.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/available-lots/available-lots.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./available-lots.page.scss */
        "./src/app/pages/available-lots/available-lots.page.scss"))["default"]]
      })], AvailableLotsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-available-lots-available-lots-module-es5.js.map
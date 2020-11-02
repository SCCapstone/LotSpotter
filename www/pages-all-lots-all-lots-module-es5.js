(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-all-lots-all-lots-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-lots/all-lots.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-lots/all-lots.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAllLotsAllLotsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n     <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>all-lots</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/all-lots/all-lots-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/all-lots/all-lots-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: AllLotsPageRoutingModule */

    /***/
    function srcAppPagesAllLotsAllLotsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllLotsPageRoutingModule", function () {
        return AllLotsPageRoutingModule;
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


      var _all_lots_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./all-lots.page */
      "./src/app/pages/all-lots/all-lots.page.ts");

      var routes = [{
        path: '',
        component: _all_lots_page__WEBPACK_IMPORTED_MODULE_3__["AllLotsPage"]
      }];

      var AllLotsPageRoutingModule = function AllLotsPageRoutingModule() {
        _classCallCheck(this, AllLotsPageRoutingModule);
      };

      AllLotsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AllLotsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/all-lots/all-lots.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/all-lots/all-lots.module.ts ***!
      \***************************************************/

    /*! exports provided: AllLotsPageModule */

    /***/
    function srcAppPagesAllLotsAllLotsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllLotsPageModule", function () {
        return AllLotsPageModule;
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


      var _all_lots_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./all-lots-routing.module */
      "./src/app/pages/all-lots/all-lots-routing.module.ts");
      /* harmony import */


      var _all_lots_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./all-lots.page */
      "./src/app/pages/all-lots/all-lots.page.ts");

      var AllLotsPageModule = function AllLotsPageModule() {
        _classCallCheck(this, AllLotsPageModule);
      };

      AllLotsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _all_lots_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllLotsPageRoutingModule"]],
        declarations: [_all_lots_page__WEBPACK_IMPORTED_MODULE_6__["AllLotsPage"]]
      })], AllLotsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/all-lots/all-lots.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/all-lots/all-lots.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAllLotsAllLotsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsbC1sb3RzL2FsbC1sb3RzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/pages/all-lots/all-lots.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/all-lots/all-lots.page.ts ***!
      \*************************************************/

    /*! exports provided: AllLotsPage */

    /***/
    function srcAppPagesAllLotsAllLotsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllLotsPage", function () {
        return AllLotsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AllLotsPage = /*#__PURE__*/function () {
        function AllLotsPage() {
          _classCallCheck(this, AllLotsPage);
        }

        _createClass(AllLotsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AllLotsPage;
      }();

      AllLotsPage.ctorParameters = function () {
        return [];
      };

      AllLotsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-lots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./all-lots.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/all-lots/all-lots.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./all-lots.page.scss */
        "./src/app/pages/all-lots/all-lots.page.scss"))["default"]]
      })], AllLotsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-all-lots-all-lots-module-es5.js.map
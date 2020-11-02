(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"secondary\"></ion-menu-button>\n    </ion-buttons>\n\n    <ion-title>\n      University Campus\n    </ion-title>\n    <ion-buttons class=\"button\" slot='end'>\n      <ion-button (click)=\"centralizeCamera()\">\n        To Campus\n      </ion-button>\n      <ion-button (click)=\"clear()\">\n        Clear Map\n      </ion-button>\n      <ion-button (click)=\"showPins()\">\n        Show ALl\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <div id=\"map_canvas\"></div>\n</ion-content>\n\n\n");

/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");




const routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
let MapPageRoutingModule = class MapPageRoutingModule {
};
MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MapPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");







let MapPageModule = class MapPageModule {
};
MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
        ],
        declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
    })
], MapPageModule);



/***/ }),

/***/ "./src/app/pages/map/map.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.button {\n  font-family: \"Raleway\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0Usa0NBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuLy8gU2V0IGJ1dHRvbiBmb250IHRvIG1hdGNoIGFwcFxuLmJ1dHRvbntcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/location.service */ "./src/app/services/location.service.ts");




let MapPage = class MapPage {
    /*
    img = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap" +
            "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318" +
            "&markers=color:red%7Clabel:C%7C40.718217,-73.998284" +
            "&key=AIzaSyA4gpqIrlhwjFpfkqm2e2lnnm-xxbJZXMQ"
    */
    constructor(platform, locServ) {
        this.platform = platform;
        this.locServ = locServ;
    }
    ngOnInit() {
        this.platform.ready();
        this.locServ.loadMap();
        this.showPins();
    }
    centralizeCamera() {
        this.locServ.cameraToCampus();
    }
    showPins() {
        this.locServ.addParkingLots();
        this.locServ.getMyLocation();
    }
    clear() {
        this.locServ.clearMap();
    }
};
MapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _services_location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"] }
];
MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.page.scss */ "./src/app/pages/map/map.page.scss")).default]
    })
], MapPage);



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let LocationService = class LocationService {
    /*
    img = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap" +
            "&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318" +
            "&markers=color:red%7Clabel:C%7C40.718217,-73.998284" +
            "&key=AIzaSyA4gpqIrlhwjFpfkqm2e2lnnm-xxbJZXMQ"
    */
    constructor(toastCtrl, platform) {
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.parking = ['Bull Street', 'Athletic Village',
            'Blossom Street', 'Close-Hipp',
            'Hampton', 'Pendleton Street',
            'Senate Street', 'Sumter Street',
            'Columbia Hall', 'S4', 'S8', 'GS4', 'AD1',
            'AD3', 'AD6', 'AD6', 'AD7', 'AD9', 'AD11', 'AD12'];
    }
    loadMap() {
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('map_canvas');
        this.addParkingLots();
        this.getMyLocation();
        this.cameraToCampus();
    }
    getLots() {
        return this.parking;
    }
    getMyLocation() {
        // Get the location of you
        this.map.getMyLocation().then((location) => {
            console.log(JSON.stringify(location, null, 2));
            //add a marker
            let marker = this.map.addMarkerSync({
                title: "You're Here",
                //snippet: 'This plugin is awesome!',
                position: location.latLng,
                animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAnimation"].BOUNCE
            });
            //show the infoWindow
            marker.showInfoWindow();
            //If clicked it, display the alert
            // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
            //  this.showToast('clicked!');
            // });
            this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).subscribe((data) => {
                console.log("Click MAP", data);
            });
        })
            .catch(err => {
            //this.loading.dismiss();
            this.showToast(err.error_message);
        });
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        });
    }
    cameraToCampus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map.animateCamera({
                target: { lat: 33.996963, lng: -81.031415 },
                zoom: 17,
                tilt: 60,
                bearing: 140,
                duration: 5000
            }).then(() => {
                //alert("Camera target has been changed");
            });
        });
    }
    addParkingLots() {
        /*
         * Load markers on the map of UofSC parking lots.
         */
        // Parking Marker
        let marker0 = this.map.addMarkerSync({
            title: 'Bull Street Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.994064,
                lng: -81.026516
            }
        });
        let marker1 = this.map.addMarkerSync({
            title: 'Athletic Village Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.986533,
                lng: -81.024404
            }
        });
        let marker2 = this.map.addMarkerSync({
            title: 'Blossom Street Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.993543,
                lng: -81.027456
            }
        });
        let marker3 = this.map.addMarkerSync({
            title: 'Close-Hipp Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 34.000939,
                lng: -81.022866
            }
        });
        let marker4 = this.map.addMarkerSync({
            title: 'Pendleton Street Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 34.000638,
                lng: -81.026847
            }
        });
        let marker5 = this.map.addMarkerSync({
            title: 'Senate Street Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 34.001645,
                lng: -81.025427
            }
        });
        let marker6 = this.map.addMarkerSync({
            title: 'Sumter Street Garage',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.992435,
                lng: -81.0228319
            }
        });
        let marker7 = this.map.addMarkerSync({
            title: 'S4',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 34.001150,
                lng: -81.021478
            }
        });
        let marker8 = this.map.addMarkerSync({
            title: 'S8',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.992606,
                lng: -81.024959
            }
        });
        let marker9 = this.map.addMarkerSync({
            title: 'GS4',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.993309,
                lng: -81.036493
            }
        });
        let marker10 = this.map.addMarkerSync({
            title: 'AD1',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.992151,
                lng: -81.035900
            }
        });
        let marker11 = this.map.addMarkerSync({
            title: 'AD3',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.991624,
                lng: -81.033755
            }
        });
        let marker12 = this.map.addMarkerSync({
            title: 'AD6',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.989863,
                lng: -81.023890
            }
        });
        let marker13 = this.map.addMarkerSync({
            title: 'AD7',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 34.006127,
                lng: -81.025545
            }
        });
        let marker14 = this.map.addMarkerSync({
            title: 'AD9',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.989918,
                lng: -81.022373
            }
        });
        let marker15 = this.map.addMarkerSync({
            title: 'AD11',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.985505,
                lng: -81.021013
            }
        });
        let marker16 = this.map.addMarkerSync({
            title: 'AD12',
            icon: 'blue',
            animation: 'DROP',
            position: {
                lat: 33.996711,
                lng: -81.034921
            }
        });
        //marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        //alert('The University of South Carolina');
        //});
    }
    clearMap() {
        this.map.clear();
    }
};
LocationService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
LocationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocationService);



/***/ })

}]);
//# sourceMappingURL=pages-map-map-module-es2015.js.map
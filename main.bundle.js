webpackJsonp([1,4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-alert',
        template: __webpack_require__(175),
        styles: [__webpack_require__(166)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, authenticationService, alertService, config) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.config = config;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(176),
        styles: [__webpack_require__(167)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jokes_jokes_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_alert_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__userprofile_userprofile_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__jokes_jokes_component__["a" /* JokesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_image_upload__["ImageUploadModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routes */], {
                useHash: true
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_14__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_15__services_alert_service__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_16__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile/:id', component: __WEBPACK_IMPORTED_MODULE_4__profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_auth_guard__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserprofileComponent = (function () {
    function UserprofileComponent() {
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(182),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [])
], UserprofileComponent);

//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = (function () {
    function AppConfig() {
        //49521ng 
        this.apiUrl = 'http://jokes.apphb.com'; //'http://localhost:55628';
        this.JokesServiceUrl = this.apiUrl + '/api/PostedJokes';
        this.AccountServiceUrl = this.apiUrl + '/api/Account';
        this.TokenKey = 'currentUser';
        this.Accesstoken = 'access_token';
        this.Expiresin = 'expires_in';
        this.TokenType = 'token_type';
        this.UserName = 'userName';
    }
    return AppConfig;
}());

;
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "\r\n\r\nhtml {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody{\r\n  font-family: Lato,\"Helvetica Neue\",Arial,Verdana,Tahoma,\"Lucida Sans\",FreeSans,\"Lucida Sans Unicode\",\"Luxi Sans\",sans-serif;\r\n  background: #e9eaed;\r\n  overflow-x:hidden; \r\n}\r\n\r\nfooter.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: #fff;\r\n}\r\n\r\nfooter .container .text-muted {\r\n  margin: 20px 0;\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.navbar-white a{\r\n    color: #858585;\r\n}\r\n.navbar-white {\r\n    background-color: #fff;\r\n    border-color: #e7e7e7;\r\n}\r\n\r\n.btn.visible-xs {\r\n    display: inline-block !important;\r\n}\r\n\r\n.page-content{\r\n  margin-top: 90px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n/*============= top navbar =================*/\r\n/*.navbar {\r\n    padding-top: 15px;\r\n    border: 0;\r\n    font-size: 16px;\r\n}*/\r\n\r\n.navbar-fixed-top {\r\n    top: 0;\r\n    border-width: 0 0 1px;\r\n}\r\n\r\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\r\n    color: #FFFFFF;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n}\r\n\r\n.navbar .navbar-brand {\r\n    font-weight: 600;\r\n    margin: 5px 0px;\r\n    padding: 20px 15px;\r\n    font-size: 20px;\r\n}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    height: 50px;\r\n    padding: 15px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n}\r\n\r\n.navbar-transparent .navbar-nav > li > a:not(.btn), \r\n.navbar-transparent .navbar-nav > li > a.btn-default, \r\n[class*=\"navbar-ct\"] .navbar-nav > li > a:not(.btn), \r\n[class*=\"navbar-ct\"] .navbar-nav > li > a.btn-default {\r\n    color: #FFFFFF;\r\n    border-color: #FFFFFF;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\n.navbar .navbar-nav > li > a {\r\n    padding: 10px 15px;\r\n    margin: 15px 3px;\r\n}\r\n/*====================== panel widgets =================*/\r\n\r\n.widget {\r\n    padding: 0;\r\n    box-shadow: none;\r\n    margin: 0 0 30px 0\r\n}\r\n\r\n.widget.collapsed .widget-body {\r\n    display: none\r\n}\r\n\r\n.widget.collapsed.radius-bordered .widget-header {\r\n    -webkit-border-radius: 3px 3px 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.no-header .widget-header {\r\n    display: none\r\n}\r\n\r\n.widget.no-header.radius-bordered .widget-body {\r\n    -webkit-border-radius: 3px 3px 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.maximized {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99999;\r\n    margin: 0;\r\n    overflow: auto\r\n}\r\n\r\n.widget.maximized .widget-body {\r\n    padding: 12px 0\r\n}\r\n\r\n.widget.transparent .widget-header,\r\n.widget.transparent .widget-body {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    box-shadow: none\r\n}\r\n\r\n.widget.transparent .widget-header {\r\n    border-bottom: 1px solid #ccc\r\n}\r\n\r\n.widget.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget.radius-bordered .widget-header {\r\n    -webkit-border-radius: 3px 3px 0 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 0 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 0 0;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.radius-bordered .widget-body {\r\n    -webkit-border-radius: 0 0 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 0 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 0 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.flat .widget-body,\r\n.widget.flat .widget-header {\r\n    box-shadow: none\r\n}\r\n\r\n.widget.lightshadow .widget-body,\r\n.widget.lightshadow .widget-header {\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget:hover .compact {\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget:hover .compact i {\r\n    color: #2dc3e8\r\n}\r\n\r\n.widget-header {\r\n    position: relative;\r\n    min-height: 35px;\r\n    background: #fff;\r\n    color: #555;\r\n    padding-left: 12px;\r\n    text-align: right\r\n}\r\n\r\n.widget-header .widget-icon {\r\n    display: block;\r\n    width: 30px;\r\n    height: 32px;\r\n    position: relative;\r\n    float: left;\r\n    font-size: 111%;\r\n    line-height: 32px;\r\n    text-align: center;\r\n    margin-left: -10px\r\n}\r\n\r\n.widget-header>.widget-caption {\r\n    line-height: 34px;\r\n    padding: 0;\r\n    margin: 0;\r\n    float: left;\r\n    text-align: left;\r\n    font-weight: 400 !important;\r\n    font-size: 13px\r\n}\r\n\r\n.widget-header.lined {\r\n    border: 0;\r\n    box-shadow: none !important;\r\n    padding-left: 2%\r\n}\r\n\r\n.widget-header.lined:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 96%;\r\n    bottom: 0;\r\n    top: 35px;\r\n    height: 1px;\r\n    left: 2%;\r\n    z-index: 1;\r\n    border-bottom: 1px solid #e5e5e5\r\n}\r\n\r\n.widget-header.lined .widget-buttons {\r\n    padding-right: 2%\r\n}\r\n\r\n.widget-header.lined+.widget-body {\r\n    padding-left: 2%;\r\n    padding-right: 2%\r\n}\r\n\r\n.widget-header.separated {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.widget-header[class*=\"bg-\"] {\r\n    border: 0\r\n}\r\n\r\n.widget-header[class*=\"bg-\"] .widget-caption,\r\n.widget-header[class*=\"bg-\"] i {\r\n    color: #fff\r\n}\r\n\r\n.widget-header.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget-header.header-large {\r\n    min-height: 49px;\r\n    padding-left: 18px\r\n}\r\n\r\n.widget-header.header-large h5 {\r\n    line-height: 48px;\r\n    font-size: 16px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons {\r\n    line-height: 48px;\r\n    height: 48px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons a {\r\n    min-width: 26px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons a i {\r\n    font-size: 20px\r\n}\r\n\r\n.widget-header.header-small {\r\n    min-height: 29px;\r\n    padding-left: 10px\r\n}\r\n\r\n.widget-header.header-small h5 {\r\n    line-height: 28px;\r\n    font-size: 12px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons {\r\n    line-height: 29px;\r\n    height: 29px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons a {\r\n    min-width: 16px;\r\n    height: 16px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons a i {\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons {\r\n    display: inline-block;\r\n    padding: 0 5px;\r\n    line-height: 34px;\r\n    position: relative;\r\n    text-align: left;\r\n    height: 36px\r\n}\r\n\r\n.widget-buttons.buttons-bordered {\r\n    border-left: 1px solid #e5e5e5\r\n}\r\n\r\n.widget-buttons.compact {\r\n    margin-top: 4px;\r\n    background-color: #f5f5f5;\r\n    line-height: 27px;\r\n    transition: background-color .218s ease;\r\n    transition: box-shadow .218s ease;\r\n    transition: color .318s ease;\r\n    height: 27px\r\n}\r\n\r\n.widget-buttons.compact:hover {\r\n    background-color: #2dc3e8;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget-buttons.compact:hover i {\r\n    color: #fff\r\n}\r\n\r\n.widget-buttons.compact:before {\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -4px;\r\n    width: 4px;\r\n    max-width: 4px;\r\n    overflow: hidden;\r\n    background-color: #2dc3e8\r\n}\r\n\r\n.widget-buttons.compact a {\r\n    min-width: 14px;\r\n    line-height: 14px\r\n}\r\n\r\n.widget-buttons.compact i {\r\n    color: #ccc;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons.no-padding {\r\n    padding: 0\r\n}\r\n\r\n.widget-buttons.padding-5 {\r\n    padding: 0 5px\r\n}\r\n\r\n.widget-buttons.no-border:before {\r\n    display: none\r\n}\r\n\r\n.widget-buttons label {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-bottom: 0;\r\n    line-height: 6px\r\n}\r\n\r\n.widget-buttons>a {\r\n    font-size: 14px;\r\n    margin: 0 1px;\r\n    display: inline-block;\r\n    padding: 0;\r\n    line-height: 24px;\r\n    min-width: 20px;\r\n    text-align: center\r\n}\r\n\r\n.widget-buttons>a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.widget-buttons>a i {\r\n    vertical-align: middle\r\n}\r\n\r\n.widget-buttons>[data-toggle]>.fa {\r\n    margin-right: 0\r\n}\r\n\r\n.widget-buttons>[data-toggle]:hover {\r\n    zoom: 1;\r\n    filter: alpha(opacity=50);\r\n    -webkit-opacity: .5;\r\n    -moz-opacity: .5;\r\n    opacity: .5\r\n}\r\n\r\n.widget-buttons>[data-toggle]:focus {\r\n    text-decoration: none\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"dispose\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"maximize\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"collapse\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"refresh\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"config\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons .progress {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin: 0;\r\n    min-width: 100px;\r\n    margin-top: -3px\r\n}\r\n\r\n.widget-buttons .btn-group {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-buttons .btn-group .dropdown-menu {\r\n    right: 0;\r\n    left: auto\r\n}\r\n\r\n.widget-buttons .badge {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-buttons .label {\r\n    padding: 5px 6px 5px 6px\r\n}\r\n\r\n.widget-buttons .pagination,\r\n.widget-buttons .pager {\r\n    float: right;\r\n    margin: 5px 2px 1px\r\n}\r\n\r\n.widget-buttons .btn {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-body {\r\n    background-color: #fbfbfb;\r\n    padding: 12px\r\n}\r\n\r\n.widget-body.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget-body[class*=\"bg-\"] {\r\n    color: #fff\r\n}\r\n\r\n.widget-body.no-padding {\r\n    padding: 0\r\n}\r\n\r\n.widget-body.no-padding .accordion {\r\n    border: 0\r\n}\r\n\r\n.widget-body.no-padding .dataTables_filter label {\r\n    margin: 10px\r\n}\r\n\r\n.widget-body.no-padding .dataTables_length {\r\n    top: 10px;\r\n    right: 10px\r\n}\r\n\r\n.widget-body.no-padding .DTTT.btn-group {\r\n    right: 80px;\r\n    top: 10px\r\n}\r\n\r\n.widget-body .accordion.panel-group {\r\n    border-top-width: 1px !important\r\n}\r\n\r\n.widget-body>table {\r\n    margin-bottom: 0\r\n}\r\n\r\n.widget-body hr.wide {\r\n    margin-left: -12px;\r\n    margin-right: -12px\r\n}\r\n.bordered-pink {\r\n    border-color: #e75b8d !important;\r\n}\r\n.bordered-palegreen {\r\n    border-color: #a0d468 !important;\r\n}\r\n.bordered-darkorange {\r\n    border-color: #ed4e2a !important;\r\n}\r\n.bordered-sky {\r\n    border-color: #2dc3e8 !important;\r\n}\r\n.bordered-yellow {\r\n    border-color: #ffce55 !important;\r\n}\r\n.bordered-success {\r\n    border-color: #53a93f !important;\r\n}\r\n.bordered-info {\r\n    border-color: #57b5e3 !important;\r\n}\r\n.bordered-red {\r\n    border-color: #df5138 !important;\r\n}\r\n.darkorange {\r\n    color: #ed4e2a !important;\r\n}\r\n.bordered-blue {\r\n    border-color: #5db2ff !important;\r\n}\r\n.bg-blue {\r\n    background-color: #5db2ff !important;\r\n}\r\n.bordered-gold {\r\n    border-color: #f9b256 !important;\r\n}\r\nh1.row-title, h2.row-title, h3.row-title, h4.row-title, h5.row-title, h6.row-title {\r\n    line-height: 17px;\r\n    margin: 10px 0;\r\n    padding: 9px 10px 9px 8px;\r\n    display: inline-block;\r\n    color: #646464;\r\n    font-weight: 400;\r\n    background-color: #fff;\r\n    position: relative;\r\n    -webkit-border-radius: 0 2px 2px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 2px 2px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 2px 2px 0;\r\n    background-clip: padding-box;\r\n    box-shadow: 0 0 3px rgba(0,0,0,.3);\r\n}\r\n\r\n/*====================== Timeline posts ================*/\r\n.p-text-area {\r\n    border: none !important;\r\n    font-weight: 300;\r\n    box-shadow: none;\r\n    color: #c3c3c3;\r\n    font-size: 16px;\r\n    resize: vertical;\r\n    background: #fff !important;\r\n}\r\n\r\n.box-widget {\r\n    border: none;\r\n    position: relative;\r\n}\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #2dc3e8;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.box-header.with-border {\r\n    border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.user-block img {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n}\r\n.user-block .username {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.user-block .description {\r\n    color: #999;\r\n    font-size: 13px;\r\n}\r\n.user-block .username, \r\n.user-block .description, \r\n.user-block .comment {\r\n    display: block;\r\n    margin-left: 50px;\r\n}\r\n.box-header>.box-tools {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 5px;\r\n}\r\n.btn-box-tool {\r\n    padding: 5px;\r\n    font-size: 12px;\r\n    background: transparent;\r\n    color: #97a0b3;\r\n}\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n.pad {\r\n    padding: 10px;\r\n}\r\n.box .btn-default {\r\n    background-color: #f4f4f4;\r\n    color: #444;\r\n    border-color: #ddd;\r\n}\r\n.box-comments {\r\n    background: #f7f7f7 !important;\r\n}\r\n.box-footer {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top: 1px solid #f4f4f4;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n}\r\n.box-comments .box-comment:first-of-type {\r\n    padding-top: 0;\r\n}\r\n.box-comments .box-comment {\r\n    padding: 8px 0;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.img-sm, \r\n.box-comments .box-comment img, \r\n.user-block.user-block-sm img {\r\n    width: 30px !important;\r\n    height: 30px !important;\r\n}\r\n.img-sm, .img-md, \r\n.img-lg, .box-comments .box-comment img, \r\n.user-block.user-block-sm img {\r\n    float: left;\r\n}\r\n.box-comments .comment-text {\r\n    margin-left: 40px;\r\n    color: #555;\r\n}\r\n.box-comments .username {\r\n    color: #444;\r\n    display: block;\r\n    font-weight: 600;\r\n}\r\n.box-comments .text-muted {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n.img-sm+.img-push {\r\n    margin-left: 40px;\r\n}\r\n.box .form-control {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-color: #d2d6de;\r\n}\r\n\r\n.attachment-block {\r\n    border: 1px solid #f4f4f4;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n    background: #f7f7f7;\r\n}\r\n.attachment-block .attachment-img {\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    height: auto;\r\n    float: left;\r\n}\r\n.attachment-block .attachment-pushed {\r\n    margin-left: 110px;\r\n}\r\n.attachment-block .attachment-heading {\r\n    margin: 0;\r\n}\r\n.attachment-block .attachment-heading .h4, .attachment-block .attachment-heading h4 {\r\n    font-size: 18px;\r\n}\r\n.attachment-block .attachment-text {\r\n    color: #555;\r\n}\r\n\r\n.box-form {\r\n    padding: 10px 15px;\r\n    background-color: #f5f5f5;\r\n    border-top: 1px solid #ddd;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n}\r\n\r\n.n-border-top{\r\n    border-top: none !important;\r\n}\r\n\r\n/*============ profile about ===========*/\r\n.padding-v-5 {\r\n    padding-top: 5px !important;\r\n    padding-bottom: 5px !important;\r\n}\r\n\r\n.margin-none {\r\n    margin: 0 !important;\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.padding-v-5 {\r\n    padding-top: 5px !important;\r\n    padding-bottom: 5px !important;\r\n}\r\n\r\n.text-muted {\r\n    color: #777777;\r\n}\r\n\r\n/*============== profile friends =============*/\r\n\r\nul.img-grid {\r\n    list-style: none;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\nul.img-grid li {\r\n    float: left;\r\n    margin: 0;\r\n    width: auto;\r\n}\r\n\r\n\r\nul.img-grid li a {\r\n    display: block;\r\n}\r\n\r\n.widget-friends ul.img-grid li img{\r\n      border:1px solid #fff;  \r\n}\r\n\r\nul.img-grid li img {\r\n    width:70px;\r\n    height:70px;\r\n/*    width:115px;\r\n    height:115px;*/\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    transition: all .2s ease-in-out;\r\n\r\n}\r\n\r\nul.img-grid li img:hover, .cover.profile .wrapper .friends li a img:hover {\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n\r\n\r\n}\r\n\r\n.panel-body > *:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*======================== profile groups ==============*/\r\n\r\n.card {\r\n    border-radius: 6px;\r\n    background-color: #FFFFFF;\r\n    color: #252422;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.card .header {\r\n    padding: 20px 20px 0;\r\n}\r\n\r\n.card .title {\r\n    margin: 0;\r\n    color: #252422;\r\n    font-weight: 300;\r\n}\r\n\r\nh4, .h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    line-height: 1.2em;\r\n}\r\n\r\n.card .content {\r\n    padding: 15px 15px 10px 15px;\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.card ul.team-members li:not(:last-child) {\r\n    border-bottom: 1px solid #F1EAE0;\r\n}\r\n\r\n.card ul.team-members li {\r\n    padding: 10px 0px;\r\n}\r\n\r\n.card .avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n}\r\n\r\n.card .btn.btn-icon {\r\n    padding: 7px;\r\n}\r\n\r\n.card .btn-sm {\r\n    font-size: 12px;\r\n    border-radius: 26px;\r\n    padding: 4px 4px;\r\n}\r\n\r\n.card .btn-success {\r\n    border-color: #7AC29A;\r\n    color: #7AC29A;\r\n}\r\n\r\n/***============ modals ======================*/\r\n.modal-content {\r\n    -webkit-border-radius: 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0;\r\n    background-clip: padding-box;\r\n    box-shadow: 0 0 40px rgba(0, 0, 0, .5);\r\n    color: #000;\r\n    background-color: #fff;\r\n    border: rgba(0, 0, 0, 0)\r\n}\r\n\r\n.modal-content .close {\r\n    font-size: 26px\r\n}\r\n\r\n.modal-footer {\r\n    padding-top: 12px;\r\n    padding-bottom: 14px;\r\n    border-top: 0;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.modal-header {\r\n    padding: 10px 15px 10px 20px;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.modal-header .close {\r\n    font-size: 26px\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #fff\r\n}\r\n\r\n.modal-backdrop.in {\r\n    zoom: 1;\r\n    filter: alpha(opacity=75);\r\n    -webkit-opacity: .75;\r\n    -moz-opacity: .75;\r\n    opacity: .75\r\n}\r\n\r\n/*================== home profile nav ===============*/\r\n.profile-nav .user-heading {\r\n    background: #2dc3e8;\r\n    color: #fff;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-border-radius: 4px 4px 0 0;\r\n    padding: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.profile-nav .user-heading.round a  {\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    border: 10px solid rgba(255,255,255,0.3);\r\n    display: inline-block;\r\n}\r\n\r\n.profile-nav .user-heading a img {\r\n    width: 112px;\r\n    height: 112px;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n}\r\n\r\n.profile-nav .user-heading h1 {\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.profile-nav .user-heading p {\r\n    font-size: 12px;\r\n}\r\n\r\n.profile-nav ul {\r\n    margin-top: 1px;\r\n}\r\n\r\n.profile-nav ul > li {\r\n    border-bottom: 1px solid #ebeae6;\r\n    margin-top: 0;\r\n    line-height: 30px;\r\n}\r\n\r\n.profile-nav ul > li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.profile-nav ul > li > a {\r\n    border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    color: #89817f;\r\n    border-left: 5px solid #fff;\r\n}\r\n\r\n.profile-nav ul > li > a:hover, .profile-nav ul > li > a:focus, .profile-nav ul li.active  a {\r\n    background: #f8f7f5 !important;\r\n    border-left: 5px solid #2dc3e8;\r\n    color: #89817f !important;\r\n}\r\n\r\n.profile-nav ul > li:last-child > a:last-child {\r\n    border-radius: 0 0 4px 4px;\r\n    -webkit-border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.profile-nav ul > li > a > i{\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n    color: #bcb3aa;\r\n}\r\n\r\n\r\n/*===================== USER LIST TABLE ===================*/\r\n.user-list tbody td > img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 0.875em;\r\n    font-style: italic;\r\n}\r\n\r\n/* TABLES */\r\n.table {\r\n    border-collapse: separate;\r\n}\r\n.table-hover > tbody > tr:hover > td,\r\n.table-hover > tbody > tr:hover > th {\r\n    background-color: #eee;\r\n}\r\n.table thead > tr > th {\r\n    border-bottom: 1px solid #C2C2C2;\r\n    padding-bottom: 0;\r\n}\r\n.table tbody > tr > td {\r\n    font-size: 0.875em;\r\n    background: #f5f5f5;\r\n    border-top: 10px solid #fff;\r\n    vertical-align: middle;\r\n    padding: 12px 8px;\r\n}\r\n.table tbody > tr > td:first-child,\r\n.table thead > tr > th:first-child {\r\n    padding-left: 20px;\r\n}\r\n.table thead > tr > th span {\r\n    border-bottom: 2px solid #C2C2C2;\r\n    display: inline-block;\r\n    padding: 0 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: normal;\r\n}\r\n.table thead > tr > th > a span {\r\n    color: #344644;\r\n}\r\n.table thead > tr > th > a span:after {\r\n    content: \"\\F0DC\";\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n    margin-left: 5px;\r\n    font-size: 0.75em;\r\n}\r\n.table thead > tr > th > a.asc span:after {\r\n    content: \"\\F0DD\";\r\n}\r\n.table thead > tr > th > a.desc span:after {\r\n    content: \"\\F0DE\";\r\n}\r\n.table thead > tr > th > a:hover span {\r\n    text-decoration: none;\r\n    color: #2bb6a3;\r\n    border-color: #2bb6a3;\r\n}\r\n.table.table-hover tbody > tr > td {\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n}\r\n.table tbody tr td .call-type {\r\n    display: block;\r\n    font-size: 0.75em;\r\n    text-align: center;\r\n}\r\n.table tbody tr td .first-line {\r\n    line-height: 1.5;\r\n    font-weight: 400;\r\n    font-size: 1.125em;\r\n}\r\n.table tbody tr td .first-line span {\r\n    font-size: 0.875em;\r\n    color: #969696;\r\n    font-weight: 300;\r\n}\r\n.table tbody tr td .second-line {\r\n    font-size: 0.875em;\r\n    line-height: 1.2;\r\n}\r\n.table a.table-link {\r\n    margin: 0 5px;\r\n    font-size: 1.125em;\r\n}\r\n.table a.table-link:hover {\r\n    text-decoration: none;\r\n    color: #428bca;\r\n}\r\n.table a.table-link.danger {\r\n    color: #fe635f;\r\n}\r\n.table a.table-link.success {\r\n    color: #5cb85c;\r\n}\r\n.table a.table-link.danger:hover {\r\n    color: #dd504c;\r\n}\r\n\r\n.table-products tbody > tr > td {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #ebebeb;\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n    position: relative;\r\n}\r\n.table-products tbody > tr:hover > td {\r\n    text-decoration: none;\r\n    background-color: #f6f6f6;\r\n}\r\n.table-products .name {\r\n    display: block;\r\n    font-weight: 600;\r\n    padding-bottom: 7px;\r\n}\r\n.table-products .price {\r\n    display: block;\r\n    text-decoration: none;\r\n    width: 50%;\r\n    float: left;\r\n    font-size: 0.875em;\r\n}\r\n.table-products .price > i {\r\n    color: #8dc859;\r\n}\r\n.table-products .warranty {\r\n    display: block;\r\n    text-decoration: none;\r\n    width: 50%;\r\n    float: left;\r\n    font-size: 0.875em;\r\n}\r\n.table-products .warranty > i {\r\n    color: #f1c40f;\r\n}\r\n.table tbody > tr.table-line-fb > td {\r\n    background-color: #9daccb;\r\n    color: #262525;\r\n}\r\n.table tbody > tr.table-line-twitter > td {\r\n    background-color: #9fccff;\r\n    color: #262525;\r\n}\r\n.table tbody > tr.table-line-plus > td {\r\n    background-color: #eea59c;\r\n    color: #262525;\r\n}\r\n.table-stats .status-social-icon {\r\n    font-size: 1.9em;\r\n    vertical-align: bottom;\r\n}\r\n.table-stats .table-line-fb .status-social-icon {\r\n    color: #556484;\r\n}\r\n.table-stats .table-line-twitter .status-social-icon {\r\n    color: #5885b8;\r\n}\r\n.table-stats .table-line-plus .status-social-icon {\r\n    color: #a75d54;\r\n}\r\n\r\n/*============= Online Users Sidebar =================*/\r\n\r\n.chat-sidebar .list-group {\r\n  height: 94%;\r\n}\r\n\r\n.chat-sidebar ~ .nav-controller > .controller-open {\r\n    display: inline-block;\r\n}\r\n\r\n.chat-sidebar ~ .nav-controller > .controller-close {\r\n    display: none;\r\n}\r\n.chat-sidebar.focus ~ .nav-controller > .controller-open {\r\n    display: none;\r\n}\r\n\r\n.chat-sidebar.focus ~ .nav-controller > .controller-close {\r\n    display: inline-block;\r\n}\r\n\r\n.chat-sidebar.focus {\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.chat-sidebar {\r\n    position: fixed;\r\n    top: 51px;\r\n    right: -100%;\r\n    padding-top: 35px;\r\n    padding-bottom: 15px;\r\n    height: 95%;\r\n    width: 210px;\r\n    text-align: right;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: -3px 0px 3px 0px rgba(160, 160, 160, 0.30);\r\n    z-index: 999;    \r\n    overflow-y: auto;\r\n}\r\n\r\n.chat-sidebar.focus {\r\n    right: 0px;\r\n}\r\n\r\n.chat-sidebar > .divider {\r\n    content: '';\r\n    border-bottom: 1px solid rgb(230, 230, 230);\r\n    max-height: 1px;\r\n    overflow: hidden;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.chat-sidebar > h4,\r\n.chat-sidebar > p,\r\n.chat-sidebar > ul {\r\n    padding: 0px 10px;\r\n}\r\n\r\n.chat-sidebar > h4 {\r\n    font-family: 'Anton', sans-serif;\r\n}\r\n\r\n.chat-sidebar > ul {\r\n    list-style: none;\r\n}\r\n.chat-sidebar > ul > li {\r\n    margin: 5px 0px;   \r\n}\r\n.chat-sidebar > ul > li > a {\r\n    color: rgb(190, 190, 190);   \r\n}\r\n\r\n.chat-sidebar .img-chat {\r\n  width: 40px;\r\n  height: 40px;\r\n  border : 0px !important;\r\n}\r\n.chat-sidebar .list-group-item {\r\n  padding:1px 8px;\r\n}\r\n.chat-sidebar .list-group .list-group-item .chat-user-name {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  padding-top: 4px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 100px;\r\n}\r\n\r\n.chat-sidebar .connected-status {\r\n  color: #008000 !important;\r\n}\r\n\r\n.chat-sidebar .absent-status {\r\n  color: #FFA500 !important;\r\n}\r\n\r\n.chat-sidebar .chat-title {\r\n  font-size: 16px;\r\n  color:#A9A9A9;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*=================== others =======*/\r\n.team-members img.notifications{\r\n    width: 50px;\r\n    max-height: 50px;\r\n}\r\n\r\n.img-add img{\r\n    width: 110px;\r\n    height: 110px;\r\n    display: inline-block;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.ad-text{\r\n    font-size: 10px;\r\n}\r\n\r\n.list-users{\r\n    background: #fff;\r\n}\r\n\r\n.show-in-modal{\r\n    cursor: pointer;\r\n}\r\n\r\na, a:hover {\r\n text-decoration: none;\r\n}\r\n\r\n.navbar-toggle {\r\n    background-color: #eee !important;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n    background: #000 !important;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Lato:400|Inconsolata);", ""]);

// module
exports.push([module.i, "html {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody{\r\n  font-family: Lato,\"Helvetica Neue\",Arial,Verdana,Tahoma,\"Lucida Sans\",FreeSans,\"Lucida Sans Unicode\",\"Luxi Sans\",sans-serif;\r\n  background: #e9eaed;\r\n  overflow-x:hidden; \r\n}\r\n\r\nfooter.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 60px;\r\n  background-color: #fff;\r\n}\r\n\r\nfooter .container .text-muted {\r\n  margin: 20px 0;\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.navbar-white a{\r\n    color: #858585;\r\n}\r\n.navbar-white {\r\n    background-color: #fff;\r\n    border-color: #e7e7e7;\r\n}\r\n\r\n.btn.visible-xs {\r\n    display: inline-block !important;\r\n}\r\n\r\n.page-content{\r\n  margin-top: 90px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n/*============= top navbar =================*/\r\n/*.navbar {\r\n    padding-top: 15px;\r\n    border: 0;\r\n    font-size: 16px;\r\n}*/\r\n\r\n.navbar-fixed-top {\r\n    top: 0;\r\n    border-width: 0 0 1px;\r\n}\r\n\r\n.navbar-transparent .navbar-brand, [class*=\"navbar-ct\"] .navbar-brand {\r\n    color: #FFFFFF;\r\n    opacity: 0.9;\r\n    filter: alpha(opacity=90);\r\n}\r\n\r\n.navbar .navbar-brand {\r\n    font-weight: 600;\r\n    margin: 5px 0px;\r\n    padding: 20px 15px;\r\n    font-size: 20px;\r\n}\r\n\r\n.navbar-brand {\r\n    float: left;\r\n    height: 50px;\r\n    padding: 15px 15px;\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n}\r\n\r\n.navbar-transparent .navbar-nav > li > a:not(.btn), \r\n.navbar-transparent .navbar-nav > li > a.btn-default, \r\n[class*=\"navbar-ct\"] .navbar-nav > li > a:not(.btn), \r\n[class*=\"navbar-ct\"] .navbar-nav > li > a.btn-default {\r\n    color: #FFFFFF;\r\n    border-color: #FFFFFF;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\n.navbar .navbar-nav > li > a {\r\n    padding: 10px 15px;\r\n    margin: 15px 3px;\r\n}\r\n/*====================== panel widgets =================*/\r\n\r\n.widget {\r\n    padding: 0;\r\n    box-shadow: none;\r\n    margin: 0 0 30px 0\r\n}\r\n\r\n.widget.collapsed .widget-body {\r\n    display: none\r\n}\r\n\r\n.widget.collapsed.radius-bordered .widget-header {\r\n    -webkit-border-radius: 3px 3px 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.no-header .widget-header {\r\n    display: none\r\n}\r\n\r\n.widget.no-header.radius-bordered .widget-body {\r\n    -webkit-border-radius: 3px 3px 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.maximized {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 99999;\r\n    margin: 0;\r\n    overflow: auto\r\n}\r\n\r\n.widget.maximized .widget-body {\r\n    padding: 12px 0\r\n}\r\n\r\n.widget.transparent .widget-header,\r\n.widget.transparent .widget-body {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    box-shadow: none\r\n}\r\n\r\n.widget.transparent .widget-header {\r\n    border-bottom: 1px solid #ccc\r\n}\r\n\r\n.widget.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget.radius-bordered .widget-header {\r\n    -webkit-border-radius: 3px 3px 0 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 3px 3px 0 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 3px 3px 0 0;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.radius-bordered .widget-body {\r\n    -webkit-border-radius: 0 0 3px 3px;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 0 3px 3px;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 0 3px 3px;\r\n    background-clip: padding-box\r\n}\r\n\r\n.widget.flat .widget-body,\r\n.widget.flat .widget-header {\r\n    box-shadow: none\r\n}\r\n\r\n.widget.lightshadow .widget-body,\r\n.widget.lightshadow .widget-header {\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget:hover .compact {\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget:hover .compact i {\r\n    color: #2dc3e8\r\n}\r\n\r\n.widget-header {\r\n    position: relative;\r\n    min-height: 35px;\r\n    background: #fff;\r\n    color: #555;\r\n    padding-left: 12px;\r\n    text-align: right\r\n}\r\n\r\n.widget-header .widget-icon {\r\n    display: block;\r\n    width: 30px;\r\n    height: 32px;\r\n    position: relative;\r\n    float: left;\r\n    font-size: 111%;\r\n    line-height: 32px;\r\n    text-align: center;\r\n    margin-left: -10px\r\n}\r\n\r\n.widget-header>.widget-caption {\r\n    line-height: 34px;\r\n    padding: 0;\r\n    margin: 0;\r\n    float: left;\r\n    text-align: left;\r\n    font-weight: 400 !important;\r\n    font-size: 13px\r\n}\r\n\r\n.widget-header.lined {\r\n    border: 0;\r\n    box-shadow: none !important;\r\n    padding-left: 2%\r\n}\r\n\r\n.widget-header.lined:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: block;\r\n    width: 96%;\r\n    bottom: 0;\r\n    top: 35px;\r\n    height: 1px;\r\n    left: 2%;\r\n    z-index: 1;\r\n    border-bottom: 1px solid #e5e5e5\r\n}\r\n\r\n.widget-header.lined .widget-buttons {\r\n    padding-right: 2%\r\n}\r\n\r\n.widget-header.lined+.widget-body {\r\n    padding-left: 2%;\r\n    padding-right: 2%\r\n}\r\n\r\n.widget-header.separated {\r\n    margin-bottom: 5px\r\n}\r\n\r\n.widget-header[class*=\"bg-\"] {\r\n    border: 0\r\n}\r\n\r\n.widget-header[class*=\"bg-\"] .widget-caption,\r\n.widget-header[class*=\"bg-\"] i {\r\n    color: #fff\r\n}\r\n\r\n.widget-header.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget-header.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget-header.header-large {\r\n    min-height: 49px;\r\n    padding-left: 18px\r\n}\r\n\r\n.widget-header.header-large h5 {\r\n    line-height: 48px;\r\n    font-size: 16px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons {\r\n    line-height: 48px;\r\n    height: 48px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons a {\r\n    min-width: 26px\r\n}\r\n\r\n.widget-header.header-large>.widget-buttons a i {\r\n    font-size: 20px\r\n}\r\n\r\n.widget-header.header-small {\r\n    min-height: 29px;\r\n    padding-left: 10px\r\n}\r\n\r\n.widget-header.header-small h5 {\r\n    line-height: 28px;\r\n    font-size: 12px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons {\r\n    line-height: 29px;\r\n    height: 29px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons a {\r\n    min-width: 16px;\r\n    height: 16px\r\n}\r\n\r\n.widget-header.header-small>.widget-buttons a i {\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons {\r\n    display: inline-block;\r\n    padding: 0 5px;\r\n    line-height: 34px;\r\n    position: relative;\r\n    text-align: left;\r\n    height: 36px\r\n}\r\n\r\n.widget-buttons.buttons-bordered {\r\n    border-left: 1px solid #e5e5e5\r\n}\r\n\r\n.widget-buttons.compact {\r\n    margin-top: 4px;\r\n    background-color: #f5f5f5;\r\n    line-height: 27px;\r\n    transition: background-color .218s ease;\r\n    transition: box-shadow .218s ease;\r\n    transition: color .318s ease;\r\n    height: 27px\r\n}\r\n\r\n.widget-buttons.compact:hover {\r\n    background-color: #2dc3e8;\r\n    box-shadow: 0 0 20px rgba(0, 0, 0, .2)\r\n}\r\n\r\n.widget-buttons.compact:hover i {\r\n    color: #fff\r\n}\r\n\r\n.widget-buttons.compact:before {\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: -4px;\r\n    width: 4px;\r\n    max-width: 4px;\r\n    overflow: hidden;\r\n    background-color: #2dc3e8\r\n}\r\n\r\n.widget-buttons.compact a {\r\n    min-width: 14px;\r\n    line-height: 14px\r\n}\r\n\r\n.widget-buttons.compact i {\r\n    color: #ccc;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons.no-padding {\r\n    padding: 0\r\n}\r\n\r\n.widget-buttons.padding-5 {\r\n    padding: 0 5px\r\n}\r\n\r\n.widget-buttons.no-border:before {\r\n    display: none\r\n}\r\n\r\n.widget-buttons label {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-bottom: 0;\r\n    line-height: 6px\r\n}\r\n\r\n.widget-buttons>a {\r\n    font-size: 14px;\r\n    margin: 0 1px;\r\n    display: inline-block;\r\n    padding: 0;\r\n    line-height: 24px;\r\n    min-width: 20px;\r\n    text-align: center\r\n}\r\n\r\n.widget-buttons>a:hover {\r\n    text-decoration: none\r\n}\r\n\r\n.widget-buttons>a i {\r\n    vertical-align: middle\r\n}\r\n\r\n.widget-buttons>[data-toggle]>.fa {\r\n    margin-right: 0\r\n}\r\n\r\n.widget-buttons>[data-toggle]:hover {\r\n    zoom: 1;\r\n    filter: alpha(opacity=50);\r\n    -webkit-opacity: .5;\r\n    -moz-opacity: .5;\r\n    opacity: .5\r\n}\r\n\r\n.widget-buttons>[data-toggle]:focus {\r\n    text-decoration: none\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"dispose\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"maximize\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"collapse\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"refresh\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons>[data-toggle=\"config\"] {\r\n    color: #777;\r\n    font-size: 14px\r\n}\r\n\r\n.widget-buttons .progress {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin: 0;\r\n    min-width: 100px;\r\n    margin-top: -3px\r\n}\r\n\r\n.widget-buttons .btn-group {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-buttons .btn-group .dropdown-menu {\r\n    right: 0;\r\n    left: auto\r\n}\r\n\r\n.widget-buttons .badge {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-buttons .label {\r\n    padding: 5px 6px 5px 6px\r\n}\r\n\r\n.widget-buttons .pagination,\r\n.widget-buttons .pager {\r\n    float: right;\r\n    margin: 5px 2px 1px\r\n}\r\n\r\n.widget-buttons .btn {\r\n    margin-top: -2px\r\n}\r\n\r\n.widget-body {\r\n    background-color: #fbfbfb;\r\n    padding: 12px\r\n}\r\n\r\n.widget-body.bordered-left {\r\n    border-left: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-right {\r\n    border-right: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-bottom {\r\n    border-bottom: 3px solid #fff\r\n}\r\n\r\n.widget-body.bordered-top {\r\n    border-top: 3px solid #fff\r\n}\r\n\r\n.widget-body[class*=\"bg-\"] {\r\n    color: #fff\r\n}\r\n\r\n.widget-body.no-padding {\r\n    padding: 0\r\n}\r\n\r\n.widget-body.no-padding .accordion {\r\n    border: 0\r\n}\r\n\r\n.widget-body.no-padding .dataTables_filter label {\r\n    margin: 10px\r\n}\r\n\r\n.widget-body.no-padding .dataTables_length {\r\n    top: 10px;\r\n    right: 10px\r\n}\r\n\r\n.widget-body.no-padding .DTTT.btn-group {\r\n    right: 80px;\r\n    top: 10px\r\n}\r\n\r\n.widget-body .accordion.panel-group {\r\n    border-top-width: 1px !important\r\n}\r\n\r\n.widget-body>table {\r\n    margin-bottom: 0\r\n}\r\n\r\n.widget-body hr.wide {\r\n    margin-left: -12px;\r\n    margin-right: -12px\r\n}\r\n.bordered-pink {\r\n    border-color: #e75b8d !important;\r\n}\r\n.bordered-palegreen {\r\n    border-color: #a0d468 !important;\r\n}\r\n.bordered-darkorange {\r\n    border-color: #ed4e2a !important;\r\n}\r\n.bordered-sky {\r\n    border-color: #2dc3e8 !important;\r\n}\r\n.bordered-yellow {\r\n    border-color: #ffce55 !important;\r\n}\r\n.bordered-success {\r\n    border-color: #53a93f !important;\r\n}\r\n.bordered-info {\r\n    border-color: #57b5e3 !important;\r\n}\r\n.bordered-red {\r\n    border-color: #df5138 !important;\r\n}\r\n.darkorange {\r\n    color: #ed4e2a !important;\r\n}\r\n.bordered-blue {\r\n    border-color: #5db2ff !important;\r\n}\r\n.bg-blue {\r\n    background-color: #5db2ff !important;\r\n}\r\n.bordered-gold {\r\n    border-color: #f9b256 !important;\r\n}\r\nh1.row-title, h2.row-title, h3.row-title, h4.row-title, h5.row-title, h6.row-title {\r\n    line-height: 17px;\r\n    margin: 10px 0;\r\n    padding: 9px 10px 9px 8px;\r\n    display: inline-block;\r\n    color: #646464;\r\n    font-weight: 400;\r\n    background-color: #fff;\r\n    position: relative;\r\n    -webkit-border-radius: 0 2px 2px 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0 2px 2px 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0 2px 2px 0;\r\n    background-clip: padding-box;\r\n    box-shadow: 0 0 3px rgba(0,0,0,.3);\r\n}\r\n\r\n/*====================== Timeline posts ================*/\r\n.p-text-area {\r\n    border: none !important;\r\n    font-weight: 300;\r\n    box-shadow: none;\r\n    color: #c3c3c3;\r\n    font-size: 16px;\r\n    resize: vertical;\r\n    background: #fff !important;\r\n}\r\n\r\n.box-widget {\r\n    border: none;\r\n    position: relative;\r\n}\r\n.box {\r\n    position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #2dc3e8;\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n}\r\n.box-header.with-border {\r\n    border-bottom: 1px solid #f4f4f4;\r\n}\r\n.box-header {\r\n    color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.user-block img {\r\n    width: 40px;\r\n    height: 40px;\r\n    float: left;\r\n}\r\n.user-block .username {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n}\r\n.user-block .description {\r\n    color: #999;\r\n    font-size: 13px;\r\n}\r\n.user-block .username, \r\n.user-block .description, \r\n.user-block .comment {\r\n    display: block;\r\n    margin-left: 50px;\r\n}\r\n.box-header>.box-tools {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 5px;\r\n}\r\n.btn-box-tool {\r\n    padding: 5px;\r\n    font-size: 12px;\r\n    background: transparent;\r\n    color: #97a0b3;\r\n}\r\n.box-body {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    padding: 10px;\r\n}\r\n.pad {\r\n    padding: 10px;\r\n}\r\n.box .btn-default {\r\n    background-color: #f4f4f4;\r\n    color: #444;\r\n    border-color: #ddd;\r\n}\r\n.box-comments {\r\n    background: #f7f7f7 !important;\r\n}\r\n.box-footer {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n    border-top: 1px solid #f4f4f4;\r\n    padding: 10px;\r\n    background-color: #fff;\r\n}\r\n.box-comments .box-comment:first-of-type {\r\n    padding-top: 0;\r\n}\r\n.box-comments .box-comment {\r\n    padding: 8px 0;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.img-sm, \r\n.box-comments .box-comment img, \r\n.user-block.user-block-sm img {\r\n    width: 30px !important;\r\n    height: 30px !important;\r\n}\r\n.img-sm, .img-md, \r\n.img-lg, .box-comments .box-comment img, \r\n.user-block.user-block-sm img {\r\n    float: left;\r\n}\r\n.box-comments .comment-text {\r\n    margin-left: 40px;\r\n    color: #555;\r\n}\r\n.box-comments .username {\r\n    color: #444;\r\n    display: block;\r\n    font-weight: 600;\r\n}\r\n.box-comments .text-muted {\r\n    font-weight: 400;\r\n    font-size: 12px;\r\n}\r\n.img-sm+.img-push {\r\n    margin-left: 40px;\r\n}\r\n.box .form-control {\r\n    border-radius: 0;\r\n    box-shadow: none;\r\n    border-color: #d2d6de;\r\n}\r\n\r\n.attachment-block {\r\n    border: 1px solid #f4f4f4;\r\n    padding: 5px;\r\n    margin-bottom: 10px;\r\n    background: #f7f7f7;\r\n}\r\n.attachment-block .attachment-img {\r\n    max-width: 100px;\r\n    max-height: 100px;\r\n    height: auto;\r\n    float: left;\r\n}\r\n.attachment-block .attachment-pushed {\r\n    margin-left: 110px;\r\n}\r\n.attachment-block .attachment-heading {\r\n    margin: 0;\r\n}\r\n.attachment-block .attachment-heading .h4, .attachment-block .attachment-heading h4 {\r\n    font-size: 18px;\r\n}\r\n.attachment-block .attachment-text {\r\n    color: #555;\r\n}\r\n\r\n.box-form {\r\n    padding: 10px 15px;\r\n    background-color: #f5f5f5;\r\n    border-top: 1px solid #ddd;\r\n    border-bottom-right-radius: 3px;\r\n    border-bottom-left-radius: 3px;\r\n}\r\n\r\n.n-border-top{\r\n    border-top: none !important;\r\n}\r\n\r\n/*============ profile about ===========*/\r\n.padding-v-5 {\r\n    padding-top: 5px !important;\r\n    padding-bottom: 5px !important;\r\n}\r\n\r\n.margin-none {\r\n    margin: 0 !important;\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.padding-v-5 {\r\n    padding-top: 5px !important;\r\n    padding-bottom: 5px !important;\r\n}\r\n\r\n.text-muted {\r\n    color: #777777;\r\n}\r\n\r\n/*============== profile friends =============*/\r\n\r\nul.img-grid {\r\n    list-style: none;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n\r\nul.img-grid li {\r\n    float: left;\r\n    margin: 0;\r\n    width: auto;\r\n}\r\n\r\n\r\nul.img-grid li a {\r\n    display: block;\r\n}\r\n\r\n.widget-friends ul.img-grid li img{\r\n      border:1px solid #fff;  \r\n}\r\n\r\nul.img-grid li img {\r\n    width:70px;\r\n    height:70px;\r\n/*    width:115px;\r\n    height:115px;*/\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    transition: all .2s ease-in-out;\r\n\r\n}\r\n\r\nul.img-grid li img:hover, .cover.profile .wrapper .friends li a img:hover {\r\n    opacity: 0.7;\r\n    cursor: pointer;\r\n    border-radius: 0px;\r\n  -webkit-transform: scale(1.2, 1.2);\r\n  -webkit-transition-timing-function: ease-out;\r\n                      -moz-transform: scale(1.2, 1.2);\r\n     -moz-transition-timing-function: ease-out;\r\n                       -ms-transform: scale(1.20, 1.20);\r\n      -ms-transition-timing-function: ease-out;\r\n\r\n         -webkit-transition-duration: 500ms;\r\n            -moz-transition-duration: 500ms;\r\n             -ms-transition-duration: 500ms;\r\n\r\n}\r\n\r\n.panel-body > *:last-child {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*======================== profile groups ==============*/\r\n\r\n.card {\r\n    border-radius: 6px;\r\n    background-color: #FFFFFF;\r\n    color: #252422;\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.card .header {\r\n    padding: 20px 20px 0;\r\n}\r\n\r\n.card .title {\r\n    margin: 0;\r\n    color: #252422;\r\n    font-weight: 300;\r\n}\r\n\r\nh4, .h4 {\r\n    font-size: 1.5em;\r\n    font-weight: 600;\r\n    line-height: 1.2em;\r\n}\r\n\r\n.card .content {\r\n    padding: 15px 15px 10px 15px;\r\n}\r\n\r\n.list-unstyled {\r\n    padding-left: 0;\r\n    list-style: none;\r\n}\r\n\r\n.card ul.team-members li:not(:last-child) {\r\n    border-bottom: 1px solid #F1EAE0;\r\n}\r\n\r\n.card ul.team-members li {\r\n    padding: 10px 0px;\r\n}\r\n\r\n.card .avatar {\r\n    width: 50px;\r\n    height: 50px;\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    margin-right: 5px;\r\n}\r\n\r\n.card .btn.btn-icon {\r\n    padding: 7px;\r\n}\r\n\r\n.card .btn-sm {\r\n    font-size: 12px;\r\n    border-radius: 26px;\r\n    padding: 4px 4px;\r\n}\r\n\r\n.card .btn-success {\r\n    border-color: #7AC29A;\r\n    color: #7AC29A;\r\n}\r\n\r\n/***============ modals ======================*/\r\n.modal-content {\r\n    -webkit-border-radius: 0;\r\n    -webkit-background-clip: padding-box;\r\n    -moz-border-radius: 0;\r\n    -moz-background-clip: padding;\r\n    border-radius: 0;\r\n    background-clip: padding-box;\r\n    box-shadow: 0 0 40px rgba(0, 0, 0, .5);\r\n    color: #000;\r\n    background-color: #fff;\r\n    border: rgba(0, 0, 0, 0)\r\n}\r\n\r\n.modal-content .close {\r\n    font-size: 26px\r\n}\r\n\r\n.modal-footer {\r\n    padding-top: 12px;\r\n    padding-bottom: 14px;\r\n    border-top: 0;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.modal-header {\r\n    padding: 10px 15px 10px 20px;\r\n    background-color: #f5f5f5\r\n}\r\n\r\n.modal-header .close {\r\n    font-size: 26px\r\n}\r\n\r\n.modal-backdrop {\r\n    background-color: #fff\r\n}\r\n\r\n.modal-backdrop.in {\r\n    zoom: 1;\r\n    filter: alpha(opacity=75);\r\n    -webkit-opacity: .75;\r\n    -moz-opacity: .75;\r\n    opacity: .75\r\n}\r\n\r\n/*================== home profile nav ===============*/\r\n.profile-nav .user-heading {\r\n    background: #2dc3e8;\r\n    color: #fff;\r\n    border-radius: 4px 4px 0 0;\r\n    -webkit-border-radius: 4px 4px 0 0;\r\n    padding: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.profile-nav .user-heading.round a  {\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    border: 10px solid rgba(255,255,255,0.3);\r\n    display: inline-block;\r\n}\r\n\r\n.profile-nav .user-heading a img {\r\n    width: 112px;\r\n    height: 112px;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n}\r\n\r\n.profile-nav .user-heading h1 {\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.profile-nav .user-heading p {\r\n    font-size: 12px;\r\n}\r\n\r\n.profile-nav ul {\r\n    margin-top: 1px;\r\n}\r\n\r\n.profile-nav ul > li {\r\n    border-bottom: 1px solid #ebeae6;\r\n    margin-top: 0;\r\n    line-height: 30px;\r\n}\r\n\r\n.profile-nav ul > li:last-child {\r\n    border-bottom: none;\r\n}\r\n\r\n.profile-nav ul > li > a {\r\n    border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    color: #89817f;\r\n    border-left: 5px solid #fff;\r\n}\r\n\r\n.profile-nav ul > li > a:hover, .profile-nav ul > li > a:focus, .profile-nav ul li.active  a {\r\n    background: #f8f7f5 !important;\r\n    border-left: 5px solid #2dc3e8;\r\n    color: #89817f !important;\r\n}\r\n\r\n.profile-nav ul > li:last-child > a:last-child {\r\n    border-radius: 0 0 4px 4px;\r\n    -webkit-border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.profile-nav ul > li > a > i{\r\n    font-size: 16px;\r\n    padding-right: 10px;\r\n    color: #bcb3aa;\r\n}\r\n\r\n\r\n/*===================== USER LIST TABLE ===================*/\r\n.user-list tbody td > img {\r\n    position: relative;\r\n    max-width: 50px;\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\n.user-list tbody td .user-link {\r\n    display: block;\r\n    font-size: 1.25em;\r\n    padding-top: 3px;\r\n    margin-left: 60px;\r\n}\r\n.user-list tbody td .user-subhead {\r\n    font-size: 0.875em;\r\n    font-style: italic;\r\n}\r\n\r\n/* TABLES */\r\n.table {\r\n    border-collapse: separate;\r\n}\r\n.table-hover > tbody > tr:hover > td,\r\n.table-hover > tbody > tr:hover > th {\r\n    background-color: #eee;\r\n}\r\n.table thead > tr > th {\r\n    border-bottom: 1px solid #C2C2C2;\r\n    padding-bottom: 0;\r\n}\r\n.table tbody > tr > td {\r\n    font-size: 0.875em;\r\n    background: #f5f5f5;\r\n    border-top: 10px solid #fff;\r\n    vertical-align: middle;\r\n    padding: 12px 8px;\r\n}\r\n.table tbody > tr > td:first-child,\r\n.table thead > tr > th:first-child {\r\n    padding-left: 20px;\r\n}\r\n.table thead > tr > th span {\r\n    border-bottom: 2px solid #C2C2C2;\r\n    display: inline-block;\r\n    padding: 0 5px;\r\n    padding-bottom: 5px;\r\n    font-weight: normal;\r\n}\r\n.table thead > tr > th > a span {\r\n    color: #344644;\r\n}\r\n.table thead > tr > th > a span:after {\r\n    content: \"\\F0DC\";\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n    margin-left: 5px;\r\n    font-size: 0.75em;\r\n}\r\n.table thead > tr > th > a.asc span:after {\r\n    content: \"\\F0DD\";\r\n}\r\n.table thead > tr > th > a.desc span:after {\r\n    content: \"\\F0DE\";\r\n}\r\n.table thead > tr > th > a:hover span {\r\n    text-decoration: none;\r\n    color: #2bb6a3;\r\n    border-color: #2bb6a3;\r\n}\r\n.table.table-hover tbody > tr > td {\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n}\r\n.table tbody tr td .call-type {\r\n    display: block;\r\n    font-size: 0.75em;\r\n    text-align: center;\r\n}\r\n.table tbody tr td .first-line {\r\n    line-height: 1.5;\r\n    font-weight: 400;\r\n    font-size: 1.125em;\r\n}\r\n.table tbody tr td .first-line span {\r\n    font-size: 0.875em;\r\n    color: #969696;\r\n    font-weight: 300;\r\n}\r\n.table tbody tr td .second-line {\r\n    font-size: 0.875em;\r\n    line-height: 1.2;\r\n}\r\n.table a.table-link {\r\n    margin: 0 5px;\r\n    font-size: 1.125em;\r\n}\r\n.table a.table-link:hover {\r\n    text-decoration: none;\r\n    color: #428bca;\r\n}\r\n.table a.table-link.danger {\r\n    color: #fe635f;\r\n}\r\n.table a.table-link.success {\r\n    color: #5cb85c;\r\n}\r\n.table a.table-link.danger:hover {\r\n    color: #dd504c;\r\n}\r\n\r\n.table-products tbody > tr > td {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #ebebeb;\r\n    transition: background-color 0.15s ease-in-out 0s;\r\n    position: relative;\r\n}\r\n.table-products tbody > tr:hover > td {\r\n    text-decoration: none;\r\n    background-color: #f6f6f6;\r\n}\r\n.table-products .name {\r\n    display: block;\r\n    font-weight: 600;\r\n    padding-bottom: 7px;\r\n}\r\n.table-products .price {\r\n    display: block;\r\n    text-decoration: none;\r\n    width: 50%;\r\n    float: left;\r\n    font-size: 0.875em;\r\n}\r\n.table-products .price > i {\r\n    color: #8dc859;\r\n}\r\n.table-products .warranty {\r\n    display: block;\r\n    text-decoration: none;\r\n    width: 50%;\r\n    float: left;\r\n    font-size: 0.875em;\r\n}\r\n.table-products .warranty > i {\r\n    color: #f1c40f;\r\n}\r\n.table tbody > tr.table-line-fb > td {\r\n    background-color: #9daccb;\r\n    color: #262525;\r\n}\r\n.table tbody > tr.table-line-twitter > td {\r\n    background-color: #9fccff;\r\n    color: #262525;\r\n}\r\n.table tbody > tr.table-line-plus > td {\r\n    background-color: #eea59c;\r\n    color: #262525;\r\n}\r\n.table-stats .status-social-icon {\r\n    font-size: 1.9em;\r\n    vertical-align: bottom;\r\n}\r\n.table-stats .table-line-fb .status-social-icon {\r\n    color: #556484;\r\n}\r\n.table-stats .table-line-twitter .status-social-icon {\r\n    color: #5885b8;\r\n}\r\n.table-stats .table-line-plus .status-social-icon {\r\n    color: #a75d54;\r\n}\r\n\r\n/*============= Online Users Sidebar =================*/\r\n\r\n.chat-sidebar .list-group {\r\n  height: 94%;\r\n}\r\n\r\n.chat-sidebar ~ .nav-controller > .controller-open {\r\n    display: inline-block;\r\n}\r\n\r\n.chat-sidebar ~ .nav-controller > .controller-close {\r\n    display: none;\r\n}\r\n.chat-sidebar.focus ~ .nav-controller > .controller-open {\r\n    display: none;\r\n}\r\n\r\n.chat-sidebar.focus ~ .nav-controller > .controller-close {\r\n    display: inline-block;\r\n}\r\n\r\n.chat-sidebar.focus {\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.chat-sidebar {\r\n    position: fixed;\r\n    top: 51px;\r\n    right: -100%;\r\n    padding-top: 35px;\r\n    padding-bottom: 15px;\r\n    height: 95%;\r\n    width: 210px;\r\n    text-align: right;\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: -3px 0px 3px 0px rgba(160, 160, 160, 0.30);\r\n    z-index: 999;    \r\n    overflow-y: auto;\r\n}\r\n\r\n.chat-sidebar.focus {\r\n    right: 0px;\r\n}\r\n\r\n.chat-sidebar > .divider {\r\n    content: '';\r\n    border-bottom: 1px solid rgb(230, 230, 230);\r\n    max-height: 1px;\r\n    overflow: hidden;\r\n    margin: 15px 0px;\r\n}\r\n\r\n.chat-sidebar > h4,\r\n.chat-sidebar > p,\r\n.chat-sidebar > ul {\r\n    padding: 0px 10px;\r\n}\r\n\r\n.chat-sidebar > h4 {\r\n    font-family: 'Anton', sans-serif;\r\n}\r\n\r\n.chat-sidebar > ul {\r\n    list-style: none;\r\n}\r\n.chat-sidebar > ul > li {\r\n    margin: 5px 0px;   \r\n}\r\n.chat-sidebar > ul > li > a {\r\n    color: rgb(190, 190, 190);   \r\n}\r\n\r\n.chat-sidebar .img-chat {\r\n  width: 40px;\r\n  height: 40px;\r\n  border : 0px !important;\r\n}\r\n.chat-sidebar .list-group-item {\r\n  padding:1px 8px;\r\n}\r\n.chat-sidebar .list-group .list-group-item .chat-user-name {\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  padding-top: 4px;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  width: 100px;\r\n}\r\n\r\n.chat-sidebar .connected-status {\r\n  color: #008000 !important;\r\n}\r\n\r\n.chat-sidebar .absent-status {\r\n  color: #FFA500 !important;\r\n}\r\n\r\n.chat-sidebar .chat-title {\r\n  font-size: 16px;\r\n  color:#A9A9A9;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/*=================== others =======*/\r\n.team-members img.notifications{\r\n    width: 50px;\r\n    max-height: 50px;\r\n}\r\n\r\n.img-add img{\r\n    width: 110px;\r\n    height: 110px;\r\n    display: inline-block;\r\n    padding: 4px;\r\n    line-height: 1.42857143;\r\n    background-color: #fff;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.ad-text{\r\n    font-size: 10px;\r\n}\r\n\r\n.list-users{\r\n    background: #fff;\r\n}\r\n\r\n.show-in-modal{\r\n    cursor: pointer;\r\n}\r\n\r\na, a:hover {\r\n text-decoration: none;\r\n}\r\n\r\n.navbar-toggle {\r\n    background-color: #eee !important;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n    background: #000 !important;\r\n}\r\n\r\n\r\n\r\n\r\n.panel-shadow {\r\n    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;\r\n}\r\n.panel-white {\r\n  border: 1px solid #dddddd;\r\n}\r\n.panel-white  .panel-heading {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n.panel-white  .panel-footer {\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n\r\n.post .post-heading {\r\n  height: 95px;\r\n  padding: 20px 15px;\r\n}\r\n.post .post-heading .avatar {\r\n  width: 60px;\r\n  height: 60px;\r\n  display: block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-heading .meta .title {\r\n  margin-bottom: 0;\r\n}\r\n.post .post-heading .meta .title a {\r\n  color: black;\r\n}\r\n.post .post-heading .meta .title a:hover {\r\n  color: #aaaaaa;\r\n}\r\n.post .post-heading .meta .time {\r\n  margin-top: 8px;\r\n  color: #999;\r\n}\r\n.post .post-image .image {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.post .post-description {\r\n  padding: 15px;\r\n}\r\n.post .post-description p {\r\n  font-size: 14px;\r\n}\r\n.post .post-description .stats {\r\n  margin-top: 20px;\r\n}\r\n.post .post-description .stats .stat-item {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.post .post-description .stats .stat-item .icon {\r\n  margin-right: 8px;\r\n}\r\n.post .post-footer {\r\n  border-top: 1px solid #ddd;\r\n  padding: 15px;\r\n}\r\n.post .post-footer .input-group-addon a {\r\n  color: #454545;\r\n}\r\n.post .post-footer .comments-list {\r\n  padding: 0;\r\n  margin-top: 20px;\r\n  list-style-type: none;\r\n}\r\n.post .post-footer .comments-list .comment {\r\n  display: block;\r\n  width: 100%;\r\n  margin: 20px 0;\r\n}\r\n.post .post-footer .comments-list .comment .avatar {\r\n  width: 35px;\r\n  height: 35px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .user {\r\n  font-size: 14px;\r\n  font-weight: bold;\r\n  display: inline;\r\n  margin-top: 0;\r\n  margin-right: 10px;\r\n}\r\n.post .post-footer .comments-list .comment .comment-heading .time {\r\n  font-size: 12px;\r\n  color: #aaa;\r\n  margin-top: 0;\r\n  display: inline;\r\n}\r\n.post .post-footer .comments-list .comment .comment-body {\r\n  margin-left: 50px;\r\n}\r\n.post .post-footer .comments-list .comment > .comments-list {\r\n  margin-left: 50px;\r\n}\r\n\r\n.fa-thumbs-up:before{content:\"\\F164\";}\r\n.fa-thumbs-down:before{content:\"\\F165\";}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "/***\r\nUser Profile Sidebar by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\nLicensed under MIT\r\n***/\r\n\r\nbody {\r\n  background: #F1F3FA;\r\n}\r\n\r\n/* Profile container */\r\n.profile {\r\n  margin: 20px 0;\r\n}\r\n\r\n/* Profile sidebar */\r\n.profile-sidebar {\r\n  padding: 20px 0 10px 0;\r\n  background: #fff;\r\n}\r\n\r\n.profile-userpic img {\r\n  float: none;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n  height: 50%;\r\n  border-radius: 50% !important;\r\n}\r\n\r\n.profile-usertitle {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.profile-usertitle-name {\r\n  color: #5a7391;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  margin-bottom: 7px;\r\n}\r\n\r\n.profile-usertitle-job {\r\n  text-transform: uppercase;\r\n  color: #5b9bd1;\r\n  font-size: 12px;\r\n  font-weight: 600;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.profile-userbuttons {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.profile-userbuttons .btn {\r\n  text-transform: uppercase;\r\n  font-size: 11px;\r\n  font-weight: 600;\r\n  padding: 6px 15px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.profile-userbuttons .btn:last-child {\r\n  margin-right: 0px;\r\n}\r\n    \r\n.profile-usermenu {\r\n  margin-top: 30px;\r\n}\r\n\r\n.profile-usermenu ul li {\r\n  border-bottom: 1px solid #f0f4f7;\r\n}\r\n\r\n.profile-usermenu ul li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li a {\r\n  color: #93a3b5;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\n.profile-usermenu ul li a i {\r\n  margin-right: 8px;\r\n  font-size: 14px;\r\n}\r\n\r\n.profile-usermenu ul li a:hover {\r\n  background-color: #fafcfd;\r\n  color: #5b9bd1;\r\n}\r\n\r\n.profile-usermenu ul li.active {\r\n  border-bottom: none;\r\n}\r\n\r\n.profile-usermenu ul li.active a {\r\n  color: #5b9bd1;\r\n  background-color: #f6f9fb;\r\n  border-left: 2px solid #5b9bd1;\r\n  margin-left: -2px;\r\n}\r\n\r\n/* Profile Content */\r\n.profile-content {\r\n  padding: 20px;\r\n  background: #fff;\r\n  min-height: 460px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n  {{message.text}}\r\n  </div>"

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <!--<div>\r\n    <button (click)=logout()/>\r\n  </div>-->\r\n  <div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n      <div>\r\n        <app-alert></app-alert>\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <footer class=\"footer\">\r\n\r\n    <div class=\"container\">\r\n      <p class=\"text-muted\"> Copyright © Company - All rights reserved </p>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = "\t<div class=\"col-md-9  col-md-offset-2\">\r\n           \r\n\t\t\t  <app-jokes></app-jokes>\r\n\t\t</div>"

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-10\">\r\n\r\n    <div class=\"box profile-info n-border-top\" >\r\n        <form>\r\n            <textarea class=\"form-control input-lg p-text-area\" rows=\"2\" placeholder=\"Whats in your mind today?\" name=\"newcontent\" [(ngModel)]=\"newJoke\"\r\n                #name=\"ngModel\"></textarea>\r\n        </form>\r\n        <div class=\"box-footer box-form\">\r\n            <button type=\"button\" class=\"btn btn-azure pull-right\" (click)=\"PostNewJoke()\">Post</button>\r\n            <ul class=\"nav nav-pills\">\r\n                <li><a href=\"#\"><i class=\"fa fa-map-marker\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-camera\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\" fa fa-film\"></i></a></li>\r\n                <li><a href=\"#\"><i class=\"fa fa-microphone\"></i></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"container bootstrap snippet\" *ngFor=\"let joke of JokesList; let i = index\" [attr.data-index]=\"i\">\r\n    <div class=\"col-sm-10\">\r\n        <div class=\" panel panel-white post panel-shadow\">\r\n            <div class=\"post-heading\">\r\n                <div class=\"pull-left image\">\r\n                    <img src=\"https://bootdey.com/img/Content/user_1.jpg\" class=\"img-circle avatar\" alt=\"user profile image\">\r\n                </div>\r\n                <div class=\"pull-left meta\">\r\n                    <div class=\"title h5\">\r\n                        <span class=\"username\"><a [routerLink]=\"['/profile', joke.PostedBy]\">{{joke.PostedBy}}</a></span>\r\n                        made a post.\r\n                    </div>\r\n                    <h6 class=\"text-muted time\">{{joke.PostedDate}}</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"post-description\">\r\n                <p> {{joke.Content}}</p>\r\n                <div class=\"stats\">\r\n                    <button class=\"btn btn-default stat-item\" (click)=\"VoteUp(true,joke.JokeId,i)\">\r\n                        <i class=\"fa fa-thumbs-up icon\"></i>{{joke.UpVotes}}\r\n                    </button>\r\n                    <button href=\"#\" class=\"btn btn-default stat-item\" (click)=\"VoteUp(false,joke.JokeId,i)\">\r\n                        <i class=\"fa fa-thumbs-down icon\"></i>{{joke.DownVotes}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"post-footer\">\r\n                <div class=\"input-group\">\r\n                    <input class=\"form-control\" placeholder=\"Add a comment\" type=\"text\" \r\n                    (keydown.enter)=\"addComment($event,joke.JokeId)\" \r\n                  #comment name=\"newcomment\">\r\n                    <span class=\"input-group-addon\">\r\n                        <a href=\"#\"><i class=\"fa fa-edit\"></i></a>  \r\n                    </span>\r\n                </div>\r\n                <ul class=\"comments-list\" *ngFor=\"let comment of joke.Comments\">\r\n                    <li class=\"comment\">\r\n                        <a class=\"pull-left\" href=\"#\">\r\n                            <img class=\"avatar\" src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"avatar\">\r\n                        </a>\r\n                        <div class=\"comment-body\">\r\n                            <div class=\"comment-heading\">\r\n                                <h4 class=\"user\">{{comment.PostedBy}}</h4>\r\n                                <h5 class=\"time\">{{comment.PostedDate}}</h5>\r\n                            </div>\r\n                            <p>{{comment.Content}}</p>\r\n                        </div>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Login</h2>\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n      <label for=\"username\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n      />\r\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<!--\r\nUser Profile Sidebar by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\nLicensed under MIT\r\n-->\r\n\r\n<div class=\"container\">\r\n    <div class=\"row profile\">\r\n\t\t<div class=\"col-md-3\">\r\n\t\t\t<div class=\"profile-sidebar\">\r\n\t\t\t\t<!-- SIDEBAR USERPIC -->\r\n\t\t\t\t<div class=\"profile-userpic\">\r\n\t\t\t\t\t<img src=\"../../assets/facebook_no_profile_pic2-jpg.gif\" class=\"img-responsive\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USERPIC -->\r\n\t\t\t\t<!-- SIDEBAR USER TITLE -->\r\n\t\t\t\t<div class=\"profile-usertitle\">\r\n\t\t\t\t\t<div class=\"profile-usertitle-name\">\r\n\t\t\t\t\t\t{{UserName}}\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"profile-usertitle-job\">\r\n\t\t\t\t\t\tJob\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR USER TITLE -->\r\n\t\t\t\t<!-- SIDEBAR BUTTONS -->\r\n\t\t\t\t<div class=\"profile-userbuttons\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-sm\">Follow</button>\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm\">Message</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END SIDEBAR BUTTONS -->\r\n\t\t\t\t<!-- SIDEBAR MENU -->\r\n\t\t\t\t<div class=\"profile-usermenu\">\r\n\t\t\t\t\t<ul class=\"nav\">\r\n\t\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-home\"></i>\r\n\t\t\t\t\t\t\tOverview </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-user\"></i>\r\n\t\t\t\t\t\t\tAccount Settings </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\" target=\"_blank\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-ok\"></i>\r\n\t\t\t\t\t\t\tTasks </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-flag\"></i>\r\n\t\t\t\t\t\t\tHelp </a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- END MENU -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-md-9\">\r\n            <!--<div class=\"profile-content\">-->\r\n\t\t\t  <app-jokes></app-jokes>\r\n            <!--</div>-->\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n\r\n  <h2>Register</h2>\r\n\r\n  <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n    <!--        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"firstName\">First Name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\r\n        </div>-->\r\n  \r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !userName.valid }\">\r\n      <label for=\"userName\">User Name</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"model.UserName\" #userName=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !userName.valid\" class=\"help-block\">User Name is required</div>\r\n      </div>\r\n  \r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.Email\" #email=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Email is required</div>\r\n      </div>\r\n  \r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.Password\" #password=\"ngModel\" required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n      </div>\r\n    <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirmPassword.valid}\">\r\n      <label for=\"confirmpassword\">Confirm Password</label>\r\n      <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" [(ngModel)]=\"model.ConfirmPassword\" #confirmPassword=\"ngModel\"\r\n        required />\r\n      <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\"> Confirm Password is required</div>\r\n    \r\n\r\n      </div>\r\n  \r\n    <div class=\"form-group\">\r\n      <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\r\n      <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n      />\r\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\r\n    </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  userprofile works!\r\n</p>\r\n"

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(97);


/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_jokes_service__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JokesComponent = (function () {
    function JokesComponent(activatedRoute, jokesService, config, alertService) {
        this.activatedRoute = activatedRoute;
        this.jokesService = jokesService;
        this.config = config;
        this.alertService = alertService;
        this.JokesList = [];
        this.newJoke = '';
        this.newComment = '';
    }
    JokesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userName = params['PostedBy'];
        });
        this.getAllJokes();
    };
    JokesComponent.prototype.getAllJokes = function () {
        var _this = this;
        if (this.userName) {
            this.jokesService.
                getByUserID(this.userName).subscribe(function (result) {
                _this.JokesList = result;
            });
        }
        else {
            this.jokesService.
                getAllJokes().subscribe(function (result) {
                _this.JokesList = result;
            });
        }
    };
    JokesComponent.prototype.PostNewJoke = function () {
        var _this = this;
        var joke = { PostedBy: localStorage.getItem(this.config.UserName), Content: this.newJoke };
        this.jokesService.
            addNewJoke(joke).
            subscribe(function (result) {
            _this.getAllJokes();
        }, function (error) {
            _this.alertService.error(error.json().error_description);
        });
        this.newJoke = '';
    };
    JokesComponent.prototype.VoteUp = function (up, jokeId, index) {
        var _this = this;
        this.jokesService.
            vote(jokeId, up).subscribe(function (result) {
            if (up)
                _this.JokesList[index].UpVotes++;
            else
                _this.JokesList[index].DownVotes++;
        });
    };
    JokesComponent.prototype.Hide = function (jokeId, index) {
        var _this = this;
        this.jokesService.
            hide(jokeId).subscribe(function (result) { _this.JokesList.splice(index, 1); });
    };
    JokesComponent.prototype.addComment = function (event, jokeId) {
        var _this = this;
        var newComment = "";
        newComment = event.target.value;
        if (newComment.trim() != "") {
            var comment = { PostedBy: localStorage.getItem(this.config.UserName), Content: newComment };
            this.jokesService.
                addComment(comment, jokeId).
                subscribe(function (result) {
                _this.getAllJokes();
            }, function (error) {
                _this.alertService.error(error.json().error_description);
            });
            newComment = "";
            event.target.value = "";
        }
    };
    // to work on this
    JokesComponent.prototype.timeSince = function (date) {
        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        var diff = new Date().getTime() - date.getTime();
        var seconds = Math.floor(diff / 1000);
        var interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " years";
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " months";
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " days";
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " hours";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes";
        }
        return Math.floor(seconds) + " seconds";
    };
    return JokesComponent;
}());
JokesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jokes',
        template: __webpack_require__(178),
        styles: [__webpack_require__(169)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_jokes_service__["a" /* JokesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_jokes_service__["a" /* JokesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_jokes_service__["a" /* JokesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], JokesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=jokes.component.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthenticationService = (function () {
    function AuthenticationService(http, config) {
        this.http = http;
        this.config = config;
    }
    AuthenticationService.prototype.loging = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var response, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post(this.config.apiUrl +
                            '/Token', "username=" + username + "&password=" + password + "&grant_type=password").toPromise()];
                    case 1:
                        response = _a.sent();
                        user = response.json();
                        if (user && user.token) {
                            // store user details and jwt token in local storage to keep user logged in between page refreshes
                            localStorage.setItem(this.config.TokenKey, JSON.stringify(user));
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem(this.config.TokenKey);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JokesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JokesService = (function () {
    function JokesService(httpService, config) {
        this.httpService = httpService;
        this.config = config;
        this.JokesServiceUrl = config.JokesServiceUrl;
    }
    JokesService.prototype.getAllJokes = function () {
        var url = this.JokesServiceUrl;
        return this.httpService.get(url, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) {
            return JSON.stringify(data);
        });
    };
    JokesService.prototype.getByUserID = function (UserID) {
        var url = this.JokesServiceUrl;
        return this.httpService.get(url + '/GetByUser/' + UserID, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) { return JSON.stringify(data); });
    };
    JokesService.prototype.hide = function (jokeId) {
        var url = this.JokesServiceUrl + '/Hide/' + jokeId;
        return this.httpService.post(url, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) { return JSON.stringify(data); });
    };
    JokesService.prototype.addNewJoke = function (joke) {
        var body = joke;
        var url = this.JokesServiceUrl;
        return this.httpService.post(url, body, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) { return JSON.stringify(data); });
    };
    JokesService.prototype.addComment = function (comment, jokeId) {
        var body = comment;
        var url = this.JokesServiceUrl + '/PostComment/' + jokeId;
        return this.httpService.post(url, body, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) { return JSON.stringify(data); });
    };
    JokesService.prototype.vote = function (jokeId, up) {
        var url = this.JokesServiceUrl + '/Vote/' + jokeId + '/' + up + '/' + localStorage.getItem(this.config.UserName);
        return this.httpService.put(url, this.jwt()).
            map(function (response) { return response.json(); }).do(function (data) { return JSON.stringify(data); });
    };
    JokesService.prototype.jwt = function () {
        // create authorization header with jwt token
        var token = localStorage.getItem(this.config.Accesstoken);
        if (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    return JokesService;
}());
JokesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], JokesService);

var _a, _b;
//# sourceMappingURL=jokes.service.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        /* if (tokenNotExpired()) {
             // Signed in.
             return true;
         } */
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jokes_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(177),
        styles: [__webpack_require__(168)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__["a" /* JokesComponent */], __WEBPACK_IMPORTED_MODULE_2__services_jokes_service__["a" /* JokesService */]]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(route, router, _http, authenticationService, alertService, config) {
        this.route = route;
        this.router = router;
        this._http = _http;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.config = config;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        if (this.config.TokenKey)
            this.router.navigate(['home']);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.loging(this.model.username, this.model.password).
            then(function (response) {
            localStorage.setItem(_this.config.Accesstoken, response.json().access_token);
            localStorage.setItem(_this.config.Expiresin, response.json().expires_in);
            localStorage.setItem(_this.config.TokenType, response.json().token_type);
            localStorage.setItem(_this.config.UserName, response.json().userName);
            localStorage.setItem(_this.config.TokenKey, response.json());
            _this.router.navigate(['home']);
        }, function (error) {
            _this.alertService.error(error.json().error_description);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(179),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_config__["a" /* AppConfig */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_jokes_service__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(jokes) {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.UserName = "Sanaa Afifi";
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(180),
        styles: [__webpack_require__(171)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__["a" /* JokesComponent */], __WEBPACK_IMPORTED_MODULE_2__services_jokes_service__["a" /* JokesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__["a" /* JokesComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__jokes_jokes_component__["a" /* JokesComponent */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(181),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(httpService, config) {
        this.httpService = httpService;
        this.config = config;
    }
    UserService.prototype.register = function (user) {
        var _this = this;
        var result;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var body = user;
        var url = this.config.AccountServiceUrl;
        this.httpService.post(this.config.AccountServiceUrl + '/Register/', body, { headers: headers })
            .subscribe(function (response) {
            localStorage.setItem(_this.config.TokenKey, response.json().id_token);
            result = "";
        }, function (error) {
            result = error.text;
        });
        return result;
    };
    UserService.prototype.create = function (user) {
        return this.httpService.post(this.config.AccountServiceUrl + '/Register/', user, this.jwt());
    };
    UserService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem(this.config.TokenKey));
        if (currentUser && currentUser.token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers });
        }
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 96;


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(108);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.bundle.js.map
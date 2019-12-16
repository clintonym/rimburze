(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./organisasi/organisasi.module": [
		"./src/app/organisasi/organisasi.module.ts",
		"organisasi-organisasi-module"
	],
	"./organisasi/outcome/outcome-detail/outcome-detail.module": [
		"./src/app/organisasi/outcome/outcome-detail/outcome-detail.module.ts",
		"default~organisasi-outcome-outcome-detail-outcome-detail-module~organisasi-outcome-outcome-module",
		"organisasi-outcome-outcome-detail-outcome-detail-module"
	],
	"./organisasi/outcome/outcome.module": [
		"./src/app/organisasi/outcome/outcome.module.ts",
		"default~organisasi-outcome-outcome-detail-outcome-detail-module~organisasi-outcome-outcome-module",
		"organisasi-outcome-outcome-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-menu side=\"start\" menuId=\"m1\">\r\n\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-menu-toggle>\r\n          <ion-item lines=\"none\" routerLink=\"/organisasi\">\r\n            <ion-icon name=\"home\" slot=\"start\"></ion-icon>\r\n            <ion-label><p>Home</p></ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n        \r\n        <ion-menu-toggle>\r\n          <ion-item lines=\"none\" routerLink=\"/profile\" >\r\n            <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\r\n            <ion-label><p>Profile</p></ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n\r\n    <ion-footer>\r\n      <ion-menu-toggle>\r\n        <ion-item lines=\"none\" text-center (click)=\"onLogout()\">\r\n          <ion-icon style=\"color: #F38E8F;\" name=\"log-out\"></ion-icon>\r\n          <ion-label><p style=\"color: #F38E8F;\">Log Out</p></ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-footer>\r\n\r\n  </ion-menu>\r\n  <ion-router-outlet main></ion-router-outlet>\r\n</ion-app>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-create-organisasi/modal-create-organisasi.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-create-organisasi/modal-create-organisasi.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n    <ion-title style=\"font-size: 16px;\">Create Group</ion-title>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button (click)=\"onCancel()\">\r\n        <ion-icon name=\"close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n<ion-content padding>\r\n  <ion-list lines=\"full\">\r\n    <ion-item>\r\n      <ion-input style=\"font-size: 13px;\" required type=\"text\" placeholder=\"Group Name\" [(ngModel)]=\"selectedOrgs.name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input style=\"font-size: 13px;\" required type=\"password\" placeholder=\"Password\" [(ngModel)]=\"selectedOrgs.password\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\" (click)=\"createGroup()\">\r\n  <ion-fab-button color=\"tertiary\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-group-password/modal-group-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-group-password/modal-group-password.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n  <ion-title style=\"font-size: 16px;\">Enter Group Password</ion-title>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button (click)=\"onCancel()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content padding>\r\n<ion-list lines=\"full\">\r\n  <ion-item>\r\n    <ion-input style=\"font-size: 13px;\" required type=\"password\" placeholder=\"Password\" [(ngModel)]=\"enterPwd\"></ion-input>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n\r\n<ion-fab horizontal=\"center\" vertical=\"bottom\" slot=\"fixed\" (click)=\"enterGroup()\">\r\n<ion-fab-button color=\"tertiary\">\r\n  <ion-icon name=\"log-in\"></ion-icon>\r\n</ion-fab-button>\r\n</ion-fab>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-outcome-detail/modal-outcome-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-outcome-detail/modal-outcome-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n  <ion-title style=\"font-size: 16px;\">{{ selectedOrgs.name }}</ion-title>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button (click)=\"onCancel()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=2 text-center>\r\n        <div style=\"margin-top: 12%; margin-bottom: 5%;\">\r\n          <ion-label color=\"danger\" style=\"font-size: 15px;\"><b>-{{ getTotalPrice() | currency : \"Rp\"}}</b></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-list>\r\n          <ion-list-header>\r\n            EXPENSES\r\n          </ion-list-header>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<div *ngIf=\"tombol == true\">\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"tertiary\">\r\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"tertiary\" (click)=\"addOnClick()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"tertiary\">\r\n          <ion-icon name=\"done-all\" (click)=\"doneOnClick()\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</div>\r\n<div *ngIf=\"tombol == false\">\r\n  \r\n</div> -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modal-sign-up/modal-sign-up.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modal-sign-up/modal-sign-up.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n  <ion-title style=\"font-size: 16px;\">Sign Up</ion-title>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button (click)=\"onCancel()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSignUp(f)\">\r\n    <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto; margin-top: 5%;\">\r\n      <ion-label style=\"font-size: 13px;\" position=\"floating\">name</ion-label>\r\n      <ion-input style=\"font-size: 13px;\"\r\n        required\r\n        [(ngModel)]=\"selectedUser.displayName\"\r\n        name=\"inpName\"\r\n        type=\"text\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto;\">\r\n      <ion-label style=\"font-size: 13px;\" position=\"floating\">email</ion-label>\r\n      <ion-input style=\"font-size: 13px;\"\r\n        required\r\n        [(ngModel)]=\"selectedUser.email\"\r\n        name=\"inpEmail\"\r\n        type=\"email\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto;\">\r\n      <ion-label style=\"font-size: 13px;\" position=\"floating\">password</ion-label>\r\n      <ion-input style=\"font-size: 13px;\"\r\n        required\r\n        ngModel\r\n        name=\"pwd\"\r\n        type=\"password\"\r\n        minlength=\"6\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto;\">\r\n      <ion-label style=\"font-size: 13px;\" position=\"floating\">confirm password</ion-label>\r\n      <ion-input style=\"font-size: 13px;\"\r\n        required\r\n        ngModel\r\n        name=\"confirmPwd\"\r\n        type=\"password\"\r\n        minlength=\"6\"\r\n      ></ion-input>\r\n    </ion-item>\r\n    <ion-button [disabled]=\"!f.valid\" type=\"submit\" color=\"tertiary\" style=\"font-size: 11px; width: 250px; margin-left: auto; margin-right: auto; margin-top: 10px;\" expand=\"block\" >Sign Up</ion-button>\r\n  </form>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/popover/popover.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n  <ion-title style=\"font-size: 16px;\">Reimbursed</ion-title>\r\n  <ion-buttons slot=\"primary\">\r\n    <ion-button (click)=\"onCancel()\">\r\n      <ion-icon name=\"close\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-md=\"6\" offset-sm=\"3\">\r\n        <div text-center *ngIf=\"selectedOrgs.history.length === 0\" style=\"margin-left: auto; margin-right: auto; margin-top: 50%;\">\r\n          <p style=\"font-size: 14px; color: #989aa2;\">Reimbursed is empty</p>\r\n        </div>\r\n        <div *ngIf=\"selectedOrgs.history.length > 0\">\r\n          <ion-list *ngFor=\"let org of selectedOrgs.history\">\r\n            <ion-card style=\"border-radius: 20px;\" text-center>\r\n              <ion-card-header>\r\n                <ion-card-subtitle style=\"font-size: 12px;\">{{ org.date }}</ion-card-subtitle>\r\n                <ion-card-title style=\"font-size: 16px;\">{{ org.name }}</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content>\r\n                <ion-icon name=\"pricetag\" slot=\"start\" style=\"color: #00E676;\"></ion-icon>\r\n                <ion-label style=\"font-size: 15px; color: #00E676;\"> +{{ org.total | currency : \"Rp\"}}</ion-label>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    //{ path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
    {
        path: 'organisasi',
        children: [
            {
                path: '',
                loadChildren: './organisasi/organisasi.module#OrganisasiPageModule'
            },
            {
                path: ':organisasiId',
                children: [
                    {
                        path: '',
                        loadChildren: './organisasi/outcome/outcome.module#OutcomePageModule'
                    },
                    {
                        path: ':outcomeId',
                        loadChildren: './organisasi/outcome/outcome-detail/outcome-detail.module#OutcomeDetailPageModule'
                    }
                ]
            }
        ]
    },
    //{ path: 'outcome', loadChildren: './organisasi/outcome/outcome.module#OutcomePageModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







// import { AngularFireAuth } from '@angular/fire/auth';
// import { first } from 'rxjs/operators';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, authSvc, router) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.authSvc = authSvc;
        this.router = router;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    onLogout() {
        this.authSvc.logout();
        this.router.navigateByUrl('/auth');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modal_outcome_detail_modal_outcome_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-outcome-detail/modal-outcome-detail.component */ "./src/app/modal-outcome-detail/modal-outcome-detail.component.ts");
/* harmony import */ var _popover_popover_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _modal_create_organisasi_modal_create_organisasi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal-create-organisasi/modal-create-organisasi.component */ "./src/app/modal-create-organisasi/modal-create-organisasi.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _modal_sign_up_modal_sign_up_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modal-sign-up/modal-sign-up.component */ "./src/app/modal-sign-up/modal-sign-up.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _modal_group_password_modal_group_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal-group-password/modal-group-password.component */ "./src/app/modal-group-password/modal-group-password.component.ts");


















// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';


// import { AngularFireDatabase } from 'angularfire2/database';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _modal_outcome_detail_modal_outcome_detail_component__WEBPACK_IMPORTED_MODULE_9__["ModalOutcomeDetailComponent"], _modal_group_password_modal_group_password_component__WEBPACK_IMPORTED_MODULE_19__["ModalGroupPasswordComponent"], _modal_create_organisasi_modal_create_organisasi_component__WEBPACK_IMPORTED_MODULE_14__["ModalCreateOrganisasiComponent"], _modal_sign_up_modal_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["ModalSignUpComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"]],
        entryComponents: [_modal_outcome_detail_modal_outcome_detail_component__WEBPACK_IMPORTED_MODULE_9__["ModalOutcomeDetailComponent"], _modal_group_password_modal_group_password_component__WEBPACK_IMPORTED_MODULE_19__["ModalGroupPasswordComponent"], _modal_create_organisasi_modal_create_organisasi_component__WEBPACK_IMPORTED_MODULE_14__["ModalCreateOrganisasiComponent"], _modal_sign_up_modal_sign_up_component__WEBPACK_IMPORTED_MODULE_17__["ModalSignUpComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_10__["PopoverComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"]],
        providers: [
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    login(email, password) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase.apiKey}`, {
            email,
            password,
            returnSecureToken: true,
            isAuthenticated: true
        });
    }
    signup(email, password, displayName) {
        return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].firebase.apiKey}`, {
            email,
            password,
            displayName,
            returnSecureToken: true
        });
    }
    logout() {
        this.isAuthenticated = false;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/modal-create-organisasi/modal-create-organisasi.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modal-create-organisasi/modal-create-organisasi.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWNyZWF0ZS1vcmdhbmlzYXNpL21vZGFsLWNyZWF0ZS1vcmdhbmlzYXNpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-create-organisasi/modal-create-organisasi.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modal-create-organisasi/modal-create-organisasi.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalCreateOrganisasiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCreateOrganisasiComponent", function() { return ModalCreateOrganisasiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisasi/organisasi.service */ "./src/app/organisasi/organisasi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ModalCreateOrganisasiComponent = class ModalCreateOrganisasiComponent {
    constructor(route, orgsService, loadingCtrl, navCtrl, modalCtrl, toastCtrl) {
        this.route = route;
        this.orgsService = orgsService;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.user = this.orgsService.getUser();
        this.selectedOrgs = {
            name: '',
            password: '',
            year: new Date().getFullYear(),
            history: [],
            outcome: [
                {
                    email: this.user.email,
                    name: this.user.displayName,
                    obj: [
                        {
                            objName: '',
                            price: null,
                            date: ''
                        }
                    ]
                }
            ]
        };
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    createGroup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Creating Group...'
            });
            yield loading.present();
            this.orgsService.addOrgs(this.selectedOrgs).then(() => {
                loading.dismiss();
                this.onCancel();
                this.groupCreatedToast();
            });
        });
    }
    groupCreatedToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Group created',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ],
                duration: 2000
            });
            toast.present();
        });
    }
};
ModalCreateOrganisasiComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
ModalCreateOrganisasiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-create-organisasi',
        template: __webpack_require__(/*! raw-loader!./modal-create-organisasi.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-create-organisasi/modal-create-organisasi.component.html"),
        styles: [__webpack_require__(/*! ./modal-create-organisasi.component.scss */ "./src/app/modal-create-organisasi/modal-create-organisasi.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], ModalCreateOrganisasiComponent);



/***/ }),

/***/ "./src/app/modal-group-password/modal-group-password.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modal-group-password/modal-group-password.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLWdyb3VwLXBhc3N3b3JkL21vZGFsLWdyb3VwLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-group-password/modal-group-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal-group-password/modal-group-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalGroupPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalGroupPasswordComponent", function() { return ModalGroupPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisasi/organisasi.service */ "./src/app/organisasi/organisasi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ModalGroupPasswordComponent = class ModalGroupPasswordComponent {
    constructor(modalCtrl, orgService, router, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.orgService = orgService;
        this.router = router;
        this.toastCtrl = toastCtrl;
    }
    ngOnInit() {
        this.user = this.orgService.getUser();
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
    enterGroup() {
        if (this.selectedOrgs.password == this.enterPwd) {
            this.orgService.setSelectedOrgs(this.selectedOrgs);
            this.router.navigate(['/organisasi', this.selectedOrgId]);
            this.modalCtrl.dismiss(null, 'cancel');
        }
        else {
            this.passwordToast();
        }
        // this.orgService.joinOrg(org.id,password);
        // this.orgService.setSelectedOrgs(org);
        // this.router.navigate(['/organisasi', org.id]);
    }
    passwordToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Wrong password',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ],
                duration: 2000
            });
            toast.present();
        });
    }
};
ModalGroupPasswordComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalGroupPasswordComponent.prototype, "selectedOrgs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalGroupPasswordComponent.prototype, "selectedOrgId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalGroupPasswordComponent.prototype, "user", void 0);
ModalGroupPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-group-password',
        template: __webpack_require__(/*! raw-loader!./modal-group-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-group-password/modal-group-password.component.html"),
        styles: [__webpack_require__(/*! ./modal-group-password.component.scss */ "./src/app/modal-group-password/modal-group-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ModalGroupPasswordComponent);



/***/ }),

/***/ "./src/app/modal-outcome-detail/modal-outcome-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modal-outcome-detail/modal-outcome-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLW91dGNvbWUtZGV0YWlsL21vZGFsLW91dGNvbWUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal-outcome-detail/modal-outcome-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modal-outcome-detail/modal-outcome-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: ModalOutcomeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalOutcomeDetailComponent", function() { return ModalOutcomeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisasi/organisasi.service */ "./src/app/organisasi/organisasi.service.ts");







let ModalOutcomeDetailComponent = class ModalOutcomeDetailComponent {
    constructor(modalCtrl, alertCtrl, toastCtrl, router, actvRoute, db, orgService) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.actvRoute = actvRoute;
        this.db = db;
        this.orgService = orgService;
        this.orgId = null;
        this.ocId = null;
        this.tombol = false;
        this.orgId = this.actvRoute.snapshot.params['organisasiId'];
        this.outcomeCollection = db.collection('organisasi').doc(this.orgId).collection('outcome');
        this.outcome = this.outcomeCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                this.ocId = id;
                return Object.assign({ id }, data);
            });
        }));
        // this.objCollection = db.collection<Organisasi>('organisasi').doc(this.orgId).collection<Outcome>('outcome').doc(this.selectedOrgs.id).collection('obj');
        // this.outcome = this.outcomeCollection.snapshotChanges().pipe(
        //   map(actions => {
        //     return actions.map(a => {
        //       const data = a.payload.doc.data();
        //       const id = a.payload.doc.id;
        //       return { id, ...data };
        //     });
        //   })
        // )
        // this.listLength = 0;
        // this.outcome.subscribe(res => {
        //   this.outcome2 = res;
        //   this.listLength = res.length;
        // });
    }
    ngOnInit() {
        // this.orgId = this.actvRoute.snapshot.params['organisasiId'];
        // this.user = this.orgService.getUser();
        // console.log(this.user.email + " " + this.selectedOrgs.email);
        // if(this.user.email == this.selectedOrgs.email) {
        //   console.log("orang ini");
        //   this.tombol = true;
        // }
        // else if(this.user.email != this.selectedOrgs.email) {
        //   this.tombol = false;
        // }
    }
};
ModalOutcomeDetailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__["OrganisasiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ModalOutcomeDetailComponent.prototype, "selectedOrgs", void 0);
ModalOutcomeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-outcome-detail',
        template: __webpack_require__(/*! raw-loader!./modal-outcome-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-outcome-detail/modal-outcome-detail.component.html"),
        styles: [__webpack_require__(/*! ./modal-outcome-detail.component.scss */ "./src/app/modal-outcome-detail/modal-outcome-detail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__["OrganisasiService"]])
], ModalOutcomeDetailComponent);



/***/ }),

/***/ "./src/app/modal-sign-up/modal-sign-up.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modal-sign-up/modal-sign-up.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsLXNpZ24tdXAvbW9kYWwtc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modal-sign-up/modal-sign-up.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modal-sign-up/modal-sign-up.component.ts ***!
  \**********************************************************/
/*! exports provided: ModalSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSignUpComponent", function() { return ModalSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisasi/organisasi.service */ "./src/app/organisasi/organisasi.service.ts");





let ModalSignUpComponent = class ModalSignUpComponent {
    constructor(modalCtrl, authSvc, loadingCtrl, orgService, toastCtrl) {
        this.modalCtrl = modalCtrl;
        this.authSvc = authSvc;
        this.loadingCtrl = loadingCtrl;
        this.orgService = orgService;
        this.toastCtrl = toastCtrl;
        this.ada = false;
    }
    ngOnInit() {
        this.selectedUser = {
            displayName: '',
            email: ''
        };
        this.userSub = this.orgService.getUsers().subscribe(res => {
            this.allUser = res;
        });
    }
    onSignUp(f) {
        if (f.value.confirmPwd != f.value.pwd) {
            this.passwordToast();
        }
        else if (f.value.confirmPwd == f.value.pwd) {
            for (let u of this.allUser) {
                console.log(f.value.email + u.email);
                if (f.value.email == u.email) {
                    // console.log("ada");
                    this.ada = true;
                }
                else if (f.value.email != u.email) {
                    this.ada = this.ada;
                    //console.log("belum ada");
                }
            }
            if (this.ada == true) {
                console.log("ada");
                this.createToast();
            }
            else if (this.ada == false) {
                console.log("blm ada");
                this.orgService.addUser(this.selectedUser);
                this.authSvc.signup(f.value.inpEmail, f.value.pwd, f.value.inpName).subscribe(resp => {
                    console.log(resp);
                    this.presentLoading();
                    this.modalCtrl.dismiss();
                });
                this.selectedUser = {
                    displayName: f.value.inpName,
                    email: f.value.inpEmail
                };
                console.log(this.selectedUser);
            }
        }
    }
    passwordToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Password didn\'t match',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ],
                duration: 2000
            });
            toast.present();
        });
    }
    ionViewDidLoad() {
        this.userSub = this.orgService.getUsers().subscribe(res => {
            this.allUser = res;
        });
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Signing Up...',
                duration: 2000
            });
            yield loading.present();
        });
    }
    onCancel() {
        this.modalCtrl.dismiss();
    }
    createToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Email Registered. Please use different email.',
                position: 'bottom',
                duration: 3000,
                buttons: [
                    {
                        side: 'end',
                        text: 'Close',
                        role: 'cancel'
                    }
                ]
            });
            yield toast.present();
        });
    }
};
ModalSignUpComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_4__["OrganisasiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ModalSignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-sign-up',
        template: __webpack_require__(/*! raw-loader!./modal-sign-up.component.html */ "./node_modules/raw-loader/index.js!./src/app/modal-sign-up/modal-sign-up.component.html"),
        styles: [__webpack_require__(/*! ./modal-sign-up.component.scss */ "./src/app/modal-sign-up/modal-sign-up.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_4__["OrganisasiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ModalSignUpComponent);



/***/ }),

/***/ "./src/app/organisasi/organisasi.service.ts":
/*!**************************************************!*\
  !*** ./src/app/organisasi/organisasi.service.ts ***!
  \**************************************************/
/*! exports provided: OrganisasiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisasiService", function() { return OrganisasiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let OrganisasiService = class OrganisasiService {
    constructor(db) {
        this.orgsCollection = db.collection('organisasi');
        this.organisasi = this.orgsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => {
            return actions.map(a => {
                this.path = a.payload.doc.ref.path;
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                this.OrgId = id;
                console.log("PATH: " + this.path);
                console.log("OrgID: " + this.OrgId);
                return Object.assign({ id }, data);
            });
        }));
        this.usersCollection = db.collection('users');
        this.user = this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(actions => {
            return actions.map(u => {
                const data = u.payload.doc.data();
                const id = u.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
        // this.outcomeCollection = db.collection<Organisasi>('organisasi').doc(this.OrgId).collection<Outcome>('outcome');
        // this.outcome = this.outcomeCollection.snapshotChanges().pipe(
        //   map(actions => {
        //     return actions.map(a => {
        //       this.path = a.payload.doc.ref.path;
        //       const data = a.payload.doc.data();
        //       const id = a.payload.doc.id;
        //       this.OutcomeId = id;
        //       console.log("OrgID: " + this.OutcomeId);
        //       return { id, ...data };
        //     });
        //   })
        // )
    }
    getOrgs() {
        return this.organisasi;
    }
    getOrg(organisasiId) {
        return this.orgsCollection.doc(organisasiId).valueChanges();
    }
    updateOrgs(orgs, organisasiId) {
        return this.orgsCollection.doc(organisasiId).update(orgs);
    }
    addOrgs(orgs) {
        return this.orgsCollection.add(orgs);
    }
    removeOrgs(organisasiId) {
        return this.orgsCollection.doc(organisasiId).delete();
    }
    setSelectedOrgs(Orgs) {
        this.selectedOrganisasi = Orgs;
    }
    setOutcome(oc) {
        this.selectedOutcome = oc;
    }
    getSelectedOrgs() {
        return this.selectedOrganisasi;
    }
    getOutcome() {
        return this.selectedOutcome;
    }
    addUser(user) {
        return this.usersCollection.add(user);
    }
    setSelectedUser(resp) {
        this.selectedUser = resp;
    }
    getUser() {
        return this.selectedUser;
    }
    getUsers() {
        return this.user;
    }
};
OrganisasiService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
OrganisasiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], OrganisasiService);



/***/ }),

/***/ "./src/app/popover/popover.component.scss":
/*!************************************************!*\
  !*** ./src/app/popover/popover.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/popover/popover.component.ts":
/*!**********************************************!*\
  !*** ./src/app/popover/popover.component.ts ***!
  \**********************************************/
/*! exports provided: PopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverComponent", function() { return PopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let PopoverComponent = class PopoverComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        console.log(this.selectedOrgs);
    }
    onCancel() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
};
PopoverComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PopoverComponent.prototype, "selectedOrgs", void 0);
PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-popover',
        template: __webpack_require__(/*! raw-loader!./popover.component.html */ "./node_modules/raw-loader/index.js!./src/app/popover/popover.component.html"),
        styles: [__webpack_require__(/*! ./popover.component.scss */ "./src/app/popover/popover.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], PopoverComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBb-hSZsAwYLDkq197SZ2BCw9riI_kdvSA",
        authDomain: "rimburze.firebaseapp.com",
        databaseURL: "https://rimburze.firebaseio.com",
        projectId: "rimburze",
        storageBucket: "rimburze.appspot.com",
        messagingSenderId: "851743622075",
        appId: "1:851743622075:web:26005b3c768140ee2d7a9e",
        measurementId: "G-Y8W7NFRCEG"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\TONY_new\Documents\Semester 7\Mobile 2\UAS\rimburze\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
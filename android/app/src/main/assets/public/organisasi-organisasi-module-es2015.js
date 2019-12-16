(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisasi-organisasi-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/organisasi/organisasi.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organisasi/organisasi.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button menu=\"m1\"></ion-menu-button>\r\n  </ion-buttons>\r\n  <ion-title style=\"font-size: 16px;\">HOME</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=2>\r\n        <div *ngIf=\"!loadedOrgs || loadedOrgs.length == 0\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              GROUPS\r\n            </ion-list-header>\r\n            <ion-item lines=\"full\" *ngFor=\"let n of [0,1,2,3,4]\">\r\n              <ion-avatar slot=\"start\">\r\n                <ion-skeleton-text animated class=\"fake-skeleton\"></ion-skeleton-text>\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <p>\r\n                  <ion-skeleton-text animated class=\"fake-skeleton\"></ion-skeleton-text>\r\n                </p>\r\n                <p>\r\n                  <ion-skeleton-text animated class=\"fake-skeleton\"></ion-skeleton-text>\r\n                </p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n        <div *ngIf=\"loadedOrgs\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              GROUPS\r\n            </ion-list-header>\r\n            <!-- <ion-item lines=\"none\" (click)=\"orgsOnClick(org.id)\" *ngFor=\"let org of loadedOrgs\"> -->\r\n            <ion-item lines=\"full\" (click)=\"selectOrgs(org, org.id)\" *ngFor=\"let org of loadedOrgs\">\r\n              <ion-avatar slot=\"start\">\r\n                <img src=\"./assets/icon/rimburze_logo.png\">\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <p style=\"font-size: 13px;\">{{ org.name }}</p>\r\n                <p style=\"font-size: 12px;\">{{ org.year }}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n  <ion-fab-button color=\"tertiary\" (click)=\"createOnClick()\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n"

/***/ }),

/***/ "./src/app/organisasi/organisasi.module.ts":
/*!*************************************************!*\
  !*** ./src/app/organisasi/organisasi.module.ts ***!
  \*************************************************/
/*! exports provided: OrganisasiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisasiPageModule", function() { return OrganisasiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _organisasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organisasi.page */ "./src/app/organisasi/organisasi.page.ts");







const routes = [
    {
        path: '',
        component: _organisasi_page__WEBPACK_IMPORTED_MODULE_6__["OrganisasiPage"]
    }
];
let OrganisasiPageModule = class OrganisasiPageModule {
};
OrganisasiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_organisasi_page__WEBPACK_IMPORTED_MODULE_6__["OrganisasiPage"]]
    })
], OrganisasiPageModule);



/***/ }),

/***/ "./src/app/organisasi/organisasi.page.scss":
/*!*************************************************!*\
  !*** ./src/app/organisasi/organisasi.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXNhc2kvb3JnYW5pc2FzaS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/organisasi/organisasi.page.ts":
/*!***********************************************!*\
  !*** ./src/app/organisasi/organisasi.page.ts ***!
  \***********************************************/
/*! exports provided: OrganisasiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisasiPage", function() { return OrganisasiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _organisasi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./organisasi.service */ "./src/app/organisasi/organisasi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modal_create_organisasi_modal_create_organisasi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-create-organisasi/modal-create-organisasi.component */ "./src/app/modal-create-organisasi/modal-create-organisasi.component.ts");
/* harmony import */ var _modal_group_password_modal_group_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-group-password/modal-group-password.component */ "./src/app/modal-group-password/modal-group-password.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");








// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
let OrganisasiPage = class OrganisasiPage {
    constructor(orgsService, alertCtrl, router, toastCtrl, modalCtrl, db) {
        this.orgsService = orgsService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.db = db;
    }
    ngOnInit() {
        this.user = this.orgsService.getUser();
        this.orgSubs = this.orgsService.getOrgs().subscribe(res => {
            this.loadedOrgs = res;
            console.log(this.loadedOrgs);
        });
        console.log(this.user);
    }
    ionViewDidLoad() {
        this.user = this.orgsService.getUser();
        this.orgSubs = this.orgsService.getOrgs().subscribe(res => {
            this.loadedOrgs = res;
            console.log(this.loadedOrgs);
        });
        console.log(this.user);
    }
    ngOnDestroy() {
        console.log("destroyed");
        this.orgSubs.unsubscribe();
    }
    //Join Group
    selectOrgs(org, iniId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_group_password_modal_group_password_component__WEBPACK_IMPORTED_MODULE_6__["ModalGroupPasswordComponent"],
                componentProps: { selectedOrgs: org, selectedOrgId: iniId },
            });
            return yield modal.present();
        });
    }
    orgsOnClick(id) {
        this.router.navigate(['/organisasi', id]);
    }
    //Create Group
    createOnClick(orgs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_create_organisasi_modal_create_organisasi_component__WEBPACK_IMPORTED_MODULE_5__["ModalCreateOrganisasiComponent"],
                componentProps: { selectedOrgs: orgs }
            });
            return yield modal.present();
        });
    }
    createToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Group created',
                position: 'bottom',
                duration: 2000,
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
OrganisasiPage.ctorParameters = () => [
    { type: _organisasi_service__WEBPACK_IMPORTED_MODULE_2__["OrganisasiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }
];
OrganisasiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organisasi',
        template: __webpack_require__(/*! raw-loader!./organisasi.page.html */ "./node_modules/raw-loader/index.js!./src/app/organisasi/organisasi.page.html"),
        styles: [__webpack_require__(/*! ./organisasi.page.scss */ "./src/app/organisasi/organisasi.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_organisasi_service__WEBPACK_IMPORTED_MODULE_2__["OrganisasiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])
], OrganisasiPage);



/***/ })

}]);
//# sourceMappingURL=organisasi-organisasi-module-es2015.js.map
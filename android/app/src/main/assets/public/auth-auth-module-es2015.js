(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auth/auth.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=2 text-center>\r\n        <div style=\"margin-top: 15%; margin-bottom: 20%;\">\r\n          <ion-thumbnail style=\"width: 100px; height: 100px; margin-left: auto; margin-right: auto;\">\r\n            <img src=\"./assets/icon/rimburze_logo.png\">\r\n          </ion-thumbnail>\r\n          <h1>RIMBURZE</h1>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=2>\r\n        <ion-row>\r\n          <ion-col>\r\n            <form #f=\"ngForm\" (ngSubmit)=\"onLogin(f)\">\r\n              <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto;\">\r\n                <ion-label style=\"font-size: 13px;\" position=\"floating\">email</ion-label>\r\n                <ion-input style=\"font-size: 13px;\"\r\n                  required\r\n                  ngModel\r\n                  name=\"email\"\r\n                  type=\"email\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-item style=\"width: 250px; margin-left: auto; margin-right: auto;\">\r\n                <ion-label style=\"font-size: 13px;\" position=\"floating\">password</ion-label>\r\n                <ion-input style=\"font-size: 13px;\"\r\n                  required\r\n                  ngModel\r\n                  name=\"pwd\"\r\n                  type=\"password\"\r\n                  minlength=\"6\"\r\n                ></ion-input>\r\n              </ion-item>\r\n              <ion-button color=\"tertiary\" [disabled]=\"!f.valid\" type=\"submit\" style=\"font-size: 12px; width: 250px; margin-left: auto; margin-right: auto; margin-top: 10px;\" expand=\"block\">Sign in</ion-button>\r\n              <ion-button color=\"danger\" expand=\"block\" style=\"font-size: 12px; width: 250px; margin-left: auto; margin-right: auto; margin-top: 10px;\" fill=\"outline\" (click)=\"modalSignUp()\">Sign Up</ion-button>\r\n            </form>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n  "

/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/auth/auth.page.ts");







const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]
    }
];
let AuthPageModule = class AuthPageModule {
};
AuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/auth/auth.page.scss":
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/auth/auth.page.ts":
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_sign_up_modal_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-sign-up/modal-sign-up.component */ "./src/app/modal-sign-up/modal-sign-up.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisasi/organisasi.service */ "./src/app/organisasi/organisasi.service.ts");







let AuthPage = class AuthPage {
    constructor(modalCtrl, authSvc, router, toastCtrl, orgService) {
        this.modalCtrl = modalCtrl;
        this.authSvc = authSvc;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.orgService = orgService;
    }
    ngOnInit() {
    }
    onLogin(f) {
        this.authSvc.login(f.value.email, f.value.pwd).subscribe(resp => {
            console.log(resp);
            this.orgService.setSelectedUser(resp);
            this.router.navigateByUrl('organisasi');
        }, err => {
            this.passwordToast();
        });
    }
    passwordToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Wrong email or password',
                buttons: [
                    {
                        text: 'Close',
                        role: 'cancel'
                    }
                ],
                duration: 5000
            });
            toast.present();
        });
    }
    modalSignUp() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_sign_up_modal_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["ModalSignUpComponent"]
            });
            return yield modal.present();
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__["OrganisasiService"] }
];
AuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/index.js!./src/app/auth/auth.page.html"),
        styles: [__webpack_require__(/*! ./auth.page.scss */ "./src/app/auth/auth.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _organisasi_organisasi_service__WEBPACK_IMPORTED_MODULE_6__["OrganisasiService"]])
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map
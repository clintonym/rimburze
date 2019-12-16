(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisasi-outcome-outcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/organisasi/outcome/outcome.page.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organisasi/outcome/outcome.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; background-color: #F38E8F;\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"/organisasi\"></ion-back-button>\r\n  </ion-buttons>\r\n  <ion-title style=\"font-size: 16px;\">{{ loadedOrgs.name }}</ion-title>  \r\n  <ion-icon slot=\"end\" name=\"paper\" class=\"iconSize\" (click)=\"histOnClick(outcome2)\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size-md=\"6\" offset-md=\"3\">\r\n        <div text-center *ngIf=\"!outcome2 || outcome2.length == 0\" style=\"margin-left: auto; margin-right: auto; margin-top: 50%; margin-bottom: 50%;\">\r\n          <p style=\"font-size: 14px; color: #989aa2;\">Group is empty</p>\r\n        </div>\r\n        <div *ngIf=\"outcome2\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              MEMBERS\r\n            </ion-list-header>\r\n            <ion-item lines=\"full\" (click)=\"outcomeDetail(oc)\" *ngFor=\"let oc of outcome2\">\r\n              <ion-label>\r\n                <p style=\"font-size: 13px;\">{{ oc.name }}</p>\r\n                <p style=\"font-size: 12px;\">{{ oc.email }}</p>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer lines=\"none\">\r\n  <div *ngIf=\"tombolAdd == true\">\r\n    <ion-button expand=\"full\" (click)=\"addUserOnClick()\">Join</ion-button>\r\n  </div>\r\n  <div *ngIf=\"tombolAdd == false\"></div>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/organisasi/outcome/outcome.module.ts":
/*!******************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome.module.ts ***!
  \******************************************************/
/*! exports provided: OutcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomePageModule", function() { return OutcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _outcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outcome.page */ "./src/app/organisasi/outcome/outcome.page.ts");







var routes = [
    {
        path: '',
        component: _outcome_page__WEBPACK_IMPORTED_MODULE_6__["OutcomePage"]
    }
];
var OutcomePageModule = /** @class */ (function () {
    function OutcomePageModule() {
    }
    OutcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_outcome_page__WEBPACK_IMPORTED_MODULE_6__["OutcomePage"]]
        })
    ], OutcomePageModule);
    return OutcomePageModule;
}());



/***/ }),

/***/ "./src/app/organisasi/outcome/outcome.page.scss":
/*!******************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXNhc2kvb3V0Y29tZS9vdXRjb21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/organisasi/outcome/outcome.page.ts":
/*!****************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome.page.ts ***!
  \****************************************************/
/*! exports provided: OutcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomePage", function() { return OutcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _organisasi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisasi.service */ "./src/app/organisasi/organisasi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modal_outcome_detail_modal_outcome_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modal-outcome-detail/modal-outcome-detail.component */ "./src/app/modal-outcome-detail/modal-outcome-detail.component.ts");
/* harmony import */ var src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/popover/popover.component */ "./src/app/popover/popover.component.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var OutcomePage = /** @class */ (function () {
    function OutcomePage(activatedOrgs, orgsService, modalCtrl, router, popoverCtrl, actvRoute, db, toastCtrl) {
        var _this = this;
        this.activatedOrgs = activatedOrgs;
        this.orgsService = orgsService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.popoverCtrl = popoverCtrl;
        this.actvRoute = actvRoute;
        this.db = db;
        this.toastCtrl = toastCtrl;
        this.orgId = null;
        this.tombolAdd = true;
        this.ada = false;
        this.orgId = this.actvRoute.snapshot.params['organisasiId'];
        this.outcomeCollection = db.collection('organisasi').doc(this.orgId).collection('outcome');
        this.outcome = this.outcomeCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: id }, data);
            });
        }));
        this.listLength = 0;
        this.outcome.subscribe(function (res) {
            _this.outcome2 = res;
            _this.listLength = res.length;
            return _this.cekUser(_this.outcome2);
        });
    }
    OutcomePage.prototype.ngOnInit = function () {
        this.loadedOrgs = this.orgsService.getSelectedOrgs();
        this.user = this.orgsService.getUser();
        this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    };
    OutcomePage.prototype.ionViewWillEnter = function () {
        this.loadedOrgs = this.orgsService.getSelectedOrgs();
        this.user = this.orgsService.getUser();
        this.orgId = this.actvRoute.snapshot.params['organisasiId'];
    };
    OutcomePage.prototype.cekUser = function (oc) {
        for (var _i = 0, oc_1 = oc; _i < oc_1.length; _i++) {
            var v = oc_1[_i];
            console.log(v.name + v.email);
            if (this.user.email == v.email) {
                console.log("ada");
                this.ada = true;
            }
            else if (this.user.email != v.email) {
                this.ada = this.ada;
                console.log("belum ada");
            }
            if (this.ada == true) {
                this.tombolAdd = false;
            }
            else if (this.ada == false) {
                this.tombolAdd = true;
            }
        }
    };
    OutcomePage.prototype.addUserOnClick = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]()
            .collection('organisasi').doc(this.orgId).collection('outcome').add({
            email: this.user.email,
            name: this.user.displayName,
            obj: []
        }).then(function () {
            console.log("updated");
            _this.joinToast();
        });
    };
    OutcomePage.prototype.joinToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Welcome to \"' + this.loadedOrgs.name + '\"',
                            buttons: [
                                {
                                    text: 'Close',
                                    role: 'cancel'
                                }
                            ],
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OutcomePage.prototype.modalOnClick = function (orgs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modal_outcome_detail_modal_outcome_detail_component__WEBPACK_IMPORTED_MODULE_5__["ModalOutcomeDetailComponent"],
                            componentProps: { selectedOrgs: orgs, }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OutcomePage.prototype.outcomeDetail = function (oc) {
        this.orgsService.setOutcome(oc);
        this.router.navigate(['/organisasi', this.orgId, oc.id]);
    };
    OutcomePage.prototype.histOnClick = function (orgs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_popover_popover_component__WEBPACK_IMPORTED_MODULE_6__["PopoverComponent"],
                            componentProps: { selectedOrgs: orgs }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OutcomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    OutcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-outcome',
            template: __webpack_require__(/*! raw-loader!./outcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/organisasi/outcome/outcome.page.html"),
            styles: [__webpack_require__(/*! ./outcome.page.scss */ "./src/app/organisasi/outcome/outcome.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], OutcomePage);
    return OutcomePage;
}());



/***/ })

}]);
//# sourceMappingURL=organisasi-outcome-outcome-module-es5.js.map
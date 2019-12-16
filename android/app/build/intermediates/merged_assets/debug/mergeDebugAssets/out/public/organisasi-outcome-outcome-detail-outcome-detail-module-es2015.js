(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organisasi-outcome-outcome-detail-outcome-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar style=\"border-bottom-left-radius: 15px; border-bottom-right-radius: 15px;\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/organisasi\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"font-size: 16px;\">{{ loadedOutcome.name }}</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-sm=\"8\" offset-sm=2 text-center>\r\n        <div style=\"margin-top: 12%; margin-bottom: 5%;\">\r\n          <ion-label color=\"danger\" style=\"font-size: 15px;\"><b>-{{ getTotalPrice() | currency : \"Rp\"}}</b></ion-label>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div *ngIf=\"loadedObj\">\r\n          <ion-list>\r\n            <ion-list-header>\r\n              EXPENSES\r\n            </ion-list-header>\r\n            <ion-item lines=\"full\" *ngFor=\"let obj of loadedObj\" (click)=\"deleteObj(obj)\">\r\n              <ion-icon slot=\"start\" name=\"cash\" size=\"small\" color=\"danger\" style=\"margin-left: -2%; margin-right: 4%;\"></ion-icon>\r\n              <ion-label>\r\n                <p style=\"font-size: 13px;\">{{ obj.objName }}</p>\r\n                <p style=\"font-size: 12px;\">{{ obj.date.toDate() | date: 'dd MMMM yyyy'}}</p>\r\n              </ion-label>\r\n              <ion-label>\r\n                  <p style=\"font-size: 13px; float: right;\"><span style=\"font-size: 18px; color: #fa4678;\">-</span><b>{{ obj.price | currency : \"Rp\"}}</b></p>\r\n              </ion-label>\r\n            </ion-item>            \r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<div *ngIf=\"tombol == true\">\r\n  <ion-fab horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"tertiary\">\r\n      <ion-icon name=\"arrow-dropup\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"tertiary\" (click)=\"addOnClick()\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n      <ion-fab-button color=\"tertiary\">\r\n          <ion-icon name=\"done-all\" (click)=\"doneOnClick()\"></ion-icon>\r\n        </ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</div>\r\n<div *ngIf=\"tombol == false\"></div>"

/***/ }),

/***/ "./src/app/organisasi/outcome/outcome-detail/outcome-detail.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome-detail/outcome-detail.module.ts ***!
  \****************************************************************************/
/*! exports provided: OutcomeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomeDetailPageModule", function() { return OutcomeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _outcome_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outcome-detail.page */ "./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.ts");







const routes = [
    {
        path: '',
        component: _outcome_detail_page__WEBPACK_IMPORTED_MODULE_6__["OutcomeDetailPage"]
    }
];
let OutcomeDetailPageModule = class OutcomeDetailPageModule {
};
OutcomeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_outcome_detail_page__WEBPACK_IMPORTED_MODULE_6__["OutcomeDetailPage"]]
    })
], OutcomeDetailPageModule);



/***/ }),

/***/ "./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXNhc2kvb3V0Y29tZS9vdXRjb21lLWRldGFpbC9vdXRjb21lLWRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.ts ***!
  \**************************************************************************/
/*! exports provided: OutcomeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutcomeDetailPage", function() { return OutcomeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _organisasi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../organisasi.service */ "./src/app/organisasi/organisasi.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);








let OutcomeDetailPage = class OutcomeDetailPage {
    constructor(actvRoute, activatedOrgs, orgsService, modalCtrl, alertCtrl, toastCtrl, router, db, loadingCtrl) {
        this.actvRoute = actvRoute;
        this.activatedOrgs = activatedOrgs;
        this.orgsService = orgsService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
        this.orgId = null;
        this.outcomeId = null;
        this.tombol = false;
        this.user = this.orgsService.getUser();
        this.orgId = this.actvRoute.snapshot.params['organisasiId'];
        this.outcomeId = this.actvRoute.snapshot.params['outcomeId'];
        console.log("Outcome Id: " + this.outcomeId);
        this.objCollection = db.collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj');
        this.obj = this.objCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    ngOnInit() {
        this.loadedOutcome = this.orgsService.getOutcome();
        this.obj.subscribe(res => {
            this.loadedObj = res;
        });
        console.log(this.user.email + " " + this.loadedOutcome.email);
        if (this.user.email == this.loadedOutcome.email) {
            this.tombol = true;
        }
        else if (this.user.email != this.loadedOutcome.email) {
            this.tombol = false;
        }
    }
    deleteObj(obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Delete Item',
                message: 'Are you sure want to delete \"' + obj.objName + '\"?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]()
                                .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId)
                                .collection('obj').doc(obj.id).delete()
                                .then(function () {
                                console.log("Obj successfully deleted!");
                            }).catch(function (error) {
                                console.error("Error removing Obj: ", error);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    toastDelete() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: '\"' + this.loadedObj + '\" has been deleted',
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
    getTotalPrice() {
        let sumVal = 0;
        if (!this.loadedObj) {
        }
        else if (this.loadedObj) {
            for (let item of this.loadedObj) {
                sumVal = +sumVal + +item.price;
            }
            return sumVal;
        }
    }
    addOnClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Add item',
                message: 'What was the last item you bought?',
                inputs: [
                    {
                        name: 'inpName',
                        placeholder: 'Item\'s name',
                    },
                    {
                        name: 'inpPrice',
                        placeholder: 'Price',
                        type: 'number'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Add',
                        handler: data => {
                            // this.addLoading();
                            firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"]()
                                .collection('organisasi').doc(this.orgId).collection('outcome').doc(this.outcomeId).collection('obj').add({
                                objName: data.inpName,
                                price: data.inpPrice,
                                date: new Date()
                            }).then(function () {
                                console.log("updated");
                            });
                            console.log("Hope you get reimbursement");
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    doneOnClick() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Reimburse',
                message: 'Are you sure want to close the receipt? You will not be able to add another item.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            this.router.navigate(['/organisasi']);
                            this.toastDone();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    toastDone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Thank you',
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
OutcomeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
OutcomeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outcome-detail',
        template: __webpack_require__(/*! raw-loader!./outcome-detail.page.html */ "./node_modules/raw-loader/index.js!./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.html"),
        styles: [__webpack_require__(/*! ./outcome-detail.page.scss */ "./src/app/organisasi/outcome/outcome-detail/outcome-detail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _organisasi_service__WEBPACK_IMPORTED_MODULE_3__["OrganisasiService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
], OutcomeDetailPage);



/***/ })

}]);
//# sourceMappingURL=organisasi-outcome-outcome-detail-outcome-detail-module-es2015.js.map
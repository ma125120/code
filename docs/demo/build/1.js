webpackJsonp([1],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertPageModule", function() { return AlertPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertPageModule = (function () {
    function AlertPageModule() {
    }
    AlertPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* AlertPage */]),
            ],
        })
    ], AlertPageModule);
    return AlertPageModule;
}());

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertPage = (function () {
    function AlertPage(navCtrl, actionSheetCtrl, platform, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        console.log(this);
    }
    AlertPage.prototype.openAlert = function () {
        var alert = this.alertCtrl.create({
            title: '嗨，新朋友!',
            subTitle: '在这里向你问好',
            buttons: ['确认']
        });
        alert.present();
    };
    AlertPage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: '登录',
            message: "请输入您的用户名",
            inputs: [
                {
                    name: 'username',
                    placeholder: '用户名'
                },
                {
                    name: 'pwd',
                    placeholder: '密码'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log(data);
                        //data为对象,name即为用户输入
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log(data);
                    }
                }
            ]
        });
        prompt.present();
    };
    AlertPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: '使用这个亮度?',
            message: '你想调整亮度吗?',
            buttons: [
                {
                    text: '不同意',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '同意',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    AlertPage.prototype.showRadio = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('亮度条的颜色');
        alert.addInput({
            type: 'radio',
            label: '蓝色',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: '红色',
            value: 'red',
            checked: false
        });
        alert.addButton('关闭');
        alert.addButton({
            text: '确认',
            handler: function (data) {
                console.log(data);
                //data即为选中的值
            }
        });
        alert.present();
    };
    AlertPage.prototype.showCheckbox = function () {
        var alert = this.alertCtrl.create();
        alert.setTitle('你想访问那个面板?');
        alert.addInput({
            type: 'checkbox',
            label: '主页',
            value: 'home',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: '联系方式',
            value: 'contact'
        });
        alert.addButton('关闭');
        alert.addButton({
            text: '确认',
            handler: function (data) {
                console.log('Checkbox data:', data);
                //data为数组
            }
        });
        alert.present();
    };
    AlertPage.prototype.openMenu = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\alert\alert.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>alert</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <button ion-button block (click)="openMenu()">\n    打开 Action Sheet\n  </button>\n  <button ion-button block (click)="openAlert()">\n    打开 Alert\n  </button>\n  <button ion-button block (click)="showPrompt()">\n    打开 Prompt\n  </button>\n  <button ion-button block (click)="showConfirm()">\n    打开 Confirm\n  </button>\n  <button ion-button block (click)="showRadio()">\n    打开 单选alert\n  </button>\n  <button ion-button block (click)="showCheckbox()">\n    打开 多选alert\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\alert\alert.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
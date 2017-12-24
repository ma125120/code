webpackJsonp([3],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__btns_btns__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__card_card__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__radio_radio__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { AlertPage } from '../alert/alert'




var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, modalCtrl, popoverCtrl, alertCtrl, userSer, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.userSer = userSer;
        this.loadingCtrl = loadingCtrl;
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.RadioPage = __WEBPACK_IMPORTED_MODULE_6__radio_radio__["a" /* RadioPage */];
        //this.displayLoading()
        /*测试service*/
        console.log(this.userSer.users[0]);
        this.userSer.users = [{ name: 'normal' }];
    }
    /*加载框*/
    HomePage.prototype.displayLoading = function () {
        var loading = this.loadingCtrl.create({
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">\n          \u865A\u62DF\u7684\u76D2\u5B50</div>\n        </div>",
            duration: 1000
        });
        loading.onDidDismiss(function () {
            console.log('Dismissed loading');
        });
        loading.present();
    };
    HomePage.prototype.navToBtns = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__btns_btns__["a" /* BtnPage */]);
    };
    HomePage.prototype.navToAlert = function () {
        this.navCtrl.push('AlertPage', { id: 1 });
    };
    HomePage.prototype.navToCard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__card_card__["a" /* CardPage */]);
    };
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.openModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */]);
        modal.present();
    };
    HomePage.prototype.openPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modal__["a" /* ModalPage */]);
        popover.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('home加载');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      主页\n    </ion-title>\n\n<!--     <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n<!--   <ion-toolbar color="primary">\n     <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <button ion-button menuToggle>主页</button>\n    </ion-title>\n  </ion-toolbar> -->\n</ion-header>\n\n<ion-content padding menuClose>\n  <h2>Welcome to Ionic!</h2>\n  <p>这是一个ionic项目</p>\n  <button ion-button round block (click)="navToAlert()">\n    跳转到alertPage页面\n  </button>\n  <button ion-button round block (click)="navToBtns()">\n    跳转到按钮页面\n  </button>\n  <button ion-button round block (click)="navToCard()">\n    跳转到卡片页面\n  </button>\n  <button ion-button round block (click)="openModal()">\n    打开modal\n  </button>\n  <button ion-button round block (click)="openPopover()">\n    打开popover\n  </button>\n  <button ion-button round block (click)="openPage(RadioPage)">\n    打开radio\n  </button>\n\n   <ion-toolbar color="primary">\n      <ion-title>Toolbar</ion-title>\n    </ion-toolbar>\n\n\n    <ion-toolbar color="secondary">\n      <ion-title>Toolbar</ion-title>\n    </ion-toolbar>\n\n    <ion-toolbar color="danger">\n      <ion-title>Toolbar</ion-title>\n    </ion-toolbar>\n\n\n    <ion-toolbar color="dark">\n      <ion-title>Toolbar</ion-title>\n    </ion-toolbar>\n\n  <h1>checkbox</h1>\n  <ion-item>\n    <ion-label>Daenerys Targaryen</ion-label>\n    <ion-checkbox color="dark" checked="true"></ion-checkbox>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Arya Stark</ion-label>\n    <ion-checkbox disabled="true"></ion-checkbox>\n  </ion-item>\n\n  <h1>datetime</h1>\n  <ion-item>\n    <ion-label>Start Time</ion-label>\n    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts"></ion-datetime>\n  </ion-item>\n\n  <h1>FABS</h1>\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n    <ion-fab top right edge>\n      <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n      <ion-fab-list>\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n\n    <ion-fab right bottom>\n      <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n      <ion-fab-list side="left">\n        <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n        <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n      </ion-fab-list>\n    </ion-fab>\n  <div class="grid">\n    <h1>grid</h1>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>This column will take 12 columns</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>This column will take 6 columns</ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3>\n          This column will be 12 columns wide by default,\n          9 columns at the small breakpoint,\n          6 at the medium breakpoint, 4 at large, and 3 at xl.\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="icons">\n    <h1>icons</h1>\n    <ion-icon name="heart"></ion-icon>                    <!-- active -->\n    <ion-icon name="heart" isActive="true"></ion-icon>\n    <ion-icon ios="logo-apple" md="logo-android"></ion-icon>\n  </div>\n\n  <div class="input">\n    <h1>input</h1>\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" value=""></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>Username1</ion-label>\n        <ion-input type="text"  placeholder="Username"></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </div>\n  <ion-card>\n    <ion-card-content>\n      <ion-card-title>\n        sda\n      </ion-card-title>\n      <p>\n         first came to prominence as one of the lead vocalists of the avant pop Icelandic sextet the Sugarcubes, but when...\n      </p>\n    </ion-card-content>\n\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      礼物\n      <ion-badge item-end>260k</ion-badge>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="logo-twitter" item-start></ion-icon>\n      礼物\n      <ion-badge color="secondary"></ion-badge>\n    </ion-item>\n\n  </ion-card>\n  \n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert/alert.module": [
		279,
		1
	],
	"../pages/home/home.module": [
		280,
		2
	],
	"../pages/test/test.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnPage; });
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


var BtnPage = (function () {
    function BtnPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BtnPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-btn',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\btns\btns.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only>\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<div>\n		<h1>默认按钮</h1>\n		<button ion-button>Default</button>\n	  <button ion-button color="secondary">Secondary</button>\n	  <button ion-button color="danger">Danger</button>\n	  <button ion-button color="dark">Dark</button>\n	</div>\n	<h1>outline按钮</h1>\n\n  <button ion-button color="light" outline>Light Outline</button>\n	<button ion-button outline>Primary Outline</button>\n	<button ion-button color="secondary" outline>Secondary Outline</button>\n	<button ion-button color="danger" outline>Danger Outline</button>\n	<button ion-button color="dark" outline>Dark Outline</button>\n\n	<h1>clear按钮</h1>\n	<button ion-button color="light" clear>Light Clear</button>\n	<button ion-button clear>Primary Clear</button>\n	<button ion-button color="secondary" clear>Secondary Clear</button>\n	<button ion-button color="danger" clear>Danger Clear</button>\n	<button ion-button color="dark" clear>Dark Clear</button>\n\n	<h1>round按钮</h1>\n	<button ion-button color="light" round>Light Round</button>\n	<button ion-button round>Primary Round</button>\n	<button ion-button color="secondary" round>Secondary Round</button>\n	<button ion-button color="danger" round>Danger Round</button>\n	<button ion-button color="dark" round>Dark Round</button>\n\n	\n	<ion-card>\n\n    <ion-card-content>\n      <ion-card-title>\n        Block按钮\n      </ion-card-title>\n      <p>   \n      </p>\n    </ion-card-content>\n    <ion-item>\n      <button ion-button block>Block Button</button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full>Full Button</button>\n    </ion-item>\n    \n  </ion-card>\n	\n	<h1>按钮大小</h1>\n  <button ion-button small>Small</button>\n<button ion-button>Default</button>\n<button ion-button large>Large</button>\n\n	<h1>带图标的按钮</h1>\n	<!-- Float the icon left -->\n	<button ion-button icon-left>\n	  <ion-icon name="home"></ion-icon>\n	  Left Icon\n	</button>\n\n	<!-- Float the icon right -->\n	<button ion-button icon-right>\n	  Right Icon\n	  <ion-icon name="home"></ion-icon>\n	</button>\n\n	<!-- Only icon (no text) -->\n	<button ion-button icon-only>\n	  <ion-icon name="home"></ion-icon>\n	</button>\n\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\btns\btns.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], BtnPage);
    return BtnPage;
}());

//# sourceMappingURL=btns.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
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


var CardPage = (function () {
    function CardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\card\card.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      卡片card\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="card-background-page">\n	<ion-card>\n	  <ion-card-header>\n	    卡片标题\n	  </ion-card-header>\n\n	  <ion-list>\n	    <button ion-item>\n	      <ion-icon name="cart" item-start></ion-icon>\n	      购物\n	    </button>\n\n	    <button ion-item>\n	      <ion-icon name="medical" item-start></ion-icon>\n	      Hospital\n	    </button>\n\n	    <button ion-item>\n	      <ion-icon name="cafe" item-start></ion-icon>\n	      Cafe\n	    </button>\n\n	    <button ion-item>\n	      <ion-icon name="paw" item-start></ion-icon>\n	      Dog Park\n	    </button>\n\n	    <button ion-item>\n	      <ion-icon name="beer" item-start></ion-icon>\n	      Pub\n	    </button>\n\n	    <button ion-item>\n	      <ion-icon name="planet" item-start></ion-icon>\n	      Space\n	    </button>\n\n	  </ion-list>\n	</ion-card>\n\n	<h1>带图片的card</h1>\n	<ion-card>\n	  <img src="img/green.jpg"/>\n	  <ion-card-content>\n	    <ion-card-title>\n	      Nine Inch Nails Live\n	      </ion-card-title>\n	    <p>\n	      The most popular industrial group ever, and largely\n	      responsible for bringing the music to a mass audience.\n	    </p>\n	  </ion-card-content>\n	</ion-card>\n\n	<h1>Background Images</h1>\n  <ion-card>\n    <img src="img/green.jpg"/>\n    <div class="card-title">São Paulo</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n\n\n  <h1>Social Cards</h1>\n  <ion-card>\n	  <ion-item>\n	    <ion-avatar item-start>\n	      <img src="img/green.jpg">\n	    </ion-avatar>\n	    <h2>Marty McFly</h2>\n	    <p>November 5, 1955</p>\n	  </ion-item>\n\n	  <img src="img/green.jpg">\n\n	  <ion-card-content>\n	    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n	  </ion-card-content>\n\n	  <ion-row>\n	    <ion-col>\n	      <button ion-button icon-left clear small>\n	        <ion-icon name="thumbs-up"></ion-icon>\n	        <div>12 Likes</div>\n	      </button>\n	    </ion-col>\n	    <ion-col>\n	      <button ion-button icon-left clear small>\n	        <ion-icon name="text"></ion-icon>\n	        <div>4 Comments</div>\n	      </button>\n	    </ion-col>\n	    <ion-col center text-center>\n	      <ion-note>\n	        11h ago\n	      </ion-note>\n	    </ion-col>\n	  </ion-row>\n\n	</ion-card>\n\n	<h1>Map Cards</h1>\n	<ion-card>\n	  <img src="img/img/green.jpg">\n	  <ion-fab right top>\n	    <button ion-fab>\n	      <ion-icon name="pin"></ion-icon>\n	    </button>\n	  </ion-fab>\n\n	  <ion-item>\n	    <ion-icon name="football" item-start large></ion-icon>\n	    <h2>Museum of Football</h2>\n	    <p>11 N. Way St, Madison, WI 53703</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-icon name="wine" item-left large ></ion-icon>\n	    <h2>Institute of Fine Cocktails</h2>\n	    <p>14 S. Hop Avenue, Madison, WI 53703</p>\n	  </ion-item>\n\n	  <ion-item>\n	    <span item-left>18 min</span>\n	    <span item-left>(2.6 mi)</span>\n	    <button ion-button icon-left clear item-end>\n	      <ion-icon name="navigate"></ion-icon>\n	      Start\n	    </button>\n	  </ion-item>\n\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\card\card.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CardPage);
    return CardPage;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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


var ModalPage = (function () {
    function ModalPage(navCtrl, viewCtrl) {
        //this.character = characters[this.params.get('charNum')];
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.character = {
            name: 'Samwise Gamgee',
            quote: 'What we need is a few good taters.',
            image: 'assets/img/avatar-samwise.jpg',
            items: [
                { title: 'Race', note: 'Hobbit' },
                { title: 'Culture', note: 'Shire Folk' },
                { title: 'Nickname', note: 'Sam' }
            ]
        };
    }
    ModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\modal\modal.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      描述\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="{{character.image}}">\n        </ion-avatar>\n        <h2>{{character.name}}</h2>\n        <p>{{character.quote}}</p>\n      </ion-item>\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\modal\modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
}());

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioPage; });
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


var RadioPage = (function () {
    function RadioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RadioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-radio',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\radio\radio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons center>\n      <button ion-button icon-only>\n        <ion-icon name="radio"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list radio-group>\n	  <ion-list-header>\n	    Language\n	  </ion-list-header>\n\n	  <ion-item>\n	    <ion-label>Go</ion-label>\n	    <ion-radio checked="true" value="go"></ion-radio>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Rust</ion-label>\n	    <ion-radio value="rust"></ion-radio>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label>Python</ion-label>\n	    <ion-radio value="python" disabled="true"></ion-radio>\n	  </ion-item>\n\n	  <ion-item>\n		  <ion-range [(ngModel)]="brightness">\n		    <ion-icon range-left small name="sunny"></ion-icon>\n		    <ion-icon range-right name="sunny"></ion-icon>\n		  </ion-range>\n		</ion-item>\n	</ion-list>\n	<h1>segment</h1>\n	<div padding>\n	  <ion-segment [(ngModel)]="pet">\n	    <ion-segment-button value="kittens">\n	      Kittens\n	    </ion-segment-button>\n	    <ion-segment-button value="puppies">\n	      Puppies\n	    </ion-segment-button>\n	  </ion-segment>\n	</div>\n\n	<div [ngSwitch]="pet">\n	  <ion-list *ngSwitchCase="\'puppies\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="img/thumbnail-puppy-1.jpg">\n	      </ion-thumbnail>\n	      <h2>Ruby</h2>\n	    </ion-item>\n	  </ion-list>\n\n	  <ion-list *ngSwitchCase="\'kittens\'">\n	    <ion-item>\n	      <ion-thumbnail item-start>\n	        <img src="img/thumbnail-kitten-1.jpg">\n	      </ion-thumbnail>\n	      <h2>Luna</h2>\n	    </ion-item>\n	  </ion-list>\n	</div>\n\n	<h1>select</h1>\n	<ion-list>\n	  <ion-item>\n	    <ion-label>Gaming</ion-label>\n	    <ion-select [(ngModel)]="gaming">\n	      <ion-option value="nes">NES</ion-option>\n	      <ion-option value="n64">Nintendo64</ion-option>\n	      <ion-option value="ps">PlayStation</ion-option>\n	      <ion-option value="genesis">Sega Genesis</ion-option>\n	      <ion-option value="saturn">Sega Saturn</ion-option>\n	      <ion-option value="snes">SNES</ion-option>\n	    </ion-select>\n	  </ion-item>\n	</ion-list>\n\n	<h1>slide</h1>\n	<ion-slides pager>\n\n	  <ion-slide style="background-color: green">\n	    <h2>Slide 1</h2>\n	  </ion-slide>\n\n	  <ion-slide style="background-color: blue">\n	    <h2>Slide 2</h2>\n	  </ion-slide>\n\n	  <ion-slide style="background-color: red">\n	    <h2>Slide 3</h2>\n	  </ion-slide>\n\n	</ion-slides>\n\n	<h1>toggle</h1>\n	<ion-item>\n	  <ion-label> Sam</ion-label>\n	  <ion-toggle checked="false"></ion-toggle>\n	</ion-item>\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\radio\radio.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], RadioPage);
    return RadioPage;
}());

//# sourceMappingURL=radio.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="主页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="关于" tabBadge="3" tabBadgeStyle="danger" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="联系" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, userSer) {
        this.navCtrl = navCtrl;
        this.userSer = userSer;
        console.log(this.userSer.users[0]);
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item-sliding>\n	    <ion-item>\n	      <ion-avatar item-start>\n	        <img src="../assets/imgs/logo.png">\n	      </ion-avatar>\n	      <h2>Slimer</h2>\n	    </ion-item>\n	    <ion-item-options side="left">\n	      <button ion-button color="primary">\n	        <ion-icon name="text"></ion-icon>\n	        Text\n	      </button>\n	      <button ion-button color="secondary">\n	        <ion-icon name="call"></ion-icon>\n	        Call\n	      </button>\n	    </ion-item-options>\n	    <ion-item-options side="right">\n	      <button ion-button color="primary">\n	        <ion-icon name="mail"></ion-icon>\n	        Email\n	      </button>\n	    </ion-item-options>\n	  </ion-item-sliding>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.items = [];
        for (var i = 30; i < 40; i++) {
            this.items.push(i);
        }
    }
    ContactPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 10; i++) {
                _this.items.push(_this.items.length);
            }
            infiniteScroll.complete();
        }, 500);
    };
    ContactPage.prototype.doRefresh = function (event) {
        var _this = this;
        var items = [];
        setTimeout(function () {
            for (var i = 30; i < 40; i++) {
                items.push(i);
            }
            _this.items = items;
            event.complete();
        }, 500);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-end></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="下拉刷新"\n      refreshingSpinner="circles"\n      refreshingText="刷新中..."\n    ></ion-refresher-content>\n  </ion-refresher>\n  \n  <ion-list>\n    <ion-list-header>列表项</ion-list-header>\n    <ion-item *ngFor="let item of items">\n      {{item}}\n    </ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n   <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="上拉加载"\n   ></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_btns_btns__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_card_card__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_modal_modal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_radio_radio__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { AlertPage } from '../pages/alert/alert';






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                //AlertPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_btns_btns__["a" /* BtnPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_radio_radio__["a" /* RadioPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    backButtonText: '返回',
                    iconMode: 'ios',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    menuType: 'push'
                }, {
                    links: [
                        { loadChildren: '../pages/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                //AlertPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_btns_btns__["a" /* BtnPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_card_card__["a" /* CardPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_modal_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_radio_radio__["a" /* RadioPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */],
                //Geolocation,
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\wamp\www\html\project\ionic\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>菜单</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button detail-none="false" ion-item (click)="openPage(TabsPage)">\n        Home\n      </button>\n      <button ion-item (click)="openPage(TabsPage)">\n        Friends\n      </button>\n      <button ion-item (click)="openPage(TabsPage)">\n        Events\n      </button>\n      <button ion-item (click)="closeMenu()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\wamp\www\html\project\ionic\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = (function () {
    function UserService() {
        this.users = [{ name: 'tezst' }];
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map
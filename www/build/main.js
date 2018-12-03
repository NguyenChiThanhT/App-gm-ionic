webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    STATIC_ASSETS_ENDPOINT: 'https://weboo.link',
    API_ENDPOINT: 'http://35.187.227.22'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_auth_api__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular modules


var AuthService = /** @class */ (function () {
    function AuthService(authApi) {
        this.authApi = authApi;
    }
    AuthService.prototype.login = function (params) {
        return this.authApi.login(params);
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        return this.authApi.logout();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_auth_api__["a" /* AuthApi */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_tbl_article_api__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular modules






var SearchService = /** @class */ (function () {
    function SearchService(storage, tblArticleApi) {
        var _this = this;
        this.storage = storage;
        this.tblArticleApi = tblArticleApi;
        this._recentSearchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.recentSearchTerms$ = this._recentSearchTerms.asObservable();
        this.storage.get('RECENT_SEARCH_TERMS').then(function (val) {
            if (val) {
                _this.changeRecentSearchTerms(val);
            }
        });
    }
    SearchService.prototype.changeRecentSearchTerms = function (values) {
        this._recentSearchTerms.next(values);
    };
    SearchService.prototype.doSearch = function (term) {
        return this.tblArticleApi.all({ term: term });
    };
    SearchService.prototype.onSearchSuccess = function (term) {
        // Save the last 5 recent keywords
        var terms = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.chain(this._recentSearchTerms.getValue())
            .union([term])
            .takeRight(5)
            .value();
        this.storage.set('RECENT_SEARCH_TERMS', terms);
        this.changeRecentSearchTerms(terms);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__http_tbl_article_api__["a" /* TblArticleApi */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular modules

var TemplateService = /** @class */ (function () {
    function TemplateService() {
    }
    TemplateService.prototype.handleErrorAvatar = function ($event) {
        $event.target.src = '../../../assets/imgs/logo.png';
    };
    TemplateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TemplateService);
    return TemplateService;
}());

//# sourceMappingURL=template.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.account = {
            email: '',
            password: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        this.authService.currentUser = { name: 'Dang' };
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__["a" /* TabsPage */], {}, { animate: true, direction: 'forward' });
        // this.authService.login(this.account)
        //   .subscribe((res: any) => {
        //     this.authService.currentUser = res.data;
        //   });
    };
    LoginPage.prototype.goToSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/login/login.page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons>\n      <button ion-button icon-only>\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title>\n      ログイン\n    </ion-title>\n\n    <ion-buttons end>\n      <button class="btn-registry" ion-button (click)="goToSignUpPage()">\n        会員登録\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding no-bounce>\n  <form (submit)="doLogin()">\n    <ion-list>\n\n      <ion-item>\n        <ion-label fixed>メールアドレス</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email" placeholder="山田太郎"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>パスワード</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="英数字のパスワード"></ion-input>\n      </ion-item>\n\n      <div class="contain-button">\n        <button class="btn btn-signin" ion-button block>ログイン</button>\n        <button class="btn btn-forgot-pwd" ion-button block outline>パスワードをお忘れの方</button>\n      </div>\n    </ion-list>\n  </form>\n\n\n  <div class="contain-button">\n    <section-title text="SNSでログイン"></section-title>\n    <btn-twitter></btn-twitter>\n    <btn-facebook></btn-facebook>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/login/login.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_services_auth_service__["a" /* AuthService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.page.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_page__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_page__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_post_select_new_post_select_page__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_page_page__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_6__new_post_select_new_post_select_page__["a" /* NewPostSelectPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__search_search_page__["a" /* SearchPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_7__favorite_favorite_page_page__["a" /* FavoritePage */];
    }
    TabsPage.prototype.ionViewCanEnter = function () {
        if (this.authService.currentUser) {
            console.log('logged in');
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login_page__["a" /* LoginPage */]);
        }
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/tabs/tabs.page.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="ホーム" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="投稿" tabIcon="create"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="見つける" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="お気に入り" tabIcon="heart"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/tabs/tabs.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_services_auth_service__["a" /* AuthService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.page.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_member_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_page__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileDetailPage = /** @class */ (function () {
    function ProfileDetailPage(navCtrl, navParams, tblMemberApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tblMemberApi = tblMemberApi;
        this.avatarSrc = '../../../assets/imgs/logo.png';
        this.userInfo = {
            id: 0,
            type: '',
            attributes: {
                member_name: '',
                hp_url: '',
                instagram_url: '',
                twitter_url: '',
                facebook_url: '',
                note: '',
            }
        };
    }
    ProfileDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.tblMemberApi.getCurrent().subscribe(function (res) {
            _this.userInfo = res.data;
            _this.avatarSrc = 'https://weboo.link/images/member_image/' + _this.userInfo.id + '.jpg';
            _this.memberType = 1;
        });
    };
    ProfileDetailPage.prototype.goBack = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    ProfileDetailPage.prototype.goToProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile_page__["a" /* ProfilePage */]);
    };
    ProfileDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-detail',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile-detail/profile-detail.page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{userInfo.attributes.member_name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="profile-setting__head">\n    <div class="profile-detail">\n      <img class="avatar avatar__round avatar__medium" src="{{ avatarSrc }}">\n      <a (click)="goToProfile()" class="button button-trans">\n        マイページを見る\n      </a>\n    </div>\n  </div>\n\n  <div class="profile-setting__body">\n    <div class="setting-group">\n      <div class="setting-group__head">\n        アカウント\n      </div>\n      <div class="setting-group__body">\n        <ion-list>\n          <button ion-item class="setting-item">\n            プロフィール変更\n          </button>\n\n          <button ion-item class="setting-item">\n            メルマガ受信設定\n          </button>\n\n          <button ion-item class="setting-item">\n            メールアドレス変更\n          </button>\n\n          <button ion-item class="setting-item">\n            {{ item }}\n          </button>\n\n          <button ion-item class="setting-item">\n            {{ item }}\n          </button>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n  <div class="profile-setting__footer"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile-detail/profile-detail.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_member_api__["a" /* TblMemberApi */]])
    ], ProfileDetailPage);
    return ProfileDetailPage;
}());

//# sourceMappingURL=profile-detail.page.js.map

/***/ }),

/***/ 129:
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
webpackEmptyAsyncContext.id = 129;

/***/ }),

/***/ 171:
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
webpackEmptyAsyncContext.id = 171;

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblCategoryApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TblCategoryApi = /** @class */ (function () {
    function TblCategoryApi(api) {
        this.api = api;
        this.resourceName = 'tbl_categories';
    }
    TblCategoryApi.prototype.all = function (params) {
        return this.api.get(this.resourceName, params);
    };
    TblCategoryApi.prototype.findById = function (id, params) {
        return this.api.get(this.resourceName + "/" + id, params);
    };
    TblCategoryApi.prototype.update = function (id, params) {
        return this.api.put(this.resourceName + "/" + id, params);
    };
    TblCategoryApi.prototype.delete = function (id, params) {
        return this.api.delete(this.resourceName + "/" + id, params);
    };
    TblCategoryApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */]])
    ], TblCategoryApi);
    return TblCategoryApi;
}());

//# sourceMappingURL=tbl-category.api.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthApi = /** @class */ (function () {
    function AuthApi(api) {
        this.api = api;
        this.resourceName = 'auth';
    }
    AuthApi.prototype.register = function (params) {
        return this.api.post(this.resourceName + "/sign_up", params);
    };
    AuthApi.prototype.login = function (params) {
        return this.api.post(this.resourceName + "/sign_in", params);
    };
    AuthApi.prototype.logout = function () {
        return this.api.delete(this.resourceName + "/sign_out");
    };
    AuthApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */]])
    ], AuthApi);
    return AuthApi;
}());

//# sourceMappingURL=auth.api.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblPickupApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TblPickupApi = /** @class */ (function () {
    function TblPickupApi(api) {
        this.api = api;
        this.resourceName = 'tbl_pickups';
    }
    TblPickupApi.prototype.all = function (params) {
        return this.api.get(this.resourceName, params);
    };
    TblPickupApi.prototype.findById = function (id, params) {
        return this.api.get(this.resourceName + "/" + id, params);
    };
    TblPickupApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */]])
    ], TblPickupApi);
    return TblPickupApi;
}());

//# sourceMappingURL=tbl-pickup.api.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashPage = /** @class */ (function () {
    function SplashPage(navCtrl, navParams, splashScreen, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splashScreen = splashScreen;
        this.viewCtrl = viewCtrl;
    }
    SplashPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplashPage');
    };
    SplashPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.splashScreen.hide();
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 4000);
    };
    SplashPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splash',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/splash/splash.page.html"*/'<ion-content>\n  <div class="wrapper">\n    <img class="logo" src="../../assets/imgs/logo.png" alt="logo">\n    <p>\n      <span class="letter">自</span>\n      <span class="letter">分</span>\n      <span class="letter">で</span>\n      <span class="letter">つ</span>\n      <span class="letter">く</span>\n      <span class="letter">る</span>\n      <span class="letter">。</span>\n    </p>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/splash/splash.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SplashPage);
    return SplashPage;
}());

//# sourceMappingURL=splash.page.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_category_api__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_http_tbl_article_api__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_services_helpers_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_http_tbl_pickup_api__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, tblCategoryApi, tblArticleApi, tblPickupApi, helpersService) {
        this.navCtrl = navCtrl;
        this.tblCategoryApi = tblCategoryApi;
        this.tblArticleApi = tblArticleApi;
        this.tblPickupApi = tblPickupApi;
        this.helpersService = helpersService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.segmentItems = [
            {
                value: "ranking",
                label: "ランキング"
            },
            {
                value: "pickup",
                label: "特集一覧"
            }
        ];
        this.articleLayout = 'ranking';
        this.articles = [];
        this.pickups = [];
        this.searchTerm = '';
        this.didSearch = false;
        // Fetch article for 1st tab (ranking)
        this.selectedSegmentItem = this.segmentItems[0];
        this.onSegmentItemSelected(this.selectedSegmentItem);
        // Fetch list of categories and append it to the list of segments
        this.tblCategoryApi.all().subscribe(function (res) {
            if (res.data.length > 0) {
                res.data.map(function (o) {
                    _this.segmentItems.push({
                        value: o.id,
                        label: o.attributes.category_name
                    });
                });
            }
        });
    };
    HomePage.prototype.onSegmentItemSelected = function (item) {
        this.selectedSegmentItem = item;
        if (item.value === 'ranking') {
            this.articleLayout = 'ranking';
            this.getArticlesByRanking();
        }
        else if (item.value === 'pickup') {
            this.articleLayout = 'pickup';
            this.getArticlesByPickUp();
        }
        else {
            this.articleLayout = 'list';
            this.getArticlesByCategoryId(item.value);
        }
    };
    HomePage.prototype.goToProfilePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile_page__["a" /* ProfilePage */]);
    };
    HomePage.prototype.onSearchSuccess = function (res) {
        this.didSearch = true;
        if (this.isViewingPickupContent) {
            this.pickups = this.helpersService.transformPickupApiResults(res);
        }
        else {
            this.articles = this.helpersService.transformArticleApiResults(res);
        }
    };
    Object.defineProperty(HomePage.prototype, "isViewingPickupContent", {
        get: function () {
            return this.articleLayout === 'pickup';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomePage.prototype, "hasResults", {
        get: function () {
            return this.articles.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    HomePage.prototype.getArticlesByRanking = function () {
        var _this = this;
        this.tblArticleApi.findByRanking({ per_page: 20 })
            .subscribe(function (res) { return _this.onSearchSuccess(res); });
    };
    HomePage.prototype.getArticlesByPickUp = function () {
        var _this = this;
        this.tblPickupApi.all()
            .subscribe(function (res) { return _this.onSearchSuccess(res); });
    };
    HomePage.prototype.getArticlesByCategoryId = function (categoryId) {
        var _this = this;
        this.tblArticleApi.all({ tbl_category_id: categoryId, per_page: 100 })
            .subscribe(function (res) { return _this.onSearchSuccess(res); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <top-search-bar (onSearchSuccess)="onSearchSuccess($event)"></top-search-bar>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToProfilePage()">\n        <ion-icon name="contact"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <scrollable-segment [items]="segmentItems" (onIonSelect)="onSegmentItemSelected($event)"></scrollable-segment>\n\n  <article-list *ngIf="!isViewingPickupContent" [articles]="articles" [layout]="articleLayout"></article-list>\n\n  <!-- Pickup content  -->\n  <div *ngIf="isViewingPickupContent">\n    <ion-slides [pager]="true" [loop]="true" [centeredSlides]="true">\n      <ion-slide style="background-color: green">\n        <h2>Slide 1</h2>\n      </ion-slide>\n\n      <ion-slide style="background-color: blue">\n        <h2>Slide 2</h2>\n      </ion-slide>\n\n      <ion-slide style="background-color: red">\n        <h2>Slide 3</h2>\n      </ion-slide>\n\n      <ion-item-sliding></ion-item-sliding>\n    </ion-slides>\n\n    <!-- Popular keywords -->\n    <section-title text="注目のキーワード"></section-title>\n\n    <!-- Pickup list -->\n    <section-title text="ピックアップコンテンツ"></section-title>\n    <pickup-list [pickups]="pickups"></pickup-list>\n  </div>\n\n  <search-no-results *ngIf="didSearch && !hasResults"></search-no-results>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_category_api__["a" /* TblCategoryApi */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_http_tbl_article_api__["a" /* TblArticleApi */],
            __WEBPACK_IMPORTED_MODULE_6__app_core_http_tbl_pickup_api__["a" /* TblPickupApi */],
            __WEBPACK_IMPORTED_MODULE_5__app_core_services_helpers_service__["a" /* HelpersService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTimelinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_member_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_detail_profile_detail_page__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_services_template_service__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileTimelinePage = /** @class */ (function () {
    function ProfileTimelinePage(navCtrl, navParams, tblMemberApi, templateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tblMemberApi = tblMemberApi;
        this.templateService = templateService;
        this.avatarSrc = '../../../assets/imgs/logo.png';
        this.items = [
            'Temp data for post 1',
            'Temp data for post 2',
            'Temp data for post 3',
            'Temp data for post 4',
            'Temp data for post 5',
            'Temp data for post 6',
        ];
        this.userInfo = {
            id: 0,
            type: '',
            attributes: {
                member_name: '',
                hp_url: '',
                instagram_url: '',
                twitter_url: '',
                facebook_url: '',
                note: '',
            }
        };
        this.memberType = 0;
        this.segmentItems = [
            { value: 0, label: 'Posts' },
            { value: 1, label: 'Followers' },
            { value: 2, label: 'Followed' }
        ];
        this.timelineTab = 'posts';
    }
    ProfileTimelinePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.navParams.data.userID) {
            this.tblMemberApi.findById(this.navParams.data.userID).subscribe(function (res) {
                _this.userInfo = res.data;
                _this.avatarSrc = 'https://weboo.link/images/member_image/' + _this.userInfo.id + '.jpg';
                _this.memberType = 2;
                _this.getAuthorRelatedInformation(_this.userInfo.id);
            });
        }
        else {
            this.tblMemberApi.getCurrent().subscribe(function (res) {
                _this.userInfo = res.data;
                _this.avatarSrc = 'https://weboo.link/images/member_image/' + _this.userInfo.id + '.jpg';
                _this.memberType = 1;
                _this.getAuthorRelatedInformation(_this.userInfo.id);
            });
        }
    };
    ProfileTimelinePage.prototype.getAuthorRelatedInformation = function (ID) {
        var _this = this;
        this.tblMemberApi.getFollowersbyId(ID).subscribe(function (res) {
            _this.followers = res.data.map(function (data) {
                return {
                    id: data.attributes.from_id,
                    name: data.attributes.follower_member.data.attributes.member_name,
                    avatar: "https://weboo.link/images/member_image/" + data.attributes.from_id + ".jpg",
                    followUser: true,
                    loading: false,
                };
            });
            console.log('followers of current user: ', res, 'compare to ', _this.followers);
        });
        this.tblMemberApi.getFollowingsbyId(ID).subscribe(function (res) {
            _this.followings = res.data.map(function (data) {
                return {
                    id: data.attributes.to_id,
                    avatar: "https://weboo.link/images/member_image/" + data.attributes.to_id + ".jpg",
                    name: data.attributes.following_member.data.attributes.member_name,
                    followUser: true,
                    loading: false,
                };
            });
            console.log('followings of current user: ', res, 'compare to', _this.followings);
        });
    };
    ProfileTimelinePage.prototype.segmentChanged = function ($event) {
        console.log('Hello From Segment Change');
    };
    ProfileTimelinePage.prototype.goToProfilePage = function (id) {
        if (id) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile_page__["a" /* ProfilePage */], { userID: id });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile_page__["a" /* ProfilePage */]);
        }
    };
    ProfileTimelinePage.prototype.gotoDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_detail_profile_detail_page__["a" /* ProfileDetailPage */]);
    };
    ProfileTimelinePage.prototype.goBack = function () {
        if (this.navCtrl.canGoBack()) {
            this.navCtrl.pop();
        }
    };
    ProfileTimelinePage.prototype.followAction = function ($event, array, item) {
        console.log($event, array, item);
        // The target member has been followed by
        item.loading = true;
        if (item.followUser) {
            // Unfollow target
            this.tblMemberApi.unfollowUser(item.id).subscribe(function (res) {
                console.log('unfollowed user with the id =' + item.id, res);
                item.loading = false;
                item.followUser = !item.followUser;
            });
        }
        else {
            // Re-follow / Follow Target
            this.tblMemberApi.followUser(item.id).subscribe(function (res) {
                console.log('followed user with the id =' + item.id, res);
                item.loading = false;
                item.followUser = !item.followUser;
            });
        }
    };
    ProfileTimelinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timeline-profile',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile-timeline/profile-timeline.page.html"*/'<ion-content>\n  <div class="profile__container">\n    <!-- Top Section -->\n    <div class="profile__top-section" padding>\n      <div class="profile_top-section__left">\n        <button (click)="goBack()" *ngIf="navCtrl.canGoBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </div>\n      <div class="profile_top-section__right">\n        <button (click)="gotoDetail()" *ngIf="memberType == 1">\n          <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- Main Content -->\n    <div class="profile__main-content text-center">\n\n      <!-- Member Avatar Image -->\n      <div class="profile__member-avatar">\n        <img class="avatar avatar__round avatar__medium" src="{{ avatarSrc }}" (error)="imageErrorHandling($event)"/>\n      </div>\n\n\n      <!-- Member Name -->\n      <div class="profile__member-name">\n        <h3>\n          {{ userInfo.attributes.member_name ? userInfo.attributes.member_name: \'\' }}\n        </h3>\n        <button ion-button class="btn btn-default" *ngIf="memberType === 2">\n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          フォローする\n        </button>\n      </div>\n\n\n      <!-- Member Social Network List -->\n      <div class="profile__member-social-network">\n        <button class="social-link" (click)="openSocial( userInfo.attributes.facebook_url )">\n          <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n        </button>\n        <button class="social-link" (click)="openSocial( userInfo.attributes.twitter_url )">\n          <ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon>\n        </button>\n        <button class="social-link" (click)="openSocial( userInfo.attributes.instagram_url )">\n          <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n        </button>\n      </div>\n\n      <hr class="bg-white">\n\n\n      <!-- Member Status -->\n      <div class="profile__member-status">\n        <p>\n          {{ userInfo.attributes.note }}\n        </p>\n      </div>\n\n\n      <!-- Right Action -->\n      <div class="profile__right-action">\n        <button (click)="goToProfilePage()">\n          <ion-icon ios="ios-arrow-forward" md="md-arrow-forward"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Tabs Controller -->\n  <div class="profile-timeline__tab">\n    <ion-segment [(ngModel)]="timelineTab" color="primary" (ionChange)="segmentChanged($event)">\n      <ion-segment-button value="posts">\n        posts\n      </ion-segment-button>\n      <ion-segment-button value="followers">\n        followers\n      </ion-segment-button>\n      <ion-segment-button value="following">\n        following\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n\n  <!-- Tab Content -->\n  <!-- TODO - Make reuseable component of those lists below -->\n  <div class="segments-content">\n    <!-- List of recent posts -->\n    <ion-list no-lines *ngIf="timelineTab == \'posts\'">\n      <button ion-item *ngFor="let item of items">\n        {{ item }}\n      </button>\n    </ion-list>\n\n\n    <!-- Follower List -->\n    <ion-list no-lines *ngIf="timelineTab == \'followers\'">\n      <member-item *ngFor="let item of followers" [memberDetail]="item"></member-item>\n    </ion-list>\n\n\n    <!-- Following List -->\n    <ion-list no-lines *ngIf="timelineTab == \'following\'">\n      <member-item *ngFor="let item of followings" [memberDetail]="item"></member-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile-timeline/profile-timeline.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_http_tbl_member_api__["a" /* TblMemberApi */],
            __WEBPACK_IMPORTED_MODULE_5__app_core_services_template_service__["a" /* TemplateService */]])
    ], ProfileTimelinePage);
    return ProfileTimelinePage;
}());

//# sourceMappingURL=profile-timeline.page.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_search_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_services_helpers_service__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, searchService, helpersService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchService = searchService;
        this.helpersService = helpersService;
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SearchPage');
        this.articles = [];
        this.didSearch = false;
        this.searchService.recentSearchTerms$.subscribe(function (value) { return _this.recentSearchTerms = value; });
        // TODO:
        // 1. Search theo tu tim kiem gan day
        // 2. Search theo tu tim kiem pho bien
    };
    SearchPage.prototype.onSearchSuccess = function (outputData) {
        this.didSearch = true;
        this.articles = this.helpersService.transformArticleApiResults(outputData);
    };
    SearchPage.prototype.onSearchTermEmpty = function () {
        this.didSearch = false;
        this.articles = [];
    };
    SearchPage.prototype.doSearch = function (term) {
        this.searchTerm = term;
    };
    Object.defineProperty(SearchPage.prototype, "hasResults", {
        get: function () {
            return this.articles.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/search/search.page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <top-search-bar (onSearchSuccess)="onSearchSuccess($event)"\n                    (onSearchTermEmpty)="onSearchTermEmpty($event)"\n                    [searchTerm]="searchTerm">\n    </top-search-bar>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <!-- Search by popular keywords & recent keywords -->\n  <div *ngIf="!didSearch">\n    <!-- Popular keywords -->\n    <section-title text="人気検索ワード"></section-title>\n\n    <!-- Recent keywords -->\n    <section-title text="最近検索したワード"></section-title>\n    <ion-list>\n      <button *ngFor="let t of recentSearchTerms?.slice().reverse()"\n              ion-item\n              (click)="doSearch(t)">\n        {{t}}\n      </button>\n    </ion-list>\n  </div>\n\n  <!-- Search results -->\n  <div *ngIf="didSearch">\n    <article-list *ngIf="hasResults" [articles]="articles"></article-list>\n\n    <search-no-results *ngIf="!hasResults"></search-no-results>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/search/search.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__app_core_services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__app_core_services_helpers_service__["a" /* HelpersService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.page.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostSelectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewPostSelectPage = /** @class */ (function () {
    function NewPostSelectPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewPostSelectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPostSelectPage');
    };
    NewPostSelectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-post-select',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/new-post-select/new-post-select.page.html"*/'<ion-content>\n  <div class="container">\n    <div class="main-content">\n      <!-- Go to normal new post page -->\n      <a class="button circle-button">\n        <img src="../../assets/icon/moutain.svg">\n      </a>\n\n      <!-- Go to select picture page -->\n      <a class="button circle-button">\n        <img src="../../assets/icon/pencil.svg">\n      </a>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/new-post-select/new-post-select.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], NewPostSelectPage);
    return NewPostSelectPage;
}());

//# sourceMappingURL=new-post-select.page.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_services_helpers_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_http_tbl_article_api__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, navParams, helpersService, tblArticleApi, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helpersService = helpersService;
        this.tblArticleApi = tblArticleApi;
        this.storage = storage;
        this.selectedSegment = 'favorite';
        this.searchTerm = '';
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
        this.articles = [];
        this.didSearch = false;
        this.getArticlesByRanking();
        this.getStorageArticles();
    };
    FavoritePage.prototype.onSearchTermChanged = function () {
        this.didSearch = true;
        var val = this.searchTerm;
        if (val && val.trim() != '') {
            this.articles = this.articlesTemp.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.getArticlesByRanking();
        }
    };
    // call api test
    FavoritePage.prototype.getArticlesByRanking = function () {
        var _this = this;
        this.tblArticleApi.findByRanking({ per_page: 20 })
            .subscribe(function (res) {
            _this.articles = _this.helpersService.transformArticleApiResults(res);
            _this.storage.set("SET-ARTICLES", _this.articles);
        });
    };
    // get a key/value pair storage
    FavoritePage.prototype.getStorageArticles = function () {
        var _this = this;
        this.storage.get("SET-ARTICLES").then(function (val) {
            _this.articlesTemp = val;
        });
    };
    Object.defineProperty(FavoritePage.prototype, "hasResults", {
        get: function () {
            return this.articles.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/favorite/favorite-page.page.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title class="text-center" color="pink-red">お気に入り</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-segment [(ngModel)]="selectedSegment" disabled>\n    <ion-segment-button value="favorite">\n      記事\n    </ion-segment-button>\n    <ion-segment-button value="hiden"></ion-segment-button>\n  </ion-segment>\n  <ion-searchbar\n    placeholder="大阪"\n    cancelButtonText="キャンセル"\n    [(ngModel)]="searchTerm"\n    [showCancelButton]="true"\n    (ionInput)="onSearchTermChanged()"\n    >\n  </ion-searchbar>\n  <div [ngSwitch]="selectedSegment">\n    <ion-list *ngSwitchCase="\'favorite\'">\n      <article-list [articles]="articles" [layout]="articleLayout"></article-list>\n    </ion-list>\n  </div>\n  <search-no-results *ngIf="didSearch && !hasResults"></search-no-results>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/favorite/favorite-page.page.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__app_core_services_helpers_service__["a" /* HelpersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_core_services_helpers_service__["a" /* HelpersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_core_http_tbl_article_api__["a" /* TblArticleApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_core_http_tbl_article_api__["a" /* TblArticleApi */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], FavoritePage);
    return FavoritePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=favorite-page.page.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_first_page_first_page_module__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_module__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_profile_detail_profile_detail_module__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_profile_timeline_profile_timline_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_splash_splash_module__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_post_select_new_post_select_module__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_favorite_favorite_page_module__ = __webpack_require__(334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Pages module











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__["a" /* HomePageModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile_module__["a" /* ProfilePageModule */],
                __WEBPACK_IMPORTED_MODULE_15__pages_profile_detail_profile_detail_module__["a" /* ProfileDetailPageModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_profile_timeline_profile_timline_module__["a" /* ProfileTimelinePageModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_module__["a" /* LoginPageModule */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs_module__["a" /* TabsPageModule */],
                __WEBPACK_IMPORTED_MODULE_12__pages_first_page_first_page_module__["a" /* FirstPageModule */],
                __WEBPACK_IMPORTED_MODULE_17__pages_splash_splash_module__["a" /* SplashPageModule */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search_module__["a" /* SearchPageModule */],
                __WEBPACK_IMPORTED_MODULE_18__pages_new_post_select_new_post_select_module__["a" /* NewPostSelectPageModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_favorite_favorite_page_module__["a" /* FavoritePageModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_scrollable_segment_scrollable_segment_component__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_section_title_section_title__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_top_search_bar_top_search_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_article_list_article_list__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_search_no_results_search_no_results__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_ellipsis_pipe__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_member_item_member_item__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_mini_post_list_mini_post_list_component__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_btn_facebook_btn_facebook__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_btn_twitter_btn_twitter__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_pickup_list_pickup_list__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_scrollable_segment_scrollable_segment_component__["a" /* ScrollableSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_section_title_section_title__["a" /* SectionTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_top_search_bar_top_search_bar__["a" /* TopSearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_article_list_article_list__["a" /* ArticleListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_search_no_results_search_no_results__["a" /* SearchNoResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_member_item_member_item__["a" /* MemberItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_ellipsis_pipe__["a" /* EllipsisPipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_mini_post_list_mini_post_list_component__["a" /* MiniPostListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_btn_facebook_btn_facebook__["a" /* BtnFacebookComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_btn_twitter_btn_twitter__["a" /* BtnTwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pickup_list_pickup_list__["a" /* PickupListComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_scrollable_segment_scrollable_segment_component__["a" /* ScrollableSegmentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_section_title_section_title__["a" /* SectionTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_top_search_bar_top_search_bar__["a" /* TopSearchBarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_article_list_article_list__["a" /* ArticleListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_search_no_results_search_no_results__["a" /* SearchNoResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_member_item_member_item__["a" /* MemberItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_ellipsis_pipe__["a" /* EllipsisPipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_mini_post_list_mini_post_list_component__["a" /* MiniPostListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_btn_facebook_btn_facebook__["a" /* BtnFacebookComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_btn_twitter_btn_twitter__["a" /* BtnTwitterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_pickup_list_pickup_list__["a" /* PickupListComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interceptors_api_interceptor__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_api__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_tbl_category_api__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_tbl_article_api__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__http_tbl_member_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_auth_api__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_helpers_service__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_search_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_template_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__http_tbl_pickup_api__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular modules



// Api










var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__http_api__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_4__http_tbl_category_api__["a" /* TblCategoryApi */],
                __WEBPACK_IMPORTED_MODULE_5__http_tbl_article_api__["a" /* TblArticleApi */],
                __WEBPACK_IMPORTED_MODULE_6__http_tbl_member_api__["a" /* TblMemberApi */],
                __WEBPACK_IMPORTED_MODULE_12__http_tbl_pickup_api__["a" /* TblPickupApi */],
                __WEBPACK_IMPORTED_MODULE_7__http_auth_api__["a" /* AuthApi */],
                __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_9__services_helpers_service__["a" /* HelpersService */],
                __WEBPACK_IMPORTED_MODULE_10__services_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_11__services_template_service__["a" /* TemplateService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_2__interceptors_api_interceptor__["a" /* ApiInterceptor */], multi: true },
            ]
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({}),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* SkipSelf */])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.maxRequestId = 0;
        this.requestUniqueIds = [];
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var requestId = this.showLoadingModal();
        // const accessToken = localStorage.getItem('accessToken');
        var clonedReq = req.clone();
        return next.handle(clonedReq).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]) {
                _this.hideLoadingModal(requestId);
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401 || err.status === 403) {
                    // Clean up the store & redirect to login page
                    // this.userService.cleanUp();
                }
            }
        });
    };
    ApiInterceptor.prototype.showLoadingModal = function () {
        if (!this.loadingInstance) {
            this.loadingInstance = this.loadingCtrl.create({
                spinner: 'crescent',
                duration: 3000
            });
            this.loadingInstance.present();
        }
        var requestId = this.maxRequestId++;
        this.requestUniqueIds.push(requestId);
        return requestId;
    };
    ApiInterceptor.prototype.hideLoadingModal = function (requestId) {
        this.requestUniqueIds = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.filter(this.requestUniqueIds, function (v) {
            return v != requestId;
        });
        if (this.loadingInstance && this.requestUniqueIds.length === 0) {
            this.loadingInstance.dismiss();
            this.loadingInstance = null;
        }
    };
    ApiInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());

//# sourceMappingURL=api.interceptor.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_splash_splash_page__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login_page__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Pages



var MyApp = /** @class */ (function () {
    function MyApp(platform, nativeStorage, statusBar, splashScreen, modalCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login_page__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            nativeStorage.getItem('twitter_user')
                .then(function (data) {
                console.log('data', data);
            }, function (error) {
                console.log('error', error);
            });
            statusBar.styleDefault();
            var splash = modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_splash_splash_page__["a" /* SplashPage */]);
            splash.present();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/app.component.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/app.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>signup</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollableSegmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollableSegmentComponent = /** @class */ (function () {
    function ScrollableSegmentComponent() {
        this.onIonSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ScrollableSegmentComponent.prototype.ngOnInit = function () {
    };
    ScrollableSegmentComponent.prototype.selectItem = function (item) {
        this.onIonSelect.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ScrollableSegmentComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], ScrollableSegmentComponent.prototype, "onIonSelect", void 0);
    ScrollableSegmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'scrollable-segment',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/scrollable-segment/scrollable-segment.component.html"*/'<ion-segment no-padding color="primary">\n  <ion-segment-button *ngFor="let i of items" [value]="i.value"\n                      (ionSelect)="selectItem(i)">\n    {{i.label}}\n  </ion-segment-button>\n</ion-segment>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/scrollable-segment/scrollable-segment.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], ScrollableSegmentComponent);
    return ScrollableSegmentComponent;
}());

//# sourceMappingURL=scrollable-segment.component.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionTitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SectionTitleComponent = /** @class */ (function () {
    function SectionTitleComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SectionTitleComponent.prototype, "text", void 0);
    SectionTitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'section-title',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/section-title/section-title.html"*/'<h3>\n  <span class="line-center">{{text}}</span>\n</h3>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/section-title/section-title.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SectionTitleComponent);
    return SectionTitleComponent;
}());

//# sourceMappingURL=section-title.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopSearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_search_service__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopSearchBarComponent = /** @class */ (function () {
    function TopSearchBarComponent(searchService) {
        this.searchService = searchService;
        this.onSearchSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSearchTermEmpty = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello TopSearchBarComponent Component');
    }
    /*
     * Will run everytime the input value changes
     */
    TopSearchBarComponent.prototype.ngOnChanges = function (changes) {
        this.searchTerm = changes.searchTerm.currentValue;
        this.onSearchTermChanged();
    };
    TopSearchBarComponent.prototype.onSearchTermChanged = function () {
        var _this = this;
        if (!this.searchTerm) {
            this.onSearchTermEmpty.emit();
            return false;
        }
        this.searchService.doSearch(this.searchTerm).subscribe(function (res) {
            _this.searchService.onSearchSuccess(_this.searchTerm);
            _this.onSearchSuccess.emit(res);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TopSearchBarComponent.prototype, "searchTerm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TopSearchBarComponent.prototype, "onSearchSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], TopSearchBarComponent.prototype, "onSearchTermEmpty", void 0);
    TopSearchBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'top-search-bar',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/top-search-bar/top-search-bar.html"*/'<ion-searchbar\n  placeholder="記事を探す"\n  cancelButtonText="キャンセル"\n  debounce="300"\n  [(ngModel)]="searchTerm"\n  [showCancelButton]="true"\n  (ionInput)="onSearchTermChanged()">\n</ion-searchbar>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/top-search-bar/top-search-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_search_service__["a" /* SearchService */]])
    ], TopSearchBarComponent);
    return TopSearchBarComponent;
}());

//# sourceMappingURL=top-search-bar.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent() {
        this.staticAssetsEndpoint = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].STATIC_ASSETS_ENDPOINT;
        console.log('Hello ArticleListComponent Component');
    }
    ArticleListComponent.prototype.ngOnInit = function () {
        this.rankingLabelColors = [
            '#D8C36C',
            '#C2C3C6',
            '#9D6A6F',
            '#111'
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ArticleListComponent.prototype, "layout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ArticleListComponent.prototype, "articles", void 0);
    ArticleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'article-list',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/article-list/article-list.html"*/'<ion-grid *ngIf="articles">\n  <ion-row *ngFor="let a of articles; index as i">\n    <ion-col col-4>\n      <span *ngIf="layout === \'ranking\'"\n             [style.backgroundColor]="i < 4 ? rankingLabelColors[i] : rankingLabelColors[3] "\n             class="ranking-label">\n        {{i+1}}\n      </span>\n      <img src="{{staticAssetsEndpoint}}{{a.image_url}}"/>\n    </ion-col>\n\n    <ion-col col-8>\n      <h2>{{a.title | ellipsis:30}}</h2>\n      <small class="author-name">{{a.author?.member_name}}</small>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/article-list/article-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ArticleListComponent);
    return ArticleListComponent;
}());

//# sourceMappingURL=article-list.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchNoResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the SearchNoResultsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SearchNoResultsComponent = /** @class */ (function () {
    function SearchNoResultsComponent() {
        console.log('Hello SearchNoResultsComponent Component');
        this.text = 'Hello World';
    }
    SearchNoResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'search-no-results',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/search-no-results/search-no-results.html"*/'<p text-center>\n  <img src="../../assets/imgs/search/no-result.png"><br>\n  “○○○●○○○●”<br>\n  に該当する記事はありませんでした。<br>\n  条件を変更して再度検索してください。\n</p>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/search-no-results/search-no-results.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SearchNoResultsComponent);
    return SearchNoResultsComponent;
}());

//# sourceMappingURL=search-no-results.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EllipsisPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EllipsisPipe = /** @class */ (function () {
    function EllipsisPipe() {
    }
    EllipsisPipe.prototype.transform = function (val, args) {
        if (!args) {
            return val;
        }
        if (val.length > args) {
            return val.substring(0, args) + '...';
        }
        else {
            return val;
        }
    };
    EllipsisPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'ellipsis'
        })
    ], EllipsisPipe);
    return EllipsisPipe;
}());

//# sourceMappingURL=ellipsis.pipe.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_template_service__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_http_tbl_member_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MemberItemComponent = /** @class */ (function () {
    function MemberItemComponent(templateService, tblMemberApi, navCtrl) {
        this.templateService = templateService;
        this.tblMemberApi = tblMemberApi;
        this.navCtrl = navCtrl;
        console.log('Hello ArticleListComponent Component');
        console.log(this.memberDetail);
    }
    MemberItemComponent.prototype.followAction = function ($event, item) {
        var _this = this;
        this.memberDetail.loading = true;
        if (this.memberDetail.followUser) {
            // Unfollow target
            this.tblMemberApi.unfollowUser(this.memberDetail.id).subscribe(function (res) {
                console.log('unfollowed user with the id =' + item.id, res);
                _this.memberDetail.loading = false;
                _this.memberDetail.followUser = !item.followUser;
            });
        }
        else {
            // Re-follow / Follow Target
            this.tblMemberApi.followUser(this.memberDetail.id).subscribe(function (res) {
                console.log('followed user with the id =' + item.id, res);
                _this.memberDetail.loading = false;
                _this.memberDetail.followUser = !item.followUser;
            });
        }
    };
    MemberItemComponent.prototype.goToProfilePage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_profile_profile_page__["a" /* ProfilePage */], { userID: id });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MemberItemComponent.prototype, "memberDetail", void 0);
    MemberItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'member-item',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/member-item/member-item.html"*/'<div ion-item class="member-item">\n  <a (click)="goToProfilePage(memberDetail.id)" class="author-detail">\n    <img src="{{ memberDetail.avatar }}" class="avatar avatar__small avatar__round"\n         (error)=" templateService.handleErrorAvatar($event) ">\n    <p class="author-name">{{ memberDetail.name  }}</p>\n  </a>\n  <a [ngClass]="{ \'button follow-button\': true ,\'followed\': memberDetail.followUser }"\n     (click)="followAction($event, memberDetail)">\n    <span *ngIf="!memberDetail.loading">フォローする</span>\n    <ion-spinner name="crescent" *ngIf="memberDetail.loading"></ion-spinner>\n  </a>\n</div>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/member-item/member-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_services_template_service__["a" /* TemplateService */],
            __WEBPACK_IMPORTED_MODULE_2__core_http_tbl_member_api__["a" /* TblMemberApi */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */]])
    ], MemberItemComponent);
    return MemberItemComponent;
}());

//# sourceMappingURL=member-item.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiniPostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MiniPostListComponent = /** @class */ (function () {
    function MiniPostListComponent() {
    }
    MiniPostListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], MiniPostListComponent.prototype, "posts", void 0);
    MiniPostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mini-post-list',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/mini-post-list/mini-post-list.component.html"*/''/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/mini-post-list/mini-post-list.component.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], MiniPostListComponent);
    return MiniPostListComponent;
}());

//# sourceMappingURL=mini-post-list.component.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnFacebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Facebook login

var BtnFacebookComponent = /** @class */ (function () {
    function BtnFacebookComponent(fb) {
        this.fb = fb;
    }
    // event login facebook
    BtnFacebookComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.fb.login(['public_profile'])
            .then(function (res) {
            _this.fb.api("/me", ['public_profile', 'email'])
                .then(function (res) {
                // call api registry with facebook
            })
                .catch(function (error) {
                // handle error
            });
        })
            .catch(function (e) {
            console.log('Error logging into Facebook', e);
        });
    };
    BtnFacebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'btn-facebook',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/btn-facebook/btn-facebook.html"*/'<button class="btn btn-facebook" ion-button (click)="onLoginFacebook()">\n  <img class="icon" src="../../../../assets/imgs/pages/first-page/ic_facebook.png" alt="">\n  Facebookでログイン\n</button>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/btn-facebook/btn-facebook.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_facebook__["a" /* Facebook */]])
    ], BtnFacebookComponent);
    return BtnFacebookComponent;
}());

//# sourceMappingURL=btn-facebook.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BtnTwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_twitter_connect__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BtnTwitterComponent = /** @class */ (function () {
    function BtnTwitterComponent(tw) {
        this.tw = tw;
    }
    BtnTwitterComponent.prototype.onSuccess = function (response) {
        // do something
    };
    BtnTwitterComponent.prototype.onError = function (error) {
        // handle error
    };
    BtnTwitterComponent.prototype.onLoginTwitter = function () {
        this.tw.login().then(this.onSuccess, this.onError);
    };
    BtnTwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'btn-twitter',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/btn-twitter/btn-twitter.html"*/'<button class="btn btn-twitter" ion-button (click)="onLoginTwitter()">\n  <ion-icon class="icon" ios="logo-twitter" md="logo-twitter"></ion-icon>\n  Twitterでログイン\n</button>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/btn-twitter/btn-twitter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
    ], BtnTwitterComponent);
    return BtnTwitterComponent;
}());

//# sourceMappingURL=btn-twitter.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PickupListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PickupListComponent = /** @class */ (function () {
    function PickupListComponent() {
        this.staticAssetsEndpoint = __WEBPACK_IMPORTED_MODULE_1__environment__["a" /* environment */].STATIC_ASSETS_ENDPOINT;
        console.log('Hello PickupListComponent Component');
    }
    PickupListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], PickupListComponent.prototype, "pickups", void 0);
    PickupListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pickup-list',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/pickup-list/pickup-list.html"*/'<ion-grid *ngIf="pickups">\n  <ion-row *ngFor="let p of pickups; index as i">\n    <ion-col col-12>\n      <img src="{{staticAssetsEndpoint}}{{p.image}}"/>\n      <h2>{{p.title}}</h2>\n      <p>{{p.description}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/app/shared/components/pickup-list/pickup-list.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PickupListComponent);
    return PickupListComponent;
}());

//# sourceMappingURL=pickup-list.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_page__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_page__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs_page__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs_page__["a" /* TabsPage */]),
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__first_page_page__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Share module




// Page

var FirstPageModule = /** @class */ (function () {
    function FirstPageModule() {
    }
    FirstPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__first_page_page__["a" /* FirstPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__first_page_page__["a" /* FirstPage */]),
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_twitter_connect__["a" /* TwitterConnect */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]]
        })
    ], FirstPageModule);
    return FirstPageModule;
}());

//# sourceMappingURL=first-page.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Facebook login

var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
    }
    FirstPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FirstPage');
    };
    FirstPage.prototype.onOpenWebview = function (url) {
        // Setup options
        var options = {
            zoom: 'no'
        };
        // Open url
        this.inAppBrowser.create(url, '_self', options);
    };
    FirstPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs_page__["a" /* TabsPage */]);
    };
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first-page',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/first-page/first-page.page.html"*/'<ion-content>\n  <div class="content">\n    <div class="group-image">\n      <img class="image-gr-1" src="../../assets/imgs/pages/first-page/group-1.png">\n      <img class="image-gr-2" src="../../assets/imgs/pages/first-page/group-2.png">\n      <img class="image-gr-3" src="../../assets/imgs/pages/first-page/group-3.png">\n      <img class="image-gr-4" src="../../assets/imgs/pages/first-page/group-4.png">\n    </div>\n\n    <div class="logo-slogan">\n      <img class="log" src="../../assets/imgs/logo.png" alt="logo">\n      <h1 class="title">自分でつくる。ウィーブー</h1>\n    </div>\n  </div>\n\n  <div class="group">\n    <button class="btn btn-default" ion-button (click)="goToHomePage()">利用開始</button>\n    <button class="btn btn-default" ion-button>ウィーブーログイン</button>\n\n    <!-- Button facebook, twitter -->\n    <btn-twitter></btn-twitter>\n    <btn-facebook></btn-facebook>\n\n  </div>\n\n  <div class="group group-policy">\n    <p class="policy">\n      利用を開始することて <br/>\n      <a href="#" (click)="onOpenWebview(\'https://weboo.link/legal/?sp=1\')"><strong>利用規約、</strong></a>\n      <a href="#" (click)="onOpenWebview(\'https://weboo.link/privacy/?sp=1\')"><strong>プライバシー</strong></a>ポリシーに同意するものとします。\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/first-page/first-page.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first-page.page.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_page__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_page__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_page__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_page__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_detail_page__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileDetailPageModule = /** @class */ (function () {
    function ProfileDetailPageModule() {
    }
    ProfileDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_detail_page__["a" /* ProfileDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_detail_page__["a" /* ProfileDetailPage */]),
            ],
        })
    ], ProfileDetailPageModule);
    return ProfileDetailPageModule;
}());

//# sourceMappingURL=profile-detail.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileTimelinePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_timeline_page__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileTimelinePageModule = /** @class */ (function () {
    function ProfileTimelinePageModule() {
    }
    ProfileTimelinePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_timeline_page__["a" /* ProfileTimelinePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_timeline_page__["a" /* ProfileTimelinePage */]),
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */]
            ],
        })
    ], ProfileTimelinePageModule);
    return ProfileTimelinePageModule;
}());

//# sourceMappingURL=profile-timline.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splash_page__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SplashPageModule = /** @class */ (function () {
    function SplashPageModule() {
    }
    SplashPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__splash_page__["a" /* SplashPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__splash_page__["a" /* SplashPage */]),
            ],
        })
    ], SplashPageModule);
    return SplashPageModule;
}());

//# sourceMappingURL=splash.module.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostSelectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_post_select_page__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewPostSelectPageModule = /** @class */ (function () {
    function NewPostSelectPageModule() {
    }
    NewPostSelectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_post_select_page__["a" /* NewPostSelectPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_post_select_page__["a" /* NewPostSelectPage */]),
            ],
        })
    ], NewPostSelectPageModule);
    return NewPostSelectPageModule;
}());

//# sourceMappingURL=new-post-select.module.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite_page_page__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FavoritePageModule = /** @class */ (function () {
    function FavoritePageModule() {
    }
    FavoritePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite_page_page__["a" /* FavoritePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite_page_page__["a" /* FavoritePage */]),
            ],
        })
    ], FavoritePageModule);
    return FavoritePageModule;
}());

//# sourceMappingURL=favorite-page.module.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Api is a generic REST Api handler. Set your API url first-page.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* environment */].API_ENDPOINT;
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblMemberApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TblMemberApi = /** @class */ (function () {
    function TblMemberApi(api) {
        this.api = api;
        this.resourceName = 'tbl_member';
        this.headersInfo = {
            headers: {
                authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjM0NDAwLCJleHAiOjE1NDUzNzg0OTF9.mLX8dnRQ0mJK8pZd29B3ujOrwrdYLaKEJrfQ-jWGCZo'
            }
        };
    }
    TblMemberApi.prototype.all = function (params) {
        return this.api.get(this.resourceName, params);
    };
    TblMemberApi.prototype.findById = function (id, params) {
        return this.api.get(this.resourceName + "/" + id, params, this.headersInfo);
    };
    TblMemberApi.prototype.update = function (id, params) {
        return this.api.put(this.resourceName + "/" + id, params);
    };
    TblMemberApi.prototype.delete = function (id, params) {
        return this.api.delete(this.resourceName + "/" + id, params);
    };
    TblMemberApi.prototype.getCurrent = function () {
        return this.api.get(this.resourceName + "/my_profile", {}, this.headersInfo);
    };
    TblMemberApi.prototype.getFollowersbyId = function (id, params) {
        return this.api.get(this.resourceName + "/" + id + "/get_followers_of_member", {}, this.headersInfo);
    };
    TblMemberApi.prototype.getFollowingsbyId = function (id, params) {
        return this.api.get(this.resourceName + "/" + id + "/get_following_of_member", {}, this.headersInfo);
    };
    TblMemberApi.prototype.followUser = function (id) {
        return this.api.post(this.resourceName + "/" + id + "/follow_or_unfollow?\"follow\"=true", {}, this.headersInfo);
    };
    TblMemberApi.prototype.unfollowUser = function (id) {
        return this.api.post(this.resourceName + "/" + id + "//follow_or_unfollow?\"follow\"=false", {}, this.headersInfo);
    };
    TblMemberApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */]])
    ], TblMemberApi);
    return TblMemberApi;
}());

//# sourceMappingURL=tbl-member.api.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_timeline_profile_timeline_page__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_detail_profile_detail_page__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_http_tbl_member_api__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, tblMemberApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tblMemberApi = tblMemberApi;
        this.userInfo = {
            id: 0,
            type: '',
            attributes: {
                member_name: '',
                hp_url: '',
                instagram_url: '',
                twitter_url: '',
                facebook_url: '',
                note: '',
            }
        };
        this.avatarSrc = '../../../assets/imgs/logo.png';
        /*
        * memberType value:
        * 0 _ Not Defined
        * 1 _ Current Logged In User
        * 2 _ Other User
        * */
        this.memberType = 0;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (this.navParams.data.userID) {
            this.tblMemberApi.findById(this.navParams.data.userID).subscribe(function (res) {
                console.log(res);
                _this.userInfo = res.data;
                _this.avatarSrc = 'https://weboo.link/images/member_image/' + _this.userInfo.id + '.jpg';
                _this.memberType = 2;
            });
        }
        else {
            this.tblMemberApi.getCurrent().subscribe(function (res) {
                console.log(res);
                _this.userInfo = res.data;
                _this.avatarSrc = 'https://weboo.link/images/member_image/' + _this.userInfo.id + '.jpg';
                _this.memberType = 1;
            });
        }
    };
    ProfilePage.prototype.goToTimelinePage = function (userID) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_timeline_profile_timeline_page__["a" /* ProfileTimelinePage */], { userID: userID });
    };
    ProfilePage.prototype.goToDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_detail_profile_detail_page__["a" /* ProfileDetailPage */]);
    };
    /* TODO: put this on core Module Later */
    ProfilePage.prototype.imageErrorHandling = function (err) {
        console.log('load image error');
        this.avatarSrc = '../../../assets/imgs/logo.png';
    };
    ProfilePage.prototype.openSocial = function (url) {
        console.log('social button has been clicked with the link ' + url);
    };
    ProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile/profile.page.html"*/'<ion-content>\n  <div class="profile__container">\n    <!-- Top Section -->\n    <div class="profile__top-section" padding>\n      <div class="profile_top-section__left">\n        <button (click)="goBack()" *ngIf="navCtrl.canGoBack()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </div>\n      <div class="profile_top-section__right">\n        <button (click)="goToDetailPage()" *ngIf="memberType == 1">\n          <ion-icon ios="ios-settings-outline" md="md-settings"></ion-icon>\n        </button>\n      </div>\n    </div>\n\n    <!-- Main Content -->\n    <div class="profile__main-content text-center">\n\n      <!-- Member Avatar Image -->\n      <div class="profile__member-avatar">\n        <img class="avatar avatar__round avatar__medium" src="{{ avatarSrc }}" (error)="imageErrorHandling($event)"/>\n      </div>\n\n\n      <!-- Member Name -->\n      <div class="profile__member-name">\n        <h3>\n          {{ userInfo.attributes.member_name ? userInfo.attributes.member_name: \'\' }}\n        </h3>\n        <button ion-button class="btn btn-default" *ngIf="memberType === 2">\n          <ion-icon ios="ios-person" md="md-person"></ion-icon>\n          フォローする\n        </button>\n      </div>\n\n\n      <!-- Member Social Network List -->\n      <div class="profile__member-social-network">\n        <button class="social-link" (click)="openSocial( userInfo.attributes.facebook_url )">\n          <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n        </button>\n        <button class="social-link" (click)="openSocial( userInfo.attributes.twitter_url )">\n          <ion-icon ios="logo-instagram" md="logo-instagram"></ion-icon>\n        </button>\n        <button class="social-link" (click)="openSocial( userInfo.attributes.instagram_url )">\n          <ion-icon ios="logo-twitter" md="logo-twitter"></ion-icon>\n        </button>\n      </div>\n\n      <hr class="bg-white">\n\n\n      <!-- Member Status -->\n      <div class="profile__member-status">\n        <p>\n          {{ userInfo.attributes.note }}\n        </p>\n      </div>\n\n\n      <!-- Left Action -->\n      <div class="profile__left-action">\n        <button (click)="goToTimelinePage(userInfo.id)">\n          <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nguyenchithanh/Desktop/reactnative/work/Gumi/ionic/webo/src/pages/profile/profile.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__app_core_http_tbl_member_api__["a" /* TblMemberApi */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.page.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblArticleApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TblArticleApi = /** @class */ (function () {
    function TblArticleApi(api) {
        this.api = api;
        this.resourceName = 'tbl_articles';
    }
    TblArticleApi.prototype.all = function (params) {
        return this.api.get(this.resourceName, params);
    };
    TblArticleApi.prototype.findById = function (id, params) {
        return this.api.get(this.resourceName + "/" + id, params);
    };
    TblArticleApi.prototype.update = function (id, params) {
        return this.api.put(this.resourceName + "/" + id, params);
    };
    TblArticleApi.prototype.delete = function (id, params) {
        return this.api.delete(this.resourceName + "/" + id, params);
    };
    TblArticleApi.prototype.findByRanking = function (params) {
        return this.api.get(this.resourceName + "/ranking", params);
    };
    TblArticleApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api__["a" /* Api */]])
    ], TblArticleApi);
    return TblArticleApi;
}());

//# sourceMappingURL=tbl-article.api.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular modules


var HelpersService = /** @class */ (function () {
    function HelpersService() {
    }
    HelpersService.prototype.transformArticleApiResults = function (res) {
        var _this = this;
        return res.data.map(function (o) {
            var articleObj = _this.buildArticleObj(o);
            var authorId = __WEBPACK_IMPORTED_MODULE_1_lodash__["get"](o, 'relationships.tbl_member.data.id');
            articleObj.author = _this.buildAuthorObj(authorId, res.included);
            return articleObj;
        });
    };
    HelpersService.prototype.transformPickupApiResults = function (res) {
        var _this = this;
        return res.data.map(function (o) {
            return _this.buildPickupObj(o);
        });
    };
    HelpersService.prototype.buildPickupObj = function (pickup) {
        var pickupObj = {}; // Use this to init empty object with type check
        pickupObj.id = pickup.id;
        pickupObj = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"](pickupObj, pickup.attributes);
        return pickupObj;
    };
    HelpersService.prototype.buildArticleObj = function (article) {
        var articleObj = {}; // Use this to init empty object with type check
        articleObj.id = article.id;
        articleObj = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"](articleObj, article.attributes);
        return articleObj;
    };
    HelpersService.prototype.buildAuthorObj = function (authorId, includedData) {
        var imgRoute = 'https://weboo.link/images/member_image';
        // Find the author data in included data
        var authorJsonObj = __WEBPACK_IMPORTED_MODULE_1_lodash__["find"](includedData, {
            id: authorId,
            type: 'tbl_member'
        });
        var authorObj = {}; // Use this to init empty object with type check
        authorObj.id = authorId;
        authorObj = __WEBPACK_IMPORTED_MODULE_1_lodash__["assign"](authorObj, authorJsonObj.attributes);
        authorObj.avatar = imgRoute + "/" + authorId + ".jpg";
        return authorObj;
    };
    HelpersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], HelpersService);
    return HelpersService;
}());

//# sourceMappingURL=helpers.service.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map
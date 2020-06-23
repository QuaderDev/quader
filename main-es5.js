function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/main-wrapper/main-wrapper.component */
    "./src/app/components/main-wrapper/main-wrapper.component.ts");
    /* harmony import */


    var _components_river_house_river_house_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/river-house/river-house.component */
    "./src/app/components/river-house/river-house.component.ts"); // import { MainAnimationComponent } from './components/main-animation/main-animation.component';


    var routes = [{
      path: '',
      component: _components_main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_2__["MainWrapperComponent"]
    }, {
      path: 'river-house',
      component: _components_river_house_river_house_component__WEBPACK_IMPORTED_MODULE_3__["RiverHouseComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styles: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_main_animation_main_animation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/main-animation/main-animation.component */
    "./src/app/components/main-animation/main-animation.component.ts");
    /* harmony import */


    var _components_main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/main-wrapper/main-wrapper.component */
    "./src/app/components/main-wrapper/main-wrapper.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _components_river_house_river_house_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/river-house/river-house.component */
    "./src/app/components/river-house/river-house.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_main_animation_main_animation_component__WEBPACK_IMPORTED_MODULE_6__["MainAnimationComponent"], _components_main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["MainWrapperComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_river_house_river_house_component__WEBPACK_IMPORTED_MODULE_10__["RiverHouseComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_main_animation_main_animation_component__WEBPACK_IMPORTED_MODULE_6__["MainAnimationComponent"], _components_main_wrapper_main_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["MainWrapperComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_river_house_river_house_component__WEBPACK_IMPORTED_MODULE_10__["RiverHouseComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-animation/main-animation.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/main-animation/main-animation.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MainAnimationComponent */

  /***/
  function srcAppComponentsMainAnimationMainAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainAnimationComponent", function () {
      return MainAnimationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "logo-box": a0,
        "logo-box slide": a1
      };
    };

    var _c1 = function _c1(a0, a1, a2) {
      return {
        "logo": a0,
        "logo twist": a1,
        "fadeOut": a2
      };
    };

    var _c2 = function _c2(a0, a1, a2) {
      return {
        "quader": a0,
        "quader entering": a1,
        "fadeOut": a2
      };
    };

    var MainAnimationComponent = /*#__PURE__*/function () {
      function MainAnimationComponent() {
        _classCallCheck(this, MainAnimationComponent);

        this.animateLogo = false;
        this.animateBox = false;
        this.animateTitle = false;
        this.logoFadeOut = false;
      }

      _createClass(MainAnimationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initAnimation();
        }
      }, {
        key: "initAnimation",
        value: function initAnimation() {
          var _this = this;

          setTimeout(function () {
            _this.animateLogo = !_this.animateLogo;
            _this.animateBox = !_this.animateBox;
            _this.animateTitle = !_this.animateTitle;
          }, 0);
          setTimeout(function () {
            _this.logoFadeOut = !_this.logoFadeOut;
          }, 3500);
        }
      }]);

      return MainAnimationComponent;
    }();

    MainAnimationComponent.ɵfac = function MainAnimationComponent_Factory(t) {
      return new (t || MainAnimationComponent)();
    };

    MainAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainAnimationComponent,
      selectors: [["app-main-animation"]],
      decls: 5,
      vars: 14,
      consts: [[1, "animation-wrapper"], [3, "ngClass"], ["src", "assets/images/logo_black.svg", "alt", "Logo", 3, "ngClass"], ["src", "assets/images/uader_black.svg", "alt", "Full Logo", 3, "ngClass"]],
      template: function MainAnimationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, !ctx.animateLogo, ctx.animateLogo));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c1, !ctx.animateLogo, ctx.animateLogo, ctx.logoFadeOut));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](10, _c2, !ctx.animateTitle, ctx.animateTitle, ctx.logoFadeOut));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: ["@-webkit-keyframes logo-twist {\n  0% {\n    top: calc(50% - 50px);\n    left: calc(100% - 50px);\n  }\n  25% {\n    transform: rotate(58.16deg);\n  }\n  50% {\n    transform: rotate(-10.85deg);\n  }\n  100% {\n    top: calc(50% - 50px);\n    left: calc(100% - 50px);\n  }\n}\n@keyframes logo-twist {\n  0% {\n    top: calc(50% - 50px);\n    left: calc(100% - 50px);\n  }\n  25% {\n    transform: rotate(58.16deg);\n  }\n  50% {\n    transform: rotate(-10.85deg);\n  }\n  100% {\n    top: calc(50% - 50px);\n    left: calc(100% - 50px);\n  }\n}\n@-webkit-keyframes box-slide {\n  from {\n    width: 50%;\n  }\n  to {\n    width: 45%;\n  }\n}\n@keyframes box-slide {\n  from {\n    width: 50%;\n  }\n  to {\n    width: 45%;\n  }\n}\n@-webkit-keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.animation-wrapper[_ngcontent-%COMP%] {\n  background: #F2F2F2;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n}\n.animation-wrapper[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%] {\n  background: #F2F2F2;\n  position: relative;\n  height: 100%;\n  width: 50%;\n  display: inline-block;\n  z-index: 2;\n  overflow: hidden;\n}\n.animation-wrapper[_ngcontent-%COMP%]   .logo-box.slide[_ngcontent-%COMP%] {\n  -webkit-animation: box-slide 2s 2s both;\n          animation: box-slide 2s 2s both;\n}\n.animation-wrapper[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  z-index: 3;\n  top: calc(50% - 50px);\n}\n.animation-wrapper[_ngcontent-%COMP%]   .logo.twist[_ngcontent-%COMP%] {\n  top: calc(50% - 50px);\n  -webkit-animation: logo-twist 2s 1s both;\n          animation: logo-twist 2s 1s both;\n}\n.animation-wrapper[_ngcontent-%COMP%]   .logo.fadeOut[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut 1s 0.5s both;\n          animation: fadeOut 1s 0.5s both;\n  left: calc(100% - 50px);\n}\n.animation-wrapper[_ngcontent-%COMP%]   .quader[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: calc(50% - 50px);\n  left: calc(45% + 10px);\n}\n.animation-wrapper[_ngcontent-%COMP%]   .quader.entering[_ngcontent-%COMP%] {\n  -webkit-animation: slideInLeft 2s 1.75s both;\n          animation: slideInLeft 2s 1.75s both;\n}\n.animation-wrapper[_ngcontent-%COMP%]   .quader.fadeOut[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOut 1s 0.5s both;\n          animation: fadeOut 1s 0.5s both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLWFuaW1hdGlvbi9FOlxcZGV2XFxxdWFkZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW4tYW5pbWF0aW9uXFxtYWluLWFuaW1hdGlvbi5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21haW4tYW5pbWF0aW9uL21haW4tYW5pbWF0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsdUJBQUE7RUNDTjtFRENFO0lBQ0ksMkJBQUE7RUNDTjtFRENFO0lBQ0ksNEJBQUE7RUNDTjtFRENFO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtFQ0NOO0FBQ0Y7QURmQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtFQ0NOO0VEQ0U7SUFDSSwyQkFBQTtFQ0NOO0VEQ0U7SUFDSSw0QkFBQTtFQ0NOO0VEQ0U7SUFDSSxxQkFBQTtJQUNBLHVCQUFBO0VDQ047QUFDRjtBREVBO0VBQ0k7SUFDSSxVQUFBO0VDQU47RURFRTtJQUNJLFVBQUE7RUNBTjtBQUNGO0FETkE7RUFDSTtJQUNJLFVBQUE7RUNBTjtFREVFO0lBQ0ksVUFBQTtFQ0FOO0FBQ0Y7QURHQTtFQUNJO0lBRUksbUNBQUE7SUFDQSxtQkFBQTtFQ0ROO0VESUU7SUFHSSwrQkFBQTtFQ0hOO0FBQ0Y7QURSQTtFQUNJO0lBRUksbUNBQUE7SUFDQSxtQkFBQTtFQ0ROO0VESUU7SUFHSSwrQkFBQTtFQ0hOO0FBQ0Y7QURNQTtFQUNJO0lBQ0ksVUFBQTtFQ0pOO0VET0U7SUFDSSxVQUFBO0VDTE47QUFDRjtBREZBO0VBQ0k7SUFDSSxVQUFBO0VDSk47RURPRTtJQUNJLFVBQUE7RUNMTjtBQUNGO0FEU0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNQSjtBRFNJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNSUjtBRFVRO0VBQ0ksdUNBQUE7VUFBQSwrQkFBQTtBQ1JaO0FEWUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDVlI7QURZUTtFQUNJLHFCQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ1ZaO0FEWVE7RUFDSSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsdUJBQUE7QUNWWjtBRGNJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ1pSO0FEY1E7RUFDSSw0Q0FBQTtVQUFBLG9DQUFBO0FDWlo7QURjUTtFQUNJLHVDQUFBO1VBQUEsK0JBQUE7QUNaWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi1hbmltYXRpb24vbWFpbi1hbmltYXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbG9nby10d2lzdCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xyXG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgfVxyXG4gICAgMjUlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1OC4xNmRlZyk7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMC44NWRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm94LXNsaWRlIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG5cclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4uYW5pbWF0aW9uLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI0YyRjJGMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAubG9nby1ib3gge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMkYyRjI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAmLnNsaWRlIHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBib3gtc2xpZGUgMnMgMnMgYm90aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcblxyXG4gICAgICAgICYudHdpc3Qge1xyXG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9nby10d2lzdCAycyAxcyBib3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmZhZGVPdXQge1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGVPdXQgMXMgLjVzIGJvdGg7XHJcbiAgICAgICAgICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucXVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XHJcbiAgICAgICAgbGVmdDogY2FsYyg0NSUgKyAxMHB4KTtcclxuXHJcbiAgICAgICAgJi5lbnRlcmluZyB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgMnMgMS43NXMgYm90aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWRlT3V0IHtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IDFzIC41cyBib3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAa2V5ZnJhbWVzIGxvZ28tdHdpc3Qge1xuICAwJSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDUwcHgpO1xuICAgIGxlZnQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNTguMTZkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwLjg1ZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gICAgbGVmdDogY2FsYygxMDAlIC0gNTBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYm94LXNsaWRlIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDQ1JTtcbiAgfVxufVxuQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5hbmltYXRpb24td3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYW5pbWF0aW9uLXdyYXBwZXIgLmxvZ28tYm94IHtcbiAgYmFja2dyb3VuZDogI0YyRjJGMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgei1pbmRleDogMjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5hbmltYXRpb24td3JhcHBlciAubG9nby1ib3guc2xpZGUge1xuICBhbmltYXRpb246IGJveC1zbGlkZSAycyAycyBib3RoO1xufVxuLmFuaW1hdGlvbi13cmFwcGVyIC5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB6LWluZGV4OiAzO1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG59XG4uYW5pbWF0aW9uLXdyYXBwZXIgLmxvZ28udHdpc3Qge1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGFuaW1hdGlvbjogbG9nby10d2lzdCAycyAxcyBib3RoO1xufVxuLmFuaW1hdGlvbi13cmFwcGVyIC5sb2dvLmZhZGVPdXQge1xuICBhbmltYXRpb246IGZhZGVPdXQgMXMgMC41cyBib3RoO1xuICBsZWZ0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbn1cbi5hbmltYXRpb24td3JhcHBlciAucXVhZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGxlZnQ6IGNhbGMoNDUlICsgMTBweCk7XG59XG4uYW5pbWF0aW9uLXdyYXBwZXIgLnF1YWRlci5lbnRlcmluZyB7XG4gIGFuaW1hdGlvbjogc2xpZGVJbkxlZnQgMnMgMS43NXMgYm90aDtcbn1cbi5hbmltYXRpb24td3JhcHBlciAucXVhZGVyLmZhZGVPdXQge1xuICBhbmltYXRpb246IGZhZGVPdXQgMXMgMC41cyBib3RoO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-animation',
          templateUrl: 'main-animation.component.html',
          styleUrls: ['main-animation.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/main-wrapper/main-wrapper.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/main-wrapper/main-wrapper.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MainWrapperComponent */

  /***/
  function srcAppComponentsMainWrapperMainWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainWrapperComponent", function () {
      return MainWrapperComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _main_animation_main_animation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../main-animation/main-animation.component */
    "./src/app/components/main-animation/main-animation.component.ts");

    var _c0 = function _c0(a0) {
      return {
        "fadeOutUp": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "fadeIn": a0
      };
    };

    var MainWrapperComponent = /*#__PURE__*/function () {
      function MainWrapperComponent(router) {
        _classCallCheck(this, MainWrapperComponent);

        this.router = router;
        this.hideAnimation = false;
        this.showMenu = false;
        this.hideBackground = true;
      }

      _createClass(MainWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setTimeout(function () {
            _this2.scrolling();
          }, 1000);
          setTimeout(function () {
            _this2.hideMainAnimationLayer();
          }, 5000);
          setTimeout(function () {
            _this2.showMenuButton();
          }, 5000);
          setTimeout(function () {
            _this2.hideContainerBackground();
          }, 7000);
        }
      }, {
        key: "scrolling",
        value: function scrolling() {
          (function () {
            "use strict";
            /*[pan and well CSS scrolls]*/

            var pnls = document.querySelectorAll('.panel').length,
                scdir,
                hold = false;

            function _scrollY(obj) {
              var slength;
              var plength;
              var pan;
              var step = 100;
              var vh = window.innerHeight / 100;
              var vmin = Math.min(window.innerHeight, window.innerWidth) / 100; // var slength, plength, pan, step = 100,
              //   vh = window.innerHeight / 100,
              //   vmin = Math.min(window.innerHeight, window.innerWidth) / 100;

              if (this !== undefined && this.id === 'main-scroller' || obj !== undefined && obj.id === 'main-scroller') {
                pan = this || obj;
                plength = parseInt(String(pan.offsetHeight / vh));
              }

              if (pan === undefined) {
                return;
              }

              plength = plength || parseInt(String(pan.offsetHeight / vmin));
              slength = parseInt(pan.style.transform.replace('translateY(', ''));

              if (scdir === 'up' && Math.abs(slength) < plength - plength / pnls) {
                slength = slength - step;
              } else if (scdir === 'down' && slength < 0) {
                slength = slength + step;
              } else if (scdir === 'top') {
                slength = 0;
              }

              if (hold === false) {
                hold = true;
                pan.style.transform = 'translateY(' + slength + 'vh)';
                setTimeout(function () {
                  hold = false;
                }, 1000);
              }
            }
            /*[swipe detection on touchscreen devices]*/


            function _swipe(obj) {
              var swdir,
                  sX,
                  sY,
                  dX,
                  dY,
                  threshold = 200,

              /*[min distance traveled to be considered swipe]*/
              slack = 50,

              /*[max distance allowed at the same time in perpendicular direction]*/
              alT = 500,

              /*[max time allowed to travel that distance]*/
              elT,

              /*[elapsed time]*/
              stT;
              /*[start time]*/

              obj.addEventListener('touchstart', function (e) {
                var tchs = e.changedTouches[0];
                swdir = 'none';
                sX = tchs.pageX;
                sY = tchs.pageY;
                stT = new Date().getTime();
                e.preventDefault();
              }, false);
              obj.addEventListener('touchmove', function (e) {
                e.preventDefault();
                /*[prevent scrolling when inside DIV]*/
              }, false);
              obj.addEventListener('touchend', function (e) {
                var tchs = e.changedTouches[0];
                dX = tchs.pageX - sX;
                dY = tchs.pageY - sY;
                elT = new Date().getTime() - stT;

                if (elT <= alT) {
                  if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
                    swdir = dX < 0 ? 'left' : 'right';
                  } else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
                    swdir = dY < 0 ? 'up' : 'down';
                  }

                  if (obj.id === 'main-scroller') {
                    if (swdir === 'up') {
                      scdir = swdir;

                      _scrollY(obj);
                    } else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
                      scdir = swdir;

                      _scrollY(obj);
                    }

                    e.stopPropagation();
                  }
                }
              }, false);
            }
            /*[assignments]*/


            var well = document.getElementById('main-scroller');
            well.style.transform = 'translateY(0)';
            well.addEventListener('wheel', function (e) {
              if (e.deltaY < 0) {
                scdir = 'down';
              }

              if (e.deltaY > 0) {
                scdir = 'up';
              }

              e.stopPropagation();
            });
            well.addEventListener('wheel', _scrollY);

            _swipe(well);

            var tops = document.querySelectorAll('.top');

            for (var i = 0; i < tops.length; i++) {
              tops[i].addEventListener('click', function () {
                scdir = 'top';

                _scrollY(well);
              });
            }
          })();
        }
      }, {
        key: "hideMainAnimationLayer",
        value: function hideMainAnimationLayer() {
          this.hideAnimation = true;
        }
      }, {
        key: "hideContainerBackground",
        value: function hideContainerBackground() {
          this.hideBackground = !this.hideBackground;
        }
      }, {
        key: "showMenuButton",
        value: function showMenuButton() {
          this.showMenu = true;
        }
      }, {
        key: "over",
        value: function over() {
          this.fullGetIn = true;
        }
      }, {
        key: "out",
        value: function out() {
          this.fullGetIn = false;
        }
      }, {
        key: "goTo",
        value: function goTo(path) {
          this.router.navigateByUrl(path);
        }
      }]);

      return MainWrapperComponent;
    }();

    MainWrapperComponent.ɵfac = function MainWrapperComponent_Factory(t) {
      return new (t || MainWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MainWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainWrapperComponent,
      selectors: [["main-wrapper"]],
      decls: 105,
      vars: 21,
      consts: [["autosize", "", 1, "main-container"], ["mode", "over", "position", "end", 1, "main-sidenav"], ["drawer", ""], [3, "hideMenuEmitter"], [1, "main-sidenav-content", "main-content"], [1, "animation-box", 3, "ngClass"], ["id", "main-scroller", 1, "main-scroller"], [1, "panel", 3, "ngClass"], [3, "click"], [1, "sub-title"], [1, "thin"], [1, "fat"], [1, "learn-more-box"], [1, "learn-more-button"], [1, "circle"], [1, "panel"], [1, "menu-box", 3, "ngClass"], [1, "menu-wrapper"], ["type", "button", 1, "menu", 3, "click"], [1, "long-line"], [1, "short-line"], [1, "lang-switcher"], [1, "quader", "logo"], [1, "scroll-hint", 3, "ngClass"], [1, "down"], [1, "scroll-title"], [1, "get-in-touch-box", 3, "ngClass", "mouseover", "mouseout"], [1, "get-in"], [1, "scrolling-indicator", 3, "ngClass"], [1, "current-page"], [1, "line"], [1, "total-pages"]],
      template: function MainWrapperComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-menu", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hideMenuEmitter", function MainWrapperComponent_Template_app_menu_hideMenuEmitter_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-drawer-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-main-animation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainWrapperComponent_Template_a_click_10_listener() {
            return ctx.goTo("/river-house");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "River");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Summer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Zoloche");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Green hills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Mooring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Learn more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainWrapperComponent_Template_button_click_84_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "RU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u2193");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Scroll for more");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MainWrapperComponent_Template_div_mouseover_96_listener() {
            return ctx.over();
          })("mouseout", function MainWrapperComponent_Template_div_mouseout_96_listener() {
            return ctx.out();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "01");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "06");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.hideAnimation));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.showMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.showMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.showMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.showMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c1, ctx.showMenu));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c1, ctx.showMenu));
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _main_animation_main_animation_component__WEBPACK_IMPORTED_MODULE_5__["MainAnimationComponent"]],
      styles: ["@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    height: 100%;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n    height: 0;\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n    height: 100%;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n    height: 0;\n  }\n}\n.fadeOutUp[_ngcontent-%COMP%] {\n  -webkit-animation: fadeOutUp 2s 1 forwards;\n          animation: fadeOutUp 2s 1 forwards;\n}\n@-webkit-keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn[_ngcontent-%COMP%] {\n  -webkit-animation: fadeIn 2s both;\n          animation: fadeIn 2s both;\n}\n.main-scroller[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);\n}\n.top[_ngcontent-%COMP%] {\n  font-size: 80%;\n  color: rgba(255, 255, 255, 0.25);\n  position: relative;\n  top: -0.2em;\n  cursor: pointer;\n}\n.panel[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  overflow: hidden;\n  font-size: 10vmin;\n  padding: 1em 1em 1em 19%;\n  box-sizing: border-box;\n  color: rgba(255, 255, 255, 0.1);\n  cursor: default;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  outline: none;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.panel[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  font-size: 124px;\n  color: #FFFFFF;\n  line-height: 1;\n  margin: 0 0 32px;\n}\n.panel[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.panel[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   .thin[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n.panel[_ngcontent-%COMP%]   .learn-more-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  cursor: pointer;\n  margin-left: 8px;\n}\n.panel[_ngcontent-%COMP%]   .learn-more-box[_ngcontent-%COMP%]   .learn-more-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  border: 2px solid #F2F2F2;\n  margin-right: 16px;\n  background: transparent;\n  outline: none;\n  display: flex;\n}\n.panel[_ngcontent-%COMP%]   .learn-more-box[_ngcontent-%COMP%]   .learn-more-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.panel[_ngcontent-%COMP%]   .learn-more-box[_ngcontent-%COMP%]   .learn-more-button[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  background: #F2F2F2;\n  border-radius: 50%;\n  margin: auto;\n}\n.panel[_ngcontent-%COMP%]   .learn-more-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n.panel[_ngcontent-%COMP%]:nth-child(1) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.15), rgba(27, 30, 32, 0.15)), url('river-house.jpg') no-repeat center center;\n  background-size: cover;\n}\n.panel[_ngcontent-%COMP%]:nth-child(2) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.14), rgba(27, 30, 32, 0.14)), url('stone-house.jpg') no-repeat center center;\n  background-size: cover;\n}\n.panel[_ngcontent-%COMP%]:nth-child(3) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.15), rgba(27, 30, 32, 0.15)), url('summer-house.jpg') no-repeat center center;\n  background-size: cover;\n}\n.panel[_ngcontent-%COMP%]:nth-child(4) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.29), rgba(27, 30, 32, 0.29)), url('zoloche_interior.jpg') no-repeat center center;\n  background-size: cover;\n}\n.panel[_ngcontent-%COMP%]:nth-child(5) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.2), rgba(27, 30, 32, 0.2)), url('green-hills-interior.jpg') no-repeat center center;\n  background-size: cover;\n}\n.panel[_ngcontent-%COMP%]:nth-child(6) {\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.13), rgba(27, 30, 32, 0.13)), url('mooring_interior.jpg') no-repeat center center;\n  background-size: cover;\n}\n.menu-box[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 60px;\n  top: 60px;\n  opacity: 0;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n.menu-box[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\n.menu-box[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .long-line[_ngcontent-%COMP%] {\n  width: 39px;\n  height: 3px;\n  background: #FFFFFF;\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 11px;\n}\n.menu-box[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .short-line[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 3px;\n  background: #FFFFFF;\n  display: block;\n  box-sizing: border-box;\n}\n.menu-box[_ngcontent-%COMP%]   .lang-switcher[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\n.menu-box[_ngcontent-%COMP%]   .lang-switcher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-weight: 500;\n  font-size: 18px;\n  color: #FFFFFF;\n  outline: none;\n}\n.menu-box[_ngcontent-%COMP%]   .lang-switcher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.mat-drawer-container.main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.mat-drawer-container.main-container[_ngcontent-%COMP%]   .mat-drawer.main-sidenav[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-drawer-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.15), rgba(27, 30, 32, 0.15)), url('river-house.jpg') no-repeat center center;\n  background-size: cover;\n}\n.quader.logo[_ngcontent-%COMP%] {\n  background: url('logo_white.svg') no-repeat center;\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  width: 60px;\n  height: 60px;\n  opacity: 0;\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 70px;\n  color: rgba(255, 255, 255, 0.5);\n  opacity: 0;\n}\n.scroll-hint[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.scroll-hint[_ngcontent-%COMP%]   .scroll-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.get-in-touch-box[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 66px;\n  background: white;\n  color: #333333;\n  position: absolute;\n  bottom: 40px;\n  right: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 96.3%;\n}\n.get-in-touch-box[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  width: 193px;\n  border-radius: 63px;\n}\n.get-in-touch-box[_ngcontent-%COMP%]   .get-in[_ngcontent-%COMP%] {\n  font-size: 33px;\n  font-weight: 100;\n}\n.scrolling-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  top: 35%;\n  left: 40px;\n  opacity: 0;\n}\n.scrolling-indicator[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  color: #FFFFFF;\n}\n.scrolling-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  min-height: 205px;\n  border: 3px solid white;\n  width: 0;\n  border-radius: 3px;\n  margin: 10px 0;\n}\n.scrolling-indicator[_ngcontent-%COMP%]   .total-pages[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXdyYXBwZXIvRTpcXGRldlxccXVhZGVyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYWluLXdyYXBwZXJcXG1haW4td3JhcHBlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXdyYXBwZXIvbWFpbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsWUFBQTtFQ0RBO0VESUQ7SUFDQyxVQUFBO0lBQ0EsbUNBQUE7SUFDQSxTQUFBO0VDRkE7QUFDRjtBRFJBO0VBQ0M7SUFDQyxVQUFBO0lBQ0EsWUFBQTtFQ0RBO0VESUQ7SUFDQyxVQUFBO0lBQ0EsbUNBQUE7SUFDQSxTQUFBO0VDRkE7QUFDRjtBREtBO0VBQ0MsMENBQUE7VUFBQSxrQ0FBQTtBQ0hEO0FETUE7RUFDQztJQUNDLFVBQUE7RUNIQTtFRE1EO0lBQ0MsVUFBQTtFQ0pBO0FBQ0Y7QURIQTtFQUNDO0lBQ0MsVUFBQTtFQ0hBO0VETUQ7SUFDQyxVQUFBO0VDSkE7QUFDRjtBRE9BO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0xGO0FEUUE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7QUNMRDtBRFFBO0VBQ0MsY0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0xEO0FEUUE7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNORDtBRFNDO0VBQ0MsYUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNQRjtBRFVDO0VBQ0MsZ0JBckVVO0VBc0VWLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFVFO0VBQ0MsZUFBQTtBQ1JIO0FEV0U7RUFDQyxnQkFBQTtBQ1RIO0FEZ0JDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNkRjtBRGdCRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ2RIO0FEZ0JHO0VBQ0MsZUFBQTtBQ2RKO0FEaUJHO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ2ZKO0FEa0JFO0VBQ0MsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQ2hCSDtBRHFCQTtFQUNDLGlJQUFBO0VBQ0Esc0JBQUE7QUNsQkQ7QURxQkE7RUFDQyxpSUFBQTtFQUNBLHNCQUFBO0FDbEJEO0FEcUJBO0VBQ0Msa0lBQUE7RUFDQSxzQkFBQTtBQ2xCRDtBRHFCQTtFQUNDLHNJQUFBO0VBQ0Esc0JBQUE7QUNsQkQ7QURxQkE7RUFDQyx3SUFBQTtFQUNBLHNCQUFBO0FDbEJEO0FEcUJBO0VBQ0Msc0lBQUE7RUFDRyxzQkFBQTtBQ2xCSjtBRHFCQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7QURvQkM7RUFDQyx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ2xCRjtBRG1CRTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ2pCSDtBRG1CRTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNqQkg7QURxQkM7RUFDQyxrQkFBQTtBQ25CRjtBRG9CRTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDbEJIO0FEbUJHO0VBQ0MsZUFBQTtBQ2pCSjtBRHVCQTtFQUNDLGFBQUE7QUNwQkQ7QURxQkM7RUFDQyxXQUFBO0FDbkJGO0FEdUJBO0VBQ0MsZ0JBQUE7RUFDQSxpSUFBQTtFQUNBLHNCQUFBO0FDcEJEO0FEdUJBO0VBQ0Msa0RBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDcEJEO0FEdUJBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQ3BCRDtBRHNCQztFQUNDLGVBQUE7QUNwQkY7QURzQkM7RUFDQyxlQUFBO0FDcEJGO0FEd0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3RCRDtBRHdCQztFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUN0QkY7QUR3QkM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7QUQwQkE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0FDekJEO0FEMkJDO0VBQ0MsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUVBLGNBQUE7QUMxQkY7QUQ2QkM7RUFDQyxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQzNCRjtBRDZCQztFQUNDLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDM0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXdyYXBwZXIvbWFpbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGZvbnQtc2l6ZTogMTI0cHg7XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XHJcblx0ZnJvbSB7XHJcblx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0dG8ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG5cdFx0aGVpZ2h0OiAwO1xyXG5cdH1cclxufVxyXG5cclxuLmZhZGVPdXRVcCB7XHJcblx0YW5pbWF0aW9uOiBmYWRlT3V0VXAgMnMgMSBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG5cdGZyb20ge1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHR9XHJcblxyXG5cdHRvIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG59XHJcblxyXG4uZmFkZUluIHtcclxuXHQgYW5pbWF0aW9uOiBmYWRlSW4gMnMgYm90aDtcclxuIH1cclxuXHJcbi5tYWluLXNjcm9sbGVyIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpO1xyXG59XHJcblxyXG4udG9wIHtcclxuXHRmb250LXNpemU6IDgwJTtcclxuXHRjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgLjI1KTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAtLjJlbTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRmb250LXNpemU6IDEwdm1pbjtcclxuXHRwYWRkaW5nOiAxZW0gMWVtIDFlbSAxOSU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRjb2xvcjogaHNsYSgwLCAwJSwgMTAwJSwgLjEpO1xyXG5cdGN1cnNvcjogZGVmYXVsdDtcclxuXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuXHJcblx0YXtcclxuXHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHR0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuXHR9XHJcblxyXG5cdC5zdWItdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAkZm9udC1zaXplO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdG1hcmdpbjogMCAwIDMycHg7XHJcblxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdH1cclxuXHJcblx0XHQudGhpbiB7XHJcblx0XHRcdGZvbnQtd2VpZ2h0OiAxMDA7XHJcblx0XHR9XHJcblx0XHQuZmF0IHtcclxuXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubGVhcm4tbW9yZS1ib3gge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDhweDtcclxuXHJcblx0XHQubGVhcm4tbW9yZS1idXR0b24ge1xyXG5cdFx0XHR3aWR0aDogNDhweDtcclxuXHRcdFx0aGVpZ2h0OiA0OHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNGMkYyRjI7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogMTZweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdG91dGxpbmU6IG5vbmU7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC5jaXJjbGUge1xyXG5cdFx0XHRcdHdpZHRoOiAxNHB4O1xyXG5cdFx0XHRcdGhlaWdodDogMTRweDtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjRjJGMkYyO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHAge1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5wYW5lbDpudGgtY2hpbGQoMSkge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JpdmVyLWhvdXNlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wYW5lbDpudGgtY2hpbGQoMikge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTQpLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTQpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0b25lLWhvdXNlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wYW5lbDpudGgtY2hpbGQoMykge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpKSwgdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N1bW1lci1ob3VzZS5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGFuZWw6bnRoLWNoaWxkKDQpIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNywgMzAsIDMyLCAwLjI5KSwgcmdiYSgyNywgMzAsIDMyLCAwLjI5KSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy96b2xvY2hlX2ludGVyaW9yLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5wYW5lbDpudGgtY2hpbGQoNSkge1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuMiksIHJnYmEoMjcsIDMwLCAzMiwgMC4yKSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmVlbi1oaWxscy1pbnRlcmlvci5qcGcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ucGFuZWw6bnRoLWNoaWxkKDYpIHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNywgMzAsIDMyLCAwLjEzKSwgcmdiYSgyNywgMzAsIDMyLCAwLjEzKSksIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tb29yaW5nX2ludGVyaW9yLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1lbnUtYm94IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDYwcHg7XHJcblx0dG9wOiA2MHB4O1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0Lm1lbnUge1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0LmxvbmctbGluZSB7XHJcblx0XHRcdHdpZHRoOiAzOXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdG1hcmdpbi1ib3R0b206IDExcHg7XHJcblx0XHR9XHJcblx0XHQuc2hvcnQtbGluZSB7XHJcblx0XHRcdHdpZHRoOiAxOXB4O1xyXG5cdFx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdFx0YmFja2dyb3VuZDogI0ZGRkZGRjtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubGFuZy1zd2l0Y2hlciB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcblx0XHRidXR0b24ge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyOiBub25lO1xyXG5cdFx0XHRmb250LXdlaWdodDogNTAwO1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0XHRvdXRsaW5lOiBub25lO1xyXG5cdFx0XHQmOmhvdmVyIHtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5tYXQtZHJhd2VyLWNvbnRhaW5lci5tYWluLWNvbnRhaW5lciB7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHQubWF0LWRyYXdlci5tYWluLXNpZGVuYXYge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcblxyXG5tYXQtZHJhd2VyLWNvbnRlbnQge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC4xNSksIHJnYmEoMjcsIDMwLCAzMiwgMC4xNSkpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcml2ZXItaG91c2UuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnF1YWRlci5sb2dvIHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb193aGl0ZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDQwcHg7XHJcblx0bGVmdDogNDBweDtcclxuXHR3aWR0aDogNjBweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0b3BhY2l0eTogMDtcclxufVxyXG5cclxuLnNjcm9sbC1oaW50IHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiA1MHB4O1xyXG5cdGxlZnQ6IDcwcHg7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cclxuXHQuZG93biB7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0fVxyXG5cdC5zY3JvbGwtdGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxufVxyXG5cclxuLmdldC1pbi10b3VjaC1ib3gge1xyXG5cdHdpZHRoOiA2NnB4O1xyXG5cdGhlaWdodDogNjZweDtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjogIzMzMzMzMztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Ym90dG9tOiA0MHB4O1xyXG5cdHJpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0b3BhY2l0eTogMDtcclxuXHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDk2LjMlO1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdHdpZHRoOiAxOTNweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDYzcHg7XHJcblx0fVxyXG5cdC5nZXQtaW4ge1xyXG5cdFx0Zm9udC1zaXplOiAzM3B4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDEwMDtcclxuXHR9XHJcbn1cclxuXHJcbi5zY3JvbGxpbmctaW5kaWNhdG9yIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMzUlO1xyXG5cdGxlZnQ6IDQwcHg7XHJcblxyXG5cdG9wYWNpdHk6IDA7XHJcblxyXG5cdC5jdXJyZW50LXBhZ2Uge1xyXG5cdFx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG5cclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0bWluLWhlaWdodDogMjA1cHg7XHJcblx0XHRib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcclxuXHRcdHdpZHRoOiAwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0bWFyZ2luOiAxMHB4IDA7XHJcblx0fVxyXG5cdC50b3RhbC1wYWdlcyB7XHJcblx0XHRmb250LXNpemU6IDI0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcblx0XHRjb2xvcjogI0ZGRkZGRjtcclxuXHR9XHJcbn1cclxuXHJcblxyXG4iLCJAa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuLmZhZGVPdXRVcCB7XG4gIGFuaW1hdGlvbjogZmFkZU91dFVwIDJzIDEgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGVJbiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDJzIGJvdGg7XG59XG5cbi5tYWluLXNjcm9sbGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAxcyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpO1xufVxuXG4udG9wIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTAuMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZm9udC1zaXplOiAxMHZtaW47XG4gIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDE5JTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucGFuZWwgYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xufVxuLnBhbmVsIC5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDEyNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMCAwIDMycHg7XG59XG4ucGFuZWwgLnN1Yi10aXRsZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYW5lbCAuc3ViLXRpdGxlIC50aGluIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5wYW5lbCAubGVhcm4tbW9yZS1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucGFuZWwgLmxlYXJuLW1vcmUtYm94IC5sZWFybi1tb3JlLWJ1dHRvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI0YyRjJGMjtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wYW5lbCAubGVhcm4tbW9yZS1ib3ggLmxlYXJuLW1vcmUtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhbmVsIC5sZWFybi1tb3JlLWJveCAubGVhcm4tbW9yZS1idXR0b24gLmNpcmNsZSB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNGMkYyRjI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnBhbmVsIC5sZWFybi1tb3JlLWJveCBwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICBtYXJnaW46IDA7XG59XG5cbi5wYW5lbDpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNywgMzAsIDMyLCAwLjE1KSwgcmdiYSgyNywgMzAsIDMyLCAwLjE1KSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcml2ZXItaG91c2UuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFuZWw6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC4xNCksIHJnYmEoMjcsIDMwLCAzMiwgMC4xNCkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N0b25lLWhvdXNlLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnBhbmVsOm50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpLCByZ2JhKDI3LCAzMCwgMzIsIDAuMTUpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdW1tZXItaG91c2UuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFuZWw6bnRoLWNoaWxkKDQpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC4yOSksIHJnYmEoMjcsIDMwLCAzMiwgMC4yOSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3pvbG9jaGVfaW50ZXJpb3IuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGFuZWw6bnRoLWNoaWxkKDUpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC4yKSwgcmdiYSgyNywgMzAsIDMyLCAwLjIpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ncmVlbi1oaWxscy1pbnRlcmlvci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5wYW5lbDpudGgtY2hpbGQoNikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNywgMzAsIDMyLCAwLjEzKSwgcmdiYSgyNywgMzAsIDMyLCAwLjEzKSksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbW9vcmluZ19pbnRlcmlvci5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tZW51LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDYwcHg7XG4gIHRvcDogNjBweDtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1lbnUtYm94IC5tZW51IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1lbnUtYm94IC5tZW51IC5sb25nLWxpbmUge1xuICB3aWR0aDogMzlweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuLm1lbnUtYm94IC5tZW51IC5zaG9ydC1saW5lIHtcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5tZW51LWJveCAubGFuZy1zd2l0Y2hlciB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cbi5tZW51LWJveCAubGFuZy1zd2l0Y2hlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1lbnUtYm94IC5sYW5nLXN3aXRjaGVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyLm1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5tYXQtZHJhd2VyLWNvbnRhaW5lci5tYWluLWNvbnRhaW5lciAubWF0LWRyYXdlci5tYWluLXNpZGVuYXYge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWRyYXdlci1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC4xNSksIHJnYmEoMjcsIDMwLCAzMiwgMC4xNSkpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JpdmVyLWhvdXNlLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnF1YWRlci5sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX3doaXRlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogNDBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnNjcm9sbC1oaW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUwcHg7XG4gIGxlZnQ6IDcwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uc2Nyb2xsLWhpbnQgLmRvd24ge1xuICBmb250LXNpemU6IDI0cHg7XG59XG4uc2Nyb2xsLWhpbnQgLnNjcm9sbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmdldC1pbi10b3VjaC1ib3gge1xuICB3aWR0aDogNjZweDtcbiAgaGVpZ2h0OiA2NnB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA0MHB4O1xuICByaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogOTYuMyU7XG59XG4uZ2V0LWluLXRvdWNoLWJveDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDE5M3B4O1xuICBib3JkZXItcmFkaXVzOiA2M3B4O1xufVxuLmdldC1pbi10b3VjaC1ib3ggLmdldC1pbiB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLnNjcm9sbGluZy1pbmRpY2F0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzUlO1xuICBsZWZ0OiA0MHB4O1xuICBvcGFjaXR5OiAwO1xufVxuLnNjcm9sbGluZy1pbmRpY2F0b3IgLmN1cnJlbnQtcGFnZSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLnNjcm9sbGluZy1pbmRpY2F0b3IgLmxpbmUge1xuICBtaW4taGVpZ2h0OiAyMDVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLnNjcm9sbGluZy1pbmRpY2F0b3IgLnRvdGFsLXBhZ2VzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgY29sb3I6ICNGRkZGRkY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'main-wrapper',
          templateUrl: 'main-wrapper.component.html',
          styleUrls: ['main-wrapper.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(router) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.hideMenuEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MenuComponent, [{
        key: "hideMenuHandler",
        value: function hideMenuHandler() {
          this.hideMenuEmitter.emit(true);
        }
      }, {
        key: "goTo",
        value: function goTo(path) {
          this.router.navigateByUrl(path);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      outputs: {
        hideMenuEmitter: "hideMenuEmitter"
      },
      decls: 82,
      vars: 0,
      consts: [[1, "menu-wrapper"], [1, "header-panel"], [1, "logo-box"], [1, "theme-tumbler"], [1, "sun"], [1, "moon"], ["id", "opened-menu", 1, "menu", 3, "click"], [1, "projects-wrapper"], [1, "title"], [3, "click"], [1, "thin"], [1, "bold"], [1, "about-wrapper"], [1, "location-wrapper"], [1, "location"], [1, "city"], [1, "icon"], [1, "context"], [1, "adress"], [1, "phone"], ["href", "tel:+38 095 221 72 32"], [1, "email"], ["href", "mailto:pr@quader.com"], [1, "get-in-touch"], [1, "plus"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_6_listener() {
            return ctx.hideMenuHandler();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projects");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_li_click_11_listener() {
            return ctx.goTo("/river-house");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "River");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Summer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Zoloche");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Green Hills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mooring");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Interior");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Our expertise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "History");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Kyiv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "BC 'Horizon Park', 12 Amosova ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " st., Kyiv, 03038");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "+38 095 221 72 32");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "pr@quader.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Get in touch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".menu-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch;\n  align-items: flex-start;\n  background: #1B1E20;\n  position: relative;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: row;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .logo-box[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  background: url('logo_white.svg') no-repeat center;\n  background-size: contain;\n  margin: 40px 0 0 40px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .theme-tumbler[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin: 51px 0 0 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .theme-tumbler[_ngcontent-%COMP%]   .sun[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: url('ui_sun_white.svg') no-repeat center;\n  background-size: contain;\n  margin-right: 12px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .theme-tumbler[_ngcontent-%COMP%]   .moon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background: url('ui_moon_white.svg') no-repeat center;\n  background-size: contain;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  width: 29.7px;\n  height: 29.7px;\n  background: url('menu-cross-white.svg') no-repeat center;\n  background-size: contain;\n  margin: 47.65px 62.65px 0 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .header-panel[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 40px;\n  font-weight: bold;\n  margin-top: 250px;\n  margin-bottom: 64px;\n  margin-left: 30%;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 24px;\n  line-height: 1;\n  margin-left: 30%;\n  padding: 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .thin[_ngcontent-%COMP%] {\n  font-weight: normal;\n  margin-right: 4px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .projects-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n  border-left: 1px solid #33333326;\n  border-right: 1px solid #33333326;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 40px;\n  font-weight: bold;\n  margin: 250px 33% 64px 33%;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 24px;\n  line-height: 1;\n  margin-left: 33%;\n  margin-right: 33%;\n  padding: 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .about-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  margin: 250px 33% 32px 33%;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: inline-block;\n  background: url('location-white.svg') no-repeat center center;\n  background-size: contain;\n  margin-right: 12px;\n  margin-left: -36px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .city[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #FFFFFF;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .adress[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 156.8%;\n  color: rgba(255, 255, 255, 0.5);\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  margin-left: 33%;\n  margin-right: 33%;\n  margin-bottom: 32px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 156.8%;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 8px 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: bold;\n  margin: 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  margin-left: 33%;\n  margin-right: 33%;\n  margin-bottom: 72px;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 156.8%;\n  color: rgba(255, 255, 255, 0.5);\n  margin: 0 0 8px 0;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: bold;\n  outline: none;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .get-in-touch[_ngcontent-%COMP%] {\n  margin-left: 33%;\n  margin-right: 33%;\n  width: 206px;\n  height: 65px;\n  border: 1px solid rgba(255, 255, 255, 0.7);\n  border-radius: 3px;\n  box-sizing: border-box;\n  padding: 0 32px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .get-in-touch[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .get-in-touch[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1;\n}\n.menu-wrapper[_ngcontent-%COMP%]   .location-wrapper[_ngcontent-%COMP%]   .get-in-touch[_ngcontent-%COMP%]   span.plus[_ngcontent-%COMP%] {\n  margin-left: 14px;\n  color: white;\n  line-height: 1;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L0U6XFxkZXZcXHF1YWRlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDQU47QURHSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRE47QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQ0FSO0FESUk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHdEQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0FDRlI7QURRRTtFQUNFLE9BQUE7RUFDQSxZQUFBO0FDTko7QURTSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBRFVJO0VBQ0UscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDUk47QURVTTtFQUNFLG1CQUFBO0FDUlI7QURVUTtFQUNFLGVBQUE7QUNSVjtBRFdRO0VBQ0UsU0FBQTtBQ1RWO0FEWVE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDVlY7QURZUTtFQUNFLGlCQUFBO0FDVlY7QURrQkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7QUNoQko7QURrQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNoQk47QURtQkk7RUFDRSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQ2pCTjtBRG1CTTtFQUlFLG1CQUFBO0FDcEJSO0FEaUJRO0VBQ0UsZUFBQTtBQ2ZWO0FEa0JRO0VBQ0UsaUJBQUE7QUNoQlY7QURzQkU7RUFDRSxPQUFBO0VBQ0EsWUFBQTtBQ3BCSjtBRHNCSTtFQUNFLDBCQUFBO0FDcEJOO0FEcUJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNuQlI7QURvQlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNsQlY7QURvQlE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2xCVjtBRHVCUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDckJWO0FENEJJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDMUJOO0FEMkJNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ3pCUjtBRDJCTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUN6QlI7QUQyQlE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUN6QlY7QUQyQlE7RUFDRSxlQUFBO0FDekJWO0FEOEJJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDNUJOO0FENkJNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQzNCUjtBRDhCTTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDNUJSO0FENkJRO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDM0JWO0FENkJRO0VBQ0UsZUFBQTtBQzNCVjtBRGdDSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQzlCTjtBRGdDTTtFQUNFLGVBQUE7QUM5QlI7QURpQ007RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQy9CUjtBRGlDUTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDL0JWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgYmFja2dyb3VuZDogIzFCMUUyMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5oZWFkZXItcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcblxyXG4gICAgLmxvZ28tYm94IHtcclxuICAgICAgd2lkdGg6IDU4cHg7XHJcbiAgICAgIGhlaWdodDogNThweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29fd2hpdGUuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBtYXJnaW46IDQwcHggMCAwIDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRoZW1lLXR1bWJsZXIge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiA1MXB4IDAgMCAwO1xyXG4gICAgICAuc3VuIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3VpX3N1bl93aGl0ZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLm1vb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdWlfbW9vbl93aGl0ZS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgd2lkdGg6IDI5LjdweDtcclxuICAgICAgaGVpZ2h0OiAyOS43cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9tZW51LWNyb3NzLXdoaXRlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgbWFyZ2luOiA0Ny42NXB4IDYyLjY1cHggMCAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnByb2plY3RzLXdyYXBwZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aGluIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvbGQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hYm91dC13cmFwcGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzMzMzMyNjtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzMzMzMyNjtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbWFyZ2luOiAyNTBweCAzMyUgNjRweCAzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMyU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzMlO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgIC5ib2xkIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAubG9jYXRpb24ge1xyXG4gICAgICBtYXJnaW46IDI1MHB4IDMzJSAzMnB4IDMzJTtcclxuICAgICAgLmNpdHkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uLXdoaXRlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGV4dCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hZHJlc3Mge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ni44JTtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAucGhvbmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ni44JTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZW1haWwge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMzJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNzJweDtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1Ni44JTtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDhweCAwO1xyXG5cclxuICAgICAgfVxyXG4gICAgICAuY29udGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nZXQtaW4tdG91Y2gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMzJTtcclxuICAgICAgd2lkdGg6IDIwNnB4O1xyXG4gICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG5cclxuICAgICAgICAmLnBsdXMge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi5tZW51LXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZDogIzFCMUUyMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1lbnUtd3JhcHBlciAuaGVhZGVyLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubWVudS13cmFwcGVyIC5oZWFkZXItcGFuZWwgLmxvZ28tYm94IHtcbiAgd2lkdGg6IDU4cHg7XG4gIGhlaWdodDogNThweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX3doaXRlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbjogNDBweCAwIDAgNDBweDtcbn1cbi5tZW51LXdyYXBwZXIgLmhlYWRlci1wYW5lbCAudGhlbWUtdHVtYmxlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDUxcHggMCAwIDA7XG59XG4ubWVudS13cmFwcGVyIC5oZWFkZXItcGFuZWwgLnRoZW1lLXR1bWJsZXIgLnN1biB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdWlfc3VuX3doaXRlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5tZW51LXdyYXBwZXIgLmhlYWRlci1wYW5lbCAudGhlbWUtdHVtYmxlciAubW9vbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdWlfbW9vbl93aGl0ZS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLm1lbnUtd3JhcHBlciAuaGVhZGVyLXBhbmVsIC5tZW51IHtcbiAgd2lkdGg6IDI5LjdweDtcbiAgaGVpZ2h0OiAyOS43cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbWVudS1jcm9zcy13aGl0ZS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW46IDQ3LjY1cHggNjIuNjVweCAwIDA7XG59XG4ubWVudS13cmFwcGVyIC5oZWFkZXItcGFuZWwgLm1lbnU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS13cmFwcGVyIC5wcm9qZWN0cy13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnUtd3JhcHBlciAucHJvamVjdHMtd3JhcHBlciAudGl0bGUge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG4ubWVudS13cmFwcGVyIC5wcm9qZWN0cy13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBwYWRkaW5nOiAwO1xufVxuLm1lbnUtd3JhcHBlciAucHJvamVjdHMtd3JhcHBlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubWVudS13cmFwcGVyIC5wcm9qZWN0cy13cmFwcGVyIHVsIGxpOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtd3JhcHBlciAucHJvamVjdHMtd3JhcHBlciB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuLm1lbnUtd3JhcHBlciAucHJvamVjdHMtd3JhcHBlciB1bCBsaSAudGhpbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLm1lbnUtd3JhcHBlciAucHJvamVjdHMtd3JhcHBlciB1bCBsaSAuYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1lbnUtd3JhcHBlciAuYWJvdXQtd3JhcHBlciB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzMzMzMjY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzMzMzMyNjtcbn1cbi5tZW51LXdyYXBwZXIgLmFib3V0LXdyYXBwZXIgLnRpdGxlIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMjUwcHggMzMlIDY0cHggMzMlO1xufVxuLm1lbnUtd3JhcHBlciAuYWJvdXQtd3JhcHBlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMyU7XG4gIHBhZGRpbmc6IDA7XG59XG4ubWVudS13cmFwcGVyIC5hYm91dC13cmFwcGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5tZW51LXdyYXBwZXIgLmFib3V0LXdyYXBwZXIgdWwgbGk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS13cmFwcGVyIC5hYm91dC13cmFwcGVyIHVsIGxpIC5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnUtd3JhcHBlciAubG9jYXRpb24td3JhcHBlciAubG9jYXRpb24ge1xuICBtYXJnaW46IDI1MHB4IDMzJSAzMnB4IDMzJTtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uIC5jaXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uIC5jaXR5IC5pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvY2F0aW9uLXdoaXRlLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzZweDtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uIC5jaXR5IC5jb250ZXh0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uIC5hZHJlc3MgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE1Ni44JTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLnBob25lIHtcbiAgbWFyZ2luLWxlZnQ6IDMzJTtcbiAgbWFyZ2luLXJpZ2h0OiAzMyU7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5waG9uZSAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNTYuOCU7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIG1hcmdpbjogMCAwIDhweCAwO1xufVxuLm1lbnUtd3JhcHBlciAubG9jYXRpb24td3JhcHBlciAucGhvbmUgLmNvbnRleHQge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5waG9uZSAuY29udGV4dCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLnBob25lIC5jb250ZXh0OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm1lbnUtd3JhcHBlciAubG9jYXRpb24td3JhcHBlciAuZW1haWwge1xuICBtYXJnaW4tbGVmdDogMzMlO1xuICBtYXJnaW4tcmlnaHQ6IDMzJTtcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmVtYWlsIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE1Ni44JTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5lbWFpbCAuY29udGV4dCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tZW51LXdyYXBwZXIgLmxvY2F0aW9uLXdyYXBwZXIgLmVtYWlsIC5jb250ZXh0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLm1lbnUtd3JhcHBlciAubG9jYXRpb24td3JhcHBlciAuZW1haWwgLmNvbnRleHQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5nZXQtaW4tdG91Y2gge1xuICBtYXJnaW4tbGVmdDogMzMlO1xuICBtYXJnaW4tcmlnaHQ6IDMzJTtcbiAgd2lkdGg6IDIwNnB4O1xuICBoZWlnaHQ6IDY1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5nZXQtaW4tdG91Y2g6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS13cmFwcGVyIC5sb2NhdGlvbi13cmFwcGVyIC5nZXQtaW4tdG91Y2ggc3BhbiB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuLm1lbnUtd3JhcHBlciAubG9jYXRpb24td3JhcHBlciAuZ2V0LWluLXRvdWNoIHNwYW4ucGx1cyB7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        hideMenuEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/river-house/river-house.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/river-house/river-house.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RiverHouseComponent */

  /***/
  function srcAppComponentsRiverHouseRiverHouseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiverHouseComponent", function () {
      return RiverHouseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var RiverHouseComponent = function RiverHouseComponent(_location) {
      _classCallCheck(this, RiverHouseComponent);

      this._location = _location;
    };

    RiverHouseComponent.ɵfac = function RiverHouseComponent_Factory(t) {
      return new (t || RiverHouseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    RiverHouseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RiverHouseComponent,
      selectors: [["app-river-house"]],
      decls: 84,
      vars: 0,
      consts: [[1, "river-house"], [1, "thin"], [1, "fat"], [1, "gallery-box"], [1, "box", "carousel"], [1, "box", "360"], [1, "short-over-view"], [1, "overview"], [1, "subject"], [1, "team"], [1, "team-box"], [1, "team-img"], ["src", "../../../assets/images/riverhouse-team-img.png", "alt", ""], [1, "see"], [1, "see-img"], ["src", "../../../assets/images/river-house-see-img.png", "alt", ""], [1, "see-box"], [1, "see-text"], [1, "feel"], [1, "feel-img"], ["src", "../../../assets/images/river-house-feel-img.png", "alt", ""], [1, "feel-box"], [1, "feel-text"], [1, "understand"], [1, "understand-img-box"], ["src", "../../../assets/images/river-house-understand-top-img.png", "alt", ""], ["src", "../../../assets/images/river-house-understand-bottom-img.png", "alt", ""], [1, "understand-text-box"], [3, "click"], ["src", "../../../assets/images/back-to-img.png", "alt", ""]],
      template: function RiverHouseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "River");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "House");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Photos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Watch in 360");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\xB0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "article", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Short overview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Year:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Outside Kyiv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Area:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "350 m2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "article", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Artem Bondar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Nikolay Gip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Anton Removskyi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u0412\u0438\u0434\u0438\u0448\u044C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u041E\u043A\u0438\u043D\u0443\u0432 \u044D\u0442\u043E\u0442 \u043F\u0440\u043E\u0435\u043A\u0442 \u0431\u0435\u0433\u043B\u044B\u043C \u0432\u0437\u0433\u043B\u044F\u0434\u043E\u043C, \u043D\u0435\u0432\u043E\u043B\u044C\u043D\u043E \u0432\u0441\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u0448\u044C \u043E\u0431 \u0430\u0441\u043A\u0435\u0442\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u043C\u0430\u0441\u043A\u0443\u043B\u0438\u043D\u043D\u043E\u0441\u0442\u0438 \u0438 \u0441\u043F\u043E\u043A\u043E\u0439\u0441\u0442\u0432\u0438\u0438. \u041F\u0440\u0438\u0441\u043C\u043E\u0442\u0440\u0435\u0432\u0448\u0438\u0441\u044C, \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0448\u044C, \u0447\u0442\u043E \u0443 \u0434\u043E\u043C\u0430 \u0435\u0441\u0442\u044C \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440, \u0435\u0441\u0442\u044C \u0446\u0435\u043B\u044C \u0438 \u0441\u0442\u0438\u043B\u044C. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0427\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0448\u044C. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "\u0414\u043E\u043C \u043D\u0435\u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E \u0443\u0434\u0430\u0447\u043D\u043E \u0432\u043F\u0438\u0441\u0430\u043D \u0432 \u043E\u043A\u0440\u0443\u0436\u0430\u044E\u0449\u0438\u0439 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442, \u043D\u0430\u0441\u0442\u043E\u043B\u044C\u043A\u043E, \u0447\u0442\u043E \u043F\u0440\u0438 \u0432\u0441\u0435\u0439 \u0441\u0432\u043E\u0435\u0439 \u0433\u0440\u0443\u0431\u043E\u0441\u0442\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438 \u0444\u043E\u0440\u043C, \u043E\u043D \u043D\u0435 \u043F\u0435\u0441\u0442\u0440\u0438\u0442 \u0438 \u043D\u0435 \u043F\u0435\u0440\u0435\u0442\u044F\u0433\u0438\u0432\u0430\u0435\u0442 \u043E\u0434\u0435\u044F\u043B\u043E \u043D\u0430 \u0441\u0435\u0431\u044F. \u041E\u043D - \u044D\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043A\u0440\u0435\u043F\u043E\u0441\u0442\u044C \u0441\u0440\u0435\u0434\u0438 \u043D\u0435\u043E\u0431\u044A\u044F\u0442\u043D\u044B\u0445 \u043F\u0440\u043E\u0441\u0442\u043E\u0440\u043E\u0432 \u0441\u0442\u0435\u043F\u0435\u0439 \u0438 \u043B\u0435\u0441\u043E\u0432, \u043C\u0435\u0441\u0442\u043E, \u0433\u0434\u0435 \u0442\u044B \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0448\u044C \u0441\u0435\u0431\u044F \u0432 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438. \u041E\u0431\u043E \u0432\u0441\u0435\u043C \u044D\u0442\u043E\u043C \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u0435\u0433\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "\u041F\u043E\u043D\u0438\u043C\u0430\u0435\u0448\u044C.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " \u041D\u0430\u0447\u043D\u0435\u043C \u0441 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0437\u0434\u0430\u043D\u0438\u0435 \u2014 \u0435\u0441\u0442\u044C \u0447\u0430\u0441\u0442\u044C \u0445\u043E\u043B\u043C\u0430, \u043E\u043D\u043E \u043D\u0435 \u0432\u043E\u0437\u0432\u044B\u0448\u0430\u0435\u0442\u0441\u044F \u043D\u0430\u0434 \u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\u043E\u043C, \u0430 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442 \u2014 \u0435\u0433\u043E \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u0432 \u043F\u0440\u044F\u043C\u043E\u043C \u0438 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u043D\u043E\u043C \u0441\u043C\u044B\u0441\u043B\u0435. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u0424\u0430\u0441\u0430\u0434 \u0434\u043E\u043C\u0430 \u043E\u0431\u0448\u0438\u0442 \u043C\u0435\u0442\u0430\u043B\u043B\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u043F\u0430\u043D\u0435\u043B\u044F\u043C\u0438, \u0447\u0435\u0440\u043D\u044B\u043C\u0438 \u0438 \u0442\u0435\u0440\u0440\u0430\u043A\u043E\u0442\u043E\u0432\u044B\u043C\u0438, \u2014 \u043A\u0430\u043A \u0430\u043A\u0446\u0435\u043D\u0442. \u0417\u0434\u0430\u043D\u0438\u0435 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u043E\u0433\u0440\u0430\u0434, \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442, \u043E\u043D\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u043E \u043F\u0440\u0438\u0440\u043E\u0434\u0435 \u0437\u0430 \u0441\u0447\u0435\u0442 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u0445 \u043E\u043A\u043E\u043D \u0438 \u0432\u0438\u0434\u043E\u0432\u043E\u0439 \u043F\u043B\u043E\u0449\u0430\u0434\u043A\u0438 \u043D\u0430 \u0432\u0442\u043E\u0440\u043E\u043C \u044D\u0442\u0430\u0436\u0435. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RiverHouseComponent_Template_button_click_82_listener() {
            return ctx._location.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section.river-house[_ngcontent-%COMP%] {\n  background-color: #1B1E20;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  min-height: 810px;\n  background: linear-gradient(0deg, rgba(27, 30, 32, 0.41), rgba(27, 30, 32, 0.41)), url('river-house-header.jpg') no-repeat center;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 175px;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 124px;\n  line-height: 100%;\n  letter-spacing: 0.04em;\n  color: #F2F2F2;\n  margin: 0 0 24px 0;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .thin[_ngcontent-%COMP%] {\n  font-weight: 100;\n  margin-right: 24px;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .gallery-box[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .gallery-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 205px;\n  height: 65px;\n  border: 1px solid #FFFFFF;\n  padding: 0 24px;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  color: #FFFFFF;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .gallery-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nsection.river-house[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .gallery-box[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:nth-child(1) {\n  margin-right: 64px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.short-over-view[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 175px 0 65px;\n  margin-bottom: 115px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.short-over-view[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 64px;\n  color: #FFFFFF;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.short-over-view[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #FFFFFF;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  min-width: 540px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.short-over-view[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.short-over-view[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  font-weight: 100;\n  margin-bottom: 8px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%] {\n  padding: 0 65px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 160px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%] {\n  padding-top: 74px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 64px;\n  color: #FFFFFF;\n  margin-bottom: 74px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1;\n  letter-spacing: 0.04em;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #FFFFFF;\n  margin-bottom: 48px;\n  font-weight: 100;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  margin: none;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .team[_ngcontent-%COMP%]   .team-img[_ngcontent-%COMP%] {\n  margin-right: 115px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .see[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 160px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .see[_ngcontent-%COMP%]   .see-img[_ngcontent-%COMP%] {\n  margin-right: 60px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .see[_ngcontent-%COMP%]   .see-box[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  max-width: 530px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .see[_ngcontent-%COMP%]   .see-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 64px;\n  margin-bottom: 54px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .see[_ngcontent-%COMP%]   .see-box[_ngcontent-%COMP%]   .see-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 140%;\n  font-weight: 100;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%] {\n  margin-bottom: 88px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%]   .feel-img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%]   .feel-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%]   .feel-box[_ngcontent-%COMP%]   .feel-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  color: white;\n  align-items: center;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%]   .feel-box[_ngcontent-%COMP%]   .feel-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 64px;\n  margin: 0 102px 0 0;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .feel[_ngcontent-%COMP%]   .feel-box[_ngcontent-%COMP%]   .feel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 24px;\n  line-height: 140%;\n  text-align: justify;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%] {\n  margin-bottom: 450px;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%]   .understand-img-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%]   .understand-img-box[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  position: absolute;\n  top: 75%;\n  left: 13%;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%]   .understand-text-box[_ngcontent-%COMP%] {\n  max-width: 508px;\n  max-height: 476px;\n  margin: 8% 22% 0 auto;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%]   .understand-text-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 64px;\n  margin-bottom: 62px;\n  color: #FFFFFF;\n}\nsection.river-house[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]   article.subject[_ngcontent-%COMP%]   .understand[_ngcontent-%COMP%]   .understand-text-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 100;\n  font-size: 24px;\n  line-height: 140%;\n  letter-spacing: 0.08em;\n  color: #FFFFFF;\n  text-align: justify;\n}\nsection.river-house[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  padding: 0 22px;\n}\nsection.river-house[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  margin-bottom: 30px;\n}\nsection.river-house[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yaXZlci1ob3VzZS9FOlxcZGV2XFxxdWFkZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJpdmVyLWhvdXNlXFxyaXZlci1ob3VzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yaXZlci1ob3VzZS9yaXZlci1ob3VzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7QURDRTtFQUNFLGlCQUFBO0VBQ0EsaUlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FETUk7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNKTjtBREtNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSFI7QURLUTtFQUNFLGVBQUE7QUNIVjtBRE1RO0VBQ0Usa0JBQUE7QUNKVjtBRFdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNUTjtBRFdNO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1RSO0FEV007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRFdVO0VBQ0UscUJBQUE7QUNUWjtBRFVZO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQ1JkO0FEZUk7RUFDRSxlQUFBO0FDYk47QURlTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUNiUjtBRGVRO0VBQ0UsaUJBQUE7QUNiVjtBRGNVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWlo7QURlVTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQ2JaO0FEY1k7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDWmQ7QURjYztFQUNFLFlBQUE7QUNaaEI7QURrQlE7RUFDRSxtQkFBQTtBQ2hCVjtBRG9CTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ2xCUjtBRG9CUTtFQUNFLGtCQUFBO0FDbEJWO0FEcUJRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDbkJWO0FEcUJVO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNuQlo7QURzQlk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3BCZDtBRHlCTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUN2QlI7QUR3QlE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUN0QlY7QUR1QlU7RUFDRSxXQUFBO0FDckJaO0FEeUJVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDdkJaO0FEd0JZO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUN0QmQ7QUR3Qlk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDdEJkO0FENEJNO0VBQ0Usb0JBQUE7QUMxQlI7QUQyQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDekJWO0FEMkJVO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ3pCWjtBRDRCUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQzFCVjtBRDRCVTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDM0JaO0FENkJVO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQzNCWjtBRGlDRTtFQUNFLGVBQUE7QUMvQko7QURnQ0k7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzlCTjtBRCtCTTtFQUNFLFdBQUE7QUM3QlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JpdmVyLWhvdXNlL3JpdmVyLWhvdXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbi5yaXZlci1ob3VzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUUyMDtcclxuXHJcbiAgaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDgxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjcsIDMwLCAzMiwgMC40MSksIHJnYmEoMjcsIDMwLCAzMiwgMC40MSkpLCB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcml2ZXItaG91c2UtaGVhZGVyLmpwZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNzVweDtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTI0cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgbWFyZ2luOiAwIDAgMjRweCAwO1xyXG5cclxuICAgICAgLnRoaW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mYXQge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nYWxsZXJ5LWJveCB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYm94IHtcclxuICAgICAgICB3aWR0aDogMjA1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNjRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1haW4ge1xyXG4gICAgYXJ0aWNsZS5zaG9ydC1vdmVyLXZpZXcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTc1cHggMCA2NXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMTVweDtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIH1cclxuICAgICAgLm92ZXJ2aWV3IHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtaW4td2lkdGg6IDU0MHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXJ0aWNsZS5zdWJqZWN0IHtcclxuICAgICAgcGFkZGluZzogMCA2NXB4O1xyXG5cclxuICAgICAgLnRlYW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcblxyXG4gICAgICAgIC50ZWFtLWJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNzRweDtcclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDc0cHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuXHJcbiAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRlYW0taW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2VlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XHJcblxyXG4gICAgICAgIC5zZWUtaW1nIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWUtYm94IHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MzBweDtcclxuXHJcbiAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VlLXRleHQge1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmVlbCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODhweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuZmVlbC1pbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWVsLWJveCB7XHJcbiAgICAgICAgICAuZmVlbC10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMDJweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVuZGVyc3RhbmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQ1MHB4O1xyXG4gICAgICAgIC51bmRlcnN0YW5kLWltZy1ib3h7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA3NSU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEzJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVuZGVyc3RhbmQtdGV4dC1ib3gge1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiA1MDhweDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDQ3NnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiA4JSAyMiUgMCBhdXRvO1xyXG5cclxuICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgLy9mb250LWZhbWlseTogVFQgTm9ybXMgUHJvO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDYycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0MCU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgcGFkZGluZzogMCAyMnB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJzZWN0aW9uLnJpdmVyLWhvdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFCMUUyMDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgaGVhZGVyIHtcbiAgbWluLWhlaWdodDogODEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI3LCAzMCwgMzIsIDAuNDEpLCByZ2JhKDI3LCAzMCwgMzIsIDAuNDEpKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9yaXZlci1ob3VzZS1oZWFkZXIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNzVweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiAxMjRweDtcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiAjRjJGMkYyO1xuICBtYXJnaW46IDAgMCAyNHB4IDA7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIGhlYWRlciBoMSAudGhpbiB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgaGVhZGVyIC5nYWxsZXJ5LWJveCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBoZWFkZXIgLmdhbGxlcnktYm94IC5ib3gge1xuICB3aWR0aDogMjA1cHg7XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgaGVhZGVyIC5nYWxsZXJ5LWJveCAuYm94OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBoZWFkZXIgLmdhbGxlcnktYm94IC5ib3g6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLXJpZ2h0OiA2NHB4O1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc2hvcnQtb3Zlci12aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwIDE3NXB4IDAgNjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTE1cHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zaG9ydC1vdmVyLXZpZXcgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA2NHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnNob3J0LW92ZXItdmlldyAub3ZlcnZpZXcge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi13aWR0aDogNTQwcHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zaG9ydC1vdmVyLXZpZXcgLm92ZXJ2aWV3IHAgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnNob3J0LW92ZXItdmlldyAub3ZlcnZpZXcgcCBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3Qge1xuICBwYWRkaW5nOiAwIDY1cHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC50ZWFtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLnRlYW0gLnRlYW0tYm94IHtcbiAgcGFkZGluZy10b3A6IDc0cHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC50ZWFtIC50ZWFtLWJveCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDY0cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA3NHB4O1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAudGVhbSAudGVhbS1ib3ggdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC50ZWFtIC50ZWFtLWJveCB1bCBsaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAudGVhbSAudGVhbS1ib3ggdWwgbGk6bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luOiBub25lO1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAudGVhbSAudGVhbS1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDExNXB4O1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAuc2VlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNjBweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLnNlZSAuc2VlLWltZyB7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLnNlZSAuc2VlLWJveCB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBtYXgtd2lkdGg6IDUzMHB4O1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAuc2VlIC5zZWUtYm94IGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNTRweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLnNlZSAuc2VlLWJveCAuc2VlLXRleHQgcCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC5mZWVsIHtcbiAgbWFyZ2luLWJvdHRvbTogODhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLmZlZWwgLmZlZWwtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC5mZWVsIC5mZWVsLWltZyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLmZlZWwgLmZlZWwtYm94IC5mZWVsLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogd2hpdGU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC5mZWVsIC5mZWVsLWJveCAuZmVlbC10ZXh0IGgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luOiAwIDEwMnB4IDAgMDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLmZlZWwgLmZlZWwtYm94IC5mZWVsLXRleHQgcCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE0MCU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC51bmRlcnN0YW5kIHtcbiAgbWFyZ2luLWJvdHRvbTogNDUwcHg7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC51bmRlcnN0YW5kIC51bmRlcnN0YW5kLWltZy1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC51bmRlcnN0YW5kIC51bmRlcnN0YW5kLWltZy1ib3ggOm50aC1jaGlsZCgyKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NSU7XG4gIGxlZnQ6IDEzJTtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgbWFpbiBhcnRpY2xlLnN1YmplY3QgLnVuZGVyc3RhbmQgLnVuZGVyc3RhbmQtdGV4dC1ib3gge1xuICBtYXgtd2lkdGg6IDUwOHB4O1xuICBtYXgtaGVpZ2h0OiA0NzZweDtcbiAgbWFyZ2luOiA4JSAyMiUgMCBhdXRvO1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBtYWluIGFydGljbGUuc3ViamVjdCAudW5kZXJzdGFuZCAudW5kZXJzdGFuZC10ZXh0LWJveCBoMyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNjJweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5zZWN0aW9uLnJpdmVyLWhvdXNlIG1haW4gYXJ0aWNsZS5zdWJqZWN0IC51bmRlcnN0YW5kIC51bmRlcnN0YW5kLXRleHQtYm94IHAge1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNDAlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgZm9vdGVyIHtcbiAgcGFkZGluZzogMCAyMnB4O1xufVxuc2VjdGlvbi5yaXZlci1ob3VzZSBmb290ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbnNlY3Rpb24ucml2ZXItaG91c2UgZm9vdGVyIGJ1dHRvbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiverHouseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-river-house',
          templateUrl: './river-house.component.html',
          styleUrls: ['./river-house.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\dev\quader\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
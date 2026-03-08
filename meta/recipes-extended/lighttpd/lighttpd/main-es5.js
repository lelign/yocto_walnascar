(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/iru/angular_5161/pbx-mtv-508-frontend-4.19/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0NCe":
    /*!*****************************************************************!*\
      !*** ./src/app/components/selectfield/selectfield.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SelectfieldComponent */

    /***/
    function NCe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectfieldComponent", function () {
        return SelectfieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../fieldbody/fieldbody.component */
      "1kPW");

      var _c0 = ["*"];

      var SelectfieldComponent = /*#__PURE__*/function () {
        function SelectfieldComponent() {
          _classCallCheck(this, SelectfieldComponent);

          this.title = '';

          this.onChange = function () {};

          this.onTouched = function () {};

          this.isNocase = false;
        }

        _createClass(SelectfieldComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }, {
          key: "value",
          get: function get() {
            return +this.val;
          },
          set: function set(val) {
            this.val = val;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.val = +value;
          }
        }, {
          key: "changeValue",
          value: function changeValue(value) {
            this.onChange(+value);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
        }]);

        return SelectfieldComponent;
      }();

      SelectfieldComponent.ɵfac = function SelectfieldComponent_Factory(t) {
        return new (t || SelectfieldComponent)();
      };

      SelectfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SelectfieldComponent,
        selectors: [["app-selectfield"]],
        inputs: {
          title: "title",
          nocase: "nocase"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return SelectfieldComponent;
          }),
          multi: true
        }])],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 4,
        consts: [[3, "title", "nocase"], [1, "form-select", 3, "ngModel", "disabled", "ngModelChange"]],
        template: function SelectfieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SelectfieldComponent_Template_select_ngModelChange_1_listener($event) {
              return ctx.val = $event;
            })("ngModelChange", function SelectfieldComponent_Template_select_ngModelChange_1_listener() {
              return ctx.changeValue(ctx.val);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("nocase", ctx.isNocase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val)("disabled", ctx.isDisabled);
          }
        },
        directives: [_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__["FieldBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNlbGVjdGZpZWxkLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUiIsImZpbGUiOiJzZWxlY3RmaWVsZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCIuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhZjY5O1xufVxuLmJ1dHRvbi1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVCNUI1O1xufVxuLmJ1dHRvbi1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIyQjM5O1xufVxuLmJ1dHRvbi15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURENzQ3O1xufVxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzY3NkE2Qztcbn1cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2Q0ZDllMTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jZW50ZXItYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZm9ybS1zZWxlY3Q6Zm9jdXMsXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuLmJ0bi1maXhlZC13aWR0aCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWluLXdpZHRoOiA2ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5idG4tZml4ZWQtd2lkdGg6Zmlyc3QtY2hpbGQsXG4uYnRuLWZpeGVkLXdpZHRoOmhvdmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnRuLWZpeGVkLXdpZHRoLFxuICAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4uYnRuLWZpeGVkLXdpZHRoW2Rpc2FibGVkXSxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXJbZGlzYWJsZWRdIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbiIsIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiBAcm93LXRleHQ7XG4gIH1cblxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRlbihAbmF2YmFyLXRleHQsIDE1JSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuLnJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbiAgICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuXG4uYnRuLWZpeGVkLXdpZHRoLCAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDZlbTtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCBcItC/0L7QtNC/0YDRi9Cz0LjQstCw0L3QuNC1XCIgYm9yZGVyXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINC60L3QvtC/0LrQsNC80LhcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogZGFya2VuKHdoaXRlLCAxNSUpO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "1kPW":
    /*!*************************************************************!*\
      !*** ./src/app/components/fieldbody/fieldbody.component.ts ***!
      \*************************************************************/

    /*! exports provided: FieldBodyComponent */

    /***/
    function kPW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FieldBodyComponent", function () {
        return FieldBodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["*"];

      var FieldBodyComponent = /*#__PURE__*/function () {
        function FieldBodyComponent() {
          _classCallCheck(this, FieldBodyComponent);

          this.title = '';
          this.labelClass = 'col-xl-5 col-lg-4 col-md-12';
          this.inputClass = 'col-xl-7 col-lg-8 col-md-12';
          this.isNocase = false;
        }

        _createClass(FieldBodyComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }]);

        return FieldBodyComponent;
      }();

      FieldBodyComponent.ɵfac = function FieldBodyComponent_Factory(t) {
        return new (t || FieldBodyComponent)();
      };

      FieldBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FieldBodyComponent,
        selectors: [["app-fieldbody"]],
        inputs: {
          title: "title",
          nocase: "nocase"
        },
        ngContentSelectors: _c0,
        decls: 7,
        vars: 7,
        consts: [[1, "form-group", "row"], [1, "col-form-label"]],
        template: function FieldBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.labelClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isNocase === true ? ctx.title : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.inputClass);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImZpZWxkYm9keS5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoiZmllbGRib2R5LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "4l9g":
    /*!*******************************************!*\
      !*** ./src/app/views/system.component.ts ***!
      \*******************************************/

    /*! exports provided: SystemComponent */

    /***/
    function l9g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystemComponent", function () {
        return SystemComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/timezone/timezone.component */
      "4lV0");
      /* harmony import */


      var _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/panelhr/panelhr.component */
      "v3u4");
      /* harmony import */


      var _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/selectfield/selectfield.component */
      "0NCe");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");
      /* harmony import */


      var _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../components/fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../components/modal/modal.component */
      "7aL3");

      var _c0 = ["systemForm"];

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      var SystemComponent = /*#__PURE__*/function () {
        function SystemComponent(wsData) {
          var _this = this;

          _classCallCheck(this, SystemComponent);

          this.wsData = wsData;
          this.networkSettings = this.wsData.copyNetworkSettings();
          this.systemData = this.wsData.settingsData;
          this.diagnosticsData = this.wsData.diagnosticsData;
          this.logUrl = '';
          this.codeword = '';
          this.confirmCodeword = '';
          this.wsData.subscribeNewData(function () {
            return _this.newdata();
          });

          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production) {
            this.logUrl = 'http://' + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].dev_ip + '/log/';
          } else {
            var loc = window.location;
            this.logUrl = 'http://' + loc.host + '/log/';
          }
        }

        _createClass(SystemComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.systemForm.form.pristine) {
              this.systemData = this.wsData.copySettings();
              this.networkSettings = this.wsData.copyNetworkSettings();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.newdata();
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.systemForm.form.markAsPristine();
            this.newdata();
          }
        }, {
          key: "sendForm",
          value: function sendForm() {
            this.wsData.readSettings(this.systemData);
            this.wsData.sendSet();
            this.systemForm.form.markAsPristine();
          }
        }, {
          key: "EventLogOpen",
          value: function EventLogOpen() {
            window.open(this.logUrl);
          }
        }, {
          key: "SetTime",
          value: function SetTime() {
            this.wsData.sendTime();
          }
        }, {
          key: "setNewCodeword",
          value: function setNewCodeword(val) {
            this.wsData.send_codeword(val);
          }
        }, {
          key: "reboot",
          value: function reboot() {
            this.wsData.sendReboot();
          }
        }, {
          key: "sendIpForm",
          value: function sendIpForm() {
            this.wsData.readNetworkSettings(this.networkSettings);
            this.wsData.sendNetworkSettings();
            this.systemForm.form.markAsPristine();
          }
        }, {
          key: "ConfigExport",
          value: function ConfigExport() {
            this.wsData.sendConfigExport();
          }
        }, {
          key: "ConfigImport",
          value: function ConfigImport() {
            var dlAnchorElem = document.getElementById('jsonFile');
            dlAnchorElem.click();
          }
        }, {
          key: "ConfigRead",
          value: function ConfigRead(e) {
            var _this2 = this;

            var files = e.target.files;
            var jsonFile = files[0];
            var reader = new FileReader();
            reader.addEventListener('load', function (loadEvent) {
              try {
                _this2.wsData.sendConfigImport(JSON.parse(reader.result));
              } catch (error) {
                console.error(error);
              }
            });
            reader.readAsText(jsonFile);
          }
        }]);

        return SystemComponent;
      }();

      SystemComponent.ɵfac = function SystemComponent_Factory(t) {
        return new (t || SystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_2__["WsdataService"]));
      };

      SystemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SystemComponent,
        selectors: [["app-system"]],
        viewQuery: function SystemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.systemForm = _t.first);
          }
        },
        decls: 63,
        vars: 43,
        consts: [["systemForm", "ngForm"], [3, "data", "modelStr"], ["title", "Configuration"], ["title", "DNS Server", "nocase", "", "name", "dnsServer", 3, "ngModel", "ngModelChange"], ["title", "NTP Server", "nocase", "", "name", "ntpServer", 3, "ngModel", "ngModelChange"], ["title", "Time Zone", "name", "timeZone", 3, "ngModel", "ngModelChange"], ["title", "Cascading Settings"], ["title", "Cascade Mode", "name", "cascade_mode", 3, "ngModel", "ngModelChange"], [3, "value"], ["title", "Module 2 IP", "nocase", "", "name", "module_2_ip", 3, "ngModel", "disabled", "ngModelChange"], ["title", "Module 3 IP", "nocase", "", "name", "module_3_ip", 3, "ngModel", "disabled", "ngModelChange"], ["title", "Module 4 IP", "nocase", "", "name", "module_4_ip", 3, "ngModel", "disabled", "ngModelChange"], ["title", "Module 5 IP", "nocase", "", "name", "module_5_ip", 3, "ngModel", "disabled", "ngModelChange"], [3, "disabled", "apply", "cancel"], ["title", "Diagnostics"], ["title", "Power, W", "readonly", "", "name", "power_W", 3, "ngModel", "ngModelChange"], ["title", "Temperature, \xB0C", "readonly", "", "name", "temperature_C", 3, "ngModel", "ngModelChange"], ["title", "Fan Status", "readonly", "", "name", "fan", 3, "ngModel", "hidden", "ngModelChange"], ["title", "Uptime", "readonly", "", "name", "uptime", 3, "ngModel", "ngModelChange"], ["title", "System Time", "readonly", "", "name", "sysDateTime", 3, "ngModel", "ngModelChange"], ["title", "Event Log"], ["type", "button", 1, "btn", "button-default", "btn-fixed-width", 3, "click"], ["title", "Other"], ["title", "Time", "name", "setfrompc", "button", "From PC", 3, "ok"], ["title", "Layout Preset", 3, "hidden"], ["id", "downloadAnchorElem", 2, "display", "none"], ["type", "file", "id", "jsonFile", "name", "jsonFile", "accept", ".json", 2, "display", "none", 3, "change"], ["title", "System", "name", "reboot", "button", "Reboot", 3, "ok"], ["title", "Network Settings"], ["nocase", "", "title", "IP Address", "name", "eth0_ip", 3, "ngModel", "ngModelChange"], ["title", "Netmask", "name", "eth0_mask", 3, "ngModel", "ngModelChange"], ["title", "Gateway", "name", "eth0_gateway", 3, "ngModel", "ngModelChange"], ["title", "MAC", "readonly", "", "nocase", "", "name", "eth0_mac", 3, "ngModel", "ngModelChange"], ["title", "Version Information"], ["title", "Version", "readonly", "", "name", "version_software", 3, "ngModel", "ngModelChange"], ["title", "Build ID", "nocase", "", "readonly", "", "name", "build_id", 3, "ngModel", "ngModelChange"], ["title", "Frontend Version", "readonly", "", "name", "frontend_version", 3, "ngModel", "ngModelChange"], ["title", "Change Password"], ["title", "New Password", "type", "password", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["title", "Confirm Password", "type", "password", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["title", ""], ["type", "button", 1, "btn", "button-default", "btn-fixed-width", 3, "disabled", "click"]],
        template: function SystemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-view", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-inputfield", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_4_listener($event) {
              return ctx.systemData.dns = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-inputfield", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_5_listener($event) {
              return ctx.systemData.ntp = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-timezone", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_timezone_ngModelChange_6_listener($event) {
              return ctx.systemData.time_zone = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-panelhr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-selectfield", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_selectfield_ngModelChange_8_listener($event) {
              return ctx.systemData.cascade_mode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Standalone");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cascade 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Cascade 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cascade 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cascade 5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Slave");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-inputfield", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_21_listener($event) {
              return ctx.systemData.ip_2 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "app-inputfield", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_22_listener($event) {
              return ctx.systemData.ip_3 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "app-inputfield", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_23_listener($event) {
              return ctx.systemData.ip_4 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "app-inputfield", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_24_listener($event) {
              return ctx.systemData.ip_5 = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "app-setcancelbutton", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("apply", function SystemComponent_Template_app_setcancelbutton_apply_25_listener() {
              return ctx.sendForm();
            })("cancel", function SystemComponent_Template_app_setcancelbutton_cancel_25_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "app-panel", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-inputfield", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_27_listener($event) {
              return ctx.diagnosticsData.diagnostics.power_W = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "app-inputfield", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_28_listener($event) {
              return ctx.diagnosticsData.diagnostics.temperature_C = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "app-inputfield", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_29_listener($event) {
              return ctx.diagnosticsData.diagnostics.fan = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "app-inputfield", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_30_listener($event) {
              return ctx.diagnosticsData.diagnostics.uptime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "app-inputfield", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_31_listener($event) {
              return ctx.wsData.sysDateTime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "app-fieldbody", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_33_listener() {
              return ctx.EventLogOpen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Open");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-panelhr", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "app-modal", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ok", function SystemComponent_Template_app_modal_ok_36_listener() {
              return ctx.SetTime();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Set system time from PC? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "app-fieldbody", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_39_listener() {
              return ctx.ConfigExport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_41_listener() {
              return ctx.ConfigImport();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Load");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SystemComponent_Template_input_change_44_listener($event) {
              return ctx.ConfigRead($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "app-modal", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ok", function SystemComponent_Template_app_modal_ok_45_listener() {
              return ctx.reboot();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Reboot? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "app-panel", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "app-inputfield", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_48_listener($event) {
              return ctx.networkSettings.ip = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "app-inputfield", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_49_listener($event) {
              return ctx.networkSettings.mask = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "app-inputfield", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_50_listener($event) {
              return ctx.networkSettings.gateway = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "app-inputfield", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_51_listener($event) {
              return ctx.networkSettings.mac = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "app-setcancelbutton", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("apply", function SystemComponent_Template_app_setcancelbutton_apply_52_listener() {
              return ctx.sendIpForm();
            })("cancel", function SystemComponent_Template_app_setcancelbutton_cancel_52_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "app-panel", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "app-inputfield", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_54_listener($event) {
              return ctx.diagnosticsData.system.version_software = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "app-inputfield", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_55_listener($event) {
              return ctx.diagnosticsData.system.build_id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "app-inputfield", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_56_listener($event) {
              return ctx.wsData.version.frontend_version = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "app-panel", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "app-inputfield", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_58_listener($event) {
              return ctx.codeword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "app-inputfield", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SystemComponent_Template_app_inputfield_ngModelChange_59_listener($event) {
              return ctx.confirmCodeword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "app-fieldbody", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemComponent_Template_button_click_61_listener() {
              return ctx.setNewCodeword(ctx.codeword);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Set");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.dns);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.ntp);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.time_zone);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.cascade_mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.ip_2)("disabled", ctx.systemData.cascade_mode < 1 || ctx.systemData.cascade_mode == 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.ip_3)("disabled", ctx.systemData.cascade_mode < 2 || ctx.systemData.cascade_mode == 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.ip_4)("disabled", ctx.systemData.cascade_mode < 3 || ctx.systemData.cascade_mode == 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.systemData.ip_5)("disabled", ctx.systemData.cascade_mode < 4 || ctx.systemData.cascade_mode == 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.diagnostics.power_W);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.diagnostics.temperature_C);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.diagnostics.fan)("hidden", ctx.wsData.settingsData.model === 2 || ctx.wsData.settingsData.model === 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.diagnostics.uptime);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wsData.sysDateTime);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.systemData.cascade_mode == 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.networkSettings.ip);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.networkSettings.mask);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.networkSettings.gateway);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.networkSettings.mac);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.system.version_software);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.diagnosticsData.system.build_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wsData.version.frontend_version);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c1))("ngModel", ctx.codeword);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c1))("ngModel", ctx.confirmCodeword);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.codeword !== ctx.confirmCodeword);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_7__["TimezoneComponent"], _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_8__["PanelHrComponent"], _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_9__["SelectfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_10__["SetCancelButtonComponent"], _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_11__["FieldBodyComponent"], _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_12__["ModalComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInN5c3RlbS5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoic3lzdGVtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "4lV0":
    /*!***********************************************************!*\
      !*** ./src/app/components/timezone/timezone.component.ts ***!
      \***********************************************************/

    /*! exports provided: TimezoneComponent */

    /***/
    function lV0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimezoneComponent", function () {
        return TimezoneComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tzlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tzlist */
      "MoUQ");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TimezoneComponent_option_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r2.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.key);
        }
      }

      function TimezoneComponent_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
        }
      }

      var TimezoneComponent = /*#__PURE__*/function () {
        function TimezoneComponent() {
          _classCallCheck(this, TimezoneComponent);

          this.tzlist = _tzlist__WEBPACK_IMPORTED_MODULE_2__["tzlist"];
          this.title = '';

          this.onChange = function () {};

          this.onTouched = function () {};

          this.val = Object.keys(_tzlist__WEBPACK_IMPORTED_MODULE_2__["tzlist"])[0];
          this.val2 = _tzlist__WEBPACK_IMPORTED_MODULE_2__["tzlist"][this.val][0];
        }

        _createClass(TimezoneComponent, [{
          key: "value",
          get: function get() {
            return this.val + '/' + this.val2;
          },
          set: function set(val) {
            this.val = val;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (typeof value !== 'string') {
              return;
            }

            var valueSplit = value.split('/');
            this.val = valueSplit[0];

            if (valueSplit.length === 2) {
              this.val2 = valueSplit[1];
            } else {
              this.val2 = valueSplit[1] + '/' + valueSplit[2];
            }
          }
        }, {
          key: "changeValue",
          value: function changeValue() {
            this.onChange(this.val + '/' + this.val2);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
        }, {
          key: "changeRegion",
          value: function changeRegion() {
            this.val2 = _tzlist__WEBPACK_IMPORTED_MODULE_2__["tzlist"][this.val][0];
            this.changeValue();
          }
        }]);

        return TimezoneComponent;
      }();

      TimezoneComponent.ɵfac = function TimezoneComponent_Factory(t) {
        return new (t || TimezoneComponent)();
      };

      TimezoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TimezoneComponent,
        selectors: [["app-timezone"]],
        inputs: {
          title: "title"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return TimezoneComponent;
          }),
          multi: true
        }])],
        decls: 6,
        vars: 9,
        consts: [[3, "title"], [1, "form-select", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function TimezoneComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimezoneComponent_Template_select_ngModelChange_1_listener($event) {
              return ctx.val = $event;
            })("ngModelChange", function TimezoneComponent_Template_select_ngModelChange_1_listener() {
              return ctx.changeRegion();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimezoneComponent_option_2_Template, 2, 2, "option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "keyvalue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimezoneComponent_Template_select_ngModelChange_4_listener($event) {
              return ctx.val2 = $event;
            })("ngModelChange", function TimezoneComponent_Template_select_ngModelChange_4_listener() {
              return ctx.changeValue();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TimezoneComponent_option_5_Template, 2, 2, "option", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx.tzlist));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.val2)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tzlist[ctx.val]);
          }
        },
        directives: [_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_3__["FieldBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\nselect[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInRpbWV6b25lLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUjtBQXRFQTtFQUNJLGlCQUFBO0FBd0VKIiwiZmlsZSI6InRpbWV6b25lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3NcIjtcbnNlbGVjdCB7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "73T4":
    /*!***********************************************************!*\
      !*** ./src/app/components/checkbox/checkbox.component.ts ***!
      \***********************************************************/

    /*! exports provided: CheckboxComponent */

    /***/
    function T4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
        return CheckboxComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CheckboxComponent = /*#__PURE__*/function () {
        function CheckboxComponent() {
          _classCallCheck(this, CheckboxComponent);

          this.title = '';
          this.name = '';

          this.onChange = function () {};

          this.onTouched = function () {};
        }

        _createClass(CheckboxComponent, [{
          key: "value",
          get: function get() {
            return this.val;
          },
          set: function set(val) {
            this.val = val;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.val = value;
          } // за изменением значения компонента следим через ngModelChange
          // (при возникновении ngModelChanged вызываем функцию changeValue, которая сделает значение числовым, если тип компонента number)

        }, {
          key: "changeValue",
          value: function changeValue(value) {
            if (value) {
              this.val = 0;
            } else {
              this.val = 1;
            }

            this.onChange(this.val);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
        }]);

        return CheckboxComponent;
      }();

      CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
        return new (t || CheckboxComponent)();
      };

      CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CheckboxComponent,
        selectors: [["app-checkbox"]],
        inputs: {
          title: "title",
          name: "name"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return CheckboxComponent;
          }),
          multi: true
        }])],
        decls: 4,
        vars: 5,
        consts: [[1, "form-check"], ["type", "checkbox", "value", "", 1, "form-check-input", 3, "id", "checked", "disabled", "change"], [1, "form-check-label", 3, "for"]],
        template: function CheckboxComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_Template_input_change_1_listener() {
              return ctx.changeValue(ctx.val);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.name)("checked", ctx.val)("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
          }
        },
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #212529;\n}\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #44af69;\n  border-color: #44af69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImNoZWNrYm94LmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUjtBQXRFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQXdFSjtBQXJFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUF1RUoiLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbmF2YmFyLWNvbG9yOiAjMkY0MDUwO1xuQG5hdmJhci10ZXh0OiAjQTdCMUMyO1xuQHJvdy10ZXh0OiAjNjc2QTZDO1xuQGNhcmQtYmFja2dyb3VuZDogI2YzZjNmNDtcbkBidXR0b24tY29sb3I6ICM0NGFmNjk7XG5AYnV0dG9uLWdyZXktY29sb3I6ICNCNUI1QjU7XG5AYnV0dG9uLXJlZC1jb2xvcjogI0RCMkIzOTtcbkBidXR0b24teWVsbG93LWNvbG9yOiAjRURENzQ3O1xuXG5Ac2lkZWJhci1uYXZiYXItY29sb3I6ICNGM0YzRjQ7XG5cbkBzaWRlYmFyLWNvbG9yOiAjM2U0MTQ0O1xuQHNpZGViYXItYWN0aXZlOiAjNjE2Yjc1O1xuQHNpZGViYXItZm9udDogI2E3YjFjMjtcbkBzaWRlYmFyLWZvbnQtYWN0aXZlOiAjRkZGO1xuXG5AZ3JlZW4tdGhlbWUtY29sb3I6ICM0NGFmNjk7XG5cbi5idXR0b24tZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWdyZXktY29sb3I7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXJlZC1jb2xvcjtcbn1cblxuLmJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24teWVsbG93LWNvbG9yO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb21tb24ubGVzc1wiO1xubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBncmVlbi10aGVtZS1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6IEBncmVlbi10aGVtZS1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiBAcm93LXRleHQ7XG4gIH1cblxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRlbihAbmF2YmFyLXRleHQsIDE1JSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuLnJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbiAgICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuXG4uYnRuLWZpeGVkLXdpZHRoLCAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDZlbTtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCBcItC/0L7QtNC/0YDRi9Cz0LjQstCw0L3QuNC1XCIgYm9yZGVyXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINC60L3QvtC/0LrQsNC80LhcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogZGFya2VuKHdoaXRlLCAxNSUpO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "7aL3":
    /*!*****************************************************!*\
      !*** ./src/app/components/modal/modal.component.ts ***!
      \*****************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function aL3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../fieldbody/fieldbody.component */
      "1kPW");

      var _c0 = ["*"];

      var ModalComponent = /*#__PURE__*/function () {
        function ModalComponent() {
          _classCallCheck(this, ModalComponent);

          this.title = '';
          this.name = '';
          this.button = '';
          this.hideCancel = false;
          this.ok = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.labelClass = 'col-xl-5 col-lg-4 col-md-12';
          this.inputClass = 'col-xl-7 col-lg-8 col-md-12';
          this.isNocase = false;
        }

        _createClass(ModalComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }, {
          key: "clickOk",
          value: function clickOk() {
            this.ok.emit();
          }
        }, {
          key: "clickCancel",
          value: function clickCancel() {
            this.cancel.emit();
          }
        }]);

        return ModalComponent;
      }();

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)();
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          title: "title",
          name: "name",
          button: "button",
          hideCancel: "hideCancel",
          nocase: "nocase"
        },
        outputs: {
          ok: "ok",
          cancel: "cancel"
        },
        ngContentSelectors: _c0,
        decls: 13,
        vars: 6,
        consts: [[3, "title", "nocase"], ["type", "button", "data-bs-toggle", "modal", 1, "btn", "button-default", "btn-fixed-width"], ["data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "button-default", "btn-fixed-width", 3, "click"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "button-default", "btn-fixed-width", 3, "hidden", "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_9_listener() {
              return ctx.clickOk();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " OK ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_11_listener() {
              return ctx.clickCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("nocase", ctx.isNocase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-bs-target", "#" + ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.button, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.hideCancel);
          }
        },
        directives: [_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_1__["FieldBodyComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.modal-body[_ngcontent-%COMP%] {\n  color: #676A6C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsIm1vZGFsLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUjtBQXJFQTtFQUNJLGNBQUE7QUF1RUoiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbmF2YmFyLWNvbG9yOiAjMkY0MDUwO1xuQG5hdmJhci10ZXh0OiAjQTdCMUMyO1xuQHJvdy10ZXh0OiAjNjc2QTZDO1xuQGNhcmQtYmFja2dyb3VuZDogI2YzZjNmNDtcbkBidXR0b24tY29sb3I6ICM0NGFmNjk7XG5AYnV0dG9uLWdyZXktY29sb3I6ICNCNUI1QjU7XG5AYnV0dG9uLXJlZC1jb2xvcjogI0RCMkIzOTtcbkBidXR0b24teWVsbG93LWNvbG9yOiAjRURENzQ3O1xuXG5Ac2lkZWJhci1uYXZiYXItY29sb3I6ICNGM0YzRjQ7XG5cbkBzaWRlYmFyLWNvbG9yOiAjM2U0MTQ0O1xuQHNpZGViYXItYWN0aXZlOiAjNjE2Yjc1O1xuQHNpZGViYXItZm9udDogI2E3YjFjMjtcbkBzaWRlYmFyLWZvbnQtYWN0aXZlOiAjRkZGO1xuXG5AZ3JlZW4tdGhlbWUtY29sb3I6ICM0NGFmNjk7XG5cbi5idXR0b24tZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWdyZXktY29sb3I7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXJlZC1jb2xvcjtcbn1cblxuLmJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24teWVsbG93LWNvbG9yO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb21tb24ubGVzc1wiO1xuXG4ubW9kYWwtYm9keSB7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbn07XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "AO/D":
    /*!*******************************************!*\
      !*** ./src/app/views/stream.component.ts ***!
      \*******************************************/

    /*! exports provided: StreamComponent */

    /***/
    function AOD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StreamComponent", function () {
        return StreamComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _hlsplayer_hlsplayer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hlsplayer/hlsplayer.component */
      "zciF");

      var StreamComponent = /*#__PURE__*/function () {
        function StreamComponent(wsData) {
          _classCallCheck(this, StreamComponent);

          this.wsData = wsData;
        }

        _createClass(StreamComponent, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }]);

        return StreamComponent;
      }();

      StreamComponent.ɵfac = function StreamComponent_Factory(t) {
        return new (t || StreamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]));
      };

      StreamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StreamComponent,
        selectors: [["app-stream"]],
        decls: 2,
        vars: 0,
        consts: [[1, "container-fluid"]],
        template: function StreamComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hlsplayer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_hlsplayer_hlsplayer_component__WEBPACK_IMPORTED_MODULE_2__["HlsPlayerComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInN0cmVhbS5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoic3RyZWFtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });

      var loc = window.location;
      var environment = {
        dev_ip: 'ws://' + loc.host + '/app',
        production: true
      };
      /***/
    },

    /***/
    "CnhB":
    /*!***********************************!*\
      !*** ./src/app/wsdata.service.ts ***!
      \***********************************/

    /*! exports provided: WsdataService */

    /***/
    function CnhB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WsdataService", function () {
        return WsdataService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tools */
      "Y+0W");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _websocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./websocket.service */
      "SGxG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var WsdataService = /*#__PURE__*/function () {
        function WsdataService(wsService, http, titleService) {
          var _this3 = this;

          _classCallCheck(this, WsdataService);

          this.wsService = wsService;
          this.http = http;
          this.titleService = titleService;
          this.connectionStatus = this.wsService.connectionStatus;
          this.newData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.sidebarRoutes = [];
          this.sidebarRoutesMaster = [{
            icon: 'fa-angle-double-down',
            label: 'Status',
            link: '/status'
          }, {
            icon: 'fa-cogs',
            label: 'Inputs Settings',
            link: '/settings'
          }, {
            icon: 'fa-th-large',
            label: 'Layout Editor',
            link: '/edit'
          }, {
            icon: 'fa fa-cog fa-spin fa-1x fa-fw',
            label: 'System',
            link: '/system'
          }];
          this.sidebarRoutesSlave = [{
            label: 'System',
            link: '/system'
          }];
          this.modelStr = 'PBX-MTV-508IP';
          this.versionUrl = 'assets/version.json';
          this.version = {
            frontend_version: ''
          };
          this.sysDateTime = ''; // хранение данных

          this.settingsData = {
            alarm_settings: {
              audio: {
                minimum_level: 0,
                threshold: 0
              },
              video: {
                threshold: 0
              }
            },
            layout: {
              grid: 0,
              clock: {
                enable: 0,
                x: 0,
                y: 0,
                scale_x: 0,
                scale_y: 0,
                label: '',
                style: 0,
                date_locale: 0
              },
              time_counter: {
                enable: 0,
                x: 0,
                y: 0,
                scale_x: 0,
                scale_y: 0
              },
              cell_style: [],
              audio_alarm_enable: [],
              video_alarm_enable: [],
              scte_104_display: [],
              teletext_page: 0,
              teletext_enable: 0,
              aspect_ratio_sd: [],
              sdi_format_display: [],
              umd_display: [],
              video: [],
              labels: []
            },
            sdi_label: [],
            solo: {
              enable: 0,
              input: 0
            },
            dns: '',
            ntp: '',
            time_zone: 'Europe/Moscow',
            model: 1,
            output_format: 0,
            hdmi_color: 0,
            cascade_mode: 0,
            ip_2: '',
            ip_3: '',
            ip_4: '',
            ip_5: '',
            gpio_mode: 0,
            network_settings: {
              gateway: '',
              ip: '',
              mac: '',
              mask: ''
            }
          };
          this.settinsPresetName = [''];
          this.diagnosticsData = {
            diagnostics: {
              fan: '',
              power_W: '0',
              temperature_C: '0',
              uptime: '',
              sys_date_time: 0
            },
            system: {
              build_id: '',
              version_software: ''
            },
            rand_value: 0,
            sdi_format: []
          };
          this.updateInfo = {
            sdi_format_list: []
          };
          this.layoutData = {
            inputs: [],
            labels: [],
            grid: 3,
            presets: [],
            presetName: '',
            dirty: 0,
            presetIndex: 0,
            audio: {
              minimum_level: 0,
              threshold: 0
            },
            video: {
              threshold: 0
            },
            teletextPage: 0
          };
          this.clockData = {
            enable: 0,
            pos: {
              x: 0,
              y: 0,
              scale_x: 0,
              scale_y: 0
            },
            label: '',
            style: 0,
            dateLocale: 0,
            update: true
          };
          this.timerData = {
            enable: 0,
            pos: {
              x: 0,
              y: 0,
              scale_x: 0,
              scale_y: 0
            },
            update: true
          };
          this.deviceRand = 0;
          this.show_version();
          wsService.subscribe(function (msg) {
            return _this3.message(msg);
          });
        }

        _createClass(WsdataService, [{
          key: "getInputName",
          value: function getInputName(index) {
            if (index >= this.settingsData.sdi_label.length) {
              return '';
            } else {
              return this.settingsData.sdi_label[index];
            }
          }
        }, {
          key: "setCellData",
          value: function setCellData(index, value) {
            var _this4 = this;

            if (this.layoutData.inputs.length <= index) {
              return;
            }

            this.layoutData.inputs.map(function (v, i) {
              if (v.input === value.input) {
                v.input = _this4.layoutData.inputs[index].input;
              }

              return v;
            });
            this.layoutData.inputs[index].input = value.input;
            this.layoutData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.layoutData);
          }
        }, {
          key: "removeIndexArray",
          value: function removeIndexArray(list, data) {
            list.forEach(function (v) {
              var index = data.indexOf(v);

              if (index >= 0) {
                data.splice(index, 1);
              }
            });
          }
        }, {
          key: "getNextInput",
          value: function getNextInput() {
            var input = Array.from(Array(40).keys());
            var stripArray = [];

            if (this.settingsData.cascade_mode === 1) {
              stripArray = [15];
            } else if (this.settingsData.cascade_mode === 2) {
              stripArray = [15, 23];
            } else if (this.settingsData.cascade_mode === 3) {
              stripArray = [15, 23, 31];
            } else if (this.settingsData.cascade_mode === 4) {
              stripArray = [15, 23, 31, 39];
            }

            this.removeIndexArray(stripArray, input);
            this.layoutData.inputs.forEach(function (value) {
              var index = input.indexOf(value.input);

              if (index >= 0) {
                input.splice(index, 1);
              }
            });
            return input[0] || 0;
          }
        }, {
          key: "getNextLabel",
          value: function getNextLabel() {
            var input = Array.from(Array(40).keys());
            var stripArray = [];

            if (this.settingsData.cascade_mode === 1) {
              stripArray = [15]; //7
            } else if (this.settingsData.cascade_mode === 2) {
              stripArray = [15, 23]; //7 15
            } else if (this.settingsData.cascade_mode === 3) {
              stripArray = [15, 23, 31]; //7 15 23
            } else if (this.settingsData.cascade_mode === 4) {
              stripArray = [15, 23, 31, 39]; // 7 15 23 31
            }

            this.removeIndexArray(stripArray, input);
            this.layoutData.labels.forEach(function (value) {
              var index = input.indexOf(value.id);

              if (index >= 0) {
                input.splice(index, 1);
              }
            });
            return input[0] || 0;
          }
        }, {
          key: "addWindow",
          value: function addWindow(value, addType) {
            if (addType === 0) {
              if (this.layoutData.inputs.length < this.getInputNumber(this.settingsData.cascade_mode)) {
                var _window = this.posToDefaultWindow(value);

                _window.input = this.getNextInput();
                this.layoutData.inputs.push(_window);
              }
            } else if (addType === 1) {
              this.clockData.enable = 1;
              this.clockData.pos = value;
              this.clockData.style = 0;
              this.clockData.dateLocale = 0;
              this.clockData.update = true;
            } else if (addType === 2) {
              this.timerData.enable = 1;
              this.timerData.pos = value;
              this.timerData.update = true;
            } else if (addType === 3) {
              if (this.layoutData.labels.length < this.getInputNumber(this.settingsData.cascade_mode)) {
                var label = this.posToDefaultLabel(value);
                label.id = this.getNextLabel();
                label.text = 'Label ' + (label.id + 1);
                this.layoutData.labels.push(label);
              }
            }

            this.layoutData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.layoutData);
          }
        }, {
          key: "removeWindow",
          value: function removeWindow(value) {
            if (this.clockData.pos === value) {
              this.clockData.enable = 0;
            } else if (this.timerData.pos === value) {
              this.timerData.enable = 0;
            } else {
              this.layoutData.inputs = this.layoutData.inputs.filter(function (v) {
                if (value.x === v.pos.x && value.y === v.pos.y) {
                  return false;
                } else {
                  return true;
                }
              });
              this.layoutData.labels = this.layoutData.labels.filter(function (v) {
                if (value.x === v.pos.x && value.y === v.pos.y) {
                  return false;
                } else {
                  return true;
                }
              });
            }

            this.layoutData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.layoutData);
          }
        }, {
          key: "setGrid",
          value: function setGrid(value) {
            this.layoutData.grid = value;
            this.layoutData.inputs = [];
            this.layoutData.labels = [];
            this.clockData.enable = 0;
            this.timerData.enable = 0;
            this.layoutData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.layoutData);
          }
        }, {
          key: "parseLayout",
          value: function parseLayout(data) {
            var _this5 = this;

            if (data.layout.grid === 0) {
              this.setGrid(3);
            } else if (data.layout.grid === 1) {
              this.setGrid(4);
            } else if (data.layout.grid === 2) {
              this.setGrid(5);
            } else if (data.layout.grid === 3) {
              this.setGrid(6);
            } else {
              this.setGrid(12);
            }

            this.clockData.enable = data.layout.clock.enable;
            this.clockData.pos.x = data.layout.clock.x;
            this.clockData.pos.y = data.layout.clock.y;
            this.clockData.pos.scale_x = data.layout.clock.scale_x;
            this.clockData.pos.scale_y = data.layout.clock.scale_y;
            this.clockData.label = data.layout.clock.label;
            this.clockData.style = data.layout.clock.style;
            this.clockData.dateLocale = data.layout.clock.date_locale;
            this.clockData.update = true;
            this.timerData.enable = data.layout.time_counter.enable;
            this.timerData.pos.x = data.layout.time_counter.x;
            this.timerData.pos.y = data.layout.time_counter.y;
            this.timerData.pos.scale_x = data.layout.time_counter.scale_x;
            this.timerData.pos.scale_y = data.layout.time_counter.scale_y;
            this.timerData.update = true;
            data.layout.video.forEach(function (value, index) {
              if (value.enable) {
                _this5.layoutData.inputs.push({
                  input: index,
                  pos: {
                    x: value.x,
                    y: value.y,
                    scale_x: value.scale_x,
                    scale_y: value.scale_y
                  },
                  bars: value.bars,
                  cellStyle: data.layout.cell_style[index],
                  audioAlarm: data.layout.audio_alarm_enable[index],
                  audioAlarmEnable: Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(value.audio_alarm_channel_enable),
                  videoFreeze: data.layout.video_alarm_enable[index],
                  scte104Display: data.layout.scte_104_display[index],
                  aspectRatioSd: data.layout.aspect_ratio_sd[index],
                  sdiFormatEnable: data.layout.sdi_format_display[index],
                  umdDisplay: data.layout.umd_display[index],
                  update: true
                });
              }
            });

            try {
              data.layout.labels.forEach(function (value, index) {
                if (value.enable) {
                  _this5.layoutData.labels.push({
                    id: index,
                    pos: {
                      x: value.x,
                      y: value.y,
                      scale_x: value.scale_x,
                      scale_y: value.scale_y
                    },
                    text: value.text,
                    update: true
                  });
                }
              });
            } catch (error) {}

            this.layoutData.dirty = 0;
            this.layoutData.audio.minimum_level = data.alarm_settings.audio.minimum_level;
            this.layoutData.audio.threshold = data.alarm_settings.audio.threshold;
            this.layoutData.video.threshold = data.alarm_settings.video.threshold;
            this.layoutData.presets = this.settinsPresetName;
          }
        }, {
          key: "layoutReset",
          value: function layoutReset() {
            this.parseLayout(this.settingsData);
            this.newData.next();
          }
        }, {
          key: "posToDefaultWindow",
          value: function posToDefaultWindow(value) {
            return {
              cellStyle: 0,
              pos: value,
              input: 0,
              bars: 2,
              audioAlarm: 0,
              audioAlarmEnable: [1, 1, 1, 1],
              videoFreeze: 0,
              scte104Display: 0,
              update: true,
              aspectRatioSd: 0,
              umdDisplay: 1,
              sdiFormatEnable: 1
            };
          }
        }, {
          key: "posToDefaultLabel",
          value: function posToDefaultLabel(value) {
            return {
              pos: value,
              text: '',
              id: 0,
              update: true
            };
          }
        }, {
          key: "getLayoutObject",
          value: function getLayoutObject() {
            var audioAlarmObj = Array(40).fill(0);
            var videoAlarmObj = Array(40).fill(0);
            var scte104Obj = Array(40).fill(0);
            var aspectRatioSdObj = Array(40).fill(0);
            var sdiFormatEnableObj = Array(40).fill(0);
            var umdDisplayObj = Array(40).fill(0);
            var cellStyleObj = Array(40).fill(0);
            var inputObj = Array(40).fill({
              enable: 0,
              x: 0,
              y: 0,
              scale_x: 0,
              scale_y: 0,
              bars: 0
            });
            var labelObj = Array(40).fill({
              enable: 0,
              x: 0,
              y: 0,
              scale_x: 0,
              scale_y: 0,
              text: ''
            });
            this.layoutData.inputs.forEach(function (value, index) {
              inputObj[value.input] = {
                enable: 1,
                x: value.pos.x,
                y: value.pos.y,
                scale_x: value.pos.scale_x,
                scale_y: value.pos.scale_y,
                bars: value.bars,
                audio_alarm_channel_enable: value.audioAlarmEnable
              };
              audioAlarmObj[value.input] = value.audioAlarm;
              videoAlarmObj[value.input] = value.videoFreeze;
              scte104Obj[value.input] = value.scte104Display;
              aspectRatioSdObj[value.input] = value.aspectRatioSd;
              sdiFormatEnableObj[value.input] = value.sdiFormatEnable;
              umdDisplayObj[value.input] = value.umdDisplay;
              cellStyleObj[value.input] = value.cellStyle;
            });
            this.layoutData.labels.forEach(function (value, index) {
              labelObj[value.id] = {
                enable: 1,
                x: value.pos.x,
                y: value.pos.y,
                scale_x: value.pos.scale_x,
                scale_y: value.pos.scale_y,
                text: value.text
              };
            });
            var clockObj = {
              enable: this.clockData.enable,
              x: this.clockData.pos.x,
              y: this.clockData.pos.y,
              scale_x: this.clockData.pos.scale_x,
              scale_y: this.clockData.pos.scale_y,
              label: this.clockData.label,
              style: this.clockData.style,
              date_locale: this.clockData.dateLocale
            };
            var timerObj = {
              enable: this.timerData.enable,
              x: this.timerData.pos.x,
              y: this.timerData.pos.y,
              scale_x: this.timerData.pos.scale_x,
              scale_y: this.timerData.pos.scale_y
            };
            var gridObj = 0;

            if (this.layoutData.grid === 3) {
              gridObj = 0;
            } else if (this.layoutData.grid === 4) {
              gridObj = 1;
            } else if (this.layoutData.grid === 5) {
              gridObj = 2;
            } else if (this.layoutData.grid === 6) {
              gridObj = 3;
            } else if (this.layoutData.grid === 12) {
              gridObj = 4;
            }

            return {
              video: inputObj,
              labels: labelObj,
              clock: clockObj,
              time_counter: timerObj,
              grid: gridObj,
              audio_alarm_enable: audioAlarmObj,
              video_alarm_enable: videoAlarmObj,
              scte_104_display: scte104Obj,
              aspect_ratio_sd: aspectRatioSdObj,
              sdi_format_display: sdiFormatEnableObj,
              umd_display: umdDisplayObj,
              cell_style: cellStyleObj,
              label: this.layoutData.presets[this.layoutData.presetIndex],
              teletext_page: this.settingsData.layout.teletext_page,
              teletext_enable: this.settingsData.layout.teletext_enable
            };
          }
        }, {
          key: "sendSet",
          value: function sendSet() {
            this.layoutData.dirty = 0;
            var sdiInputLabel = [];

            var _iterator = _createForOfIteratorHelper(this.settingsData.sdi_label),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var channel = _step.value;
                sdiInputLabel.push(channel);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var alarmSettingsObj = {
              audio: {
                minimum_level: this.settingsData.alarm_settings.audio.minimum_level,
                threshold: this.settingsData.alarm_settings.audio.threshold
              },
              video: {
                threshold: this.settingsData.alarm_settings.video.threshold
              }
            };
            this.trimLayout();
            this.send('set_config', {
              dns: this.settingsData.dns,
              ntp: this.settingsData.ntp,
              time_zone: this.settingsData.time_zone,
              sdi_input_label: sdiInputLabel,
              layout: this.getLayoutObject(),
              alarm_settings: alarmSettingsObj,
              output_format: this.settingsData.output_format,
              hdmi_color: this.settingsData.hdmi_color,
              cascade_mode: this.settingsData.cascade_mode,
              ip_2: this.settingsData.ip_2,
              ip_3: this.settingsData.ip_3,
              ip_4: this.settingsData.ip_4,
              ip_5: this.settingsData.ip_5,
              gpio_mode: this.settingsData.gpio_mode
            });
          }
        }, {
          key: "sendSolo",
          value: function sendSolo() {
            this.send('set_solo', {
              enable: this.settingsData.solo.enable,
              input: this.settingsData.solo.input,
              solo_my_var: 'added solo my'
            });
          }
        }, {
          key: "sendPreset",
          value: function sendPreset(index) {
            this.layoutData.presetIndex = index;
            this.send('set_preset', {
              index: index
            });
          }
        }, {
          key: "sendTime",
          value: function sendTime() {
            this.send('set_time', {
              time: Math.floor(new Date().getTime() / 1000)
            });
          }
        }, {
          key: "send_codeword",
          value: function send_codeword(newCodeword) {
            this.send('access', {
              codeword: newCodeword
            });
            this.pageReload();
          }
        }, {
          key: "sendReboot",
          value: function sendReboot() {
            this.send('reboot', {});
          }
          /**
           * Обработка полученых сообщений от websocket
           * @param msg сообщение
           */

        }, {
          key: "message",
          value: function message(msg) {
            switch (msg.type) {
              case 'settings':
                {
                  Object.assign(this.settingsData, msg.data);
                  this.settinsPresetName = msg.data.preset_name;

                  if (!this.layoutData.dirty) {
                    this.parseLayout(this.settingsData);
                    this.trimLayout();
                    this.layoutData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.layoutData);
                    this.layoutData.presetIndex = msg.data.layout.preset_index;
                  }

                  this.settingsData.output_format = msg.data.output_format;

                  if (this.settingsData.cascade_mode !== 5) {
                    this.sidebarRoutes = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.sidebarRoutesMaster);
                  } else {
                    this.sidebarRoutes = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.sidebarRoutesSlave);
                  }

                  if (msg.data.model === 0) {
                    this.settingsData.model = 0;
                    this.modelStr = 'PBX-MTV-508';
                  } else if (msg.data.model === 1) {
                    this.settingsData.model = 1;
                    this.modelStr = 'PBX-MTV-508IP';
                  } else if (msg.data.model === 2) {
                    this.settingsData.model = 2;
                    this.modelStr = 'PN-MTV-581';
                  } else if (msg.data.model === 4) {
                    this.settingsData.model = 4;
                    this.modelStr = 'PMTV-5161';
                  } else {
                    this.settingsData.model = 3;
                    this.modelStr = 'PN-MTV-581IP';
                  } //console.log('here this.modelStr :' + this.modelStr)


                  this.titleService.setTitle(this.modelStr);
                  this.newData.next();
                  break;
                }

              case 'configuration':
                {
                  Object.assign(this.diagnosticsData, msg.data);

                  if (this.deviceRand === 0) {
                    this.deviceRand = this.diagnosticsData.rand_value;
                  } else if (this.deviceRand !== this.diagnosticsData.rand_value) {
                    this.pageReload();
                  }

                  var pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US');
                  this.sysDateTime = pipe.transform(new Date(this.diagnosticsData.diagnostics.sys_date_time * 1000), 'MMM d, y, H:mm');
                  break;
                }

              case 'layout_presets':
                {
                  Object(_tools__WEBPACK_IMPORTED_MODULE_1__["saveJson"])(msg.data.preset_obj, 'multiview-presets.json');
                  break;
                }

              default:
                break;
            }
          }
        }, {
          key: "get_version",
          value: function get_version() {
            console.log('HERE this.http.get(this.versionUrl)' + this.http.get(this.versionUrl));
            return this.http.get(this.versionUrl);
          }
        }, {
          key: "show_version",
          value: function show_version() {
            var _this6 = this;

            this.get_version().subscribe(function (data) {
              return _this6.version.frontend_version = data.frontend_version;
            });
          }
        }, {
          key: "subscribeNewData",
          value: function subscribeNewData(f) {
            this.newData.subscribe(f);
          }
          /**
           * Отправить сообщение на сервер
           * @param type тип сообщения
           * @param data данные
           */

        }, {
          key: "send",
          value: function send(type, data) {
            this.wsService.send_data(type, data);
          }
        }, {
          key: "copySettings",
          value: function copySettings() {
            return Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.settingsData);
          }
        }, {
          key: "readSettings",
          value: function readSettings(data) {
            this.settingsData = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(data);
          }
        }, {
          key: "sendNetworkSettings",
          value: function sendNetworkSettings() {
            this.send('set_network_settings', this.settingsData.network_settings);
          }
        }, {
          key: "sendConfigExport",
          value: function sendConfigExport() {
            this.send('get_layout_presets', {});
          }
        }, {
          key: "sendConfigImport",
          value: function sendConfigImport(s) {
            this.send('set_layout_presets', {
              preset_obj: s
            });
          }
        }, {
          key: "getInputNumber",
          value: function getInputNumber(mode) {
            var inputNumber = 0;

            if (mode === 0) {
              inputNumber = 16; // here
            } else if (mode === 1) {
              inputNumber = 22;
            } else if (mode === 2) {
              inputNumber = 29;
            } else if (mode === 3) {
              inputNumber = 36;
            } else if (mode === 4) {
              inputNumber = 45;
            }

            console.log('getInputNumber(mode: number) mode :' + mode + ' inputNumber :' + inputNumber);
            return inputNumber;
          }
        }, {
          key: "getInputLast",
          value: function getInputLast(mode) {
            var ret = 0;

            if (mode === 0) {
              ret = 16; // here
            } else if (mode === 1) {
              ret = 24;
            } else if (mode === 2) {
              ret = 32;
            } else if (mode === 3) {
              ret = 40;
            } else if (mode === 4) {
              ret = 48;
            } else {
              ret = 8;
            }

            console.log('getInputLast(mode: number) mode :' + mode + ' ret :' + ret);
            return ret;
          }
        }, {
          key: "getInputSkip",
          value: function getInputSkip(index) {
            var ret = false;

            if (this.settingsData.cascade_mode === 5) {
              return false;
            }

            if (index > this.getInputLast(this.settingsData.cascade_mode) - 1) {
              ret = true;
            }

            if (this.settingsData.cascade_mode > 0 && index === 7) {
              ret = true;
            }

            if (this.settingsData.cascade_mode > 1 && index === 15) {
              ret = true;
            }

            if (this.settingsData.cascade_mode > 2 && index === 23) {
              ret = true;
            }

            if (this.settingsData.cascade_mode > 3 && index === 31) {
              ret = true;
            }

            return ret;
          }
        }, {
          key: "getInputNumberString",
          value: function getInputNumberString(index) {
            var board = Math.floor(index / 16) + 1; //console.log('board :' + board)

            var boardIndex = index % 16 + 1;

            if (this.settingsData.cascade_mode === 0) {
              //console.log('this.settingsData.cascade_mode === 0 return boardIndex.toString()'+ 
              //    boardIndex.toString()
              //)
              return boardIndex.toString();
            } //console.log("board.toString() + '.' + boardIndex.toString()" + board.toString() + '.' + boardIndex.toString())


            return board.toString() + '.' + boardIndex.toString();
          }
        }, {
          key: "trimLayout",
          value: function trimLayout() {
            var _this7 = this;

            this.layoutData.inputs = this.layoutData.inputs.filter(function (v) {
              if (_this7.getInputSkip(v.input)) {
                return false;
              } else {
                return true;
              }
            });
            this.adjustSmallWindows();
          }
        }, {
          key: "adjustSmallWindows",
          value: function adjustSmallWindows() {
            var _this8 = this;

            this.layoutData.inputs.forEach(function (value) {
              if (_this8.layoutData.grid === 12 && value.pos.scale_x === 0) {
                value.bars = 0;
                value.audioAlarm = 0;
                value.videoFreeze = 0;
                value.sdiFormatEnable = 0;
              }
            });
          }
        }, {
          key: "pageReload",
          value: function pageReload() {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000)).subscribe(function () {
              return window.location.reload();
            });
          }
        }, {
          key: "copyNetworkSettings",
          value: function copyNetworkSettings() {
            return Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(this.settingsData.network_settings);
          }
        }, {
          key: "readNetworkSettings",
          value: function readNetworkSettings(data) {
            this.settingsData.network_settings = Object(_tools__WEBPACK_IMPORTED_MODULE_1__["copyArray"])(data);
          }
        }]);

        return WsdataService;
      }();

      WsdataService.ɵfac = function WsdataService_Factory(t) {
        return new (t || WsdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_5__["WebsocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]));
      };

      WsdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: WsdataService,
        factory: WsdataService.ɵfac
      });
      /***/
    },

    /***/
    "GwpB":
    /*!****************************************************!*\
      !*** ./src/app/soloselect/soloselect.component.ts ***!
      \****************************************************/

    /*! exports provided: SoloSelectComponent */

    /***/
    function GwpB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoloSelectComponent", function () {
        return SoloSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SoloSelectComponent_ng_container_8_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoloSelectComponent_ng_container_8_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.btnClick(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var i_r2 = ctx_r7.index;
          var d_r1 = ctx_r7.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.wsData.getInputNumberString(i_r2), ". ", d_r1, "");
        }
      }

      function SoloSelectComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SoloSelectComponent_ng_container_8_a_1_Template, 2, 2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.wsData.getInputSkip(i_r2));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      var SoloSelectComponent = /*#__PURE__*/function () {
        function SoloSelectComponent(wsData) {
          _classCallCheck(this, SoloSelectComponent);

          this.wsData = wsData;
          this.enable = 0;
          this.input = 0;
          this.data = [''];
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SoloSelectComponent, [{
          key: "soloClick",
          value: function soloClick() {
            if (this.enable) {
              this.enable = 0;
            } else {
              this.enable = 1;
            }

            this.onChange();
          }
        }, {
          key: "btnClick",
          value: function btnClick(btn) {
            this.input = btn;
            this.onChange();
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.changed.emit({
              enable: this.enable,
              input: this.input
            });
          }
        }]);

        return SoloSelectComponent;
      }();

      SoloSelectComponent.ɵfac = function SoloSelectComponent_Factory(t) {
        return new (t || SoloSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]));
      };

      SoloSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SoloSelectComponent,
        selectors: [["app-soloselect"]],
        inputs: {
          enable: "enable",
          input: "input",
          data: "data"
        },
        outputs: {
          changed: "changed"
        },
        decls: 9,
        vars: 9,
        consts: [["role", "group", 1, "btn-group", "d-flex"], ["type", "button", 1, "btn", "solobutton", 3, "ngClass", "click"], ["role", "group", 1, "btn-group", "w-100"], ["id", "btnGroupDrop1", "type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "sololist", "btn", "dropdown-toggle", "w-100", "text-end"], ["aria-labelledby", "btnGroupDrop1", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngIf"], ["href", "#", 1, "dropdown-item", 3, "click"]],
        template: function SoloSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SoloSelectComponent_Template_button_click_1_listener() {
              return ctx.soloClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Solo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SoloSelectComponent_ng_container_8_Template, 2, 1, "ng-container", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.enable));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](6, 3, ctx.data[ctx.input], 0, 17), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.sololist[_ngcontent-%COMP%] {\n  color: black;\n  border-color: #44af69;\n}\n.sololist[_ngcontent-%COMP%]:hover, .sololist[_ngcontent-%COMP%]:focus, .sololist[_ngcontent-%COMP%]:active {\n  background-color: #44af69;\n  color: white;\n}\n@media (max-width: 768px) {\n  .sololist[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.solobutton[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border-color: #44af69;\n}\n@media (max-width: 768px) {\n  .solobutton[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.solobutton[disabled][_ngcontent-%COMP%] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.solobutton.active[_ngcontent-%COMP%] {\n  background-color: #44af69;\n  color: white;\n}\n.solobutton[_ngcontent-%COMP%]:active, .solobutton[_ngcontent-%COMP%]:focus, .solobutton[_ngcontent-%COMP%]:hover {\n  border-color: #44af69;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNvbG9zZWxlY3QuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBckVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBdUVKO0FBdEVJOzs7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUEwRVI7QUF4RUk7RUFBQTtJQUNJLGdCQUFBO0VBMkVOO0FBQ0Y7QUF4RUE7RUFDSSx1QkFBQTtFQUVBLFlBQUE7RUFDQSxxQkFBQTtBQXlFSjtBQXZFSTtFQUFBO0lBQ0ksZ0JBQUE7RUEwRU47QUFDRjtBQXhFSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FBMEVSO0FBeEVJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBMEVSO0FBeEVJOzs7RUFDSSxxQkFBQTtBQTRFUiIsImZpbGUiOiJzb2xvc2VsZWN0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29tbW9uLmxlc3NcIjtcblxuLnNvbG9saXN0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xuICAgICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5cbi5zb2xvYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCBcItC/0L7QtNC/0YDRi9Cz0LjQstCw0L3QuNC1XCIgYm9yZGVyXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgJjphY3RpdmUsICY6Zm9jdXMsICY6aG92ZXJ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbiAgICB9XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "J2VD":
    /*!***************************************************************!*\
      !*** ./src/app/components/inputfield/inputfield.component.ts ***!
      \***************************************************************/

    /*! exports provided: InputfieldComponent */

    /***/
    function J2VD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputfieldComponent", function () {
        return InputfieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../fieldbody/fieldbody.component */
      "1kPW");

      var InputfieldComponent = /*#__PURE__*/function () {
        function InputfieldComponent() {
          _classCallCheck(this, InputfieldComponent);

          this.title = '';
          this.type = 'text';
          this.min = '';
          this.max = '';
          this.isReadonly = false;

          this.onChange = function () {};

          this.onTouched = function () {};

          this.isNocase = false;
        }

        _createClass(InputfieldComponent, [{
          key: "readonly",
          get: function get() {
            return this.isReadonly;
          },
          set: function set(value) {
            this.isReadonly = typeof value === 'boolean' ? value : true;
          }
        }, {
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }, {
          key: "value",
          get: function get() {
            if (this.type === 'number') {
              return +this.val;
            } else {
              return this.val;
            }
          },
          set: function set(val) {
            this.val = val;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.val = value;
          } // за изменением значения компонента следим через ngModelChange
          // (при возникновении ngModelChanged вызываем функцию changeValue, которая сделает значение числовым, если тип компонента number)

        }, {
          key: "changeValue",
          value: function changeValue(value) {
            if (this.type === 'number') {
              this.onChange(+value);
            } else {
              this.onChange(value);
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
        }]);

        return InputfieldComponent;
      }();

      InputfieldComponent.ɵfac = function InputfieldComponent_Factory(t) {
        return new (t || InputfieldComponent)();
      };

      InputfieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputfieldComponent,
        selectors: [["app-inputfield"]],
        inputs: {
          title: "title",
          type: "type",
          min: "min",
          max: "max",
          readonly: "readonly",
          nocase: "nocase"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return InputfieldComponent;
          }),
          multi: true
        }])],
        decls: 2,
        vars: 8,
        consts: [[3, "title", "nocase"], [1, "form-control", 3, "type", "min", "max", "ngModel", "disabled", "readonly", "ngModelChange"]],
        template: function InputfieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputfieldComponent_Template_input_ngModelChange_1_listener($event) {
              return ctx.val = $event;
            })("ngModelChange", function InputfieldComponent_Template_input_ngModelChange_1_listener() {
              return ctx.changeValue(ctx.val);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("nocase", ctx.isNocase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("min", ctx.min)("max", ctx.max)("ngModel", ctx.val)("disabled", ctx.isDisabled)("readonly", ctx.isReadonly);
          }
        },
        directives: [_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__["FieldBodyComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #f9fafa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImlucHV0ZmllbGQuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBdEVBO0VBQ0kseUJBQUE7QUF3RUoiLCJmaWxlIjoiaW5wdXRmaWVsZC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzXCI7XG4uZm9ybS1jb250cm9sW3JlYWRvbmx5XSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYTtcbn0iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "MoUQ":
    /*!***********************************************!*\
      !*** ./src/app/components/timezone/tzlist.ts ***!
      \***********************************************/

    /*! exports provided: tzlist */

    /***/
    function MoUQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tzlist", function () {
        return tzlist;
      });

      var tzlist = {
        Africa: ['Abidjan', 'Accra', 'Addis_Ababa', 'Algiers', 'Asmara', 'Asmera', 'Bamako', 'Bangui', 'Banjul', 'Bissau', 'Blantyre', 'Brazzaville', 'Bujumbura', 'Cairo', 'Casablanca', 'Ceuta', 'Conakry', 'Dakar', 'Dar_es_Salaam', 'Djibouti', 'Douala', 'El_Aaiun', 'Freetown', 'Gaborone', 'Harare', 'Johannesburg', 'Juba', 'Kampala', 'Khartoum', 'Kigali', 'Kinshasa', 'Lagos', 'Libreville', 'Lome', 'Luanda', 'Lubumbashi', 'Lusaka', 'Malabo', 'Maputo', 'Maseru', 'Mbabane', 'Mogadishu', 'Monrovia', 'Nairobi', 'Ndjamena', 'Niamey', 'Nouakchott', 'Ouagadougou', 'Porto-Novo', 'Sao_Tome', 'Timbuktu', 'Tripoli', 'Tunis', 'Windhoek'],
        America: ['Adak', 'Anchorage', 'Anguilla', 'Antigua', 'Araguaina', 'Argentina/Buenos_Aires', 'Argentina/Catamarca', 'Argentina/ComodRivadavia', 'Argentina/Cordoba', 'Argentina/Jujuy', 'Argentina/La_Rioja', 'Argentina/Mendoza', 'Argentina/Rio_Gallegos', 'Argentina/Salta', 'Argentina/San_Juan', 'Argentina/San_Luis', 'Argentina/Tucuman', 'Argentina/Ushuaia', 'Aruba', 'Asuncion', 'Atikokan', 'Atka', 'Bahia', 'Bahia_Banderas', 'Barbados', 'Belem', 'Belize', 'Blanc-Sablon', 'Boa_Vista', 'Bogota', 'Boise', 'Buenos_Aires', 'Cambridge_Bay', 'Campo_Grande', 'Cancun', 'Caracas', 'Catamarca', 'Cayenne', 'Cayman', 'Chicago', 'Chihuahua', 'Coral_Harbour', 'Cordoba', 'Costa_Rica', 'Creston', 'Cuiaba', 'Curacao', 'Danmarkshavn', 'Dawson', 'Dawson_Creek', 'Denver', 'Detroit', 'Dominica', 'Edmonton', 'Eirunepe', 'El_Salvador', 'Ensenada', 'Fortaleza', 'Fort_Nelson', 'Fort_Wayne', 'Glace_Bay', 'Godthab', 'Goose_Bay', 'Grand_Turk', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guayaquil', 'Guyana', 'Halifax', 'Havana', 'Hermosillo', 'Indiana/Indianapolis', 'Indiana/Knox', 'Indiana/Marengo', 'Indiana/Petersburg', 'Indianapolis', 'Indiana/Tell_City', 'Indiana/Vevay', 'Indiana/Vincennes', 'Indiana/Winamac', 'Inuvik', 'Iqaluit', 'Jamaica', 'Jujuy', 'Juneau', 'Kentucky/Louisville', 'Kentucky/Monticello', 'Knox_IN', 'Kralendijk', 'La_Paz', 'Lima', 'Los_Angeles', 'Louisville', 'Lower_Princes', 'Maceio', 'Managua', 'Manaus', 'Marigot', 'Martinique', 'Matamoros', 'Mazatlan', 'Mendoza', 'Menominee', 'Merida', 'Metlakatla', 'Mexico_City', 'Miquelon', 'Moncton', 'Monterrey', 'Montevideo', 'Montreal', 'Montserrat', 'Nassau', 'New_York', 'Nipigon', 'Nome', 'Noronha', 'North_Dakota/Beulah', 'North_Dakota/Center', 'North_Dakota/New_Salem', 'Ojinaga', 'Panama', 'Pangnirtung', 'Paramaribo', 'Phoenix', 'Port-au-Prince', 'Porto_Acre', 'Port_of_Spain', 'Porto_Velho', 'Puerto_Rico', 'Punta_Arenas', 'Rainy_River', 'Rankin_Inlet', 'Recife', 'Regina', 'Resolute', 'Rio_Branco', 'Rosario', 'Santa_Isabel', 'Santarem', 'Santiago', 'Santo_Domingo', 'Sao_Paulo', 'Scoresbysund', 'Shiprock', 'Sitka', 'St_Barthelemy', 'St_Johns', 'St_Kitts', 'St_Lucia', 'St_Thomas', 'St_Vincent', 'Swift_Current', 'Tegucigalpa', 'Thule', 'Thunder_Bay', 'Tijuana', 'Toronto', 'Tortola', 'Vancouver', 'Virgin', 'Whitehorse', 'Winnipeg', 'Yakutat', 'Yellowknife'],
        Asia: ['Aden', 'Almaty', 'Amman', 'Anadyr', 'Aqtau', 'Aqtobe', 'Ashgabat', 'Ashkhabad', 'Atyrau', 'Baghdad', 'Bahrain', 'Baku', 'Bangkok', 'Barnaul', 'Beirut', 'Bishkek', 'Brunei', 'Calcutta', 'Chita', 'Choibalsan', 'Chongqing', 'Chungking', 'Colombo', 'Dacca', 'Damascus', 'Dhaka', 'Dili', 'Dubai', 'Dushanbe', 'Famagusta', 'Gaza', 'Harbin', 'Hebron', 'Ho_Chi_Minh', 'Hong_Kong', 'Hovd', 'Irkutsk', 'Istanbul', 'Jakarta', 'Jayapura', 'Jerusalem', 'Kabul', 'Kamchatka', 'Karachi', 'Kashgar', 'Kathmandu', 'Katmandu', 'Khandyga', 'Kolkata', 'Krasnoyarsk', 'Kuala_Lumpur', 'Kuching', 'Kuwait', 'Macao', 'Macau', 'Magadan', 'Makassar', 'Manila', 'Muscat', 'Nicosia', 'Novokuznetsk', 'Novosibirsk', 'Omsk', 'Oral', 'Phnom_Penh', 'Pontianak', 'Pyongyang', 'Qatar', 'Qostanay', 'Qyzylorda', 'Rangoon', 'Riyadh', 'Saigon', 'Sakhalin', 'Samarkand', 'Seoul', 'Shanghai', 'Singapore', 'Srednekolymsk', 'Taipei', 'Tashkent', 'Tbilisi', 'Tehran', 'Tel_Aviv', 'Thimbu', 'Thimphu', 'Tokyo', 'Tomsk', 'Ujung_Pandang', 'Ulaanbaatar', 'Ulan_Bator', 'Urumqi', 'Ust-Nera', 'Vientiane', 'Vladivostok', 'Yakutsk', 'Yangon', 'Yekaterinburg', 'Yerevan'],
        Europe: ['Amsterdam', 'Andorra', 'Astrakhan', 'Athens', 'Belfast', 'Belgrade', 'Berlin', 'Bratislava', 'Brussels', 'Bucharest', 'Budapest', 'Busingen', 'Chisinau', 'Copenhagen', 'Dublin', 'Gibraltar', 'Guernsey', 'Helsinki', 'Isle_of_Man', 'Istanbul', 'Jersey', 'Kaliningrad', 'Kiev', 'Kirov', 'Lisbon', 'Ljubljana', 'London', 'Luxembourg', 'Madrid', 'Malta', 'Mariehamn', 'Minsk', 'Monaco', 'Moscow', 'Nicosia', 'Oslo', 'Paris', 'Podgorica', 'Prague', 'Riga', 'Rome', 'Samara', 'San_Marino', 'Sarajevo', 'Saratov', 'Simferopol', 'Skopje', 'Sofia', 'Stockholm', 'Tallinn', 'Tirane', 'Tiraspol', 'Ulyanovsk', 'Uzhgorod', 'Vaduz', 'Vatican', 'Vienna', 'Vilnius', 'Volgograd', 'Warsaw', 'Zagreb', 'Zaporozhye', 'Zurich'],
        Indian: ['Antananarivo', 'Chagos', 'Christmas', 'Cocos', 'Comoro', 'Kerguelen', 'Mahe', 'Maldives', 'Mauritius', 'Mayotte', 'Reunion'],
        US: ['Alaska', 'Aleutian', 'Arizona', 'Central', 'Eastern', 'East-Indiana', 'Hawaii', 'Indiana-Starke', 'Michigan', 'Mountain', 'Pacific', 'Pacific-New', 'Samoa'],
        Pacific: ['Apia', 'Auckland', 'Bougainville', 'Chatham', 'Chuuk', 'Easter', 'Efate', 'Enderbury', 'Fakaofo', 'Fiji', 'Funafuti', 'Galapagos', 'Gambier', 'Guadalcanal', 'Guam', 'Honolulu', 'Johnston', 'Kiritimati', 'Kosrae', 'Kwajalein', 'Majuro', 'Marquesas', 'Midway', 'Nauru', 'Niue', 'Norfolk', 'Noumea', 'Pago_Pago', 'Palau', 'Pitcairn', 'Pohnpei', 'Ponape', 'Port_Moresby', 'Rarotonga', 'Saipan', 'Samoa', 'Tahiti', 'Tarawa', 'Tongatapu', 'Truk', 'Wake', 'Wallis', 'Yap']
      };
      /***/
    },

    /***/
    "Ro/O":
    /*!*****************************************************!*\
      !*** ./src/app/components/panel/panel.component.ts ***!
      \*****************************************************/

    /*! exports provided: PanelComponent */

    /***/
    function RoO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
        return PanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PanelComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isNocase === true ? ctx_r0.title : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.title));
        }
      }

      function PanelComponent_hr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
        }
      }

      var _c0 = ["*"];

      var PanelComponent = /*#__PURE__*/function () {
        function PanelComponent() {
          _classCallCheck(this, PanelComponent);

          this.title = ''; // назначить классы родительскому компоненту

          this.classList = 'col-xl-6 col-lg-12 mb-2 card-mt';
          this.isNocase = false;
        }

        _createClass(PanelComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          } // количество панелей в ряд

        }, {
          key: "stack",
          set: function set(value) {
            if (value == 1) {
              this.classList = 'col-xl-12 col-lg-12 mb-2 card-mt';
            } else if (value == 2) {
              this.classList = 'col-xl-6 col-lg-12 mb-2 card-mt';
            } else if (value == 3) {
              this.classList = 'col-xl-4 col-lg-12 mb-2 card-mt';
            }
          }
        }]);

        return PanelComponent;
      }();

      PanelComponent.ɵfac = function PanelComponent_Factory(t) {
        return new (t || PanelComponent)();
      };

      PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PanelComponent,
        selectors: [["app-panel"]],
        hostVars: 2,
        hostBindings: function PanelComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classList);
          }
        },
        inputs: {
          title: "title",
          nocase: "nocase",
          stack: "stack"
        },
        ngContentSelectors: _c0,
        decls: 5,
        vars: 2,
        consts: [[1, "card", "card-inside-view", "mt-2"], [1, "card-body"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "row"], [1, "col-form-label", "col"]],
        template: function PanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_div_2_Template, 4, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelComponent_hr_3_Template, 1, 0, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.card-inside-view[_ngcontent-%COMP%] {\n  border-radius: 0.063em;\n  border-right-width: 0em;\n  border-left-width: 0em;\n  border-bottom-width: 0em;\n  border-top-style: solid;\n  border-top-width: 0.188em;\n  border-top-color: #d4d9e1;\n  padding: 1em;\n  height: 100%;\n}\n.card-button-view[_ngcontent-%COMP%] {\n  margin: 1em;\n  border-width: 0em;\n  background: #f3f3f4;\n  box-shadow: none;\n}\n.card-button-view[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0em;\n}\n.card-button-view[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ED5565;\n  font-weight: 400;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1.5em;\n}\n.card-mt[_nghost-%COMP%] {\n  margin-top: calc(var(--bs-gutter-x)/2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInBhbmVsLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUjtBQXJFQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUF1RUo7QUFwRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBc0VKO0FBMUVBO0VBT1EsWUFBQTtBQXNFUjtBQTdFQTtFQVdRLGNBQUE7RUFDQSxnQkFBQTtBQXFFUjtBQWpFQTtFQUNJLGNBQUE7QUFtRUo7QUFoRUE7RUFDSSxzQ0FBQTtBQWtFSiIsImZpbGUiOiJwYW5lbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzXCI7XG5cbi5jYXJkLWluc2lkZS12aWV3IHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjA2M2VtO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMGVtO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwZW07XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMGVtO1xuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3Atd2lkdGg6IDAuMTg4ZW07XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbGlnaHRlbihAbmF2YmFyLXRleHQsIDE1JSk7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmQtYnV0dG9uLXZpZXcge1xuICAgIG1hcmdpbjogMWVtO1xuICAgIGJvcmRlci13aWR0aDogMGVtO1xuICAgIGJhY2tncm91bmQ6IEBjYXJkLWJhY2tncm91bmQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcblxuICAgIC5jYXJkLWJvZHkge1xuICAgICAgICBwYWRkaW5nOiAwZW07XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBjb2xvcjogI0VENTU2NTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDEuNWVtO1xufVxuXG46aG9zdC5jYXJkLW10IHtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWJzLWd1dHRlci14KS8gMik7XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "SGxG":
    /*!**************************************!*\
      !*** ./src/app/websocket.service.ts ***!
      \**************************************/

    /*! exports provided: WebsocketService */

    /***/
    function SGxG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
        return WebsocketService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var WebsocketService = /*#__PURE__*/function () {
        function WebsocketService() {
          var _this9 = this;

          _classCallCheck(this, WebsocketService);

          // Таймауты
          this.reconnectTimeout = 10;
          this.dataTimeout = 20; // состояние подключения

          this.connectionStatus = {
            value: false,
            first: false
          };
          this.dataIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.dataOut = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].dev_ip; // таймер повторного подключения

          this.connect();
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(1000).subscribe(function () {
            switch (_this9.ws.readyState) {
              case WebSocket.CLOSED:
                if (_this9.lastConnectAttempt + _this9.reconnectTimeout < _this9.get_time()) {
                  _this9.connect();
                }

                break;

              case WebSocket.OPEN:
                if (_this9.lastDataTime + _this9.dataTimeout < _this9.get_time()) {
                  _this9.ws.close();

                  _this9.connect();

                  _this9.connectionStatus.value = false;
                }

                break;

              default:
                break;
            }
          }); // таймер keepalive

          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(10000).subscribe(function () {
            if (_this9.ws.readyState === WebSocket.OPEN) {
              _this9.send_data('keepalive', {});
            }
          });
          this.dataOut.subscribe(function (msg) {
            return _this9.ws.send(JSON.stringify(msg));
          });
        }

        _createClass(WebsocketService, [{
          key: "send_data",
          value: function send_data(type, data) {
            this.dataOut.next({
              type: type,
              data: data
            });
          }
          /**
           * Получить теущее время в секундах
           */

        }, {
          key: "get_time",
          value: function get_time() {
            return new Date().getTime() / 1000;
          }
        }, {
          key: "connect",
          value: function connect() {
            var _this10 = this;

            this.ws = new WebSocket(this.url);

            this.ws.onmessage = function (ev) {
              _this10.dataIn.next(JSON.parse(ev.data));

              _this10.lastDataTime = _this10.get_time();
            };

            this.ws.onopen = function () {
              console.log('Successfully connected: ' + _this10.url);
              _this10.connectionStatus.first = true;
              _this10.connectionStatus.value = true;
            };

            this.ws.onclose = function () {
              console.log('Disconnected');
              _this10.connectionStatus.value = false;
            };

            this.lastConnectAttempt = this.get_time();
            this.lastDataTime = this.get_time();
          }
          /**
           * Подписаться на получение сообщений
           * @param f callback
           */

        }, {
          key: "subscribe",
          value: function subscribe(f) {
            this.dataIn.subscribe(f);
          }
        }]);

        return WebsocketService;
      }();

      WebsocketService.ɵfac = function WebsocketService_Factory(t) {
        return new (t || WebsocketService)();
      };

      WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: WebsocketService,
        factory: WebsocketService.ɵfac
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/connection/connection.component */
      "xFbp");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(wsData) {
          _classCallCheck(this, AppComponent);

          this.wsData = wsData;
        }

        _createClass(AppComponent, [{
          key: "update",
          value: function update(data) {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-connection");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_connection_connection_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50Lmxlc3MifQ== */"]
      });
      /***/
    },

    /***/
    "V91b":
    /*!*************************************************************************!*\
      !*** ./src/app/components/setcancelbutton/setcancelbutton.component.ts ***!
      \*************************************************************************/

    /*! exports provided: SetCancelButtonComponent */

    /***/
    function V91b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetCancelButtonComponent", function () {
        return SetCancelButtonComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SetCancelButtonComponent = /*#__PURE__*/function () {
        function SetCancelButtonComponent() {
          _classCallCheck(this, SetCancelButtonComponent);

          this.disabled = false;
          this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SetCancelButtonComponent, [{
          key: "dataApply",
          value: function dataApply() {
            this.apply.emit();
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.cancel.emit();
          }
        }]);

        return SetCancelButtonComponent;
      }();

      SetCancelButtonComponent.ɵfac = function SetCancelButtonComponent_Factory(t) {
        return new (t || SetCancelButtonComponent)();
      };

      SetCancelButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SetCancelButtonComponent,
        selectors: [["app-setcancelbutton"]],
        inputs: {
          disabled: "disabled"
        },
        outputs: {
          apply: "apply",
          cancel: "cancel"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "form-group", "row", "right-align"], [1, "col-12"], ["type", "button", 1, "btn", "button-default", "btn-fixed-width", 3, "disabled", "click"]],
        template: function SetCancelButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCancelButtonComponent_Template_button_click_2_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCancelButtonComponent_Template_button_click_4_listener() {
              return ctx.dataApply();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Set");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
          }
        },
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNldGNhbmNlbGJ1dHRvbi5jb21wb25lbnQubGVzcyIsIi4uLy4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoic2V0Y2FuY2VsYnV0dG9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "VF3m":
    /*!*****************************************!*\
      !*** ./src/app/views/main.component.ts ***!
      \*****************************************/

    /*! exports provided: MainComponent */

    /***/
    function VF3m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _soloselect_soloselect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../soloselect/soloselect.component */
      "GwpB");
      /* harmony import */


      var _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../presetselect/presetselect.component */
      "wn/M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["statusForm"];

      function MainComponent_app_inputfield_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-inputfield", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainComponent_app_inputfield_11_Template_app_inputfield_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.diagnosticsData.sdi_format[i_r2] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "Input ", ctx_r0.wsData.getInputNumberString(i_r2), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "input_", i_r2 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.diagnosticsData.sdi_format[i_r2])("hidden", ctx_r0.wsData.getInputSkip(i_r2));
        }
      }

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent(wsData, router) {
          var _this11 = this;

          _classCallCheck(this, MainComponent);

          this.wsData = wsData;
          this.router = router;
          this.settingsData = this.wsData.settingsData;
          this.diagnosticsData = this.wsData.diagnosticsData;
          this.wsData.subscribeNewData(function () {
            return _this11.newdata();
          });
        }

        _createClass(MainComponent, [{
          key: "newdata",
          value: function newdata() {
            this.settingsData = this.wsData.copySettings();

            if (this.wsData.settingsData.cascade_mode === 5) {
              this.router.navigate(['/system']);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.newdata();
          }
        }, {
          key: "soloOnChange",
          value: function soloOnChange(value) {
            this.wsData.settingsData.solo.enable = value.enable;
            this.wsData.settingsData.solo.input = value.input;
            this.wsData.sendSolo();
          }
        }, {
          key: "presetChanged",
          value: function presetChanged(preset) {
            this.wsData.sendPreset(preset);
          }
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        viewQuery: function MainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.statusForm = _t.first);
          }
        },
        decls: 12,
        vars: 12,
        consts: [[3, "data", "modelStr"], ["title", "Slave mode", 3, "hidden"], ["title", "Controls", 3, "hidden"], ["title", "Live Stream", 3, "hidden"], ["href", "#/stream", "target", "_blank", 1, "btn", "button-default", "btn-fixed-width"], ["title", "Fullscreen"], [3, "data", "enable", "input", "changed"], [3, "data", "presetIndex", "changed"], ["title", "Inputs Format", 3, "hidden"], ["readonly", "", 3, "title", "ngModel", "hidden", "name", "ngModelChange", 4, "ngFor", "ngForOf"], ["readonly", "", 3, "title", "ngModel", "hidden", "name", "ngModelChange"]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Device in slave mode. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-fieldbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Start");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-fieldbody", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-soloselect", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function MainComponent_Template_app_soloselect_changed_8_listener($event) {
              return ctx.soloOnChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-presetselect", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function MainComponent_Template_app_presetselect_changed_9_listener($event) {
              return ctx.presetChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-panel", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainComponent_app_inputfield_11_Template, 1, 4, "app-inputfield", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode !== 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode === 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.model === 0 || ctx.wsData.settingsData.model === 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.settingsData.sdi_label)("enable", ctx.settingsData.solo.enable)("input", ctx.settingsData.solo.input);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.layoutData.presets)("presetIndex", ctx.wsData.layoutData.presetIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode === 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.diagnosticsData.sdi_format);
          }
        },
        directives: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_5__["FieldBodyComponent"], _soloselect_soloselect_component__WEBPACK_IMPORTED_MODULE_6__["SoloSelectComponent"], _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_7__["PresetSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_9__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.text-red[_ngcontent-%COMP%] {\n  color: #DB2B39;\n  font-weight: 400;\n  font-style: normal;\n}\n.text-grey[_ngcontent-%COMP%] {\n  color: #676A6C;\n  font-weight: 400;\n  font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsIm1haW4uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBckVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF1RUo7QUFwRUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXNFSiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvY29tbW9uLmxlc3NcIjtcblxuLnRleHQtcmVkIHtcbiAgICBjb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi50ZXh0LWdyZXkge1xuICAgIGNvbG9yOiBAcm93LXRleHQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "WJpm":
    /*!**********************************************!*\
      !*** ./src/app/views/editlabel.component.ts ***!
      \**********************************************/

    /*! exports provided: EditLabelComponent */

    /***/
    function WJpm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditLabelComponent", function () {
        return EditLabelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");

      var _c0 = ["settingsForm"];

      var EditLabelComponent = /*#__PURE__*/function () {
        function EditLabelComponent(wsData, route, router) {
          var _this12 = this;

          _classCallCheck(this, EditLabelComponent);

          this.wsData = wsData;
          this.route = route;
          this.router = router;
          this.labelId = 0;
          this.text = '';
          this.labelId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
          this.wsData.subscribeNewData(function () {
            return _this12.newdata();
          });

          if (this.wsData.layoutData.labels.length > this.labelId) {
            this.copyData();
          }
        }

        _createClass(EditLabelComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.wsData.layoutData.labels.length > this.labelId && this.settingsForm.form.pristine) {
              this.copyData();
            }
          }
        }, {
          key: "copyData",
          value: function copyData() {
            this.text = this.wsData.layoutData.labels[this.labelId].text;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "dataApply",
          value: function dataApply() {
            this.wsData.layoutData.labels[this.labelId].text = this.text;
            this.wsData.layoutData.dirty = 1;
            this.settingsForm.form.markAsPristine();
            this.router.navigate(['/edit']);
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.settingsForm.form.markAsPristine();
            this.router.navigate(['/edit']);
          }
        }]);

        return EditLabelComponent;
      }();

      EditLabelComponent.ɵfac = function EditLabelComponent_Factory(t) {
        return new (t || EditLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditLabelComponent,
        selectors: [["app-editlabel"]],
        viewQuery: function EditLabelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.settingsForm = _t.first);
          }
        },
        decls: 6,
        vars: 3,
        consts: [[3, "data", "modelStr"], ["title", "Label parameters"], ["settingsForm", "ngForm"], ["title", "Text", "name", "text", 3, "ngModel", "ngModelChange"], [3, "apply", "cancel"]],
        template: function EditLabelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-inputfield", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditLabelComponent_Template_app_inputfield_ngModelChange_4_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-setcancelbutton", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("apply", function EditLabelComponent_Template_app_setcancelbutton_apply_5_listener() {
              return ctx.dataApply();
            })("cancel", function EditLabelComponent_Template_app_setcancelbutton_cancel_5_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);
          }
        },
        directives: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_7__["SetCancelButtonComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImVkaXRsYWJlbC5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoiZWRpdGxhYmVsLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "Y+0W":
    /*!**************************!*\
      !*** ./src/app/tools.ts ***!
      \**************************/

    /*! exports provided: copyArray, indexTracker, saveJson */

    /***/
    function Y0W(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyArray", function () {
        return copyArray;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "indexTracker", function () {
        return indexTracker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saveJson", function () {
        return saveJson;
      });

      function copyArray(data) {
        return JSON.parse(JSON.stringify(data));
      }

      function indexTracker(index, value) {
        return index;
      }

      function saveJson(data, fname) {
        var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        var dlAnchorElem = document.getElementById('downloadAnchorElem');
        dlAnchorElem.setAttribute('href', dataStr);
        dlAnchorElem.setAttribute('download', fname);
        dlAnchorElem.click();
      }
      /***/

    },

    /***/
    "YTW0":
    /*!*********************************************************************!*\
      !*** ./src/app/components/setcancelwide/setcancelwide.component.ts ***!
      \*********************************************************************/

    /*! exports provided: SetCancelWideComponent */

    /***/
    function YTW0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetCancelWideComponent", function () {
        return SetCancelWideComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SetCancelWideComponent = /*#__PURE__*/function () {
        function SetCancelWideComponent() {
          _classCallCheck(this, SetCancelWideComponent);

          this.disabled = false;
          this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SetCancelWideComponent, [{
          key: "dataApply",
          value: function dataApply() {
            this.apply.emit();
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.cancel.emit();
          }
        }]);

        return SetCancelWideComponent;
      }();

      SetCancelWideComponent.ɵfac = function SetCancelWideComponent_Factory(t) {
        return new (t || SetCancelWideComponent)();
      };

      SetCancelWideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SetCancelWideComponent,
        selectors: [["app-setcancelwide"]],
        inputs: {
          disabled: "disabled"
        },
        outputs: {
          apply: "apply",
          cancel: "cancel"
        },
        decls: 11,
        vars: 3,
        consts: [[1, "card", "card-button-view", "mt-2"], [1, "card-body"], [1, "row", "right-align"], [1, "px-0", "my-0", "col-xl-8", "col-lg-8", "col-md-12", "col-sm-12"], [1, "badge", "bg-danger", 3, "hidden"], [1, "pr-0", "mb-0", "col-xl-4", "col-lg-4", "col-md-12", "col-sm-12"], ["type", "button", 1, "btn", "btn-fixed-width", "button-default", 3, "disabled", "click"]],
        template: function SetCancelWideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Configuration changed! Press \"Apply\" to continue.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCancelWideComponent_Template_button_click_7_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SetCancelWideComponent_Template_button_click_9_listener() {
              return ctx.dataApply();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
          }
        },
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.card-button-view[_ngcontent-%COMP%] {\n  margin: 1em;\n  border-width: 0em;\n  background: #f3f3f4;\n  box-shadow: none;\n  line-height: inherit;\n  padding: 0.375rem 0.75rem;\n  border: 1px solid transparent;\n}\n.card-button-view[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0em;\n}\n.card-button-view[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ca2636;\n  font-weight: 400;\n}\n.card-button-view[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: 400;\n  vertical-align: middle;\n  line-height: inherit;\n}\n.card-button-view[_ngcontent-%COMP%]   .bg-danger[_ngcontent-%COMP%] {\n  padding-top: 0.6875;\n  padding-right: 0.75rem;\n  padding-bottom: 0.6875;\n  padding-left: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNldGNhbmNlbHdpZGUuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBdEVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQXdFSjtBQS9FQTtFQVVRLFlBQUE7QUF3RVI7QUFsRkE7RUFjUSxjQUFBO0VBQ0EsZ0JBQUE7QUF1RVI7QUF0RkE7RUFtQlEsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQXNFUjtBQTVGQTtFQTBCUSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQXFFUiIsImZpbGUiOiJzZXRjYW5jZWx3aWRlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3NcIjtcbi5jYXJkLWJ1dHRvbi12aWV3IHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBib3JkZXItd2lkdGg6IDBlbTtcbiAgICBiYWNrZ3JvdW5kOiBAY2FyZC1iYWNrZ3JvdW5kO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMGVtO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgY29sb3I6ICNjYTI2MzY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICB9XG5cbiAgICAuYmctZGFuZ2VyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNjg3NTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNjg3NTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtOyAgIFxuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiBAcm93LXRleHQ7XG4gIH1cblxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRlbihAbmF2YmFyLXRleHQsIDE1JSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuLnJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbiAgICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuXG4uYnRuLWZpeGVkLXdpZHRoLCAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDZlbTtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCBcItC/0L7QtNC/0YDRi9Cz0LjQstCw0L3QuNC1XCIgYm9yZGVyXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINC60L3QvtC/0LrQsNC80LhcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogZGFya2VuKHdoaXRlLCAxNSUpO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./websocket.service */
      "SGxG");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wsdata.service */
      "CnhB");
      /* harmony import */


      var _views_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/main.component */
      "VF3m");
      /* harmony import */


      var _views_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/settings.component */
      "yY8n");
      /* harmony import */


      var _views_system_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/system.component */
      "4l9g");
      /* harmony import */


      var _views_stream_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/stream.component */
      "AO/D");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/components.module */
      "j1ZV");
      /* harmony import */


      var _hlsplayer_hlsplayer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./hlsplayer/hlsplayer.component */
      "zciF");
      /* harmony import */


      var _soloselect_soloselect_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./soloselect/soloselect.component */
      "GwpB");
      /* harmony import */


      var _layouteditor_layouteditor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./layouteditor/layouteditor.component */
      "wqEi");
      /* harmony import */


      var _views_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./views/layout.component */
      "cUW5");
      /* harmony import */


      var _views_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./views/edit.component */
      "o0Kp");
      /* harmony import */


      var _views_editclock_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./views/editclock.component */
      "jYce");
      /* harmony import */


      var _views_editlabel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./views/editlabel.component */
      "WJpm");
      /* harmony import */


      var _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./presetselect/presetselect.component */
      "wn/M");
      /* harmony import */


      var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @fortawesome/fontawesome-svg-core */
      "7O5W");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _block_block_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./block/block.component */
      "xo3F");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        providers: [_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"], _wsdata_service__WEBPACK_IMPORTED_MODULE_4__["WsdataService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["MyAddonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _views_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"], _views_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"], _views_system_component__WEBPACK_IMPORTED_MODULE_7__["SystemComponent"], _views_stream_component__WEBPACK_IMPORTED_MODULE_8__["StreamComponent"], _hlsplayer_hlsplayer_component__WEBPACK_IMPORTED_MODULE_11__["HlsPlayerComponent"], _soloselect_soloselect_component__WEBPACK_IMPORTED_MODULE_12__["SoloSelectComponent"], _layouteditor_layouteditor_component__WEBPACK_IMPORTED_MODULE_13__["LayoutEditorComponent"], _views_layout_component__WEBPACK_IMPORTED_MODULE_14__["LayoutComponent"], _views_edit_component__WEBPACK_IMPORTED_MODULE_15__["EditComponent"], _views_editclock_component__WEBPACK_IMPORTED_MODULE_16__["EditClockComponent"], _views_editlabel_component__WEBPACK_IMPORTED_MODULE_17__["EditLabelComponent"], _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_18__["PresetSelectComponent"], _block_block_component__WEBPACK_IMPORTED_MODULE_21__["BlockComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_10__["MyAddonModule"]]
        });
      })();

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faClock"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faChevronCircleLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faAlignLeft"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faAngleDoubleDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faCogs"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faThLarge"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faHdd"]);

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_20__["faBars"]);

      _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_19__["dom"].watch();
      /***/

    },

    /***/
    "cUW5":
    /*!*******************************************!*\
      !*** ./src/app/views/layout.component.ts ***!
      \*******************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function cUW5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../presetselect/presetselect.component */
      "wn/M");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _components_buttongroup_buttongroup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/buttongroup/buttongroup.component */
      "rbfC");
      /* harmony import */


      var _layouteditor_layouteditor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../layouteditor/layouteditor.component */
      "wqEi");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");

      var _c0 = ["layoutForm"];

      var _c1 = function _c1() {
        return ["3x3", "4x4", "5x5", "6x6", "12x12"];
      };

      var _c2 = function _c2() {
        return ["Video", "Clock", "Timer", "Label"];
      };

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(wsData) {
          var _this13 = this;

          _classCallCheck(this, LayoutComponent);

          this.wsData = wsData;
          this.addType = 0;
          this.grid = 0;
          this.inputNumber = 8;
          this.wsData.subscribeNewData(function () {
            return _this13.newdata();
          });
          this.newdata();
        }

        _createClass(LayoutComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.wsData.layoutData.dirty === 0) {
              if (this.wsData.layoutData.grid === 3) {
                this.grid = 0;
              } else if (this.wsData.layoutData.grid === 4) {
                this.grid = 1;
              } else if (this.wsData.layoutData.grid === 5) {
                this.grid = 2;
              } else if (this.wsData.layoutData.grid === 6) {
                this.grid = 3;
              } else {
                this.grid = 4;
              }
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "newWindow",
          value: function newWindow(window) {
            this.wsData.addWindow(window, this.addType);
            this.wsData.layoutData.dirty = 1;
          }
        }, {
          key: "removeWindow",
          value: function removeWindow(window) {
            this.wsData.removeWindow(window);
            this.wsData.layoutData.dirty = 1;
          }
        }, {
          key: "setGrid",
          value: function setGrid(value) {
            if (value === 0) {
              this.wsData.setGrid(3);
            } else if (value === 1) {
              this.wsData.setGrid(4);
            } else if (value === 2) {
              this.wsData.setGrid(5);
            } else if (value === 3) {
              this.wsData.setGrid(6);
            } else {
              this.wsData.setGrid(12);
            }

            this.wsData.layoutData.dirty = 1;
          }
        }, {
          key: "dataApply",
          value: function dataApply() {
            this.wsData.sendSet();
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.wsData.layoutReset();
          }
        }, {
          key: "presetChanged",
          value: function presetChanged(preset) {
            this.wsData.sendPreset(preset);
          }
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]));
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        viewQuery: function LayoutComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.layoutForm = _t.first);
          }
        },
        decls: 13,
        vars: 16,
        consts: [["layoutForm", "ngForm"], [3, "data", "modelStr"], ["title", "Slave mode", 3, "hidden"], ["title", "Layout editor", 1, "col-xxl-10", "col-xl-11", "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2", "mb-2", "layoutpanel", 3, "hidden"], [3, "data", "presetIndex", "changed"], ["title", "Name", "name", "layoutName", 3, "ngModel", "ngModelChange"], ["title", "Grid", "name", "grid", 3, "buttons", "ngModel", "ngModelChange"], ["title", "Add New", "name", "addtype", 3, "buttons", "ngModel", "ngModelChange"], [1, "form-group", "row"], [1, "col-md-12", 3, "data", "addType", "changed", "remove"], [3, "disabled", "apply", "cancel"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-view", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Device in slave mode. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-panel", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-presetselect", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function LayoutComponent_Template_app_presetselect_changed_6_listener($event) {
              return ctx.presetChanged($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-inputfield", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutComponent_Template_app_inputfield_ngModelChange_7_listener($event) {
              return ctx.wsData.layoutData.presets[ctx.wsData.layoutData.presetIndex] = $event;
            })("ngModelChange", function LayoutComponent_Template_app_inputfield_ngModelChange_7_listener() {
              return ctx.wsData.layoutData.dirty = 1;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-buttongroup", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutComponent_Template_app_buttongroup_ngModelChange_8_listener($event) {
              return ctx.grid = $event;
            })("ngModelChange", function LayoutComponent_Template_app_buttongroup_ngModelChange_8_listener() {
              return ctx.setGrid(ctx.grid);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-buttongroup", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LayoutComponent_Template_app_buttongroup_ngModelChange_9_listener($event) {
              return ctx.addType = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-layouteditor", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changed", function LayoutComponent_Template_app_layouteditor_changed_11_listener($event) {
              return ctx.newWindow($event);
            })("remove", function LayoutComponent_Template_app_layouteditor_remove_11_listener($event) {
              return ctx.removeWindow($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-setcancelbutton", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("apply", function LayoutComponent_Template_app_setcancelbutton_apply_12_listener() {
              return ctx.dataApply();
            })("cancel", function LayoutComponent_Template_app_setcancelbutton_cancel_12_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode !== 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode === 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.layoutData.presets)("presetIndex", ctx.wsData.layoutData.presetIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.wsData.layoutData.presets[ctx.wsData.layoutData.presetIndex]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1))("ngModel", ctx.grid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttons", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c2))("ngModel", ctx.addType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.layoutData)("addType", ctx.addType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.wsData.layoutData.dirty === 0);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _presetselect_presetselect_component__WEBPACK_IMPORTED_MODULE_5__["PresetSelectComponent"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _components_buttongroup_buttongroup_component__WEBPACK_IMPORTED_MODULE_7__["ButtonGroupComponent"], _layouteditor_layouteditor_component__WEBPACK_IMPORTED_MODULE_8__["LayoutEditorComponent"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_9__["SetCancelButtonComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.layoutpanel[_ngcontent-%COMP%] {\n  max-width: 950px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImxheW91dC5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVI7QUFyRUE7RUFDSSxnQkFBQTtBQXVFSiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbmF2YmFyLWNvbG9yOiAjMkY0MDUwO1xuQG5hdmJhci10ZXh0OiAjQTdCMUMyO1xuQHJvdy10ZXh0OiAjNjc2QTZDO1xuQGNhcmQtYmFja2dyb3VuZDogI2YzZjNmNDtcbkBidXR0b24tY29sb3I6ICM0NGFmNjk7XG5AYnV0dG9uLWdyZXktY29sb3I6ICNCNUI1QjU7XG5AYnV0dG9uLXJlZC1jb2xvcjogI0RCMkIzOTtcbkBidXR0b24teWVsbG93LWNvbG9yOiAjRURENzQ3O1xuXG5Ac2lkZWJhci1uYXZiYXItY29sb3I6ICNGM0YzRjQ7XG5cbkBzaWRlYmFyLWNvbG9yOiAjM2U0MTQ0O1xuQHNpZGViYXItYWN0aXZlOiAjNjE2Yjc1O1xuQHNpZGViYXItZm9udDogI2E3YjFjMjtcbkBzaWRlYmFyLWZvbnQtYWN0aXZlOiAjRkZGO1xuXG5AZ3JlZW4tdGhlbWUtY29sb3I6ICM0NGFmNjk7XG5cbi5idXR0b24tZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWdyZXktY29sb3I7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXJlZC1jb2xvcjtcbn1cblxuLmJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24teWVsbG93LWNvbG9yO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzc1wiO1xuXG4ubGF5b3V0cGFuZWwge1xuICAgIG1heC13aWR0aDogOTUwcHg7XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "j1ZV":
    /*!*************************************************!*\
      !*** ./src/app/components/components.module.ts ***!
      \*************************************************/

    /*! exports provided: MyAddonModule */

    /***/
    function j1ZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAddonModule", function () {
        return MyAddonModule;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./selectfield/selectfield.component */
      "0NCe");
      /* harmony import */


      var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./sidebar/sidebar.component */
      "zBoC");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");
      /* harmony import */


      var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./view/view.component */
      "q8oT");
      /* harmony import */


      var _connection_connection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./connection/connection.component */
      "xFbp");
      /* harmony import */


      var _buttongroup_buttongroup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./buttongroup/buttongroup.component */
      "rbfC");
      /* harmony import */


      var _timezone_timezone_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./timezone/timezone.component */
      "4lV0");
      /* harmony import */


      var _panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./panelhr/panelhr.component */
      "v3u4");
      /* harmony import */


      var _setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./setcancelbutton/setcancelbutton.component */
      "V91b");
      /* harmony import */


      var _setcancelwide_setcancelwide_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./setcancelwide/setcancelwide.component */
      "YTW0");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./checkbox/checkbox.component */
      "73T4");
      /* harmony import */


      var _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./modal/modal.component */
      "7aL3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyAddonModule = function MyAddonModule() {
        _classCallCheck(this, MyAddonModule);
      };

      MyAddonModule.ɵfac = function MyAddonModule_Factory(t) {
        return new (t || MyAddonModule)();
      };

      MyAddonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: MyAddonModule
      });
      MyAddonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](MyAddonModule, {
          declarations: [_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_1__["InputfieldComponent"], _selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_2__["SelectfieldComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"], _connection_connection_component__WEBPACK_IMPORTED_MODULE_8__["ConnectionComponent"], _buttongroup_buttongroup_component__WEBPACK_IMPORTED_MODULE_9__["ButtonGroupComponent"], _timezone_timezone_component__WEBPACK_IMPORTED_MODULE_10__["TimezoneComponent"], _panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_11__["PanelHrComponent"], _setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_12__["SetCancelButtonComponent"], _setcancelwide_setcancelwide_component__WEBPACK_IMPORTED_MODULE_13__["SetCancelWideComponent"], _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_14__["FieldBodyComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["CheckboxComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
          exports: [_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_1__["InputfieldComponent"], _selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_2__["SelectfieldComponent"], _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_7__["ViewComponent"], _connection_connection_component__WEBPACK_IMPORTED_MODULE_8__["ConnectionComponent"], _buttongroup_buttongroup_component__WEBPACK_IMPORTED_MODULE_9__["ButtonGroupComponent"], _timezone_timezone_component__WEBPACK_IMPORTED_MODULE_10__["TimezoneComponent"], _panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_11__["PanelHrComponent"], _setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_12__["SetCancelButtonComponent"], _setcancelwide_setcancelwide_component__WEBPACK_IMPORTED_MODULE_13__["SetCancelWideComponent"], _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_14__["FieldBodyComponent"], _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_15__["CheckboxComponent"], _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
        });
      })();
      /***/

    },

    /***/
    "jYce":
    /*!**********************************************!*\
      !*** ./src/app/views/editclock.component.ts ***!
      \**********************************************/

    /*! exports provided: EditClockComponent */

    /***/
    function jYce(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditClockComponent", function () {
        return EditClockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/selectfield/selectfield.component */
      "0NCe");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");

      var _c0 = ["settingsForm"];

      var EditClockComponent = /*#__PURE__*/function () {
        function EditClockComponent(wsData, router) {
          var _this14 = this;

          _classCallCheck(this, EditClockComponent);

          this.wsData = wsData;
          this.router = router;
          this.clockLabel = '';
          this.clockStyle = 0;
          this.dateLocale = 0;
          this.clockLabel = this.wsData.clockData.label;
          this.wsData.subscribeNewData(function () {
            return _this14.newdata();
          });
          this.copyData();
        }

        _createClass(EditClockComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.settingsForm.form.pristine) {
              this.copyData();
            }
          }
        }, {
          key: "copyData",
          value: function copyData() {
            this.clockLabel = this.wsData.clockData.label;
            this.clockStyle = this.wsData.clockData.style;
            this.dateLocale = this.wsData.clockData.dateLocale;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "dataApply",
          value: function dataApply() {
            this.wsData.clockData.label = this.clockLabel;
            this.wsData.clockData.style = this.clockStyle;
            this.wsData.clockData.dateLocale = this.dateLocale;
            this.wsData.layoutData.dirty = 1;
            this.router.navigate(['/edit']);
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.router.navigate(['/edit']);
          }
        }]);

        return EditClockComponent;
      }();

      EditClockComponent.ɵfac = function EditClockComponent_Factory(t) {
        return new (t || EditClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditClockComponent,
        selectors: [["app-editclock"]],
        viewQuery: function EditClockComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.settingsForm = _t.first);
          }
        },
        decls: 16,
        vars: 10,
        consts: [[3, "data", "modelStr"], ["title", "Clock settings"], ["settingsForm", "ngForm"], ["title", "Label", "name", "label", 3, "ngModel", "ngModelChange"], ["title", "Style", "name", "clockStyle", 3, "ngModel", "ngModelChange"], [3, "value"], ["title", "Date Text", "name", "dateLocale", 3, "ngModel", "disabled", "ngModelChange"], [3, "apply", "cancel"]],
        template: function EditClockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-inputfield", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditClockComponent_Template_app_inputfield_ngModelChange_4_listener($event) {
              return ctx.clockLabel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-selectfield", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditClockComponent_Template_app_selectfield_ngModelChange_5_listener($event) {
              return ctx.clockStyle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Analog");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Digital");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-selectfield", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditClockComponent_Template_app_selectfield_ngModelChange_10_listener($event) {
              return ctx.dateLocale = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Russian");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-setcancelbutton", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("apply", function EditClockComponent_Template_app_setcancelbutton_apply_15_listener() {
              return ctx.dataApply();
            })("cancel", function EditClockComponent_Template_app_setcancelbutton_cancel_15_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clockLabel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.clockStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dateLocale)("disabled", ctx.clockStyle === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
          }
        },
        directives: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_6__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_7__["SelectfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_8__["SetCancelButtonComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImVkaXRjbG9jay5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoiZWRpdGNsb2NrLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "o0Kp":
    /*!*****************************************!*\
      !*** ./src/app/views/edit.component.ts ***!
      \*****************************************/

    /*! exports provided: EditComponent */

    /***/
    function o0Kp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
        return EditComponent;
      });
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../tools */
      "Y+0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/selectfield/selectfield.component */
      "0NCe");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/panelhr/panelhr.component */
      "v3u4");
      /* harmony import */


      var _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../components/checkbox/checkbox.component */
      "73T4");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");

      var _c0 = ["settingsForm"];

      function EditComponent_ng_container_5_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var i_r3 = ctx_r5.index;
          var item_r2 = ctx_r5.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", i_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r4.wsData.getInputNumberString(i_r3), ". ", item_r2, "");
        }
      }

      function EditComponent_ng_container_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_ng_container_5_option_1_Template, 2, 3, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.wsData.getInputSkip(i_r3));
        }
      }

      var EditComponent = /*#__PURE__*/function () {
        function EditComponent(wsData, route, router) {
          var _this15 = this;

          _classCallCheck(this, EditComponent);

          this.wsData = wsData;
          this.route = route;
          this.router = router;
          this.windowId = 0;
          this.input = 0;
          this.bars = 0;
          this.audioAlarm = 0;
          this.audioLevel = 0;
          this.audioThreshold = 0;
          this.videoFreeze = 0;
          this.scte104Display = 0;
          this.teletextDisplay = 0;
          this.teletextPage = 0;
          this.aspectRatioSd = 0;
          this.sdiFormatEnable = 0;
          this.umdDisplay = 0;
          this.cellStyle = 0;
          this.audioAlarmChannel = [1, 1, 1, 1];
          this.windowId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
          this.wsData.subscribeNewData(function () {
            return _this15.newdata();
          });

          if (this.wsData.layoutData.inputs.length > this.windowId) {
            this.copyData();
          }
        }

        _createClass(EditComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.wsData.layoutData.inputs.length > this.windowId && this.settingsForm.form.pristine) {
              this.copyData();
            }
          }
        }, {
          key: "copyData",
          value: function copyData() {
            this.input = this.wsData.layoutData.inputs[this.windowId].input;
            this.bars = this.wsData.layoutData.inputs[this.windowId].bars;
            this.audioAlarm = this.wsData.layoutData.inputs[this.windowId].audioAlarm;
            this.videoFreeze = this.wsData.layoutData.inputs[this.windowId].videoFreeze;
            this.scte104Display = this.wsData.layoutData.inputs[this.windowId].scte104Display;
            this.aspectRatioSd = this.wsData.layoutData.inputs[this.windowId].aspectRatioSd;
            this.sdiFormatEnable = this.wsData.layoutData.inputs[this.windowId].sdiFormatEnable;
            this.umdDisplay = this.wsData.layoutData.inputs[this.windowId].umdDisplay;
            this.cellStyle = this.wsData.layoutData.inputs[this.windowId].cellStyle;
            this.audioAlarmChannel = Object(_tools__WEBPACK_IMPORTED_MODULE_0__["copyArray"])(this.wsData.layoutData.inputs[this.windowId].audioAlarmEnable);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {}
        }, {
          key: "dataApply",
          value: function dataApply() {
            this.wsData.layoutData.inputs[this.windowId].bars = this.bars;
            this.wsData.layoutData.inputs[this.windowId].audioAlarm = this.audioAlarm;
            this.wsData.layoutData.inputs[this.windowId].videoFreeze = this.videoFreeze;
            this.wsData.layoutData.inputs[this.windowId].scte104Display = this.scte104Display;
            this.wsData.layoutData.inputs[this.windowId].aspectRatioSd = this.aspectRatioSd;
            this.wsData.layoutData.inputs[this.windowId].sdiFormatEnable = this.sdiFormatEnable;
            this.wsData.layoutData.inputs[this.windowId].umdDisplay = this.umdDisplay;
            this.wsData.layoutData.inputs[this.windowId].cellStyle = this.cellStyle;
            this.wsData.layoutData.inputs[this.windowId].audioAlarmEnable = Object(_tools__WEBPACK_IMPORTED_MODULE_0__["copyArray"])(this.audioAlarmChannel);
            this.wsData.setCellData(this.windowId, {
              input: this.input
            });
            this.wsData.layoutData.dirty = 1;
            this.settingsForm.form.markAsPristine();
            this.router.navigate(['/edit']);
          }
        }, {
          key: "dataCancel",
          value: function dataCancel() {
            this.settingsForm.form.markAsPristine();
            this.router.navigate(['/edit']);
          }
        }]);

        return EditComponent;
      }();

      EditComponent.ɵfac = function EditComponent_Factory(t) {
        return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_2__["WsdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EditComponent,
        selectors: [["app-edit"]],
        viewQuery: function EditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.settingsForm = _t.first);
          }
        },
        decls: 58,
        vars: 34,
        consts: [[3, "data", "modelStr"], ["title", "Cell parameters"], ["settingsForm", "ngForm"], ["title", "Input", "name", "type", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["title", "Cell Style", "name", "cellStyle", 3, "ngModel", "ngModelChange"], [3, "value"], ["title", "Audio Bars", "name", "bars", 3, "ngModel", "ngModelChange"], ["title", "SD Aspect Ratio", "nocase", "", "name", "aspectRatioSd", 3, "ngModel", "ngModelChange"], ["title", "SDI Format", "nocase", "", "name", "sdiFormatEnable", 3, "ngModel", "ngModelChange"], ["title", "Alarms"], ["title", "Audio Silence", "name", "audioAlarm", 3, "ngModel", "ngModelChange"], ["title", "Audio Channels"], ["title", "1", "name", "audio1", 3, "ngModel", "ngModelChange"], ["title", "2", "name", "audio2", 3, "ngModel", "ngModelChange"], ["title", "3", "name", "audio3", 3, "ngModel", "ngModelChange"], ["title", "4", "name", "audio4", 3, "ngModel", "ngModelChange"], ["title", "Video Freeze", "name", "videoFreeze", 3, "ngModel", "ngModelChange"], ["title", "Display Info"], ["title", "SCTE-104", "nocase", "", "name", "scte104Display", 3, "ngModel", "ngModelChange"], ["title", "Label Text", "name", "umdDisplay", 3, "ngModel", "ngModelChange"], [3, "apply", "cancel"], [3, "value", 4, "ngIf"]],
        template: function EditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", null, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-selectfield", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_4_listener($event) {
              return ctx.input = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditComponent_ng_container_5_Template, 2, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "app-selectfield", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_6_listener($event) {
              return ctx.cellStyle = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-selectfield", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_11_listener($event) {
              return ctx.bars = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Off");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Single");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Dual");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "app-selectfield", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_18_listener($event) {
              return ctx.aspectRatioSd = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "4:3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "16:9");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "app-selectfield", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_23_listener($event) {
              return ctx.sdiFormatEnable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Disable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Enable");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-panelhr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "app-selectfield", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_29_listener($event) {
              return ctx.audioAlarm = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "app-fieldbody", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-checkbox", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_checkbox_ngModelChange_35_listener($event) {
              return ctx.audioAlarmChannel[0] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "app-checkbox", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_checkbox_ngModelChange_36_listener($event) {
              return ctx.audioAlarmChannel[1] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "app-checkbox", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_checkbox_ngModelChange_37_listener($event) {
              return ctx.audioAlarmChannel[2] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "app-checkbox", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_checkbox_ngModelChange_38_listener($event) {
              return ctx.audioAlarmChannel[3] = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "app-selectfield", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_39_listener($event) {
              return ctx.videoFreeze = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "app-panelhr", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "app-selectfield", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_45_listener($event) {
              return ctx.scte104Display = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "app-selectfield", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_app_selectfield_ngModelChange_50_listener($event) {
              return ctx.umdDisplay = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Static");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "UMD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "option", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Static & UMD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "app-setcancelbutton", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("apply", function EditComponent_Template_app_setcancelbutton_apply_57_listener() {
              return ctx.dataApply();
            })("cancel", function EditComponent_Template_app_setcancelbutton_cancel_57_listener() {
              return ctx.dataCancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.input);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.wsData.settingsData.sdi_label);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.cellStyle);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bars);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.aspectRatioSd);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.sdiFormatEnable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.audioAlarm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.audioAlarmChannel[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.audioAlarmChannel[1]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.audioAlarmChannel[2]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.audioAlarmChannel[3]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.videoFreeze);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.scte104Display);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.umdDisplay);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);
          }
        },
        directives: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_7__["SelectfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_9__["PanelHrComponent"], _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_10__["FieldBodyComponent"], _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxComponent"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_12__["SetCancelButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImVkaXQuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSIiwiZmlsZSI6ImVkaXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbmF2YmFyLWNvbG9yOiAjMkY0MDUwO1xuQG5hdmJhci10ZXh0OiAjQTdCMUMyO1xuQHJvdy10ZXh0OiAjNjc2QTZDO1xuQGNhcmQtYmFja2dyb3VuZDogI2YzZjNmNDtcbkBidXR0b24tY29sb3I6ICM0NGFmNjk7XG5AYnV0dG9uLWdyZXktY29sb3I6ICNCNUI1QjU7XG5AYnV0dG9uLXJlZC1jb2xvcjogI0RCMkIzOTtcbkBidXR0b24teWVsbG93LWNvbG9yOiAjRURENzQ3O1xuXG5Ac2lkZWJhci1uYXZiYXItY29sb3I6ICNGM0YzRjQ7XG5cbkBzaWRlYmFyLWNvbG9yOiAjM2U0MTQ0O1xuQHNpZGViYXItYWN0aXZlOiAjNjE2Yjc1O1xuQHNpZGViYXItZm9udDogI2E3YjFjMjtcbkBzaWRlYmFyLWZvbnQtYWN0aXZlOiAjRkZGO1xuXG5AZ3JlZW4tdGhlbWUtY29sb3I6ICM0NGFmNjk7XG5cbi5idXR0b24tZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWdyZXktY29sb3I7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXJlZC1jb2xvcjtcbn1cblxuLmJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24teWVsbG93LWNvbG9yO1xufVxuIiwiLmJ1dHRvbi1kZWZhdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhZjY5O1xufVxuLmJ1dHRvbi1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I1QjVCNTtcbn1cbi5idXR0b24tcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RCMkIzOTtcbn1cbi5idXR0b24teWVsbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERDc0Nztcbn1cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY29sb3I6ICM2NzZBNkM7XG59XG5ociB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkNGQ5ZTE7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnJpZ2h0LWFsaWduIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY2VudGVyLWFsaWduIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLFxuLmZvcm0tc2VsZWN0OmZvY3VzLFxuLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cbi5idG4tZml4ZWQtd2lkdGgsXG4uYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gIG1pbi13aWR0aDogNmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59XG4uYnRuLWZpeGVkLXdpZHRoOmZpcnN0LWNoaWxkLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmJ0bi1maXhlZC13aWR0aCxcbiAgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxufVxuLmJ0bi1maXhlZC13aWR0aFtkaXNhYmxlZF0sXG4uYnRuLWZpeGVkLXdpZHRoOmhvdmVyW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiAjZDlkOWQ5O1xuICBvcGFjaXR5OiAwLjQ7XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "q8oT":
    /*!***************************************************!*\
      !*** ./src/app/components/view/view.component.ts ***!
      \***************************************************/

    /*! exports provided: ViewComponent */

    /***/
    function q8oT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
        return ViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../sidebar/sidebar.component */
      "zBoC");

      var _c0 = ["*"];

      var ViewComponent = function ViewComponent() {
        _classCallCheck(this, ViewComponent);

        // Настройки sidebar
        this.data = [];
        this.modelStr = 'No Model';
      };

      ViewComponent.ɵfac = function ViewComponent_Factory(t) {
        return new (t || ViewComponent)();
      };

      ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ViewComponent,
        selectors: [["app-view"]],
        inputs: {
          data: "data",
          modelStr: "modelStr"
        },
        ngContentSelectors: _c0,
        decls: 6,
        vars: 2,
        consts: [[1, "container-fluid"], [3, "data", "modelStr"], [1, "card", "card-primary-view"], [1, "card-body"], [1, "row", "display-flex"]],
        template: function ViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-sidebar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data)("modelStr", ctx.modelStr);
          }
        },
        directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.card-primary-view[_ngcontent-%COMP%] {\n  margin: 1em;\n  border-width: 0em;\n  background: #f3f3f4;\n  box-shadow: none;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  display: inline-block;\n  padding: 0px;\n}\n.row.display-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.row.display-flex[_ngcontent-%COMP%]    > [class*='col-'][_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-bottom: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInZpZXcuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBckVBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXVFSjtBQXBFQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBc0VKO0FBbkVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFxRUo7QUFsRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFvRUoiLCJmaWxlIjoidmlldy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzXCI7XG5cbi5jYXJkLXByaW1hcnktdmlldyB7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgYm9yZGVyLXdpZHRoOiAwZW07XG4gICAgYmFja2dyb3VuZDogQGNhcmQtYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDE2MDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93LmRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5yb3cuZGlzcGxheS1mbGV4ID4gW2NsYXNzKj0nY29sLSddIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "rbfC":
    /*!*****************************************************************!*\
      !*** ./src/app/components/buttongroup/buttongroup.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ButtonGroupComponent */

    /***/
    function rbfC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupComponent", function () {
        return ButtonGroupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "active": a0
        };
      };

      function ButtonGroupComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonGroupComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeValue(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.value === i_r2))("disabled", ctx_r0.isDisabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
        }
      }

      var ButtonGroupComponent = /*#__PURE__*/function () {
        function ButtonGroupComponent() {
          _classCallCheck(this, ButtonGroupComponent);

          this.title = '';
          this.buttons = [];

          this.onChange = function () {};

          this.onTouched = function () {};

          this.isNocase = false;
        }

        _createClass(ButtonGroupComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }, {
          key: "value",
          get: function get() {
            return +this.val;
          },
          set: function set(val) {
            this.val = val;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.val = +value;
          }
        }, {
          key: "changeValue",
          value: function changeValue(value) {
            this.value = value;
            this.onChange(+value);
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.isDisabled = isDisabled;
          }
        }]);

        return ButtonGroupComponent;
      }();

      ButtonGroupComponent.ɵfac = function ButtonGroupComponent_Factory(t) {
        return new (t || ButtonGroupComponent)();
      };

      ButtonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonGroupComponent,
        selectors: [["app-buttongroup"]],
        inputs: {
          title: "title",
          buttons: "buttons",
          nocase: "nocase"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
            return ButtonGroupComponent;
          }),
          multi: true
        }])],
        decls: 3,
        vars: 3,
        consts: [[3, "title", "nocase"], ["role", "group", 1, "btn-group"], ["type", "button", "class", "btn buttongroup", 3, "ngClass", "disabled", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "buttongroup", 3, "ngClass", "disabled", "click"]],
        template: function ButtonGroupComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonGroupComponent_button_2_Template, 2, 5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("nocase", ctx.isNocase);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buttons);
          }
        },
        directives: [_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_2__["FieldBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.buttongroup[_ngcontent-%COMP%] {\n  color: black;\n  border-color: #44af69;\n}\n.buttongroup[_ngcontent-%COMP%]:hover, .buttongroup[_ngcontent-%COMP%]:focus, .buttongroup[_ngcontent-%COMP%]:active, .buttongroup.active[_ngcontent-%COMP%] {\n  background-color: #44af69;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImJ1dHRvbmdyb3VwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUjtBQXJFQTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQXVFSjtBQXRFSTs7OztFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTJFUiIsImZpbGUiOiJidXR0b25ncm91cC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzXCI7XG5cbi5idXR0b25ncm91cCB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbiAgICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSwgJi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "v3u4":
    /*!*********************************************************!*\
      !*** ./src/app/components/panelhr/panelhr.component.ts ***!
      \*********************************************************/

    /*! exports provided: PanelHrComponent */

    /***/
    function v3u4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelHrComponent", function () {
        return PanelHrComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var PanelHrComponent = /*#__PURE__*/function () {
        function PanelHrComponent() {
          _classCallCheck(this, PanelHrComponent);

          this.title = '';
          this.isNocase = false;
        }

        _createClass(PanelHrComponent, [{
          key: "nocase",
          set: function set(value) {
            // защита от пустой строки
            this.isNocase = typeof value === 'boolean' ? value : true;
          }
        }]);

        return PanelHrComponent;
      }();

      PanelHrComponent.ɵfac = function PanelHrComponent_Factory(t) {
        return new (t || PanelHrComponent)();
      };

      PanelHrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PanelHrComponent,
        selectors: [["app-panelhr"]],
        inputs: {
          title: "title",
          nocase: "nocase"
        },
        decls: 5,
        vars: 3,
        consts: [[1, "row"], [1, "col-12", "col-form-label"]],
        template: function PanelHrComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isNocase === true ? ctx.title : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.title), " ");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInBhbmVsaHIuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBckVBO0VBQ0ksZ0JBQUE7QUF1RUoiLCJmaWxlIjoicGFuZWxoci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzXCI7XG5cbmxhYmVsIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _views_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./views/main.component */
      "VF3m");
      /* harmony import */


      var _views_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./views/settings.component */
      "yY8n");
      /* harmony import */


      var _views_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./views/system.component */
      "4l9g");
      /* harmony import */


      var _views_stream_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/stream.component */
      "AO/D");
      /* harmony import */


      var _views_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/layout.component */
      "cUW5");
      /* harmony import */


      var _views_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/edit.component */
      "o0Kp");
      /* harmony import */


      var _views_editclock_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/editclock.component */
      "jYce");
      /* harmony import */


      var _views_editlabel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/editlabel.component */
      "WJpm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'status',
        component: _views_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]
      }, {
        path: 'settings',
        component: _views_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"]
      }, {
        path: 'system',
        component: _views_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"]
      }, {
        path: 'stream',
        component: _views_stream_component__WEBPACK_IMPORTED_MODULE_4__["StreamComponent"]
      }, {
        path: 'edit',
        component: _views_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]
      }, {
        path: 'edit/window/:id',
        component: _views_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"]
      }, {
        path: 'edit/clock',
        component: _views_editclock_component__WEBPACK_IMPORTED_MODULE_7__["EditClockComponent"]
      }, {
        path: 'edit/label/:id',
        component: _views_editlabel_component__WEBPACK_IMPORTED_MODULE_8__["EditLabelComponent"]
      }, {
        path: '**',
        redirectTo: 'status',
        pathMatch: 'full'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wn/M":
    /*!********************************************************!*\
      !*** ./src/app/presetselect/presetselect.component.ts ***!
      \********************************************************/

    /*! exports provided: PresetSelectComponent */

    /***/
    function wnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PresetSelectComponent", function () {
        return PresetSelectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/fieldbody/fieldbody.component */
      "1kPW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PresetSelectComponent_a_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PresetSelectComponent_a_7_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.lineClick($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var d_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r1);
        }
      }

      var PresetSelectComponent = /*#__PURE__*/function () {
        function PresetSelectComponent() {
          _classCallCheck(this, PresetSelectComponent);

          this.data = [];
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.presetIndex = 0;
          this.preset = 0;
        }

        _createClass(PresetSelectComponent, [{
          key: "lineClick",
          value: function lineClick(event, data) {
            event.preventDefault();
            this.preset = data;
            this.changed.emit(this.preset);
          }
        }]);

        return PresetSelectComponent;
      }();

      PresetSelectComponent.ɵfac = function PresetSelectComponent_Factory(t) {
        return new (t || PresetSelectComponent)();
      };

      PresetSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PresetSelectComponent,
        selectors: [["app-presetselect"]],
        inputs: {
          data: "data",
          presetIndex: "presetIndex"
        },
        outputs: {
          changed: "changed"
        },
        decls: 8,
        vars: 6,
        consts: [["title", "Layout Preset"], ["role", "group", 1, "btn-group", "d-flex"], ["role", "group", 1, "btn-group", "w-100"], ["id", "btnGroupDrop1", "type", "button", "data-bs-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "presetselect", "dropdown-toggle", "w-100", "text-end"], ["aria-labelledby", "btnGroupDrop1", 1, "dropdown-menu"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"]],
        template: function PresetSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-fieldbody", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PresetSelectComponent_a_7_Template, 2, 1, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 2, ctx.data[ctx.presetIndex], 0, 25), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_components_fieldbody_fieldbody_component__WEBPACK_IMPORTED_MODULE_1__["FieldBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n.presetselect[_ngcontent-%COMP%] {\n  color: black;\n  border-color: #44af69;\n}\n.presetselect[_ngcontent-%COMP%]:hover, .presetselect[_ngcontent-%COMP%]:focus, .presetselect[_ngcontent-%COMP%]:active {\n  background-color: #44af69;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInByZXNldHNlbGVjdC5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVI7QUFyRUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUF1RUo7QUF0RUk7OztFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTBFUiIsImZpbGUiOiJwcmVzZXRzZWxlY3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbmF2YmFyLWNvbG9yOiAjMkY0MDUwO1xuQG5hdmJhci10ZXh0OiAjQTdCMUMyO1xuQHJvdy10ZXh0OiAjNjc2QTZDO1xuQGNhcmQtYmFja2dyb3VuZDogI2YzZjNmNDtcbkBidXR0b24tY29sb3I6ICM0NGFmNjk7XG5AYnV0dG9uLWdyZXktY29sb3I6ICNCNUI1QjU7XG5AYnV0dG9uLXJlZC1jb2xvcjogI0RCMkIzOTtcbkBidXR0b24teWVsbG93LWNvbG9yOiAjRURENzQ3O1xuXG5Ac2lkZWJhci1uYXZiYXItY29sb3I6ICNGM0YzRjQ7XG5cbkBzaWRlYmFyLWNvbG9yOiAjM2U0MTQ0O1xuQHNpZGViYXItYWN0aXZlOiAjNjE2Yjc1O1xuQHNpZGViYXItZm9udDogI2E3YjFjMjtcbkBzaWRlYmFyLWZvbnQtYWN0aXZlOiAjRkZGO1xuXG5AZ3JlZW4tdGhlbWUtY29sb3I6ICM0NGFmNjk7XG5cbi5idXR0b24tZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbn1cblxuLmJ1dHRvbi1ncmV5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWdyZXktY29sb3I7XG59XG5cbi5idXR0b24tcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXJlZC1jb2xvcjtcbn1cblxuLmJ1dHRvbi15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24teWVsbG93LWNvbG9yO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzc1wiO1xuXG4ucHJlc2V0c2VsZWN0IHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xuICAgICY6aG92ZXIsICY6Zm9jdXMsICY6YWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1jb2xvcjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "wqEi":
    /*!********************************************************!*\
      !*** ./src/app/layouteditor/layouteditor.component.ts ***!
      \********************************************************/

    /*! exports provided: LayoutEditorComponent */

    /***/
    function wqEi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutEditorComponent", function () {
        return LayoutEditorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @svgdotjs/svg.js */
      "Q3ix");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");

      var LayoutEditorComponent = /*#__PURE__*/function () {
        function LayoutEditorComponent(router, wsdata) {
          _classCallCheck(this, LayoutEditorComponent);

          this.router = router;
          this.wsdata = wsdata;
          this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.SVG_WIDTH = 800;
          this.SVG_HEIGHT = 450; // Логика выбора ячеек

          this.selectState = 0;
          this.selectStart = {
            x: 0,
            y: 0
          };
          this.selectEnd = {
            x: 0,
            y: 0
          };
          this.colorBackground = '#b1bfca';
          this.colorGrid = '#e3f2fd';
          this.colorActive = '#607d8b';
          this.colorNew = '#4b636e';
          this.gridSize = -1;
        }

        _createClass(LayoutEditorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.draw = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__["SVG"])().addTo('#svg').size(this.SVG_WIDTH, this.SVG_HEIGHT);
            this.drawLayout(true);
          }
        }, {
          key: "getGridBoxSize",
          value: function getGridBoxSize(v) {
            var ret = {
              w: (this.SVG_WIDTH - 5) / this.data.grid - 5,
              h: (this.SVG_HEIGHT - 5) / this.data.grid - 5,
              x: 5,
              y: 5
            };
            ret.x += (ret.w + ret.x) * v.x;
            ret.y += (ret.h + ret.y) * v.y;
            return ret;
          }
        }, {
          key: "getWindowBoxSize",
          value: function getWindowBoxSize(v) {
            var ret = {
              w: (this.SVG_WIDTH - 3) * (v.scale_x + 1) / this.data.grid - 3,
              h: (this.SVG_HEIGHT - 3) * (v.scale_y + 1) / this.data.grid - 3,
              x: 3,
              y: 3
            };
            ret.x += (this.SVG_WIDTH - 3) / this.data.grid * v.x;
            ret.y += (this.SVG_HEIGHT - 3) / this.data.grid * v.y;
            return ret;
          }
        }, {
          key: "windowToRect",
          value: function windowToRect(value) {
            return {
              x: value.x,
              y: value.y,
              w: value.x + value.scale_x,
              h: value.y + value.scale_y
            };
          }
        }, {
          key: "isInsideWindow",
          value: function isInsideWindow(v, window) {
            if (v.x >= window.x && v.x <= window.x + window.scale_x && v.y >= window.y && v.y <= window.y + window.scale_y) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isWindowIntersecting",
          value: function isWindowIntersecting(a, b) {
            if (this.isInsideWindow({
              x: a.x,
              y: a.y
            }, b) || this.isInsideWindow({
              x: a.x + a.scale_x,
              y: a.y
            }, b) || this.isInsideWindow({
              x: a.x,
              y: a.y + a.scale_y
            }, b) || this.isInsideWindow({
              x: a.x + a.scale_x,
              y: a.y + a.scale_y
            }, b) || a.x > b.x && a.x < b.x + b.scale_x && a.y < b.y && a.y + a.scale_y >= b.y + b.scale_y || a.x < b.x && a.x + a.scale_x > b.x + b.scale_x && a.y >= b.y && a.y + a.scale_y <= b.y + b.scale_y) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getAnyWindowIntersect",
          value: function getAnyWindowIntersect(v) {
            var _this16 = this;

            if (this.isWindowIntersecting(this.wsdata.clockData.pos, v) && this.wsdata.clockData.enable) {
              return true;
            }

            if (this.isWindowIntersecting(this.wsdata.timerData.pos, v) && this.wsdata.timerData.enable) {
              return true;
            }

            var r = this.data.inputs.filter(function (window) {
              if (_this16.isWindowIntersecting(window.pos, v)) {
                return true;
              } else {
                return false;
              }
            });

            if (r.length > 0) {
              return true;
            }

            var rlabel = this.data.labels.filter(function (window) {
              if (_this16.isWindowIntersecting(window.pos, v)) {
                return true;
              } else {
                return false;
              }
            });

            if (rlabel.length > 0) {
              return true;
            }

            return false;
          }
        }, {
          key: "shortName",
          value: function shortName(name) {
            return name.substring(0, 10);
          }
        }, {
          key: "drawGrid",
          value: function drawGrid() {
            var _this17 = this;

            if (this.gridSize === this.data.grid) {
              return;
            }

            this.gridSize = this.data.grid; // background

            this.draw.rect(this.SVG_WIDTH, this.SVG_HEIGHT).attr({
              fill: this.colorBackground
            }).mouseup(function (data) {
              return _this17.bkgMouseUp();
            }); // сетка

            var _loop = function _loop(y) {
              var _loop2 = function _loop2(x) {
                var boxSize = _this17.getGridBoxSize({
                  x: x,
                  y: y
                });

                var r = _this17.draw.rect(boxSize.w, boxSize.h).attr({
                  fill: _this17.colorGrid
                }).move(boxSize.x, boxSize.y).attr('data-x', x).attr('data-y', y).mousedown(function (data) {
                  return _this17.gridMouseDown(data, {
                    x: x,
                    y: y
                  });
                }).mouseup(function (data) {
                  return _this17.gridMouseUp({
                    x: x,
                    y: y
                  });
                }).on('update', function (data) {
                  return _this17.gridUpdate(data, {
                    x: x,
                    y: y
                  });
                }).mouseout(function (data) {
                  return _this17.gridMouseOut(data, {
                    x: x,
                    y: y
                  });
                }).mouseover(function (data) {
                  return _this17.gridMouseOver(data, {
                    x: x,
                    y: y
                  });
                });
              };

              for (var x = 0; x < _this17.data.grid; x++) {
                _loop2(x);
              }
            };

            for (var y = 0; y < this.data.grid; y++) {
              _loop(y);
            }
          }
        }, {
          key: "drawLayout",
          value: function drawLayout() {
            var _this18 = this;

            var drawAll = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var closeSize = 30;
            var textOffset = 25;

            if (this.data.grid > 4) {
              closeSize = 25;
              textOffset = 10;
            }

            if (this.data.grid > 5) {
              closeSize = 18;
              textOffset = 10;
            }

            this.drawGrid();

            for (var i = 0; i < 40; i = i + 1) {
              var ret = false;

              var _iterator2 = _createForOfIteratorHelper(this.data.inputs),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var value = _step2.value;

                  if (value.input === i) {
                    ret = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }

              if (!ret) {
                this.clearWindow(i);
              }
            }

            for (var _i = 0; _i < 40; _i = _i + 1) {
              var _ret = false;

              var _iterator3 = _createForOfIteratorHelper(this.data.labels),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var _value = _step3.value;

                  if (_value.id === _i) {
                    _ret = true;
                    break;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              if (!_ret) {
                this.clearWindow(100 + _i);
              }
            } // окна


            this.data.inputs.forEach(function (value, i) {
              var fontSize = '1em';

              if (!value.update && !drawAll) {
                return;
              }

              value.update = false;

              _this18.clearWindow(value.input);

              var g = _this18.draw.group().attr('index', value.input);

              var boxSize = _this18.getWindowBoxSize(value.pos);

              var r = g.rect(boxSize.w, boxSize.h).attr({
                fill: _this18.colorActive
              }).move(boxSize.x, boxSize.y).click(function () {
                _this18.router.navigate(['/edit/window/' + i]);
              });

              if (value.pos.scale_x === 0 && _this18.gridSize === 12) {
                fontSize = '0.5em';
              } // Имя входа


              var text = g.plain(_this18.shortName(_this18.wsdata.getInputName(value.input))).font({
                fill: '#ffffff',
                'font-size': fontSize,
                'text-anchor': 'middle'
              }).center(boxSize.x + boxSize.w / 2, boxSize.y + boxSize.h - textOffset).attr('pointer-events', 'none'); // иконка

              g.use('closeicon').size(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5);
              g.rect(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5).attr('pointer-events', 'bounding-box').opacity(0.01).click(function () {
                return _this18.removeWindow(value.pos);
              });
            }); // часы

            if (this.wsdata.clockData.enable) {
              if (this.wsdata.clockData.update || drawAll) {
                var clockSize = 50;

                if ((this.wsdata.clockData.pos.scale_x === 0 || this.wsdata.clockData.pos.scale_y === 0) && this.gridSize === 12) {
                  clockSize = 10;
                }

                this.wsdata.clockData.update = false;
                this.clearWindow(-1);
                var g = this.draw.group().attr('index', -1);
                var boxSize = this.getWindowBoxSize(this.wsdata.clockData.pos);
                var r = g.rect(boxSize.w, boxSize.h).attr({
                  fill: this.colorActive
                }).move(boxSize.x, boxSize.y).click(function () {
                  _this18.router.navigate(['/edit/clock']);
                });
                g.use('clock').size(clockSize, clockSize).center(boxSize.x + boxSize.w / 2, boxSize.y + boxSize.h / 2).attr('pointer-events', 'none'); // иконка

                g.use('closeicon').size(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5);
                g.rect(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5).attr('pointer-events', 'bounding-box').opacity(0.01).click(function () {
                  return _this18.removeWindow(_this18.wsdata.clockData.pos);
                });
              }
            } else {
              this.clearWindow(-1);
            } // Таймер


            if (this.wsdata.timerData.enable) {
              if (this.wsdata.timerData.update || drawAll) {
                var fontSize = '1em';

                if (this.wsdata.timerData.pos.scale_x === 0 && this.gridSize === 12) {
                  fontSize = '0.5em';
                }

                this.wsdata.timerData.update = false;
                this.clearWindow(-2);

                var _g = this.draw.group().attr('index', -2);

                var _boxSize = this.getWindowBoxSize(this.wsdata.timerData.pos);

                var _r = _g.rect(_boxSize.w, _boxSize.h).attr({
                  fill: this.colorActive
                }).move(_boxSize.x, _boxSize.y); // иконка


                _g.use('closeicon').size(closeSize, closeSize).center(_boxSize.x + _boxSize.w - closeSize / 2 - 5, _boxSize.y + closeSize / 2 + 5);

                var text = _g.plain(this.shortName('Timer')).font({
                  fill: '#ffffff',
                  'font-size': fontSize,
                  'text-anchor': 'middle'
                }).center(_boxSize.x + _boxSize.w / 2, _boxSize.y + _boxSize.h - textOffset).attr('pointer-events', 'none');

                _g.rect(closeSize, closeSize).center(_boxSize.x + _boxSize.w - closeSize / 2 - 5, _boxSize.y + closeSize / 2 + 5).attr('pointer-events', 'bounding-box').opacity(0.01).click(function () {
                  return _this18.removeWindow(_this18.wsdata.timerData.pos);
                });
              }
            } else {
              this.clearWindow(-2);
            } // Метки


            this.data.labels.forEach(function (value, i) {
              var fontSize = '1em';

              if (!value.update && !drawAll) {
                return;
              }

              value.update = false;

              _this18.clearWindow(100 + value.id);

              var g = _this18.draw.group().attr('index', 100 + value.id);

              var boxSize = _this18.getWindowBoxSize(value.pos);

              var r = g.rect(boxSize.w, boxSize.h).attr({
                fill: _this18.colorActive
              }).move(boxSize.x, boxSize.y).click(function () {
                _this18.router.navigate(['/edit/label/' + i]);
              });

              if (value.pos.scale_x === 0 && _this18.gridSize === 12) {
                fontSize = '0.5em';
              } // Имя входа


              var text = g.plain(_this18.shortName(value.text)).font({
                fill: '#ffffff',
                'font-size': fontSize,
                'text-anchor': 'middle'
              }).center(boxSize.x + boxSize.w / 2, boxSize.y + boxSize.h - textOffset).attr('pointer-events', 'none'); // иконка

              g.use('closeicon').size(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5);
              g.rect(closeSize, closeSize).center(boxSize.x + boxSize.w - closeSize / 2 - 5, boxSize.y + closeSize / 2 + 5).attr('pointer-events', 'bounding-box').opacity(0.01).click(function () {
                return _this18.removeWindow(value.pos);
              });
            });
          }
        }, {
          key: "clearWindow",
          value: function clearWindow(index) {
            var children = this.draw.children();

            var _iterator4 = _createForOfIteratorHelper(children),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var value = _step4.value;

                if (value.attr('index') === index) {
                  value.remove();
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "updateState",
          value: function updateState() {
            this.draw.children().each(function (e) {
              return e.fire('update');
            });
          }
        }, {
          key: "newWindow",
          value: function newWindow(value) {
            this.changed.emit(value);
          }
        }, {
          key: "isInside",
          value: function isInside(left, scale, value) {
            if (value >= left && value <= left + scale) {
              return true;
            }

            if (value <= left && value >= left + scale) {
              return true;
            }

            return false;
          }
        }, {
          key: "isSelected",
          value: function isSelected(pos, v) {
            return this.isInside(pos.x, pos.scale_x, v.x) && this.isInside(pos.y, pos.scale_y, v.y);
          }
        }, {
          key: "getDirection",
          value: function getDirection(scale) {
            if (Math.sign(scale) >= 0) {
              return 1;
            } else {
              return -1;
            }
          }
        }, {
          key: "getEndPos",
          value: function getEndPos(v) {
            var width = v.x - this.selectStart.x;
            var height = v.y - this.selectStart.y;
            var scaleX = 0;
            var scaleY = 0;
            scaleX = Math.abs(width);
            scaleY = Math.abs(height);
            var endXtmp = this.selectStart.x + this.getDirection(width) * scaleX;
            var endYtmp = this.selectStart.y + this.getDirection(height) * scaleY;
            return {
              x: endXtmp,
              y: endYtmp,
              scale_x: scaleX,
              scale_y: scaleY
            };
          }
        }, {
          key: "validScale",
          value: function validScale(v) {
            var endPos = this.getEndPos(v);

            if (endPos.x >= this.data.grid || endPos.x < 0) {
              return false;
            }

            if (endPos.y >= this.data.grid || endPos.y < 0) {
              return false;
            }

            var w = this.convertSelection(v);

            if (this.getAnyWindowIntersect(w)) {
              return false;
            }

            return true;
          }
        }, {
          key: "convertSelection",
          value: function convertSelection(v) {
            var endPos = this.getEndPos(v);
            var pos = {
              x: Math.min(this.selectStart.x, endPos.x),
              y: Math.min(this.selectStart.y, endPos.y),
              scale_x: endPos.scale_x,
              scale_y: endPos.scale_y
            };
            return pos;
          }
        }, {
          key: "selectDone",
          value: function selectDone(v) {
            var _this19 = this;

            if (this.selectState === 0) {
              return;
            }

            this.selectState = 0;
            var ret = 0;
            var rect = this.convertSelection(this.selectEnd);
            this.data.inputs.forEach(function (value, i) {
              if (_this19.isWindowIntersecting(rect, value.pos) || !_this19.validScale(_this19.selectEnd)) {
                ret = 1;
              }
            });

            if (ret === 0) {
              this.newWindow(rect);
            }

            this.updateState();
          }
        }, {
          key: "gridMouseDown",
          value: function gridMouseDown(data, v) {
            this.selectState = 1;
            this.selectStart = v;
            this.selectEnd = v;
            this.updateState();
          }
        }, {
          key: "gridMouseUp",
          value: function gridMouseUp(v) {
            this.selectDone(v);
          }
        }, {
          key: "bkgMouseUp",
          value: function bkgMouseUp() {
            this.selectDone(this.selectEnd);
          }
        }, {
          key: "gridUpdate",
          value: function gridUpdate(data, v) {
            var e = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_1__["SVG"])(data.target);
            var pos = this.convertSelection(this.selectEnd);

            if (this.isSelected(pos, v) && this.selectState) {
              e.attr({
                fill: this.colorNew
              });
            } else {
              e.attr({
                fill: this.colorGrid
              });
            }
          }
        }, {
          key: "gridMouseOut",
          value: function gridMouseOut(data, v) {}
        }, {
          key: "gridMouseOver",
          value: function gridMouseOver(data, v) {
            if (data.buttons === 1) {
              if (this.validScale(v) && this.selectState) {
                this.selectEnd = v;
                this.updateState();
              }
            } else {
              this.selectState = 0;
            }
          }
        }, {
          key: "removeWindow",
          value: function removeWindow(v) {
            this.remove.emit(v);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.data === undefined) {
              return;
            }

            if (!changes.data.isFirstChange()) {
              this.drawLayout();
            }
          }
        }]);

        return LayoutEditorComponent;
      }();

      LayoutEditorComponent.ɵfac = function LayoutEditorComponent_Factory(t) {
        return new (t || LayoutEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_3__["WsdataService"]));
      };

      LayoutEditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutEditorComponent,
        selectors: [["app-layouteditor"]],
        inputs: {
          data: "data",
          addType: "addType"
        },
        outputs: {
          changed: "changed",
          remove: "remove"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 0,
        consts: [["id", "svg"], ["data-fa-symbol", "closeicon", 1, "fas", "fa-times-circle", "fa-fw", 2, "color", "#ffffff"], ["data-fa-symbol", "clock", 1, "fas", "fa-clock", "fa-fw", 2, "color", "#ffffff"]],
        template: function LayoutEditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          }
        },
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImxheW91dGVkaXRvci5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoibGF5b3V0ZWRpdG9yLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "xFbp":
    /*!***************************************************************!*\
      !*** ./src/app/components/connection/connection.component.ts ***!
      \***************************************************************/

    /*! exports provided: ConnectionComponent */

    /***/
    function xFbp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConnectionComponent", function () {
        return ConnectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../wsdata.service */
      "CnhB");

      var ConnectionComponent = function ConnectionComponent(wsdataService) {
        _classCallCheck(this, ConnectionComponent);

        this.wsdataService = wsdataService;
        this.connectionDialog = false;
        this.connectionStatus = wsdataService.connectionStatus;
      };

      ConnectionComponent.ɵfac = function ConnectionComponent_Factory(t) {
        return new (t || ConnectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_1__["WsdataService"]));
      };

      ConnectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConnectionComponent,
        selectors: [["app-connection"]],
        decls: 9,
        vars: 2,
        consts: [["id", "loading_dialog", 3, "hidden"], ["src", "assets/ajax-loader.gif"], ["id", "connection_dialog", 3, "hidden"], [1, "panel", "panel-default"], [1, "panel-heading"], [1, "panel-body"]],
        template: function ConnectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430, \u043F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Connection lost");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.connectionStatus.first);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.connectionStatus.value);
          }
        },
        styles: ["#loading_dialog[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: white;\n  position: fixed;\n  width: 100%;\n  z-index: 2000;\n  left: 0;\n  top: 0;\n}\n#connection_dialog[_ngcontent-%COMP%] {\n  min-height: 100%;\n  background-color: white;\n  position: fixed;\n  width: 100%;\n  z-index: 1999;\n  left: 0;\n  top: 0;\n}\n#connection_dialog[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 800px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7QUFDSjtBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBQUo7QUFHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREoiLCJmaWxlIjoiY29ubmVjdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2FkaW5nX2RpYWxvZ3tcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xufVxuXG4jY29ubmVjdGlvbl9kaWFsb2d7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTk5OTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbn1cblxuI2Nvbm5lY3Rpb25fZGlhbG9nIC5wYW5lbHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "xo3F":
    /*!******************************************!*\
      !*** ./src/app/block/block.component.ts ***!
      \******************************************/

    /*! exports provided: BlockComponent */

    /***/
    function xo3F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BlockComponent", function () {
        return BlockComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BlockComponent = /*#__PURE__*/function () {
        function BlockComponent() {
          _classCallCheck(this, BlockComponent);
        }

        _createClass(BlockComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BlockComponent;
      }();

      BlockComponent.ɵfac = function BlockComponent_Factory(t) {
        return new (t || BlockComponent)();
      };

      BlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BlockComponent,
        selectors: [["app-block"]],
        decls: 2,
        vars: 0,
        template: function BlockComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "block works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9jay5jb21wb25lbnQubGVzcyJ9 */"]
      });
      /***/
    },

    /***/
    "yY8n":
    /*!*********************************************!*\
      !*** ./src/app/views/settings.component.ts ***!
      \*********************************************/

    /*! exports provided: SettingsComponent */

    /***/
    function yY8n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
        return SettingsComponent;
      });
      /* harmony import */


      var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../tools */
      "Y+0W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../wsdata.service */
      "CnhB");
      /* harmony import */


      var _components_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/view/view.component */
      "q8oT");
      /* harmony import */


      var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/panel/panel.component */
      "Ro/O");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/setcancelbutton/setcancelbutton.component */
      "V91b");
      /* harmony import */


      var _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../components/inputfield/inputfield.component */
      "J2VD");
      /* harmony import */


      var _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../components/panelhr/panelhr.component */
      "v3u4");
      /* harmony import */


      var _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../components/selectfield/selectfield.component */
      "0NCe");

      var _c0 = ["settingsForm"];
      var _c1 = ["alarmSettingsForm"];

      function SettingsComponent_app_inputfield_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-inputfield", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_app_inputfield_6_Template_app_inputfield_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var i_r4 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.settingsData.sdi_label[i_r4] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("title", "Input ", ctx_r1.wsData.getInputNumberString(i_r4), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "input_", i_r4 + 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.settingsData.sdi_label[i_r4])("hidden", ctx_r1.wsData.getInputSkip(i_r4));
        }
      }

      var SettingsComponent = /*#__PURE__*/function () {
        function SettingsComponent(wsData) {
          var _this20 = this;

          _classCallCheck(this, SettingsComponent);

          this.wsData = wsData;
          this.settingsData = this.wsData.settingsData;
          this.indexTracker = _tools__WEBPACK_IMPORTED_MODULE_0__["indexTracker"];
          this.wsData.subscribeNewData(function () {
            return _this20.newdata();
          });
        }

        _createClass(SettingsComponent, [{
          key: "newdata",
          value: function newdata() {
            if (this.settingsForm.form.pristine && this.alarmSettingsForm.form.pristine) {
              this.settingsData = this.wsData.copySettings();
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.newdata();
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.settingsForm.form.markAsPristine();
            this.alarmSettingsForm.form.markAsPristine();
            this.newdata();
          }
        }, {
          key: "sendForm",
          value: function sendForm() {
            this.wsData.readSettings(this.settingsData);
            this.wsData.sendSet();
            this.settingsForm.form.markAsPristine();
            this.alarmSettingsForm.form.markAsPristine();
          }
        }]);

        return SettingsComponent;
      }();

      SettingsComponent.ɵfac = function SettingsComponent_Factory(t) {
        return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_2__["WsdataService"]));
      };

      SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: SettingsComponent,
        selectors: [["app-settings"]],
        viewQuery: function SettingsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.settingsForm = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.alarmSettingsForm = _t.first);
          }
        },
        decls: 42,
        vars: 26,
        consts: [[3, "data", "modelStr"], ["title", "Slave mode", 3, "hidden"], ["title", "Inputs Label", 3, "hidden"], ["settingsForm", "ngForm"], [3, "title", "ngModel", "hidden", "name", "ngModelChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "apply", "cancel"], ["title", "Audio Alarm Settings", 3, "hidden"], ["alarmSettingsForm", "ngForm"], ["title", "Mimimum Level, dBFS", "nocase", "", "type", "number", "name", "minumumLevel", 3, "ngModel", "ngModelChange"], ["title", "Threshold, ms", "nocase", "", "type", "number", "name", "threshold", 3, "ngModel", "ngModelChange"], ["title", "Video Alarm Settings"], ["title", "Video Output Settings"], ["title", "Output Format", "name", "outputFormat", 3, "ngModel", "ngModelChange"], [3, "value"], ["title", "HDMI Colorspace", "nocase", "", "name", "hdmi_color", 3, "ngModel", "ngModelChange"], ["title", "GPIO Settings", "nocase", ""], ["title", "GPIO Mode", "nocase", "", "name", "gpioMode", 3, "ngModel", "ngModelChange"], ["title", "Teletext Settings"], ["title", "Display", "name", "teletextEnable", 3, "ngModel", "ngModelChange"], ["title", "Page Number", "type", "number", "name", "teletextPage", 3, "ngModel", "ngModelChange"], [3, "title", "ngModel", "hidden", "name", "ngModelChange"]],
        template: function SettingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-view", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-panel", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Device in slave mode. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-panel", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", null, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SettingsComponent_app_inputfield_6_Template, 1, 4, "app-inputfield", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-setcancelbutton", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("apply", function SettingsComponent_Template_app_setcancelbutton_apply_7_listener() {
              return ctx.sendForm();
            })("cancel", function SettingsComponent_Template_app_setcancelbutton_cancel_7_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-panel", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", null, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "app-inputfield", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_inputfield_ngModelChange_11_listener($event) {
              return ctx.settingsData.alarm_settings.audio.minimum_level = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-inputfield", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_inputfield_ngModelChange_12_listener($event) {
              return ctx.settingsData.alarm_settings.audio.threshold = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-panelhr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-inputfield", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_inputfield_ngModelChange_14_listener($event) {
              return ctx.settingsData.alarm_settings.video.threshold = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-panelhr", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-selectfield", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_selectfield_ngModelChange_16_listener($event) {
              return ctx.settingsData.output_format = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "1080p25");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "1080i50");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "app-selectfield", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_selectfield_ngModelChange_21_listener($event) {
              return ctx.settingsData.hdmi_color = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "YCbCr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "RGB");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-panelhr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-selectfield", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_selectfield_ngModelChange_27_listener($event) {
              return ctx.settingsData.gpio_mode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Solo");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Tally");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Preset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "app-panelhr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "app-selectfield", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_selectfield_ngModelChange_35_listener($event) {
              return ctx.settingsData.layout.teletext_enable = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Enabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "app-inputfield", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SettingsComponent_Template_app_inputfield_ngModelChange_40_listener($event) {
              return ctx.settingsData.layout.teletext_page = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "app-setcancelbutton", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("apply", function SettingsComponent_Template_app_setcancelbutton_apply_41_listener() {
              return ctx.sendForm();
            })("cancel", function SettingsComponent_Template_app_setcancelbutton_cancel_41_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.wsData.sidebarRoutes)("modelStr", ctx.wsData.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode !== 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode === 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.settingsData.sdi_label)("ngForTrackBy", ctx.indexTracker);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.pristine);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.wsData.settingsData.cascade_mode === 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.alarm_settings.audio.minimum_level);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.alarm_settings.audio.threshold);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.alarm_settings.video.threshold);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.output_format);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.hdmi_color);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.gpio_mode);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.layout.teletext_enable);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.settingsData.layout.teletext_page);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r2.pristine);
          }
        },
        directives: [_components_view_view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_setcancelbutton_setcancelbutton_component__WEBPACK_IMPORTED_MODULE_7__["SetCancelButtonComponent"], _components_inputfield_inputfield_component__WEBPACK_IMPORTED_MODULE_8__["InputfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _components_panelhr_panelhr_component__WEBPACK_IMPORTED_MODULE_9__["PanelHrComponent"], _components_selectfield_selectfield_component__WEBPACK_IMPORTED_MODULE_10__["SelectfieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_z"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vc3R5bGVzL2NvbW1vbi5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNJLHlCQUFBO0FDakJKO0FEb0JBO0VBQ0kseUJBQUE7QUNsQko7QURxQkE7RUFDSSx5QkFBQTtBQ25CSjtBRHNCQTtFQUNJLHlCQUFBO0FDcEJKO0FEdUJBO0VBQ0kseUJBQUE7QUNyQko7QUNiQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBRGVKO0FDWkE7RUFDSSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURjSjtBQ1hBO0VBQ0kscUJBQUE7QURhSjtBQ1RBO0VBQ0ksaUJBQUE7QURXSjtBQ1JBO0VBQ0ksa0JBQUE7QURVSjtBQ1BBO0VBQ0ksc0NBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxrREFBQTtBRFNKO0FDTkE7OztFQUNJLG1CQUFBO0VBRUEsa0RBQUE7QURVSjtBQ1BBOztFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFFQSxnQkFBQTtBRFFKO0FDUEk7O0VBQ0ksZ0JBQUE7QURVUjtBQ1BJO0VBQUE7O0lBQ0ksZ0JBQUE7RURXTjtBQUNGO0FDVEk7O0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURZUiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBuYXZiYXItY29sb3I6ICMyRjQwNTA7XG5AbmF2YmFyLXRleHQ6ICNBN0IxQzI7XG5Acm93LXRleHQ6ICM2NzZBNkM7XG5AY2FyZC1iYWNrZ3JvdW5kOiAjZjNmM2Y0O1xuQGJ1dHRvbi1jb2xvcjogIzQ0YWY2OTtcbkBidXR0b24tZ3JleS1jb2xvcjogI0I1QjVCNTtcbkBidXR0b24tcmVkLWNvbG9yOiAjREIyQjM5O1xuQGJ1dHRvbi15ZWxsb3ctY29sb3I6ICNFREQ3NDc7XG5cbkBzaWRlYmFyLW5hdmJhci1jb2xvcjogI0YzRjNGNDtcblxuQHNpZGViYXItY29sb3I6ICMzZTQxNDQ7XG5Ac2lkZWJhci1hY3RpdmU6ICM2MTZiNzU7XG5Ac2lkZWJhci1mb250OiAjYTdiMWMyO1xuQHNpZGViYXItZm9udC1hY3RpdmU6ICNGRkY7XG5cbkBncmVlbi10aGVtZS1jb2xvcjogIzQ0YWY2OTtcblxuLmJ1dHRvbi1kZWZhdWx0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLWNvbG9yO1xufVxuXG4uYnV0dG9uLWdyZXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tZ3JleS1jb2xvcjtcbn1cblxuLmJ1dHRvbi1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tcmVkLWNvbG9yO1xufVxuXG4uYnV0dG9uLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi15ZWxsb3ctY29sb3I7XG59XG4iLCIuYnV0dG9uLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDRhZjY5O1xufVxuLmJ1dHRvbi1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjVCNUI1O1xufVxuLmJ1dHRvbi1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREIyQjM5O1xufVxuLmJ1dHRvbi15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURENzQ3O1xufVxubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjb2xvcjogIzY3NkE2Qztcbn1cbmhyIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2Q0ZDllMTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucmlnaHQtYWxpZ24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jZW50ZXItYWxpZ24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnRuOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXG4uZm9ybS1zZWxlY3Q6Zm9jdXMsXG4uZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuLmJ0bi1maXhlZC13aWR0aCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgbWluLXdpZHRoOiA2ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cbi5idG4tZml4ZWQtd2lkdGg6Zmlyc3QtY2hpbGQsXG4uYnRuLWZpeGVkLXdpZHRoOmhvdmVyOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYnRuLWZpeGVkLXdpZHRoLFxuICAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4uYnRuLWZpeGVkLXdpZHRoW2Rpc2FibGVkXSxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXJbZGlzYWJsZWRdIHtcbiAgY29sb3I6ICNkOWQ5ZDk7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbiIsIkBpbXBvcnQgXCJjb2xvcnMubGVzc1wiO1xubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGNvbG9yOiBAcm93LXRleHQ7XG4gIH1cblxuaHIge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbGlnaHRlbihAbmF2YmFyLXRleHQsIDE1JSk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cblxuLnJpZ2h0LWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNlbnRlci1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbiAgICBib3JkZXItd2lkdGg6IDAuMDYyNXJlbTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xufVxuXG4uZm9ybS1jb250cm9sOmZvY3VzLCAuZm9ybS1zZWxlY3Q6Zm9jdXMsIC5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSAgcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSg2OCwgMTc1LCAxMDUsIDAuMjUpO1xufVxuXG4uYnRuLWZpeGVkLXdpZHRoLCAuYnRuLWZpeGVkLXdpZHRoOmhvdmVyIHtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBtaW4td2lkdGg6IDZlbTtcbiAgICAvLyDRg9Cx0LjRgNCw0LXQvCBcItC/0L7QtNC/0YDRi9Cz0LjQstCw0L3QuNC1XCIgYm9yZGVyXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDRgNCw0YHRgdGC0L7Rj9C90LjQtSDQvNC10LbQtNGDINC60L3QvtC/0LrQsNC80LhcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwZW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogZGFya2VuKHdoaXRlLCAxNSUpO1xuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxufVxuIl19 */"]
      });
      /***/
    },

    /***/
    "zBoC":
    /*!*********************************************************!*\
      !*** ./src/app/components/sidebar/sidebar.component.ts ***!
      \*********************************************************/

    /*! exports provided: SidebarComponent */

    /***/
    function zBoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SidebarComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_7_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.isCollapsed = !ctx_r3.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r1.link);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r1.icon || "fa-blank");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
        }
      }

      var _c0 = ["*"];

      var SidebarComponent = function SidebarComponent(route) {
        _classCallCheck(this, SidebarComponent);

        this.route = route; // Настройки sidebar

        this.data = [];
        this.modelStr = 'No Model';
        this.isCollapsed = false;
      };

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        inputs: {
          data: "data",
          modelStr: "modelStr"
        },
        ngContentSelectors: _c0,
        decls: 14,
        vars: 3,
        consts: [[1, "wrapper"], ["id", "sidebar", 3, "className"], [1, "sidebar-header", "pb-0"], ["routerLink", "/", "data-toggle", "collapse", "aria-expanded", "false"], [1, "list-unstyled", "components"], ["routerLinkActive", "active", 4, "ngFor", "ngForOf"], ["id", "content"], [1, "navbar", "navbar-expand-lg", "d-md-none"], [1, "container-fluid"], ["type", "button", "id", "sidebarCollapse", 1, "btn", "navbar-btn", 3, "click"], [1, "fas", "fa-bars"], ["routerLinkActive", "active"], ["data-toggle", "collapse", "aria-expanded", "false", 3, "routerLink", "click"], [1, "fas", "fa-fw", 3, "ngClass"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 5, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nav", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_11_listener() {
              return ctx.isCollapsed = !ctx.isCollapsed;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", ctx.isCollapsed ? "active" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modelStr);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\nbody[_ngcontent-%COMP%] {\n  background: #F3F3F4;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 20px 20px 0px;\n  background: #F3F3F4;\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n}\n.navbar-btn[_ngcontent-%COMP%] {\n  box-shadow: none;\n  outline: none !important;\n  border: none;\n  background-color: #44af69;\n  color: #FFF;\n}\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n}\n#sidebar[_ngcontent-%COMP%] {\n  min-width: 200px;\n  max-width: 200px;\n  background: #3e4144;\n  color: #a7b1c2;\n  transition: all 0.3s;\n}\n#sidebar.active[_ngcontent-%COMP%] {\n  margin-left: 0px;\n}\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: #3e4144;\n  text-align: center;\n}\n#sidebarCollapse[_ngcontent-%COMP%] {\n  display: none;\n}\n\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: none;\n}\n#sidebar.active[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1em;\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #FFF;\n  padding: 10px;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  font-size: 1em;\n  display: block;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-align: left;\n}\n#sidebar.active[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0;\n  display: block;\n  font-size: 1em;\n  margin-bottom: 5px;\n  text-align: center;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], a[aria-expanded=\"true\"][_ngcontent-%COMP%] {\n  color: #FFF;\n  background: #616b75;\n}\na[data-toggle=\"collapse\"][_ngcontent-%COMP%] {\n  position: relative;\n}\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: block;\n  position: absolute;\n  top: 50%;\n  right: 20px;\n  transform: translateY(-50%);\n}\n\n#content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0px;\n  min-height: 100vh;\n  transition: all 0.3s;\n  background-color: #F3F3F4;\n}\n\n@media (max-width: 767px) {\n  #sidebar[_ngcontent-%COMP%] {\n    margin-left: -200px;\n  }\n  #sidebar.active[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  #sidebarCollapse[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.fa-blank[_ngcontent-%COMP%] {\n  visibility: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsInNpZGViYXIuY29tcG9uZW50Lmxlc3MiLCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0kseUJBQUE7QUNqQko7QURvQkE7RUFDSSx5QkFBQTtBQ2xCSjtBRHFCQTtFQUNJLHlCQUFBO0FDbkJKO0FEc0JBO0VBQ0kseUJBQUE7QUNwQko7QUR1QkE7RUFDSSx5QkFBQTtBQ3JCSjtBQ2JBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FEZUo7QUNaQTtFQUNJLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBRGNKO0FDWEE7RUFDSSxxQkFBQTtBRGFKO0FDVEE7RUFDSSxpQkFBQTtBRFdKO0FDUkE7RUFDSSxrQkFBQTtBRFVKO0FDUEE7RUFDSSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGtEQUFBO0FEU0o7QUNOQTs7O0VBQ0ksbUJBQUE7RUFFQSxrREFBQTtBRFVKO0FDUEE7O0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBRUEsWUFBQTtFQUVBLGdCQUFBO0FEUUo7QUNQSTs7RUFDSSxnQkFBQTtBRFVSO0FDUEk7RUFBQTs7SUFDSSxnQkFBQTtFRFdOO0FBQ0Y7QUNUSTs7RUFDSSxjQUFBO0VBQ0EsWUFBQTtBRFlSO0FBbkVBO0VBQ0ksbUJBQUE7QUFxRUo7QUFsRUE7OztFQUdJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FBb0VKO0FBakVBO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbUVKO0FBaEVBO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFrRUo7QUEvREE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQWlFSjtBQUNBOzt1REFFdUQ7QUE3RHZEO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQStESjtBQTVEQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQThESjtBQTNEQTtFQUNJLGdCQUFBO0FBNkRKO0FBMURBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUE0REo7QUF6REE7RUFDSSxhQUFBO0FBMkRKO0FBQ0Esd0hBQXdIO0FBeER4SDtFQUNJLGFBQUE7QUEwREo7QUF2REE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtBQXlESjtBQXREQTtFQUNJLGVBQUE7QUF3REo7QUFyREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQXVESjtBQXBEQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQXNESjtBQWxEQTtFQUNJLGtCQUFBO0FBb0RKO0FBaERBO0VBQ0ksZ0JBQUE7QUFrREo7QUF6Q0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBMkNKO0FBeENBO0VBQ0ksV0FBQTtBQTBDSjtBQXZDQTs7RUFFSSxXQUFBO0VBQ0EsbUJBQUE7QUF5Q0o7QUF0Q0E7RUFDSSxrQkFBQTtBQXdDSjtBQXJDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUF1Q0o7QUFDQTs7dURBRXVEO0FBbkN2RDtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBcUNKO0FBQ0E7O3VEQUV1RDtBQWpDdkQ7RUFDSTtJQUNJLG1CQUFBO0VBbUNOO0VBakNFO0lBQ0ksZ0JBQUE7RUFtQ047RUFoQ0Y7SUFDUSxjQUFBO0VBa0NOO0FBQ0Y7QUEvQkE7RUFDSSw2QkFBQTtBQWlDSiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uLmxlc3NcIjtcblxuXG4vLyBodHRwczovL2Jvb3RzdHJhcGlvdXMuY29tL3AvYm9vdHN0cmFwLXNpZGViYXJcbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IEBzaWRlYmFyLW5hdmJhci1jb2xvcjtcbn1cblxuYSxcbmE6aG92ZXIsXG5hOmZvY3VzIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAwcHg7XG4gICAgYmFja2dyb3VuZDogQHNpZGViYXItbmF2YmFyLWNvbG9yO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5uYXZiYXItYnRuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGdyZWVuLXRoZW1lLWNvbG9yO1xuICAgIGNvbG9yOiBAc2lkZWJhci1mb250LWFjdGl2ZTtcbn1cblxuLmxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcbiAgICBtYXJnaW46IDQwcHggMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgU0lERUJBUiBTVFlMRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbiNzaWRlYmFyIHtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogQHNpZGViYXItY29sb3I7XG4gICAgY29sb3I6IEBzaWRlYmFyLWZvbnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbiNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IEBzaWRlYmFyLWNvbG9yO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3NpZGViYXJDb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogVG9nZ2xpbmcgdGhlIHNpZGViYXIgaGVhZGVyIGNvbnRlbnQsIGhpZGUgdGhlIGJpZyBoZWFkaW5nIFtoM10gYW5kIHNob3dpbmcgdGhlIHNtYWxsIGhlYWRpbmcgW3N0cm9uZ10gYW5kIHZpY2UgdmVyc2EqL1xuI3NpZGViYXIgLnNpZGViYXItaGVhZGVyIHN0cm9uZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NpZGViYXIuYWN0aXZlIC5zaWRlYmFyLWhlYWRlciBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jc2lkZWJhciB1bC5jb21wb25lbnRzIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbiNzaWRlYmFyIHVsIHAge1xuICAgIGNvbG9yOiBAc2lkZWJhci1mb250LWFjdGl2ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyDQv9C+0LLQtdC00LXQvdC40LUg0L3QsNC00L/QuNGB0Lgg0LIg0YDQsNC30LLQtdGA0L3Rg9GC0L7QvCDQv9C+0LvQvtC20LXQvdC40LhcbiNzaWRlYmFyIHVsIGxpIGEgc3BhbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5cbiNzaWRlYmFyIHVsIGxpIGEge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8vINC10YHQu9C4INC/0L7RgtGA0LXQsdGD0LXRgtGB0Y8g0YHQutGA0YvRgtGMINC90LDQtNC/0LjRgdC4INCyINGB0LLRkdGA0L3Rg9GC0L7QvCDQv9C+0LvQvtC20LXQvdC40Lhcbi8vI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgc3BhbiB7XG4vLyAgICBkaXNwbGF5OiBub25lO1xuLy99XG5cbi8vINC/0L7QstC10LTQtdC90LjQtSDQuNC60L7QvdC60Lgg0LIg0YHQstGR0YDQvdGD0YLQvtC8INC/0L7Qu9C+0LbQtdC90LjQuFxuI3NpZGViYXIuYWN0aXZlIHVsIGxpIGEgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAgMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogQHNpZGViYXItZm9udC1hY3RpdmU7XG59XG5cbiNzaWRlYmFyIHVsIGxpLmFjdGl2ZT5hLFxuYVthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgY29sb3I6IEBzaWRlYmFyLWZvbnQtYWN0aXZlO1xuICAgIGJhY2tncm91bmQ6IEBzaWRlYmFyLWFjdGl2ZTtcbn1cblxuYVtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBDT05URU5UIFNUWUxFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBzaWRlYmFyLW5hdmJhci1jb2xvcjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAjc2lkZWJhciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjAwcHg7XG4gICAgfVxuICAgICNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgfVxuXG4jc2lkZWJhckNvbGxhcHNlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuXG4uZmEtYmxhbmsge1xuICAgIHZpc2liaWxpdHk6aGlkZGVuICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0IFwiY29sb3JzLmxlc3NcIjtcbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBjb2xvcjogQHJvdy10ZXh0O1xuICB9XG5cbmhyIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGxpZ2h0ZW4oQG5hdmJhci10ZXh0LCAxNSUpO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5cbi5yaWdodC1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5jZW50ZXItYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gICAgb3V0bGluZTogMDtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoMjQzLDI0MywyNDQsMC41KTtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cywgLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbn1cblxuLmJ0bi1maXhlZC13aWR0aCwgLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgbWluLXdpZHRoOiA2ZW07XG4gICAgLy8g0YPQsdC40YDQsNC10LwgXCLQv9C+0LTQv9GA0YvQs9C40LLQsNC90LjQtVwiIGJvcmRlclxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQutC90L7Qv9C60LDQvNC4XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICBtYXJnaW4tbGVmdDogMGVtO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IGRhcmtlbih3aGl0ZSwgMTUlKTtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/

    },

    /***/
    "zciF":
    /*!**************************************************!*\
      !*** ./src/app/hlsplayer/hlsplayer.component.ts ***!
      \**************************************************/

    /*! exports provided: HlsPlayerComponent */

    /***/
    function zciF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HlsPlayerComponent", function () {
        return HlsPlayerComponent;
      });
      /* harmony import */


      var hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! hls.js */
      "ulZh");
      /* harmony import */


      var hls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _wsdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../wsdata.service */
      "CnhB");

      var HlsPlayerComponent = /*#__PURE__*/function () {
        function HlsPlayerComponent(wsdataService) {
          _classCallCheck(this, HlsPlayerComponent);

          this.wsdataService = wsdataService;

          if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            //this.url = 'http://' + environment.dev_ip + '/hls/playlist.m3u8';
            this.url = 'http://195.190.97.130:8081/app/stream/playlist.m3u8';
          } else {
            var loc = window.location; //this.url = 'http://' + loc.host + '/hls/playlist.m3u8';

            this.url = 'http://195.190.97.130:8081/app/stream/playlist.m3u8';
          }
        }

        _createClass(HlsPlayerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.start_player();
          }
        }, {
          key: "start_player",
          value: function start_player() {
            if (hls_js__WEBPACK_IMPORTED_MODULE_0__["isSupported"]()) {
              var hls = new hls_js__WEBPACK_IMPORTED_MODULE_0__();
              hls.loadSource(this.url);
              var video = document.getElementById('video');
              hls.attachMedia(video);
              hls.on(hls_js__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, function () {
                var videotag = document.getElementById('video');
                videotag.muted = true;
                var promise = videotag.play();

                if (promise !== undefined) {
                  promise.then(function (_) {})["catch"](function (error) {});
                }
              });
            }
          }
        }]);

        return HlsPlayerComponent;
      }();

      HlsPlayerComponent.ɵfac = function HlsPlayerComponent_Factory(t) {
        return new (t || HlsPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_wsdata_service__WEBPACK_IMPORTED_MODULE_3__["WsdataService"]));
      };

      HlsPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HlsPlayerComponent,
        selectors: [["app-hlsplayer"]],
        decls: 3,
        vars: 0,
        consts: [[1, "container"], [1, "row"], ["id", "video", "controls", "", 1, "col-12"]],
        template: function HlsPlayerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "video", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: [".button-default[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-green[_ngcontent-%COMP%] {\n  background-color: #44af69;\n}\n.button-grey[_ngcontent-%COMP%] {\n  background-color: #B5B5B5;\n}\n.button-red[_ngcontent-%COMP%] {\n  background-color: #DB2B39;\n}\n.button-yellow[_ngcontent-%COMP%] {\n  background-color: #EDD747;\n}\nlabel[_ngcontent-%COMP%] {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  color: #676A6C;\n}\nhr[_ngcontent-%COMP%] {\n  border: 0;\n  border-top: 2px solid #d4d9e1;\n  margin-top: 0px;\n  margin-bottom: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.center-align[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%]:focus {\n  border-color: rgba(243, 243, 244, 0.5);\n  border-width: 0.0625rem;\n  outline: 0;\n  box-shadow: 0 0 0 0.12rem rgba(243, 243, 244, 0.5);\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: white;\n  box-shadow: 0 0 0 0.12rem rgba(68, 175, 105, 0.25);\n}\n.btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n  line-height: inherit;\n  min-width: 6em;\n  color: white;\n  margin-left: 1em;\n}\n.btn-fixed-width[_ngcontent-%COMP%]:first-child, .btn-fixed-width[_ngcontent-%COMP%]:hover:first-child {\n  margin-left: 0em;\n}\n@media (max-width: 768px) {\n  .btn-fixed-width[_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover {\n    margin-top: 10px;\n  }\n}\n.btn-fixed-width[disabled][_ngcontent-%COMP%], .btn-fixed-width[_ngcontent-%COMP%]:hover[disabled] {\n  color: #d9d9d9;\n  opacity: 0.4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9jb2xvcnMubGVzcyIsImhsc3BsYXllci5jb21wb25lbnQubGVzcyIsIi4uLy4uL3N0eWxlcy9jb21tb24ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFDSSx5QkFBQTtBQ2pCSjtBRG9CQTtFQUNJLHlCQUFBO0FDbEJKO0FEcUJBO0VBQ0kseUJBQUE7QUNuQko7QURzQkE7RUFDSSx5QkFBQTtBQ3BCSjtBRHVCQTtFQUNJLHlCQUFBO0FDckJKO0FDYkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURlSjtBQ1pBO0VBQ0ksU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FEY0o7QUNYQTtFQUNJLHFCQUFBO0FEYUo7QUNUQTtFQUNJLGlCQUFBO0FEV0o7QUNSQTtFQUNJLGtCQUFBO0FEVUo7QUNQQTtFQUNJLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsa0RBQUE7QURTSjtBQ05BOzs7RUFDSSxtQkFBQTtFQUVBLGtEQUFBO0FEVUo7QUNQQTs7RUFDSSxvQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZ0JBQUE7QURRSjtBQ1BJOztFQUNJLGdCQUFBO0FEVVI7QUNQSTtFQUFBOztJQUNJLGdCQUFBO0VEV047QUFDRjtBQ1RJOztFQUNJLGNBQUE7RUFDQSxZQUFBO0FEWVIiLCJmaWxlIjoiaGxzcGxheWVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQG5hdmJhci1jb2xvcjogIzJGNDA1MDtcbkBuYXZiYXItdGV4dDogI0E3QjFDMjtcbkByb3ctdGV4dDogIzY3NkE2QztcbkBjYXJkLWJhY2tncm91bmQ6ICNmM2YzZjQ7XG5AYnV0dG9uLWNvbG9yOiAjNDRhZjY5O1xuQGJ1dHRvbi1ncmV5LWNvbG9yOiAjQjVCNUI1O1xuQGJ1dHRvbi1yZWQtY29sb3I6ICNEQjJCMzk7XG5AYnV0dG9uLXllbGxvdy1jb2xvcjogI0VERDc0NztcblxuQHNpZGViYXItbmF2YmFyLWNvbG9yOiAjRjNGM0Y0O1xuXG5Ac2lkZWJhci1jb2xvcjogIzNlNDE0NDtcbkBzaWRlYmFyLWFjdGl2ZTogIzYxNmI3NTtcbkBzaWRlYmFyLWZvbnQ6ICNhN2IxYzI7XG5Ac2lkZWJhci1mb250LWFjdGl2ZTogI0ZGRjtcblxuQGdyZWVuLXRoZW1lLWNvbG9yOiAjNDRhZjY5O1xuXG4uYnV0dG9uLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IEBidXR0b24tY29sb3I7XG59XG5cbi5idXR0b24tZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1ncmV5LWNvbG9yO1xufVxuXG4uYnV0dG9uLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogQGJ1dHRvbi1yZWQtY29sb3I7XG59XG5cbi5idXR0b24teWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBAYnV0dG9uLXllbGxvdy1jb2xvcjtcbn1cbiIsIi5idXR0b24tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NGFmNjk7XG59XG4uYnV0dG9uLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0YWY2OTtcbn1cbi5idXR0b24tZ3JleSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCNUI1QjU7XG59XG4uYnV0dG9uLXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEQjJCMzk7XG59XG4uYnV0dG9uLXllbGxvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREQ3NDc7XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiAjNjc2QTZDO1xufVxuaHIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDRkOWUxO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cbi5yaWdodC1hbGlnbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNlbnRlci1hbGlnbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5idG46Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0NCwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA2MjVyZW07XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMTJyZW0gcmdiYSgyNDMsIDI0MywgMjQ0LCAwLjUpO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5mb3JtLXNlbGVjdDpmb2N1cyxcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtIHJnYmEoNjgsIDE3NSwgMTA1LCAwLjI1KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG4uYnRuLWZpeGVkLXdpZHRoLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlciB7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBtaW4td2lkdGg6IDZlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuLmJ0bi1maXhlZC13aWR0aDpmaXJzdC1jaGlsZCxcbi5idG4tZml4ZWQtd2lkdGg6aG92ZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMGVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5idG4tZml4ZWQtd2lkdGgsXG4gIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbi5idG4tZml4ZWQtd2lkdGhbZGlzYWJsZWRdLFxuLmJ0bi1maXhlZC13aWR0aDpob3ZlcltkaXNhYmxlZF0ge1xuICBjb2xvcjogI2Q5ZDlkOTtcbiAgb3BhY2l0eTogMC40O1xufVxuIiwiQGltcG9ydCBcImNvbG9ycy5sZXNzXCI7XG5sYWJlbCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6IEByb3ctdGV4dDtcbiAgfVxuXG5ociB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBsaWdodGVuKEBuYXZiYXItdGV4dCwgMTUlKTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4ucmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uY2VudGVyLWFsaWduIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idG46Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDMsMjQzLDI0NCwwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xuICAgIG91dGxpbmU6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDI0MywgMjQzLCAyNDQsIDAuNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDI0MywyNDMsMjQ0LDAuNSk7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsIC5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAwLjEycmVtICByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMnJlbSByZ2JhKDY4LCAxNzUsIDEwNSwgMC4yNSk7XG59XG5cbi5idG4tZml4ZWQtd2lkdGgsIC5idG4tZml4ZWQtd2lkdGg6aG92ZXIge1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1pbi13aWR0aDogNmVtO1xuICAgIC8vINGD0LHQuNGA0LDQtdC8IFwi0L/QvtC00L/RgNGL0LPQuNCy0LDQvdC40LVcIiBib3JkZXJcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1INC80LXQttC00YMg0LrQvdC+0L/QutCw0LzQuFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgJjpmaXJzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBlbTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiBkYXJrZW4od2hpdGUsIDE1JSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map
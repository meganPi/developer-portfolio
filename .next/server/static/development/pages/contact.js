module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/meganpieterse/Desktop/developer_portfolio/components/Header.js";

//Remember that component names should always start with a Capital letter.

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/

var linkStyle = {
  marginRight: 15,
  color: 'black',
  marginLeft: 50,
  fontSize: 20,
  fontWeight: 300
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "About")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/meganpieterse/Desktop/developer_portfolio/components/MyLayout.js";


/* In our app, we'll use a common style across various pages. For this purpose, we can create a common Layout component and use it for each of our pages. Here's an example: 

Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */



var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
  /* Notice in the example below that we pass children and title as props to the Layout components.
  If you remove {children}, the Layout cannot render the content we put inside the Layout element. 
  Have a look at ./pages/index.js to see where we pass props through to this Layout Component. */

};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossorigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
var _jsxFileName = "/Users/meganpieterse/Desktop/developer_portfolio/pages/contact.js";


//Import the Link API to support client-side navigation


/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Contact Me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Megan Pieterse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "meg.pieterse@gmail.com"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Contact Number"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-182157553",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "082 850 3409"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4148724463",
    css: "h1.jsx-182157553{color:white;margin-top:40px;margin-bottom:10px;margin-left:50px;text-align:center;}h2.jsx-182157553{color:white;margin-bottom:30px;margin-left:50px;text-align:center;border:solid 1px white;}h4.jsx-182157553{color:white;margin-left:50px;text-align:center;}p.jsx-182157553{color:white;margin-left:50px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVnQixBQUdpQixBQU9ZLEFBT0EsQUFLQSxZQWxCUixBQU9HLEFBT0YsQUFLQSxnQkFsQkUsQ0FjRCxBQUtBLEVBWkQsZ0JBTkEsQUFjbEIsQUFLUyxDQVpzQixnQkFOWixFQU9pQixnQkFOM0IsT0FPQSIsImZpbGUiOiIvVXNlcnMvbWVnYW5waWV0ZXJzZS9EZXNrdG9wL2RldmVsb3Blcl9wb3J0Zm9saW8vcGFnZXMvY29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0IHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb25cbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcblxuLyogTm90aWNlIGluIHRoZSBleGFtcGxlIGJlbG93IGhvdyB3ZSByZW5kZXIgc3RhdGljIGltYWdlcyB3aXRoIE5leHQuanM6XG5DcmVhdGUgYSBmb2xkZXIgY2FsbGVkIHN0YXRpYyBpbiB5b3VyIHByb2plY3Qgcm9vdCBkaXJlY3RvcnkuIEZyb20geW91ciBjb2RlIHlvdSBjYW4gdGhlbiByZWZlcmVuY2UgdGhvc2UgZmlsZXMgd2l0aCAvc3RhdGljLyBVUkxzIChzZWU8aW1nIHNyYz17YC9zdGF0aWMvYXJ0LyR7cHJvcHMuZGF0YS5pbWFnZX0uanBnYH0gYWx0PVwiXCIvPikgXG5Ob3RlOiBEb24ndCBuYW1lIHRoZSBzdGF0aWMgZGlyZWN0b3J5IGFueXRoaW5nIGVsc2UuIFRoZSBuYW1lIGlzIHJlcXVpcmVkIGFuZCBpcyB0aGUgb25seSBkaXJlY3RvcnkgdGhhdCBOZXh0LmpzIHVzZXMgZm9yIHNlcnZpbmcgc3RhdGljIGFzc2V0cy4qL1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHQgICAgPGgxPkNvbnRhY3QgTWU8L2gxPlxuICAgICAgICA8aDI+TWVnYW4gUGlldGVyc2U8L2gyPlxuICAgICAgICA8aDQ+RW1haWw8L2g0PlxuICAgICAgICBcdDxwPm1lZy5waWV0ZXJzZUBnbWFpbC5jb208L3A+XG4gICAgICAgIDxoND5Db250YWN0IE51bWJlcjwvaDQ+XG4gICAgICAgIFx0PHA+MDgyIDg1MCAzNDA5PC9wPlxuXHRcdDwgc3R5bGUganN4PiB7YFxuXHRcdFx0aDEge1xuXHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNTBweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0fVxuXHRcdFx0cCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogNTBweDtcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXHRcdGB9IDwvIHN0eWxlID5cblx0XHQ8IHN0eWxlIGdsb2JhbCBqc3g+IHtgXG5cdFx0XHRib2R5IHtcblx0XHRcdFx0YmFja2dyb3VuZDogZ3JleTtcblx0XHRcdH1cblx0XHRgfSA8LyBzdHlsZSA+XG4gIFx0PC9MYXlvdXQ+XG4pIl19 */\n/*@ sourceURL=/Users/meganpieterse/Desktop/developer_portfolio/pages/contact.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4177526231",
    css: "body{background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9jb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDdUIsQUFHcUIsZ0JBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9JbXBvcnQgdGhlIExpbmsgQVBJIHRvIHN1cHBvcnQgY2xpZW50LXNpZGUgbmF2aWdhdGlvblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuXG4vKiBOb3RpY2UgaW4gdGhlIGV4YW1wbGUgYmVsb3cgaG93IHdlIHJlbmRlciBzdGF0aWMgaW1hZ2VzIHdpdGggTmV4dC5qczpcbkNyZWF0ZSBhIGZvbGRlciBjYWxsZWQgc3RhdGljIGluIHlvdXIgcHJvamVjdCByb290IGRpcmVjdG9yeS4gRnJvbSB5b3VyIGNvZGUgeW91IGNhbiB0aGVuIHJlZmVyZW5jZSB0aG9zZSBmaWxlcyB3aXRoIC9zdGF0aWMvIFVSTHMgKHNlZTxpbWcgc3JjPXtgL3N0YXRpYy9hcnQvJHtwcm9wcy5kYXRhLmltYWdlfS5qcGdgfSBhbHQ9XCJcIi8+KSBcbk5vdGU6IERvbid0IG5hbWUgdGhlIHN0YXRpYyBkaXJlY3RvcnkgYW55dGhpbmcgZWxzZS4gVGhlIG5hbWUgaXMgcmVxdWlyZWQgYW5kIGlzIHRoZSBvbmx5IGRpcmVjdG9yeSB0aGF0IE5leHQuanMgdXNlcyBmb3Igc2VydmluZyBzdGF0aWMgYXNzZXRzLiovXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxMYXlvdXQ+XG5cdCAgICA8aDE+Q29udGFjdCBNZTwvaDE+XG4gICAgICAgIDxoMj5NZWdhbiBQaWV0ZXJzZTwvaDI+XG4gICAgICAgIDxoND5FbWFpbDwvaDQ+XG4gICAgICAgIFx0PHA+bWVnLnBpZXRlcnNlQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgPGg0PkNvbnRhY3QgTnVtYmVyPC9oND5cbiAgICAgICAgXHQ8cD4wODIgODUwIDM0MDk8L3A+XG5cdFx0PCBzdHlsZSBqc3g+IHtgXG5cdFx0XHRoMSB7XG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDUwcHg7XG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHR9XG5cdFx0XHRwIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cdFx0YH0gPC8gc3R5bGUgPlxuXHRcdDwgc3R5bGUgZ2xvYmFsIGpzeD4ge2Bcblx0XHRcdGJvZHkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBncmV5O1xuXHRcdFx0fVxuXHRcdGB9IDwvIHN0eWxlID5cbiAgXHQ8L0xheW91dD5cbikiXX0= */\n/*@ sourceURL=/Users/meganpieterse/Desktop/developer_portfolio/pages/contact.js */",
    __self: this
  }));
});

/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map
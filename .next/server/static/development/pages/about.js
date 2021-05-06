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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
var _jsxFileName = "/Users/meganpieterse/Desktop/developer_portfolio/pages/about.js";


//Import the Link API to support client-side navigation


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Who Is Megan Pieterse"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " I\u2019m a graphic designer who\u2019s delivered creative and engaging solutions across brand identity, print, and digital media for small business owners to larger companies."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Education"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Pretoria High School for Girls 2011 - 2015"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Beaulieu Equestrian Academy (EQASA Modules 1,2 & 3) 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "HyperionDev Full-Stack Web Development 2021")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Career"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Freelance Graphic Designer 2018 - 2020"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Graphic Designer at Ideation Digital 2020 - present")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "My Passions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1942749593",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, " I am passionate about digital design, and I strive to create the best work for my clients to help them achieve their goals on all the digital platforms. My clients' success is what motivates me and drives me to create the best possible designs for every industry to optimise my clients brand awareness and reach. I would like to combine my graphic design skills and my newly found web development skills to create amazing and engaging websites for my clients."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "745095687",
    css: "h1.jsx-1942749593{color:white;margin-top:40px;margin-bottom:30px;margin-left:50px;text-align:left;}h2.jsx-1942749593{color:white;margin-left:50px;}p.jsx-1942749593{color:white;margin-left:50px;}ul.jsx-1942749593{color:black;margin-left:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR2lCLEFBT0ksQUFJQSxBQUlBLFlBZEEsQUFPSyxBQUlBLEFBSUEsZ0JBZEYsQ0FPakIsQUFJQSxBQUlBLGtCQWRlLGlCQUNELGdCQUNkIiwiZmlsZSI6Ii9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vSW1wb3J0IHRoZSBMaW5rIEFQSSB0byBzdXBwb3J0IGNsaWVudC1zaWRlIG5hdmlnYXRpb25cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgPExheW91dD5cclxuICAgIDxoMT5XaG8gSXMgTWVnYW4gUGlldGVyc2U8L2gxPlxyXG4gICAgICAgIDxwPiBJ4oCZbSBhIGdyYXBoaWMgZGVzaWduZXIgd2hv4oCZcyBkZWxpdmVyZWQgY3JlYXRpdmUgYW5kIGVuZ2FnaW5nIHNvbHV0aW9ucyBhY3Jvc3MgXHJcbiAgICAgICAgICAgIGJyYW5kIGlkZW50aXR5LCBwcmludCwgYW5kIGRpZ2l0YWwgbWVkaWEgZm9yIHNtYWxsIGJ1c2luZXNzIG93bmVycyB0byBsYXJnZXIgY29tcGFuaWVzLlxyXG4gICAgICAgIDwvcD5cclxuICAgIDxoMj5FZHVjYXRpb248L2gyPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+UHJldG9yaWEgSGlnaCBTY2hvb2wgZm9yIEdpcmxzIDIwMTEgLSAyMDE1PC9saT5cclxuICAgICAgPGxpPkJlYXVsaWV1IEVxdWVzdHJpYW4gQWNhZGVteSAoRVFBU0EgTW9kdWxlcyAxLDIgJiAzKSAyMDE3PC9saT5cclxuICAgICAgPGxpPkh5cGVyaW9uRGV2IEZ1bGwtU3RhY2sgV2ViIERldmVsb3BtZW50IDIwMjE8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIDxoMj5DYXJlZXI8L2gyPlxyXG4gICAgPHVsPlxyXG4gICAgICA8bGk+RnJlZWxhbmNlIEdyYXBoaWMgRGVzaWduZXIgMjAxOCAtIDIwMjA8L2xpPlxyXG4gICAgICA8bGk+R3JhcGhpYyBEZXNpZ25lciBhdCBJZGVhdGlvbiBEaWdpdGFsIDIwMjAgLSBwcmVzZW50PC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8aDI+TXkgUGFzc2lvbnM8L2gyPlxyXG4gICAgICA8cD4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGRpZ2l0YWwgZGVzaWduLCBhbmQgSSBzdHJpdmUgdG8gY3JlYXRlIHRoZSBiZXN0IHdvcmsgZm9yIG15IGNsaWVudHMgdG8gaGVscCBcclxuICAgICAgICAgIHRoZW0gYWNoaWV2ZSB0aGVpciBnb2FscyBvbiBhbGwgdGhlIGRpZ2l0YWwgcGxhdGZvcm1zLlxyXG4gICAgICAgICAgTXkgY2xpZW50cycgc3VjY2VzcyBpcyB3aGF0IG1vdGl2YXRlcyBtZSBhbmQgZHJpdmVzIG1lIHRvIGNyZWF0ZSB0aGUgYmVzdCBwb3NzaWJsZSBkZXNpZ25zIGZvciBldmVyeSBcclxuICAgICAgICAgIGluZHVzdHJ5IHRvIG9wdGltaXNlIG15IGNsaWVudHMgYnJhbmQgYXdhcmVuZXNzIGFuZCByZWFjaC4gSSB3b3VsZCBsaWtlIHRvIGNvbWJpbmUgbXkgZ3JhcGhpYyBkZXNpZ24gXHJcbiAgICAgICAgICBza2lsbHMgYW5kIG15IG5ld2x5IGZvdW5kIHdlYiBkZXZlbG9wbWVudCBza2lsbHMgdG8gY3JlYXRlIGFtYXppbmcgYW5kIGVuZ2FnaW5nIHdlYnNpdGVzIGZvciBteSBjbGllbnRzLlxyXG4gICAgICA8L3A+XHJcbiAgICA8IHN0eWxlIGpzeD4ge2BcclxuXHRcdFx0aDEge1xyXG5cdFx0XHRcdGNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IDUwcHg7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgICBoMiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgfVxyXG4gICAgICB1bCB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgICB9XHJcblx0XHRgfSA8LyBzdHlsZSA+XHJcblx0XHQ8IHN0eWxlIGdsb2JhbCBqc3g+IHtgXHJcblx0XHRcdGJvZHkge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IGdyZXk7XHJcblx0XHRcdH1cclxuXHRcdGB9IDwvIHN0eWxlID5cclxuICA8L0xheW91dD5cclxuKSJdfQ== */\n/*@ sourceURL=/Users/meganpieterse/Desktop/developer_portfolio/pages/about.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4177526231",
    css: "body{background:grey;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tZWdhbnBpZXRlcnNlL0Rlc2t0b3AvZGV2ZWxvcGVyX3BvcnRmb2xpby9wYWdlcy9hYm91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHVCLEFBR3FCLGdCQUNqQiIsImZpbGUiOiIvVXNlcnMvbWVnYW5waWV0ZXJzZS9EZXNrdG9wL2RldmVsb3Blcl9wb3J0Zm9saW8vcGFnZXMvYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydCB0aGUgTGluayBBUEkgdG8gc3VwcG9ydCBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxMYXlvdXQ+XHJcbiAgICA8aDE+V2hvIElzIE1lZ2FuIFBpZXRlcnNlPC9oMT5cclxuICAgICAgICA8cD4gSeKAmW0gYSBncmFwaGljIGRlc2lnbmVyIHdob+KAmXMgZGVsaXZlcmVkIGNyZWF0aXZlIGFuZCBlbmdhZ2luZyBzb2x1dGlvbnMgYWNyb3NzIFxyXG4gICAgICAgICAgICBicmFuZCBpZGVudGl0eSwgcHJpbnQsIGFuZCBkaWdpdGFsIG1lZGlhIGZvciBzbWFsbCBidXNpbmVzcyBvd25lcnMgdG8gbGFyZ2VyIGNvbXBhbmllcy5cclxuICAgICAgICA8L3A+XHJcbiAgICA8aDI+RWR1Y2F0aW9uPC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPlByZXRvcmlhIEhpZ2ggU2Nob29sIGZvciBHaXJscyAyMDExIC0gMjAxNTwvbGk+XHJcbiAgICAgIDxsaT5CZWF1bGlldSBFcXVlc3RyaWFuIEFjYWRlbXkgKEVRQVNBIE1vZHVsZXMgMSwyICYgMykgMjAxNzwvbGk+XHJcbiAgICAgIDxsaT5IeXBlcmlvbkRldiBGdWxsLVN0YWNrIFdlYiBEZXZlbG9wbWVudCAyMDIxPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8aDI+Q2FyZWVyPC9oMj5cclxuICAgIDx1bD5cclxuICAgICAgPGxpPkZyZWVsYW5jZSBHcmFwaGljIERlc2lnbmVyIDIwMTggLSAyMDIwPC9saT5cclxuICAgICAgPGxpPkdyYXBoaWMgRGVzaWduZXIgYXQgSWRlYXRpb24gRGlnaXRhbCAyMDIwIC0gcHJlc2VudDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGgyPk15IFBhc3Npb25zPC9oMj5cclxuICAgICAgPHA+IEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBkaWdpdGFsIGRlc2lnbiwgYW5kIEkgc3RyaXZlIHRvIGNyZWF0ZSB0aGUgYmVzdCB3b3JrIGZvciBteSBjbGllbnRzIHRvIGhlbHAgXHJcbiAgICAgICAgICB0aGVtIGFjaGlldmUgdGhlaXIgZ29hbHMgb24gYWxsIHRoZSBkaWdpdGFsIHBsYXRmb3Jtcy5cclxuICAgICAgICAgIE15IGNsaWVudHMnIHN1Y2Nlc3MgaXMgd2hhdCBtb3RpdmF0ZXMgbWUgYW5kIGRyaXZlcyBtZSB0byBjcmVhdGUgdGhlIGJlc3QgcG9zc2libGUgZGVzaWducyBmb3IgZXZlcnkgXHJcbiAgICAgICAgICBpbmR1c3RyeSB0byBvcHRpbWlzZSBteSBjbGllbnRzIGJyYW5kIGF3YXJlbmVzcyBhbmQgcmVhY2guIEkgd291bGQgbGlrZSB0byBjb21iaW5lIG15IGdyYXBoaWMgZGVzaWduIFxyXG4gICAgICAgICAgc2tpbGxzIGFuZCBteSBuZXdseSBmb3VuZCB3ZWIgZGV2ZWxvcG1lbnQgc2tpbGxzIHRvIGNyZWF0ZSBhbWF6aW5nIGFuZCBlbmdhZ2luZyB3ZWJzaXRlcyBmb3IgbXkgY2xpZW50cy5cclxuICAgICAgPC9wPlxyXG4gICAgPCBzdHlsZSBqc3g+IHtgXHJcblx0XHRcdGgxIHtcclxuXHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogNDBweDtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICAgIH1cclxuICAgICAgdWwge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgICAgfVxyXG5cdFx0YH0gPC8gc3R5bGUgPlxyXG5cdFx0PCBzdHlsZSBnbG9iYWwganN4PiB7YFxyXG5cdFx0XHRib2R5IHtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBncmV5O1xyXG5cdFx0XHR9XHJcblx0XHRgfSA8LyBzdHlsZSA+XHJcbiAgPC9MYXlvdXQ+XHJcbikiXX0= */\n/*@ sourceURL=/Users/meganpieterse/Desktop/developer_portfolio/pages/about.js */",
    __self: this
  }));
});

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map
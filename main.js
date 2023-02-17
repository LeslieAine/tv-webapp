"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktv_webapp"] = self["webpackChunktv_webapp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  font-family: \\\"Roboto Condensed\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.likes-comments {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav,\\r\\nfooter {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  border: 1px solid #d3d3d3;\\r\\n  padding: 0 2rem;\\r\\n  background-color: antiquewhite;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\nli > a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\nli > a:hover {\\r\\n  font-size: large;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 5rem;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  width: 50px;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.movies li h3 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.movies li .flex {\\r\\n  margin: 15px;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  padding-right: 4px;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  background-color: #eee;\\r\\n  font-size: 16px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: #ddd;\\r\\n}\\r\\n\\r\\n.pop {\\r\\n  border-radius: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 5px 5px 500px black;\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  bottom: 50%;\\r\\n  left: 5%;\\r\\n  right: 5%;\\r\\n  margin: auto;\\r\\n  z-index: 1;\\r\\n  background: white;\\r\\n  height: 90vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-details {\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 5%;\\r\\n  padding: 20px;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.description * {\\r\\n  min-width: 50%;\\r\\n}\\r\\n\\r\\n.details h1 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.show-comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  background-color: #eee;\\r\\n  padding: 16px;\\r\\n  margin: 0 16px;\\r\\n  max-height: 70px;\\r\\n  word-break: break-word;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.comments-heading {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.com-count {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.com-item {\\r\\n  list-style: none;\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n.myform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 0 50px;\\r\\n}\\r\\n\\r\\n.myform * {\\r\\n  margin: 10px 0;\\r\\n  border-radius: 5px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  line-height: 30px;\\r\\n  border: 1px solid #ddd;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  resize: none;\\r\\n}\\r\\n\\r\\ninput:focus,\\r\\ntextarea:focus {\\r\\n  outline: none;\\r\\n  border: 1px solid #aaa;\\r\\n}\\r\\n\\r\\n.inactive {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.noflow {\\r\\n  overflow-y: hidden;\\r\\n}\\r\\n\\r\\n.closeBtn {\\r\\n  align-self: flex-end;\\r\\n  padding: 10px 15px;\\r\\n  font-size: 1.5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.closeBtn:hover {\\r\\n  color: #f11;\\r\\n}\\r\\n\\r\\n.main-heading {\\r\\n  margin: 20px 0 0 20px;\\r\\n}\\r\\n\\r\\n.main-movies-counter {\\r\\n  font-weight: 400;\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tv-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tv-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n  <head>\\r\\n    <meta charset=\\\"UTF-8\\\" />\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\r\\n    <link\\r\\n      rel=\\\"stylesheet\\\"\\r\\n      href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css\\\"\\r\\n      integrity=\\\"sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==\\\"\\r\\n      crossorigin=\\\"anonymous\\\"\\r\\n      referrerpolicy=\\\"no-referrer\\\"\\r\\n    />\\r\\n    <title>capstone project module 2</title>\\r\\n  </head>\\r\\n  <body>\\r\\n    <header>\\r\\n      <nav class=\\\"nav\\\">\\r\\n        <i class=\\\"fa fa-film\\\" style=\\\"font-size: 36px\\\"></i>\\r\\n        <ul>\\r\\n          <li>\\r\\n            <a href=\\\"#\\\">Home <i class=\\\"fa-solid fa-clapperboard\\\"></i></a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"#\\\">Comment <i class=\\\"fa-solid fa-comment\\\"></i></a>\\r\\n          </li>\\r\\n          <li>\\r\\n            <a href=\\\"#\\\">Like <i class=\\\"fa-solid fa-heart\\\"></i></a>\\r\\n          </li>\\r\\n        </ul>\\r\\n      </nav>\\r\\n    </header>\\r\\n    <section class=\\\"main\\\">\\r\\n      <section id=\\\"pop-up\\\" class=\\\"pop inactive\\\" tabindex=\\\"0\\\"></section>\\r\\n      <h1 class=\\\"main-heading\\\">Movies <span class=\\\"main-movies-counter\\\"></span></h1>\\r\\n      <ul class=\\\"movies\\\" id=\\\"movies\\\"></ul>\\r\\n    </section>\\r\\n    <footer>\\r\\n      <i class=\\\"fa fa-film\\\" style=\\\"font-size: 36px\\\"></i>\\r\\n      <p>Made by Leslie Aine & Tayyab Irfan</p>\\r\\n      <span></span>\\r\\n    </footer>\\r\\n  </body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://tv-webapp/./src/index.html?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tv-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tv-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_renderMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/renderMovies.js */ \"./src/modules/renderMovies.js\");\n/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayMovies.js */ \"./src/modules/displayMovies.js\");\n/* harmony import */ var _modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/eventListeners.js */ \"./src/modules/eventListeners.js\");\n/* harmony import */ var _modules_counters_moviesCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/counters/moviesCounter.js */ \"./src/modules/counters/moviesCounter.js\");\n\n\n\n\n\n\n\nconst displayUi = async () => {\n  await (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.addListeners)();\n  (0,_modules_eventListeners_js__WEBPACK_IMPORTED_MODULE_4__.addCommentButtonsLister)();\n};\n\ndisplayUi();\n\n//# sourceURL=webpack://tv-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/counters/moviesCounter.js":
/*!***********************************************!*\
  !*** ./src/modules/counters/moviesCounter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst moviesCounter = () => document.querySelectorAll('.list').length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moviesCounter);\n\n//# sourceURL=webpack://tv-webapp/./src/modules/counters/moviesCounter.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMovies.js */ \"./src/modules/getMovies.js\");\n/* harmony import */ var _renderMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMovies.js */ \"./src/modules/renderMovies.js\");\n\n\n\nconst displayMovies = async () => {\n  const movies = await (0,_getMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  movies.forEach((movie) => {\n    (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMovies);\n\n//# sourceURL=webpack://tv-webapp/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/eventListeners.js":
/*!***************************************!*\
  !*** ./src/modules/eventListeners.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCommentButtonsLister\": () => (/* binding */ addCommentButtonsLister),\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _getMovies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMovies.js */ \"./src/modules/getMovies.js\");\n/* harmony import */ var _involvementAPI_getLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementAPI/getLikes.js */ \"./src/modules/involvementAPI/getLikes.js\");\n/* harmony import */ var _involvementAPI_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./involvementAPI/addLikes.js */ \"./src/modules/involvementAPI/addLikes.js\");\n/* harmony import */ var _counters_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counters/moviesCounter.js */ \"./src/modules/counters/moviesCounter.js\");\n\n\n\n\n\n\nconst pop = document.querySelector('.pop');\nconst body = document.querySelector('body');\n\nconst addCommentButtonsLister = async () => {\n  const movies = await (0,_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const btns = document.querySelectorAll('.comment-btn');\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(btns, movies);\n};\n\npop.addEventListener('keydown', (e) => {\n  if (e.key === 'Escape') {\n    pop.classList.add('inactive');\n    body.classList.remove('noflow');\n  }\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCommentButtonsLister);\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  // addLikes();\n  /* eslint-disable no-unused-vars */\n  const movies = await (0,_getMovies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  document.querySelector('.main-movies-counter').textContent = `(${(0,_counters_moviesCounter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()})`;\n});\n\nconst addListeners = () => {\n  const emptyLikes = document.querySelectorAll('.empty');\n  const filledLikes = document.querySelectorAll('.filled');\n  Array.from(emptyLikes).forEach((likeImg) => {\n    likeImg.addEventListener('click', async (e) => {\n      e.target.classList.add('hidden');\n      e.target.nextElementSibling.classList.remove('hidden');\n      const movieId = e.target.closest('.list').querySelector('.movie-id').textContent;\n      await (0,_involvementAPI_getLikes_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(movieId);\n      (0,_involvementAPI_addLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n  });\n\n  Array.from(filledLikes).forEach((filledImg) => {\n    filledImg.addEventListener('click', (e) => {\n      e.target.classList.add('hidden');\n      e.target.previousElementSibling.classList.remove('hidden');\n    });\n  });\n};\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/eventListeners.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst url = 'https://api.tvmaze.com/shows';\r\n\r\nconst getMovies = async () => {\r\n  const response = await fetch(`${url}`);\r\n  const data = await response.json();\r\n  return data.slice(0, 20);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\r\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/getMovies.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/addComments.js":
/*!***************************************************!*\
  !*** ./src/modules/involvementAPI/addComments.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderComments.js */ \"./src/modules/renderComments.js\");\n/* harmony import */ var _getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getComments.js */ \"./src/modules/involvementAPI/getComments.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((button, username, sc, movieId) => {\n  button.addEventListener('click', async (e) => {\n    e.preventDefault();\n    movieId = movieId.toString();\n    const uname = username.value.trim();\n    const points = sc.value.trim();\n    if (uname && points) {\n      await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/comments/', {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: movieId,\n          username: uname,\n          comment: points,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n    }\n    username.value = '';\n    sc.value = '';\n\n    // rendercomments after update\n    const fillcoms = await (0,_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movieId);\n    const mycoms = document.querySelector('.comments');\n    (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fillcoms, mycoms);\n  });\n});\n\n//# sourceURL=webpack://tv-webapp/./src/modules/involvementAPI/addComments.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/addLikes.js":
/*!************************************************!*\
  !*** ./src/modules/involvementAPI/addLikes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/involvementAPI/getLikes.js\");\n\n\nconst addLikes = async () => {\n  const likes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n  const likesContainer = document.querySelectorAll('.likes');\n  likesContainer.forEach((like) => {\n    const id = like.parentElement.parentElement.parentElement.parentElement\n      .firstElementChild.textContent;\n    const movieLikes = likes.filter(\n      (item) => parseInt(item.item_id, 10) === parseInt(id, 10),\n    );\n    like.textContent = movieLikes.length === 0 ? 0 : movieLikes[0].likes;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikes);\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/involvementAPI/addLikes.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/getComments.js":
/*!***************************************************!*\
  !*** ./src/modules/involvementAPI/getComments.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst comments = async (movieId) => {\n  movieId = movieId.toString();\n  const coms = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/comments?item_id=${movieId}`,\n  );\n  const res = coms.json();\n  return res;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comments);\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/involvementAPI/getComments.js?");

/***/ }),

/***/ "./src/modules/involvementAPI/getLikes.js":
/*!************************************************!*\
  !*** ./src/modules/involvementAPI/getLikes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/mjFvlMYeU34N8ufbOBkO/likes';\n\nconst getLikes = async () => {\n  const response = await fetch(`${url}`);\n  return response.json();\n};\n\nconst addLike = async (id) => {\n  const response = await fetch(`${url}`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response;\n};\n\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/involvementAPI/getLikes.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI_addComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI/addComments.js */ \"./src/modules/involvementAPI/addComments.js\");\n/* harmony import */ var _involvementAPI_getComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involvementAPI/getComments.js */ \"./src/modules/involvementAPI/getComments.js\");\n/* harmony import */ var _renderComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderComments.js */ \"./src/modules/renderComments.js\");\n\n\n\n\nconst body = document.querySelector('body');\nconst pop = document.querySelector('.pop');\n\nconst popup = (button, movies) => {\n  button.forEach((btn) => {\n    btn.addEventListener('click', async () => {\n      body.classList.add('noflow');\n      pop.innerHTML = '';\n      pop.classList.remove('inactive');\n      const par = btn.parentElement.parentElement.parentElement;\n      const id = par.querySelector('.movie-id').innerHTML;\n      const currMovie = movies.filter((movie) => movie.id === Number(id));\n      const fillcoms = await (0,_involvementAPI_getComments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(currMovie[0].id);\n      const closebtn = document.createElement('a');\n      closebtn.classList.add('closeBtn');\n      closebtn.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\n      pop.appendChild(closebtn);\n      const template = document.createElement('div');\n      template.classList.add('container');\n      template.innerHTML = `\n      <div class=\"movie-details\">\n        <img src=\"${currMovie[0].image.medium}\" alt=\"${currMovie.name}\">\n        <div class=\"details\">\n            <h1>${currMovie[0].name}</h1>\n            <div class=\"description\">\n                <p><strong>Language:</strong> ${currMovie[0].language}</p>\n                <p><strong>Genre:</strong> ${currMovie[0].genres}</p>\n                <p><strong>About:</strong> ${currMovie[0].summary}</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"show-comments\">\n        <h1 class=\"comments-heading\">Comments<span class=\"com-count\">(0)</span></h1>\n        <ul class=\"comments\"></ul>\n        <form class=\"myform\">\n            <h1>Add a Comment</h1>\n            <input id=\"name\" type=\"text\" placeholder=\"Your name\" required>\n            <textarea id=\"areatext\" cols=\"30\" rows=\"5\" placeholder=\"Insights\" required></textarea>\n            <button id=\"submit\" class=\"comment-btn\">Add Comment</button>\n        </form>\n      </div>`;\n      pop.appendChild(template);\n\n      // fill commments\n      const mycoms = document.querySelector('.comments');\n      (0,_renderComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(fillcoms, mycoms);\n\n      // Display No of Comments\n      const count = document.querySelector('.com-count');\n      if (fillcoms.length > 0) {\n        count.innerHTML = `(${fillcoms.length})`;\n      } else {\n        count.innerHTML = '(0)';\n      }\n\n      // add comment\n      const comBtn = document.querySelector('#submit');\n      const inp = document.querySelector('#name');\n      const text = document.querySelector('#areatext');\n      (0,_involvementAPI_addComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comBtn, inp, text, currMovie[0].id);\n\n      // close pop up\n      const close = document.querySelector('.closeBtn > i');\n      close.addEventListener('click', () => {\n        pop.classList.add('inactive');\n        body.classList.remove('noflow');\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://tv-webapp/./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/renderComments.js":
/*!***************************************!*\
  !*** ./src/modules/renderComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((fillcoms, mycoms) => {\n  mycoms.innerHTML = '';\n  if (fillcoms.length > 0) {\n    fillcoms.forEach((com) => {\n      const link = document.createElement('li');\n      link.classList.add('com-item');\n      link.innerHTML = `${com.creation_date} ${com.username} : ${com.comment}`;\n      mycoms.appendChild(link);\n    });\n    const checkCount = document.querySelector('.com-count');\n    checkCount.innerHTML = `(${fillcoms.length})`;\n  }\n});\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/renderComments.js?");

/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable linebreak-style */\r\nconst moviesList = document.querySelector('.movies');\r\n\r\nconst renderMovies = (item) => {\r\n  const list = document.createElement('li');\r\n  list.classList.add('list');\r\n  list.innerHTML = `\r\n    <p class=\"movie-id hidden\">${item.id}</p>\r\n    <img src=\"${item.image.medium}\" alt=\"\" srcset=\"\" />\r\n    <div>\r\n        <h3>${item.name}</h3>\r\n        <div class=\"likes-comments\">\r\n            <div class = \"likes-container\">\r\n                <i class=\"fa-regular fa-heart empty like-btn like\"></i>\r\n                <i class=\"fa-solid fa-heart filled like-btn like\"></i>\r\n                <p class=\"likes like\">0</p>  \r\n            </div>  \r\n            <button class=\"comment-btn\">\r\n              <a href=\"#pop-up\">\r\n              Comment <i class=\"fa-solid fa-comments\"></i>\r\n              </a>  \r\n            </button>\r\n        </div>\r\n    </div>\r\n    `;\r\n\r\n  moviesList.appendChild(list);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);\r\n\n\n//# sourceURL=webpack://tv-webapp/./src/modules/renderMovies.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
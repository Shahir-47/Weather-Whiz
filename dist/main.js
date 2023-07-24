/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   displayForecast: () => (/* binding */ displayForecast),
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/icon.svg */ "./src/img/icon.svg");
/* harmony import */ var _img_search_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/search.svg */ "./src/img/search.svg");
/* harmony import */ var _img_git_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/git.svg */ "./src/img/git.svg");
/* harmony import */ var _img_temp_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/temp.svg */ "./src/img/temp.svg");
/* harmony import */ var _img_rain_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/rain.svg */ "./src/img/rain.svg");
/* harmony import */ var _img_humidity_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/humidity.svg */ "./src/img/humidity.svg");
/* harmony import */ var _img_wind_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/wind.svg */ "./src/img/wind.svg");
/* harmony import */ var _img_snow_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/snow.svg */ "./src/img/snow.svg");
/* harmony import */ var _img_air_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/air.svg */ "./src/img/air.svg");
/* harmony import */ var _img_sunrise_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/sunrise.svg */ "./src/img/sunrise.svg");
/* harmony import */ var _img_sunset_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/sunset.svg */ "./src/img/sunset.svg");
/* harmony import */ var _img_pressure_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/pressure.svg */ "./src/img/pressure.svg");
/* harmony import */ var _img_visibility_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/visibility.svg */ "./src/img/visibility.svg");
/* harmony import */ var _img_uv_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/uv.svg */ "./src/img/uv.svg");
/* harmony import */ var _img_raindrops_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/raindrops.svg */ "./src/img/raindrops.svg");
/* harmony import */ var _img_snow_cloud_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/snow-cloud.svg */ "./src/img/snow-cloud.svg");
/* harmony import */ var _img_moon_full_moon_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/moon/full-moon.svg */ "./src/img/moon/full-moon.svg");
/* harmony import */ var _img_cloud_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/cloud.svg */ "./src/img/cloud.svg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


















var weatherData = {};
function displayCurrentWeatherData(data) {
  document.querySelector(".current-location").textContent = data.location.name;
  document.querySelector(".current-icon").src = "./img/weather/".concat(data.current.condition.icon.slice(29));
  document.querySelector(".current-temp").textContent = "".concat(data.current.temp_f, " \xB0F");
  document.querySelector(".current-condition").textContent = data.current.condition.text;
  document.querySelector(".current-min").textContent = "Min: ".concat(data.forecast.forecastday[0].day.mintemp_f, " \xB0F");
  document.querySelector(".current-max").textContent = "Max: ".concat(data.forecast.forecastday[0].day.maxtemp_f, " \xB0F");
}
function getWeather(_x) {
  return _getWeather.apply(this, arguments);
}
function _getWeather() {
  _getWeather = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch("http://api.weatherapi.com/v1/forecast.json?days=3&aqi=yes&q=".concat(query, "&key=fca53d6c99b24b59ab3201455232107"), {
            mode: "cors"
          });
        case 3:
          response = _context.sent;
          _context.next = 6;
          return response.json();
        case 6:
          weatherData = _context.sent;
          console.log(weatherData);
          displayCurrentWeatherData(weatherData);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          displayCurrentWeatherData(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return _getWeather.apply(this, arguments);
}
function displayNavBar() {
  var navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  // Create the logo
  var logoBox = document.createElement("div");
  logoBox.classList.add("logo-box");
  var logo = document.createElement("img");
  logo.src = _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  logo.alt = "logo";
  var logoText = document.createElement("h1");
  logoText.textContent = "Weather Whiz";
  logoBox.appendChild(logo);
  logoBox.appendChild(logoText);
  navBar.appendChild(logoBox);

  // search bar
  var searchBox = document.createElement("div");
  searchBox.classList.add("search-box");
  var searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchInput.type = "text";
  searchInput.placeholder = "Search";
  searchInput.id = "search";
  searchInput.name = "search";
  searchBox.appendChild(searchInput);
  var searchButton = document.createElement("button");
  searchButton.classList.add("search-button");
  searchBox.appendChild(searchButton);
  var searchIcon = document.createElement("img");
  searchIcon.src = _img_search_svg__WEBPACK_IMPORTED_MODULE_1__;
  searchIcon.alt = "Search icon";
  searchButton.appendChild(searchIcon);
  navBar.appendChild(searchBox);

  // toggle switch for imperial/metric units
  var toggleBox = document.createElement("div");
  toggleBox.classList.add("toggle-switch");
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.setAttribute("id", "unit-toggle");
  var label = document.createElement("label");
  label.setAttribute("for", "unit-toggle");
  var metric = document.createElement("span");
  metric.classList.add("toggle-icon");
  metric.classList.add("toggle-icon-metric");
  var imperial = document.createElement("span");
  imperial.classList.add("toggle-icon");
  imperial.classList.add("toggle-icon-imperial");
  var slider = document.createElement("span");
  slider.classList.add("slider");
  label.appendChild(imperial);
  label.appendChild(metric);
  label.appendChild(slider);
  toggleBox.appendChild(checkBox);
  toggleBox.appendChild(label);
  navBar.appendChild(toggleBox);
  return navBar;
}
function makePageContainer() {
  var pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");
  return pageContainer;
}
function displayFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");

  // Link to my github profile
  var gitHubProfile = document.createElement("a");
  gitHubProfile.href = "https://github.com/Shahir-47";

  // GitHub logo
  var gitHubProfileImg = document.createElement("img");
  gitHubProfileImg.src = _img_git_svg__WEBPACK_IMPORTED_MODULE_2__;
  gitHubProfileImg.alt = "gitHub Logo";

  // my Github username
  var gitHubProfileText = document.createElement("p");
  var atSymbol = document.createElement("span");
  atSymbol.classList.add("at-symbol");
  atSymbol.textContent = "@";
  var username = document.createElement("span");
  username.textContent = "Shahir-47";
  gitHubProfileText.appendChild(atSymbol);
  gitHubProfileText.appendChild(username);
  gitHubProfile.appendChild(gitHubProfileImg);
  gitHubProfile.appendChild(gitHubProfileText);
  var separator = document.createElement("p");
  separator.textContent = "|";

  // Link to this source code
  var gitHubRepo = document.createElement("a");
  gitHubRepo.href = "https://github.com/Shahir-47/Weather-Whiz";
  gitHubRepo.textContent = "Source Code";
  footer.appendChild(gitHubProfile);
  footer.appendChild(separator);
  footer.appendChild(gitHubRepo);
  return footer;
}
function displayCurrentWeather() {
  var currentWeather = document.createElement("div");
  currentWeather.classList.add("current-weather");
  var currentInfo = document.createElement("div");
  currentInfo.classList.add("current-info");
  var currentLocation = document.createElement("h2");
  currentLocation.classList.add("current-location");
  currentLocation.textContent = "Current Location";
  currentInfo.appendChild(currentLocation);
  var currentData = document.createElement("div");
  currentData.classList.add("current-data");
  var currentIcon = document.createElement("img");
  currentIcon.classList.add("current-icon");
  currentIcon.src = _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  currentIcon.alt = "Current weather icon";
  currentData.appendChild(currentIcon);
  var currentDetails = document.createElement("div");
  currentDetails.classList.add("current-details");
  var currentTemp = document.createElement("h3");
  currentTemp.classList.add("current-temp");
  currentTemp.textContent = "83 °F";
  currentDetails.appendChild(currentTemp);
  var currentCondition = document.createElement("h4");
  currentCondition.classList.add("current-condition");
  currentCondition.textContent = "Sunny";
  currentDetails.appendChild(currentCondition);
  currentData.appendChild(currentDetails);
  currentInfo.appendChild(currentData);
  var currentMinMax = document.createElement("h5");
  currentMinMax.classList.add("current-min-max");
  var currentMin = document.createElement("span");
  currentMin.classList.add("current-min");
  currentMin.textContent = "Min: 75 °F";
  currentMinMax.appendChild(currentMin);
  var currentMax = document.createElement("span");
  currentMax.classList.add("current-max");
  currentMax.textContent = "Max: 90 °F";
  currentMinMax.appendChild(currentMax);
  currentInfo.appendChild(currentMinMax);
  currentWeather.appendChild(currentInfo);
  return currentWeather;
}
function createIndivInfo(image, title, value) {
  var weatherInfo = document.createElement("div");
  weatherInfo.classList.add("more-weather-info");
  var weatherInfoIcon = document.createElement("img");
  weatherInfoIcon.classList.add("more-weather-icon");
  weatherInfoIcon.src = image;
  weatherInfoIcon.alt = "".concat(title, " icon");
  weatherInfo.appendChild(weatherInfoIcon);
  var weatherInfoText = document.createElement("div");
  weatherInfoText.classList.add("more-weather-text");
  var weatherInfoTitle = document.createElement("h3");
  weatherInfoTitle.classList.add("more-weather-title");
  weatherInfoTitle.textContent = title;
  var weatherInfoValue = document.createElement("h4");
  weatherInfoValue.classList.add("more-weather-value");
  weatherInfoValue.textContent = value;
  weatherInfoText.appendChild(weatherInfoTitle);
  weatherInfoText.appendChild(weatherInfoValue);
  weatherInfo.appendChild(weatherInfoText);
  return weatherInfo;
}
function displayMoreWeather() {
  var moreWeather = document.createElement("div");
  moreWeather.classList.add("more-weather");
  moreWeather.appendChild(createIndivInfo(_img_temp_svg__WEBPACK_IMPORTED_MODULE_3__, "Feels Like", "83 °F"));
  moreWeather.appendChild(createIndivInfo(_img_humidity_svg__WEBPACK_IMPORTED_MODULE_5__, "Humidity", "83%"));
  moreWeather.appendChild(createIndivInfo(_img_rain_svg__WEBPACK_IMPORTED_MODULE_4__, "Chance of Rain", "0%"));
  moreWeather.appendChild(createIndivInfo(_img_wind_svg__WEBPACK_IMPORTED_MODULE_6__, "Wind", "5 mph"));
  moreWeather.appendChild(createIndivInfo(_img_snow_cloud_svg__WEBPACK_IMPORTED_MODULE_15__, "Chance of Snow", "0%"));
  moreWeather.appendChild(createIndivInfo(_img_air_svg__WEBPACK_IMPORTED_MODULE_8__, "Air Quality", "Good"));
  moreWeather.appendChild(createIndivInfo(_img_sunrise_svg__WEBPACK_IMPORTED_MODULE_9__, "Sunrise", "6:00 AM"));
  moreWeather.appendChild(createIndivInfo(_img_sunset_svg__WEBPACK_IMPORTED_MODULE_10__, "Sunset", "6:00 PM"));
  moreWeather.appendChild(createIndivInfo(_img_pressure_svg__WEBPACK_IMPORTED_MODULE_11__, "Pressure", "1000 mb"));
  moreWeather.appendChild(createIndivInfo(_img_visibility_svg__WEBPACK_IMPORTED_MODULE_12__, "Visibility", "10 mi"));
  moreWeather.appendChild(createIndivInfo(_img_uv_svg__WEBPACK_IMPORTED_MODULE_13__, "UV Index", "0"));
  moreWeather.appendChild(createIndivInfo(_img_raindrops_svg__WEBPACK_IMPORTED_MODULE_14__, "Precipitation", "0 in"));
  moreWeather.appendChild(createIndivInfo(_img_snow_svg__WEBPACK_IMPORTED_MODULE_7__, "Snow", "0 in"));
  moreWeather.appendChild(createIndivInfo(_img_cloud_svg__WEBPACK_IMPORTED_MODULE_17__, "Cloud Cover", "0%"));
  moreWeather.appendChild(createIndivInfo(_img_moon_full_moon_svg__WEBPACK_IMPORTED_MODULE_16__, "Moon Phase", "Waning Gibbous"));
  return moreWeather;
}
function chooseForecast() {
  var container = document.createElement("div");
  container.classList.add("container");
  var firstChoice = document.createElement("div");
  firstChoice.classList.add("choice");
  var hourly = document.createElement("input");
  hourly.type = "radio";
  hourly.id = "hourly";
  hourly.name = "forecast";
  hourly.value = "hourly";
  hourly.checked = true;
  var hourlyLabel = document.createElement("label");
  hourlyLabel.setAttribute("for", "hourly");
  hourlyLabel.textContent = "Hourly";
  firstChoice.appendChild(hourly);
  firstChoice.appendChild(hourlyLabel);
  var secondChoice = document.createElement("div");
  secondChoice.classList.add("choice");
  var day = document.createElement("input");
  day.type = "radio";
  day.id = "day";
  day.name = "forecast";
  day.value = "day";
  var dayLabel = document.createElement("label");
  dayLabel.setAttribute("for", "day");
  dayLabel.textContent = "Next 2 days";
  secondChoice.appendChild(day);
  secondChoice.appendChild(dayLabel);
  container.appendChild(firstChoice);
  container.appendChild(secondChoice);
  return container;
}
function makeForecast() {
  var forecast = document.createElement("div");
  forecast.classList.add("forecast");
  forecast.classList.add("hourly-forecast");
  return forecast;
}
function makeMainContainer() {
  var pageContainer = document.querySelector(".page-container");
  var main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(displayCurrentWeather());
  main.appendChild(displayMoreWeather());
  pageContainer.appendChild(main);
}
function bottomContainer() {
  var pageContainer = document.querySelector(".page-container");
  var bottom = document.createElement("div");
  bottom.classList.add("bottom");
  bottom.appendChild(chooseForecast());
  bottom.appendChild(makeForecast());
  pageContainer.appendChild(bottom);
}
function pageLoad() {
  var content = document.querySelector("#content");
  content.appendChild(displayNavBar());
  content.appendChild(makePageContainer());
  content.appendChild(displayFooter());
  makeMainContainer();
  bottomContainer();
  getWeather("Los Angeles");
}
function displayForecast() {
  var forecast = document.querySelector(".forecast");
  var choice = document.querySelector('input[name="forecast"]:checked').value;
  console.log(choice);
  if (choice === "hourly") {
    forecast.innerHTML = "";
    forecast.classList.remove("daily-forecast");
    forecast.classList.add("hourly-forecast");
  } else {
    forecast.innerHTML = "";
    forecast.classList.remove("hourly-forecast");
    forecast.classList.add("daily-forecast");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/all.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/all.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/bg.png */ "./src/img/bg.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/metric.svg */ "./src/img/metric.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/imperial.svg */ "./src/img/imperial.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	background-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0.4),
			rgba(0, 0, 0, 0.4)
		),
		url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #15202b;
	margin: 0;
	padding: 0;
	color: #dddddd;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		"Open Sans",
		"Helvetica Neue",
		sans-serif;
}

div#content {
	display: grid;
	grid-template-rows: min-content 1fr min-content;
	position: relative;
	min-height: 100vh;
	color: #dddddd;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		"Open Sans",
		"Helvetica Neue",
		sans-serif;
}

.nav-bar {
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	background-color: #15202b;
	width: calc(100% - 2rem);
	z-index: 2;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 0 1rem;
	padding-top: 0.25rem;
}

.search-box {
	flex: 1;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0 1rem;
	padding-right: 0;
	background-color: #192734;
	border-radius: 3.9375rem;
}

.search-box input {
	border: none;
	background-color: transparent;
	border: hsl(0, 0%, 18.82%);
	color: #dddddd;
	font-size: 1rem;
	font-weight: 500;
	padding: 0.5rem;
	flex: 1;
}

.search-box input:focus {
	outline: none;
}

.search-box button {
	border: none;
	background-color: #313e4b;
	color: #dddddd;
	font-size: 1rem;
	font-weight: 500;
	padding: 0.5rem;
	cursor: pointer;
	height: 100%;
	width: 3.5rem;
	border-top-right-radius: 3.9375rem;
	border-bottom-right-radius: 3.9375rem;
}

.search-box img {
	width: 1.5rem;
	height: auto;
}

.search-box button:hover,
.search-box button:active {
	filter: brightness(1.2);
}

.logo-box {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	cursor: pointer;
}

.logo-box:hover,
.logo-box:active {
	filter: brightness(1.2);
}

.logo-box h1 {
	font-size: 1.6rem;
	font-weight: 700;
	color: #dddddd;
	cursor: pointer;
	transition: all 0.3s ease;
	margin-top: 10px;
}

.logo-box img {
	width: 2rem;
	height: auto;
}

.toggle-switch {
	position: relative;
	width: 65px;
	height: 30px;
	background-color: #6b757e;
	border-radius: 26px;
	overflow: hidden;
	border: 3px solid #2ca9bc;
}

.toggle-switch input {
	display: none;
}

.toggle-switch label {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
}

.toggle-icon {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 20px;
	height: 20px;
	transition: transform 0.3s ease;
}

.toggle-icon-metric {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) center/cover no-repeat;
	right: 3.5px;
	top: 4.5px;
	transform: translateX(0%);
}

.toggle-icon-imperial {
	background: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) center/cover no-repeat;
	left: 5px;
	top: 5px;
	transform: translateX(0%);
}

.slider {
	position: absolute;
	top: 3px;
	left: 5px;
	width: 24px;
	height: 24px;
	background-color: #2ca9bc;
	border-radius: 50%;
	transition: transform 0.3s ease;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

input:checked + label .slider {
	transform: translateX(33px);
}

footer {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	padding: 0.35rem 0rem;
}

footer a {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.6rem;
	text-decoration: none;
	font-size: 1.1rem;
	font-weight: 500;
	color: #dddddd;
}

footer p {
	margin: 0.5rem 0;
}

footer a:hover,
footer a:active {
	color: #ffffff;
}

footer a:hover img,
footer a:active img {
	filter: brightness(1.2);
}

.at-symbol {
	font-weight: 900;
	font-family:
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		"Segoe UI",
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		"Open Sans",
		"Helvetica Neue",
		sans-serif;
}

footer img {
	width: 2rem;
	height: auto;
}

.page-container {
	display: grid;
	grid-template-rows: min-content 1fr;
	padding: 3rem;
	padding-bottom: 0;
	gap: 1.5rem;
}

.current-weather {
	display: flex;
	justify-content: space-between;
	gap: 2rem;
	padding: 0 1rem;
}

.current-info {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.current-data {
	display: flex;
	gap: 0.5rem;
}

.current-icon {
	width: 7rem;
	height: auto;
}

.current-details {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.current-min-max {
	display: flex;
	align-items: center;
	gap: 2.5rem;
}

.current-info h2,
.current-info h3,
.current-info h4,
.current-info h5 {
	margin: 0;
}

.current-info h2 {
	font-size: 2rem;
	font-weight: 900;
}

.current-info h3 {
	font-size: 3rem;
}

.current-info h4 {
	font-size: 2rem;
}

.current-info h5 {
	font-size: 1.2rem;
}

.more-weather {
	display: grid;
	grid-template-columns: repeat(5, max-content);
	/* justify-content: space-between; */
	gap: 2.5rem;
	grid-row-gap: 0.25rem;
	grid-template-rows: repeat(3, 1fr);
	align-items: center;
	/* padding: 0 1rem; */
}

.more-weather-info {
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.more-weather-icon {
	width: 3rem;
	height: auto;
}

.more-weather-text {
	display: flex;
	flex-direction: column;
}

.more-weather-title {
	margin: 0;
	font-size: 1rem;
}

.more-weather-value {
	margin: 0;
	font-size: 1.5rem;
}

.main {
	display: flex;
	gap: 1rem;
	justify-content: space-between;
}

.bottom {
	display: flex;
	flex-direction: column;
}

input[type="radio"]:hover + label,
input[type="radio"]:checked + label {
	background-color: #dddddd;
	color: #15202b;
}

input[type="radio"] + label {
	border: 0;
	color: #dddddd;
	font-size: 1.2rem;
	/* border: 3px solid #dddddd; */
}

.container {
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
}

.choice {
	display: inline-block;
	margin-right: 10px;
}

.container label {
	display: inline-block;
	padding: 10px 20px;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	color: #fff;
	font-size: 16px;
	font-weight: 900;
	cursor: pointer;
	transition: all 0.3s ease;
}

input[type="radio"] {
	display: none;
}

.hourly-forecast {
	border-top-right-radius: 10px;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 10px;
}

.daily-forecast {
	border-radius: 10px;
}

.forecast {
	height: 100%;
	width: 100%;
	border: 3px solid #dddddd;
}
`, "",{"version":3,"sources":["webpack://./src/css/all.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tbackground-image: linear-gradient(\n\t\t\tto right,\n\t\t\trgba(0, 0, 0, 0.4),\n\t\t\trgba(0, 0, 0, 0.4)\n\t\t),\n\t\turl(\"../img/bg.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-color: #15202b;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #dddddd;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\ndiv#content {\n\tdisplay: grid;\n\tgrid-template-rows: min-content 1fr min-content;\n\tposition: relative;\n\tmin-height: 100vh;\n\tcolor: #dddddd;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground-color: #15202b;\n\twidth: calc(100% - 2rem);\n\tz-index: 2;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 0 1rem;\n\tpadding-top: 0.25rem;\n}\n\n.search-box {\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 0 1rem;\n\tpadding-right: 0;\n\tbackground-color: #192734;\n\tborder-radius: 3.9375rem;\n}\n\n.search-box input {\n\tborder: none;\n\tbackground-color: transparent;\n\tborder: hsl(0, 0%, 18.82%);\n\tcolor: #dddddd;\n\tfont-size: 1rem;\n\tfont-weight: 500;\n\tpadding: 0.5rem;\n\tflex: 1;\n}\n\n.search-box input:focus {\n\toutline: none;\n}\n\n.search-box button {\n\tborder: none;\n\tbackground-color: #313e4b;\n\tcolor: #dddddd;\n\tfont-size: 1rem;\n\tfont-weight: 500;\n\tpadding: 0.5rem;\n\tcursor: pointer;\n\theight: 100%;\n\twidth: 3.5rem;\n\tborder-top-right-radius: 3.9375rem;\n\tborder-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n\twidth: 1.5rem;\n\theight: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n\tfilter: brightness(1.2);\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tcursor: pointer;\n}\n\n.logo-box:hover,\n.logo-box:active {\n\tfilter: brightness(1.2);\n}\n\n.logo-box h1 {\n\tfont-size: 1.6rem;\n\tfont-weight: 700;\n\tcolor: #dddddd;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tmargin-top: 10px;\n}\n\n.logo-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.toggle-switch {\n\tposition: relative;\n\twidth: 65px;\n\theight: 30px;\n\tbackground-color: #6b757e;\n\tborder-radius: 26px;\n\toverflow: hidden;\n\tborder: 3px solid #2ca9bc;\n}\n\n.toggle-switch input {\n\tdisplay: none;\n}\n\n.toggle-switch label {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n}\n\n.toggle-icon {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\twidth: 20px;\n\theight: 20px;\n\ttransition: transform 0.3s ease;\n}\n\n.toggle-icon-metric {\n\tbackground: url(\"../img/metric.svg\") center/cover no-repeat;\n\tright: 3.5px;\n\ttop: 4.5px;\n\ttransform: translateX(0%);\n}\n\n.toggle-icon-imperial {\n\tbackground: url(\"../img/imperial.svg\") center/cover no-repeat;\n\tleft: 5px;\n\ttop: 5px;\n\ttransform: translateX(0%);\n}\n\n.slider {\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 5px;\n\twidth: 24px;\n\theight: 24px;\n\tbackground-color: #2ca9bc;\n\tborder-radius: 50%;\n\ttransition: transform 0.3s ease;\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\ninput:checked + label .slider {\n\ttransform: translateX(33px);\n}\n\nfooter {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 0.35rem 0rem;\n}\n\nfooter a {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 0.6rem;\n\ttext-decoration: none;\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n\tcolor: #dddddd;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #ffffff;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: brightness(1.2);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.page-container {\n\tdisplay: grid;\n\tgrid-template-rows: min-content 1fr;\n\tpadding: 3rem;\n\tpadding-bottom: 0;\n\tgap: 1.5rem;\n}\n\n.current-weather {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 2rem;\n\tpadding: 0 1rem;\n}\n\n.current-info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n}\n\n.current-data {\n\tdisplay: flex;\n\tgap: 0.5rem;\n}\n\n.current-icon {\n\twidth: 7rem;\n\theight: auto;\n}\n\n.current-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n}\n\n.current-min-max {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2.5rem;\n}\n\n.current-info h2,\n.current-info h3,\n.current-info h4,\n.current-info h5 {\n\tmargin: 0;\n}\n\n.current-info h2 {\n\tfont-size: 2rem;\n\tfont-weight: 900;\n}\n\n.current-info h3 {\n\tfont-size: 3rem;\n}\n\n.current-info h4 {\n\tfont-size: 2rem;\n}\n\n.current-info h5 {\n\tfont-size: 1.2rem;\n}\n\n.more-weather {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, max-content);\n\t/* justify-content: space-between; */\n\tgap: 2.5rem;\n\tgrid-row-gap: 0.25rem;\n\tgrid-template-rows: repeat(3, 1fr);\n\talign-items: center;\n\t/* padding: 0 1rem; */\n}\n\n.more-weather-info {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n\n.more-weather-icon {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.more-weather-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.more-weather-title {\n\tmargin: 0;\n\tfont-size: 1rem;\n}\n\n.more-weather-value {\n\tmargin: 0;\n\tfont-size: 1.5rem;\n}\n\n.main {\n\tdisplay: flex;\n\tgap: 1rem;\n\tjustify-content: space-between;\n}\n\n.bottom {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\ninput[type=\"radio\"]:hover + label,\ninput[type=\"radio\"]:checked + label {\n\tbackground-color: #dddddd;\n\tcolor: #15202b;\n}\n\ninput[type=\"radio\"] + label {\n\tborder: 0;\n\tcolor: #dddddd;\n\tfont-size: 1.2rem;\n\t/* border: 3px solid #dddddd; */\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: row;\n\tgap: 1rem;\n\talign-items: center;\n}\n\n.choice {\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n}\n\n.container label {\n\tdisplay: inline-block;\n\tpadding: 10px 20px;\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\tcolor: #fff;\n\tfont-size: 16px;\n\tfont-weight: 900;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n}\n\ninput[type=\"radio\"] {\n\tdisplay: none;\n}\n\n.hourly-forecast {\n\tborder-top-right-radius: 10px;\n\tborder-bottom-left-radius: 10px;\n\tborder-bottom-right-radius: 10px;\n}\n\n.daily-forecast {\n\tborder-radius: 10px;\n}\n\n.forecast {\n\theight: 100%;\n\twidth: 100%;\n\tborder: 3px solid #dddddd;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
	line-height: 1.15; /* 1 */
	-webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
	margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
	display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
	font-size: 2em;
	margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
	box-sizing: content-box; /* 1 */
	height: 0; /* 1 */
	overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
	font-family: monospace, monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
	background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
	border-bottom: none; /* 1 */
	text-decoration: underline; /* 2 */
	text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
	font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
	font-family: monospace, monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
	font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

sub {
	bottom: -0.25em;
}

sup {
	top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
	border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
	/* 1 */
	overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select {
	/* 1 */
	text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
	padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
	box-sizing: border-box; /* 1 */
	color: inherit; /* 2 */
	display: table; /* 1 */
	max-width: 100%; /* 1 */
	padding: 0; /* 3 */
	white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
	vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
	overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
	box-sizing: border-box; /* 1 */
	padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
	height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
	display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
	display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
	display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
	display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;CACC,iBAAiB,EAAE,MAAM;CACzB,8BAA8B,EAAE,MAAM;AACvC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,SAAS;AACV;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;CACC,cAAc;CACd,gBAAgB;AACjB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;CACC,uBAAuB,EAAE,MAAM;CAC/B,SAAS,EAAE,MAAM;CACjB,iBAAiB,EAAE,MAAM;AAC1B;;AAEA;;;EAGE;;AAEF;CACC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,6BAA6B;AAC9B;;AAEA;;;EAGE;;AAEF;CACC,mBAAmB,EAAE,MAAM;CAC3B,0BAA0B,EAAE,MAAM;CAClC,iCAAiC,EAAE,MAAM;AAC1C;;AAEA;;EAEE;;AAEF;;CAEC,mBAAmB;AACpB;;AAEA;;;EAGE;;AAEF;;;CAGC,iCAAiC,EAAE,MAAM;CACzC,cAAc,EAAE,MAAM;AACvB;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,kBAAkB;AACnB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;;EAGE;;AAEF;;CAEC,MAAM;CACN,iBAAiB;AAClB;;AAEA;;;EAGE;;AAEF;;CAEC,MAAM;CACN,oBAAoB;AACrB;;AAEA;;EAEE;;AAEF;;;;CAIC,0BAA0B;AAC3B;;AAEA;;EAEE;;AAEF;;;;CAIC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;EAEE;;AAEF;;;;CAIC,8BAA8B;AAC/B;;AAEA;;EAEE;;AAEF;CACC,8BAA8B;AAC/B;;AAEA;;;;;EAKE;;AAEF;CACC,sBAAsB,EAAE,MAAM;CAC9B,cAAc,EAAE,MAAM;CACtB,cAAc,EAAE,MAAM;CACtB,eAAe,EAAE,MAAM;CACvB,UAAU,EAAE,MAAM;CAClB,mBAAmB,EAAE,MAAM;AAC5B;;AAEA;;EAEE;;AAEF;CACC,wBAAwB;AACzB;;AAEA;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;;EAGE;;AAEF;;CAEC,sBAAsB,EAAE,MAAM;CAC9B,UAAU,EAAE,MAAM;AACnB;;AAEA;;EAEE;;AAEF;;CAEC,YAAY;AACb;;AAEA;;;EAGE;;AAEF;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;CACC,wBAAwB;AACzB;;AAEA;;;EAGE;;AAEF;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,cAAc;AACf;;AAEA;;EAEE;;AAEF;CACC,kBAAkB;AACnB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;CACC,aAAa;AACd;;AAEA;;EAEE;;AAEF;CACC,aAAa;AACd","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n\tdisplay: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n\tbackground-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n\tborder-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n\t/* 1 */\n\toverflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n\t/* 1 */\n\ttext-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n\t-webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n\tpadding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n\toverflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n\tdisplay: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n\tdisplay: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n\tdisplay: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/all.css":
/*!*************************!*\
  !*** ./src/css/all.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_all_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./all.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/all.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_all_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_all_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_all_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_all_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/air.svg":
/*!*************************!*\
  !*** ./src/img/air.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/air.svg";

/***/ }),

/***/ "./src/img/bg.png":
/*!************************!*\
  !*** ./src/img/bg.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/bg.png";

/***/ }),

/***/ "./src/img/cloud.svg":
/*!***************************!*\
  !*** ./src/img/cloud.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cloud.svg";

/***/ }),

/***/ "./src/img/git.svg":
/*!*************************!*\
  !*** ./src/img/git.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/git.svg";

/***/ }),

/***/ "./src/img/humidity.svg":
/*!******************************!*\
  !*** ./src/img/humidity.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/humidity.svg";

/***/ }),

/***/ "./src/img/icon.svg":
/*!**************************!*\
  !*** ./src/img/icon.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/icon.svg";

/***/ }),

/***/ "./src/img/imperial.svg":
/*!******************************!*\
  !*** ./src/img/imperial.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/imperial.svg";

/***/ }),

/***/ "./src/img/metric.svg":
/*!****************************!*\
  !*** ./src/img/metric.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/metric.svg";

/***/ }),

/***/ "./src/img/moon/full-moon.svg":
/*!************************************!*\
  !*** ./src/img/moon/full-moon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/full-moon.svg";

/***/ }),

/***/ "./src/img/pressure.svg":
/*!******************************!*\
  !*** ./src/img/pressure.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pressure.svg";

/***/ }),

/***/ "./src/img/rain.svg":
/*!**************************!*\
  !*** ./src/img/rain.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/rain.svg";

/***/ }),

/***/ "./src/img/raindrops.svg":
/*!*******************************!*\
  !*** ./src/img/raindrops.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/raindrops.svg";

/***/ }),

/***/ "./src/img/search.svg":
/*!****************************!*\
  !*** ./src/img/search.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/search.svg";

/***/ }),

/***/ "./src/img/snow-cloud.svg":
/*!********************************!*\
  !*** ./src/img/snow-cloud.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/snow-cloud.svg";

/***/ }),

/***/ "./src/img/snow.svg":
/*!**************************!*\
  !*** ./src/img/snow.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/snow.svg";

/***/ }),

/***/ "./src/img/sunrise.svg":
/*!*****************************!*\
  !*** ./src/img/sunrise.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sunrise.svg";

/***/ }),

/***/ "./src/img/sunset.svg":
/*!****************************!*\
  !*** ./src/img/sunset.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/sunset.svg";

/***/ }),

/***/ "./src/img/temp.svg":
/*!**************************!*\
  !*** ./src/img/temp.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/temp.svg";

/***/ }),

/***/ "./src/img/uv.svg":
/*!************************!*\
  !*** ./src/img/uv.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/uv.svg";

/***/ }),

/***/ "./src/img/visibility.svg":
/*!********************************!*\
  !*** ./src/img/visibility.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/visibility.svg";

/***/ }),

/***/ "./src/img/wind.svg":
/*!**************************!*\
  !*** ./src/img/wind.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/wind.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_all_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/all.css */ "./src/css/all.css");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _js_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/UI */ "./src/js/UI.js");



(0,_js_UI__WEBPACK_IMPORTED_MODULE_2__["default"])();
document.querySelector(".search-button").addEventListener("click", function () {
  var query = document.querySelector(".search-input").value;
  (0,_js_UI__WEBPACK_IMPORTED_MODULE_2__.getWeather)(query);
});
document.querySelector("#hourly").addEventListener("change", function () {
  (0,_js_UI__WEBPACK_IMPORTED_MODULE_2__.displayForecast)();
});
document.querySelector("#day").addEventListener("change", function () {
  (0,_js_UI__WEBPACK_IMPORTED_MODULE_2__.displayForecast)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixTQUFTLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxlQUFlLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxlQUFlLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksZ0NBQWdDLGlKQUFpSiwrQkFBK0IsaUNBQWlDLGdDQUFn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RDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXVCO0FBQ007QUFDbUM7QUFFaEVBLGtEQUFRLENBQUMsQ0FBQztBQUVWbkcsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ3dHLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3hFLElBQU10RixLQUFLLEdBQUduQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ2hLLEtBQUs7RUFDM0Q4SyxrREFBVSxDQUFDSSxLQUFLLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUZuQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ3dHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ2xFSix1REFBZSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUZyRyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ3dHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQy9ESix1REFBZSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9zcmMvanMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9hbGwuY3NzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9hbGwuY3NzP2FkNTYiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzPzZkNTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItd2hpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItd2hpei93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vaW1nL2ljb24uc3ZnXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9pbWcvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi4vaW1nL2dpdC5zdmdcIjtcbmltcG9ydCB0ZW1wIGZyb20gXCIuLi9pbWcvdGVtcC5zdmdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuLi9pbWcvcmFpbi5zdmdcIjtcbmltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi4vaW1nL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IHdpbmQgZnJvbSBcIi4uL2ltZy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSBcIi4uL2ltZy9zbm93LnN2Z1wiO1xuaW1wb3J0IGFpciBmcm9tIFwiLi4vaW1nL2Fpci5zdmdcIjtcbmltcG9ydCBzdW5yaXNlIGZyb20gXCIuLi9pbWcvc3VucmlzZS5zdmdcIjtcbmltcG9ydCBzdW5zZXQgZnJvbSBcIi4uL2ltZy9zdW5zZXQuc3ZnXCI7XG5pbXBvcnQgcHJlc3N1cmUgZnJvbSBcIi4uL2ltZy9wcmVzc3VyZS5zdmdcIjtcbmltcG9ydCB2aXNpYmlsaXR5IGZyb20gXCIuLi9pbWcvdmlzaWJpbGl0eS5zdmdcIjtcbmltcG9ydCB1diBmcm9tIFwiLi4vaW1nL3V2LnN2Z1wiO1xuaW1wb3J0IHJhaW5kcm9wcyBmcm9tIFwiLi4vaW1nL3JhaW5kcm9wcy5zdmdcIjtcbmltcG9ydCBzbm93Q2xvdWQgZnJvbSBcIi4uL2ltZy9zbm93LWNsb3VkLnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2ltZy9tb29uL2Z1bGwtbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZCBmcm9tIFwiLi4vaW1nL2Nsb3VkLnN2Z1wiO1xuXG5sZXQgd2VhdGhlckRhdGEgPSB7fTtcblxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyRGF0YShkYXRhKSB7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1sb2NhdGlvblwiKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LWljb25cIixcblx0KS5zcmMgPSBgLi9pbWcvd2VhdGhlci8ke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbi5zbGljZSgyOSl9YDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LXRlbXBcIixcblx0KS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2Z9IMKwRmA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1jb25kaXRpb25cIikudGV4dENvbnRlbnQgPVxuXHRcdGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LW1pblwiLFxuXHQpLnRleHRDb250ZW50ID0gYE1pbjogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Z9IMKwRmA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIuY3VycmVudC1tYXhcIixcblx0KS50ZXh0Q29udGVudCA9IGBNYXg6ICR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mfSDCsEZgO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKHF1ZXJ5KSB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcblx0XHRcdGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/ZGF5cz0zJmFxaT15ZXMmcT0ke3F1ZXJ5fSZrZXk9ZmNhNTNkNmM5OWIyNGI1OWFiMzIwMTQ1NTIzMjEwN2AsXG5cdFx0XHR7IG1vZGU6IFwiY29yc1wiIH0sXG5cdFx0KTtcblx0XHR3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0XHRjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XG5cdFx0ZGlzcGxheUN1cnJlbnRXZWF0aGVyRGF0YSh3ZWF0aGVyRGF0YSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0ZGlzcGxheUN1cnJlbnRXZWF0aGVyRGF0YShlcnJvcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU5hdkJhcigpIHtcblx0Y29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdC8vIENyZWF0ZSB0aGUgbG9nb1xuXHRjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nb0JveC5jbGFzc0xpc3QuYWRkKFwibG9nby1ib3hcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsb2dvLnNyYyA9IGljb247XG5cdGxvZ28uYWx0ID0gXCJsb2dvXCI7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBXaGl6XCI7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRuYXZCYXIuYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cblx0Ly8gc2VhcmNoIGJhclxuXHRjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWFyY2hCb3guY2xhc3NMaXN0LmFkZChcInNlYXJjaC1ib3hcIik7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWlucHV0XCIpO1xuXHRzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcblx0c2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaFwiO1xuXHRzZWFyY2hJbnB1dC5uYW1lID0gXCJzZWFyY2hcIjtcblx0c2VhcmNoQm94LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcblx0Y29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0c2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtYnV0dG9uXCIpO1xuXHRzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblx0Y29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHNlYXJjaEljb24uc3JjID0gc2VhcmNoO1xuXHRzZWFyY2hJY29uLmFsdCA9IFwiU2VhcmNoIGljb25cIjtcblx0c2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXHRuYXZCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuXHQvLyB0b2dnbGUgc3dpdGNoIGZvciBpbXBlcmlhbC9tZXRyaWMgdW5pdHNcblx0Y29uc3QgdG9nZ2xlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dG9nZ2xlQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtc3dpdGNoXCIpO1xuXHRjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblx0Y2hlY2tCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0LXRvZ2dsZVwiKTtcblx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInVuaXQtdG9nZ2xlXCIpO1xuXHRjb25zdCBtZXRyaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0bWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvblwiKTtcblx0bWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvbi1tZXRyaWNcIik7XG5cdGNvbnN0IGltcGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGltcGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvblwiKTtcblx0aW1wZXJpYWwuY2xhc3NMaXN0LmFkZChcInRvZ2dsZS1pY29uLWltcGVyaWFsXCIpO1xuXHRjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cdGxhYmVsLmFwcGVuZENoaWxkKGltcGVyaWFsKTtcblx0bGFiZWwuYXBwZW5kQ2hpbGQobWV0cmljKTtcblx0bGFiZWwuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcblx0dG9nZ2xlQm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblx0dG9nZ2xlQm94LmFwcGVuZENoaWxkKGxhYmVsKTtcblx0bmF2QmFyLmFwcGVuZENoaWxkKHRvZ2dsZUJveCk7XG5cblx0cmV0dXJuIG5hdkJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZVBhZ2VDb250YWluZXIoKSB7XG5cdGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRhaW5lclwiKTtcblx0cmV0dXJuIHBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG5cdC8vIExpbmsgdG8gbXkgZ2l0aHViIHByb2ZpbGVcblx0Y29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJQcm9maWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblxuXHQvLyBHaXRIdWIgbG9nb1xuXHRjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG5cdGdpdEh1YlByb2ZpbGVJbWcuYWx0ID0gXCJnaXRIdWIgTG9nb1wiO1xuXG5cdC8vIG15IEdpdGh1YiB1c2VybmFtZVxuXHRjb25zdCBnaXRIdWJQcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBhdFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhdFN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYXQtc3ltYm9sXCIpO1xuXHRhdFN5bWJvbC50ZXh0Q29udGVudCA9IFwiQFwiO1xuXHRjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHR1c2VybmFtZS50ZXh0Q29udGVudCA9IFwiU2hhaGlyLTQ3XCI7XG5cdGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKGF0U3ltYm9sKTtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuXG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZUltZyk7XG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZVRleHQpO1xuXG5cdGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzZXBhcmF0b3IudGV4dENvbnRlbnQgPSBcInxcIjtcblxuXHQvLyBMaW5rIHRvIHRoaXMgc291cmNlIGNvZGVcblx0Y29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJSZXBvLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvV2VhdGhlci1XaGl6XCI7XG5cdGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG5cdHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcigpIHtcblx0Y29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y3VycmVudEluZm8uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtaW5mb1wiKTtcblxuXHRjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGN1cnJlbnRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1sb2NhdGlvblwiKTtcblx0Y3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gXCJDdXJyZW50IExvY2F0aW9uXCI7XG5cdGN1cnJlbnRJbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbik7XG5cblx0Y29uc3QgY3VycmVudERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50RGF0YS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1kYXRhXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y3VycmVudEljb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtaWNvblwiKTtcblx0Y3VycmVudEljb24uc3JjID0gaWNvbjtcblx0Y3VycmVudEljb24uYWx0ID0gXCJDdXJyZW50IHdlYXRoZXIgaWNvblwiO1xuXHRjdXJyZW50RGF0YS5hcHBlbmRDaGlsZChjdXJyZW50SWNvbik7XG5cblx0Y29uc3QgY3VycmVudERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1kZXRhaWxzXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10ZW1wXCIpO1xuXHRjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IFwiODMgwrBGXCI7XG5cdGN1cnJlbnREZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuXHRjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXHRjdXJyZW50Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWNvbmRpdGlvblwiKTtcblx0Y3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IFwiU3VubnlcIjtcblx0Y3VycmVudERldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG5cdGN1cnJlbnREYXRhLmFwcGVuZENoaWxkKGN1cnJlbnREZXRhaWxzKTtcblx0Y3VycmVudEluZm8uYXBwZW5kQ2hpbGQoY3VycmVudERhdGEpO1xuXG5cdGNvbnN0IGN1cnJlbnRNaW5NYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5cdGN1cnJlbnRNaW5NYXguY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbWluLW1heFwiKTtcblxuXHRjb25zdCBjdXJyZW50TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGN1cnJlbnRNaW4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbWluXCIpO1xuXHRjdXJyZW50TWluLnRleHRDb250ZW50ID0gXCJNaW46IDc1IMKwRlwiO1xuXHRjdXJyZW50TWluTWF4LmFwcGVuZENoaWxkKGN1cnJlbnRNaW4pO1xuXG5cdGNvbnN0IGN1cnJlbnRNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y3VycmVudE1heC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1tYXhcIik7XG5cdGN1cnJlbnRNYXgudGV4dENvbnRlbnQgPSBcIk1heDogOTAgwrBGXCI7XG5cdGN1cnJlbnRNaW5NYXguYXBwZW5kQ2hpbGQoY3VycmVudE1heCk7XG5cdGN1cnJlbnRJbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRNaW5NYXgpO1xuXG5cdGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRJbmZvKTtcblx0cmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRpdkluZm8oaW1hZ2UsIHRpdGxlLCB2YWx1ZSkge1xuXHRjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHdlYXRoZXJJbmZvLmNsYXNzTGlzdC5hZGQoXCJtb3JlLXdlYXRoZXItaW5mb1wiKTtcblxuXHRjb25zdCB3ZWF0aGVySW5mb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHR3ZWF0aGVySW5mb0ljb24uY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlci1pY29uXCIpO1xuXHR3ZWF0aGVySW5mb0ljb24uc3JjID0gaW1hZ2U7XG5cdHdlYXRoZXJJbmZvSWNvbi5hbHQgPSBgJHt0aXRsZX0gaWNvbmA7XG5cdHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvSWNvbik7XG5cblx0Y29uc3Qgd2VhdGhlckluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0d2VhdGhlckluZm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJtb3JlLXdlYXRoZXItdGV4dFwiKTtcblxuXHRjb25zdCB3ZWF0aGVySW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHR3ZWF0aGVySW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJtb3JlLXdlYXRoZXItdGl0bGVcIik7XG5cdHdlYXRoZXJJbmZvVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuXHRjb25zdCB3ZWF0aGVySW5mb1ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXHR3ZWF0aGVySW5mb1ZhbHVlLmNsYXNzTGlzdC5hZGQoXCJtb3JlLXdlYXRoZXItdmFsdWVcIik7XG5cdHdlYXRoZXJJbmZvVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0d2VhdGhlckluZm9UZXh0LmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvVGl0bGUpO1xuXHR3ZWF0aGVySW5mb1RleHQuYXBwZW5kQ2hpbGQod2VhdGhlckluZm9WYWx1ZSk7XG5cdHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvVGV4dCk7XG5cblx0cmV0dXJuIHdlYXRoZXJJbmZvO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TW9yZVdlYXRoZXIoKSB7XG5cdGNvbnN0IG1vcmVXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bW9yZVdlYXRoZXIuY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlclwiKTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5kaXZJbmZvKHRlbXAsIFwiRmVlbHMgTGlrZVwiLCBcIjgzIMKwRlwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyhodW1pZGl0eSwgXCJIdW1pZGl0eVwiLCBcIjgzJVwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyhyYWluLCBcIkNoYW5jZSBvZiBSYWluXCIsIFwiMCVcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8od2luZCwgXCJXaW5kXCIsIFwiNSBtcGhcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8oc25vd0Nsb3VkLCBcIkNoYW5jZSBvZiBTbm93XCIsIFwiMCVcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8oYWlyLCBcIkFpciBRdWFsaXR5XCIsIFwiR29vZFwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyhzdW5yaXNlLCBcIlN1bnJpc2VcIiwgXCI2OjAwIEFNXCIpKTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5kaXZJbmZvKHN1bnNldCwgXCJTdW5zZXRcIiwgXCI2OjAwIFBNXCIpKTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5kaXZJbmZvKHByZXNzdXJlLCBcIlByZXNzdXJlXCIsIFwiMTAwMCBtYlwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyh2aXNpYmlsaXR5LCBcIlZpc2liaWxpdHlcIiwgXCIxMCBtaVwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyh1diwgXCJVViBJbmRleFwiLCBcIjBcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8ocmFpbmRyb3BzLCBcIlByZWNpcGl0YXRpb25cIiwgXCIwIGluXCIpKTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5kaXZJbmZvKHNub3csIFwiU25vd1wiLCBcIjAgaW5cIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8oY2xvdWQsIFwiQ2xvdWQgQ292ZXJcIiwgXCIwJVwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZUluZGl2SW5mbyhtb29uLCBcIk1vb24gUGhhc2VcIiwgXCJXYW5pbmcgR2liYm91c1wiKSxcblx0KTtcblx0cmV0dXJuIG1vcmVXZWF0aGVyO1xufVxuXG5mdW5jdGlvbiBjaG9vc2VGb3JlY2FzdCgpIHtcblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cblx0Y29uc3QgZmlyc3RDaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmaXJzdENob2ljZS5jbGFzc0xpc3QuYWRkKFwiY2hvaWNlXCIpO1xuXG5cdGNvbnN0IGhvdXJseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0aG91cmx5LnR5cGUgPSBcInJhZGlvXCI7XG5cdGhvdXJseS5pZCA9IFwiaG91cmx5XCI7XG5cdGhvdXJseS5uYW1lID0gXCJmb3JlY2FzdFwiO1xuXHRob3VybHkudmFsdWUgPSBcImhvdXJseVwiO1xuXHRob3VybHkuY2hlY2tlZCA9IHRydWU7XG5cdGNvbnN0IGhvdXJseUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRob3VybHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJob3VybHlcIik7XG5cdGhvdXJseUxhYmVsLnRleHRDb250ZW50ID0gXCJIb3VybHlcIjtcblx0Zmlyc3RDaG9pY2UuYXBwZW5kQ2hpbGQoaG91cmx5KTtcblx0Zmlyc3RDaG9pY2UuYXBwZW5kQ2hpbGQoaG91cmx5TGFiZWwpO1xuXG5cdGNvbnN0IHNlY29uZENob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHNlY29uZENob2ljZS5jbGFzc0xpc3QuYWRkKFwiY2hvaWNlXCIpO1xuXG5cdGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0ZGF5LnR5cGUgPSBcInJhZGlvXCI7XG5cdGRheS5pZCA9IFwiZGF5XCI7XG5cdGRheS5uYW1lID0gXCJmb3JlY2FzdFwiO1xuXHRkYXkudmFsdWUgPSBcImRheVwiO1xuXHRjb25zdCBkYXlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcblx0ZGF5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF5XCIpO1xuXHRkYXlMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV4dCAyIGRheXNcIjtcblx0c2Vjb25kQ2hvaWNlLmFwcGVuZENoaWxkKGRheSk7XG5cdHNlY29uZENob2ljZS5hcHBlbmRDaGlsZChkYXlMYWJlbCk7XG5cblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0Q2hvaWNlKTtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZENob2ljZSk7XG5cblx0cmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gbWFrZUZvcmVjYXN0KCkge1xuXHRjb25zdCBmb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdFwiKTtcblx0Zm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseS1mb3JlY2FzdFwiKTtcblxuXHRyZXR1cm4gZm9yZWNhc3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VNYWluQ29udGFpbmVyKCkge1xuXHRjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cdG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUN1cnJlbnRXZWF0aGVyKCkpO1xuXHRtYWluLmFwcGVuZENoaWxkKGRpc3BsYXlNb3JlV2VhdGhlcigpKTtcblx0cGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gYm90dG9tQ29udGFpbmVyKCkge1xuXHRjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Ym90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XG5cdGJvdHRvbS5hcHBlbmRDaGlsZChjaG9vc2VGb3JlY2FzdCgpKTtcblx0Ym90dG9tLmFwcGVuZENoaWxkKG1ha2VGb3JlY2FzdCgpKTtcblx0cGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b20pO1xufVxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5TmF2QmFyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG1ha2VQYWdlQ29udGFpbmVyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlGb290ZXIoKSk7XG5cdG1ha2VNYWluQ29udGFpbmVyKCk7XG5cdGJvdHRvbUNvbnRhaW5lcigpO1xuXHRnZXRXZWF0aGVyKFwiTG9zIEFuZ2VsZXNcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdCgpIHtcblx0Y29uc3QgZm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXHRjb25zdCBjaG9pY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZm9yZWNhc3RcIl06Y2hlY2tlZCcpLnZhbHVlO1xuXHRjb25zb2xlLmxvZyhjaG9pY2UpO1xuXHRpZiAoY2hvaWNlID09PSBcImhvdXJseVwiKSB7XG5cdFx0Zm9yZWNhc3QuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRmb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFpbHktZm9yZWNhc3RcIik7XG5cdFx0Zm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImhvdXJseS1mb3JlY2FzdFwiKTtcblx0fSBlbHNlIHtcblx0XHRmb3JlY2FzdC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGZvcmVjYXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJob3VybHktZm9yZWNhc3RcIik7XG5cdFx0Zm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImRhaWx5LWZvcmVjYXN0XCIpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkO1xuZXhwb3J0IHsgZ2V0V2VhdGhlciwgZGlzcGxheUZvcmVjYXN0IH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2JnLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltZy9tZXRyaWMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2ltcGVyaWFsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdFx0dG8gcmlnaHQsXG5cdFx0XHRyZ2JhKDAsIDAsIDAsIDAuNCksXG5cdFx0XHRyZ2JhKDAsIDAsIDAsIDAuNClcblx0XHQpLFxuXHRcdHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRjb2xvcjogI2RkZGRkZDtcblx0Zm9udC1mYW1pbHk6XG5cdFx0c3lzdGVtLXVpLFxuXHRcdC1hcHBsZS1zeXN0ZW0sXG5cdFx0QmxpbmtNYWNTeXN0ZW1Gb250LFxuXHRcdFwiU2Vnb2UgVUlcIixcblx0XHRSb2JvdG8sXG5cdFx0T3h5Z2VuLFxuXHRcdFVidW50dSxcblx0XHRDYW50YXJlbGwsXG5cdFx0XCJPcGVuIFNhbnNcIixcblx0XHRcIkhlbHZldGljYSBOZXVlXCIsXG5cdFx0c2Fucy1zZXJpZjtcbn1cblxuZGl2I2NvbnRlbnQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGZvbnQtZmFtaWx5OlxuXHRcdHN5c3RlbS11aSxcblx0XHQtYXBwbGUtc3lzdGVtLFxuXHRcdEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLFxuXHRcdE94eWdlbixcblx0XHRVYnVudHUsXG5cdFx0Q2FudGFyZWxsLFxuXHRcdFwiT3BlbiBTYW5zXCIsXG5cdFx0XCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbi5uYXYtYmFyIHtcblx0cG9zaXRpb246IHN0aWNreTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuXHR6LWluZGV4OiAyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMnJlbTtcblx0cGFkZGluZzogMCAxcmVtO1xuXHRwYWRkaW5nLXRvcDogMC4yNXJlbTtcbn1cblxuLnNlYXJjaC1ib3gge1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdHBhZGRpbmc6IDAgMXJlbTtcblx0cGFkZGluZy1yaWdodDogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcblx0Ym9yZGVyLXJhZGl1czogMy45Mzc1cmVtO1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dCB7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGJvcmRlcjogaHNsKDAsIDAlLCAxOC44MiUpO1xuXHRjb2xvcjogI2RkZGRkZDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRwYWRkaW5nOiAwLjVyZW07XG5cdGZsZXg6IDE7XG59XG5cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTRiO1xuXHRjb2xvcjogI2RkZGRkZDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRwYWRkaW5nOiAwLjVyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMy41cmVtO1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xufVxuXG4uc2VhcmNoLWJveCBpbWcge1xuXHR3aWR0aDogMS41cmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbjpob3Zlcixcbi5zZWFyY2gtYm94IGJ1dHRvbjphY3RpdmUge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmxvZ28tYm94IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjVyZW07XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ28tYm94OmhvdmVyLFxuLmxvZ28tYm94OmFjdGl2ZSB7XG5cdGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xufVxuXG4ubG9nby1ib3ggaDEge1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmxvZ28tYm94IGltZyB7XG5cdHdpZHRoOiAycmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi50b2dnbGUtc3dpdGNoIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNjVweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3NTdlO1xuXHRib3JkZXItcmFkaXVzOiAyNnB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXI6IDNweCBzb2xpZCAjMmNhOWJjO1xufVxuXG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2dnbGUtc3dpdGNoIGxhYmVsIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRvZ2dsZS1pY29uIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xufVxuXG4udG9nZ2xlLWljb24tbWV0cmljIHtcblx0YmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG5cdHJpZ2h0OiAzLjVweDtcblx0dG9wOiA0LjVweDtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbn1cblxuLnRvZ2dsZS1pY29uLWltcGVyaWFsIHtcblx0YmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQ7XG5cdGxlZnQ6IDVweDtcblx0dG9wOiA1cHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi5zbGlkZXIge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogM3B4O1xuXHRsZWZ0OiA1cHg7XG5cdHdpZHRoOiAyNHB4O1xuXHRoZWlnaHQ6IDI0cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyY2E5YmM7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIGxhYmVsIC5zbGlkZXIge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzNweCk7XG59XG5cbmZvb3RlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMXJlbTtcblx0cGFkZGluZzogMC4zNXJlbSAwcmVtO1xufVxuXG5mb290ZXIgYSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjZyZW07XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxLjFyZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdGNvbG9yOiAjZGRkZGRkO1xufVxuXG5mb290ZXIgcCB7XG5cdG1hcmdpbjogMC41cmVtIDA7XG59XG5cbmZvb3RlciBhOmhvdmVyLFxuZm9vdGVyIGE6YWN0aXZlIHtcblx0Y29sb3I6ICNmZmZmZmY7XG59XG5cbmZvb3RlciBhOmhvdmVyIGltZyxcbmZvb3RlciBhOmFjdGl2ZSBpbWcge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmF0LXN5bWJvbCB7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGZvbnQtZmFtaWx5OlxuXHRcdHN5c3RlbS11aSxcblx0XHQtYXBwbGUtc3lzdGVtLFxuXHRcdEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLFxuXHRcdE94eWdlbixcblx0XHRVYnVudHUsXG5cdFx0Q2FudGFyZWxsLFxuXHRcdFwiT3BlbiBTYW5zXCIsXG5cdFx0XCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbmZvb3RlciBpbWcge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4ucGFnZS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcblx0cGFkZGluZzogM3JlbTtcblx0cGFkZGluZy1ib3R0b206IDA7XG5cdGdhcDogMS41cmVtO1xufVxuXG4uY3VycmVudC13ZWF0aGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmN1cnJlbnQtaW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xufVxuXG4uY3VycmVudC1kYXRhIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5jdXJyZW50LWljb24ge1xuXHR3aWR0aDogN3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uY3VycmVudC1kZXRhaWxzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5jdXJyZW50LW1pbi1tYXgge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDIuNXJlbTtcbn1cblxuLmN1cnJlbnQtaW5mbyBoMixcbi5jdXJyZW50LWluZm8gaDMsXG4uY3VycmVudC1pbmZvIGg0LFxuLmN1cnJlbnQtaW5mbyBoNSB7XG5cdG1hcmdpbjogMDtcbn1cblxuLmN1cnJlbnQtaW5mbyBoMiB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuLmN1cnJlbnQtaW5mbyBoMyB7XG5cdGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuLmN1cnJlbnQtaW5mbyBoNCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmN1cnJlbnQtaW5mbyBoNSB7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4ubW9yZS13ZWF0aGVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xuXHQvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG5cdGdhcDogMi41cmVtO1xuXHRncmlkLXJvdy1nYXA6IDAuMjVyZW07XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cbn1cblxuLm1vcmUtd2VhdGhlci1pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjVyZW07XG59XG5cbi5tb3JlLXdlYXRoZXItaWNvbiB7XG5cdHdpZHRoOiAzcmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5tb3JlLXdlYXRoZXItdGV4dCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5tb3JlLXdlYXRoZXItdGl0bGUge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm1vcmUtd2VhdGhlci12YWx1ZSB7XG5cdG1hcmdpbjogMDtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tYWluIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxcmVtO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ib3R0b20ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06aG92ZXIgKyBsYWJlbCxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXHRjb2xvcjogIzE1MjAyYjtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiAjZGRkZGRkO1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0LyogYm9yZGVyOiAzcHggc29saWQgI2RkZGRkZDsgKi9cbn1cblxuLmNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGdhcDogMXJlbTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNob2ljZSB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udGFpbmVyIGxhYmVsIHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcblx0Y29sb3I6ICNmZmY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0IHtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4uZGFpbHktZm9yZWNhc3Qge1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9yZWNhc3Qge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2FsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQzs7Ozs7eUNBS3FCO0NBQ3JCLDBCQUEwQjtDQUMxQiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsVUFBVTtDQUNWLGNBQWM7Q0FDZDs7Ozs7Ozs7Ozs7WUFXVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLCtDQUErQztDQUMvQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZDs7Ozs7Ozs7Ozs7WUFXVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsVUFBVTtDQUNWLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixlQUFlO0NBQ2YsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7QUFDYjs7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QUFFQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0NBQ1QsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQyx5QkFBeUI7Q0FDekIsY0FBYztBQUNmOztBQUVBO0NBQ0MsU0FBUztDQUNULGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsNkJBQTZCO0NBQzdCLCtCQUErQjtDQUMvQixnQ0FBZ0M7QUFDakM7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLHlCQUF5QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0XFx0cmdiYSgwLCAwLCAwLCAwLjQpLFxcblxcdFxcdFxcdHJnYmEoMCwgMCwgMCwgMC40KVxcblxcdFxcdCksXFxuXFx0XFx0dXJsKFxcXCIuLi9pbWcvYmcucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjb2xvcjogI2RkZGRkZDtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSxcXG5cXHRcXHRCbGlua01hY1N5c3RlbUZvbnQsXFxuXFx0XFx0XFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0T3h5Z2VuLFxcblxcdFxcdFVidW50dSxcXG5cXHRcXHRDYW50YXJlbGwsXFxuXFx0XFx0XFxcIk9wZW4gU2Fuc1xcXCIsXFxuXFx0XFx0XFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG5cXHRcXHRzYW5zLXNlcmlmO1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sXFxuXFx0XFx0QmxpbmtNYWNTeXN0ZW1Gb250LFxcblxcdFxcdFxcXCJTZWdvZSBVSVxcXCIsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdE94eWdlbixcXG5cXHRcXHRVYnVudHUsXFxuXFx0XFx0Q2FudGFyZWxsLFxcblxcdFxcdFxcXCJPcGVuIFNhbnNcXFwiLFxcblxcdFxcdFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1iYXIge1xcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuMjVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cGFkZGluZzogMCAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG5cXHRib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTRiO1xcblxcdGNvbG9yOiAjZGRkZGRkO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAzLjVyZW07XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbWcge1xcblxcdHdpZHRoOiAxLjVyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1ib3ggYnV0dG9uOmFjdGl2ZSB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tYm94OmhvdmVyLFxcbi5sb2dvLWJveDphY3RpdmUge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ubG9nby1ib3ggaDEge1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxvZ28tYm94IGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA2NXB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3NTdlO1xcblxcdGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjMmNhOWJjO1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1zd2l0Y2ggbGFiZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlLWljb24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi50b2dnbGUtaWNvbi1tZXRyaWMge1xcblxcdGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1nL21ldHJpYy5zdmdcXFwiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcblxcdHJpZ2h0OiAzLjVweDtcXG5cXHR0b3A6IDQuNXB4O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcblxcbi50b2dnbGUtaWNvbi1pbXBlcmlhbCB7XFxuXFx0YmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWcvaW1wZXJpYWwuc3ZnXFxcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG5cXHRsZWZ0OiA1cHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxuXFxuLnNsaWRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogM3B4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJjYTliYztcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG5cXHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwgLnNsaWRlciB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMzcHgpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMHJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjZyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxufVxcblxcbmZvb3RlciBwIHtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciBpbWcsXFxuZm9vdGVyIGE6YWN0aXZlIGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5hdC1zeW1ib2wge1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sXFxuXFx0XFx0QmxpbmtNYWNTeXN0ZW1Gb250LFxcblxcdFxcdFxcXCJTZWdvZSBVSVxcXCIsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdE94eWdlbixcXG5cXHRcXHRVYnVudHUsXFxuXFx0XFx0Q2FudGFyZWxsLFxcblxcdFxcdFxcXCJPcGVuIFNhbnNcXFwiLFxcblxcdFxcdFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuXFx0cGFkZGluZzogM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMDtcXG5cXHRnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1kYXRhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1pY29uIHtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jdXJyZW50LWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtbWluLW1heCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMi41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIGgyLFxcbi5jdXJyZW50LWluZm8gaDMsXFxuLmN1cnJlbnQtaW5mbyBoNCxcXG4uY3VycmVudC1pbmZvIGg1IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jdXJyZW50LWluZm8gaDIge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIGgzIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5jdXJyZW50LWluZm8gaDQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyBoNSB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5tb3JlLXdlYXRoZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcdC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG5cXHRnYXA6IDIuNXJlbTtcXG5cXHRncmlkLXJvdy1nYXA6IDAuMjVyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cXG59XFxuXFxuLm1vcmUtd2VhdGhlci1pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi5tb3JlLXdlYXRoZXItaWNvbiB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubW9yZS13ZWF0aGVyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vcmUtd2VhdGhlci10aXRsZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1vcmUtd2VhdGhlci12YWx1ZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYm90dG9tIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXHRjb2xvcjogIzE1MjAyYjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIGxhYmVsIHtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0LyogYm9yZGVyOiAzcHggc29saWQgI2RkZGRkZDsgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGdhcDogMXJlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hvaWNlIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY29udGFpbmVyIGxhYmVsIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0cGFkZGluZzogMTBweCAyMHB4O1xcblxcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0IHtcXG5cXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG5cXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcblxcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGFpbHktZm9yZWNhc3Qge1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlcjogM3B4IHNvbGlkICNkZGRkZGQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcblx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cblx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG5cdGZvbnQtc2l6ZTogMmVtO1xuXHRtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG5cdGhlaWdodDogMDsgLyogMSAqL1xuXHRvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG5cdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuXHRmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuXHRmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG5cdGZvbnQtc2l6ZTogNzUlO1xuXHRsaW5lLWhlaWdodDogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG5cdGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcblx0dG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuXHRib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHRtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQge1xuXHQvKiAxICovXG5cdG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7XG5cdC8qIDEgKi9cblx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuXHRib3JkZXItc3R5bGU6IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcblx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG5cdHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG5cdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG5cdGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG5cdG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuXHRwYWRkaW5nOiAwOyAvKiAzICovXG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG5cdHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG5cdGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cblx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG5cdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcblx0ZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuXHRkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtDQUNDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN2Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0NBQ0MsU0FBUztBQUNWOztBQUVBOztFQUVFOztBQUVGO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7RUFHRTs7QUFFRjtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Q0FDQyx1QkFBdUIsRUFBRSxNQUFNO0NBQy9CLFNBQVMsRUFBRSxNQUFNO0NBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0NBQ0MsaUNBQWlDLEVBQUUsTUFBTTtDQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBOzs7RUFHRTs7QUFFRjtDQUNDLG1CQUFtQixFQUFFLE1BQU07Q0FDM0IsMEJBQTBCLEVBQUUsTUFBTTtDQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzFDOztBQUVBOztFQUVFOztBQUVGOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztDQUdDLGlDQUFpQyxFQUFFLE1BQU07Q0FDekMsY0FBYyxFQUFFLE1BQU07QUFDdkI7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7OztFQUdFOztBQUVGOztDQUVDLGNBQWM7Q0FDZCxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7Q0FLQyxvQkFBb0IsRUFBRSxNQUFNO0NBQzVCLGVBQWUsRUFBRSxNQUFNO0NBQ3ZCLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsU0FBUyxFQUFFLE1BQU07QUFDbEI7O0FBRUE7OztFQUdFOztBQUVGOztDQUVDLE1BQU07Q0FDTixpQkFBaUI7QUFDbEI7O0FBRUE7OztFQUdFOztBQUVGOztDQUVDLE1BQU07Q0FDTixvQkFBb0I7QUFDckI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7Q0FJQywwQkFBMEI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBOztFQUVFOztBQUVGOzs7O0NBSUMsOEJBQThCO0FBQy9COztBQUVBOztFQUVFOztBQUVGO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBOzs7OztFQUtFOztBQUVGO0NBQ0Msc0JBQXNCLEVBQUUsTUFBTTtDQUM5QixjQUFjLEVBQUUsTUFBTTtDQUN0QixjQUFjLEVBQUUsTUFBTTtDQUN0QixlQUFlLEVBQUUsTUFBTTtDQUN2QixVQUFVLEVBQUUsTUFBTTtDQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzVCOztBQUVBOztFQUVFOztBQUVGO0NBQ0Msd0JBQXdCO0FBQ3pCOztBQUVBOztFQUVFOztBQUVGO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7RUFHRTs7QUFFRjs7Q0FFQyxzQkFBc0IsRUFBRSxNQUFNO0NBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ25COztBQUVBOztFQUVFOztBQUVGOztDQUVDLFlBQVk7QUFDYjs7QUFFQTs7O0VBR0U7O0FBRUY7Q0FDQyw2QkFBNkIsRUFBRSxNQUFNO0NBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7OztFQUdFOztBQUVGO0NBQ0MsMEJBQTBCLEVBQUUsTUFBTTtDQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN0Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0NBQ0MsY0FBYztBQUNmOztBQUVBOztFQUVFOztBQUVGO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyxhQUFhO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuXFx0Zm9udC1zaXplOiAyZW07XFxuXFx0bWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuXFx0Ym94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0Ym9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuXFx0bGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG5cXHRtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcblxcdC8qIDEgKi9cXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcblxcdC8qIDEgKi9cXG5cXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcblxcdGJvcmRlci1zdHlsZTogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcblxcdG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG5cXHRwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcblxcdGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuXFx0bWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuXFx0cGFkZGluZzogMDsgLyogMyAqL1xcblxcdHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcblxcdHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG5cXHRmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FsbC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL2Nzcy9hbGwuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgcGFnZUxvYWQsIHsgZ2V0V2VhdGhlciwgZGlzcGxheUZvcmVjYXN0IH0gZnJvbSBcIi4vanMvVUlcIjtcblxucGFnZUxvYWQoKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdGNvbnN0IHF1ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZWFyY2gtaW5wdXRcIikudmFsdWU7XG5cdGdldFdlYXRoZXIocXVlcnkpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG91cmx5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRkaXNwbGF5Rm9yZWNhc3QoKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RheVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcblx0ZGlzcGxheUZvcmVjYXN0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZXhwb3J0cyIsIk9wIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duIiwiaGFzT3duUHJvcGVydHkiLCJkZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImRlc2MiLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsImNhbGwiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwidmFsdWVzIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwibWV0aG9kIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJQcm9taXNlSW1wbCIsImludm9rZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWNvcmQiLCJyZXN1bHQiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJ1bndyYXBwZWQiLCJlcnJvciIsInByZXZpb3VzUHJvbWlzZSIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwic3RhdGUiLCJFcnJvciIsImRvbmVSZXN1bHQiLCJkZWxlZ2F0ZSIsImRlbGVnYXRlUmVzdWx0IiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiZG9uZSIsIm1ldGhvZE5hbWUiLCJ1bmRlZmluZWQiLCJUeXBlRXJyb3IiLCJpbmZvIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwibG9jcyIsImVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiaXNOYU4iLCJsZW5ndGgiLCJpIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJvYmplY3QiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJyb290UmVjb3JkIiwicnZhbCIsImV4Y2VwdGlvbiIsImhhbmRsZSIsImxvYyIsImNhdWdodCIsImhhc0NhdGNoIiwiaGFzRmluYWxseSIsImZpbmFsbHlFbnRyeSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJpY29uIiwic2VhcmNoIiwiR2l0SHViIiwidGVtcCIsInJhaW4iLCJodW1pZGl0eSIsIndpbmQiLCJzbm93IiwiYWlyIiwic3VucmlzZSIsInN1bnNldCIsInByZXNzdXJlIiwidmlzaWJpbGl0eSIsInV2IiwicmFpbmRyb3BzIiwic25vd0Nsb3VkIiwibW9vbiIsImNsb3VkIiwid2VhdGhlckRhdGEiLCJkaXNwbGF5Q3VycmVudFdlYXRoZXJEYXRhIiwiZGF0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJzcmMiLCJjb25jYXQiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGVtcF9mIiwidGV4dCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJtaW50ZW1wX2YiLCJtYXh0ZW1wX2YiLCJnZXRXZWF0aGVyIiwiX3giLCJfZ2V0V2VhdGhlciIsIl9jYWxsZWUiLCJxdWVyeSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibW9kZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidDAiLCJkaXNwbGF5TmF2QmFyIiwibmF2QmFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZ29Cb3giLCJsb2dvIiwiYWx0IiwibG9nb1RleHQiLCJhcHBlbmRDaGlsZCIsInNlYXJjaEJveCIsInNlYXJjaElucHV0IiwicGxhY2Vob2xkZXIiLCJpZCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iLCJ0b2dnbGVCb3giLCJjaGVja0JveCIsInNldEF0dHJpYnV0ZSIsImxhYmVsIiwibWV0cmljIiwiaW1wZXJpYWwiLCJzbGlkZXIiLCJtYWtlUGFnZUNvbnRhaW5lciIsInBhZ2VDb250YWluZXIiLCJkaXNwbGF5Rm9vdGVyIiwiZm9vdGVyIiwiZ2l0SHViUHJvZmlsZSIsImhyZWYiLCJnaXRIdWJQcm9maWxlSW1nIiwiZ2l0SHViUHJvZmlsZVRleHQiLCJhdFN5bWJvbCIsInVzZXJuYW1lIiwic2VwYXJhdG9yIiwiZ2l0SHViUmVwbyIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiY3VycmVudEluZm8iLCJjdXJyZW50TG9jYXRpb24iLCJjdXJyZW50RGF0YSIsImN1cnJlbnRJY29uIiwiY3VycmVudERldGFpbHMiLCJjdXJyZW50VGVtcCIsImN1cnJlbnRDb25kaXRpb24iLCJjdXJyZW50TWluTWF4IiwiY3VycmVudE1pbiIsImN1cnJlbnRNYXgiLCJjcmVhdGVJbmRpdkluZm8iLCJpbWFnZSIsInRpdGxlIiwid2VhdGhlckluZm8iLCJ3ZWF0aGVySW5mb0ljb24iLCJ3ZWF0aGVySW5mb1RleHQiLCJ3ZWF0aGVySW5mb1RpdGxlIiwid2VhdGhlckluZm9WYWx1ZSIsImRpc3BsYXlNb3JlV2VhdGhlciIsIm1vcmVXZWF0aGVyIiwiY2hvb3NlRm9yZWNhc3QiLCJjb250YWluZXIiLCJmaXJzdENob2ljZSIsImhvdXJseSIsImNoZWNrZWQiLCJob3VybHlMYWJlbCIsInNlY29uZENob2ljZSIsImRheUxhYmVsIiwibWFrZUZvcmVjYXN0IiwibWFrZU1haW5Db250YWluZXIiLCJtYWluIiwiYm90dG9tQ29udGFpbmVyIiwiYm90dG9tIiwicGFnZUxvYWQiLCJjb250ZW50IiwiZGlzcGxheUZvcmVjYXN0IiwiY2hvaWNlIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
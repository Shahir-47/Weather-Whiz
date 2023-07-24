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
var getAirQuality = function getAirQuality(aqi) {
  if (aqi <= 50) {
    return "Good";
  }
  if (aqi <= 100) {
    return "Moderate";
  }
  if (aqi <= 150) {
    return "Unhealthy for Sensitive Groups";
  }
  if (aqi <= 200) {
    return "Unhealthy";
  }
  if (aqi <= 300) {
    return "Very Unhealthy";
  }
  return "Hazardous";
};
function displayWeatherData(data) {
  var moonPhase = data.forecast.forecastday[0].astro.moon_phase;
  moonPhase = moonPhase.replace(" ", "-");
  moonPhase = moonPhase.toLowerCase();
  document.querySelector(".current-location").textContent = data.location.name;
  document.querySelector(".current-icon").src = "./img/weather/".concat(data.current.condition.icon.slice(29));
  document.querySelector(".current-temp").textContent = "".concat(data.current.temp_f, " \xB0F");
  document.querySelector(".current-condition").textContent = data.current.condition.text;
  document.querySelector(".current-min").textContent = "Min: ".concat(data.forecast.forecastday[0].day.mintemp_f, " \xB0F");
  document.querySelector(".current-max").textContent = "Max: ".concat(data.forecast.forecastday[0].day.maxtemp_f, " \xB0F");
  document.querySelector(".temp").textContent = "".concat(data.current.feelslike_f, " \xB0F");
  document.querySelector(".humidity").textContent = "".concat(data.current.humidity, "%");
  document.querySelector(".rain").textContent = "".concat(data.forecast.forecastday[0].day.daily_chance_of_rain, "%");
  document.querySelector(".wind").textContent = "".concat(data.current.wind_mph, " mph");
  document.querySelector(".snow").textContent = "".concat(data.forecast.forecastday[0].day.daily_chance_of_snow, "%");
  document.querySelector(".air").textContent = "".concat(getAirQuality(data.current.air_quality.pm2_5));
  document.querySelector(".sunrise").textContent = "".concat(data.forecast.forecastday[0].astro.sunrise);
  document.querySelector(".sunset").textContent = "".concat(data.forecast.forecastday[0].astro.sunset);
  document.querySelector(".pressure").textContent = "".concat(data.current.pressure_mb, " mb");
  document.querySelector(".visibility").textContent = "".concat(data.current.vis_miles, " miles");
  document.querySelector(".uv").textContent = "".concat(data.current.uv);
  document.querySelector(".precipitation").textContent = "".concat(data.forecast.forecastday[0].day.totalprecip_in, " inches");
  document.querySelector(".snow-depth").textContent = "".concat(data.forecast.forecastday[0].day.totalprecip_in, " inches");
  document.querySelector(".cloud-cover").textContent = "".concat(data.current.cloud, "%");
  document.querySelector(".moon-phase").textContent = "".concat(data.forecast.forecastday[0].astro.moon_phase);
  document.querySelector("img[alt='Moon Phase icon']").src = "./img/moon/".concat(moonPhase, ".svg");
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
          displayWeatherData(weatherData);
          _context.next = 14;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          displayWeatherData(_context.t0);
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
function createIndivInfo(image, title, value, className) {
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
  weatherInfoValue.classList.add(className);
  weatherInfoValue.textContent = value;
  weatherInfoText.appendChild(weatherInfoTitle);
  weatherInfoText.appendChild(weatherInfoValue);
  weatherInfo.appendChild(weatherInfoText);
  return weatherInfo;
}
function displayMoreWeather() {
  var moreWeather = document.createElement("div");
  moreWeather.classList.add("more-weather");
  moreWeather.appendChild(createIndivInfo(_img_temp_svg__WEBPACK_IMPORTED_MODULE_3__, "Feels Like", "83 °F", "temp"));
  moreWeather.appendChild(createIndivInfo(_img_humidity_svg__WEBPACK_IMPORTED_MODULE_5__, "Humidity", "83%", "humidity"));
  moreWeather.appendChild(createIndivInfo(_img_rain_svg__WEBPACK_IMPORTED_MODULE_4__, "Chance of Rain", "0%", "rain"));
  moreWeather.appendChild(createIndivInfo(_img_wind_svg__WEBPACK_IMPORTED_MODULE_6__, "Wind", "5 mph", "wind"));
  moreWeather.appendChild(createIndivInfo(_img_snow_cloud_svg__WEBPACK_IMPORTED_MODULE_15__, "Chance of Snow", "0%", "snow"));
  moreWeather.appendChild(createIndivInfo(_img_air_svg__WEBPACK_IMPORTED_MODULE_8__, "Air Quality", "Good", "air"));
  moreWeather.appendChild(createIndivInfo(_img_sunrise_svg__WEBPACK_IMPORTED_MODULE_9__, "Sunrise", "6:00 AM", "sunrise"));
  moreWeather.appendChild(createIndivInfo(_img_sunset_svg__WEBPACK_IMPORTED_MODULE_10__, "Sunset", "6:00 PM", "sunset"));
  moreWeather.appendChild(createIndivInfo(_img_pressure_svg__WEBPACK_IMPORTED_MODULE_11__, "Pressure", "1000 mb", "pressure"));
  moreWeather.appendChild(createIndivInfo(_img_visibility_svg__WEBPACK_IMPORTED_MODULE_12__, "Visibility", "10 mi", "visibility"));
  moreWeather.appendChild(createIndivInfo(_img_uv_svg__WEBPACK_IMPORTED_MODULE_13__, "UV Index", "0", "uv"));
  moreWeather.appendChild(createIndivInfo(_img_raindrops_svg__WEBPACK_IMPORTED_MODULE_14__, "Precipitation", "0 in", "precipitation"));
  moreWeather.appendChild(createIndivInfo(_img_snow_svg__WEBPACK_IMPORTED_MODULE_7__, "Snow", "0 in", "snow-depth"));
  moreWeather.appendChild(createIndivInfo(_img_cloud_svg__WEBPACK_IMPORTED_MODULE_17__, "Cloud Cover", "0%", "cloud-cover"));
  moreWeather.appendChild(createIndivInfo(_img_moon_full_moon_svg__WEBPACK_IMPORTED_MODULE_16__, "Moon Phase", "Waning Gibbous", "moon-phase"));
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
function makeHourlyCard() {
  var hourlyCard = document.createElement("div");
  hourlyCard.classList.add("hourly-card");
  var hourlyTime = document.createElement("h3");
  hourlyTime.classList.add("hourly-time");
  hourlyTime.textContent = "12:00 PM";
  hourlyCard.appendChild(hourlyTime);
  var hourlyIcon = document.createElement("img");
  hourlyIcon.classList.add("hourly-icon");
  hourlyIcon.src = _img_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  hourlyIcon.alt = "weather icon";
  hourlyCard.appendChild(hourlyIcon);
  var hourlyTemp = document.createElement("h4");
  hourlyTemp.classList.add("hourly-temp");
  hourlyTemp.textContent = "83 °F";
  hourlyCard.appendChild(hourlyTemp);
  var hourlyCondition = document.createElement("h5");
  hourlyCondition.classList.add("hourly-condition");
  hourlyCondition.textContent = "Sunny";
  hourlyCard.appendChild(hourlyCondition);
  var moreInfo = document.createElement("div");
  moreInfo.classList.add("more-info-hourly");
  var moreInfoRain = document.createElement("div");
  moreInfoRain.classList.add("more-info-rain");
  var moreInfoRainIcon = document.createElement("img");
  moreInfoRainIcon.classList.add("more-info-rain-icon");
  moreInfoRainIcon.src = _img_rain_svg__WEBPACK_IMPORTED_MODULE_4__;
  moreInfoRainIcon.alt = "rain icon";
  moreInfoRain.appendChild(moreInfoRainIcon);
  var moreInfoRainText = document.createElement("h6");
  moreInfoRainText.classList.add("more-info-rain-text");
  moreInfoRainText.textContent = "0%";
  moreInfoRain.appendChild(moreInfoRainText);
  moreInfo.appendChild(moreInfoRain);
  var moreInfoSnow = document.createElement("div");
  moreInfoSnow.classList.add("more-info-snow");
  var moreInfoSnowIcon = document.createElement("img");
  moreInfoSnowIcon.classList.add("more-info-snow-icon");
  moreInfoSnowIcon.src = _img_snow_svg__WEBPACK_IMPORTED_MODULE_7__;
  moreInfoSnowIcon.alt = "snow icon";
  moreInfoSnow.appendChild(moreInfoSnowIcon);
  var moreInfoSnowText = document.createElement("h6");
  moreInfoSnowText.classList.add("more-info-snow-text");
  moreInfoSnowText.textContent = "0%";
  moreInfoSnow.appendChild(moreInfoSnowText);
  moreInfo.appendChild(moreInfoSnow);
  hourlyCard.appendChild(moreInfo);
  return hourlyCard;
}
function makeHourlyForecast() {
  var forecast = document.querySelector(".forecast");
  var backBtn = document.createElement("button");
  backBtn.classList.add("back-btn");
  backBtn.textContent = "<";
  forecast.appendChild(backBtn);
  var forecastSlider = document.createElement("div");
  forecastSlider.classList.add("forecast-slider");
  forecast.appendChild(forecastSlider);
  for (var i = 0; i < 24; i += 1) {
    forecastSlider.appendChild(makeHourlyCard());
  }
  var nextBtn = document.createElement("button");
  nextBtn.classList.add("next-btn");
  nextBtn.textContent = ">";
  forecast.appendChild(nextBtn);
  return forecast;
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
  makeHourlyForecast();
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
	max-width: calc(100vw - 6rem);
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
	align-items: center;
	padding-left: 3.5rem;
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
	display: flex;
	justify-content: space-between;
}

.back-btn,
.next-btn {
	font-size: 2.5rem;
	color: #15202b;
	font-weight: 900;
	background-color: #dddddd;
	border: none;
	cursor: pointer;
}

.back-btn:hover,
.next-btn:hover {
	filter: brightness(1.2);
}

.daily-forecast {
}

.hide {
	display: none;
}

.forecast {
	height: 100%;
	border: 3px solid #dddddd;
	border-radius: 10px;
}

.forecast-slider {
	display: flex;
	overflow-x: hidden;
	gap: 1rem;
	padding: 0 1rem;
}

.hourly-card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin: 1rem 0.25rem;
	min-width: 150px;
	border: 1px solid #dddddd;
	border-radius: 15px;
	background-color: #ffffff17;
	cursor: pointer;
	transition: all 0.3s ease;
}

.hourly-card:hover {
	background-color: #ffffff26;
}

.hourly-icon {
	width: 3rem;
	height: auto;
}

.more-info-rain,
.more-info-snow {
	display: flex;
	align-items: center;
	gap: 0.25rem;
}
.more-info-hourly {
	display: flex;
}

.more-info-hourly img {
	width: 1.5rem;
	height: auto;
}

.more-info-hourly {
	align-items: center;
	gap: 0.75rem;
}

.hourly-card * {
	margin: 0;
}

.hourly-time {
	font-size: 1.3rem;
	font-weight: 900;
}

.hourly-temp {
	font-size: 1.5rem;
	font-weight: 900;
}

.hourly-condition {
	font-size: 1.2rem;
	font-weight: 900;
}
`, "",{"version":3,"sources":["webpack://./src/css/all.css"],"names":[],"mappings":"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","sourcesContent":["body {\n\tbackground-image: linear-gradient(\n\t\t\tto right,\n\t\t\trgba(0, 0, 0, 0.4),\n\t\t\trgba(0, 0, 0, 0.4)\n\t\t),\n\t\turl(\"../img/bg.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-color: #15202b;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: #dddddd;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\ndiv#content {\n\tdisplay: grid;\n\tgrid-template-rows: min-content 1fr min-content;\n\tposition: relative;\n\tmin-height: 100vh;\n\tcolor: #dddddd;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\n.nav-bar {\n\tposition: sticky;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\tbackground-color: #15202b;\n\twidth: calc(100% - 2rem);\n\tz-index: 2;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tgap: 2rem;\n\tpadding: 0 1rem;\n\tpadding-top: 0.25rem;\n}\n\n.search-box {\n\tflex: 1;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 0 1rem;\n\tpadding-right: 0;\n\tbackground-color: #192734;\n\tborder-radius: 3.9375rem;\n}\n\n.search-box input {\n\tborder: none;\n\tbackground-color: transparent;\n\tborder: hsl(0, 0%, 18.82%);\n\tcolor: #dddddd;\n\tfont-size: 1rem;\n\tfont-weight: 500;\n\tpadding: 0.5rem;\n\tflex: 1;\n}\n\n.search-box input:focus {\n\toutline: none;\n}\n\n.search-box button {\n\tborder: none;\n\tbackground-color: #313e4b;\n\tcolor: #dddddd;\n\tfont-size: 1rem;\n\tfont-weight: 500;\n\tpadding: 0.5rem;\n\tcursor: pointer;\n\theight: 100%;\n\twidth: 3.5rem;\n\tborder-top-right-radius: 3.9375rem;\n\tborder-bottom-right-radius: 3.9375rem;\n}\n\n.search-box img {\n\twidth: 1.5rem;\n\theight: auto;\n}\n\n.search-box button:hover,\n.search-box button:active {\n\tfilter: brightness(1.2);\n}\n\n.logo-box {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n\tcursor: pointer;\n}\n\n.logo-box:hover,\n.logo-box:active {\n\tfilter: brightness(1.2);\n}\n\n.logo-box h1 {\n\tfont-size: 1.6rem;\n\tfont-weight: 700;\n\tcolor: #dddddd;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n\tmargin-top: 10px;\n}\n\n.logo-box img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.toggle-switch {\n\tposition: relative;\n\twidth: 65px;\n\theight: 30px;\n\tbackground-color: #6b757e;\n\tborder-radius: 26px;\n\toverflow: hidden;\n\tborder: 3px solid #2ca9bc;\n}\n\n.toggle-switch input {\n\tdisplay: none;\n}\n\n.toggle-switch label {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tcursor: pointer;\n}\n\n.toggle-icon {\n\tposition: absolute;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\twidth: 20px;\n\theight: 20px;\n\ttransition: transform 0.3s ease;\n}\n\n.toggle-icon-metric {\n\tbackground: url(\"../img/metric.svg\") center/cover no-repeat;\n\tright: 3.5px;\n\ttop: 4.5px;\n\ttransform: translateX(0%);\n}\n\n.toggle-icon-imperial {\n\tbackground: url(\"../img/imperial.svg\") center/cover no-repeat;\n\tleft: 5px;\n\ttop: 5px;\n\ttransform: translateX(0%);\n}\n\n.slider {\n\tposition: absolute;\n\ttop: 3px;\n\tleft: 5px;\n\twidth: 24px;\n\theight: 24px;\n\tbackground-color: #2ca9bc;\n\tborder-radius: 50%;\n\ttransition: transform 0.3s ease;\n\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\ninput:checked + label .slider {\n\ttransform: translateX(33px);\n}\n\nfooter {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 1rem;\n\tpadding: 0.35rem 0rem;\n}\n\nfooter a {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tgap: 0.6rem;\n\ttext-decoration: none;\n\tfont-size: 1.1rem;\n\tfont-weight: 500;\n\tcolor: #dddddd;\n}\n\nfooter p {\n\tmargin: 0.5rem 0;\n}\n\nfooter a:hover,\nfooter a:active {\n\tcolor: #ffffff;\n}\n\nfooter a:hover img,\nfooter a:active img {\n\tfilter: brightness(1.2);\n}\n\n.at-symbol {\n\tfont-weight: 900;\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system,\n\t\tBlinkMacSystemFont,\n\t\t\"Segoe UI\",\n\t\tRoboto,\n\t\tOxygen,\n\t\tUbuntu,\n\t\tCantarell,\n\t\t\"Open Sans\",\n\t\t\"Helvetica Neue\",\n\t\tsans-serif;\n}\n\nfooter img {\n\twidth: 2rem;\n\theight: auto;\n}\n\n.page-container {\n\tdisplay: grid;\n\tgrid-template-rows: min-content 1fr;\n\tpadding: 3rem;\n\tpadding-bottom: 0;\n\tgap: 1.5rem;\n}\n\n.current-weather {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tgap: 2rem;\n\tpadding: 0 1rem;\n}\n\n.current-info {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n}\n\n.current-data {\n\tdisplay: flex;\n\tgap: 0.5rem;\n}\n\n.current-icon {\n\twidth: 7rem;\n\theight: auto;\n}\n\n.current-details {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.5rem;\n}\n\n.current-min-max {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2.5rem;\n}\n\n.current-info h2,\n.current-info h3,\n.current-info h4,\n.current-info h5 {\n\tmargin: 0;\n}\n\n.current-info h2 {\n\tfont-size: 2rem;\n\tfont-weight: 900;\n}\n\n.current-info h3 {\n\tfont-size: 3rem;\n}\n\n.current-info h4 {\n\tfont-size: 2rem;\n}\n\n.current-info h5 {\n\tfont-size: 1.2rem;\n}\n\n.more-weather {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(5, max-content);\n\t/* justify-content: space-between; */\n\tgap: 2.5rem;\n\tgrid-row-gap: 0.25rem;\n\tgrid-template-rows: repeat(3, 1fr);\n\talign-items: center;\n\t/* padding: 0 1rem; */\n}\n\n.more-weather-info {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.5rem;\n}\n\n.more-weather-icon {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.more-weather-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.more-weather-title {\n\tmargin: 0;\n\tfont-size: 1rem;\n}\n\n.more-weather-value {\n\tmargin: 0;\n\tfont-size: 1.5rem;\n}\n\n.main {\n\tdisplay: flex;\n\tgap: 1rem;\n\tjustify-content: space-between;\n}\n\n.bottom {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: calc(100vw - 6rem);\n}\n\ninput[type=\"radio\"]:hover + label,\ninput[type=\"radio\"]:checked + label {\n\tbackground-color: #dddddd;\n\tcolor: #15202b;\n}\n\ninput[type=\"radio\"] + label {\n\tborder: 0;\n\tcolor: #dddddd;\n\tfont-size: 1.2rem;\n\t/* border: 3px solid #dddddd; */\n}\n\n.container {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tpadding-left: 3.5rem;\n}\n\n.choice {\n\tdisplay: inline-block;\n\tmargin-right: 10px;\n}\n\n.container label {\n\tdisplay: inline-block;\n\tpadding: 10px 20px;\n\tborder-top-left-radius: 4px;\n\tborder-top-right-radius: 4px;\n\tcolor: #fff;\n\tfont-size: 16px;\n\tfont-weight: 900;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n}\n\ninput[type=\"radio\"] {\n\tdisplay: none;\n}\n\n.hourly-forecast {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.back-btn,\n.next-btn {\n\tfont-size: 2.5rem;\n\tcolor: #15202b;\n\tfont-weight: 900;\n\tbackground-color: #dddddd;\n\tborder: none;\n\tcursor: pointer;\n}\n\n.back-btn:hover,\n.next-btn:hover {\n\tfilter: brightness(1.2);\n}\n\n.daily-forecast {\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.forecast {\n\theight: 100%;\n\tborder: 3px solid #dddddd;\n\tborder-radius: 10px;\n}\n\n.forecast-slider {\n\tdisplay: flex;\n\toverflow-x: hidden;\n\tgap: 1rem;\n\tpadding: 0 1rem;\n}\n\n.hourly-card {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 0.5rem;\n\tmargin: 1rem 0.25rem;\n\tmin-width: 150px;\n\tborder: 1px solid #dddddd;\n\tborder-radius: 15px;\n\tbackground-color: #ffffff17;\n\tcursor: pointer;\n\ttransition: all 0.3s ease;\n}\n\n.hourly-card:hover {\n\tbackground-color: #ffffff26;\n}\n\n.hourly-icon {\n\twidth: 3rem;\n\theight: auto;\n}\n\n.more-info-rain,\n.more-info-snow {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 0.25rem;\n}\n.more-info-hourly {\n\tdisplay: flex;\n}\n\n.more-info-hourly img {\n\twidth: 1.5rem;\n\theight: auto;\n}\n\n.more-info-hourly {\n\talign-items: center;\n\tgap: 0.75rem;\n}\n\n.hourly-card * {\n\tmargin: 0;\n}\n\n.hourly-time {\n\tfont-size: 1.3rem;\n\tfont-weight: 900;\n}\n\n.hourly-temp {\n\tfont-size: 1.5rem;\n\tfont-weight: 900;\n}\n\n.hourly-condition {\n\tfont-size: 1.2rem;\n\tfont-weight: 900;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixTQUFTLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxlQUFlLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxlQUFlLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sUUFBUSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxV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QU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHVCQUF1QixPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUss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QUMsZ0JBQWdCLENBQUMsQ0FBQ2lJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3hFLElBQU14RyxLQUFLLEdBQUcxQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQ3pLLEtBQUs7RUFDM0Q4TCxrREFBVSxDQUFDSSxLQUFLLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYxQixRQUFRLENBQUNDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQ2lJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQ2xFSix1REFBZSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUY5SCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQ2lJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxZQUFNO0VBQy9ESix1REFBZSxDQUFDLENBQUM7QUFDbEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9zcmMvanMvVUkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9hbGwuY3NzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9hbGwuY3NzP2FkNTYiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vc3JjL2Nzcy9ub3JtYWxpemUuY3NzPzZkNTQiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItd2hpei93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci13aGl6L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItd2hpei93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLXdoaXovd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItd2hpei8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaWNvbiBmcm9tIFwiLi4vaW1nL2ljb24uc3ZnXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9pbWcvc2VhcmNoLnN2Z1wiO1xuaW1wb3J0IEdpdEh1YiBmcm9tIFwiLi4vaW1nL2dpdC5zdmdcIjtcbmltcG9ydCB0ZW1wIGZyb20gXCIuLi9pbWcvdGVtcC5zdmdcIjtcbmltcG9ydCByYWluIGZyb20gXCIuLi9pbWcvcmFpbi5zdmdcIjtcbmltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi4vaW1nL2h1bWlkaXR5LnN2Z1wiO1xuaW1wb3J0IHdpbmQgZnJvbSBcIi4uL2ltZy93aW5kLnN2Z1wiO1xuaW1wb3J0IHNub3cgZnJvbSBcIi4uL2ltZy9zbm93LnN2Z1wiO1xuaW1wb3J0IGFpciBmcm9tIFwiLi4vaW1nL2Fpci5zdmdcIjtcbmltcG9ydCBzdW5yaXNlIGZyb20gXCIuLi9pbWcvc3VucmlzZS5zdmdcIjtcbmltcG9ydCBzdW5zZXQgZnJvbSBcIi4uL2ltZy9zdW5zZXQuc3ZnXCI7XG5pbXBvcnQgcHJlc3N1cmUgZnJvbSBcIi4uL2ltZy9wcmVzc3VyZS5zdmdcIjtcbmltcG9ydCB2aXNpYmlsaXR5IGZyb20gXCIuLi9pbWcvdmlzaWJpbGl0eS5zdmdcIjtcbmltcG9ydCB1diBmcm9tIFwiLi4vaW1nL3V2LnN2Z1wiO1xuaW1wb3J0IHJhaW5kcm9wcyBmcm9tIFwiLi4vaW1nL3JhaW5kcm9wcy5zdmdcIjtcbmltcG9ydCBzbm93Q2xvdWQgZnJvbSBcIi4uL2ltZy9zbm93LWNsb3VkLnN2Z1wiO1xuaW1wb3J0IG1vb24gZnJvbSBcIi4uL2ltZy9tb29uL2Z1bGwtbW9vbi5zdmdcIjtcbmltcG9ydCBjbG91ZCBmcm9tIFwiLi4vaW1nL2Nsb3VkLnN2Z1wiO1xuXG5sZXQgd2VhdGhlckRhdGEgPSB7fTtcblxuY29uc3QgZ2V0QWlyUXVhbGl0eSA9IChhcWkpID0+IHtcblx0aWYgKGFxaSA8PSA1MCkge1xuXHRcdHJldHVybiBcIkdvb2RcIjtcblx0fVxuXHRpZiAoYXFpIDw9IDEwMCkge1xuXHRcdHJldHVybiBcIk1vZGVyYXRlXCI7XG5cdH1cblx0aWYgKGFxaSA8PSAxNTApIHtcblx0XHRyZXR1cm4gXCJVbmhlYWx0aHkgZm9yIFNlbnNpdGl2ZSBHcm91cHNcIjtcblx0fVxuXHRpZiAoYXFpIDw9IDIwMCkge1xuXHRcdHJldHVybiBcIlVuaGVhbHRoeVwiO1xuXHR9XG5cdGlmIChhcWkgPD0gMzAwKSB7XG5cdFx0cmV0dXJuIFwiVmVyeSBVbmhlYWx0aHlcIjtcblx0fVxuXHRyZXR1cm4gXCJIYXphcmRvdXNcIjtcbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlXZWF0aGVyRGF0YShkYXRhKSB7XG5cdGxldCBtb29uUGhhc2UgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLm1vb25fcGhhc2U7XG5cdG1vb25QaGFzZSA9IG1vb25QaGFzZS5yZXBsYWNlKFwiIFwiLCBcIi1cIik7XG5cdG1vb25QaGFzZSA9IG1vb25QaGFzZS50b0xvd2VyQ2FzZSgpO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1sb2NhdGlvblwiKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZTtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LWljb25cIixcblx0KS5zcmMgPSBgLi9pbWcvd2VhdGhlci8ke2RhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbi5zbGljZSgyOSl9YDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LXRlbXBcIixcblx0KS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC50ZW1wX2Z9IMKwRmA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1jb25kaXRpb25cIikudGV4dENvbnRlbnQgPVxuXHRcdGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LW1pblwiLFxuXHQpLnRleHRDb250ZW50ID0gYE1pbjogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2Z9IMKwRmA7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5jdXJyZW50LW1heFwiLFxuXHQpLnRleHRDb250ZW50ID0gYE1heDogJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2Z9IMKwRmA7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi50ZW1wXCIsXG5cdCkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Z9IMKwRmA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIikudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIucmFpblwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JWA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZFwiKS50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC53aW5kX21waH0gbXBoYDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5zbm93XCIsXG5cdCkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2Zfc25vd30lYDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haXJcIikudGV4dENvbnRlbnQgPSBgJHtnZXRBaXJRdWFsaXR5KFxuXHRcdGRhdGEuY3VycmVudC5haXJfcXVhbGl0eS5wbTJfNSxcblx0KX1gO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLnN1bnJpc2VcIixcblx0KS50ZXh0Q29udGVudCA9IGAke2RhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZX1gO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFwiLnN1bnNldFwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXR9YDtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcIi5wcmVzc3VyZVwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnByZXNzdXJlX21ifSBtYmA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIudmlzaWJpbGl0eVwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnZpc19taWxlc30gbWlsZXNgO1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnV2XCIpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5jdXJyZW50LnV2fWA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIucHJlY2lwaXRhdGlvblwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkudG90YWxwcmVjaXBfaW59IGluY2hlc2A7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIuc25vdy1kZXB0aFwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkudG90YWxwcmVjaXBfaW59IGluY2hlc2A7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWQtY292ZXJcIikudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuY2xvdWR9JWA7XG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XCIubW9vbi1waGFzZVwiLFxuXHQpLnRleHRDb250ZW50ID0gYCR7ZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5tb29uX3BoYXNlfWA7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcImltZ1thbHQ9J01vb24gUGhhc2UgaWNvbiddXCIsXG5cdCkuc3JjID0gYC4vaW1nL21vb24vJHttb29uUGhhc2V9LnN2Z2A7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocXVlcnkpIHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuXHRcdFx0YGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9kYXlzPTMmYXFpPXllcyZxPSR7cXVlcnl9JmtleT1mY2E1M2Q2Yzk5YjI0YjU5YWIzMjAxNDU1MjMyMTA3YCxcblx0XHRcdHsgbW9kZTogXCJjb3JzXCIgfSxcblx0XHQpO1xuXHRcdHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHRcdGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcblx0XHRkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGRpc3BsYXlXZWF0aGVyRGF0YShlcnJvcik7XG5cdH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheU5hdkJhcigpIHtcblx0Y29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXYtYmFyXCIpO1xuXG5cdC8vIENyZWF0ZSB0aGUgbG9nb1xuXHRjb25zdCBsb2dvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bG9nb0JveC5jbGFzc0xpc3QuYWRkKFwibG9nby1ib3hcIik7XG5cdGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRsb2dvLnNyYyA9IGljb247XG5cdGxvZ28uYWx0ID0gXCJsb2dvXCI7XG5cdGNvbnN0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRsb2dvVGV4dC50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBXaGl6XCI7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nbyk7XG5cdGxvZ29Cb3guYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xuXHRuYXZCYXIuYXBwZW5kQ2hpbGQobG9nb0JveCk7XG5cblx0Ly8gc2VhcmNoIGJhclxuXHRjb25zdCBzZWFyY2hCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRzZWFyY2hCb3guY2xhc3NMaXN0LmFkZChcInNlYXJjaC1ib3hcIik7XG5cdGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWlucHV0XCIpO1xuXHRzZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG5cdHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gXCJTZWFyY2hcIjtcblx0c2VhcmNoSW5wdXQuaWQgPSBcInNlYXJjaFwiO1xuXHRzZWFyY2hJbnB1dC5uYW1lID0gXCJzZWFyY2hcIjtcblx0c2VhcmNoQm94LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcblx0Y29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0c2VhcmNoQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtYnV0dG9uXCIpO1xuXHRzZWFyY2hCb3guYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblx0Y29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHNlYXJjaEljb24uc3JjID0gc2VhcmNoO1xuXHRzZWFyY2hJY29uLmFsdCA9IFwiU2VhcmNoIGljb25cIjtcblx0c2VhcmNoQnV0dG9uLmFwcGVuZENoaWxkKHNlYXJjaEljb24pO1xuXHRuYXZCYXIuYXBwZW5kQ2hpbGQoc2VhcmNoQm94KTtcblxuXHQvLyB0b2dnbGUgc3dpdGNoIGZvciBpbXBlcmlhbC9tZXRyaWMgdW5pdHNcblx0Y29uc3QgdG9nZ2xlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dG9nZ2xlQm94LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtc3dpdGNoXCIpO1xuXHRjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0Y2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcblx0Y2hlY2tCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ1bml0LXRvZ2dsZVwiKTtcblx0Y29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInVuaXQtdG9nZ2xlXCIpO1xuXHRjb25zdCBtZXRyaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0bWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvblwiKTtcblx0bWV0cmljLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvbi1tZXRyaWNcIik7XG5cdGNvbnN0IGltcGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGltcGVyaWFsLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGUtaWNvblwiKTtcblx0aW1wZXJpYWwuY2xhc3NMaXN0LmFkZChcInRvZ2dsZS1pY29uLWltcGVyaWFsXCIpO1xuXHRjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0c2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XG5cdGxhYmVsLmFwcGVuZENoaWxkKGltcGVyaWFsKTtcblx0bGFiZWwuYXBwZW5kQ2hpbGQobWV0cmljKTtcblx0bGFiZWwuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcblx0dG9nZ2xlQm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblx0dG9nZ2xlQm94LmFwcGVuZENoaWxkKGxhYmVsKTtcblx0bmF2QmFyLmFwcGVuZENoaWxkKHRvZ2dsZUJveCk7XG5cblx0cmV0dXJuIG5hdkJhcjtcbn1cblxuZnVuY3Rpb24gbWFrZVBhZ2VDb250YWluZXIoKSB7XG5cdGNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWNvbnRhaW5lclwiKTtcblx0cmV0dXJuIHBhZ2VDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG5cdGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG5cdC8vIExpbmsgdG8gbXkgZ2l0aHViIHByb2ZpbGVcblx0Y29uc3QgZ2l0SHViUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJQcm9maWxlLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDdcIjtcblxuXHQvLyBHaXRIdWIgbG9nb1xuXHRjb25zdCBnaXRIdWJQcm9maWxlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Z2l0SHViUHJvZmlsZUltZy5zcmMgPSBHaXRIdWI7XG5cdGdpdEh1YlByb2ZpbGVJbWcuYWx0ID0gXCJnaXRIdWIgTG9nb1wiO1xuXG5cdC8vIG15IEdpdGh1YiB1c2VybmFtZVxuXHRjb25zdCBnaXRIdWJQcm9maWxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRjb25zdCBhdFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHRhdFN5bWJvbC5jbGFzc0xpc3QuYWRkKFwiYXQtc3ltYm9sXCIpO1xuXHRhdFN5bWJvbC50ZXh0Q29udGVudCA9IFwiQFwiO1xuXHRjb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXHR1c2VybmFtZS50ZXh0Q29udGVudCA9IFwiU2hhaGlyLTQ3XCI7XG5cdGdpdEh1YlByb2ZpbGVUZXh0LmFwcGVuZENoaWxkKGF0U3ltYm9sKTtcblx0Z2l0SHViUHJvZmlsZVRleHQuYXBwZW5kQ2hpbGQodXNlcm5hbWUpO1xuXG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZUltZyk7XG5cdGdpdEh1YlByb2ZpbGUuYXBwZW5kQ2hpbGQoZ2l0SHViUHJvZmlsZVRleHQpO1xuXG5cdGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRzZXBhcmF0b3IudGV4dENvbnRlbnQgPSBcInxcIjtcblxuXHQvLyBMaW5rIHRvIHRoaXMgc291cmNlIGNvZGVcblx0Y29uc3QgZ2l0SHViUmVwbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXHRnaXRIdWJSZXBvLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9TaGFoaXItNDcvV2VhdGhlci1XaGl6XCI7XG5cdGdpdEh1YlJlcG8udGV4dENvbnRlbnQgPSBcIlNvdXJjZSBDb2RlXCI7XG5cblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlByb2ZpbGUpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblx0Zm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1YlJlcG8pO1xuXG5cdHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcigpIHtcblx0Y29uc3QgY3VycmVudFdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50V2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC13ZWF0aGVyXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y3VycmVudEluZm8uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtaW5mb1wiKTtcblxuXHRjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5cdGN1cnJlbnRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1sb2NhdGlvblwiKTtcblx0Y3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID0gXCJDdXJyZW50IExvY2F0aW9uXCI7XG5cdGN1cnJlbnRJbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbik7XG5cblx0Y29uc3QgY3VycmVudERhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50RGF0YS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1kYXRhXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0Y3VycmVudEljb24uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtaWNvblwiKTtcblx0Y3VycmVudEljb24uc3JjID0gaWNvbjtcblx0Y3VycmVudEljb24uYWx0ID0gXCJDdXJyZW50IHdlYXRoZXIgaWNvblwiO1xuXHRjdXJyZW50RGF0YS5hcHBlbmRDaGlsZChjdXJyZW50SWNvbik7XG5cblx0Y29uc3QgY3VycmVudERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjdXJyZW50RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1kZXRhaWxzXCIpO1xuXG5cdGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHRjdXJyZW50VGVtcC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC10ZW1wXCIpO1xuXHRjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IFwiODMgwrBGXCI7XG5cdGN1cnJlbnREZXRhaWxzLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcblxuXHRjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXHRjdXJyZW50Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LWNvbmRpdGlvblwiKTtcblx0Y3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IFwiU3VubnlcIjtcblx0Y3VycmVudERldGFpbHMuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG5cdGN1cnJlbnREYXRhLmFwcGVuZENoaWxkKGN1cnJlbnREZXRhaWxzKTtcblx0Y3VycmVudEluZm8uYXBwZW5kQ2hpbGQoY3VycmVudERhdGEpO1xuXG5cdGNvbnN0IGN1cnJlbnRNaW5NYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDVcIik7XG5cdGN1cnJlbnRNaW5NYXguY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbWluLW1heFwiKTtcblxuXHRjb25zdCBjdXJyZW50TWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cdGN1cnJlbnRNaW4uY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtbWluXCIpO1xuXHRjdXJyZW50TWluLnRleHRDb250ZW50ID0gXCJNaW46IDc1IMKwRlwiO1xuXHRjdXJyZW50TWluTWF4LmFwcGVuZENoaWxkKGN1cnJlbnRNaW4pO1xuXG5cdGNvbnN0IGN1cnJlbnRNYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblx0Y3VycmVudE1heC5jbGFzc0xpc3QuYWRkKFwiY3VycmVudC1tYXhcIik7XG5cdGN1cnJlbnRNYXgudGV4dENvbnRlbnQgPSBcIk1heDogOTAgwrBGXCI7XG5cdGN1cnJlbnRNaW5NYXguYXBwZW5kQ2hpbGQoY3VycmVudE1heCk7XG5cdGN1cnJlbnRJbmZvLmFwcGVuZENoaWxkKGN1cnJlbnRNaW5NYXgpO1xuXG5cdGN1cnJlbnRXZWF0aGVyLmFwcGVuZENoaWxkKGN1cnJlbnRJbmZvKTtcblx0cmV0dXJuIGN1cnJlbnRXZWF0aGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbmRpdkluZm8oaW1hZ2UsIHRpdGxlLCB2YWx1ZSwgY2xhc3NOYW1lKSB7XG5cdGNvbnN0IHdlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0d2VhdGhlckluZm8uY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlci1pbmZvXCIpO1xuXG5cdGNvbnN0IHdlYXRoZXJJbmZvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdHdlYXRoZXJJbmZvSWNvbi5jbGFzc0xpc3QuYWRkKFwibW9yZS13ZWF0aGVyLWljb25cIik7XG5cdHdlYXRoZXJJbmZvSWNvbi5zcmMgPSBpbWFnZTtcblx0d2VhdGhlckluZm9JY29uLmFsdCA9IGAke3RpdGxlfSBpY29uYDtcblx0d2VhdGhlckluZm8uYXBwZW5kQ2hpbGQod2VhdGhlckluZm9JY29uKTtcblxuXHRjb25zdCB3ZWF0aGVySW5mb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR3ZWF0aGVySW5mb1RleHQuY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlci10ZXh0XCIpO1xuXG5cdGNvbnN0IHdlYXRoZXJJbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHdlYXRoZXJJbmZvVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlci10aXRsZVwiKTtcblx0d2VhdGhlckluZm9UaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG5cdGNvbnN0IHdlYXRoZXJJbmZvVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5cdHdlYXRoZXJJbmZvVmFsdWUuY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlci12YWx1ZVwiKTtcblx0d2VhdGhlckluZm9WYWx1ZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdHdlYXRoZXJJbmZvVmFsdWUudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0d2VhdGhlckluZm9UZXh0LmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvVGl0bGUpO1xuXHR3ZWF0aGVySW5mb1RleHQuYXBwZW5kQ2hpbGQod2VhdGhlckluZm9WYWx1ZSk7XG5cdHdlYXRoZXJJbmZvLmFwcGVuZENoaWxkKHdlYXRoZXJJbmZvVGV4dCk7XG5cblx0cmV0dXJuIHdlYXRoZXJJbmZvO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TW9yZVdlYXRoZXIoKSB7XG5cdGNvbnN0IG1vcmVXZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0bW9yZVdlYXRoZXIuY2xhc3NMaXN0LmFkZChcIm1vcmUtd2VhdGhlclwiKTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSW5kaXZJbmZvKHRlbXAsIFwiRmVlbHMgTGlrZVwiLCBcIjgzIMKwRlwiLCBcInRlbXBcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVJbmRpdkluZm8oaHVtaWRpdHksIFwiSHVtaWRpdHlcIiwgXCI4MyVcIiwgXCJodW1pZGl0eVwiKSxcblx0KTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoXG5cdFx0Y3JlYXRlSW5kaXZJbmZvKHJhaW4sIFwiQ2hhbmNlIG9mIFJhaW5cIiwgXCIwJVwiLCBcInJhaW5cIiksXG5cdCk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyh3aW5kLCBcIldpbmRcIiwgXCI1IG1waFwiLCBcIndpbmRcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVJbmRpdkluZm8oc25vd0Nsb3VkLCBcIkNoYW5jZSBvZiBTbm93XCIsIFwiMCVcIiwgXCJzbm93XCIpLFxuXHQpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8oYWlyLCBcIkFpciBRdWFsaXR5XCIsIFwiR29vZFwiLCBcImFpclwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZUluZGl2SW5mbyhzdW5yaXNlLCBcIlN1bnJpc2VcIiwgXCI2OjAwIEFNXCIsIFwic3VucmlzZVwiKSxcblx0KTtcblx0bW9yZVdlYXRoZXIuYXBwZW5kQ2hpbGQoXG5cdFx0Y3JlYXRlSW5kaXZJbmZvKHN1bnNldCwgXCJTdW5zZXRcIiwgXCI2OjAwIFBNXCIsIFwic3Vuc2V0XCIpLFxuXHQpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVJbmRpdkluZm8ocHJlc3N1cmUsIFwiUHJlc3N1cmVcIiwgXCIxMDAwIG1iXCIsIFwicHJlc3N1cmVcIiksXG5cdCk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZUluZGl2SW5mbyh2aXNpYmlsaXR5LCBcIlZpc2liaWxpdHlcIiwgXCIxMCBtaVwiLCBcInZpc2liaWxpdHlcIiksXG5cdCk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZUluZGl2SW5mbyh1diwgXCJVViBJbmRleFwiLCBcIjBcIiwgXCJ1dlwiKSk7XG5cdG1vcmVXZWF0aGVyLmFwcGVuZENoaWxkKFxuXHRcdGNyZWF0ZUluZGl2SW5mbyhyYWluZHJvcHMsIFwiUHJlY2lwaXRhdGlvblwiLCBcIjAgaW5cIiwgXCJwcmVjaXBpdGF0aW9uXCIpLFxuXHQpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVJbmRpdkluZm8oc25vdywgXCJTbm93XCIsIFwiMCBpblwiLCBcInNub3ctZGVwdGhcIikpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVJbmRpdkluZm8oY2xvdWQsIFwiQ2xvdWQgQ292ZXJcIiwgXCIwJVwiLCBcImNsb3VkLWNvdmVyXCIpLFxuXHQpO1xuXHRtb3JlV2VhdGhlci5hcHBlbmRDaGlsZChcblx0XHRjcmVhdGVJbmRpdkluZm8obW9vbiwgXCJNb29uIFBoYXNlXCIsIFwiV2FuaW5nIEdpYmJvdXNcIiwgXCJtb29uLXBoYXNlXCIpLFxuXHQpO1xuXHRyZXR1cm4gbW9yZVdlYXRoZXI7XG59XG5cbmZ1bmN0aW9uIGNob29zZUZvcmVjYXN0KCkge1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuXHRjb25zdCBmaXJzdENob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGZpcnN0Q2hvaWNlLmNsYXNzTGlzdC5hZGQoXCJjaG9pY2VcIik7XG5cblx0Y29uc3QgaG91cmx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRob3VybHkudHlwZSA9IFwicmFkaW9cIjtcblx0aG91cmx5LmlkID0gXCJob3VybHlcIjtcblx0aG91cmx5Lm5hbWUgPSBcImZvcmVjYXN0XCI7XG5cdGhvdXJseS52YWx1ZSA9IFwiaG91cmx5XCI7XG5cdGhvdXJseS5jaGVja2VkID0gdHJ1ZTtcblx0Y29uc3QgaG91cmx5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5cdGhvdXJseUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImhvdXJseVwiKTtcblx0aG91cmx5TGFiZWwudGV4dENvbnRlbnQgPSBcIkhvdXJseVwiO1xuXHRmaXJzdENob2ljZS5hcHBlbmRDaGlsZChob3VybHkpO1xuXHRmaXJzdENob2ljZS5hcHBlbmRDaGlsZChob3VybHlMYWJlbCk7XG5cblx0Y29uc3Qgc2Vjb25kQ2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0c2Vjb25kQ2hvaWNlLmNsYXNzTGlzdC5hZGQoXCJjaG9pY2VcIik7XG5cblx0Y29uc3QgZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRkYXkudHlwZSA9IFwicmFkaW9cIjtcblx0ZGF5LmlkID0gXCJkYXlcIjtcblx0ZGF5Lm5hbWUgPSBcImZvcmVjYXN0XCI7XG5cdGRheS52YWx1ZSA9IFwiZGF5XCI7XG5cdGNvbnN0IGRheUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuXHRkYXlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXlcIik7XG5cdGRheUxhYmVsLnRleHRDb250ZW50ID0gXCJOZXh0IDIgZGF5c1wiO1xuXHRzZWNvbmRDaG9pY2UuYXBwZW5kQ2hpbGQoZGF5KTtcblx0c2Vjb25kQ2hvaWNlLmFwcGVuZENoaWxkKGRheUxhYmVsKTtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RDaG9pY2UpO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kQ2hvaWNlKTtcblxuXHRyZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBtYWtlSG91cmx5Q2FyZCgpIHtcblx0Y29uc3QgaG91cmx5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGhvdXJseUNhcmQuY2xhc3NMaXN0LmFkZChcImhvdXJseS1jYXJkXCIpO1xuXG5cdGNvbnN0IGhvdXJseVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdGhvdXJseVRpbWUuY2xhc3NMaXN0LmFkZChcImhvdXJseS10aW1lXCIpO1xuXHRob3VybHlUaW1lLnRleHRDb250ZW50ID0gXCIxMjowMCBQTVwiO1xuXHRob3VybHlDYXJkLmFwcGVuZENoaWxkKGhvdXJseVRpbWUpO1xuXG5cdGNvbnN0IGhvdXJseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRob3VybHlJY29uLmNsYXNzTGlzdC5hZGQoXCJob3VybHktaWNvblwiKTtcblx0aG91cmx5SWNvbi5zcmMgPSBpY29uO1xuXHRob3VybHlJY29uLmFsdCA9IFwid2VhdGhlciBpY29uXCI7XG5cdGhvdXJseUNhcmQuYXBwZW5kQ2hpbGQoaG91cmx5SWNvbik7XG5cblx0Y29uc3QgaG91cmx5VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblx0aG91cmx5VGVtcC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5LXRlbXBcIik7XG5cdGhvdXJseVRlbXAudGV4dENvbnRlbnQgPSBcIjgzIMKwRlwiO1xuXHRob3VybHlDYXJkLmFwcGVuZENoaWxkKGhvdXJseVRlbXApO1xuXG5cdGNvbnN0IGhvdXJseUNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNVwiKTtcblx0aG91cmx5Q29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJob3VybHktY29uZGl0aW9uXCIpO1xuXHRob3VybHlDb25kaXRpb24udGV4dENvbnRlbnQgPSBcIlN1bm55XCI7XG5cdGhvdXJseUNhcmQuYXBwZW5kQ2hpbGQoaG91cmx5Q29uZGl0aW9uKTtcblxuXHRjb25zdCBtb3JlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vcmVJbmZvLmNsYXNzTGlzdC5hZGQoXCJtb3JlLWluZm8taG91cmx5XCIpO1xuXG5cdGNvbnN0IG1vcmVJbmZvUmFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vcmVJbmZvUmFpbi5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXJhaW5cIik7XG5cblx0Y29uc3QgbW9yZUluZm9SYWluSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdG1vcmVJbmZvUmFpbkljb24uY2xhc3NMaXN0LmFkZChcIm1vcmUtaW5mby1yYWluLWljb25cIik7XG5cdG1vcmVJbmZvUmFpbkljb24uc3JjID0gcmFpbjtcblx0bW9yZUluZm9SYWluSWNvbi5hbHQgPSBcInJhaW4gaWNvblwiO1xuXHRtb3JlSW5mb1JhaW4uYXBwZW5kQ2hpbGQobW9yZUluZm9SYWluSWNvbik7XG5cblx0Y29uc3QgbW9yZUluZm9SYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcblx0bW9yZUluZm9SYWluVGV4dC5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXJhaW4tdGV4dFwiKTtcblx0bW9yZUluZm9SYWluVGV4dC50ZXh0Q29udGVudCA9IFwiMCVcIjtcblx0bW9yZUluZm9SYWluLmFwcGVuZENoaWxkKG1vcmVJbmZvUmFpblRleHQpO1xuXHRtb3JlSW5mby5hcHBlbmRDaGlsZChtb3JlSW5mb1JhaW4pO1xuXG5cdGNvbnN0IG1vcmVJbmZvU25vdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1vcmVJbmZvU25vdy5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXNub3dcIik7XG5cblx0Y29uc3QgbW9yZUluZm9Tbm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdG1vcmVJbmZvU25vd0ljb24uY2xhc3NMaXN0LmFkZChcIm1vcmUtaW5mby1zbm93LWljb25cIik7XG5cdG1vcmVJbmZvU25vd0ljb24uc3JjID0gc25vdztcblx0bW9yZUluZm9Tbm93SWNvbi5hbHQgPSBcInNub3cgaWNvblwiO1xuXHRtb3JlSW5mb1Nub3cuYXBwZW5kQ2hpbGQobW9yZUluZm9Tbm93SWNvbik7XG5cblx0Y29uc3QgbW9yZUluZm9Tbm93VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcblx0bW9yZUluZm9Tbm93VGV4dC5jbGFzc0xpc3QuYWRkKFwibW9yZS1pbmZvLXNub3ctdGV4dFwiKTtcblx0bW9yZUluZm9Tbm93VGV4dC50ZXh0Q29udGVudCA9IFwiMCVcIjtcblx0bW9yZUluZm9Tbm93LmFwcGVuZENoaWxkKG1vcmVJbmZvU25vd1RleHQpO1xuXHRtb3JlSW5mby5hcHBlbmRDaGlsZChtb3JlSW5mb1Nub3cpO1xuXG5cdGhvdXJseUNhcmQuYXBwZW5kQ2hpbGQobW9yZUluZm8pO1xuXG5cdHJldHVybiBob3VybHlDYXJkO1xufVxuXG5mdW5jdGlvbiBtYWtlSG91cmx5Rm9yZWNhc3QoKSB7XG5cdGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcblxuXHRjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG5cdGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIjxcIjtcblx0Zm9yZWNhc3QuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG5cblx0Y29uc3QgZm9yZWNhc3RTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRmb3JlY2FzdFNsaWRlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtc2xpZGVyXCIpO1xuXHRmb3JlY2FzdC5hcHBlbmRDaGlsZChmb3JlY2FzdFNsaWRlcik7XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSArPSAxKSB7XG5cdFx0Zm9yZWNhc3RTbGlkZXIuYXBwZW5kQ2hpbGQobWFrZUhvdXJseUNhcmQoKSk7XG5cdH1cblxuXHRjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0bmV4dEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV4dC1idG5cIik7XG5cdG5leHRCdG4udGV4dENvbnRlbnQgPSBcIj5cIjtcblx0Zm9yZWNhc3QuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG5cblx0cmV0dXJuIGZvcmVjYXN0O1xufVxuXG5mdW5jdGlvbiBtYWtlRm9yZWNhc3QoKSB7XG5cdGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Zm9yZWNhc3QuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0XCIpO1xuXHRmb3JlY2FzdC5jbGFzc0xpc3QuYWRkKFwiaG91cmx5LWZvcmVjYXN0XCIpO1xuXHRyZXR1cm4gZm9yZWNhc3Q7XG59XG5cbmZ1bmN0aW9uIG1ha2VNYWluQ29udGFpbmVyKCkge1xuXHRjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cdG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheUN1cnJlbnRXZWF0aGVyKCkpO1xuXHRtYWluLmFwcGVuZENoaWxkKGRpc3BsYXlNb3JlV2VhdGhlcigpKTtcblx0cGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZnVuY3Rpb24gYm90dG9tQ29udGFpbmVyKCkge1xuXHRjb25zdCBwYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWdlLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgYm90dG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Ym90dG9tLmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XG5cdGJvdHRvbS5hcHBlbmRDaGlsZChjaG9vc2VGb3JlY2FzdCgpKTtcblx0Ym90dG9tLmFwcGVuZENoaWxkKG1ha2VGb3JlY2FzdCgpKTtcblx0cGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b20pO1xufVxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIHtcblx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblx0Y29udGVudC5hcHBlbmRDaGlsZChkaXNwbGF5TmF2QmFyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKG1ha2VQYWdlQ29udGFpbmVyKCkpO1xuXHRjb250ZW50LmFwcGVuZENoaWxkKGRpc3BsYXlGb290ZXIoKSk7XG5cdG1ha2VNYWluQ29udGFpbmVyKCk7XG5cdGJvdHRvbUNvbnRhaW5lcigpO1xuXHRtYWtlSG91cmx5Rm9yZWNhc3QoKTtcblx0Z2V0V2VhdGhlcihcIkxvcyBBbmdlbGVzXCIpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3QoKSB7XG5cdGNvbnN0IGZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdFwiKTtcblx0Y29uc3QgY2hvaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImZvcmVjYXN0XCJdOmNoZWNrZWQnKS52YWx1ZTtcblx0Y29uc29sZS5sb2coY2hvaWNlKTtcblx0aWYgKGNob2ljZSA9PT0gXCJob3VybHlcIikge1xuXHRcdGZvcmVjYXN0LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0Zm9yZWNhc3QuY2xhc3NMaXN0LnJlbW92ZShcImRhaWx5LWZvcmVjYXN0XCIpO1xuXHRcdGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJob3VybHktZm9yZWNhc3RcIik7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yZWNhc3QuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRmb3JlY2FzdC5jbGFzc0xpc3QucmVtb3ZlKFwiaG91cmx5LWZvcmVjYXN0XCIpO1xuXHRcdGZvcmVjYXN0LmNsYXNzTGlzdC5hZGQoXCJkYWlseS1mb3JlY2FzdFwiKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBwYWdlTG9hZDtcbmV4cG9ydCB7IGdldFdlYXRoZXIsIGRpc3BsYXlGb3JlY2FzdCB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9iZy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbWV0cmljLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltZy9pbXBlcmlhbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHRcdHRvIHJpZ2h0LFxuXHRcdFx0cmdiYSgwLCAwLCAwLCAwLjQpLFxuXHRcdFx0cmdiYSgwLCAwLCAwLCAwLjQpXG5cdFx0KSxcblx0XHR1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGZvbnQtZmFtaWx5OlxuXHRcdHN5c3RlbS11aSxcblx0XHQtYXBwbGUtc3lzdGVtLFxuXHRcdEJsaW5rTWFjU3lzdGVtRm9udCxcblx0XHRcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLFxuXHRcdE94eWdlbixcblx0XHRVYnVudHUsXG5cdFx0Q2FudGFyZWxsLFxuXHRcdFwiT3BlbiBTYW5zXCIsXG5cdFx0XCJIZWx2ZXRpY2EgTmV1ZVwiLFxuXHRcdHNhbnMtc2VyaWY7XG59XG5cbmRpdiNjb250ZW50IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnIgbWluLWNvbnRlbnQ7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWluLWhlaWdodDogMTAwdmg7XG5cdGNvbG9yOiAjZGRkZGRkO1xuXHRmb250LWZhbWlseTpcblx0XHRzeXN0ZW0tdWksXG5cdFx0LWFwcGxlLXN5c3RlbSxcblx0XHRCbGlua01hY1N5c3RlbUZvbnQsXG5cdFx0XCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90byxcblx0XHRPeHlnZW4sXG5cdFx0VWJ1bnR1LFxuXHRcdENhbnRhcmVsbCxcblx0XHRcIk9wZW4gU2Fuc1wiLFxuXHRcdFwiSGVsdmV0aWNhIE5ldWVcIixcblx0XHRzYW5zLXNlcmlmO1xufVxuXG4ubmF2LWJhciB7XG5cdHBvc2l0aW9uOiBzdGlja3k7XG5cdHRvcDogMDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxNTIwMmI7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcblx0ei1pbmRleDogMjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDJyZW07XG5cdHBhZGRpbmc6IDAgMXJlbTtcblx0cGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5zZWFyY2gtYm94IHtcblx0ZmxleDogMTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAxcmVtO1xuXHRwYWRkaW5nOiAwIDFyZW07XG5cdHBhZGRpbmctcmlnaHQ6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG5cdGJvcmRlci1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuXHRib3JkZXI6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRib3JkZXI6IGhzbCgwLCAwJSwgMTguODIlKTtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZzogMC41cmVtO1xuXHRmbGV4OiAxO1xufVxuXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG5cdGJvcmRlcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMxM2U0Yjtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0cGFkZGluZzogMC41cmVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDMuNXJlbTtcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcblx0Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcbn1cblxuLnNlYXJjaC1ib3ggaW1nIHtcblx0d2lkdGg6IDEuNXJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4uc2VhcmNoLWJveCBidXR0b246aG92ZXIsXG4uc2VhcmNoLWJveCBidXR0b246YWN0aXZlIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5sb2dvLWJveCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41cmVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvLWJveDpob3Zlcixcbi5sb2dvLWJveDphY3RpdmUge1xuXHRmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbn1cblxuLmxvZ28tYm94IGgxIHtcblx0Zm9udC1zaXplOiAxLjZyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGNvbG9yOiAjZGRkZGRkO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dvLWJveCBpbWcge1xuXHR3aWR0aDogMnJlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4udG9nZ2xlLXN3aXRjaCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDY1cHg7XG5cdGhlaWdodDogMzBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzZiNzU3ZTtcblx0Ym9yZGVyLXJhZGl1czogMjZweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Ym9yZGVyOiAzcHggc29saWQgIzJjYTliYztcbn1cblxuLnRvZ2dsZS1zd2l0Y2ggaW5wdXQge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9nZ2xlLXN3aXRjaCBsYWJlbCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50b2dnbGUtaWNvbiB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcbn1cblxuLnRvZ2dsZS1pY29uLW1ldHJpYyB7XG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuXHRyaWdodDogMy41cHg7XG5cdHRvcDogNC41cHg7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG59XG5cbi50b2dnbGUtaWNvbi1pbXBlcmlhbCB7XG5cdGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xuXHRsZWZ0OiA1cHg7XG5cdHRvcDogNXB4O1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xufVxuXG4uc2xpZGVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDNweDtcblx0bGVmdDogNXB4O1xuXHR3aWR0aDogMjRweDtcblx0aGVpZ2h0OiAyNHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmNhOWJjO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmlucHV0OmNoZWNrZWQgKyBsYWJlbCAuc2xpZGVyIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMzcHgpO1xufVxuXG5mb290ZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDFyZW07XG5cdHBhZGRpbmc6IDAuMzVyZW0gMHJlbTtcbn1cblxuZm9vdGVyIGEge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC42cmVtO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogI2RkZGRkZDtcbn1cblxuZm9vdGVyIHAge1xuXHRtYXJnaW46IDAuNXJlbSAwO1xufVxuXG5mb290ZXIgYTpob3ZlcixcbmZvb3RlciBhOmFjdGl2ZSB7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuXG5mb290ZXIgYTpob3ZlciBpbWcsXG5mb290ZXIgYTphY3RpdmUgaW1nIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5hdC1zeW1ib2wge1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRmb250LWZhbWlseTpcblx0XHRzeXN0ZW0tdWksXG5cdFx0LWFwcGxlLXN5c3RlbSxcblx0XHRCbGlua01hY1N5c3RlbUZvbnQsXG5cdFx0XCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90byxcblx0XHRPeHlnZW4sXG5cdFx0VWJ1bnR1LFxuXHRcdENhbnRhcmVsbCxcblx0XHRcIk9wZW4gU2Fuc1wiLFxuXHRcdFwiSGVsdmV0aWNhIE5ldWVcIixcblx0XHRzYW5zLXNlcmlmO1xufVxuXG5mb290ZXIgaW1nIHtcblx0d2lkdGg6IDJyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLnBhZ2UtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG5cdHBhZGRpbmc6IDNyZW07XG5cdHBhZGRpbmctYm90dG9tOiAwO1xuXHRnYXA6IDEuNXJlbTtcbn1cblxuLmN1cnJlbnQtd2VhdGhlciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0Z2FwOiAycmVtO1xuXHRwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5jdXJyZW50LWluZm8ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuNXJlbTtcbn1cblxuLmN1cnJlbnQtZGF0YSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMC41cmVtO1xufVxuXG4uY3VycmVudC1pY29uIHtcblx0d2lkdGg6IDdyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLmN1cnJlbnQtZGV0YWlscyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC41cmVtO1xufVxuXG4uY3VycmVudC1taW4tbWF4IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAyLjVyZW07XG59XG5cbi5jdXJyZW50LWluZm8gaDIsXG4uY3VycmVudC1pbmZvIGgzLFxuLmN1cnJlbnQtaW5mbyBoNCxcbi5jdXJyZW50LWluZm8gaDUge1xuXHRtYXJnaW46IDA7XG59XG5cbi5jdXJyZW50LWluZm8gaDIge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5jdXJyZW50LWluZm8gaDMge1xuXHRmb250LXNpemU6IDNyZW07XG59XG5cbi5jdXJyZW50LWluZm8gaDQge1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbi5jdXJyZW50LWluZm8gaDUge1xuXHRmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm1vcmUtd2VhdGhlciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1heC1jb250ZW50KTtcblx0LyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuXHRnYXA6IDIuNXJlbTtcblx0Z3JpZC1yb3ctZ2FwOiAwLjI1cmVtO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvKiBwYWRkaW5nOiAwIDFyZW07ICovXG59XG5cbi5tb3JlLXdlYXRoZXItaW5mbyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41cmVtO1xufVxuXG4ubW9yZS13ZWF0aGVyLWljb24ge1xuXHR3aWR0aDogM3JlbTtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4ubW9yZS13ZWF0aGVyLXRleHQge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubW9yZS13ZWF0aGVyLXRpdGxlIHtcblx0bWFyZ2luOiAwO1xuXHRmb250LXNpemU6IDFyZW07XG59XG5cbi5tb3JlLXdlYXRoZXItdmFsdWUge1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubWFpbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXJlbTtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90dG9tIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNnJlbSk7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpob3ZlciArIGxhYmVsLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG5cdGNvbG9yOiAjMTUyMDJiO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCB7XG5cdGJvcmRlcjogMDtcblx0Y29sb3I6ICNkZGRkZGQ7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHQvKiBib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkOyAqL1xufVxuXG4uY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cGFkZGluZy1sZWZ0OiAzLjVyZW07XG59XG5cbi5jaG9pY2Uge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNvbnRhaW5lciBsYWJlbCB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMTBweCAyMHB4O1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmJhY2stYnRuLFxuLm5leHQtYnRuIHtcblx0Zm9udC1zaXplOiAyLjVyZW07XG5cdGNvbG9yOiAjMTUyMDJiO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhY2stYnRuOmhvdmVyLFxuLm5leHQtYnRuOmhvdmVyIHtcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XG59XG5cbi5kYWlseS1mb3JlY2FzdCB7XG59XG5cbi5oaWRlIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLmZvcmVjYXN0IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9yZWNhc3Qtc2xpZGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0b3ZlcmZsb3cteDogaGlkZGVuO1xuXHRnYXA6IDFyZW07XG5cdHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmhvdXJseS1jYXJkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGdhcDogMC41cmVtO1xuXHRtYXJnaW46IDFyZW0gMC4yNXJlbTtcblx0bWluLXdpZHRoOiAxNTBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcblx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5ob3VybHktY2FyZDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyNjtcbn1cblxuLmhvdXJseS1pY29uIHtcblx0d2lkdGg6IDNyZW07XG5cdGhlaWdodDogYXV0bztcbn1cblxuLm1vcmUtaW5mby1yYWluLFxuLm1vcmUtaW5mby1zbm93IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjI1cmVtO1xufVxuLm1vcmUtaW5mby1ob3VybHkge1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9yZS1pbmZvLWhvdXJseSBpbWcge1xuXHR3aWR0aDogMS41cmVtO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi5tb3JlLWluZm8taG91cmx5IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Z2FwOiAwLjc1cmVtO1xufVxuXG4uaG91cmx5LWNhcmQgKiB7XG5cdG1hcmdpbjogMDtcbn1cblxuLmhvdXJseS10aW1lIHtcblx0Zm9udC1zaXplOiAxLjNyZW07XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbi5ob3VybHktdGVtcCB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuXG4uaG91cmx5LWNvbmRpdGlvbiB7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRmb250LXdlaWdodDogOTAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2FsbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQzs7Ozs7eUNBS3FCO0NBQ3JCLDBCQUEwQjtDQUMxQiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1QsVUFBVTtDQUNWLGNBQWM7Q0FDZDs7Ozs7Ozs7Ozs7WUFXVztBQUNaOztBQUVBO0NBQ0MsYUFBYTtDQUNiLCtDQUErQztDQUMvQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZDs7Ozs7Ozs7Ozs7WUFXVztBQUNaOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsVUFBVTtDQUNWLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxlQUFlO0NBQ2Ysb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsT0FBTztDQUNQLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWiw2QkFBNkI7Q0FDN0IsMEJBQTBCO0NBQzFCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixPQUFPO0FBQ1I7O0FBRUE7Q0FDQyxhQUFh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QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxvQkFBb0I7Q0FDcEIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBOztDQUVDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdCQUFnQjtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0XFx0dG8gcmlnaHQsXFxuXFx0XFx0XFx0cmdiYSgwLCAwLCAwLCAwLjQpLFxcblxcdFxcdFxcdHJnYmEoMCwgMCwgMCwgMC40KVxcblxcdFxcdCksXFxuXFx0XFx0dXJsKFxcXCIuLi9pbWcvYmcucG5nXFxcIik7XFxuXFx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuXFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG5cXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRjb2xvcjogI2RkZGRkZDtcXG5cXHRmb250LWZhbWlseTpcXG5cXHRcXHRzeXN0ZW0tdWksXFxuXFx0XFx0LWFwcGxlLXN5c3RlbSxcXG5cXHRcXHRCbGlua01hY1N5c3RlbUZvbnQsXFxuXFx0XFx0XFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sXFxuXFx0XFx0T3h5Z2VuLFxcblxcdFxcdFVidW50dSxcXG5cXHRcXHRDYW50YXJlbGwsXFxuXFx0XFx0XFxcIk9wZW4gU2Fuc1xcXCIsXFxuXFx0XFx0XFxcIkhlbHZldGljYSBOZXVlXFxcIixcXG5cXHRcXHRzYW5zLXNlcmlmO1xcbn1cXG5cXG5kaXYjY29udGVudCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmciBtaW4tY29udGVudDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sXFxuXFx0XFx0QmxpbmtNYWNTeXN0ZW1Gb250LFxcblxcdFxcdFxcXCJTZWdvZSBVSVxcXCIsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdE94eWdlbixcXG5cXHRcXHRVYnVudHUsXFxuXFx0XFx0Q2FudGFyZWxsLFxcblxcdFxcdFxcXCJPcGVuIFNhbnNcXFwiLFxcblxcdFxcdFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuLm5hdi1iYXIge1xcblxcdHBvc2l0aW9uOiBzdGlja3k7XFxuXFx0dG9wOiAwO1xcblxcdGxlZnQ6IDA7XFxuXFx0cmlnaHQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE1MjAyYjtcXG5cXHR3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxuXFx0ei1pbmRleDogMjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxuXFx0cGFkZGluZy10b3A6IDAuMjVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDFyZW07XFxuXFx0cGFkZGluZzogMCAxcmVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG5cXHRib3JkZXItcmFkaXVzOiAzLjkzNzVyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0IHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiBoc2woMCwgMCUsIDE4LjgyJSk7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0cGFkZGluZzogMC41cmVtO1xcblxcdGZsZXg6IDE7XFxufVxcblxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzZTRiO1xcblxcdGNvbG9yOiAjZGRkZGRkO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAzLjVyZW07XFxuXFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMuOTM3NXJlbTtcXG5cXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy45Mzc1cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBpbWcge1xcblxcdHdpZHRoOiAxLjVyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uc2VhcmNoLWJveCBidXR0b246aG92ZXIsXFxuLnNlYXJjaC1ib3ggYnV0dG9uOmFjdGl2ZSB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5sb2dvLWJveCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMC41cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28tYm94OmhvdmVyLFxcbi5sb2dvLWJveDphY3RpdmUge1xcblxcdGZpbHRlcjogYnJpZ2h0bmVzcygxLjIpO1xcbn1cXG5cXG4ubG9nby1ib3ggaDEge1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxvZ28tYm94IGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHdpZHRoOiA2NXB4O1xcblxcdGhlaWdodDogMzBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3NTdlO1xcblxcdGJvcmRlci1yYWRpdXM6IDI2cHg7XFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjMmNhOWJjO1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCBpbnB1dCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnRvZ2dsZS1zd2l0Y2ggbGFiZWwge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0bGVmdDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9nZ2xlLWljb24ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuXFx0d2lkdGg6IDIwcHg7XFxuXFx0aGVpZ2h0OiAyMHB4O1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XFxufVxcblxcbi50b2dnbGUtaWNvbi1tZXRyaWMge1xcblxcdGJhY2tncm91bmQ6IHVybChcXFwiLi4vaW1nL21ldHJpYy5zdmdcXFwiKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcblxcdHJpZ2h0OiAzLjVweDtcXG5cXHR0b3A6IDQuNXB4O1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxufVxcblxcbi50b2dnbGUtaWNvbi1pbXBlcmlhbCB7XFxuXFx0YmFja2dyb3VuZDogdXJsKFxcXCIuLi9pbWcvaW1wZXJpYWwuc3ZnXFxcIikgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG5cXHRsZWZ0OiA1cHg7XFxuXFx0dG9wOiA1cHg7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG59XFxuXFxuLnNsaWRlciB7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogM3B4O1xcblxcdGxlZnQ6IDVweDtcXG5cXHR3aWR0aDogMjRweDtcXG5cXHRoZWlnaHQ6IDI0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJjYTliYztcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcXG5cXHRib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgbGFiZWwgLnNsaWRlciB7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMzcHgpO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAxcmVtO1xcblxcdHBhZGRpbmc6IDAuMzVyZW0gMHJlbTtcXG59XFxuXFxuZm9vdGVyIGEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjZyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxufVxcblxcbmZvb3RlciBwIHtcXG5cXHRtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlcixcXG5mb290ZXIgYTphY3RpdmUge1xcblxcdGNvbG9yOiAjZmZmZmZmO1xcbn1cXG5cXG5mb290ZXIgYTpob3ZlciBpbWcsXFxuZm9vdGVyIGE6YWN0aXZlIGltZyB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5hdC1zeW1ib2wge1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sXFxuXFx0XFx0QmxpbmtNYWNTeXN0ZW1Gb250LFxcblxcdFxcdFxcXCJTZWdvZSBVSVxcXCIsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdE94eWdlbixcXG5cXHRcXHRVYnVudHUsXFxuXFx0XFx0Q2FudGFyZWxsLFxcblxcdFxcdFxcXCJPcGVuIFNhbnNcXFwiLFxcblxcdFxcdFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuXFx0XFx0c2Fucy1zZXJpZjtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuXFx0d2lkdGg6IDJyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucGFnZS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuXFx0cGFkZGluZzogM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMDtcXG5cXHRnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtd2VhdGhlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z2FwOiAycmVtO1xcblxcdHBhZGRpbmc6IDAgMXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1kYXRhIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMC41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1pY29uIHtcXG5cXHR3aWR0aDogN3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jdXJyZW50LWRldGFpbHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmN1cnJlbnQtbWluLW1heCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMi41cmVtO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIGgyLFxcbi5jdXJyZW50LWluZm8gaDMsXFxuLmN1cnJlbnQtaW5mbyBoNCxcXG4uY3VycmVudC1pbmZvIGg1IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jdXJyZW50LWluZm8gaDIge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uY3VycmVudC1pbmZvIGgzIHtcXG5cXHRmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5jdXJyZW50LWluZm8gaDQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmN1cnJlbnQtaW5mbyBoNSB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5tb3JlLXdlYXRoZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWF4LWNvbnRlbnQpO1xcblxcdC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG5cXHRnYXA6IDIuNXJlbTtcXG5cXHRncmlkLXJvdy1nYXA6IDAuMjVyZW07XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdC8qIHBhZGRpbmc6IDAgMXJlbTsgKi9cXG59XFxuXFxuLm1vcmUtd2VhdGhlci1pbmZvIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxufVxcblxcbi5tb3JlLXdlYXRoZXItaWNvbiB7XFxuXFx0d2lkdGg6IDNyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubW9yZS13ZWF0aGVyLXRleHQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vcmUtd2VhdGhlci10aXRsZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLm1vcmUtd2VhdGhlci12YWx1ZSB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubWFpbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDFyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYm90dG9tIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNnJlbSk7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06aG92ZXIgKyBsYWJlbCxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcXG5cXHRjb2xvcjogIzE1MjAyYjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSArIGxhYmVsIHtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Y29sb3I6ICNkZGRkZGQ7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0LyogYm9yZGVyOiAzcHggc29saWQgI2RkZGRkZDsgKi9cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0cGFkZGluZy1sZWZ0OiAzLjVyZW07XFxufVxcblxcbi5jaG9pY2Uge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jb250YWluZXIgbGFiZWwge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRwYWRkaW5nOiAxMHB4IDIwcHg7XFxuXFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcblxcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxuXFx0Y29sb3I6ICNmZmY7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uYmFjay1idG4sXFxuLm5leHQtYnRuIHtcXG5cXHRmb250LXNpemU6IDIuNXJlbTtcXG5cXHRjb2xvcjogIzE1MjAyYjtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJhY2stYnRuOmhvdmVyLFxcbi5uZXh0LWJ0bjpob3ZlciB7XFxuXFx0ZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcblxcbi5kYWlseS1mb3JlY2FzdCB7XFxufVxcblxcbi5oaWRlIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRib3JkZXI6IDNweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1zbGlkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0b3ZlcmZsb3cteDogaGlkZGVuO1xcblxcdGdhcDogMXJlbTtcXG5cXHRwYWRkaW5nOiAwIDFyZW07XFxufVxcblxcbi5ob3VybHktY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAwLjVyZW07XFxuXFx0bWFyZ2luOiAxcmVtIDAuMjVyZW07XFxuXFx0bWluLXdpZHRoOiAxNTBweDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkZGRkO1xcblxcdGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjE3O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uaG91cmx5LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYyNjtcXG59XFxuXFxuLmhvdXJseS1pY29uIHtcXG5cXHR3aWR0aDogM3JlbTtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tb3JlLWluZm8tcmFpbixcXG4ubW9yZS1pbmZvLXNub3cge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuMjVyZW07XFxufVxcbi5tb3JlLWluZm8taG91cmx5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubW9yZS1pbmZvLWhvdXJseSBpbWcge1xcblxcdHdpZHRoOiAxLjVyZW07XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ubW9yZS1pbmZvLWhvdXJseSB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDAuNzVyZW07XFxufVxcblxcbi5ob3VybHktY2FyZCAqIHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5ob3VybHktdGltZSB7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmhvdXJseS10ZW1wIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4uaG91cmx5LWNvbmRpdGlvbiB7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuXHRtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcblx0Zm9udC1zaXplOiAyZW07XG5cdG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcblx0Ym94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cblx0aGVpZ2h0OiAwOyAvKiAxICovXG5cdG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG5cdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuXHRib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuXHRmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cblx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcblx0Zm9udC1zaXplOiA3NSU7XG5cdGxpbmUtaGVpZ2h0OiAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcblx0Ym90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuXHR0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG5cdGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cblx0Zm9udC1zaXplOiAxMDAlOyAvKiAxICovXG5cdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG5cdG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7XG5cdC8qIDEgKi9cblx0b3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHtcblx0LyogMSAqL1xuXHR0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG5cdGJvcmRlci1zdHlsZTogbm9uZTtcblx0cGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcblx0cGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cblx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cblx0ZGlzcGxheTogdGFibGU7IC8qIDEgKi9cblx0bWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG5cdHBhZGRpbmc6IDA7IC8qIDMgKi9cblx0d2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cblx0cGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcblx0aGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cblx0Zm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuXHRkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcblx0ZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0NBQ0MsaUJBQWlCLEVBQUUsTUFBTTtDQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3ZDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7OztFQUdFOztBQUVGO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtDQUNDLHVCQUF1QixFQUFFLE1BQU07Q0FDL0IsU0FBUyxFQUFFLE1BQU07Q0FDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7Q0FDQyxpQ0FBaUMsRUFBRSxNQUFNO0NBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7OztFQUdFOztBQUVGO0NBQ0MsbUJBQW1CLEVBQUUsTUFBTTtDQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0NBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDMUM7O0FBRUE7O0VBRUU7O0FBRUY7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0NBR0MsaUNBQWlDLEVBQUUsTUFBTTtDQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7O0VBR0U7O0FBRUY7O0NBRUMsY0FBYztDQUNkLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztDQUtDLG9CQUFvQixFQUFFLE1BQU07Q0FDNUIsZUFBZSxFQUFFLE1BQU07Q0FDdkIsaUJBQWlCLEVBQUUsTUFBTTtDQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNsQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0NBRUMsTUFBTTtDQUNOLGlCQUFpQjtBQUNsQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0NBRUMsTUFBTTtDQUNOLG9CQUFvQjtBQUNyQjs7QUFFQTs7RUFFRTs7QUFFRjs7OztDQUlDLDBCQUEwQjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjs7OztDQUlDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7Q0FJQyw4QkFBOEI7QUFDL0I7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7Q0FDQyxzQkFBc0IsRUFBRSxNQUFNO0NBQzlCLGNBQWMsRUFBRSxNQUFNO0NBQ3RCLGNBQWMsRUFBRSxNQUFNO0NBQ3RCLGVBQWUsRUFBRSxNQUFNO0NBQ3ZCLFVBQVUsRUFBRSxNQUFNO0NBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7OztFQUdFOztBQUVGOztDQUVDLHNCQUFzQixFQUFFLE1BQU07Q0FDOUIsVUFBVSxFQUFFLE1BQU07QUFDbkI7O0FBRUE7O0VBRUU7O0FBRUY7O0NBRUMsWUFBWTtBQUNiOztBQUVBOzs7RUFHRTs7QUFFRjtDQUNDLDZCQUE2QixFQUFFLE1BQU07Q0FDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTs7O0VBR0U7O0FBRUY7Q0FDQywwQkFBMEIsRUFBRSxNQUFNO0NBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3RCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtDQUNDLGFBQWE7QUFDZDs7QUFFQTs7RUFFRTs7QUFFRjtDQUNDLGFBQWE7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG5cXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG5cXHRib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcblxcdGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuXFx0Zm9udC1zaXplOiA3NSU7XFxuXFx0bGluZS1oZWlnaHQ6IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG5cXHRib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuXFx0LyogMSAqL1xcblxcdG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuXFx0LyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcblxcdHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuXFx0ZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG5cXHRtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG5cXHRwYWRkaW5nOiAwOyAvKiAzICovXFxuXFx0d2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuXFx0cGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuXFx0b3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYWxsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vY3NzL2FsbC5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBwYWdlTG9hZCwgeyBnZXRXZWF0aGVyLCBkaXNwbGF5Rm9yZWNhc3QgfSBmcm9tIFwiLi9qcy9VSVwiO1xuXG5wYWdlTG9hZCgpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0Y29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1pbnB1dFwiKS52YWx1ZTtcblx0Z2V0V2VhdGhlcihxdWVyeSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3VybHlcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG5cdGRpc3BsYXlGb3JlY2FzdCgpO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF5XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuXHRkaXNwbGF5Rm9yZWNhc3QoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImRlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZGVzYyIsInZhbHVlIiwiJFN5bWJvbCIsIlN5bWJvbCIsIml0ZXJhdG9yU3ltYm9sIiwiaXRlcmF0b3IiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsImNvbnRleHQiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiZm4iLCJhcmciLCJ0eXBlIiwiY2FsbCIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl90eXBlb2YiLCJfX2F3YWl0IiwidGhlbiIsInVud3JhcHBlZCIsImVycm9yIiwicHJldmlvdXNQcm9taXNlIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJzdGF0ZSIsIkVycm9yIiwiZG9uZVJlc3VsdCIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJkb25lIiwibWV0aG9kTmFtZSIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsImluZm8iLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJsb2NzIiwiZW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsIml0ZXJhYmxlIiwiaXRlcmF0b3JNZXRob2QiLCJpc05hTiIsImxlbmd0aCIsImkiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJnZW5GdW4iLCJjdG9yIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJpdGVyIiwia2V5cyIsInZhbCIsIm9iamVjdCIsInJldmVyc2UiLCJwb3AiLCJza2lwVGVtcFJlc2V0IiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJvb3RSZWNvcmQiLCJydmFsIiwiZXhjZXB0aW9uIiwiaGFuZGxlIiwibG9jIiwiY2F1Z2h0IiwiaGFzQ2F0Y2giLCJoYXNGaW5hbGx5IiwiZmluYWxseUVudHJ5IiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJ0aHJvd24iLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwiX25leHQiLCJfdGhyb3ciLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImljb24iLCJzZWFyY2giLCJHaXRIdWIiLCJ0ZW1wIiwicmFpbiIsImh1bWlkaXR5Iiwid2luZCIsInNub3ciLCJhaXIiLCJzdW5yaXNlIiwic3Vuc2V0IiwicHJlc3N1cmUiLCJ2aXNpYmlsaXR5IiwidXYiLCJyYWluZHJvcHMiLCJzbm93Q2xvdWQiLCJtb29uIiwiY2xvdWQiLCJ3ZWF0aGVyRGF0YSIsImdldEFpclF1YWxpdHkiLCJhcWkiLCJkaXNwbGF5V2VhdGhlckRhdGEiLCJkYXRhIiwibW9vblBoYXNlIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImFzdHJvIiwibW9vbl9waGFzZSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJzcmMiLCJjb25jYXQiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGVtcF9mIiwidGV4dCIsImRheSIsIm1pbnRlbXBfZiIsIm1heHRlbXBfZiIsImZlZWxzbGlrZV9mIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJ3aW5kX21waCIsImRhaWx5X2NoYW5jZV9vZl9zbm93IiwiYWlyX3F1YWxpdHkiLCJwbTJfNSIsInByZXNzdXJlX21iIiwidmlzX21pbGVzIiwidG90YWxwcmVjaXBfaW4iLCJnZXRXZWF0aGVyIiwiX3giLCJfZ2V0V2VhdGhlciIsIl9jYWxsZWUiLCJxdWVyeSIsInJlc3BvbnNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibW9kZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidDAiLCJkaXNwbGF5TmF2QmFyIiwibmF2QmFyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZ29Cb3giLCJsb2dvIiwiYWx0IiwibG9nb1RleHQiLCJhcHBlbmRDaGlsZCIsInNlYXJjaEJveCIsInNlYXJjaElucHV0IiwicGxhY2Vob2xkZXIiLCJpZCIsInNlYXJjaEJ1dHRvbiIsInNlYXJjaEljb24iLCJ0b2dnbGVCb3giLCJjaGVja0JveCIsInNldEF0dHJpYnV0ZSIsImxhYmVsIiwibWV0cmljIiwiaW1wZXJpYWwiLCJzbGlkZXIiLCJtYWtlUGFnZUNvbnRhaW5lciIsInBhZ2VDb250YWluZXIiLCJkaXNwbGF5Rm9vdGVyIiwiZm9vdGVyIiwiZ2l0SHViUHJvZmlsZSIsImhyZWYiLCJnaXRIdWJQcm9maWxlSW1nIiwiZ2l0SHViUHJvZmlsZVRleHQiLCJhdFN5bWJvbCIsInVzZXJuYW1lIiwic2VwYXJhdG9yIiwiZ2l0SHViUmVwbyIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiY3VycmVudEluZm8iLCJjdXJyZW50TG9jYXRpb24iLCJjdXJyZW50RGF0YSIsImN1cnJlbnRJY29uIiwiY3VycmVudERldGFpbHMiLCJjdXJyZW50VGVtcCIsImN1cnJlbnRDb25kaXRpb24iLCJjdXJyZW50TWluTWF4IiwiY3VycmVudE1pbiIsImN1cnJlbnRNYXgiLCJjcmVhdGVJbmRpdkluZm8iLCJpbWFnZSIsInRpdGxlIiwiY2xhc3NOYW1lIiwid2VhdGhlckluZm8iLCJ3ZWF0aGVySW5mb0ljb24iLCJ3ZWF0aGVySW5mb1RleHQiLCJ3ZWF0aGVySW5mb1RpdGxlIiwid2VhdGhlckluZm9WYWx1ZSIsImRpc3BsYXlNb3JlV2VhdGhlciIsIm1vcmVXZWF0aGVyIiwiY2hvb3NlRm9yZWNhc3QiLCJjb250YWluZXIiLCJmaXJzdENob2ljZSIsImhvdXJseSIsImNoZWNrZWQiLCJob3VybHlMYWJlbCIsInNlY29uZENob2ljZSIsImRheUxhYmVsIiwibWFrZUhvdXJseUNhcmQiLCJob3VybHlDYXJkIiwiaG91cmx5VGltZSIsImhvdXJseUljb24iLCJob3VybHlUZW1wIiwiaG91cmx5Q29uZGl0aW9uIiwibW9yZUluZm8iLCJtb3JlSW5mb1JhaW4iLCJtb3JlSW5mb1JhaW5JY29uIiwibW9yZUluZm9SYWluVGV4dCIsIm1vcmVJbmZvU25vdyIsIm1vcmVJbmZvU25vd0ljb24iLCJtb3JlSW5mb1Nub3dUZXh0IiwibWFrZUhvdXJseUZvcmVjYXN0IiwiYmFja0J0biIsImZvcmVjYXN0U2xpZGVyIiwibmV4dEJ0biIsIm1ha2VGb3JlY2FzdCIsIm1ha2VNYWluQ29udGFpbmVyIiwibWFpbiIsImJvdHRvbUNvbnRhaW5lciIsImJvdHRvbSIsInBhZ2VMb2FkIiwiY29udGVudCIsImRpc3BsYXlGb3JlY2FzdCIsImNob2ljZSIsImlubmVySFRNTCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9
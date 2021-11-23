/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/YMaps/YMaps.js":
/*!**********************************************!*\
  !*** ./src/blocks/components/YMaps/YMaps.js ***!
  \**********************************************/
/*! exports provided: YMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YMaps", function() { return YMaps; });
function YMaps(option) {
  this.map = null;
  this.MyBalloonLayout = null;
  this.MyBalloonContentLayout = null;
  this.MyIconContentLayout = null;
  this.isInit = false;
  this.mapsParams = {
    container: 'inmap',
    params: {
      center: [55.714225, 37.848540],
      zoom: 14,
      controls: ['zoomControl', 'fullscreenControl']
    },
    ballonMobileMode: false,
    autoscale: false,
    icons: {
      'default': '/img/svg/ic_pen-empty.svg',
      'active': '/img/svg/ic_pen-empty.svg'
    },
    points: []
  };

  this.init = function (onInitCallback) {
    if (!this.isInit) {
      this.isInit = !this.isInit;

      var _this = this;

      console.info('init Ymaps');
      ymaps.ready(function () {
        // Создание экземпляра карты и его привязка к созданному контейнеру.
        _this.map = new ymaps.Map('' + _this.mapsParams.container + '', _this.mapsParams.params, {
          suppressMapOpenBlock: true
        }); // Создание макета балуна на основе Twitter Bootstrap.

        _this.MyBalloonLayout = ymaps.templateLayoutFactory.createClass('<div class="sh-balloon"></div>'); // Создание вложенного макета содержимого балуна.

        _this.MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass('<div class="bln-scroll-offset" >$[properties.balloonContent]</div>');
        _this.MyIconContentLayout = ymaps.templateLayoutFactory.createClass('<div class="pin-content" >$[properties.iconContent]</div>');

        _this.map.behaviors.disable('scrollZoom');

        onInitCallback(_this.isInit);
      });
    }
  };

  this.resizeContainer = function () {
    var _this = this;

    setTimeout(function () {
      _this.map.container.fitToViewport(); //autoscale


      if (_this.mapsParams.autoscale) {
        _this.autoScale();
      }
    }, 500);
  };

  this.autoScale = function () {
    var _this = this;

    _this.map.setBounds(_this.map.geoObjects.getBounds(), {
      checkZoomRange: true,
      zoomMargin: 100
    });
  };

  this.addPlacemark = function (arrayPoints) {
    var _this = this;

    var sizeIcons = [50, 70];
    var placemarkOffset = [-25, -70];
    var offsetIcons = [16, 15];
    this.mapsParams.points = arrayPoints;
    this.map.geoObjects.removeAll();

    if (window.innerWidth < 769) {
      sizeIcons = [30, 45];
      offsetIcons = [8, 9];
      placemarkOffset = [-15, -45];
    }

    try {
      var PlacemarkArr = [];

      for (var i = 0; i < _this.mapsParams.points.length; i++) {
        // Создание метки  
        PlacemarkArr[i] = new ymaps.Placemark(_this.mapsParams.points[i].coordinates.split(','), {
          balloonContent: '',
          iconContent: '' //hintContent: 'hint',

        }, {
          balloonShadow: false,
          balloonLayout: _this.MyBalloonLayout,
          balloonContentLayout: _this.MyBalloonContentLayout,
          balloonPanelLayout: _this.MyBalloonLayout,
          balloonPanelMaxMapArea: false,
          // Не скрываем иконку при открытом балуне.
          hideIconOnBalloonOpen: false,
          // И дополнительно смещаем балун, для открытия над иконкой.
          balloonOffset: [-15, 6],
          // balloonContentLayout: LayoutActivatePoint,
          iconLayout: 'default#imageWithContent',
          iconImageHref: _this.mapsParams.points[i].markerImage,
          iconImageSize: sizeIcons,
          iconImageOffset: placemarkOffset,
          pane: 'balloon',
          iconContentOffset: offsetIcons,
          iconContentLayout: _this.MyIconContentLayout,
          draggable: false
        });
        PlacemarkArr[i].events.add('balloonopen', function (e) {// PlacemarkArr[i].properties.set('balloonContent', _this.mapsParams.points[i].balloonContent);
          // e.get('target').options.set({
          //     iconImageHref: _this.mapsParams.icons.active
          // });
          // app.renderMapPopupClick(_this.mapsParams.points[i].code, false)
        });
        PlacemarkArr[i].events.add('balloonclose', function (e) {// e.get('target').options.set({
          //     iconImageHref: _this.mapsParams.icons.default
          // });
          // app.closeMapPopup()
        });

        _this.map.geoObjects.add(PlacemarkArr[i]);
      } // endfor

    } catch (err) {
      console.error('error: YM addPlacemark ', err);
    }
  };
}

/***/ }),

/***/ "./src/blocks/modules/card-slider/card-slider.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/card-slider/card-slider.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");


swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]]);

if (document.querySelector('.card-slider__thumbs')) {
  document.querySelector('.card-slider__gallery').addEventListener('click', function () {
    var IMAGE_ARR = [];
    var IMAGE = document.querySelectorAll('.card-slider__thumbs [data-gallery-src]');
    console.log(IMAGE);
    IMAGE.forEach(function (item, index) {
      IMAGE_ARR.push({
        src: item.dataset.gallerySrc,
        type: "image"
      });
    });
    _fancyapps_ui__WEBPACK_IMPORTED_MODULE_1__["Fancybox"].show(IMAGE_ARR);
  });
}

if (document.querySelector('[data-swiper-next="card-gallery"]')) {
  document.querySelector('[data-swiper-next="card-gallery"]').addEventListener('click', function (event) {
    event.stopPropagation();
  });
  document.querySelector('[data-swiper-prev="card-gallery"]').addEventListener('click', function (event) {
    event.stopPropagation();
  });
}
/* карточка */


var galleryThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-swiper="thumbs-gallery"]', {
  spaceBetween: 28,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 4
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 7
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1380: {
      slidesPerView: 3
    }
  }
});

function initialSlideCard() {
  if (!document.querySelector('.swiper-video')) {
    return 0;
  } else {
    if (document.querySelectorAll('.card-slider__thumbs .swiper-wrapper > div').length <= 1) {
      return 0;
    } else {
      return 1;
    }
  }
}

var galleryTop = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-swiper="card-gallery"]', {
  spaceBetween: 10,
  initialSlide: initialSlideCard(),
  navigation: {
    nextEl: '[data-swiper-next="card-gallery"]',
    prevEl: '[data-swiper-prev="card-gallery"]'
  },
  breakpoints: {
    0: {
      pagination: {
        el: '.swiper-dots',
        type: 'bullets'
      }
    }
  },
  thumbs: {
    swiper: galleryThumbs
  }
}); // galleryTop.on('slideChange', function () {
//     $('.video').removeClass('play');
//     $('.video').find('iframe').remove();
//     $('.swiper-topbar, .swiper-bottombar').show()
// });

/***/ }),

/***/ "./src/blocks/modules/catalog-block/catalog-block.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/catalog-block/catalog-block.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('[data-filter]')) {
  var $ = function $(elem) {
    return document.querySelector(elem);
  };

  var filterItems = function filterItems(param) {
    document.querySelectorAll('[data-card]').forEach(function (item, index) {
      item.classList.remove('hide');

      if (item.dataset.card != param) {
        item.classList.add('hide');
      }
    });
    pagination(param);
  };

  var pagination = function pagination(param) {
    var hideElements = document.querySelectorAll('[data-card="' + param + '"]');
    hideElements.forEach(function (item, index) {
      item.classList.remove('hide');

      if (index >= countElem) {
        item.classList.add('hide');
      }
    });

    if (!document.querySelectorAll('[data-card="' + param + '"].hide').length) {
      $('.catalog-block__more').classList.add('hide');
    } else {
      $('.catalog-block__more').classList.remove('hide');
    }
  };

  var countElem = 6;
  var step = 1;
  var activeTab = null;
  document.querySelectorAll('[data-filter]').forEach(function (item, index) {
    if (!index) {
      item.classList.add('active');
      filterItems(item.dataset.filter);
      activeTab = item.dataset.filter;
    }

    item.addEventListener('click', function (event) {
      $('.catalog-block__nav li.active').classList.remove('active');
      this.classList.add('active');
      activeTab = item.dataset.filter;
      filterItems(item.dataset.filter);
      countElem = 6;
    });
  });
  $('.catalog-block__more').addEventListener('click', function (event) {
    countElem += step;
    pagination(activeTab);
  });
}

/***/ }),

/***/ "./src/blocks/modules/common/header/header.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/common/header/header.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function $(elem) {
  return document.querySelector(elem);
}

function closeMobileMenu() {
  $('.burger').classList.remove('open');
  $('.main-menu').classList.remove('open');
  $('header').classList.remove('open');
  $('html').classList.remove('hidden');
}

$('.burger').addEventListener('click', function (event) {
  event.stopPropagation(true);
  this.classList.toggle('open');
  $('.main-menu').classList.toggle('open');
  $('header').classList.toggle('open');
  $('html').classList.toggle('hidden');
});

if (!$('header').classList.contains('header-layout-page')) {
  document.addEventListener("scroll", function () {
    var scrollTop = document.querySelector('html').scrollTop;
    var start = 350;
    var paddMin = 15;
    var paddMax = 30;
    var p = scrollTop / start * 100;
    var paddingCurrent = paddMax - scrollTop / start * paddMin;
    $('header').style.backgroundColor = 'rgba(255,255,255,' + p + '%)';

    if (paddingCurrent >= 15) {
      $('header').style.padding = paddingCurrent + 'px 0';
    }

    if (scrollTop > start) {
      $('header').classList.add('fixed');
    } else {
      $('header').classList.remove('fixed');
    }
  });
} //scroll to view


function scrollToTargetAdjusted(elem) {
  var element = document.getElementById(elem);
  var headerOffset = 70;
  var elementPosition = element.offsetTop;
  var offsetPosition = elementPosition - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}

var anchors = document.querySelectorAll('.main-menu__nav a[href*="#"]');
anchors.forEach(function (anchor, item) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var blockID = this.getAttribute('href').substr(1);
    scrollToTargetAdjusted(blockID);
    closeMobileMenu();
  });
});

/***/ }),

/***/ "./src/blocks/modules/common/main-menu/main-menu.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/common/main-menu/main-menu.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// // плавный скролл
// var $page = $('html, body');
// $('.main-menu li a[href*="#"]').on('click', function() {
//     let height = $('.header-top').height()
//     $page.animate({
//         scrollTop: ($($.attr(this, 'href')).offset().top) - height
//     }, 400);
//     $('.burger').trigger('click')
//     return false;
// });
function $(elem) {
  return document.querySelector(elem);
}

function closeMobileMenu() {
  $('.burger').classList.remove('open');
  $('.main-menu').classList.remove('open');
  $('header').classList.remove('open');
  $('html').classList.remove('hidden');
}

document.addEventListener('click', function () {
  closeMobileMenu();
});
$('.main-menu__close').addEventListener('click', function () {
  closeMobileMenu();
});
$('.main-menu').addEventListener('click', function (event) {
  event.stopPropagation(true);
});

/***/ }),

/***/ "./src/blocks/modules/gallery-block/gallery-block.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/gallery-block/gallery-block.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/yamaps-block/yamaps-block.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/yamaps-block/yamaps-block.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_YMaps_YMaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/YMaps/YMaps */ "./src/blocks/components/YMaps/YMaps.js");


if (document.querySelector('.section-yamaps-block')) {
  var loadScript = function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  var elementInViewport = function elementInViewport(el) {
    var bounds = el.getBoundingClientRect();
    return bounds.top + bounds.height > 0 && window.innerHeight - bounds.top > 0 && bounds.left + bounds.width > 0 && window.innerWidth - bounds.left > 0 // Левее правой
    ;
  };

  var mapInit = function mapInit() {
    YM.mapsParams.container = 'mapcontainer';
    YM.mapsParams.params.center = [55.714225, 37.848540];
    YM.init(function () {
      YM.addPlacemark(pointsArray); //YM.autoScale()
    });
  };

  document.addEventListener("scroll", function (e) {
    var el = document.querySelector(".section-yamaps-block");
    var inViewport = elementInViewport(el); //true если виден

    if (inViewport && !window.inMapFilterViewport) {
      window.inMapFilterViewport = true;

      if (!window.ymaps) {
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&loadByRequire=1", function () {
          ymaps.load(mapInit());
        });
      } else {
        if (!window.inMapFilter) {
          mapInit();
        }
      }
    }
  });
  var YM = new _components_YMaps_YMaps__WEBPACK_IMPORTED_MODULE_0__["YMaps"]();
  var pointsArray = [{
    'coordinates': '55.714225, 37.848540',
    'markerImage': '/img/svg/ic_pen-ymaps.svg'
  }];
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import "%components%/tabs/tabs";
//import "%components%/form/form";
//import "%components%/select/select";
//// import "%components%/mobile-menu/mobile-menu"; 
//import "%components%/video/video";

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_common_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/common/header/header */ "./src/blocks/modules/common/header/header.js");
/* harmony import */ var _modules_common_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_common_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/common/main-menu/main-menu */ "./src/blocks/modules/common/main-menu/main-menu.js");
/* harmony import */ var _modules_common_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_common_main_menu_main_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_gallery_block_gallery_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/gallery-block/gallery-block.js */ "./src/blocks/modules/gallery-block/gallery-block.js");
/* harmony import */ var _modules_gallery_block_gallery_block_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_gallery_block_gallery_block_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_yamaps_block_yamaps_block_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/yamaps-block/yamaps-block.js */ "./src/blocks/modules/yamaps-block/yamaps-block.js");
/* harmony import */ var _modules_card_slider_card_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/card-slider/card-slider.js */ "./src/blocks/modules/card-slider/card-slider.js");
/* harmony import */ var _modules_catalog_block_catalog_block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/catalog-block/catalog-block.js */ "./src/blocks/modules/catalog-block/catalog-block.js");
/* harmony import */ var _modules_catalog_block_catalog_block_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_block_catalog_block_js__WEBPACK_IMPORTED_MODULE_5__);





 // import "%modules%/video/video";
// import "%modules%/catalog/minicard/minicard";
// import "%modules%/card/card-slider/card-slider";
// import "%modules%/card/card-advantages/card-advantages";
// import "%modules%/card/card-similar/card-similar";
// import "%modules%/card/card-mortgage/card-mortgage";
// import "%modules%/jk/jk-mini-gallery/jk-mini-gallery";
// import "%modules%/catalog/footer-link/footer-link.js";
// import "%modules%/catalog/catalog-filter/catalog-filter.js";
// import "%modules%/contacts/contacts-map/contacts-map.js";

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inputmask */ "./node_modules/inputmask/dist/inputmask.js");
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");






swiper__WEBPACK_IMPORTED_MODULE_5__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_5__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_5__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_5__["EffectFade"]]); //add simple support for background images:

document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg');

  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')';
  }
});
svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();

window.onload = function () {
  document.querySelector('body').classList.remove('perf-no-animation');
};

document.addEventListener("DOMContentLoaded", function () {
  /* inputmask */
  if (document.querySelector("input[type=tel]")) {
    var IMaskPhone = new inputmask__WEBPACK_IMPORTED_MODULE_3___default.a("9(999)999-99-99");
    IMaskPhone.mask(document.querySelector("input[type=tel]"));
  }
  /* swiper gallery */


  function updateFraction(slider) {
    var params = slider.params,
        activeIndex = slider.activeIndex;
    document.querySelector('.counter-current').innerText = String(activeIndex + 1).padStart(2, '0');
    document.querySelector('.counter-total').innerText = slider.slides.length;
  }

  var swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-swiper="gallery"]', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    navigation: {
      nextEl: '[data-swiper-next="gallery"]',
      prevEl: '[data-swiper-prev="gallery"]'
    },
    on: {
      init: function init() {
        setTimeout(updateFraction, 0, this);
      },
      slideChange: function slideChange() {
        updateFraction(this);
      },
      resize: function resize() {
        updateFraction(this);
      }
    }
  });

  function updateFraction2(slider) {
    var params = slider.params,
        activeIndex = slider.activeIndex;
    var slideContent = slider.slides[activeIndex].querySelector('.adv-block-content').outerHTML;
    document.querySelector('.advantages-block__slide .container').innerHTML = slideContent;
    document.querySelector('.advantages-block__counter .counter-current').innerText = String(activeIndex + 1).padStart(2, '0');
    document.querySelector('.advantages-block__counter .counter-total').innerText = slider.slides.length;
  }

  var swiperAdv = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-swiper="advantages"]', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    navigation: {
      nextEl: '[data-swiper-next="advantages"]',
      prevEl: '[data-swiper-prev="advantages"]'
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
    on: {
      init: function init() {
        setTimeout(updateFraction2, 0, this);
      },
      slideChange: function slideChange() {
        updateFraction2(this);
      },
      resize: function resize() {
        updateFraction2(this);
      }
    }
  });
  var swiperMinicard = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-swiper="minicard"]', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '[data-swiper-next="minicard"]',
      prevEl: '[data-swiper-prev="minicard"]'
    }
  });
  var swiperTeam = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-swiper="team"]', {
    slidesPerView: 2,
    spaceBetween: 100,
    navigation: {
      nextEl: '[data-swiper-next="team"]',
      prevEl: '[data-swiper-prev="team"]'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      940: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1376: {
        slidesPerView: 2,
        spaceBetween: 100
      }
    }
  });
  var swiperTeam2 = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('[data-swiper="similar"]', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '[data-swiper-next="similar"]',
      prevEl: '[data-swiper-prev="similar"]'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      480: {
        slidesPerView: 1
      },
      940: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
  /* wewewewewe */

  /* ============================================================== */

  /* ============================================================== */
  // function galleryShowMore(setmax){
  //     var container = document.querySelector('.catalog-block__list')
  //     var table = container.querySelector('ul')
  //     var max = (setmax ? setmax : 30)
  //     if(table.querySelectorAll('').length <= max){
  //         $('[data-gallery="tmore"]').hide()
  //     }
  //     table.find('li').not('.li-show').each(function(index){
  //         if(index < max ){
  //             $(this).addClass('li-show')
  //         }
  //     })
  //   }
  //   $(document).on('click', '[data-gallery="tmore"]',function(event){
  //       galleryShowMore(12)
  //   })
  //   galleryShowMore(12)
  //   /* ================================================== */
  //   /* ================================================== */
  //   $(document).on('click', '[data-tabs="nav"] li', function(event){
  //       if($(this).index() == 4){
  //           $('.leagues__arhive').show()
  //       }else{
  //           $('.leagues__arhive').hide()
  //       }
  // })
}); //DOMContentLoaded

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
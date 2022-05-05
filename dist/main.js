/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScrollBtn */ \"./src/modules/smoothScrollBtn.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/burger */ \"./src/modules/burger.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_docsModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/docsModal */ \"./src/modules/docsModal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_secondSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/secondSlider */ \"./src/modules/secondSlider.js\");\n\n\n\n\n\n// import formValidate from \"./modules/formValidate\"\n\n\n\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_secondSlider__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\n;(0,_modules_smoothScrollBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_burger__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n// formValidate()\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('15 may 2022')\n;(0,_modules_docsModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\nconst forms = document.querySelectorAll('form')\nforms.forEach((form, index) => {\n    form.addEventListener('submit', (e) => {\n        e.preventDefault()\n        form.id = `form${index}`\n        \n        ;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            formId: `form${index}`,\n            someElem: [\n                {\n                    type: 'block',\n                    id: 'calc-total'\n                }\n            ] \n        })\n    })\n})\n\n//# sourceURL=webpack://middle/./src/index.js?");

/***/ }),

/***/ "./src/modules/burger.js":
/*!*******************************!*\
  !*** ./src/modules/burger.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\n    const navbarMenu = document.getElementById('navbar-collapse')\n\n    document.addEventListener('click', (e) => {\n        if ((e.target.closest('.navbar-toggle')) && (navbarMenu.classList.contains('collapse'))) {\n            navbarMenu.classList.add('opened')\n            navbarMenu.classList.remove('collapse')\n        } else if ((e.target.closest('.navbar-toggle')) && (!navbarMenu.classList.contains('collapse'))) {\n            navbarMenu.classList.remove('opened')\n            navbarMenu.classList.add('collapse')\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://middle/./src/modules/burger.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n\n    const calcBlock = document.getElementById('calc')\n    const calcBalconyType = document.getElementById('calc-type')\n    const calcSquare = document.getElementById('calc-input')\n    const calcTypeMaterial = document.getElementById('calc-type-material')\n    const total = document.getElementById('calc-total')\n\n    \n    const countCalc = () => {\n        const calcTypeValue = +calcBalconyType.options[calcBalconyType.selectedIndex].value\n        let calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\n        const calcSquareValue = calcSquare.value\n\n        let totalValue = 0\n\n        \n        if(calcTypeMaterial.value == \"--\") {\n            calcTypeMaterialValue = 1\n        }\n\n        if(calcBalconyType.value && calcSquare) {\n            totalValue = Math.round(calcSquareValue*calcTypeValue*calcTypeMaterialValue)\n        }\n\n        total.value = totalValue\n    }\n    if (calcBlock == null) {\n        console.log('блока с калькулятором нет!');\n    } else {\n        calcBlock.addEventListener('input', (e) => {\n            if (e.target === calcBalconyType || e.target === calcSquare || \n                e.target === calcTypeMaterial) {\n                countCalc()\n            } else {\n                totalValue = 0\n            }\n        })\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack://middle/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/docsModal.js":
/*!**********************************!*\
  !*** ./src/modules/docsModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst docsModal = () => {\n    const overlay = document.querySelector('.overlay')\n\n    const imgs = document.querySelectorAll('.sertificate-document');\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\n    const modalImg = document.querySelector(\".sertificate-document > .img-responsive\")\n    const modalImgAttr = modalImg.getAttribute('src')\n\n    const hoverEffectImgs = document.querySelectorAll('.document-overlay')\n\n    hoverEffectImgs.forEach(hoverEffectImg => {\n        hoverEffectImg.addEventListener('mouseover', () => {\n            hoverEffectImg.style.transition = '.2s'\n            hoverEffectImg.style.opacity = \"1\"\n        })\n        hoverEffectImg.addEventListener('mouseout', () => {\n            hoverEffectImg.style.transition = '.2s'\n            hoverEffectImg.style.opacity = \"0\"\n        })\n    })\n    \n    \n\n    disableImgAttributes.forEach(disableImgAttributes => {\n        disableImgAttributes.setAttribute('href', '')\n    })\n    \n    imgs.forEach(imgDiv => {\n        \n        imgDiv.addEventListener('click', (e) => {\n            e.preventDefault()            \n            overlay.style.display = \"block\";\n            const modalDiv = document.createElement('div')\n            modalDiv.classList.add('modal-img')\n            // modalDiv.style.background = `url(./${modalImgAttr}) no-repeat center / cover`\n            overlay.append(modalDiv)\n            console.log(modalDiv);\n        })\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (docsModal);\n\n//# sourceURL=webpack://middle/./src/modules/docsModal.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n    const overlay = document.querySelector('.overlay')\n\n    const headerModalContent = document.querySelector('.header-modal')\n    const servicesModal = document.querySelector('.services-modal')\n\n    document.addEventListener('click', (e) => {\n        if (e.target.closest('.button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            headerModalContent.style.display = \"block\"\n        } else if (e.target.closest('.header-modal__close')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            headerModalContent.style.display = \"\"\n        }\n\n        if (e.target.closest('.utp-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        }\n        \n        if (e.target.closest('.service-button > .fancyboxModal')) {\n            overlay.style.display = \"block\"\n            servicesModal.style.display = \"block\"\n        } else if (e.target.closest('.services-modal__close')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        } else if (e.target.closest('.overlay')) {\n            overlay.style.display = \"\"\n            servicesModal.style.display = \"\"\n        }\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://middle/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/secondSlider.js":
/*!*************************************!*\
  !*** ./src/modules/secondSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst secondSlider = () => {\n    const serviceCards = document.querySelectorAll('.col-md-12.col-lg-6');\n    const serviceContent = document.getElementById('services')\n    \n    let currentSlide = 0\n\n    const checkForInnerWidth = () => {\n        serviceCards.forEach((serviceCard, i) => {\n            if (window.innerWidth >= 576) {\n                if (i > 1) {\n                    serviceCard.classList.add('not-active')\n                }\n            } else {\n                if (i > 0) {\n                    serviceCard.classList.add('not-active')\n                }\n            }   \n        })\n    }\n\n    checkForInnerWidth()\n\n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    serviceContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.services__arrow--right')) {\n                serviceCards.forEach(serviceCard => {\n                    if (serviceCard.classList.contains('not-active')) {\n                        serviceCard.classList.remove('not-active')\n                    } else {\n                        serviceCard.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.services__arrow--left')) {\n                serviceCards.forEach(serviceCard => {\n                    if (serviceCard.classList.contains('not-active')) {\n                        serviceCard.classList.remove('not-active')\n                    } else {\n                        serviceCard.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(serviceCards, currentSlide, 'not-active')\n\n            if (e.target.closest('.services__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.services__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= serviceCards.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = serviceCards.length - 1\n            }\n    \n            nextSlide(serviceCards, currentSlide, 'not-active')\n        }   \n    })\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (secondSlider);\n\n//# sourceURL=webpack://middle/./src/modules/secondSlider.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formId, someElem = [] }) => {\n    const form = document.getElementById(formId)\n    const statusBlock = document.createElement('div')\n\n    const loadText = 'Загрузка...'\n    const errorText = 'Ошибка...'\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\n\n    const validate = (formElements) => {\n        let success = true\n        formElements.forEach(input => {\n           if (input.name == 'fio') {\n                if (input.value === '') {\n                    success = false\n                } else if (input.value.match(/[^а-яА-Я\\^a-zA-Z\\s]/g)) {\n                    success = true\n                }\n            } else if (input.name == 'phone') {\n                if (input.value === '') {\n                    success = false\n                } else if (input.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\n                    success = true\n                }\n            } \n        })\n        return success\n    }\n\n    const sendData = (data) => {\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\n            method: 'POST',\n            body: JSON.stringify(data),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(res => res.json())\n    }\n    \n    const submitForm = () => {\n        const formElements = form.querySelectorAll('input')\n        const formData = new FormData(form)\n        const formBody = {}\n        statusBlock.textContent = loadText\n        form.append(statusBlock)\n\n        formData.forEach((val, key) => {\n            formBody[key] = val\n        })\n\n        \n        someElem.forEach(elem => {\n            const element = document.getElementById(elem.id)\n            if (document.querySelector('body').classList.contains('balkony')) {\n                if(element == null) {\n                    console.log('Верните блок!');\n                } else {\n                    if (elem.type === 'block') {\n                        formBody[elem.id] = element.value\n                    }\n                }\n            }\n            \n        })\n\n        if (validate(formElements)) {\n            sendData(formBody)\n                .then(data => {\n                    statusBlock.textContent = successText\n\n                    formElements.forEach(input => {\n                        input.value = ''\n                    })\n                    setTimeout(() => {\n                        statusBlock.remove()\n                    }, 2000)\n                })\n                .catch(error => {\n                    statusBlock.textContent = errorText\n                })\n            \n        } else {\n            alert('Поля заполнены неверно!')\n            statusBlock.textContent = errorText\n        }\n    }\n\n    try {\n        if (!form) {\n            throw new Error ('Верните форму')\n        }\n        submitForm()\n    } catch (error) {\n        console.log(error.message);\n    }\n    \n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://middle/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const benefitItems = document.querySelectorAll('.benefits__item')\n    const benefitsContent = document.querySelector('#benefits')\n\n    let currentSlide = 0\n\n    const checkForInnerWidth = () => {\n            benefitItems.forEach((benefitItem, i) => {\n                if (window.innerWidth >= 576) {\n                    if (i > 2) {\n                        benefitItem.classList.add('not-active')\n                       }\n                } else {\n                   if (i > 0) {\n                    benefitItem.classList.add('not-active')\n                   }\n                }   \n            })\n    }\n\n    checkForInnerWidth()\n    \n    const prevSlide = (elems, index, strClass) => {\n        elems[index].classList.add(strClass)\n    }\n\n    const nextSlide = (elems, index, strClass) => {\n        elems[index].classList.remove(strClass)\n    }\n\n    benefitsContent.addEventListener('click', (e) => {\n        \n        if (window.innerWidth >= 576) {\n            if (e.target.closest('.benefits__arrow--right')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n            if (e.target.closest('.benefits__arrow--left')) {\n                benefitItems.forEach(benefitItem => {\n                    if (benefitItem.classList.contains('not-active')) {\n                        benefitItem.classList.remove('not-active')\n                    } else {\n                        benefitItem.classList.add('not-active')\n                    }\n                })\n            }\n        } else {\n            prevSlide(benefitItems, currentSlide, 'not-active')\n\n            if (e.target.closest('.benefits__arrow--right')) {\n                currentSlide++\n            } else if (e.target.closest('.benefits__arrow--left')) {\n                currentSlide--          \n            }\n            if (currentSlide >= benefitItems.length) {\n                currentSlide = 0\n            }\n            if (currentSlide < 0) {\n                currentSlide = benefitItems.length - 1\n            }\n    \n            nextSlide(benefitItems, currentSlide, 'not-active')\n        }   \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://middle/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScrollBtn.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrollBtn.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScrollBtn = () => {\n    const scrollBtn = document.querySelector('.smooth-scroll')\n\n    window.addEventListener('scroll', () => {\n        if (window.pageYOffset < 600) {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"0\"\n        } else {\n            scrollBtn.style.transition = \".3s\"\n            scrollBtn.style.opacity = \"1\"\n        }\n    })\n    \n\n    scrollBtn.addEventListener('click', (e) => {\n        e.preventDefault()\n        const anchor = document.getElementById('header')\n        anchor.scrollIntoView({block: \"start\", behavior: \"smooth\"});\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrollBtn);\n\n//# sourceURL=webpack://middle/./src/modules/smoothScrollBtn.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n    const timerDays = document.querySelectorAll('.count-wrap > .count_1 > span')\n    const timerHours = document.querySelectorAll('.count-wrap > .count_2 > span')\n    const timerMinutes = document.querySelectorAll('.count-wrap > .count_3 > span')\n    const timerSeconds = document.querySelectorAll('.count-wrap > .count_4 > span')\n\n    let intervalID\n\n    const getTimeRemaining = (deadline) => {\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\n        let hours = Math.floor((timeRemaining / 60 / 60)-days*24)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return { timeRemaining, days, hours, minutes, seconds }\n    }\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining(deadline)\n        const zeroToNumber = () => {\n            timerDays.forEach(timerDays => {\n                if (getTime.days < 10) {\n                timerDays.textContent = '0' + getTime.days\n                }\n            })\n            timerHours.forEach(timerHours => {\n                if (getTime.hours < 10) {\n                    timerHours.textContent = '0' + getTime.hours\n                }\n            })\n            timerMinutes.forEach(timerMinutes => {\n                if (getTime.minutes < 10) {\n                    timerMinutes.textContent = '0' + getTime.minutes\n                }\n            })\n            timerSeconds.forEach(timerSeconds => {\n                if (getTime.seconds < 10) {\n                    timerSeconds.textContent = '0' + getTime.seconds\n                }\n            })\n            \n        }\n\n        timerDays.forEach(timerDays => {\n            timerDays.textContent = getTime.days\n        })\n        timerHours.forEach(timerHours => {\n            timerHours.textContent = getTime.hours\n        })\n        timerMinutes.forEach(timerMinutes => {\n            timerMinutes.textContent = getTime.minutes\n        })\n        timerSeconds.forEach(timerSeconds => {\n            timerSeconds.textContent = getTime.seconds\n        })\n        \n        zeroToNumber()\n\n        if (getTime.timeRemaining < 0) {\n            clearInterval(intervalID)\n            timerDays.forEach(timerDays => {\n                timerDays.textContent = '00'\n\n            })\n            timerHours.forEach(timerHours => {\n                timerHours.textContent = '00'\n\n            })\n            timerMinutes.forEach(timerMinutes => {\n                timerMinutes.textContent = '00'\n\n            })\n            timerSeconds.forEach(timerSeconds => {\n                timerSeconds.textContent = '00'\n\n            })\n        }\n        \n    }\n    intervalID = setInterval(() => {\n        updateClock()\n    }, 1000);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle/./src/modules/timer.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
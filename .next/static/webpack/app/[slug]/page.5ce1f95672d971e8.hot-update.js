"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[slug]/page",{

/***/ "(app-pages-browser)/./app/components/TabContents.tsx":
/*!****************************************!*\
  !*** ./app/components/TabContents.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n// import Image from 'next/image';\nconst TabContents = (props)=>{\n    _s();\n    const [showContent, setShowContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handeShowClick = ()=>{\n        setShowContent(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-3 product-library relative product-content\",\n                children: props.tabs.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(activeTab === index ? \"border-t-2 border-[#6fa400] opacity-100\" : \"border-t-2 border-white opacity-50\", \" py-2 col-span-1 cursor-pointer uppercase text-[#6fa400] text-xs md:text-base text-center font-semibold\"),\n                        onClick: ()=>setActiveTab(index),\n                        children: tab.label\n                    }, index, false, {\n                        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white text-[#666] rounded mb-4 mt-4\" + (!showContent ? \" h-[500px] overflow-hidden\" : \"\"),\n                dangerouslySetInnerHTML: {\n                    __html: props.tabs[activeTab].content\n                }\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"readmore text-center relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white\",\n                    onClick: ()=>handeShowClick(),\n                    children: \"Xem Th\\xeam\"\n                }, void 0, false, {\n                    fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/trantrungphuoc/Desktop/anhngoc/ebike-web/app/components/TabContents.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TabContents, \"YbLcfJAMcglicAfvG01MVUOmOuo=\");\n_c = TabContents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabContents);\nvar _c;\n$RefreshReg$(_c, \"TabContents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RhYkNvbnRlbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFDakMsa0NBQWtDO0FBQ2xDLE1BQU1DLGNBQWMsQ0FBQ0M7O0lBQ2pCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNLLFdBQVdDLGFBQWEsR0FBR04sK0NBQVFBLENBQUM7SUFDM0MsTUFBTU8saUJBQWlCO1FBQ25CSCxlQUFlO0lBQ25CO0lBQ0EscUJBQ0ksOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDVlAsTUFBTVEsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsS0FBVUMsc0JBQ3ZCLDhEQUFDTDt3QkFFR0MsV0FBVyxHQUdWLE9BSGFKLGNBQWNRLFFBQ3RCLDRDQUNBLHNDQUNMO3dCQUNEQyxTQUFTLElBQU1SLGFBQWFPO2tDQUUzQkQsSUFBSUcsS0FBSzt1QkFQTEY7Ozs7Ozs7Ozs7MEJBV2pCLDhEQUFDTDtnQkFBSUMsV0FBVywyQ0FBNEMsRUFBQ04sY0FBWSwrQkFBOEIsRUFBQztnQkFBSWEseUJBQXlCO29CQUFFQyxRQUFRZixNQUFNUSxJQUFJLENBQUNMLFVBQVUsQ0FBQ2EsT0FBTztnQkFBQzs7Ozs7OzBCQUM3Syw4REFBQ1Y7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNVO29CQUFPQyxNQUFLO29CQUFTWCxXQUFVO29CQUErREssU0FBUyxJQUFNUDs4QkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhKO0dBOUJNTjtLQUFBQTtBQWdDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9UYWJDb250ZW50cy50c3g/MTdjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuY29uc3QgVGFiQ29udGVudHMgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgIGNvbnN0IFtzaG93Q29udGVudCwgc2V0U2hvd0NvbnRlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBoYW5kZVNob3dDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0U2hvd0NvbnRlbnQodHJ1ZSlcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgcHJvZHVjdC1saWJyYXJ5IHJlbGF0aXZlIHByb2R1Y3QtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50YWJzLm1hcCgodGFiOiBhbnksIGluZGV4OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2FjdGl2ZVRhYiA9PT0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdib3JkZXItdC0yIGJvcmRlci1bIzZmYTQwMF0gb3BhY2l0eS0xMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnYm9yZGVyLXQtMiBib3JkZXItd2hpdGUgb3BhY2l0eS01MCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gcHktMiBjb2wtc3Bhbi0xIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSB0ZXh0LVsjNmZhNDAwXSB0ZXh0LXhzIG1kOnRleHQtYmFzZSB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVRhYihpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YWIubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJiZy13aGl0ZSB0ZXh0LVsjNjY2XSByb3VuZGVkIG1iLTQgbXQtNFwiICsgKCFzaG93Q29udGVudD8nIGgtWzUwMHB4XSBvdmVyZmxvdy1oaWRkZW4nOiAnJyl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMudGFic1thY3RpdmVUYWJdLmNvbnRlbnQgfX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhZG1vcmUgdGV4dC1jZW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2JvcmRlciBweS0yIHB4LTggcm91bmRlZCBob3ZlcjpiZy1bIzZmYTQwMF0gaG92ZXI6dGV4dC13aGl0ZScgb25DbGljaz17KCkgPT4gaGFuZGVTaG93Q2xpY2soKX0+XG4gICAgICAgICAgICAgICAgICAgIFhlbSBUaMOqbVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJDb250ZW50czsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYWJDb250ZW50cyIsInByb3BzIiwic2hvd0NvbnRlbnQiLCJzZXRTaG93Q29udGVudCIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImhhbmRlU2hvd0NsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFicyIsIm1hcCIsInRhYiIsImluZGV4Iiwib25DbGljayIsImxhYmVsIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJjb250ZW50IiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TabContents.tsx\n"));

/***/ })

});
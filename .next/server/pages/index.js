/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__52c6u\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzI5MzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fNTJjNnVcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/Home.module.scss":
/*!************************************!*\
  !*** ./src/pages/Home.module.scss ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"Home_contentContainer__rrgZ8\",\n\t\"hero\": \"Home_hero__z4eF_\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9zcmMvcGFnZXMvSG9tZS5tb2R1bGUuc2Nzcz83ZTM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJIb21lX2NvbnRlbnRDb250YWluZXJfX3JyZ1o4XCIsXG5cdFwiaGVyb1wiOiBcIkhvbWVfaGVyb19fejRlRl9cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Home.module.scss\n");

/***/ }),

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": () => (/* binding */ SubscribeButton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/Api */ \"./src/services/Api.ts\");\n/* harmony import */ var _services_Stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Stripe-js */ \"./src/services/Stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_Api__WEBPACK_IMPORTED_MODULE_3__]);\n_services_Api__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction SubscribeButton({ priceId  }) {\n    const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    async function handleSubscribe() {\n        if (!session) {\n            (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)(\"github\");\n            return;\n        } else {\n            try {\n                const { data  } = await _services_Api__WEBPACK_IMPORTED_MODULE_3__.api.post(\"/subscribe\");\n                const { sessionId  } = await data;\n                const stripejs = await (0,_services_Stripe_js__WEBPACK_IMPORTED_MODULE_4__.getStripeJs)();\n                await stripejs.redirectToCheckout({\n                    sessionId\n                });\n            } catch (error) {\n                alert(error.message);\n            }\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleSubscribe,\n        type: \"button\",\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_5___default().subscribeButton),\n        children: \"Subscribe now\"\n    }, void 0, false, {\n        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/components/SubscribeButton/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDNUI7QUFDZTtBQUNjO0FBQ2I7QUFNbkMsU0FBU00sZ0JBQWdCLEVBQUVDLFFBQU8sRUFBeUIsRUFBRTtJQUNsRSxNQUFNLENBQUNDLFFBQVEsR0FBR1IsNERBQVVBO0lBRTVCLGVBQWVTLGtCQUFrQjtRQUMvQixJQUFJLENBQUNELFNBQVM7WUFDWlAsd0RBQU1BLENBQUM7WUFDUDtRQUNGLE9BQU87WUFDTCxJQUFJO2dCQUNGLE1BQU0sRUFBRVMsS0FBSSxFQUFFLEdBQUcsTUFBTVAsbURBQVEsQ0FBQztnQkFDaEMsTUFBTSxFQUFFUyxVQUFTLEVBQUUsR0FBRyxNQUFNRjtnQkFDNUIsTUFBTUcsV0FBVyxNQUFNVCxnRUFBV0E7Z0JBQ2xDLE1BQU1TLFNBQVNDLGtCQUFrQixDQUFDO29CQUFFRjtnQkFBVTtZQUNoRCxFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLE1BQU1ELE1BQU1FLE9BQU87WUFDckI7UUFDRixDQUFDO0lBQ0g7SUFDQSxxQkFDRSw4REFBQ0M7UUFDQ0MsU0FBU1Y7UUFDVFcsTUFBSztRQUNMQyxXQUFXaEIsNEVBQXNCO2tCQUNsQzs7Ozs7O0FBSUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeD85MGU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQXBpXCI7XG5pbXBvcnQgeyBnZXRTdHJpcGVKcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9TdHJpcGUtanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XG5cbmludGVyZmFjZSBJU3Vic2NyaWJlQnV0dG9uUHJvcHMge1xuICBwcmljZUlkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdWJzY3JpYmVCdXR0b24oeyBwcmljZUlkIH06IElTdWJzY3JpYmVCdXR0b25Qcm9wcykge1xuICBjb25zdCBbc2Vzc2lvbl0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCkge1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2lnbkluKFwiZ2l0aHViXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaS5wb3N0KFwiL3N1YnNjcmliZVwiKTtcbiAgICAgICAgY29uc3QgeyBzZXNzaW9uSWQgfSA9IGF3YWl0IGRhdGE7XG4gICAgICAgIGNvbnN0IHN0cmlwZWpzID0gYXdhaXQgZ2V0U3RyaXBlSnMoKTtcbiAgICAgICAgYXdhaXQgc3RyaXBlanMucmVkaXJlY3RUb0NoZWNrb3V0KHsgc2Vzc2lvbklkIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlU3Vic2NyaWJlfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgPlxuICAgICAgU3Vic2NyaWJlIG5vd1xuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNlc3Npb24iLCJzaWduSW4iLCJSZWFjdCIsImFwaSIsImdldFN0cmlwZUpzIiwic3R5bGVzIiwiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInNlc3Npb24iLCJoYW5kbGVTdWJzY3JpYmUiLCJkYXRhIiwicG9zdCIsInNlc3Npb25JZCIsInN0cmlwZWpzIiwicmVkaXJlY3RUb0NoZWNrb3V0IiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImNsYXNzTmFtZSIsInN1YnNjcmliZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Home.module.scss */ \"./src/pages/Home.module.scss\");\n/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_Stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Stripe */ \"./src/services/Stripe.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__]);\n_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// Conteudo o mesmo para todas as pessoas.\nconst getStaticProps = async ()=>{\n    const price = await _services_Stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve(process.env.PRODUCT_API_ID); // ID DO PRODUCTO QUE VOCE CADASTROU LA NO DASBOARD DO STRIPE\n    const product = {\n        priceId: price.id,\n        amount: new Intl.NumberFormat(\"pt-MZ\", {\n            currency: \"MZN\"\n        }).format(price.unit_amount / 100)\n    };\n    return {\n        props: {\n            product\n        },\n        revalidate: 60 * 60 * 24\n    };\n};\nfunction Home({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home |Ignews\"\n                }, void 0, false, {\n                    fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: (_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"\\uD83D\\uDC4F, Seja bem vindo\"\n                            }, void 0, false, {\n                                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: [\n                                    \"Novidades Sobre o universo do \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"React.Js \"\n                                    }, void 0, false, {\n                                        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 43\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Saiba mais sobre o ecossistema Javascript \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 55\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            \"por apenas \",\n                                            product.amount,\n                                            \" MZN por mes\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n                                priceId: product.priceId\n                            }, void 0, false, {\n                                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/avatar.svg\",\n                        alt: \"girl coding\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antoniositoe/Documentos/GitHub/Ignews/src/pages/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNXO0FBRXdCO0FBRXBCO0FBUTVDLDBDQUEwQztBQUNuQyxNQUFNSSxpQkFBaUMsVUFBWTtJQUN4RCxNQUFNQyxRQUFRLE1BQU1GLG9FQUFzQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLGNBQWMsR0FBRyw2REFBNkQ7SUFDckksTUFBTUMsVUFBVTtRQUNkQyxTQUFTUCxNQUFNUSxFQUFFO1FBQ2pCQyxRQUFRLElBQUlDLEtBQUtDLFlBQVksQ0FBQyxTQUFTO1lBQ3JDQyxVQUFVO1FBQ1osR0FBR0MsTUFBTSxDQUFDYixNQUFNYyxXQUFXLEdBQUc7SUFDaEM7SUFDQSxPQUFPO1FBQ0xDLE9BQU87WUFDTFQ7UUFDRjtRQUNBVSxZQUFZLEtBQUssS0FBSztJQUN4QjtBQUNGLEVBQUU7QUFFYSxTQUFTQyxLQUFLLEVBQUVYLFFBQU8sRUFBYSxFQUFFO0lBQ25ELHFCQUNFOzswQkFDRSw4REFBQ1gsa0RBQUlBOzBCQUNILDRFQUFDdUI7OEJBQU07Ozs7Ozs7Ozs7OzBCQUVULDhEQUFDQztnQkFBS0MsV0FBV3hCLDJFQUF1Qjs7a0NBQ3RDLDhEQUFDMEI7d0JBQVFGLFdBQVd4QiwrREFBVzs7MENBQzdCLDhEQUFDNEI7MENBQUs7Ozs7OzswQ0FDTiw4REFBQ0M7O29DQUFHO2tEQUM0Qiw4REFBQ0Q7a0RBQUs7Ozs7Ozs7Ozs7OzswQ0FFdEMsOERBQUNFOztvQ0FBRTtrREFDeUMsOERBQUNDOzs7OztrREFDM0MsOERBQUNIOzs0Q0FBSzs0Q0FBWWxCLFFBQVFHLE1BQU07NENBQUM7Ozs7Ozs7Ozs7Ozs7MENBRW5DLDhEQUFDWix3RUFBZUE7Z0NBQUNVLFNBQVNELFFBQVFDLE9BQU87Ozs7Ozs7Ozs7OztrQ0FFM0MsOERBQUNxQjt3QkFBSUMsS0FBSTt3QkFBY0MsS0FBSTs7Ozs7Ozs7Ozs7Ozs7QUFJbkMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vSG9tZS5tb2R1bGUuc2Nzc1wiO1xuXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b25cIjtcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9TdHJpcGVcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6IHtcbiAgICBwcmljZUlkOiBzdHJpbmc7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gIH07XG59XG4vLyBDb250ZXVkbyBvIG1lc21vIHBhcmEgdG9kYXMgYXMgcGVzc29hcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaWNlID0gYXdhaXQgc3RyaXBlLnByaWNlcy5yZXRyaWV2ZShwcm9jZXNzLmVudi5QUk9EVUNUX0FQSV9JRCk7IC8vIElEIERPIFBST0RVQ1RPIFFVRSBWT0NFIENBREFTVFJPVSBMQSBOTyBEQVNCT0FSRCBETyBTVFJJUEVcbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZUlkOiBwcmljZS5pZCxcbiAgICBhbW91bnQ6IG5ldyBJbnRsLk51bWJlckZvcm1hdChcInB0LU1aXCIsIHtcbiAgICAgIGN1cnJlbmN5OiBcIk1aTlwiLFxuICAgIH0pLmZvcm1hdChwcmljZS51bml0X2Ftb3VudCAvIDEwMCksXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsIC8vIDI0IGhvdXJzIG91IDEgZGlhXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHxJZ25ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgIDxzcGFuPvCfkY8sIFNlamEgYmVtIHZpbmRvPC9zcGFuPlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIE5vdmlkYWRlcyBTb2JyZSBvIHVuaXZlcnNvIGRvIDxzcGFuPlJlYWN0LkpzIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgU2FpYmEgbWFpcyBzb2JyZSBvIGVjb3NzaXN0ZW1hIEphdmFzY3JpcHQgPGJyIC8+XG4gICAgICAgICAgICA8c3Bhbj5wb3IgYXBlbmFzIHtwcm9kdWN0LmFtb3VudH0gTVpOIHBvciBtZXM8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTdWJzY3JpYmVCdXR0b24gcHJpY2VJZD17cHJvZHVjdC5wcmljZUlkfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxpbWcgc3JjPVwiL2F2YXRhci5zdmdcIiBhbHQ9XCJnaXJsIGNvZGluZ1wiIC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIlN1YnNjcmliZUJ1dHRvbiIsInN0cmlwZSIsImdldFN0YXRpY1Byb3BzIiwicHJpY2UiLCJwcmljZXMiLCJyZXRyaWV2ZSIsInByb2Nlc3MiLCJlbnYiLCJQUk9EVUNUX0FQSV9JRCIsInByb2R1Y3QiLCJwcmljZUlkIiwiaWQiLCJhbW91bnQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSIsIkhvbWUiLCJ0aXRsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJjb250ZW50Q29udGFpbmVyIiwic2VjdGlvbiIsImhlcm8iLCJzcGFuIiwiaDEiLCJwIiwiYnIiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/Api.ts":
/*!*****************************!*\
  !*** ./src/services/Api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"/api\"\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvQXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRW5CLE1BQU1DLE1BQU1ELG9EQUFZLENBQUM7SUFDOUJHLFNBQVM7QUFDWCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlhcHAvLi9zcmMvc2VydmljZXMvQXBpLnRzPzdkN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCIvYXBpXCIsXG59KTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/Api.ts\n");

/***/ }),

/***/ "./src/services/Stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/Stripe-js.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": () => (/* binding */ getStripeJs)\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getStripeJs() {\n    const stripejs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51LDn0KDmj24o9o1k0kocqzwIaNgwOKWuJ0lTNwP111j7VWa0jefKMmQJWKsFLByeJinzM9rlkayV6hQMZEW2j4ey00oZBYo4i3\");\n    return stripejs;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvU3RyaXBlLWpzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUErQztBQUV4QyxlQUFlQyxjQUFjO0lBQ2xDLE1BQU1DLFdBQVcsTUFBTUYsNkRBQVVBLENBQUNHLDZHQUF5QztJQUMzRSxPQUFPRDtBQUNULENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWFwcC8uL3NyYy9zZXJ2aWNlcy9TdHJpcGUtanMudHM/ZDVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdHJpcGVKcygpIHtcbiAgY29uc3Qgc3RyaXBlanMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKTtcbiAgcmV0dXJuIHN0cmlwZWpzO1xufVxuIl0sIm5hbWVzIjpbImxvYWRTdHJpcGUiLCJnZXRTdHJpcGVKcyIsInN0cmlwZWpzIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/Stripe-js.ts\n");

/***/ }),

/***/ "./src/services/Stripe.ts":
/*!********************************!*\
  !*** ./src/services/Stripe.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": () => (/* binding */ stripe)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n    apiVersion: \"2022-11-15\",\n    appInfo: {\n        name: \"Ignews\",\n        version: \"0.1.0\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvU3RyaXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxTQUFTLElBQUlELCtDQUFNQSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLGNBQWMsRUFBRTtJQUMzREMsWUFBWTtJQUNaQyxTQUFTO1FBQ1BDLE1BQU07UUFDTkMsU0FBUztJQUNYO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL215YXBwLy4vc3JjL3NlcnZpY2VzL1N0cmlwZS50cz8xMmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSwge1xuICBhcGlWZXJzaW9uOiBcIjIwMjItMTEtMTVcIixcbiAgYXBwSW5mbzoge1xuICAgIG5hbWU6IFwiSWduZXdzXCIsXG4gICAgdmVyc2lvbjogXCIwLjEuMFwiLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiU3RyaXBlIiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/Stripe.ts\n");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./modules/projects/constants.ts":
/*!***************************************!*\
  !*** ./modules/projects/constants.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; },\n/* harmony export */   \"allProjects\": function() { return /* binding */ allProjects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar categories = {\n    NFT: \"nft\",\n    INFRASTRUCTURE: \"infrastructure\",\n    DEFI: \"defi\",\n    MARKETPLACE: \"marketplace\",\n    BRIDGE: \"bridge\",\n    DEX: \"dex\",\n    HACKATHON: \"hackathon\"\n};\nvar allProjects = [\n    {\n        title: \"Social Swap\",\n        url: \"https://www.socialswap.io/\",\n        description: \"Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. \",\n        image: \"/diffusion.png\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"Connext\",\n        url: \"https://bridge.connext.network/\",\n        description: \"Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.\",\n        image: \"/connext.png\",\n        categories: [\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"JustLend\",\n        url: \"https://app.justlend.org/#/home\",\n        description: \"JustLend is a TRON-powered coin market protocol aimed at establishing fund pools whose interest rates are determined by an algorithm based on the supply and demand of TRON assets..\",\n        image: \"/justlend.jpg\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"JustStables\",\n        url: \"https://juststable.tronscan.org/#/login\",\n        description: \"JustStable is a decentralized finance system of USDJ stablecoin for everyone, anywhere, anytime.\",\n        image: \"/juststables.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"SUN\",\n        url: \"https://sun.io/\",\n        description: \"First integrated platform for stablecoin swap, stake-mining, and self-governance on TRON\",\n        image: \"/Sun.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"SocialSwap\",\n        url: \"https://www.socialswap.io/\",\n        description: \"Socialswap is a decentralized exchange on tron blockchain.\",\n        image: \"/socialswap.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"UniFi\",\n        url: \"https://unifiprotocol.com/\",\n        description: \"Unifi Protocol is a group of non-custodial, interoperable smart contracts linking multiple blockchains together into one large DeFi marketplace..\",\n        image: \"/unifi.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"JustMoney\",\n        url: \"https://about.just.money/\",\n        description: \"An ecosystem for the next generation of decentralized applications to power Web3 and DeFi.\",\n        image: \"/justmoney.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"OneSwap\",\n        url: \"https://www.oneswap.net/\",\n        description: \"A fully decentralized exchange protocol on Smart Contract, with permission-free token listing and automated market making.\",\n        image: \"/oneswap.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"LuminousFinance\",\n        url: \"https://luminous.finance/\",\n        description: \"Lumi is a token based on the Tron blockchain. Lumi was created as a popular and utility token for the Luminous ecosystem.\",\n        image: \"/luminusfinance.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"MetaBid\",\n        url: \"https://devpost.com/software/metabid\",\n        description: \"Metabid is a platform that allows people to auction and sell their second-hand cars or valuables, similar to real life ones. At the same time, people have the opportunity to open a store and sell their products with METABLOK tokens in the metaverse environment.\",\n        image: \"/metabid.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Br\\xfaFinance\",\n        url: \"https://devpost.com/software/bru-finance-ni18vt\",\n        description: \"Br\\xfa Finance creates a bridged ecosystem of DeFi and CeFi through its integrated custodian-based real-world asset tokenization and decentralised lending solution. This helps in channelling the high yield-seeking capital from the developed world to the unbanked and the underbanked in emerging markets through an open, borderless and bankless system of finance secured by RWAs that reduces collection risk.\",\n        image: \"/brufinance.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"AlphaFinance\",\n        url: \"https://devpost.com/software/bru-finance-ni18vt\",\n        description: \"Alpha finance is a protocol and service that is a solution to the problems and needs of people in the DEFI world with a system that is secure and transparent, and also protects all consumer privacy.\",\n        image: \"/alphafinance.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Coreburse\",\n        url: \"https://devpost.com/software/coreburse-plf58b\",\n        description: \"Coreburse is inspired by the practical value of Defi, which can perfectly apply blockchain technology to actual products, and people's pursuit of decentralization is becoming increasingly intense. To meet these needs, we created Coreburse.\",\n        image: \"/coreburse.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"HikaruFinance\",\n        url: \"https://hikaru.fi\",\n        description: \"Hikaru.fi is an automated portfolio manager that allows you to diversify your holdings smarter than ever.\",\n        image: \"/hikaru.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Kattana\",\n        url: \"https://app.kattana.io/pancakeswap/0xb5D108578Be3750209d1b3A8f45FFee8C5a75146\",\n        description: \"Kattana.io Leading trading environment for DeFi. Entry point for global blockchain users. Kattana - is a trustable cross-chain trading terminal for DEXs and CEXs.\",\n        image: \"/kattana.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"Calamus Finance\",\n        url: \"https://calamus.finance/\",\n        description: \"Your decentralized crypto streaming platform - Automate real-time salary, startup vesting or any transactions with enhanced security and transparency\",\n        image: \"/calamusfinance.jpg\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"\",\n        url: \"\",\n        description: \"\",\n        image: \"/\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"\",\n        url: \"\",\n        description: \"\",\n        image: \"/\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9wcm9qZWN0cy9jb25zdGFudHMudHM/MTYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSB7XHJcbiAgTkZUOiBcIm5mdFwiLFxyXG4gIElORlJBU1RSVUNUVVJFOiBcImluZnJhc3RydWN0dXJlXCIsXHJcbiAgREVGSTogXCJkZWZpXCIsXHJcbiAgTUFSS0VUUExBQ0U6IFwibWFya2V0cGxhY2VcIixcclxuICBCUklER0U6IFwiYnJpZGdlXCIsXHJcbiAgREVYIDogXCJkZXhcIixcclxuICBIQUNLQVRIT04gOiBcImhhY2thdGhvblwiXHJcbiBcclxufTtcclxuZXhwb3J0IGNvbnN0IGFsbFByb2plY3RzOiBQcm9qZWN0W10gPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU29jaWFsIFN3YXBcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy5zb2NpYWxzd2FwLmlvL1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiRGlmZnVzaW9uIGlzIGFuIEF1dG9tYXRlZCBNYXJrZXQgTWFrZXIgKEFNTSkgcHJvdG9jb2wgYW5kIGxpcXVpZGl0eSBwb29sIGRlc2lnbmVkIGZvciBlZmZpY2llbnQgdHJhZGluZyBiZXR3ZWVuIGNyeXB0by1hc3NldHMuIFRoZSB0cmFkaW5nIGFjdGl2aXR5IG9uIERpZmZ1c2lvbiBjYXB0dXJlcyBmZWVzIGFzIHJldmVudWUgZm9yIGxpcXVpZGl0eSBwcm92aWRlcnMsIHJlc3VsdGluZyBpbiBhIGRlY2VudHJhbGl6ZWQgbWFya2V0IGFuZCB0cmFkaW5nIGV4cGVyaWVuY2UuIFwiLFxyXG4gICAgaW1hZ2U6IFwiL2RpZmZ1c2lvbi5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFWCBdLFxyXG5cclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvbm5leHRcIixcclxuICAgIHVybDogXCJodHRwczovL2JyaWRnZS5jb25uZXh0Lm5ldHdvcmsvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDb25uZXh0IGlzIGFuIGludGVyb3BlcmFiaWxpdHkgcHJvdG9jb2wgdGhhdCBlbXBvd2VycyBkZXZlbG9wZXJzIHRvIGJ1aWxkIGZ1bGx5IGV4cHJlc3NpdmUgY3Jvc3MgZG9tYWluIGFwcHMgKHhBcHBzKSB3aXRoIGEgc3Ryb25nIGZvY3VzIG9uIHNlY3VyaXR5LlwiLFxyXG4gICAgaW1hZ2U6IFwiL2Nvbm5leHQucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5CUklER0VdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSnVzdExlbmRcIixcclxuICAgIHVybDogXCJodHRwczovL2FwcC5qdXN0bGVuZC5vcmcvIy9ob21lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJKdXN0TGVuZCBpcyBhIFRST04tcG93ZXJlZCBjb2luIG1hcmtldCBwcm90b2NvbCBhaW1lZCBhdCBlc3RhYmxpc2hpbmcgZnVuZCBwb29scyB3aG9zZSBpbnRlcmVzdCByYXRlcyBhcmUgZGV0ZXJtaW5lZCBieSBhbiBhbGdvcml0aG0gYmFzZWQgb24gdGhlIHN1cHBseSBhbmQgZGVtYW5kIG9mIFRST04gYXNzZXRzLi5cIixcclxuICAgIGltYWdlOiBcIi9qdXN0bGVuZC5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkldLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSnVzdFN0YWJsZXNcIixcclxuICAgIHVybDogXCJodHRwczovL2p1c3RzdGFibGUudHJvbnNjYW4ub3JnLyMvbG9naW5cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkp1c3RTdGFibGUgaXMgYSBkZWNlbnRyYWxpemVkIGZpbmFuY2Ugc3lzdGVtIG9mIFVTREogc3RhYmxlY29pbiBmb3IgZXZlcnlvbmUsIGFueXdoZXJlLCBhbnl0aW1lLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2p1c3RzdGFibGVzLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNVTlwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vc3VuLmlvL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRmlyc3QgaW50ZWdyYXRlZCBwbGF0Zm9ybSBmb3Igc3RhYmxlY29pbiBzd2FwLCBzdGFrZS1taW5pbmcsIGFuZCBzZWxmLWdvdmVybmFuY2Ugb24gVFJPTlwiLFxyXG4gICAgaW1hZ2U6IFwiL1N1bi5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJTb2NpYWxTd2FwXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cuc29jaWFsc3dhcC5pby9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlNvY2lhbHN3YXAgaXMgYSBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlIG9uIHRyb24gYmxvY2tjaGFpbi5cIixcclxuICAgIGltYWdlOiBcIi9zb2NpYWxzd2FwLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlVuaUZpXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly91bmlmaXByb3RvY29sLmNvbS9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlVuaWZpIFByb3RvY29sIGlzIGEgZ3JvdXAgb2Ygbm9uLWN1c3RvZGlhbCwgaW50ZXJvcGVyYWJsZSBzbWFydCBjb250cmFjdHMgbGlua2luZyBtdWx0aXBsZSBibG9ja2NoYWlucyB0b2dldGhlciBpbnRvIG9uZSBsYXJnZSBEZUZpIG1hcmtldHBsYWNlLi5cIixcclxuICAgIGltYWdlOiBcIi91bmlmaS5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJKdXN0TW9uZXlcIixcclxuICAgIHVybDogXCJodHRwczovL2Fib3V0Lmp1c3QubW9uZXkvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBbiBlY29zeXN0ZW0gZm9yIHRoZSBuZXh0IGdlbmVyYXRpb24gb2YgZGVjZW50cmFsaXplZCBhcHBsaWNhdGlvbnMgdG8gcG93ZXIgV2ViMyBhbmQgRGVGaS5cIixcclxuICAgIGltYWdlOiBcIi9qdXN0bW9uZXkuanBnXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiT25lU3dhcFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lm9uZXN3YXAubmV0L1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBmdWxseSBkZWNlbnRyYWxpemVkIGV4Y2hhbmdlIHByb3RvY29sIG9uIFNtYXJ0IENvbnRyYWN0LCB3aXRoIHBlcm1pc3Npb24tZnJlZSB0b2tlbiBsaXN0aW5nIGFuZCBhdXRvbWF0ZWQgbWFya2V0IG1ha2luZy5cIixcclxuICAgIGltYWdlOiBcIi9vbmVzd2FwLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkx1bWlub3VzRmluYW5jZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vbHVtaW5vdXMuZmluYW5jZS9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkx1bWkgaXMgYSB0b2tlbiBiYXNlZCBvbiB0aGUgVHJvbiBibG9ja2NoYWluLiBMdW1pIHdhcyBjcmVhdGVkIGFzIGEgcG9wdWxhciBhbmQgdXRpbGl0eSB0b2tlbiBmb3IgdGhlIEx1bWlub3VzIGVjb3N5c3RlbS5cIixcclxuICAgIGltYWdlOiBcIi9sdW1pbnVzZmluYW5jZS5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNZXRhQmlkXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9kZXZwb3N0LmNvbS9zb2Z0d2FyZS9tZXRhYmlkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNZXRhYmlkIGlzIGEgcGxhdGZvcm0gdGhhdCBhbGxvd3MgcGVvcGxlIHRvIGF1Y3Rpb24gYW5kIHNlbGwgdGhlaXIgc2Vjb25kLWhhbmQgY2FycyBvciB2YWx1YWJsZXMsIHNpbWlsYXIgdG8gcmVhbCBsaWZlIG9uZXMuIEF0IHRoZSBzYW1lIHRpbWUsIHBlb3BsZSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBvcGVuIGEgc3RvcmUgYW5kIHNlbGwgdGhlaXIgcHJvZHVjdHMgd2l0aCBNRVRBQkxPSyB0b2tlbnMgaW4gdGhlIG1ldGF2ZXJzZSBlbnZpcm9ubWVudC5cIixcclxuICAgIGltYWdlOiBcIi9tZXRhYmlkLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJCcsO6RmluYW5jZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvYnJ1LWZpbmFuY2UtbmkxOHZ0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJCcsO6IEZpbmFuY2UgY3JlYXRlcyBhIGJyaWRnZWQgZWNvc3lzdGVtIG9mIERlRmkgYW5kIENlRmkgdGhyb3VnaCBpdHMgaW50ZWdyYXRlZCBjdXN0b2RpYW4tYmFzZWQgcmVhbC13b3JsZCBhc3NldCB0b2tlbml6YXRpb24gYW5kIGRlY2VudHJhbGlzZWQgbGVuZGluZyBzb2x1dGlvbi4gVGhpcyBoZWxwcyBpbiBjaGFubmVsbGluZyB0aGUgaGlnaCB5aWVsZC1zZWVraW5nIGNhcGl0YWwgZnJvbSB0aGUgZGV2ZWxvcGVkIHdvcmxkIHRvIHRoZSB1bmJhbmtlZCBhbmQgdGhlIHVuZGVyYmFua2VkIGluIGVtZXJnaW5nIG1hcmtldHMgdGhyb3VnaCBhbiBvcGVuLCBib3JkZXJsZXNzIGFuZCBiYW5rbGVzcyBzeXN0ZW0gb2YgZmluYW5jZSBzZWN1cmVkIGJ5IFJXQXMgdGhhdCByZWR1Y2VzIGNvbGxlY3Rpb24gcmlzay5cIixcclxuICAgIGltYWdlOiBcIi9icnVmaW5hbmNlLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBbHBoYUZpbmFuY2VcIixcclxuICAgIHVybDogXCJodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL2JydS1maW5hbmNlLW5pMTh2dFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQWxwaGEgZmluYW5jZSBpcyBhIHByb3RvY29sIGFuZCBzZXJ2aWNlIHRoYXQgaXMgYSBzb2x1dGlvbiB0byB0aGUgcHJvYmxlbXMgYW5kIG5lZWRzIG9mIHBlb3BsZSBpbiB0aGUgREVGSSB3b3JsZCB3aXRoIGEgc3lzdGVtIHRoYXQgaXMgc2VjdXJlIGFuZCB0cmFuc3BhcmVudCwgYW5kIGFsc28gcHJvdGVjdHMgYWxsIGNvbnN1bWVyIHByaXZhY3kuXCIsXHJcbiAgICBpbWFnZTogXCIvYWxwaGFmaW5hbmNlLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3JlYnVyc2VcIixcclxuICAgIHVybDogXCJodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL2NvcmVidXJzZS1wbGY1OGJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNvcmVidXJzZSBpcyBpbnNwaXJlZCBieSB0aGUgcHJhY3RpY2FsIHZhbHVlIG9mIERlZmksIHdoaWNoIGNhbiBwZXJmZWN0bHkgYXBwbHkgYmxvY2tjaGFpbiB0ZWNobm9sb2d5IHRvIGFjdHVhbCBwcm9kdWN0cywgYW5kIHBlb3BsZSdzIHB1cnN1aXQgb2YgZGVjZW50cmFsaXphdGlvbiBpcyBiZWNvbWluZyBpbmNyZWFzaW5nbHkgaW50ZW5zZS4gVG8gbWVldCB0aGVzZSBuZWVkcywgd2UgY3JlYXRlZCBDb3JlYnVyc2UuXCIsXHJcbiAgICBpbWFnZTogXCIvY29yZWJ1cnNlLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJIaWthcnVGaW5hbmNlXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9oaWthcnUuZmlcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkhpa2FydS5maSBpcyBhbiBhdXRvbWF0ZWQgcG9ydGZvbGlvIG1hbmFnZXIgdGhhdCBhbGxvd3MgeW91IHRvIGRpdmVyc2lmeSB5b3VyIGhvbGRpbmdzIHNtYXJ0ZXIgdGhhbiBldmVyLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2hpa2FydS5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkldLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiS2F0dGFuYVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLmthdHRhbmEuaW8vcGFuY2FrZXN3YXAvMHhiNUQxMDg1NzhCZTM3NTAyMDlkMWIzQThmNDVGRmVlOEM1YTc1MTQ2XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJLYXR0YW5hLmlvIExlYWRpbmcgdHJhZGluZyBlbnZpcm9ubWVudCBmb3IgRGVGaS4gRW50cnkgcG9pbnQgZm9yIGdsb2JhbCBibG9ja2NoYWluIHVzZXJzLiBLYXR0YW5hIC0gaXMgYSB0cnVzdGFibGUgY3Jvc3MtY2hhaW4gdHJhZGluZyB0ZXJtaW5hbCBmb3IgREVYcyBhbmQgQ0VYcy5cIixcclxuICAgIGltYWdlOiBcIi9rYXR0YW5hLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSxjYXRlZ29yaWVzLkhBQ0tBVEhPTixjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDYWxhbXVzIEZpbmFuY2VcIixcclxuICAgIHVybDogXCJodHRwczovL2NhbGFtdXMuZmluYW5jZS9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIllvdXIgZGVjZW50cmFsaXplZCBjcnlwdG8gc3RyZWFtaW5nIHBsYXRmb3JtIC0gQXV0b21hdGUgcmVhbC10aW1lIHNhbGFyeSwgc3RhcnR1cCB2ZXN0aW5nIG9yIGFueSB0cmFuc2FjdGlvbnMgd2l0aCBlbmhhbmNlZCBzZWN1cml0eSBhbmQgdHJhbnNwYXJlbmN5XCIsXHJcbiAgICBpbWFnZTogXCIvY2FsYW11c2ZpbmFuY2UuanBnXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiXCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OLGNhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiXCIsXHJcbiAgICBpbWFnZTogXCIvXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OLGNhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG5dOyJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwiTkZUIiwiSU5GUkFTVFJVQ1RVUkUiLCJERUZJIiwiTUFSS0VUUExBQ0UiLCJCUklER0UiLCJERVgiLCJIQUNLQVRIT04iLCJhbGxQcm9qZWN0cyIsInRpdGxlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/projects/constants.ts\n");

/***/ })

});
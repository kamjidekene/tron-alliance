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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categories\": function() { return /* binding */ categories; },\n/* harmony export */   \"allProjects\": function() { return /* binding */ allProjects; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar categories = {\n    NFT: \"nft\",\n    INFRASTRUCTURE: \"infrastructure\",\n    DEFI: \"defi\",\n    MARKETPLACE: \"marketplace\",\n    BRIDGE: \"bridge\",\n    DEX: \"dex\",\n    HACKATHON: \"hackathon\"\n};\nvar allProjects = [\n    {\n        title: \"Social Swap\",\n        url: \"https://www.socialswap.io/\",\n        description: \"Diffusion is an Automated Market Maker (AMM) protocol and liquidity pool designed for efficient trading between crypto-assets. The trading activity on Diffusion captures fees as revenue for liquidity providers, resulting in a decentralized market and trading experience. \",\n        image: \"/diffusion.png\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"Connext\",\n        url: \"https://bridge.connext.network/\",\n        description: \"Connext is an interoperability protocol that empowers developers to build fully expressive cross domain apps (xApps) with a strong focus on security.\",\n        image: \"/connext.png\",\n        categories: [\n            categories.BRIDGE\n        ]\n    },\n    {\n        title: \"JustLend\",\n        url: \"https://app.justlend.org/#/home\",\n        description: \"JustLend is a TRON-powered coin market protocol aimed at establishing fund pools whose interest rates are determined by an algorithm based on the supply and demand of TRON assets..\",\n        image: \"/justlend.jpg\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"JustStables\",\n        url: \"https://juststable.tronscan.org/#/login\",\n        description: \"JustStable is a decentralized finance system of USDJ stablecoin for everyone, anywhere, anytime.\",\n        image: \"/juststables.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"SUN\",\n        url: \"https://sun.io/\",\n        description: \"First integrated platform for stablecoin swap, stake-mining, and self-governance on TRON\",\n        image: \"/Sun.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"SocialSwap\",\n        url: \"https://www.socialswap.io/\",\n        description: \"Socialswap is a decentralized exchange on tron blockchain.\",\n        image: \"/socialswap.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"UniFi\",\n        url: \"https://unifiprotocol.com/\",\n        description: \"Unifi Protocol is a group of non-custodial, interoperable smart contracts linking multiple blockchains together into one large DeFi marketplace..\",\n        image: \"/unifi.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"JustMoney\",\n        url: \"https://about.just.money/\",\n        description: \"An ecosystem for the next generation of decentralized applications to power Web3 and DeFi.\",\n        image: \"/justmoney.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"OneSwap\",\n        url: \"https://www.oneswap.net/\",\n        description: \"A fully decentralized exchange protocol on Smart Contract, with permission-free token listing and automated market making.\",\n        image: \"/oneswap.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"LuminousFinance\",\n        url: \"https://luminous.finance/\",\n        description: \"Lumi is a token based on the Tron blockchain. Lumi was created as a popular and utility token for the Luminous ecosystem.\",\n        image: \"/luminusfinance.jpg\",\n        categories: [\n            categories.DEX\n        ]\n    },\n    {\n        title: \"MetaBid\",\n        url: \"https://devpost.com/software/metabid\",\n        description: \"Metabid is a platform that allows people to auction and sell their second-hand cars or valuables, similar to real life ones. At the same time, people have the opportunity to open a store and sell their products with METABLOK tokens in the metaverse environment.\",\n        image: \"/metabid.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Br\\xfaFinance\",\n        url: \"https://devpost.com/software/bru-finance-ni18vt\",\n        description: \"Br\\xfa Finance creates a bridged ecosystem of DeFi and CeFi through its integrated custodian-based real-world asset tokenization and decentralised lending solution. This helps in channelling the high yield-seeking capital from the developed world to the unbanked and the underbanked in emerging markets through an open, borderless and bankless system of finance secured by RWAs that reduces collection risk.\",\n        image: \"/brufinance.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"AlphaFinance\",\n        url: \"https://devpost.com/software/bru-finance-ni18vt\",\n        description: \"Alpha finance is a protocol and service that is a solution to the problems and needs of people in the DEFI world with a system that is secure and transparent, and also protects all consumer privacy.\",\n        image: \"/alphafinance.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Coreburse\",\n        url: \"https://devpost.com/software/coreburse-plf58b\",\n        description: \"Coreburse is inspired by the practical value of Defi, which can perfectly apply blockchain technology to actual products, and people's pursuit of decentralization is becoming increasingly intense. To meet these needs, we created Coreburse.\",\n        image: \"/coreburse.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"HikaruFinance\",\n        url: \"https://hikaru.fi\",\n        description: \"Hikaru.fi is an automated portfolio manager that allows you to diversify your holdings smarter than ever.\",\n        image: \"/hikaru.png\",\n        categories: [\n            categories.DEFI\n        ]\n    },\n    {\n        title: \"Kattana\",\n        url: \"https://app.kattana.io/pancakeswap/0xb5D108578Be3750209d1b3A8f45FFee8C5a75146\",\n        description: \"Kattana.io Leading trading environment for DeFi. Entry point for global blockchain users. Kattana - is a trustable cross-chain trading terminal for DEXs and CEXs.\",\n        image: \"/kattana.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"Calamus Finance\",\n        url: \"https://calamus.finance/\",\n        description: \"Your decentralized crypto streaming platform - Automate real-time salary, startup vesting or any transactions with enhanced security and transparency\",\n        image: \"/calamusfinance.jpg\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"MistTrack Analytics Platform\",\n        url: \"https://misttrack.io/\",\n        description: \"MistTrack analytics platform combines a number of SaaS systems designed specifically to target crypto money laundering. It's the one-stop destination for all of your investigating needs.\",\n        image: \"/mistrack.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"DAO Cake\",\n        url: \"https://daocake.xyz/\",\n        description: \"Making founder contributions easy. Bringing DAO tech to communities & startups.\",\n        image: \"/daocake.png\",\n        categories: [\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"HolaChain, Web3 Secured W2W Communication Infrastructure\",\n        url: \"https://tron.4thtech.io/\",\n        description: \"Send, receive TRON dMails or exchange on-chain messages with no ads, no data mining & no tracking. HolaChain secures your E2EE communication and enables white-label SDKs for Web3 projects.\",\n        image: \"/holachain.png\",\n        categories: [\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"[Web3] Adshares ($ADS) in TronDAO Ecosystem!\",\n        url: \"https://adshares.net/\",\n        description: \"Adshares is an advertising Web3 protocol designed to provide blockchain-based ad software to ad tech industry. Metaverse & Game monetization allows community to monetize their virtual assets.\",\n        image: \"/adshares.png\",\n        categories: [\n            categories.NFT,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"NRG & Community DAO - By TronNinjas Team\",\n        url: \"https://tronnrg.com/\",\n        description: \"Tron NRG is a Decentralized P2P energy rental service that allows users to save on Tron transaction fees by renting energy!\",\n        image: \"/nrg.png\",\n        categories: [\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"CertiFi\",\n        url: \"https://getcertifi.app/\",\n        description: \"Blockchain based Credential Platform that lets institutions issue credentials and learners store, verify and share their credentials. Transcript Issuing cost for CertiFi ($0.56) << Conventional ($5+).\",\n        image: \"/certifi.png\",\n        categories: [\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"Meson\",\n        url: \"https://meson.fi/\",\n        description: \"Meson introduces a next-gen cross-chain user experience on stablecoins - lightning-fast swap with unbelievably low cost among Ethereum, various high-performance public chains, and Layer 2's.\",\n        image: \"/meson.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"Dazzle Protocol\",\n        url: \"https://testnet.dazzleprotocol.com/\",\n        description: \"The easy first step into DeFi\",\n        image: \"/dazzle.jpg\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"Tron Security Dashcam\",\n        url: \"https://github.com/BubblyOrca/Tron-Security-Dashcam\",\n        description: \"The Tron Security Dashcam is a start-of-the-art collection of risk dashboards that monitors fishy activity that happens on-chain, & also notifies Tron Security experts about what's happening in Web3.\",\n        image: \"/tron-security.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"Wink Financial\",\n        url: \"https://wink.financial/\",\n        description: \"A Web3 Payroll & Treasury Management solution for web3 companies. Our mission is to empower DAOs, blockchain gaming studios & crypto companies to operate with agility and financial clarity.\",\n        image: \"/wink.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"Allbridge Core\",\n        url: \"http://app.allbridge.io/\",\n        description: \"Allbridge Core enables users to transfer native stablecoin liquidity between Tron and various EVM/non-EVM chains via decentralized cross-chain messaging protocols with an additional privacy layer.\",\n        image: \"/allbridge.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON\n        ]\n    },\n    {\n        title: \"\",\n        url: \"\",\n        description: \"\",\n        image: \"/.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"\",\n        url: \"\",\n        description: \"\",\n        image: \"/.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    },\n    {\n        title: \"\",\n        url: \"\",\n        description: \"\",\n        image: \"/.png\",\n        categories: [\n            categories.DEFI,\n            categories.HACKATHON,\n            categories.DEX\n        ]\n    }, \n];\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRSxDQUFFO1FBQ1RDLEdBQUcsRUFBRSxDQUFFO1FBQ1BDLFdBQVcsRUFDVCxDQUFFO1FBQ0pDLEtBQUssRUFBRSxDQUFPO1FBQ2RaLFVBQVUsRUFBRSxDQUFDQTtZQUFBQSxVQUFVLENBQUNHLElBQUk7WUFBQ0gsVUFBVSxDQUFDTyxTQUFTO1lBQUNQLFVBQVUsQ0FBQ00sR0FBRztRQUFBLENBQUM7SUFDbkUsQ0FBQztJQUNELENBQUM7UUFDQ0csS0FBSyxFQUFFLENBQUU7UUFDVEMsR0FBRyxFQUFFLENBQUU7UUFDUEMsV0FBVyxFQUNULENBQUU7UUFDSkMsS0FBSyxFQUFFLENBQU87UUFDZFosVUFBVSxFQUFFLENBQUNBO1lBQUFBLFVBQVUsQ0FBQ0csSUFBSTtZQUFDSCxVQUFVLENBQUNPLFNBQVM7WUFBQ1AsVUFBVSxDQUFDTSxHQUFHO1FBQUEsQ0FBQztJQUNuRSxDQUFDO0FBR0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9tb2R1bGVzL3Byb2plY3RzL2NvbnN0YW50cy50cz8xNjI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllcyA9IHtcclxuICBORlQ6IFwibmZ0XCIsXHJcbiAgSU5GUkFTVFJVQ1RVUkU6IFwiaW5mcmFzdHJ1Y3R1cmVcIixcclxuICBERUZJOiBcImRlZmlcIixcclxuICBNQVJLRVRQTEFDRTogXCJtYXJrZXRwbGFjZVwiLFxyXG4gIEJSSURHRTogXCJicmlkZ2VcIixcclxuICBERVggOiBcImRleFwiLFxyXG4gIEhBQ0tBVEhPTiA6IFwiaGFja2F0aG9uXCJcclxuIFxyXG59O1xyXG5leHBvcnQgY29uc3QgYWxsUHJvamVjdHM6IFByb2plY3RbXSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJTb2NpYWwgU3dhcFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LnNvY2lhbHN3YXAuaW8vXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJEaWZmdXNpb24gaXMgYW4gQXV0b21hdGVkIE1hcmtldCBNYWtlciAoQU1NKSBwcm90b2NvbCBhbmQgbGlxdWlkaXR5IHBvb2wgZGVzaWduZWQgZm9yIGVmZmljaWVudCB0cmFkaW5nIGJldHdlZW4gY3J5cHRvLWFzc2V0cy4gVGhlIHRyYWRpbmcgYWN0aXZpdHkgb24gRGlmZnVzaW9uIGNhcHR1cmVzIGZlZXMgYXMgcmV2ZW51ZSBmb3IgbGlxdWlkaXR5IHByb3ZpZGVycywgcmVzdWx0aW5nIGluIGEgZGVjZW50cmFsaXplZCBtYXJrZXQgYW5kIHRyYWRpbmcgZXhwZXJpZW5jZS4gXCIsXHJcbiAgICBpbWFnZTogXCIvZGlmZnVzaW9uLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYIF0sXHJcblxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ29ubmV4dFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYnJpZGdlLmNvbm5leHQubmV0d29yay9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNvbm5leHQgaXMgYW4gaW50ZXJvcGVyYWJpbGl0eSBwcm90b2NvbCB0aGF0IGVtcG93ZXJzIGRldmVsb3BlcnMgdG8gYnVpbGQgZnVsbHkgZXhwcmVzc2l2ZSBjcm9zcyBkb21haW4gYXBwcyAoeEFwcHMpIHdpdGggYSBzdHJvbmcgZm9jdXMgb24gc2VjdXJpdHkuXCIsXHJcbiAgICBpbWFnZTogXCIvY29ubmV4dC5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkJSSURHRV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJKdXN0TGVuZFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYXBwLmp1c3RsZW5kLm9yZy8jL2hvbWVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkp1c3RMZW5kIGlzIGEgVFJPTi1wb3dlcmVkIGNvaW4gbWFya2V0IHByb3RvY29sIGFpbWVkIGF0IGVzdGFibGlzaGluZyBmdW5kIHBvb2xzIHdob3NlIGludGVyZXN0IHJhdGVzIGFyZSBkZXRlcm1pbmVkIGJ5IGFuIGFsZ29yaXRobSBiYXNlZCBvbiB0aGUgc3VwcGx5IGFuZCBkZW1hbmQgb2YgVFJPTiBhc3NldHMuLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2p1c3RsZW5kLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJKdXN0U3RhYmxlc1wiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vanVzdHN0YWJsZS50cm9uc2Nhbi5vcmcvIy9sb2dpblwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSnVzdFN0YWJsZSBpcyBhIGRlY2VudHJhbGl6ZWQgZmluYW5jZSBzeXN0ZW0gb2YgVVNESiBzdGFibGVjb2luIGZvciBldmVyeW9uZSwgYW55d2hlcmUsIGFueXRpbWUuXCIsXHJcbiAgICBpbWFnZTogXCIvanVzdHN0YWJsZXMuanBnXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiU1VOXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9zdW4uaW8vXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGaXJzdCBpbnRlZ3JhdGVkIHBsYXRmb3JtIGZvciBzdGFibGVjb2luIHN3YXAsIHN0YWtlLW1pbmluZywgYW5kIHNlbGYtZ292ZXJuYW5jZSBvbiBUUk9OXCIsXHJcbiAgICBpbWFnZTogXCIvU3VuLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlNvY2lhbFN3YXBcIixcclxuICAgIHVybDogXCJodHRwczovL3d3dy5zb2NpYWxzd2FwLmlvL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiU29jaWFsc3dhcCBpcyBhIGRlY2VudHJhbGl6ZWQgZXhjaGFuZ2Ugb24gdHJvbiBibG9ja2NoYWluLlwiLFxyXG4gICAgaW1hZ2U6IFwiL3NvY2lhbHN3YXAuanBnXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVW5pRmlcIixcclxuICAgIHVybDogXCJodHRwczovL3VuaWZpcHJvdG9jb2wuY29tL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVW5pZmkgUHJvdG9jb2wgaXMgYSBncm91cCBvZiBub24tY3VzdG9kaWFsLCBpbnRlcm9wZXJhYmxlIHNtYXJ0IGNvbnRyYWN0cyBsaW5raW5nIG11bHRpcGxlIGJsb2NrY2hhaW5zIHRvZ2V0aGVyIGludG8gb25lIGxhcmdlIERlRmkgbWFya2V0cGxhY2UuLlwiLFxyXG4gICAgaW1hZ2U6IFwiL3VuaWZpLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkp1c3RNb25leVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYWJvdXQuanVzdC5tb25leS9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFuIGVjb3N5c3RlbSBmb3IgdGhlIG5leHQgZ2VuZXJhdGlvbiBvZiBkZWNlbnRyYWxpemVkIGFwcGxpY2F0aW9ucyB0byBwb3dlciBXZWIzIGFuZCBEZUZpLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2p1c3Rtb25leS5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJPbmVTd2FwXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly93d3cub25lc3dhcC5uZXQvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBIGZ1bGx5IGRlY2VudHJhbGl6ZWQgZXhjaGFuZ2UgcHJvdG9jb2wgb24gU21hcnQgQ29udHJhY3QsIHdpdGggcGVybWlzc2lvbi1mcmVlIHRva2VuIGxpc3RpbmcgYW5kIGF1dG9tYXRlZCBtYXJrZXQgbWFraW5nLlwiLFxyXG4gICAgaW1hZ2U6IFwiL29uZXN3YXAuanBnXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTHVtaW5vdXNGaW5hbmNlXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9sdW1pbm91cy5maW5hbmNlL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTHVtaSBpcyBhIHRva2VuIGJhc2VkIG9uIHRoZSBUcm9uIGJsb2NrY2hhaW4uIEx1bWkgd2FzIGNyZWF0ZWQgYXMgYSBwb3B1bGFyIGFuZCB1dGlsaXR5IHRva2VuIGZvciB0aGUgTHVtaW5vdXMgZWNvc3lzdGVtLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2x1bWludXNmaW5hbmNlLmpwZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1ldGFCaWRcIixcclxuICAgIHVybDogXCJodHRwczovL2RldnBvc3QuY29tL3NvZnR3YXJlL21ldGFiaWRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1ldGFiaWQgaXMgYSBwbGF0Zm9ybSB0aGF0IGFsbG93cyBwZW9wbGUgdG8gYXVjdGlvbiBhbmQgc2VsbCB0aGVpciBzZWNvbmQtaGFuZCBjYXJzIG9yIHZhbHVhYmxlcywgc2ltaWxhciB0byByZWFsIGxpZmUgb25lcy4gQXQgdGhlIHNhbWUgdGltZSwgcGVvcGxlIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIG9wZW4gYSBzdG9yZSBhbmQgc2VsbCB0aGVpciBwcm9kdWN0cyB3aXRoIE1FVEFCTE9LIHRva2VucyBpbiB0aGUgbWV0YXZlcnNlIGVudmlyb25tZW50LlwiLFxyXG4gICAgaW1hZ2U6IFwiL21ldGFiaWQucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJyw7pGaW5hbmNlXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9kZXZwb3N0LmNvbS9zb2Z0d2FyZS9icnUtZmluYW5jZS1uaTE4dnRcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkJyw7ogRmluYW5jZSBjcmVhdGVzIGEgYnJpZGdlZCBlY29zeXN0ZW0gb2YgRGVGaSBhbmQgQ2VGaSB0aHJvdWdoIGl0cyBpbnRlZ3JhdGVkIGN1c3RvZGlhbi1iYXNlZCByZWFsLXdvcmxkIGFzc2V0IHRva2VuaXphdGlvbiBhbmQgZGVjZW50cmFsaXNlZCBsZW5kaW5nIHNvbHV0aW9uLiBUaGlzIGhlbHBzIGluIGNoYW5uZWxsaW5nIHRoZSBoaWdoIHlpZWxkLXNlZWtpbmcgY2FwaXRhbCBmcm9tIHRoZSBkZXZlbG9wZWQgd29ybGQgdG8gdGhlIHVuYmFua2VkIGFuZCB0aGUgdW5kZXJiYW5rZWQgaW4gZW1lcmdpbmcgbWFya2V0cyB0aHJvdWdoIGFuIG9wZW4sIGJvcmRlcmxlc3MgYW5kIGJhbmtsZXNzIHN5c3RlbSBvZiBmaW5hbmNlIHNlY3VyZWQgYnkgUldBcyB0aGF0IHJlZHVjZXMgY29sbGVjdGlvbiByaXNrLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2JydWZpbmFuY2UucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkFscGhhRmluYW5jZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvYnJ1LWZpbmFuY2UtbmkxOHZ0XCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJBbHBoYSBmaW5hbmNlIGlzIGEgcHJvdG9jb2wgYW5kIHNlcnZpY2UgdGhhdCBpcyBhIHNvbHV0aW9uIHRvIHRoZSBwcm9ibGVtcyBhbmQgbmVlZHMgb2YgcGVvcGxlIGluIHRoZSBERUZJIHdvcmxkIHdpdGggYSBzeXN0ZW0gdGhhdCBpcyBzZWN1cmUgYW5kIHRyYW5zcGFyZW50LCBhbmQgYWxzbyBwcm90ZWN0cyBhbGwgY29uc3VtZXIgcHJpdmFjeS5cIixcclxuICAgIGltYWdlOiBcIi9hbHBoYWZpbmFuY2UucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNvcmVidXJzZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vZGV2cG9zdC5jb20vc29mdHdhcmUvY29yZWJ1cnNlLXBsZjU4YlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQ29yZWJ1cnNlIGlzIGluc3BpcmVkIGJ5IHRoZSBwcmFjdGljYWwgdmFsdWUgb2YgRGVmaSwgd2hpY2ggY2FuIHBlcmZlY3RseSBhcHBseSBibG9ja2NoYWluIHRlY2hub2xvZ3kgdG8gYWN0dWFsIHByb2R1Y3RzLCBhbmQgcGVvcGxlJ3MgcHVyc3VpdCBvZiBkZWNlbnRyYWxpemF0aW9uIGlzIGJlY29taW5nIGluY3JlYXNpbmdseSBpbnRlbnNlLiBUbyBtZWV0IHRoZXNlIG5lZWRzLCB3ZSBjcmVhdGVkIENvcmVidXJzZS5cIixcclxuICAgIGltYWdlOiBcIi9jb3JlYnVyc2UucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhpa2FydUZpbmFuY2VcIixcclxuICAgIHVybDogXCJodHRwczovL2hpa2FydS5maVwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiSGlrYXJ1LmZpIGlzIGFuIGF1dG9tYXRlZCBwb3J0Zm9saW8gbWFuYWdlciB0aGF0IGFsbG93cyB5b3UgdG8gZGl2ZXJzaWZ5IHlvdXIgaG9sZGluZ3Mgc21hcnRlciB0aGFuIGV2ZXIuXCIsXHJcbiAgICBpbWFnZTogXCIvaGlrYXJ1LnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSV0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJLYXR0YW5hXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9hcHAua2F0dGFuYS5pby9wYW5jYWtlc3dhcC8weGI1RDEwODU3OEJlMzc1MDIwOWQxYjNBOGY0NUZGZWU4QzVhNzUxNDZcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkthdHRhbmEuaW8gTGVhZGluZyB0cmFkaW5nIGVudmlyb25tZW50IGZvciBEZUZpLiBFbnRyeSBwb2ludCBmb3IgZ2xvYmFsIGJsb2NrY2hhaW4gdXNlcnMuIEthdHRhbmEgLSBpcyBhIHRydXN0YWJsZSBjcm9zcy1jaGFpbiB0cmFkaW5nIHRlcm1pbmFsIGZvciBERVhzIGFuZCBDRVhzLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2thdHRhbmEucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OLGNhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkNhbGFtdXMgRmluYW5jZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vY2FsYW11cy5maW5hbmNlL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiWW91ciBkZWNlbnRyYWxpemVkIGNyeXB0byBzdHJlYW1pbmcgcGxhdGZvcm0gLSBBdXRvbWF0ZSByZWFsLXRpbWUgc2FsYXJ5LCBzdGFydHVwIHZlc3Rpbmcgb3IgYW55IHRyYW5zYWN0aW9ucyB3aXRoIGVuaGFuY2VkIHNlY3VyaXR5IGFuZCB0cmFuc3BhcmVuY3lcIixcclxuICAgIGltYWdlOiBcIi9jYWxhbXVzZmluYW5jZS5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksY2F0ZWdvcmllcy5IQUNLQVRIT05dLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTWlzdFRyYWNrIEFuYWx5dGljcyBQbGF0Zm9ybVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vbWlzdHRyYWNrLmlvL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiTWlzdFRyYWNrIGFuYWx5dGljcyBwbGF0Zm9ybSBjb21iaW5lcyBhIG51bWJlciBvZiBTYWFTIHN5c3RlbXMgZGVzaWduZWQgc3BlY2lmaWNhbGx5IHRvIHRhcmdldCBjcnlwdG8gbW9uZXkgbGF1bmRlcmluZy4gSXQncyB0aGUgb25lLXN0b3AgZGVzdGluYXRpb24gZm9yIGFsbCBvZiB5b3VyIGludmVzdGlnYXRpbmcgbmVlZHMuXCIsXHJcbiAgICBpbWFnZTogXCIvbWlzdHJhY2sucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRBTyBDYWtlXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9kYW9jYWtlLnh5ei9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1ha2luZyBmb3VuZGVyIGNvbnRyaWJ1dGlvbnMgZWFzeS4gQnJpbmdpbmcgREFPIHRlY2ggdG8gY29tbXVuaXRpZXMgJiBzdGFydHVwcy5cIixcclxuICAgIGltYWdlOiBcIi9kYW9jYWtlLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuSEFDS0FUSE9OXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkhvbGFDaGFpbiwgV2ViMyBTZWN1cmVkIFcyVyBDb21tdW5pY2F0aW9uIEluZnJhc3RydWN0dXJlXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly90cm9uLjR0aHRlY2guaW8vXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJTZW5kLCByZWNlaXZlIFRST04gZE1haWxzIG9yIGV4Y2hhbmdlIG9uLWNoYWluIG1lc3NhZ2VzIHdpdGggbm8gYWRzLCBubyBkYXRhIG1pbmluZyAmIG5vIHRyYWNraW5nLiBIb2xhQ2hhaW4gc2VjdXJlcyB5b3VyIEUyRUUgY29tbXVuaWNhdGlvbiBhbmQgZW5hYmxlcyB3aGl0ZS1sYWJlbCBTREtzIGZvciBXZWIzIHByb2plY3RzLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2hvbGFjaGFpbi5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkhBQ0tBVEhPTl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJbV2ViM10gQWRzaGFyZXMgKCRBRFMpIGluIFRyb25EQU8gRWNvc3lzdGVtIVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vYWRzaGFyZXMubmV0L1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQWRzaGFyZXMgaXMgYW4gYWR2ZXJ0aXNpbmcgV2ViMyBwcm90b2NvbCBkZXNpZ25lZCB0byBwcm92aWRlIGJsb2NrY2hhaW4tYmFzZWQgYWQgc29mdHdhcmUgdG8gYWQgdGVjaCBpbmR1c3RyeS4gTWV0YXZlcnNlICYgR2FtZSBtb25ldGl6YXRpb24gYWxsb3dzIGNvbW11bml0eSB0byBtb25ldGl6ZSB0aGVpciB2aXJ0dWFsIGFzc2V0cy5cIixcclxuICAgIGltYWdlOiBcIi9hZHNoYXJlcy5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLk5GVCxjYXRlZ29yaWVzLkhBQ0tBVEhPTl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJOUkcgJiBDb21tdW5pdHkgREFPIC0gQnkgVHJvbk5pbmphcyBUZWFtXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly90cm9ubnJnLmNvbS9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyb24gTlJHIGlzIGEgRGVjZW50cmFsaXplZCBQMlAgZW5lcmd5IHJlbnRhbCBzZXJ2aWNlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNhdmUgb24gVHJvbiB0cmFuc2FjdGlvbiBmZWVzIGJ5IHJlbnRpbmcgZW5lcmd5IVwiLFxyXG4gICAgaW1hZ2U6IFwiL25yZy5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkhBQ0tBVEhPTl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDZXJ0aUZpXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9nZXRjZXJ0aWZpLmFwcC9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkJsb2NrY2hhaW4gYmFzZWQgQ3JlZGVudGlhbCBQbGF0Zm9ybSB0aGF0IGxldHMgaW5zdGl0dXRpb25zIGlzc3VlIGNyZWRlbnRpYWxzIGFuZCBsZWFybmVycyBzdG9yZSwgdmVyaWZ5IGFuZCBzaGFyZSB0aGVpciBjcmVkZW50aWFscy4gVHJhbnNjcmlwdCBJc3N1aW5nIGNvc3QgZm9yIENlcnRpRmkgKCQwLjU2KSA8PCBDb252ZW50aW9uYWwgKCQ1KykuXCIsXHJcbiAgICBpbWFnZTogXCIvY2VydGlmaS5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkhBQ0tBVEhPTl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNZXNvblwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vbWVzb24uZmkvXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJNZXNvbiBpbnRyb2R1Y2VzIGEgbmV4dC1nZW4gY3Jvc3MtY2hhaW4gdXNlciBleHBlcmllbmNlIG9uIHN0YWJsZWNvaW5zIC0gbGlnaHRuaW5nLWZhc3Qgc3dhcCB3aXRoIHVuYmVsaWV2YWJseSBsb3cgY29zdCBhbW9uZyBFdGhlcmV1bSwgdmFyaW91cyBoaWdoLXBlcmZvcm1hbmNlIHB1YmxpYyBjaGFpbnMsIGFuZCBMYXllciAyJ3MuXCIsXHJcbiAgICBpbWFnZTogXCIvbWVzb24ucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkRhenpsZSBQcm90b2NvbFwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vdGVzdG5ldC5kYXp6bGVwcm90b2NvbC5jb20vXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgZWFzeSBmaXJzdCBzdGVwIGludG8gRGVGaVwiLFxyXG4gICAgaW1hZ2U6IFwiL2RhenpsZS5qcGdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksY2F0ZWdvcmllcy5IQUNLQVRIT05dLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiVHJvbiBTZWN1cml0eSBEYXNoY2FtXCIsXHJcbiAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0J1YmJseU9yY2EvVHJvbi1TZWN1cml0eS1EYXNoY2FtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJUaGUgVHJvbiBTZWN1cml0eSBEYXNoY2FtIGlzIGEgc3RhcnQtb2YtdGhlLWFydCBjb2xsZWN0aW9uIG9mIHJpc2sgZGFzaGJvYXJkcyB0aGF0IG1vbml0b3JzIGZpc2h5IGFjdGl2aXR5IHRoYXQgaGFwcGVucyBvbi1jaGFpbiwgJiBhbHNvIG5vdGlmaWVzIFRyb24gU2VjdXJpdHkgZXhwZXJ0cyBhYm91dCB3aGF0J3MgaGFwcGVuaW5nIGluIFdlYjMuXCIsXHJcbiAgICBpbWFnZTogXCIvdHJvbi1zZWN1cml0eS5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksY2F0ZWdvcmllcy5IQUNLQVRIT05dLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2luayBGaW5hbmNpYWxcIixcclxuICAgIHVybDogXCJodHRwczovL3dpbmsuZmluYW5jaWFsL1wiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiQSBXZWIzIFBheXJvbGwgJiBUcmVhc3VyeSBNYW5hZ2VtZW50IHNvbHV0aW9uIGZvciB3ZWIzIGNvbXBhbmllcy4gT3VyIG1pc3Npb24gaXMgdG8gZW1wb3dlciBEQU9zLCBibG9ja2NoYWluIGdhbWluZyBzdHVkaW9zICYgY3J5cHRvIGNvbXBhbmllcyB0byBvcGVyYXRlIHdpdGggYWdpbGl0eSBhbmQgZmluYW5jaWFsIGNsYXJpdHkuXCIsXHJcbiAgICBpbWFnZTogXCIvd2luay5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksY2F0ZWdvcmllcy5IQUNLQVRIT04sY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQWxsYnJpZGdlIENvcmVcIixcclxuICAgIHVybDogXCJodHRwOi8vYXBwLmFsbGJyaWRnZS5pby9cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkFsbGJyaWRnZSBDb3JlIGVuYWJsZXMgdXNlcnMgdG8gdHJhbnNmZXIgbmF0aXZlIHN0YWJsZWNvaW4gbGlxdWlkaXR5IGJldHdlZW4gVHJvbiBhbmQgdmFyaW91cyBFVk0vbm9uLUVWTSBjaGFpbnMgdmlhIGRlY2VudHJhbGl6ZWQgY3Jvc3MtY2hhaW4gbWVzc2FnaW5nIHByb3RvY29scyB3aXRoIGFuIGFkZGl0aW9uYWwgcHJpdmFjeSBsYXllci5cIixcclxuICAgIGltYWdlOiBcIi9hbGxicmlkZ2UucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgdXJsOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiXCIsXHJcbiAgICBpbWFnZTogXCIvLnBuZ1wiLFxyXG4gICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXMuREVGSSxjYXRlZ29yaWVzLkhBQ0tBVEhPTixjYXRlZ29yaWVzLkRFWF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIHVybDogXCJcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlwiLFxyXG4gICAgaW1hZ2U6IFwiLy5wbmdcIixcclxuICAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzLkRFRkksY2F0ZWdvcmllcy5IQUNLQVRIT04sY2F0ZWdvcmllcy5ERVhdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgICB1cmw6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJcIixcclxuICAgIGltYWdlOiBcIi8ucG5nXCIsXHJcbiAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllcy5ERUZJLGNhdGVnb3JpZXMuSEFDS0FUSE9OLGNhdGVnb3JpZXMuREVYXSxcclxuICB9LFxyXG4gIFxyXG4gIFxyXG5dOyJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwiTkZUIiwiSU5GUkFTVFJVQ1RVUkUiLCJERUZJIiwiTUFSS0VUUExBQ0UiLCJCUklER0UiLCJERVgiLCJIQUNLQVRIT04iLCJhbGxQcm9qZWN0cyIsInRpdGxlIiwidXJsIiwiZGVzY3JpcHRpb24iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./modules/projects/constants.ts\n");

/***/ })

});
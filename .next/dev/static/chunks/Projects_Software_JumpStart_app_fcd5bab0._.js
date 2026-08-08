(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Projects/Software/JumpStart/app/Components/Guide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Guide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Guide({ guide }) {
    if (guide.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
            lineNumber: 15,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: guide.map((guides)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4 shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold",
                        children: guides.name
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    guides.install.arch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 mb-2 font-semibold",
                                children: "Arch Linux"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            guides.install.arch.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: command
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                    lineNumber: 36,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true),
                    guides.install.ubuntu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 mb-2 font-semibold",
                                children: "Ubuntu"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                lineNumber: 48,
                                columnNumber: 15
                            }, this),
                            guides.install.ubuntu.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: command
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                        lineNumber: 57,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                    lineNumber: 53,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true),
                    guides.install.all && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 mb-2 font-semibold",
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            guides.install.all.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: command
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                        lineNumber: 74,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this))
                        ]
                    }, void 0, true)
                ]
            }, guides.id, true, {
                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Guide;
var _c;
__turbopack_context__.k.register(_c, "Guide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Software/JumpStart/app/Components/types/backts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Fetching
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$Guide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/app/Components/Guide.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Fetching({ techs }) {
    _s();
    const [guides, setGuides] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Fetching.useEffect": ()=>{
            async function fetchGuides() {
                try {
                    const results = await Promise.all(techs.map({
                        "Fetching.useEffect.fetchGuides": async (tech)=>{
                            const res = await fetch(`http://localhost:5000/${tech}`);
                            if (!res.ok) {
                                throw new Error(`Failed to fetch ${tech} (${res.status})`);
                            }
                            return res.json();
                        }
                    }["Fetching.useEffect.fetchGuides"]));
                    setGuides(results);
                } catch (err) {
                    console.error(err);
                    setError("Failed to load guides.");
                } finally{
                    setLoading(false);
                }
            }
            fetchGuides();
        }
    }["Fetching.useEffect"], [
        techs
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Projects/Software/JumpStart/app/Components/types/backts.tsx",
            lineNumber: 54,
            columnNumber: 12
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500",
            children: error
        }, void 0, false, {
            fileName: "[project]/Projects/Software/JumpStart/app/Components/types/backts.tsx",
            lineNumber: 58,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$Guide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        guide: guides
    }, void 0, false, {
        fileName: "[project]/Projects/Software/JumpStart/app/Components/types/backts.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, this);
}
_s(Fetching, "cwWUMrUQ1GQ3Xbl7jaS+G/HdzAk=");
_c = Fetching;
var _c;
__turbopack_context__.k.register(_c, "Fetching");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Technologies
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
"use client";
;
;
;
function Technologies({ lang, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "button-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "brutalist-button openai button-2",
                onClick: (e)=>{
                    e.preventDefault(); // prevents navigation
                    onClick(lang);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "openai-logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `https://icon.icepanel.io/Technology/svg/${lang}.svg`,
                            alt: "Next.js",
                            className: "openai-icon"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "button-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Powered By"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: lang
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                lineNumber: 9,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Technologies;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* Common styles for both buttons */
  .brutalist-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 142px;
    height: 142px;
    color: #e5dede;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Styles for the second button */
  .button-2 {
    width: 142px;
    height: 142px; /* Added to maintain square shape */
    background-color: #1e5645;
    border: 3px solid #000000;
    border-radius: 8px;
    padding: 14px 14px;
    box-shadow: 4px 4px 0px #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative; /* Added to ensure proper positioning of pseudo-elements */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-2::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    background-color: black;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.5s ease-out;
  }

  .button-2:hover::before {
    transform: translateX(-50%) scale(1);
  }

  .button-2::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 25%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 75%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%) translateY(-100%) rotate(45deg);
    pointer-events: none;
    opacity: 0;
  }

  .button-2:hover::after {
    animation: glassPass 0.8s ease-in-out 0.5s forwards;
  }

  @keyframes glassPass {
    0% {
      transform: translateX(-100%) translateY(-100%) rotate(45deg);
      opacity: 0.7;
    }
    100% {
      transform: translateX(100%) translateY(100%) rotate(45deg);
      opacity: 0;
    }
  }

  .button-2:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #1;
  }

  .button-2:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  /* Ensure content stays on top */
  .button-2 .openai-logo,
  .button-2 .button-text {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  /* ... (styles for OpenAI logo and text remain the same) ... */

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .bruta.brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Styles for the OpenAI logo and text */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  .button-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    text-align: center;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: normal;
  }

  .button-text span:last-child {
    font-size: 16px;
  }

  /* Hover effects */
  .brutalist-button:hover .openai-logo {
    transform: translateY(-10px);
  }

  .brutalist-button:hover .openai-icon {
    width: 40px;
    height: 40px;
  }

  .brutalist-button:hover .button-text,
  .brutalist-button:hover .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  /* Animation for the OpenAI logo */
  @keyframes spin-and-zoom {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(1.1);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }

  .brutalist-button:hover .openai-icon {
    animation: spin-and-zoom 2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  .brutalist-button:hover .openai-text {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }`;
_c1 = StyledWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "Technologies");
__turbopack_context__.k.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Software/JumpStart/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$types$2f$backts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/app/Components/types/backts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$Technologies$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function home() {
    _s();
    const languages = [
        "Git",
        "Next",
        "React",
        "Node",
        "Tailwind"
    ];
    const [selectedindex, setselectedindex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function select(position) {
        setselectedindex((prev)=>prev.includes(position) ? prev.filter((i)=>i !== position) : [
                ...prev,
                position
            ]);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "home.useEffect": ()=>{
            console.log(selectedindex);
        }
    }["home.useEffect"], [
        selectedindex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex justify-center items-center gap-4 m-8",
                children: languages.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$Technologies$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        lang: item,
                        onClick: ()=>select(item)
                    }, item, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 8
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 27,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShow(true),
                children: "Click"
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$types$2f$backts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                techs: selectedindex
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 39,
                columnNumber: 14
            }, this)
        ]
    }, void 0, true);
}
_s(home, "uG1RA835xWSO0+yGEkIiZArL3Qg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_Software_JumpStart_app_fcd5bab0._.js.map
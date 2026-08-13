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
        className: "space-y-6 p-8",
        children: guide.map((guides)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border-[#252B36] p-[16px] shadow bg-[#151922]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-[#F3F4F6]",
                        children: guides.name
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    guides.install.arch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 mb-2 font-semibold text-[#9CA3AF]",
                                children: "Arch Linux"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this),
                            guides.install.arch.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto bg-[#0B0F16] border-[#1E293B] text-[#4ADE80] py-[10px] px-[12px]",
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
                    guides.install.all && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mt-4 mb-2 font-semibold",
                                children: "All"
                            }, void 0, false, {
                                fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this),
                            guides.install.all.map((command, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "bg-gray-900 text-green-400 p-3 rounded mb-2 overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        children: command
                                    }, void 0, false, {
                                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Projects/Software/JumpStart/app/Components/Guide.tsx",
                                    lineNumber: 55,
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
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Technologies({ lang, icon, onClick }) {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledWrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "button-container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                className: "brutalist-button openai button-2",
                onClick: (e)=>{
                    e.preventDefault(); // prevents navigation
                    onClick(lang);
                    setActive(!active);
                },
                className: `brutalist-button button-2 ${active ? "active" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "openai-logo",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: `https://icon.icepanel.io/Technology/svg/${icon}.svg`,
                            alt: "Next.js",
                            className: "openai-icon"
                        }, void 0, false, {
                            fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                            lineNumber: 21,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                        lineNumber: 20,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "button-text",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: lang
                        }, void 0, false, {
                            fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
                lineNumber: 10,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Projects/Software/JumpStart/app/Components/Technologies.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(Technologies, "1cfVChV6gA1Fk8+xDnwTj3gmgZo=");
_c = Technologies;
const StyledWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div`
  .button-container {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  /* Common styles */
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

  /* Button 2 */
  .button-2 {
    width: 142px;
    height: 142px;
    background-color: #171A21;
    border: 3px solid #292E38;
    border-radius: 8px;
    padding: 14px 14px;
    box-shadow: 4px 4px 0px #000000;
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Black circle animation */
  .button-2::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -150%;
    width: 300%;
    height: 300%;
    background-color: #20252D;
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.5s ease-out;
  }

  /* Hover + clicked */
  .button-2:hover::before,
  .button-2.active::before {
    transform: translateX(-50%) scale(1);
    background-color: #6366F1;
  }

  /* Glass animation */
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

  /* Hover + clicked button movement */
  .button-2:hover,
  .button-2.active {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #000000;
    
  }

  /* Actual click/press effect */
  .button-2:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }

  /* Keep content above pseudo-elements */
  .button-2 .openai-logo,
  .button-2 .button-text {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  /* Logo */
  .openai-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    z-index: 3;
  }

  /* Logo hover + active */
  .brutalist-button:hover .openai-logo,
  .brutalist-button.active .openai-logo {
    transform: translateY(-10px);
  }

  /* Icon */
  .openai-icon {
    width: 64px;
    height: 64px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  /* Icon hover + active */
  .brutalist-button:hover .openai-icon,
  .brutalist-button.active .openai-icon {
    width: 40px;
    height: 40px;
    animation: spin-and-zoom
      2s cubic-bezier(0.25, 0.8, 0.25, 1) infinite;
  }

  /* OpenAI text */
  .openai-text {
    font-size: 24px;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
    max-height: 0;
    overflow: hidden;
  }

  /* Text hover + active */
  .brutalist-button:hover .openai-text,
  .brutalist-button.active .openai-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  /* Button text */
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

  /* Button text hover + active */
  .brutalist-button:hover .button-text,
  .brutalist-button.active .button-text {
    opacity: 1;
    max-height: 60px;
    margin-top: 8px;
  }

  .button-text span:first-child {
    font-size: 12px;
    font-weight: normal;
  }

  .button-text span:last-child {
    font-size: 16px;
  }

  
  /* Clicked icon/text */
  .brutalist-button:active .openai-icon,
  .brutalist-button:active .openai-text,
  .brutalist-button:active .button-text {
    transform: scale(0.95);
  }
`;
_c1 = StyledWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "Technologies");
__turbopack_context__.k.register(_c1, "StyledWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Projects/Software/JumpStart/app/Data/TechList.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TechList",
    ()=>TechList
]);
const TechList = [
    // Languages
    {
        name: "JavaScript",
        category: "Language",
        icon: "JavaScript"
    },
    {
        name: "TypeScript",
        category: "Language",
        icon: "TypeScript"
    },
    {
        name: "Python",
        category: "Language",
        icon: "Python"
    },
    {
        name: "C",
        category: "Language",
        icon: "C"
    },
    {
        name: "C++",
        category: "Language",
        icon: "C%2B%2B-(CPlusPlus)"
    },
    {
        name: "C#",
        category: "Language",
        icon: "C%23-(CSharp)"
    },
    {
        name: "Java",
        category: "Language",
        icon: "Java"
    },
    {
        name: "Go",
        category: "Language",
        icon: "Go"
    },
    {
        name: "Rust",
        category: "Language",
        icon: "Rust"
    },
    {
        name: "PHP",
        category: "Language",
        icon: "PHP"
    },
    {
        name: "Ruby",
        category: "Language",
        icon: "Ruby"
    },
    {
        name: "Kotlin",
        category: "Language",
        icon: "Kotlin"
    },
    {
        name: "Swift",
        category: "Language",
        icon: "Swift"
    },
    {
        name: "Dart",
        category: "Language",
        icon: "Dart"
    },
    {
        name: "SQL",
        category: "Language",
        icon: "SQL-Developer"
    },
    // Frontend
    {
        name: "React",
        category: "Frontend",
        icon: "React"
    },
    {
        name: "Next.js",
        category: "Frontend",
        icon: "Next.js"
    },
    {
        name: "Vue",
        category: "Frontend",
        icon: "Vue.js"
    },
    {
        name: "Angular",
        category: "Frontend",
        icon: "Angular"
    },
    {
        name: "Svelte",
        category: "Frontend",
        icon: "Svelte"
    },
    {
        name: "Tailwind CSS",
        category: "Frontend",
        icon: "Tailwind-CSS"
    },
    {
        name: "Bootstrap",
        category: "Frontend",
        icon: "Bootstrap"
    },
    {
        name: "Redux",
        category: "Frontend",
        icon: "Redux"
    },
    {
        name: "Vite",
        category: "Frontend",
        icon: "Vite"
    },
    // Backend
    {
        name: "Node.js",
        category: "Backend",
        icon: "Node.js"
    },
    {
        name: "Express",
        category: "Backend",
        icon: "Express"
    },
    {
        name: "NestJS",
        category: "Backend",
        icon: "Nest.js"
    },
    {
        name: "Django",
        category: "Backend",
        icon: "Django"
    },
    {
        name: "Flask",
        category: "Backend",
        icon: "Flask"
    },
    {
        name: "FastAPI",
        category: "Backend",
        icon: "FastAPI"
    },
    {
        name: "Spring Boot",
        category: "Backend",
        icon: "Spring"
    },
    {
        name: "Laravel",
        category: "Backend",
        icon: "Laravel"
    },
    {
        name: "ASP.NET",
        category: "Backend",
        icon: ".NET"
    },
    // Databases
    {
        name: "PostgreSQL",
        category: "Database",
        icon: "PostgresSQL"
    },
    {
        name: "MySQL",
        category: "Database",
        icon: "MySQL"
    },
    {
        name: "SQLite",
        category: "Database",
        icon: "SQLite"
    },
    {
        name: "MongoDB",
        category: "Database",
        icon: "MongoDB"
    },
    {
        name: "Redis",
        category: "Database",
        icon: "Redis"
    },
    // Mobile
    {
        name: "Flutter",
        category: "Mobile",
        icon: "Flutter"
    },
    // AI / Machine Learning
    {
        name: "PyTorch",
        category: "AI/ML",
        icon: "PyTorch"
    },
    {
        name: "TensorFlow",
        category: "AI/ML",
        icon: "TensorFlow"
    },
    {
        name: "NumPy",
        category: "AI/ML",
        icon: "NumPy"
    },
    {
        name: "Pandas",
        category: "AI/ML",
        icon: "Pandas"
    },
    {
        name: "OpenCV",
        category: "AI/ML",
        icon: "OpenCV"
    },
    {
        name: "Scikit-learn",
        category: "AI/ML",
        icon: "scikit-learn"
    },
    // Testing
    {
        name: "Jest",
        category: "Testing",
        icon: "Jest"
    },
    {
        name: "Vitest",
        category: "Testing",
        icon: "Vite.js"
    },
    {
        name: "Cypress",
        category: "Testing",
        icon: "Cypress"
    },
    // DevOps
    {
        name: "Git",
        category: "DevOps",
        icon: "Git"
    },
    {
        name: "Docker",
        category: "DevOps",
        icon: "Docker"
    },
    {
        name: "Kubernetes",
        category: "DevOps",
        icon: "Kubernetes"
    },
    {
        name: "Terraform",
        category: "DevOps",
        icon: "HashiCorp-Terraform"
    },
    // APIs / Communication
    {
        name: "GraphQL",
        category: "API",
        icon: "GraphQL"
    },
    {
        name: "Socket.IO",
        category: "API",
        icon: "Socket.IO"
    },
    // Build / Package Tools
    {
        name: "npm",
        category: "Tools",
        icon: "NPM"
    },
    {
        name: "Yarn",
        category: "Tools",
        icon: "Yarn"
    },
    {
        name: "Bun",
        category: "Tools",
        icon: "Bun"
    },
    {
        name: "CMake",
        category: "Tools",
        icon: "CMake"
    },
    {
        name: "Gradle",
        category: "Tools",
        icon: "Gradle"
    },
    {
        name: "Maven",
        category: "Tools",
        icon: "Apache-Maven"
    }
];
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Data$2f$TechList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Projects/Software/JumpStart/app/Data/TechList.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function home() {
    _s();
    const [selectedindex, setselectedindex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedTech, setSelectedTech] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "logo text-2xl font-bold tracking-[-1px] flex justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#F3F4F6]",
                        children: "Jump"
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#6366F1]",
                        children: "Start"
                    }, void 0, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex justify-center items-center gap-4 m-8 flex-wrap h-fit",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Data$2f$TechList$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TechList"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$Technologies$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        lang: item.name,
                        icon: item.icon,
                        onClick: ()=>select(item.name)
                    }, item.name, false, {
                        fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 8
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 31,
                columnNumber: 2
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-[#6366F1] color-[#FFFFFF] hover:bg-[#818CF8] rounded-lg font-semibold h-[47px] cursor-pointer text-base py-[12px] px-[24px] duration-200 hover:translate-y-[-1px] text-white",
                    onClick: ()=>{
                        setShow(true);
                        setSelectedTech(selectedindex);
                    },
                    children: "Get Guide"
                }, void 0, false, {
                    fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                    lineNumber: 39,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this),
            show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Projects$2f$Software$2f$JumpStart$2f$app$2f$Components$2f$types$2f$backts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                techs: selectedTech
            }, void 0, false, {
                fileName: "[project]/Projects/Software/JumpStart/app/page.tsx",
                lineNumber: 49,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true);
}
_s(home, "TEj8bgO1C04e7B4W2Uyty+lgcyc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Projects_Software_JumpStart_app_c56919a1._.js.map
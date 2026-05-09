(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/TeamSnorlax/devin-admin/lib/insforge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "insforge",
    ()=>insforge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$sdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/@insforge/sdk/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
const insforge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f40$insforge$2f$sdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])({
    baseUrl: ("TURBOPACK compile-time value", "https://g5p83i33.us-east.insforge.app"),
    anonKey: ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3OC0xMjM0LTU2NzgtOTBhYi1jZGVmMTIzNDU2NzgiLCJlbWFpbCI6ImFub25AaW5zZm9yZ2UuY29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNTk0NTh9.Gd7TZsbnrhwgO8FrbAqVDxBmKO4qFCV6OjjdTZwqSiM")
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TeamSnorlax/devin-admin/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isInsforgeAdmin",
    ()=>isInsforgeAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/lib/insforge.ts [app-client] (ecmascript)");
"use client";
;
function isInsforgeAdmin() {
    try {
        const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].getHttpClient().getHeaders();
        const bearer = headers["Authorization"] ?? headers["authorization"] ?? "";
        const token = bearer.replace("Bearer ", "");
        if (!token) return false;
        // JWT payload is the second segment, base64url-encoded
        const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
        return payload.role === "project_admin";
    } catch  {
        return false;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignInForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/lib/insforge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TeamSnorlax/devin-admin/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SignInForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [oauthLoading, setOauthLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle OAuth callback when InsForge redirects back here with insforge_code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SignInForm.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            if (!params.has("insforge_code") && !params.has("code")) return;
            setOauthLoading("github"); // show spinner while resolving
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.getCurrentUser().then({
                "SignInForm.useEffect": ({ data, error: authError })=>{
                    if (authError || !data?.user) {
                        setError("OAuth sign in failed. Please try again.");
                        setOauthLoading(null);
                        return;
                    }
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInsforgeAdmin"])()) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signOut();
                        setError("This account does not have admin access.");
                        setOauthLoading(null);
                        return;
                    }
                    router.replace("/dashboard");
                }
            }["SignInForm.useEffect"]);
        }
    }["SignInForm.useEffect"], [
        router
    ]);
    async function handleOAuth(provider) {
        setOauthLoading(provider);
        setError("");
        const { error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signInWithOAuth({
            provider,
            redirectTo: `${window.location.origin}/`
        });
        if (authError) {
            setError(authError.message ?? "OAuth sign in failed");
            setOauthLoading(null);
        }
    }
    async function handleSignIn(e) {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const { data, error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signInWithPassword({
                email,
                password
            });
            if (authError) throw authError;
            if (!data?.accessToken) throw new Error("Sign in failed — no token returned");
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.getCurrentUser();
            if (!userData?.user) throw new Error("Could not retrieve user after sign in");
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isInsforgeAdmin"])()) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$lib$2f$insforge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["insforge"].auth.signOut();
                setError("This account does not have admin access.");
                return;
            }
            router.push("/dashboard");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Sign in failed");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-sm mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 mb-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "18",
                            height: "18",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 15a3 3 0 100-6 3 3 0 000 6z",
                                    stroke: "white",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z",
                                    stroke: "white",
                                    strokeWidth: "2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Devin Admin"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-gray-500",
                        children: "Sign in with your admin account"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleOAuth("github"),
                        disabled: oauthLoading !== null || loading,
                        className: "flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors",
                        children: [
                            oauthLoading === "github" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                    lineNumber: 99,
                                    columnNumber: 81
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            "Continue with GitHub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleOAuth("google"),
                        disabled: oauthLoading !== null || loading,
                        className: "flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 disabled:opacity-50 transition-colors",
                        children: [
                            oauthLoading === "google" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-4 h-4 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                                        fill: "#4285F4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 61
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                                        fill: "#34A853"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 207
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                                        fill: "#FBBC05"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 367
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                                        fill: "#EA4335"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                        lineNumber: 111,
                                        columnNumber: 519
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            "Continue with Google"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-400",
                        children: "or"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 h-px bg-gray-200"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSignIn,
                noValidate: true,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "email",
                                type: "email",
                                autoComplete: "email",
                                required: true,
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                className: "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900 transition",
                                placeholder: "you@company.com"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "password",
                                className: "block text-sm font-medium text-gray-700 mb-1",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "password",
                                type: "password",
                                autoComplete: "current-password",
                                required: true,
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                className: "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-900 transition",
                                placeholder: "••••••••"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-red-500",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 154,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors",
                        children: loading ? "Signing in…" : "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TeamSnorlax/devin-admin/components/SignInForm.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(SignInForm, "IQTKRxBzkRfNYowkwxOw217i8jw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TeamSnorlax$2f$devin$2d$admin$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignInForm;
var _c;
__turbopack_context__.k.register(_c, "SignInForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_TeamSnorlax_devin-admin_0.lm5l3._.js.map
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__7f489030._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/lib/api/api.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "nextServer": (()=>nextServer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [middleware-edge] (ecmascript)");
;
const baseURL = ("TURBOPACK compile-time value", "https://09-auth-final-hw.vercel.app") + "/api";
const nextServer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"].create({
    baseURL,
    withCredentials: true
});
}}),
"[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "checkServerSession": (()=>checkServerSession),
    "fetchNoteByIdServer": (()=>fetchNoteByIdServer),
    "fetchNotesServer": (()=>fetchNotesServer),
    "getUserFromServer": (()=>getUserFromServer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/api.ts [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
;
;
// Асинхронно формируем заголовок Cookie из объекта cookies()
const getCookieHeader = async ()=>{
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const cookieArray = [];
    for (const [key, value] of cookieStore.entries()){
        cookieArray.push(`${key}=${value}`);
    }
    return cookieArray.join("; ");
};
const fetchNotesServer = async (searchText, page = 1, perPage = 10, tag)=>{
    const cookie = await getCookieHeader();
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/notes", {
            params: {
                ...searchText && {
                    search: searchText
                },
                page,
                perPage,
                ...tag && tag !== "All" ? {
                    tag
                } : {}
            },
            headers: {
                Cookie: cookie
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error;
    }
};
const fetchNoteByIdServer = async (id)=>{
    const cookie = await getCookieHeader();
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get(`/notes/${id}`, {
            headers: {
                Cookie: cookie
            }
        });
        return res.data;
    } catch (error) {
        console.error(`Error fetching note by id ${id}:`, error);
        throw error;
    }
};
const getUserFromServer = async ()=>{
    const cookie = await getCookieHeader();
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/users/me", {
            headers: {
                Cookie: cookie
            }
        });
        return res.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};
const checkServerSession = async ()=>{
    const cookie = await getCookieHeader();
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$api$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["nextServer"].get("/auth/session", {
            headers: {
                Cookie: cookie
            }
        });
    } catch (error) {
        console.error("Error checking session:", error);
        throw error;
    }
};
}}),
"[project]/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// middleware.ts
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/serverApi.ts [middleware-edge] (ecmascript)");
;
;
;
;
const privateRoutes = [
    '/profile',
    '/notes'
];
const publicRoutes = [
    '/sign-in',
    '/sign-up'
];
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])();
    const accessToken = cookieStore.get('accessToken')?.value;
    const refreshToken = cookieStore.get('refreshToken')?.value;
    const isPublicRoute = publicRoutes.some((route)=>pathname.startsWith(route));
    const isPrivateRoute = privateRoutes.some((route)=>pathname.startsWith(route));
    if (!accessToken) {
        if (refreshToken) {
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$serverApi$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["checkServerSession"])();
            const setCookie = data.headers['set-cookie'];
            if (setCookie) {
                const cookieArray = Array.isArray(setCookie) ? setCookie : [
                    setCookie
                ];
                for (const cookieStr of cookieArray){
                    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["parse"])(cookieStr);
                    const options = {
                        expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
                        path: parsed.Path,
                        maxAge: Number(parsed['Max-Age'])
                    };
                    if (parsed.accessToken) cookieStore.set('accessToken', parsed.accessToken, options);
                    if (parsed.refreshToken) cookieStore.set('refreshToken', parsed.refreshToken, options);
                }
                if (isPublicRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url), {
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
                if (isPrivateRoute) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
                        headers: {
                            Cookie: cookieStore.toString()
                        }
                    });
                }
            }
        }
        if (isPublicRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        if (isPrivateRoute) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/sign-in', request.url));
        }
    }
    if (isPublicRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/', request.url));
    }
    if (isPrivateRoute) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
}
const config = {
    matcher: [
        '/profile/:path*',
        '/notes/:path*',
        '/sign-in',
        '/sign-up'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__7f489030._.js.map
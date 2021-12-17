import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  const secret = process.env.JWT_SECRET;
  //  Token will exists if the use is logged in
  // const basicAuth = req.cookies;
  // const basicAuth = JSON.parse(req.cookies["session-token"] || "false");
  // console.log("BasicAuth ", basicAuth);
  const token = await getToken({
    req,
    secret,
  });

  const { pathname } = req.nextUrl;
  // allow the requests if the following is correct
  // 1 - if the token exist
  // 2 - login routes
  if (pathname.includes("/api/auth") || token) {
    console.log("Middleware: first Done ", token);
    return NextResponse.next();
  }

  // redirect otherwise
  if (!token && pathname !== "/login") {
    // if (!token && !pathname.includes("/login")) {
    console.log("Middleware: Second Done ", token);

    return NextResponse.redirect("/login");
  }
}

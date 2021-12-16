import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
export async function middleware(req) {
  //  Token will exists if the use is logged in
  const token = await getToken({
    req,
    secret: process.env.JWT_SECRET,
  });

  const { pathname } = req.nextUrl;
  // allow the requests if the following is correct
  // 1 - if the token exist
  // 2 - login routes
  if (pathname.includes("/api/auth") || token) {
    console.log("Middleware: first Done");
    return NextResponse.next();
  }

  // redirect otherwise
  if (!token && pathname !== "/login") {
    console.log("Middleware: Second Done");

    return NextResponse.redirect("/login");
  }
}

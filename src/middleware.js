import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = true;

  // 🔥 Protect Dashboard
  if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
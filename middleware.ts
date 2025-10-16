import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "pt";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Si on arrive sur la racine, redirige vers /pt
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Applique le middleware à toutes les routes (sauf _next/assets et fichiers statiques)
export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

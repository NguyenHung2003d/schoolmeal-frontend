import { NextRequest, NextResponse } from "next/server";
import { requireRole } from "@/lib/auth/roleGuard";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ví dụ: chặn route admin
  if (pathname.startsWith("/admin")) {
    if (!requireRole(req, ["admin"])) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Ví dụ: chặn route teacher
  if (pathname.startsWith("/teacher")) {
    if (!requireRole(req, ["teacher", "admin"])) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

// Chỉ áp dụng cho các route này
export const config = {
  matcher: ["/admin/:path*", "/teacher/:path*"],
};

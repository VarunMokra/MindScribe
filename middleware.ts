import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  ignoredRoutes: ["/api/webhook/user"],
  afterAuth(auth, req, evt) {
    // handle users who dont have account
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect("http://localhost:3000/register");
    }
  },
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/:path/:path*",
  ],
};

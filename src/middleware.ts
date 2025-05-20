import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BASIC_AUTH_USER = "admin";
const BASIC_AUTH_PASS = "admin";

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const [type, value] = authHeader.split(" ");
    if (type === "Basic") {
      const [user, pass] = atob(value).split(":");

      if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
        return NextResponse.next();
      }
    }
  }
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

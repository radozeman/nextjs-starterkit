"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
export default function LoginButton() {
  return (
    <LoginLink className="bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
      Sign in
    </LoginLink>
  );
}

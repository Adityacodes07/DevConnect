"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={() => signOut()} className="login-btn">
        Logout
      </button>
    );
  }

  return (
    <button onClick={() => signIn("github",{
      callbackUrl: "/dashboard",
    })} className="login-btn">
      Login with GitHub
    </button>
  );
}
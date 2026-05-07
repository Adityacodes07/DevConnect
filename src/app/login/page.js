"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    setLoading(true);

    await signIn("github", {
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#0f0f1a",
          border: "1px solid #1e1e2e",
          borderRadius: "24px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "34px",
            fontWeight: "800",
            marginBottom: "10px",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
            fontSize: "14px",
          }}
        >
          Login to manage your links
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            background: loading
              ? "#1f2937"
              : "#00ff88",

            color: loading
              ? "#888"
              : "#000",

            padding: "14px",
            borderRadius: "14px",
            border: "none",
            fontWeight: "700",
            cursor: loading
              ? "not-allowed"
              : "pointer",

            fontSize: "15px",

            transition: "0.3s",
          }}
        >
          {loading
            ? "Loading..."
            : "Continue with GitHub"}
        </button>
      </div>
    </div>
  );
}
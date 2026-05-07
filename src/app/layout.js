import "./globals.css";
import LoginButton from "@/components/LoginButton";
import Providers from "./providers";
import Link from "next/link";

export const metadata = {
  title: "DevConnect",
  description: "Developer Link Sharing Platform",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <nav style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 40px",
            backgroundColor: "rgba(10,10,20,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #1e1e2e",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "20px",
                fontWeight: 800,
              }}>
                <span style={{ color: "#00ff88" }}>Dev</span>
                <span style={{ color: "#ffffff" }}>Connect</span>
              </span>
            </Link>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/dashboard" className="nav-link">Dashboard</Link>
              <Link href="/developer" className="nav-link">Developer</Link>
              <LoginButton />
            </div>
              

          </nav>

          {children}
        </Providers>
      </body>
    </html>
  );
}
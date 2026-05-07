"use client";

export default function ProfileCard({ user }) {
  return (
    <div style={{
      minHeight: "88vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      backgroundColor: "#0a0a0f",
    }}>
      <div style={{
        position: "relative",
        background: "#0f0f1a",
        border: "1px solid #1e1e2e",
        borderRadius: "24px",
        padding: "48px 40px",
        maxWidth: "420px",
        width: "100%",
        textAlign: "center",
        overflow: "hidden",
        boxShadow: "0 0 60px rgba(0,0,0,0.5)",
      }}>

        {/* Top neon line */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "160px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00ff88, transparent)",
        }} />

        {/* Avatar */}
        <div style={{ position: "relative", display: "inline-block", marginBottom: "20px" }}>
          <img
            src={user.image}
            alt="profile"
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #2a2a3e",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            inset: "-5px",
            borderRadius: "50%",
            border: "2px solid rgba(0,255,136,0.5)",
          }} />
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "26px",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "8px",
          letterSpacing: "-0.5px",
        }}>
          {user.name}
        </h1>

        {/* Bio */}
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px",
          color: "#666666",
          lineHeight: 1.8,
          marginBottom: "32px",
        }}>
          {user.bio}
        </p>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {user.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
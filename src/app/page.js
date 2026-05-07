


export default function HomePage() {
  return (
    <main
      style={{
        background: "#0a0a0f",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: "80px",
          paddingBottom: "120px",
        }}
      >
        <p
          style={{
            color: "#00ff88",
            fontSize: "13px",
            marginBottom: "16px",
            fontFamily: "monospace",
          }}
        >
          // modern developer platform
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "82px",
            fontWeight: "900",
            letterSpacing: "-3px",
            maxWidth: "850px",
          }}
        >
          Build your
          <span style={{ color: "#00ff88" }}>
            {" "}developer identity
          </span>
          <br />
          in one beautiful place.
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "18px",
            maxWidth: "650px",
            marginTop: "28px",
            lineHeight: "32px",
          }}
        >
          DevConnect helps developers create a clean public profile
          where they can manage and share all important links like
          GitHub, LinkedIn, Portfolio, Resume and more.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/dashboard"
            style={{
              background: "#00ff88",
              color: "black",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Start Building
          </a>

          <a
            href="#features"
            style={{
              border: "1px solid #1f2937",
              color: "white",
              padding: "16px 28px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="features"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom: "120px",
        }}
      >
        <div
          style={{
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#00ff88",
              fontFamily: "monospace",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            // why devconnect
          </p>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-2px",
            }}
          >
            Everything a developer needs.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {[
            {
              title: "Secure Authentication",
              desc: "Login securely using GitHub OAuth with protected dashboard routes.",
              icon: "🔐",
            },
            {
              title: "Cloud Database",
              desc: "All user links are stored safely inside MongoDB Atlas cloud database.",
              icon: "☁️",
            },
            {
              title: "Modern Dashboard",
              desc: "Manage links with a clean and responsive developer-first interface.",
              icon: "⚡",
            },
            {
              title: "Persistent Storage",
              desc: "User data remains saved permanently even after logout or refresh.",
              icon: "💾",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#0f0f1a",
                border: "1px solid #1e1e2e",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "14px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#777",
                  lineHeight: "28px",
                  fontSize: "15px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom: "120px",
        }}
      >
        <div
          style={{
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#00ff88",
              fontFamily: "monospace",
              fontSize: "13px",
              marginBottom: "14px",
            }}
          >
            // tech stack
          </p>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: "800",
              letterSpacing: "-2px",
            }}
          >
            Built using modern technologies.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
          }}
        >
          {[
            {
              name: "Next.js",
              desc: "Frontend framework with App Router and SSR support.",
            },
            {
              name: "NextAuth",
              desc: "Authentication system using GitHub OAuth.",
            },
            {
              name: "Express.js",
              desc: "Backend REST API for handling link operations.",
            },
            {
              name: "MongoDB Atlas",
              desc: "Cloud database for storing user links permanently.",
            },
          ].map((tech, index) => (
            <div
              key={index}
              style={{
                background: "#0f0f1a",
                border: "1px solid #1e1e2e",
                borderRadius: "18px",
                padding: "24px",
              }}
            >
              <h3
                style={{
                  color: "#00ff88",
                  marginBottom: "14px",
                  fontSize: "22px",
                }}
              >
                {tech.name}
              </h3>

              <p
                style={{
                  color: "#777",
                  lineHeight: "28px",
                }}
              >
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingBottom: "80px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#00ff88,#00ccff)",
            borderRadius: "30px",
            padding: "70px 40px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "black",
              fontSize: "52px",
              fontWeight: "900",
              marginBottom: "20px",
            }}
          >
            Ready to build your developer profile?
          </h2>

          <p
            style={{
              color: "#111",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "30px",
              fontSize: "18px",
            }}
          >
            Join DevConnect and create a modern public profile to showcase your work, links and developer presence.
          </p>

          <a
            href="/dashboard"
            style={{
              display: "inline-block",
              marginTop: "36px",
              background: "black",
              color: "white",
              padding: "16px 32px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}

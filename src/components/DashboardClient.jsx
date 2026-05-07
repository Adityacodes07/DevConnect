"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { data: session } = useSession();

  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  // FETCH USER LINKS
  useEffect(() => {
    if (!session?.user?.email) return;

    fetch(
      `https://devconnect-hf4d.onrender.com/api/links/${session.user.email}`
    )
      .then((res) => res.json())
      .then((data) => setLinks(data))
      .catch((err) => console.log(err));
  }, [session]);

  // ADD LINK
  const addLink = async () => {
    if (!title || !url) return;

    try {
      const res = await fetch(
        "https://devconnect-hf4d.onrender.com/api/links",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email: session.user.email,
            title,
            url,
          }),
        }
      );

      const newLink = await res.json();

      setLinks([...links, newLink]);

      setTitle("");
      setUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE LINK
  const deleteLink = async (id) => {
    try {
      await fetch(
        `https://devconnect-hf4d.onrender.com/api/links/${id}`,
        {
          method: "DELETE",
        }
      );

      setLinks(
        links.filter((link) => link._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        maxWidth: "660px",
        margin: "0 auto",
        padding: "48px 20px",
        minHeight: "88vh",
        backgroundColor: "#0a0a0f",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ marginBottom: "40px" }}>

  <p
    style={{
      color: "#555",
      fontSize: "13px",
      marginBottom: "10px",
      fontFamily: "'JetBrains Mono', monospace",
    }}
  >
    Welcome back,
  </p>

  <h1
    style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: "32px",
      fontWeight: 800,
      color: "#ffffff",
      letterSpacing: "-1px",
    }}
  >
    {session?.user?.name || "Developer"}{" "}
    <span
      style={{
        color: "#00ff88",
        fontFamily:
          "'JetBrains Mono', monospace",
      }}
    >
      _
    </span>
  </h1>

  <p
    style={{
      fontFamily:
        "'JetBrains Mono', monospace",
      fontSize: "12px",
      color: "#555555",
      marginTop: "8px",
    }}
  >
   =
  </p>
</div>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            color: "#555555",
            marginTop: "8px",
          }}
        >
         
        </p>
      </div>

      {/* Add Form */}
      <div
        style={{
          padding: "24px",
          background: "#0f0f1a",
          border: "1px solid #1e1e2e",
          borderRadius: "16px",
          marginBottom: "28px",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "#555",
            marginBottom: "14px",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          + New Link
        </p>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title  e.g. GitHub"
            className="form-input"
          />

          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL  e.g. https://..."
            className="form-input"
          />

          <button
            onClick={addLink}
            className="add-btn"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Links List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {links.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              color: "#333333",
              border: "1px dashed #1e1e2e",
              borderRadius: "16px",
            }}
          >
            <div
              style={{
                fontSize: "36px",
                marginBottom: "12px",
              }}
            >
              ⌗
            </div>

            No links yet — add your first one above
          </div>
        ) : (
          links.map((link) => (
            <div
              key={link._id}
              className="link-item"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#e2e8f0",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {link.title}
                </span>

                <span
                  style={{
                    fontFamily:
                      "'JetBrains Mono', monospace",
                    fontSize: "11px",
                    color: "#555555",
                  }}
                >
                  {link.url}
                </span>
              </div>

              <button
                onClick={() =>
                  deleteLink(link._id)
                }
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
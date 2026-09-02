import { useState } from "react";

export default function FinanceRow({
  label,
  value,
  color,
  children,
  rightContent,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom:
          "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "1.4rem 0",
          cursor: "pointer",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: color,
            }}
          />

          <span
            style={{
              fontSize: "1rem",
              fontWeight: 600,
            }}
          >
            {label}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.8rem",
          }}
        >
          {rightContent}

          {value && (
            <span
              style={{
                opacity: 0.9,
                fontWeight: 500,
              }}
            >
              {value}
            </span>
          )}

          <span
            style={{
              opacity: 0.4,
              transform: open
                ? "rotate(90deg)"
                : "rotate(0deg)",
              transition:
                "transform 300ms cubic-bezier(.22,1,.36,1)",
            }}
          >
            →
          </span>
        </div>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open
            ? "1fr"
            : "0fr",
          transition:
            "grid-template-rows 450ms cubic-bezier(.22,1,.36,1)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
          }}
        >
          <div
            style={{
              paddingBottom: open
                ? "1.5rem"
                : "0rem",

              opacity: open ? 1 : 0,

              transform: open
                ? "translateY(0)"
                : "translateY(-10px)",

              transition:
                "all 350ms cubic-bezier(.22,1,.36,1)",

              color:
                "rgba(255,255,255,0.75)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
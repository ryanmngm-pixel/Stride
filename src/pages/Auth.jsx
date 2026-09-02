import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Auth() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [signupMode, setSignupMode] =
    useState(true);

  async function handleSubmit() {
    setLoading(true);

    try {
      if (signupMode) {
        const { data, error } =
          await supabase.auth.signUp({
            email,
            password,
          });

        console.log(
          "SIGNUP DATA:",
          data
        );

        console.log(
          "SIGNUP ERROR:",
          error
        );

        if (error) {
          alert(
            `Signup Error:\n${error.message}`
          );

          throw error;
        }

        alert(
          "Account created. Check your email for verification."
        );
      } else {
        const { data, error } =
          await supabase.auth.signInWithPassword(
            {
              email,
              password,
            }
          );

        console.log(
          "LOGIN DATA:",
          data
        );

        console.log(
          "LOGIN ERROR:",
          error
        );

        if (error) {
          alert(
            `Login Error:\n${error.message}`
          );

          throw error;
        }
      }
    } catch (err) {
      console.error(
        "AUTH ERROR:",
        err
      );

      alert(
        err?.message ||
          "Unknown authentication error"
      );
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h1
          style={{
            fontWeight: 300,
            marginBottom: ".5rem",
          }}
        >
          Logic
        </h1>

        <div
          style={{
            opacity: 0.5,
            marginBottom: "2rem",
          }}
        >
          {signupMode
            ? "Create your account"
            : "Welcome back"}
        </div>

        <input
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Email"
          type="email"
          style={inputStyle}
        />

        <input
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          placeholder="Password"
          type="password"
          style={{
            ...inputStyle,
            marginTop: "1rem",
          }}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={buttonStyle}
        >
          {loading
            ? "Loading..."
            : signupMode
            ? "Create Account"
            : "Login"}
        </button>

        <button
          onClick={() =>
            setSignupMode(
              !signupMode
            )
          }
          style={switchStyle}
        >
          {signupMode
            ? "Already have an account?"
            : "Create an account"}
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "1rem",
  borderRadius: "14px",
  border:
    "1px solid rgba(255,255,255,.1)",
  background:
    "rgba(255,255,255,.05)",
  color: "white",
  outline: "none",
};

const buttonStyle = {
  width: "100%",
  marginTop: "1rem",
  padding: "1rem",
  border: "none",
  borderRadius: "14px",
  background: "white",
  color: "black",
  fontWeight: 600,
  cursor: "pointer",
};

const switchStyle = {
  marginTop: "1rem",
  background: "transparent",
  border: "none",
  color:
    "rgba(255,255,255,.6)",
  cursor: "pointer",
};
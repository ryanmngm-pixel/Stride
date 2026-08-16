import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/home");
  }

  return (
    <div className="auth-page">
      <div className="auth-header">
        <div className="logo-circle">S</div>

        <h1>Welcome Back</h1>

        <p>Sign in to continue to Stride.</p>
      </div>

      <form className="auth-form" onSubmit={handleLogin}>
        <input
          className="auth-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-button">
          {loading ? "Signing In..." : "Continue"}
        </button>
      </form>

      <Link className="auth-link" to="/signup">
        Don't have an account? Create one
      </Link>
    </div>
  );
}
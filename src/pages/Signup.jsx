import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../lib/supabase";

export default function Signup() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    if (data.user) {
      navigate("/home");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-header">
        <div className="logo-circle">S</div>

        <h1>Create Account</h1>

        <p>Start building better financial habits.</p>
      </div>

      <form className="auth-form" onSubmit={handleSignup}>
        <input
          className="auth-input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

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
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      <Link className="auth-link" to="/login">
        Already have an account?
      </Link>
    </div>
  );
}
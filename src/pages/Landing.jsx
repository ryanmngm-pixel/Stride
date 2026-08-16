import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <div className="logo-circle">
          S
        </div>

        <h1>Stride</h1>

        <p>
          Budget smarter.<br />
          Build wealth intentionally.
        </p>
      </div>

      <div className="landing-buttons">
        <button
          className="primary-button"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </button>

        <button
          className="secondary-button"
          onClick={() => navigate("/login")}
        >
          I already have an account
        </button>
      </div>
    </div>
  );
}
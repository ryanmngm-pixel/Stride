import {
  Home,
  CreditCard,
  Receipt,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  return (
    <div className="bottom-nav">

      <Link
        to="/"
        className={`nav-icon ${
          location.pathname === "/" ? "active" : ""
        }`}
      >
        <Home size={24} />
      </Link>

      <Link
        to="/accounts"
        className={`nav-icon ${
          location.pathname === "/accounts"
            ? "active"
            : ""
        }`}
      >
        <CreditCard size={24} />
      </Link>

      <Link
        to="/activity"
        className={`nav-icon ${
          location.pathname === "/activity"
            ? "active"
            : ""
        }`}
      >
        <Receipt size={24} />
      </Link>

      <Link
        to="/profile"
        className={`nav-icon ${
          location.pathname === "/profile"
            ? "active"
            : ""
        }`}
      >
        <User size={24} />
      </Link>

    </div>
  );
}
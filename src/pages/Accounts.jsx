import BottomNav from "../components/BottomNav";
import { Link } from "react-router-dom";

export default function Accounts() {
  return (
    <>
      <div className="phone-screen">

        <div className="page-header">
          <h1>Accounts</h1>
          <p>Connected accounts and balances.</p>
        </div>

        <div className="accounts-summary">
          <div className="summary-card">
            <span>Total Cash</span>
            <strong>$7,412</strong>
          </div>

          <div className="summary-card">
            <span>Total Debt</span>
            <strong>$243</strong>
          </div>
        </div>

        <div className="section">
          <h3>Bank Accounts</h3>

          <Link
            to="/accounts/checking"
            className="account-link"
          >
            <div className="account-card large">
              <div>
                <p>Checking</p>
                <small>Zions Bank</small>
              </div>

              <strong>$2,412.18</strong>
            </div>
          </Link>

          <Link
            to="/accounts/savings"
            className="account-link"
          >
            <div className="account-card large">
              <div>
                <p>Savings</p>
                <small>Zions Bank</small>
              </div>

              <strong>$5,000.00</strong>
            </div>
          </Link>
        </div>

        <div className="section">
          <h3>Credit</h3>

          <Link
            to="/accounts/amex"
            className="account-link"
          >
            <div className="account-card large">
              <div>
                <p>American Express Gold</p>
                <small>Credit Card</small>
              </div>

              <strong>-$243.17</strong>
            </div>
          </Link>
        </div>

        <button className="connect-button">
          Connect Account
        </button>

      </div>

      <BottomNav />
    </>
  );
}
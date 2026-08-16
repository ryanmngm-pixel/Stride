import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
import NetWorthChart from "../components/NetWorthChart";

export default function AccountDetails() {
  return (
    <>
      <div className="phone-screen">

        <Link to="/accounts" className="back-button">
          <ArrowLeft size={20} />
        </Link>

        <div className="page-header">
          <h1>Checking</h1>
          <p>Zions Bank</p>
        </div>

        <div className="balance-section">
          <span>Current Balance</span>
          <h2>$2,412.18</h2>
        </div>

        <NetWorthChart />

        <div className="section">
          <h3>Recent Transactions</h3>

          <div className="transaction">
            <div>
              <p>Costco</p>
              <small>Today</small>
            </div>

            <span>-$54.12</span>
          </div>

          <div className="transaction">
            <div>
              <p>Spotify</p>
              <small>Yesterday</small>
            </div>

            <span>-$10.99</span>
          </div>

          <div className="transaction">
            <div>
              <p>Payroll</p>
              <small>Aug 14</small>
            </div>

            <span>+$1,240.00</span>
          </div>
        </div>

      </div>

      <BottomNav />
    </>
  );
}
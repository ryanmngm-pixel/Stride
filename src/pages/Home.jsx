import BottomNav from "../components/BottomNav";
import NetWorthChart from "../components/NetWorthChart";
import PlaidConnect from "../components/PlaidConnect";

export default function Home() {
  return (
    <>
      <div className="phone-screen">
        <div className="top-row">
          <div>
            <p className="subtle">Total Net Worth</p>
            <h1 className="networth">$12,453.22</h1>
            <p className="gain">+$382.12 this month</p>
          </div>

          <div className="profile-circle">R</div>
        </div>

        <NetWorthChart />

        <div className="quick-stats">
          <div className="stat">
            <span>Cash</span>
            <strong>$7,412</strong>
          </div>

          <div className="stat">
            <span>Debt</span>
            <strong>$243</strong>
          </div>

          <div className="stat">
            <span>Goals</span>
            <strong>72%</strong>
          </div>
        </div>

        <PlaidConnect />

        <div className="section">
          <h3>Accounts</h3>

          <div className="account-card">
            <div>
              <p>Checking</p>
              <small>Chase</small>
            </div>

            <strong>$2,412</strong>
          </div>

          <div className="account-card">
            <div>
              <p>Savings</p>
              <small>Ally</small>
            </div>

            <strong>$5,000</strong>
          </div>

          <div className="account-card">
            <div>
              <p>Amex Gold</p>
              <small>American Express</small>
            </div>

            <strong>-$243</strong>
          </div>
        </div>

        <div className="section">
          <h3>Recent Activity</h3>

          <div className="transaction">
            <span>Costco</span>
            <span>-$54.12</span>
          </div>

          <div className="transaction">
            <span>Payroll Deposit</span>
            <span>+$1,240.00</span>
          </div>

          <div className="transaction">
            <span>Spotify</span>
            <span>-$10.99</span>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
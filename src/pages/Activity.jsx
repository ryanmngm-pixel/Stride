import BottomNav from "../components/BottomNav";

export default function Activity() {
  return (
    <>
      <div className="phone-screen">

        <div className="page-header">
          <h1>Activity</h1>
          <p>Recent transactions and account activity.</p>
        </div>

        <div className="activity-group">
          <p className="activity-date">Today</p>

          <div className="transaction">
            <div>
              <p>Costco</p>
              <small>Shopping</small>
            </div>

            <span>-$54.12</span>
          </div>

          <div className="transaction">
            <div>
              <p>Spotify</p>
              <small>Subscription</small>
            </div>

            <span>-$10.99</span>
          </div>
        </div>

        <div className="activity-group">
          <p className="activity-date">Yesterday</p>

          <div className="transaction">
            <div>
              <p>Payroll Deposit</p>
              <small>Income</small>
            </div>

            <span>+$1,240.00</span>
          </div>

          <div className="transaction">
            <div>
              <p>Chevron</p>
              <small>Gas</small>
            </div>

            <span>-$62.41</span>
          </div>
        </div>

      </div>

      <BottomNav />
    </>
  );
}
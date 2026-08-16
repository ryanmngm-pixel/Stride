import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <>
      <div className="phone-screen">
        <div className="page-header">
          <h1>Profile</h1>
          <p>Your Stride account.</p>
        </div>

        <div className="account-card large">
          <div>
            <p>Ryan Mangum</p>
            <small>ryan@example.com</small>
          </div>
        </div>

        <div className="account-card large">
          <div>
            <p>Stride AI</p>
            <small>Not Connected</small>
          </div>
        </div>

        <div className="account-card large">
          <div>
            <p>Stride Plus</p>
            <small>Free Plan</small>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
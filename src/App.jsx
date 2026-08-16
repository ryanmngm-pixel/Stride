import { BrowserRouter, Routes, Route } from "react-router-dom";

import AccountDetails from "./pages/AccountDetails";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accounts/checking" element={<AccountDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
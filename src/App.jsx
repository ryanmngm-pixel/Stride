import { BrowserRouter, Routes, Route } from "react-router-dom";
import Universe from "./pages/Universe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Universe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
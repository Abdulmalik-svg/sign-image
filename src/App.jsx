import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wall from "./pages/Wall";
import Mobile from "./pages/Mobile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/wall" element={<Wall />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </Router>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wallpaper from "./pages/Wallpaper";
import Mobile from "./pages/Mobile";
import Footer from "./components/Footer";
import WallpaperCategory from "./pages/WallpaperCategory";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Wallpaper />} />
        <Route path="/wallpaper" element={<Wallpaper />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/wallpapers/:category" element={<WallpaperCategory />} />
      </Routes>
    </Router>
  );
}

export default App;

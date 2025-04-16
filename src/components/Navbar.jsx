import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-orange-500 text-white shadow-md z-50">
      <div className="text-center py-6 text-4xl font-bold">Sign Gallery</div>
      <div className="flex justify-center gap-6 pb-4">
       
      <Link
          to="/wallpapers/tablet"
          className="hover:underline hover:text-gray-200 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/wallpapers/tablet"
          className="hover:underline hover:text-gray-200 transition duration-200"
        >
          Tablet
        </Link>
        <Link
          to="/wallpapers/mobile"
          className="hover:underline hover:text-gray-200 transition duration-200"
        >
          Mobile
        </Link>
        <Link
          to="/wallpapers/desktop"
          className="hover:underline hover:text-gray-200 transition duration-200"
        >
          Desktop
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

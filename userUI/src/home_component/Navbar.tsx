import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative top-5 bg-white w-full shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-gray-900">
              Elysian Hotel
            </Link>
          </div>
          <div className="hidden md:flex space-x-20">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              News
            </Link>
            <Link
              to="/service"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
            <Link
              to="/contact-us"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center">
            <button className="bg-[#2F0909] hover:bg-primary-dark text-white px-10 py-2 rounded-xl">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

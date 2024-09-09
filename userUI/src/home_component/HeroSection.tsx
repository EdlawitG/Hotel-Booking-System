import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center rounded-xl m-7"
      style={{ backgroundImage: "url('/image1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center space-y-6">
        {/* Navbar links */}
        <div className=" absolute top-5 left-0 right-0 w-full shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-3xl font-bold text-white-900">
                  Elysian Hotel
                </Link>
              </div>
              <div className="hidden md:flex space-x-20">
                <Link
                  to="/"
                  className="text-white-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-white-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </Link>
                <Link
                  to="/service"
                  className="text-white-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </Link>
                <Link
                  to="/contact-us"
                  className="text-white-700 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
              <div className="flex items-center">
                <button className="bg-white hover:bg-primary-dark text-[#2F0909] border px-10 py-2 rounded-xl">
                  Log In
                </button>
              </div>
            </div>
          </nav>
        </div>
        {/* Search bar */}
        <div className="relative p-1 px-3 rounded-lg bg-white shadow-lg inline-flex items-center w-1/3 border-2 border-red">
          <input
            type="text"
            placeholder="Search rooms..."
            className="px-4 py-2 w-full text-black rounded-full focus:outline-none"
          />
          <BiSearch color="black" size={25} />
        </div>
        {/* Subheading */}
        <p className="text-lg md:text-xl max-w-lg font-light">
          We are a premium hotel booking service, offering luxury and
          sophistication to discerning travelers.
        </p>
        <h1 className=" absolute bottom-40 left-20 text-5xl md:text-7xl mt-6">
          <span className="text-7xl">*</span> Book Your Perfect Stay Today
        </h1>
        {/* Floating button */}
        <div className="absolute right-12 bottom-12">
          <div className="w-32 h-32 border-4 border-white rounded-full flex justify-center items-center animate-bounce">
            <button className="w-20 h-20 bg-white text-black rounded-full flex justify-center items-center shadow-lg transition-transform duration-300 transform hover:scale-110">
              <span className="text-sm font-semibold text-center">
                Book
                <br />
                Your Stay
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

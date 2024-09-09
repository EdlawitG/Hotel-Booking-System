import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="relative flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/image.png')` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundColor: "#4F3D2F" }}
      ></div>
      <div className="absolute top-8 left-8 z-20">
        <img src="/Logo.png" alt="Logo" className="h-50 w-auto" />
      </div>
      {/* Card */}
      <div className="relative flex justify-end items-center w-full h-full p-20">
        <div className="relative flex flex-col justify-center items-center w-[673px] h-[745px] bg-white shadow-2xl rounded-xl z-10 mx-4 p-8 md:p-16">
          <h2 className="text-3xl font-bold mb-6 p-10">Create Your Account</h2>

          <form className="w-full max-w-md">
            {/* Fullname input*/}
          <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullname"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullname"
                type="fullname"
                placeholder="Enter your name"
                className="w-full px-3 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-3 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-bold py-3 px-4 rounded-lg hover:bg-red-900 transition duration-300"
              style={{ backgroundColor: "#2F0909" }}
            >
              Sign Up
            </button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-red-800 hover:text-red-900">
                Log In
              </Link>
            </p>
          </div>

          {/* Google Login */}
          <div className="text-center mt-4">
            <p className="text-sm">----------------------  OR  -------------------</p>
            <button className="w-full mt-2 bg-white text-gray-700 border border-gray-300 py-2 px-4 rounded-xl hover:bg-gray-100 transition duration-300">
              <img
                src="/Google.png"
                alt="Google"
                className="inline-block w-5 h-5 mr-2"
              />
              Login with Google
            </button>
          </div>
        </div>

        {/* Left-side text */}
        <div className="absolute bottom-10 left-10 z-10 text-white">
          <h1 className="text-5xl font-bold">
            Discover the Perfect Stay<br/> 
            For Your Next Getaway.
          </h1>
        </div>
      </div>
    </div>
  );
}

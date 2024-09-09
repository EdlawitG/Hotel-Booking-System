import { CiPhone } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime, MdOutlineEmail } from "react-icons/md";
import Navbar from "../home_component/Navbar";
import Footer from "../home_component/FooterSection";

const ContactSection = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 m-10">
        <div className="flex flex-row gap-40">
          {/* Contact Info */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold"></h2>
            <div className="flex items-center space-x-2">
              <span className="text-[#2F0909]">
                <IoLocationOutline size={30} />
              </span>
              <p className="text-lg font-bold">Bole, Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#2F0909]">
                <CiPhone size={30} />
              </span>
              <p className="text-lg font-bold">+251912131415 / +251910203040</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#2F0909]">
                <MdOutlineEmail size={30} />
              </span>
              <p className="text-lg font-bold">
                elysianhotel1@gmail.com / elysian@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#2F0909]">
                <MdAccessTime size={30} />
              </span>
              <p className="text-lg font-bold">Monday - Sunday 24hrs</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg">
            <form className="w-full max-w-md">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Contact Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
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
                  className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder=""
                  className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
              <button
                type="submit"
                className="w-[170px] text-white py-2 rounded-lg hover:bg-red-900 transition duration-300"
                style={{ backgroundColor: "#2F0909" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* <img 
            src="/image.png" 
            alt="Elysian Hotel location on Google Map" 
            className="w-full h-auto rounded-lg shadow-lg" 
          /> */}
      </div>
      <Footer />
    </>
  );
};

export default ContactSection;

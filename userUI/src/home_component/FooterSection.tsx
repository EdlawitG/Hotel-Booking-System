const Footer = () => {
  return (
    <footer className="text-white py-5 mt-10" style={{ backgroundColor: "#2F0909" }}>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 py-8">
        {/* Logo and Title */}
        <div className="col-span-2 flex flex-col items-start justify-start">
          <img
            src="logo1.png"
            alt="Logo"
            className="w-[200px]"
          />
          <p className="text-[12px] max-w-xs font-thin">
          We are a premium hotel booking service, offering luxury and sophistication to
          discerning travelers seeking the finest stays at Elsiyan Hotel</p>
        </div>

        {/* Links and Information */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold">About us</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>+251-912345678</li>
              <li>elsiyanhotel12@gmail.com</li>
              <li>Bole, Addis Ababa, Ethiopia</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>Luxury Rooms</li>
              <li>Dining</li>
              <li>Events</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">FAQ</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>How to Book</li>
              <li>Payments</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 Elysian Hotel. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm">Privacy Policy</a>
            <a href="#" className="text-sm">Terms of Service</a>
            <a href="#" className="text-sm">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

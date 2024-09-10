import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-[#1B2643] text-white w-64 p-4 py-10">
      <nav>
        <ul className="space-y-14 text-[20px]">
          <li className={`text-white ${location.pathname === '/dashboard' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={`text-white ${location.pathname === '/room-mgt' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/room-mgt">Room Management</Link>
          </li>
          <li className={`text-white ${location.pathname === '/booking-info' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/booking-info">Booking Info</Link>
          </li>
          <li className={`text-white ${location.pathname === '/booking-calendar' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/booking-calendar">Booking Calendar</Link>
          </li>
          <li className={`text-white ${location.pathname === '/booking-cancellation' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/booking-cancellation">Booking Cancellation</Link>
          </li>
          <li className={`text-white ${location.pathname === '/news' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/news">News</Link>
          </li>
          <li className={`text-white ${location.pathname === '/contact-us' ? 'font-bold' : ''} hover:font-bold cursor-pointer`}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
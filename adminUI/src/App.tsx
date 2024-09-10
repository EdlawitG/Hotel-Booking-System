import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import Dashboard from "./components/Dashboard";
import RoomMgt from "./components/RoomMgt";
import BookingInfo from "./components/BookingInfo";
import BookingCalender from "./components/BookingCalender";
import BookingCancellation from "./components/BookingCancellation";
import News from "./components/News";
import Contactus from "./components/Contactus";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AddRoom from "./components/AddRoom";
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/room-mgt" element={<RoomMgt />} />
              <Route path="/booking-info" element={<BookingInfo />} />
              <Route path="/booking-calendar" element={<BookingCalender />} />
              <Route
                path="/booking-cancellation"
                element={<BookingCancellation />}
              />
              <Route path="/news" element={<News />} />
              <Route path="/contact-us" element={<Contactus />} />
              <Route path="/add-room" element={<AddRoom/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

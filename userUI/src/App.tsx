import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Services from "./components/Services";
import ContactSection from "./components/Contactus";
import BookingForm from "./components/BookingForm";
import BookingInformation from "./components/BookingInfo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact-us" element={<ContactSection/>}/>
        <Route path="/booking" element={<BookingForm/>}/>
        <Route path="/booking-info" element={<BookingInformation/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

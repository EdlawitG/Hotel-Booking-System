import { useState } from "react";
import Footer from "../home_component/FooterSection";
import Navbar from "../home_component/Navbar";

const bookings = [
  {
    status: "Book Confirmed",
    statusIcon: "✅",
    imageUrl: "room.png", // Update with actual image path
    roomName: "Honey Moon Room",
    checkIn: "22-12-2024",
    checkOut: "23-12-2024",
    people: 2,
    payment: "Paid",
    actions: ["Cancel", "Edit Info"],
    statusClass: "text-green-600",
    borderColor: "border-green-600",
  },
  {
    status: "Pending",
    statusIcon: "🟡",
    imageUrl: "meetingHall.png", // Update with actual image path
    roomName: "Honey Moon Room",
    checkIn: "22-12-2024",
    checkOut: "23-12-2024",
    people: 2,
    payment: "Paid",
    actions: ["Cancel", "Edit Info"],
    statusClass: "text-yellow-600",
    borderColor: "border-yellow-600",
  },
  {
    status: "Book Canceled",
    statusIcon: "🚫",
    imageUrl: "wedding.png", // Update with actual image path
    roomName: "Honey Moon Room",
    checkIn: "22-12-2024",
    checkOut: "23-12-2024",
    people: 2,
    payment: "Paid",
    actions: ["Cancel", "Edit Info"],
    statusClass: "text-red-600",
    borderColor: "border-red-600",
  },
];

interface CancelModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

// Modal Component
const CancelModal: React.FC<CancelModalProps> = ({
  show,
  onClose,
  onConfirm,
}) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] text-center">
        <h2 className="text-xl font-semibold mb-4">Cancel Booking</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to cancel your hotel booking?
        </p>
        <p className="text-gray-600 mb-6">
          Only 80% would be refunded according to our policy.
        </p>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-[#422627] text-[#422627] rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 bg-[#422627] text-white rounded-lg"
          >
            Yes, Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default function BookingInformation() {
  const [showModal, setShowModal] = useState(false);
  const handleCancelClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white py-8 px-30">
        <h1 className="text-4xl font-semibold text-center m-16 text-gray-800">
          Booking Information
        </h1>
        <div className="flex justify-center space-x-4 py-10">
          <button className="px-12 py-2 rounded-full bg-[#422627] text-white">
            All
          </button>
          <button className="px-10 py-2 rounded-full border border-[#422627]">
            Pending
          </button>
          <button className="px-10 py-2 rounded-full border border-[#422627]">
            Completed
          </button>
          <button className="px-10 py-2 rounded-full border border-[#422627]">
            Canceled
          </button>
        </div>
        <div className="flex justify-center gap-16">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className={`border border-[#2F0909] shadow-lg rounded-lg w-96 p-4 relative`}
            >
              <div className="flex items-center mb-4">
                <span className={`${booking.statusClass} text-xl mr-2`}>
                  {booking.statusIcon}
                </span>
                <p className={`${booking.statusClass} text-lg font-bold`}>
                  {booking.status}
                </p>
              </div>
              <img
                className="w-full h-[250px] rounded-md object-cover mb-4"
                src={booking.imageUrl}
                alt="Room"
              />
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {booking.roomName}
              </h2>

              <p className="text-gray-600 mb-4">
                <strong>Check In Date:</strong> {booking.checkIn}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Check Out Date:</strong> {booking.checkOut}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Number of People:</strong> {booking.people}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Payment Status:</strong> {booking.payment}
              </p>
              <div className="flex justify-between mt-4">
                {booking.actions.map((action, actionIndex) => (
                  <button
                    key={actionIndex}
                    className={`px-4 py-2 rounded-lg text-sm ${
                      action === "Cancel"
                        ? "bg-[#422627] text-white"
                        : "border border-[#422627] text-[#422627]"
                    }`}
                    onClick={() => {
                      if (action === "Cancel") handleCancelClick();
                    }}
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Cancel Booking Modal */}
        <CancelModal
          show={showModal}
          onClose={handleCloseModal}
          onConfirm={handleConfirmCancel}
        />
      </div>
      <Footer />
    </>
  );
}

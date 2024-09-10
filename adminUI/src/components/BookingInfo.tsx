import { FaEye } from "react-icons/fa";
import Layout from "./Layout";

const BookingInfo = () => {
  const bookings = [
    {
      id: 1,
      room: "Family Table",
      roomtag: "Room",
      customer: "Abebe Kebede",
      phone: "+251912131415",
      checkIn: "27/08/2024",
      checkOut: "31/08/2024",
      time: "8:00 PM",
      people: 7,
      status: "Approved",
      imgUrl: "room.png",
    },
    {
      id: 2,
      room: "Meeting Hall #1",
      roomtag: "Hall",
      customer: "Abebe Kebede",
      phone: "+251912131415",
      checkIn: "27/08/2024",
      checkOut: "31/08/2024",
      time: "8:00 PM",
      people: 7,
      status: "Canceled",
      imgUrl: "wedding.png",
    },
    {
      id: 3,
      room: "Weeding Hall #1",
      roomtag: "Room",
      customer: "Abebe Kebede",
      phone: "+251912131415",
      checkIn: "25/08/2024",
      checkOut: "27/08/2024",
      time: "8:00 PM",
      people: 7,
      status: "Completed",
      imgUrl: "room.png",
    },
    {
      id: 4,
      room: "Honey Moon",
      roomtag: "Room",
      customer: "Abebe Kebede",
      phone: "+251912131415",
      checkIn: "25/08/2024",
      checkOut: "27/08/2024",
      time: "8:00 PM",
      people: 7,
      status: "Reserved",
      imgUrl: "wedding.png",
    },
  ];

  const renderStatusButton = (status: string) => {
    if (status === "Approved") {
      return (
        <div className="flex justify-between items-center mt-4">
          <button className="bg-[#1B2643] text-white px-4 py-2 rounded-lg">
            Approved
          </button>
          <button className="bg-[#AE885B] text-white px-4 py-2 rounded-lg">
            Decline
          </button>
        </div>
      );
    } else if (status === "Canceled") {
      return <div className="text-red-500 mt-4 font-semibold">Canceled</div>;
    } else if (status === "Completed") {
      return (
        <div className="text-gray-500 mt-4 font-semibold">
          Completed / Date Passed
        </div>
      );
    } else {
      return <div className="text-green-500 mt-4 font-semibold">Reserved</div>;
    }
  };

  return (
    <Layout>
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Booking Info</h2>
      <div className="flex gap-4">
        {/* Filter Section */}
        <div className="w-1/4">
          <h3 className="font-semibold mb-2">Filter</h3>
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Reserved
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Pending
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Canceled
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" /> Completed
            </label>
          </div>
        </div>

        {/* Booking Cards Section */}
        <div className="w-[55rem] grid grid-cols-2 gap-16">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-white rounded-lg p-4 border border-[#AE885B] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{booking.room}</h3>
                    <p className="text-gray-600 mb-6">{booking.roomtag}</p>
                    <div className="flex gap-16 items-center">
                      <div>
                      <p>{booking.customer}</p>
                      <p className="text-sm text-gray-500">{booking.phone}</p>
                      </div>
                      <div>
                      <FaEye size={20}/><span className="text-[10px]">View Id</span>
                      </div>
                    </div>
                  </div>

                  <img
                    src={booking.imgUrl}
                    alt={booking.room}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="flex justify-between items-center mb-2 p-2 bg-[#F7F4EF]">
                  <p className="font-bold">Check In Date:</p>
                  <p>{booking.checkIn}</p>
                </div>
                <div className="flex justify-between items-center bg-[#F7F4EF] mb-2 p-2">
                <p className="font-bold">Check Out Date:</p>
                  <p>{booking.checkOut}</p>
                </div>
                <div className="flex justify-between items-center bg-[#F7F4EF] mb-2 p-2">
                <p className="font-bold">Time:</p>
                  <p>{booking.time}</p>
                </div>
                <div className="flex justify-between items-center bg-[#F7F4EF] mb-2 p-2">
                <p className="font-bold">People:</p>
                  <p>{booking.people}</p>
                </div>
              </div>

              {/* Render the status button or label */}
              {renderStatusButton(booking.status)}
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default BookingInfo;

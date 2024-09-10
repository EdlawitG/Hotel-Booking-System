import React from 'react';
import Layout from './Layout';

interface Booking {
  id: number;
  name: string;
  phone: string;
  hallType: string;
  numberOfPeople: number;
  imageUrl: string;
}

const BookingCancellation: React.FC = () => {
  const bookings: Booking[] = [
    {
      id: 1,
      name: 'Abebe Kebede',
      phone: '+251910111213',
      hallType: 'Meeting Hall',
      numberOfPeople: 200,
      imageUrl: 'room.png',
    },
    {
      id: 2,
      name: 'Sara Tesfaye',
      phone: '+251911123456',
      hallType: 'Wedding Hall',
      numberOfPeople: 300,
      imageUrl: 'wedding.png',
    },
    // Add more bookings as needed
  ];

  const handleRefund = (bookingId: number) => {
    // Implement refund logic here
    alert(`Refund 80% for booking ID: ${bookingId}`);
  };

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center justify-between mb-6 pb-4">
            <img
              src={booking.imageUrl}
              alt="Booking"
              className="w-[300px] h-[300px] object-cover rounded-md"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-xl font-semibold">{booking.name}</h3>
              <p className="text-gray-600">{booking.phone}</p>
              <p className="mt-2 text-gray-800 font-medium">{booking.hallType}</p>
              <p className="text-gray-600">👥 {booking.numberOfPeople}</p>
            </div>
            <button
              className="ml-4 bg-[#1B2643] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              onClick={() => handleRefund(booking.id)}
            >
              Refund 80%
            </button>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default BookingCancellation;

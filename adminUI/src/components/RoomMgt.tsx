import { BiSearch } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Layout from "./Layout";

interface Room {
  id: number;
  name: string;
  roomtag: string;
  status: string;
  description: string;
  capacity: number;
  price: string;
  image: string;
}

// Define the props for RoomCard
interface RoomCardProps {
  room: Room;
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="rounded-lg overflow-hidden flex mb-6">
      <img src={room.image} alt={room.name} className="w-1/4 object-cover" />
      <div className="p-6 flex-grow gap-10">
        <h3 className="text-xl font-semibold">{room.name}</h3>
        <span className="text-sm font-thin">{room.roomtag}</span>

        {room.status === "Booked" ? (
          <div className="flex items-center space-x-2 my-2">
            <FaCircleCheck color="green" />
            <span className="ml-2 text-green-600"> Booked</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2 my-2">
            <FaCircle color="yellow" />
            <span className="ml-2 text-green-600"> Available</span>
          </div>
        )}

        <p className="text-gray-600 mb-4">{room.description}</p>
        <div className="flex items-center mb-4">
          <span className="text-gray-500 mr-1">&#128100;</span>
          <span>{room.capacity}</span>
        </div>
        <div className="text-lg font-bold text-gray-800">
          {room.price}
          <span className="font-thin text-sm">/night</span>
        </div>
        <div className="flex space-x-10 mt-4">
          <button className="bg-[#1B2643] text-white px-9 py-2 rounded-lg">
            Edit
          </button>
          <button className="border border-[#1B2643] text-[#1B2643] px-7 py-2 rounded-lg">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function RoomManagement() {
  const rooms = [
    {
      id: 1,
      name: "VIP Service",
      roomtag: "Room",
      status: "Booked",
      description: "Have Memorable Time with your Partner",
      capacity: 2,
      price: "$20k",
      image: "room.png", // Replace with your image path
    },
    {
      id: 2,
      name: "Wedding Hall #1",
      roomtag: "Hall",
      status: "Booked",
      description: "Have Memorable Time with your Partner",
      capacity: 2,
      price: "$20k",
      image: "wedding.png", // Replace with your image path
    },
  ];

  return (
    <Layout>
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <Link to="/add-room" className="bg-[#1B2643] text-white px-4 py-3 rounded-lg">
          Add New Room
        </Link>
        <div className="relative p-1 px-2 rounded-[15px] bg-white inline-flex items-center w-1/3 border-2 border-red">
          <input
            type="text"
            placeholder="Search rooms..."
            className="px-4 py-2 w-full text-black rounded-full focus:outline-none"
          />
          <BiSearch color="black" size={25} />
        </div>
      </div>
      <div className="flex justify-center space-x-10 py-10">
        <button className="px-12 py-2 rounded-full bg-[#1B2643] text-white">
          All
        </button>
        <button className="px-10 py-2 rounded-full border border-[#1B2643]">
          Rooms
        </button>
        <button className="px-10 py-2 rounded-full border border-[#422627]">
          Wedding Hall
        </button>
        <button className="px-10 py-2 rounded-full border border-[#422627]">
          Meeting Hall
        </button>
        <button className="px-10 py-2 rounded-full border border-[#422627]">
          VIP Services
        </button>
        <button className="px-10 py-2 rounded-full border border-[#422627]">
          Table Reservation
        </button>
      </div>

      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
    </Layout>
  );
}

export default RoomManagement;

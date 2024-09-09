import { IoPerson } from "react-icons/io5";
import Navbar from "../home_component/Navbar";
import { FaCheckCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import Footer from "../home_component/FooterSection";

const Services = () => {
  const services = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664392116172-814eee819397?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXltb29uJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D", // Replace with image URL or import from assets
      title: "Honey Moon Room",
      description: "Have Memorable Tome with your Partner",
      capacity: 2,
      price: "$20k",
      availability: "Available Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VlZGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D", // Replace with image URL or import from assets
      title: "Wedding Hall #1",
      description: "Have Memorable Tome with your Partner",
      capacity: 300,
      price: "$200k",
      availability: "Booked",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1670315264849-8cb4a1b1342e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZyUyMGhhbGx8ZW58MHx8MHx8fDA%3D", // Replace with image URL or import from assets
      title: "Meeting Hall #1",
      description: "Have Memorable Tome with your Partner",
      capacity: 100,
      price: "$20k",
      availability: "Available Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1627662166825-a860471632e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWx5JTIwdGFibGV8ZW58MHx8MHx8fDA%3D", // Replace with image URL or import from assets
      title: "Family Table",
      description: "Have Memorable Tome with your Partner",
      capacity: 7,
      price: "$20k",
      availability: "Available Now",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544986581-efac024faf62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VklQJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with image URL or import from assets
      title: "VIP Service",
      description: "Have Memorable Tome with your Partner",
      capacity: 2,
      price: "$20k",
      availability: "Booked",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="container mx-auto mt-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Rooms And Services</h1>
          <div className="relative px-2 rounded-lg bg-white inline-flex items-center w-1/3 border-2 border-blue">
            <input
              type="text"
              placeholder="Search rooms..."
              className="px-4 py-2 w-full text-black rounded-full focus:outline-none"
            />
            <BiSearch color="black" size={25} />
          </div>
        </div>
        <div className="flex">
          <aside className="w-1/4 p-4 bg-white rounded-lg shadow-md mr-8">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul>
              <li>
                <input type="checkbox" /> Rooms
              </li>
              <li>
                <input type="checkbox" /> Wedding Hall
              </li>
              <li>
                <input type="checkbox" /> Meeting Hall
              </li>
              <li>
                <input type="checkbox" /> VIP Service
              </li>
              <li>
                <input type="checkbox" /> Table Reservation
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-6 mb-4">Filter By Price</h3>
            <ul>
              <li>
                <input type="checkbox" /> $20 - $30
              </li>
              <li>
                <input type="checkbox" /> $40 - $70
              </li>
              <li>
                <input type="checkbox" /> $80 - $120
              </li>
            </ul>
          </aside>
          <section className="w-3/4">
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full md:w-1/3 rounded-md h-[250px] object-cover"
                  />
                  <div className="md:ml-4 mt-4 md:mt-0 flex flex-col justify-center">
                    <div>
                      <div className="flex gap-10 justify-between items-center">
                        <h2 className="text-lg font-semibold">
                          {service.title}
                        </h2>
                        <span className="flex items-center">
                          <FaCheckCircle
                            className={`${
                              service.availability === "Available Now"
                                ? "text-yellow-400"
                                : "text-[#2F0909]"
                            } mr-2`}
                            size={24}
                          />
                          <span
                            className={`text-sm ${
                              service.availability === "Booked"
                                ? "text-gray-500"
                                : "text-green-500"
                            }`}
                          >
                            {service.availability}
                          </span>
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center text-gray-700">
                          <IoPerson className="mr-1" /> {service.capacity}
                        </span>
                        {service.availability === "Available Now" && (
                          <button className="text-[#2F0909] text-[13px] px-5 py-3 border rounded-xl hover:bg-yellow-400 flex items-center space-x-2">
                            <span>Book Now</span>
                            <GrLinkNext />
                          </button>
                        )}
                      </div>
                      <div className="mt-2">
                        <span className="font-bold text-lg">
                          {service.price} /night
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Services;

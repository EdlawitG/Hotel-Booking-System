import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import Layout from "./Layout";

const newsData = [
  {
    id: 1,
    title: "New Chef From California",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Saba Restaurant",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Rophnan Concert, This Week",
    description:
      "Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
    imageUrl: "room.png",
  },
];

const NewsAndEvents = () => {
  return (
    <Layout>
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/add-room"
          className="bg-[#1B2643] text-white px-4 py-3 rounded-lg"
        >
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
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white overflow-hidden flex p-5"
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-[350px] h-[350px] object-cover rounded-lg"
            />
            <div className="p-4 flex flex-col justify-evenly">
              <h3 className="font-semibold text-3xl">{news.title}</h3>
              <p className="text-gray-600">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
    </Layout>
  );
};

export default NewsAndEvents;

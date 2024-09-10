import { useState } from "react";
import { BiSearch } from "react-icons/bi";
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
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Layout>
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={toggleModal} // Open modal on click
            className="bg-[#1B2643] text-white px-4 py-3 rounded-lg"
          >
            Add News
          </button>
          <div className="relative p-1 px-2 rounded-[15px] bg-white inline-flex items-center w-1/3 border-2 border-red">
            <input
              type="text"
              placeholder="Search rooms..."
              className="px-4 py-2 w-full text-black rounded-full focus:outline-none"
            />
            <BiSearch color="black" size={25} />
          </div>
        </div>

        {/* News List */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white overflow-hidden flex p-5">
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

        {/* Modal for adding news */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-semibold mb-4">Add News</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-4">
                    Title
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-4">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none"
                    rows={3}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-bold mb-4">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="w-full p-2  border border-gray-300 rounded-lg "
                  />
                </div>
                <div className="flex justify-between">
                  <button className="bg-[#1B2643] text-white px-4 py-2 rounded-lg">
                    Create News
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-2"
                    onClick={toggleModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
};

export default NewsAndEvents;

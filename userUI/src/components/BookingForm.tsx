import Footer from "../home_component/FooterSection";
import Navbar from "../home_component/Navbar";

const BookingForm = () => {
  const handleChange = () => {};

  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Phone Number */}
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              // value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>
          {/* Room Type */}
          <div>
            <label
              htmlFor="roomType"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Room Type <span className="text-red-500">*</span>
            </label>
            <select
              id="roomType"
              name="roomType"
              // value={formData.roomType}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
          </div>

          {/* Time */}
          <div>
            <label
              htmlFor="time"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Time <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="time"
              name="time"
              // value={formData.time}
              onChange={handleChange}
              placeholder="Enter the preferred time"
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            />
          </div>

          {/* Check-in and Check-out Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="checkInDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Check In Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="checkInDate"
                name="checkInDate"
                //   value={formData.checkInDate}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                required
              />
            </div>

            <div>
              <label
                htmlFor="checkOutDate"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Check Out Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="checkOutDate"
                name="checkOutDate"
                //   value={formData.checkOutDate}
                onChange={handleChange}
                className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
                required
              />
            </div>
          </div>

          {/* Number of People */}
          <div>
            <label
              htmlFor="numberOfPeople"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Number of People <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              // value={formData.numberOfPeople}
              onChange={handleChange}
              placeholder="Enter number of people"
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            />
          </div>

          {/* Valid ID */}
          <div>
            <label
              htmlFor="validID"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Valid ID <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="validID"
              name="validID"
              onChange={handleChange}
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#2F0909] text-white font-bold rounded-md shadow"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default BookingForm;

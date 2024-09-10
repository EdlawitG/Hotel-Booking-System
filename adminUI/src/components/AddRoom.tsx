import React, { useState } from "react";

function AddRoom() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [roomTag] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic for submitting form data, e.g., sending to API
    console.log({
      title,
      description,
      roomTag,
      capacity,
      image,
    });
  };
  const [roomType, setRoomType] = useState("");
  const [customRoomType, setCustomRoomType] = useState("");

  const handleChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value === "custom") {
      setCustomRoomType("");
    }
    setRoomType(value);
  };
  const handleBlur = () => {
    if (customRoomType) {
      setRoomType(customRoomType); // Update roomType when input loses focus, if not empty
    }
  };
  const handleCustomChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCustomRoomType(e.target.value);
    setRoomType(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h2 className="text-4xl font-semibold p-7 items-center">
        Adding New Room
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 w-[600px]">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="Enter room title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="Enter room description"
            rows={4}
            required
          />
        </div>

        <div>
          <label
            htmlFor="roomType"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Room Type <span className="text-red-500">*</span>
          </label>
          {roomType === "custom" || customRoomType ? (
            <input
              type="text"
              placeholder="Specify room type"
              value={customRoomType}
              onChange={handleCustomChange}
              onBlur={handleBlur}
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            />
          ) : (
            <select
              id="roomType"
              name="roomType"
              value={roomType}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800"
              required
            >
              <option value="">Select</option>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
              <option value="custom">Other (Specify)</option>
            </select>
          )}
        </div>

        <div>
          <label
            htmlFor="numberOfPeople"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number of People <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="w-full px-3 py-3 border border-[#2F0909] border-opacity-25 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-800"
            placeholder="Enter capacity"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full border rounded-lg px-4 py-2 mt-1"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1B2643] text-white px-4 py-2 rounded-lg"
        >
          Create Room
        </button>
      </form>
    </div>
  );
}

export default AddRoom;

import { FaRegBell, FaRegUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="w-full">
      <header className="flex justify-between items-center p-3 shadow-lg">
        <h1 className="text-3xl font-bold px-7">Elysian Hotel</h1>
        <div className="flex items-center space-x-20 px-10">
          <FaRegBell size={30} />
          <FaRegUserCircle size={33} />
        </div>
      </header>
    </div>
  );
}

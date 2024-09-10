import { FaHotel, FaBan, FaClock } from 'react-icons/fa';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count, icon, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-[233px] h-[165px]">
      <div className="flex items-center justify-center">
        <div className={`text-4xl ${color} mr-10`}>
          {icon}
        </div>
        <div className='flex gap-5 flex-wrap'>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-2xl font-thin">{count}</p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="grid grid-cols-3 gap-10 p-10">
        <DashboardCard title="Bookings" count={320} icon={<FaHotel />} color="text-[#AE885B]" />
        <DashboardCard title="Cancellation" count={100} icon={<FaBan />} color="text-red-500" />
        <DashboardCard title="Pending" count={210} icon={<FaClock />} color="text-yellow-500" />
      </div>
    </div>
  );
};

export default Dashboard;
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import Layout from "./Layout";

const BookingCalendar = () => {
    const [date] = useState<Date | null>(new Date());

    // const handleDateChange = (newDate: Date | null) => {
    //     if (newDate instanceof Date) {
    //         setDate(newDate);
    //     }
    // };

    const isBooked = (date: Date) => {
        const bookedDates = [
            new Date(2024, 0, 25), // January 25, 2024
            new Date(2024, 1, 5),  // February 5, 2024
        ];
        return bookedDates.some((bookedDate) =>
            bookedDate.getFullYear() === date.getFullYear() &&
            bookedDate.getMonth() === date.getMonth() &&
            bookedDate.getDate() === date.getDate()
        );
    };

    const tileClassName = ({ date }: { date: Date }) => {
        return isBooked(date) ? "bg-gray-700 text-white" : "";
    };

    return (
        <Layout>
        <div className="flex flex-col justify-center items-center p-18">
            <h2 className="text-2xl font-semibold mb-8">Booking Calendar</h2>
            <div className="flex justify-center">
                <Calendar
                    // onChange={handleDateChange}
                    value={date}
                    tileClassName={tileClassName} 
                    className="w-full max-w-[600px] text-lg" 
                />
            </div>
        </div>
        </Layout>
    );
};

export default BookingCalendar;
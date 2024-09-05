using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Interface{
    public interface IBooking{
        Task <Booking> CreateBookingAsync(CreateBookingDTO request);
        Task <List<Booking>> GetBookingAsync();
        Task <Booking> GetBookingByIdAsync(Guid bookingId);
        Task <List<Booking>> GetBookingsForUserAsync();
        Task <Booking> BookingStatusAsync(Guid id, string status);
        Task <Booking> UpdateBookingAsync(Guid BookingId, UpdateBookingDTO request);
        Task <Booking> CancleBookingAsync(Guid BookingId);
        Task <List<Booking>> FilterByBookingStatusAsync(string bookingStatus);
        
    }
}
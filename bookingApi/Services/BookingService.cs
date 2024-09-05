using System.Security.Claims;
using bookingApi.DTOs;
using bookingApi.Models;
using bookingApi.Reposiotry;

namespace bookingApi.Services
{
    public class BookingService(BookingRepository bookingRepository)
    {
        private readonly BookingRepository _bookingRepository = bookingRepository;
        public async Task<List<Booking>> GetBooking()
        {
            return await _bookingRepository.GetBookingAsync();
        }
        public async Task<Booking> GetBookingById(Guid bookingId)
        {
            return await _bookingRepository.GetBookingByIdAsync(bookingId);
        }
        public async Task<List<Booking>> GetBookingsForUser()
        {

            return await _bookingRepository.GetBookingsForUserAsync();
        }
        public async Task<Booking> CreateBooking(CreateBookingDTO request)
        {
            return await _bookingRepository.CreateBookingAsync(request);
        }
        public async Task<Booking> UpdateBooking(Guid bookingId, UpdateBookingDTO request)
        {
            return await _bookingRepository.UpdateBookingAsync(bookingId, request);
        }
        public async Task<Booking> CancelBooking(Guid bookingId)
        {
            return await _bookingRepository.CancleBookingAsync(bookingId);
        }
        public async Task<Booking> BookingStatus(Guid bookingId, string status)
        {
            return await _bookingRepository.BookingStatusAsync(bookingId, status);
        }
        public async Task<List<Booking>> FilterByBookingStatus(string bookingStatus){
            return await _bookingRepository.FilterByBookingStatusAsync(bookingStatus);
        }
    }
}
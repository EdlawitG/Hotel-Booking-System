using System.Security.Claims;
using AutoMapper;
using bookingApi.Data;
using bookingApi.DTOs;
using bookingApi.Interface;
using bookingApi.Models;
using bookingApi.Services;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Reposiotry
{
    public class BookingRepository(ApplicationDbContext context, ILogger<BookingRepository> logger, IMapper mapper, IHttpContextAccessor httpContextAccessor, PhotoService photoService) : IBooking
    {
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<BookingRepository> _logger = logger;
        private readonly IMapper _mapper = mapper;
        private readonly IHttpContextAccessor _httpContextAccessor = httpContextAccessor;

        private readonly PhotoService _photoService = photoService;
        public async Task<Booking> BookingStatusAsync(Guid bookingId, string status)
        {
            try
            {
                var booking = await _context.Booking
                    .FirstOrDefaultAsync(b => b.Id == bookingId) ?? throw new KeyNotFoundException($"Booking with ID {bookingId} not found.");
                booking.BookingStatus = status;
                if (status == "Confirmed")
                {
                    var room = await _context.Rooms.FirstOrDefaultAsync(b => b.RoomNumber == booking.RoomNumber) ?? throw new KeyNotFoundException($"Room with RoomNum {booking.RoomNumber} not found.");
                    room.Status = "Booked";
                }
                await _context.SaveChangesAsync();

                return booking;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occurred while updating the booking status for ID {bookingId}.");
                throw new Exception("An error occurred while updating the booking status.");
            }
        }
        public async Task<Booking> CreateBookingAsync(CreateBookingDTO request)
        {
            try
            {
                var userIdString = (_httpContextAccessor?.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value) ?? throw new UnauthorizedAccessException("User is not logged in.");
                var userId = Guid.Parse(userIdString);
                if (userIdString == null)
                {
                    _logger.LogError("User is not LoggedIn");
                    throw new UnauthorizedAccessException("User is not logged in.");
                }
                var userExists = await _context.Accounts.AnyAsync(u => u.Id == userId);
                if (!userExists)
                {
                    throw new KeyNotFoundException("User not found in the database.");
                }
                if (request.VaildID == null || request.VaildID.Length == 0)
                {
                    throw new ArgumentException("No file provided for upload.");
                }
                var photoResult = await _photoService.AddPhotoAsync(request.VaildID);
                var booking = _mapper.Map<Booking>(request);
                booking.VaildID = photoResult.PhotoUrl;
                booking.UserId = userId;
                booking.BookingStatus = "Pending";
                // var roomTag = await _context.RoomTags.FindAsync(request.RoomTag);
                _context.Booking.Add(booking);
                await _context.SaveChangesAsync();
                return booking;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating Booking.");
                throw new Exception("An error occurred while creating Booking.");
            }
        }
        public async Task<List<Booking>> GetBookingAsync()
        {
            var bookings = await _context.Booking.ToListAsync() ?? throw new Exception(" No Booking found");
            return bookings;
        }
        public async Task<List<Booking>> GetBookingsForUserAsync()
        {
            var userIdString = (_httpContextAccessor?.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value) ?? throw new UnauthorizedAccessException("User is not logged in.");
            var userId = Guid.Parse(userIdString);
            if (userIdString == null)
            {
                _logger.LogError("User is not LoggedIn");
                throw new UnauthorizedAccessException("User is not logged in.");
            }
            var userExists = await _context.Accounts.AnyAsync(u => u.Id == userId);
            if (!userExists)
            {
                throw new KeyNotFoundException("User not found in the database.");
            }
            try
            {

                var bookings = await _context.Booking
                    .Where(b => b.UserId == userId)
                    .ToListAsync();
                if (bookings == null || bookings.Count == 0)
                {
                    // throw new KeyNotFoundException($"No bookings for User {userId} found.");
                    return [];
                }

                return bookings;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occurred while fetching bookings for User {userId}.");
                throw;
            }
        }
        public async Task<Booking> GetBookingByIdAsync(Guid id)
        {
            return await _context.Booking.FindAsync(id) ?? throw new KeyNotFoundException($"No Booking with Id {id} found.");
        }
        public async Task<Booking> UpdateBookingAsync(Guid bookingId, UpdateBookingDTO updateRequest)
        {
            try
            {
                var userIdString = (_httpContextAccessor?.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value) ?? throw new UnauthorizedAccessException("User is not logged in.");
                var userId = Guid.Parse(userIdString);
                if (userIdString == null)
                {
                    _logger.LogError("User is not LoggedIn");
                    throw new UnauthorizedAccessException("User is not logged in.");
                }
                var userExists = await _context.Accounts.AnyAsync(u => u.Id == userId);
                if (!userExists)
                {
                    throw new KeyNotFoundException("User not found in the database.");
                }
                var updatedbooking = await _context.Booking.FirstOrDefaultAsync(b => b.Id == bookingId && b.UserId == userId) ?? throw new KeyNotFoundException($"Booking with ID {bookingId} for User {userId} not found.");
                var booking = _mapper.Map<Booking>(updateRequest);
                if (booking.RoomTag != null)
                {
                    updatedbooking.RoomTag = booking.RoomTag;
                }
                if (booking.RoomNumber != null)
                {
                    updatedbooking.RoomNumber = booking.RoomNumber;
                }
                if (booking?.BookTime != null)
                {
                    updatedbooking.BookTime = booking.BookTime;
                }
                if (booking?.CheckinDate != null)
                {
                    updatedbooking.CheckinDate = booking.CheckinDate;
                }
                if (booking?.CheckoutDate != null)
                {
                    updatedbooking.CheckoutDate = booking.CheckoutDate;
                }
                if (booking?.NumofPpl != null)
                {
                    updatedbooking.NumofPpl = booking.NumofPpl;
                }
                if (updatedbooking.VaildID != null)
                {
                    var publicId = ExtractPublicIdFromUrl(updatedbooking.VaildID);
                    await _photoService.DeletePhotoAsync(publicId);
                    if (updateRequest.VaildID == null || updateRequest.VaildID.Length == 0)
                    {
                        throw new ArgumentException("No file provided for upload.");
                    }
                    var updatedImage = await _photoService.AddPhotoAsync(updateRequest.VaildID);
                    updatedbooking.VaildID = updatedImage.PhotoUrl;
                }

                _context.Update(updatedbooking);
                await _context.SaveChangesAsync();
                return updatedbooking;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occurred while updating the booking with ID {bookingId} for User");
                throw new Exception("An error occurred while updating the booking.");
            }
        }
        public async Task<Booking> CancleBookingAsync(Guid bookingId)
        {
            try
            {
                var userIdString = (_httpContextAccessor?.HttpContext?.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value) ?? throw new UnauthorizedAccessException("User is not logged in.");
                var userId = Guid.Parse(userIdString);
                var booking = await _context.Booking
                    .FirstOrDefaultAsync(b => b.Id == bookingId && b.UserId == userId) ?? throw new KeyNotFoundException($"Booking with ID {bookingId} not found.");
                booking.BookingStatus = "Canceled";
                var room = await _context.Rooms.FirstOrDefaultAsync(r => r.RoomNumber == booking.RoomNumber) ?? throw new KeyNotFoundException("");
                room.Status = "Available";
                await _context.SaveChangesAsync();
                return booking;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"An error occurred while canceling the booking with ID {bookingId}.");
                throw new Exception("An error occurred while canceling the booking.");
            }
        }
        private string ExtractPublicIdFromUrl(string url)
        {
            try
            {
                var uri = new Uri(url);
                var segments = uri.AbsolutePath.Trim('/').Split('/');
                return segments.Last();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while extracting the public ID from URL: {Url}.", url);
                throw new ArgumentException("Invalid URL format.", nameof(url));
            }
        }
        public async Task<List<Booking>> FilterByBookingStatusAsync(string bookingStatus)
        {
            return await _context.Booking.Where(t => t.BookingStatus == bookingStatus).ToListAsync();

        }
    }
}

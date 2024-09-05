using bookingApi.DTOs;
using bookingApi.Reposiotry;
using bookingApi.Services;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bookingApi.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class BookingController(BookingService bookingService) : ControllerBase
    {
        private readonly BookingService _bookingService = bookingService;
        [Authorize(Roles = "Admin")]
        [HttpGet("/bookings")]
        public async Task<IActionResult> GetBooking()
        {

            try
            {
                var booking = await _bookingService.GetBooking();

                return Ok(new
                {
                    message = "Successfully retrieved all Bookings",
                    Booking = booking
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "An error occurred while retrieving all rooms",
                    error = ex.Message
                });
            }
        }
        [Authorize(Roles = "User")]
        [HttpGet("/booking")]
        public async Task<IActionResult> GetBookingForUser()
        {
            try
            {
                var booking = await _bookingService.GetBookingsForUser();
                return Ok(new
                {
                    message = "Successfully retrieved all Bookings for user",
                    Booking = booking
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "An error occurred while retrieving all rooms",
                    error = ex.Message
                });
            }
        }
        [Authorize(Roles = "User")]
        [HttpPost("/create-booking")]
        public async Task<IActionResult> CreateBooking([FromForm] CreateBookingDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _bookingService.CreateBooking(request);
                return Ok(new { message = "Booking Created successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the room", error = ex.Message });
            }
        }
        [Authorize(Roles = "User")]
        [HttpPut("/update-booking/{bookingId:guid}")]
        public async Task<IActionResult> UpdateBooking(Guid bookingId, UpdateBookingDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var pro = await _bookingService.GetBookingById(bookingId);
                if (pro == null)
                {
                    return NotFound(new { message = $"No Booking item with Id {bookingId} found." });
                }
                await _bookingService.UpdateBooking(bookingId, request);
                return Ok(new { message = $" Booking with id {bookingId} successfully updated" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while updating the Todo item with", error = ex.Message });
            }
        }
        [Authorize(Roles = "User")]
        [HttpPost("/cancel-booking/{bookingId:guid}")]
        public async Task<IActionResult> CancleBooking(Guid bookingId)
        {
            try
            {
                var pro = await _bookingService.GetBookingById(bookingId);
                if (pro == null)
                {
                    return NotFound(new { message = $"No Booking item with Id {bookingId} found." });
                }
                await _bookingService.CancelBooking(bookingId);
                return Ok(new { message = $" Booking with id {bookingId} successfully Canceled" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while canceling booked with", error = ex.Message });
            }
        }
        [HttpGet("/booking-status")]
        public async Task<IActionResult> FilterByBookingStatus([FromQuery] string status)
        {
            var booking = await _bookingService.FilterByBookingStatus(status);
            return Ok(new { message = $"Filtered Items.", data = booking });
        }

    }
}
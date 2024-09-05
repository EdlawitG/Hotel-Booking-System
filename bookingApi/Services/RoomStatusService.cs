using bookingApi.Data;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Services
{
    public class RoomStatusService(IServiceProvider serviceProvider, ILogger<RoomStatusService> logger) : BackgroundService
    {
        private readonly IServiceProvider _serviceProvider = serviceProvider;
        private readonly ILogger<RoomStatusService> _logger = logger;

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                await UpdateRoomStatusesAsync();
                await Task.Delay(TimeSpan.FromHours(1), stoppingToken); // Runs every hour, adjust as needed
            }
        }

        private async Task UpdateRoomStatusesAsync()
        {
            try
            {
                using var scope = _serviceProvider.CreateScope();
                var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
                var today = DateOnly.FromDateTime(DateTime.UtcNow);
                var rooms = await context.Rooms.ToListAsync() ?? throw new Exception(" No Booking found");
                var roomsToUpdate = await context.Rooms
        .Join(context.Booking, // Correct entity name should be "Bookings"
              room => room.Id, // Room Id
              booking => booking.Id, // Booking RoomId
              (room, booking) => new { room, booking })
        .Where(rb => rb.booking.CheckoutDate <= today && rb.room.Status != "Available")
        .ToListAsync();
                foreach (var booking in roomsToUpdate)
                {
                    booking.booking.BookingStatus = "Completed, The date has Passed";
                    booking.room.Status = "Avaliable";
                }

                await context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating room statuses.");
            }
        }
    }
}
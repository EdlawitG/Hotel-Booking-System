using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class UpdateBookingDTO
    {
        [Required]
        public Guid UserId { get; set; }

        [Required]
        public int? RoomTag { get; set; }

        [Required]
        public TimeOnly BookTime { get; set; }

        [Required]
        public DateOnly CheckinDate { get; set; }

        [Required]
        public DateOnly CheckoutDate { get; set; }

        [Required]
        public int NumofPpl { get; set; }

        public IFormFile? VaildID { get; set; }

        [Required]
        public string? RoomNumber { get; set; }
        public string? BookingStatus { get; set; }
    }
}

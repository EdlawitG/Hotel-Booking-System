using System.ComponentModel.DataAnnotations;
namespace bookingApi.Models{
    public class Booking{
        public Guid Id { get; set; }
        [Required]
        public Guid UserId {get; set;}
        [Required]
        public int? RoomTag {get; set;}
        [Required]
        public TimeOnly BookTime {get; set;}
        [Required]
        public DateOnly CheckinDate {get; set;}
        [Required]
        public DateOnly CheckoutDate {get; set;}
        [Required]
        public int NumofPpl {get; set;}
        public string? VaildID {get; set;}
        [Required]
        public string? RoomNumber {get; set;}

        // confirmed or pending
        public string? BookingStatus {get; set;}
    }
}
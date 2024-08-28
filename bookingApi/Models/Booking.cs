using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bookingApi.Models{
    public class Booking{
        public Guid Id { get; set; }
        [Required]
        public Guid UserId {get; set;}
        [Required]
        public string? RoomType {get; set;}
        [Required]
        public TimeOnly BookTime {get; set;}
        [Required]
        public DateOnly CheckinDate {get; set;}
        [Required]
        public DateOnly CheckoutDate {get; set;}
        [Required]
        public int NumofPpl {get; set;}
        // [NotMapped]
        public string? VaildID {get; set;}
        [Required]
        public Guid RoomID {get; set;}
    }
}
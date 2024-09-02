using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class UpdateRoomDTO
    {
        [Required]
        public string? Title { get; set; }
        [Required]
        [StringLength(100)]
        public string? Description { get; set; }
        [Required]
        public string? RoomTag { get; set; }
        [Required]
        public int Capacity { get; set; }
        public IFormFile? Image { get; set; }
        //booked or completed or cancel or
        // public string? Status { get; set; }
    }
}
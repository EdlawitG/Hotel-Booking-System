using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class CreateRoomDTO
    {
        [Required]
        public string? Title { get; set; }
        [Required]
        [StringLength(100)]
        public string? Description { get; set; }
        public Guid? RoomTagId { get; set; } // ID of the selected tag if it's existing
        public string? NewRoomTag { get; set; } // Name of the new tag if the admin creates one
        [Required]
        public int Capacity { get; set; }
        [Required]
        public string? RoomNumber { get; set; }
        public decimal Price { get; set; }
        public IFormFile? Image { get; set; }
        //booked or completed or cancel or
        public string? Status { get; set; }
    }
}
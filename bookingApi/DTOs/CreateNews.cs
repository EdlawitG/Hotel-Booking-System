using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class CreateNewsDTO
    {
        [Required]
        [StringLength(20)]
        public string? Title { get; set; }
        [Required]
        [StringLength(120)]
        public string? Description { get; set; }
        [Required]
        public IFormFile? Image { get; set; }
        public DateTime Date { get; set; }
    }
}
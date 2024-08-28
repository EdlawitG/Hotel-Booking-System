using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class RegisterDTO
    {
        [Required]
        public string? FullName { get; set; }
        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}
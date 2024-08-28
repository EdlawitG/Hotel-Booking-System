using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class LoginDTO
    {
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Password { get; set; }
        public DateTime? LastLogin { get; set; } = DateTime.Now.ToUniversalTime();
    }
}
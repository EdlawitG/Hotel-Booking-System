using System.ComponentModel.DataAnnotations;

namespace bookingApi.Models{
    public class Account {
        public Guid Id { get; set; }
         [Required]
        [StringLength(100)]
        public string? FullName { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string? Email { get; set; }

        [Required]
        public string? Password { get; set; }

        [Required]
        public required string Role { get; set; }  // Role could be "User" or "Admin"

        public DateTime CreatedAt { get; set; } = DateTime.Now.ToUniversalTime();

        public DateTime? LastLogin { get; set; } 
    }
}
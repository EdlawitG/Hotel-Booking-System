using System.ComponentModel.DataAnnotations;

namespace bookingApi.DTOs
{
    public class CreateContactusDTOs
    {
        [Required]
        [StringLength(10)]
        public string? FullName { get; set; }
        [Required]
        [EmailAddress]
        public string? Email { get; set; }
        [Required]
        public string? ContactPhone { get; set; }
        [Required]
        [StringLength(100)]
        public string? Message { get; set; }
    }
}
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bookingApi.Models{
    public class News{
        public Guid Id {get; set;}
        [Required]
        [StringLength(20)]
        public string? Title {get;set;}
        [Required]
        [StringLength(120)]
        public string? Description {get; set;}
        [Required]
        public string? Image {get;set;}
        public DateTime Date {get; set;}
    }
}
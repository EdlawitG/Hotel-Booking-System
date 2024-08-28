using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace bookingApi.Models{
    public class News{
        public Guid Id {get; set;}
        [Required]
        public string? Title {get;set;}
        public string? Description {get; set;}
        // [NotMapped]
        public string? Image {get;set;}
        public DateTime Date {get; set;}
    }
}
namespace bookingApi.Models{
    public class Contactus{
        public Guid Id { get; set; }
        public string? FullName { get; set; }
        public string? Email { get; set; }  
        public string? ContactPhone {get; set;}
        public string? Message { get; set; }
    }
}
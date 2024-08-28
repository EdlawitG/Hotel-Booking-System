using System.ComponentModel.DataAnnotations.Schema;

namespace bookingApi.Models{
    public class Room{
      public Guid Id {get;set;}
      public string? Title {get; set;}
      public string? Description {get; set;}
      public string? RoomTag {get; set;}
      public int Capacity {get; set;}
      // [NotMapped]
      public string? Image {get; set;} 
        //booked or completed or cancel or
        public string? Status {get; set;}

    }
}
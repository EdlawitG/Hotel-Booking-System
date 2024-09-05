using System.ComponentModel.DataAnnotations.Schema;

namespace bookingApi.Models
{
  public class Room
  {
    public Guid Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int? RoomTag { get; set; }
    public string? RoomNumber {get; set;}
    public int Capacity { get; set; }
    public decimal Price { get; set; }
    public string? Image { get; set; }
    //booked or avaliable
    public string? Status { get; set; }

  }
}
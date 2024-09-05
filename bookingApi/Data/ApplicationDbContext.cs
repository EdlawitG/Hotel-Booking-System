using bookingApi.Models;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Data
{
    public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext (options){
        public DbSet<Account> Accounts { get; set; }
         public DbSet<Booking> Booking { get; set; }
         public DbSet<Contactus> Contactus {get; set;}
         public DbSet<News> News {get; set;}
         public DbSet<Room> Rooms {get; set;}
         public DbSet<RoomTag> RoomTags {get; set;}
    }
}
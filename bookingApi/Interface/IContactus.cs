using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Interface
{
    public interface IContactus
    {
        Task<List<Contactus>> GetAllContactAsync();
        Task<Contactus> CreateNewsAsync(CreateContactusDTOs request);
    }
}
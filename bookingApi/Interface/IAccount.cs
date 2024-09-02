using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Interface
{
    public interface IAccount
    {
        Task RegisterAsyncUser(RegisterDTO request);
        Task RegisterAsyncAdmin(RegisterDTO request);
        Task<Account> LogInAsync(LoginDTO request);
        Task LogoutAsync();
    }
}

using bookingApi.DTOs;

namespace bookingApi.Interface
{
    public interface IAccount
    {
        Task<string> RegisterUser(RegisterDTO request);
        Task<string> RegisterAdmin(RegisterDTO request);
        Task<string> LogIn(LoginDTO request);
        Task<String> Logout();
    }
}

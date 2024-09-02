using bookingApi.DTOs;
using bookingApi.Models;
using bookingApi.Reposiotry;
namespace bookingApi.Services
{
    public class AccountService(AccountRepository authRepository)
    {
        private readonly AccountRepository _authRepository = authRepository ?? throw new ArgumentNullException(nameof(authRepository));

        public async Task RegisterUser(RegisterDTO request)
        {
            await _authRepository.RegisterAsyncUser(request);
        }
        public async Task RegisterAdmin(RegisterDTO request){
            await _authRepository.RegisterAsyncAdmin(request);
        }

        public async Task<Account> Login(LoginDTO request)
        {
            
          return  await _authRepository.LogInAsync(request);
        }
        public async Task LogOut()
        {
            await _authRepository.LogoutAsync();
        }
    }
}

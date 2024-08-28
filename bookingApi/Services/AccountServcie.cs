using AutoMapper;
using bookingApi.DTOs;
using bookingApi.Reposiotry;
namespace bookingApi.Service
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

        public async Task<Models.Account> Login(LoginDTO request)
        {
            
          return  await _authRepository.LoginAsync(request);
        }
        public async Task LogOut()
        {
            await _authRepository.LogoutAsync();
        }
    }
}

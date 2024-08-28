using AutoMapper;
using bookingApi.Helper;
using bookingApi.Data;
using bookingApi.DTOs;
using bookingApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using bookingApi.Interface;

namespace bookingApi.Reposiotry
{
    public class AccountRepository(ApplicationDbContext context, ILogger<AccountRepository> logger, IMapper mapper, IHttpContextAccessor httpContextAccessor) : IAccount
    {
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<AccountRepository> _logger = logger;
        private readonly IMapper _mapper = mapper;
        private readonly HttpContext _httpContext = httpContextAccessor.HttpContext ?? throw new InvalidOperationException("HttpContext is not available.");
        public async Task RegisterAsyncUser(RegisterDTO request)
        {
            try
            {
                var account = _mapper.Map<Account>(request);
                var existingUser = await _context.Accounts.FirstOrDefaultAsync(u => u.Email == account.Email);

                if (existingUser != null)
                {
                    _logger.LogError($"User with email {account.Email} already exits");
                    throw new Exception($"User with email {account.Email} already exits");
                }

                var user = new Account
                {
                    FullName = account.FullName,
                    Email = account.Email,
                    Password = BCrypt.Net.BCrypt.HashPassword(account.Password),
                    Role = "User"
                };

                _context.Accounts.Add(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating user.");
                throw new Exception("An error occurred while creating user.");
            }
        }
        public async Task RegisterAsyncAdmin(RegisterDTO request)
        {
            try
            {
                var account = _mapper.Map<Account>(request);
                var existingUser = await _context.Accounts.FirstOrDefaultAsync(u => u.Email == account.Email);

                if (existingUser != null)
                {
                    _logger.LogError($"User with email {account.Email}");
                    throw new Exception($"User with email {account.Email}");
                }

                var user = new Account
                {
                    FullName = account.FullName,
                    Email = account.Email,
                    Password = BCrypt.Net.BCrypt.HashPassword(account.Password),
                    Role = "Admin"
                };

                _context.Accounts.Add(user);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating user.");
                throw new Exception("An error occurred while creating user.");
            }
        }

        public async Task<Account> LoginAsync(LoginDTO request)
        {
            try
            {
                var account = _mapper.Map<Account>(request);
                var user = await _context.Accounts.FirstOrDefaultAsync(u => u.Email == account.Email);

                if (user == null || !BCrypt.Net.BCrypt.Verify(account.Password, user.Password))
                {
                    throw new UnauthorizedAccessException("Invalid username or password.");
                }
                user.LastLogin = DateTime.UtcNow;
                _context.Accounts.Update(user);
                await _context.SaveChangesAsync();
                GenerateToken.GenerateAccessToken(_httpContext, user.Id.ToString());
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while logging in.");
                throw new Exception("An error occurred while logging in.");
            }
        }
        public async Task LogoutAsync()
        {
            try
            {
                await _httpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while logging out.");
                throw new Exception("An error occurred while logging out.");
            }
        }

        public Task<string> RegisterUser(RegisterDTO request)
        {
            throw new NotImplementedException();
        }

        public Task<string> RegisterAdmin(RegisterDTO request)
        {
            throw new NotImplementedException();
        }

        public Task<string> LogIn(LoginDTO request)
        {
            throw new NotImplementedException();
        }

        public Task<string> Logout()
        {
            throw new NotImplementedException();
        }
    }
}
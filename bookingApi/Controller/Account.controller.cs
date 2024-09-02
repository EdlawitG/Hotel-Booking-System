using System.Security.Claims;
using bookingApi.DTOs;
using bookingApi.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
namespace bookingApi.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class AccountController(AccountService accountService) : ControllerBase
    {
        private readonly AccountService _accountService = accountService;
        [HttpPost("/registeradmin")]
        public async Task<IActionResult> RegisterAdmin([FromBody] RegisterDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _accountService.RegisterAdmin(request);
                return Ok(new { message = "Admin registered successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the admin", error = ex.Message });
            }
        }
        [HttpPost("/registeruser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegisterDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _accountService.RegisterUser(request);
                return Ok(new { messsage = "User Created Successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the user", error = ex.Message });

            }
        }
        [HttpPost("/login")]
        public async Task<IActionResult> Login([FromBody] LoginDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                 var loggedInUser = await _accountService.Login(request);
        
        if (loggedInUser == null)
        {
            return Unauthorized(new { message = "Invalid credentials" });
        }

        // Create claims based on the logged-in user
        var claims = new List<Claim>
        {
            new(ClaimTypes.Name, loggedInUser.Id.ToString()),
            new(ClaimTypes.Role, loggedInUser.Role)
        };

        var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
        var authProperties = new AuthenticationProperties
        {
            // Set additional authentication properties if needed
        };

        // Sign in the user
        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(claimsIdentity),
            authProperties);

        return Ok(new { message = "LoggedIn", LoggedInUser = loggedInUser });
    }
    catch (System.Exception ex)
    {
        // Handle exceptions as necessary
        return StatusCode(500, new { message = "Internal server error", error = ex.Message });
    }
        }
        [HttpGet("/logout")]
        public async Task<IActionResult> Logout()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _accountService.LogOut();
                return Ok(new { message = "Logged Out" });
            }
            catch (Exception ex)
            {

                return StatusCode(500, new { message = "An error occurred while LoggingOut", error = ex.Message });

            }
        }
    }
}
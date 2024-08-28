using bookingApi.DTOs;
using bookingApi.Service;
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
                return Ok(new { message = "LoggedIn", LoggedInUser = loggedInUser});
            }
            catch (System.Exception)
            {

                throw;
            }
        }
        [HttpPost("/logout")]
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
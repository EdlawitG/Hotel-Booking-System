using bookingApi.DTOs;
using bookingApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace bookingApi.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController(ContactusService contactusService) : ControllerBase
    {
        private readonly ContactusService _contactusService = contactusService;
        [HttpGet("/contactus")]
        public async Task<IActionResult> GetAllContactus()
        {

            try
            {
                var contact = await _contactusService.GetAllContactus();

                return Ok(new
                {
                    message = "Successfully retrieved all Contactus Info",
                    Contactus = contact
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "An error occurred while retrieving all rooms",
                    error = ex.Message
                });
            }
        }
        [HttpPost("/contactus")]     
        public async Task<IActionResult> CreateContactus([FromBody] CreateContactusDTOs request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _contactusService.CreateContactus(request);
                return Ok(new { message = "Created successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the room", error = ex.Message });
            }
        }
      
    }
}
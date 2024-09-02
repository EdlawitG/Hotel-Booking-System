using bookingApi.DTOs;
using bookingApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bookingApi.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class NewsController(NewsService newsService) : ControllerBase
    {
        private readonly NewsService _newsService = newsService;
        [HttpGet("/news")]
        public async Task<IActionResult> GetAllNews()
        {

            try
            {
                var news = await _newsService.GetAllNews();

                return Ok(new
                {
                    message = "Successfully retrieved all news",
                    News = news
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
        [HttpGet("/news/{id:guid}")]
        public async Task<IActionResult> GetNewsById(Guid id)
        {
            try
            {
                var news = await _newsService.GetNewsByID(id);
                return Ok(new { message = "Successfully retrieved News", news = news });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while featching", error = ex.Message });

            }
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("/add-news")]     
        public async Task<IActionResult> Createnews([FromForm] CreateNewsDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _newsService.CreateNews(request);
                return Ok(new { message = "News Created successfully By Admin" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the room", error = ex.Message });
            }
        }
        [Authorize(Roles = "Admin")]
        [HttpPut("/update-news/{id:guid}")]
        public async Task<IActionResult> UpdateNews(Guid id, UpdateNewsDTO request)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var pro = await _newsService.GetNewsByID(id);
                if (pro == null)
                {
                    return NotFound(new { message = $"No News with Id {id} found." });
                }
                await _newsService.UpdateNews(request, id);
                return Ok(new { message = $" News with id {id} successfully updated" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while updating News item with", error = ex.Message });
            }
        }
        [Authorize(Roles = "Admin")]
        [HttpDelete("/delete-news/{id:guid}")]
        public async Task<IActionResult> DeleteNews(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var room = await _newsService.GetNewsByID(id);
                if (room == null)
                {
                    return NotFound(new { message = $"No News with Id {id} found." });
                }
                await _newsService.DeleteNews(id);
                return Ok(new { message = $"News with id {id} successfully deleted" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while deleting the product", error = ex.Message });
            }
        }
    }
}
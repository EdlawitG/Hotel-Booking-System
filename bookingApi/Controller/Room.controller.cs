using bookingApi.DTOs;
using bookingApi.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace bookingApi.Controller
{
    [ApiController]
    [Route("[controller]")]
    public class RoomController(RoomService roomService) : ControllerBase
    {
        private readonly RoomService _roomService = roomService;
        [HttpGet("/rooms")]
        public async Task<IActionResult> GetAllRooms()
        {

            try
            {
                var rooms = await _roomService.GetAllRooms();

                return Ok(new
                {
                    message = "Successfully retrieved all rooms",
                    Rooms = rooms
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
        [HttpGet("/room/{id:guid}")]
        public async Task<IActionResult> GetRoomById(Guid id)
        {
            try
            {
                var room = await _roomService.GetRoomByID(id);
                return Ok(new { message = "Successfully retrieved Room", Room = room });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while featching", error = ex.Message });

            }
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("/add-room")] 
        public async Task<IActionResult> CreateRoom([FromForm] CreateRoomDTO request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                await _roomService.CreateRoom(request);
                return Ok(new { message = "Room Created successfully By Admin" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "An error occurred while creating the room", error = ex.Message });
            }
        }
        
        [Authorize(Roles ="Admin")]
        [HttpPut("/update-room/{id:guid}")]
        public async Task<IActionResult> UpdateProduct(Guid id, UpdateRoomDTO request)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var pro = await _roomService.GetRoomByID(id);
                if (pro == null)
                {
                    return NotFound(new { message = $"No Room item with Id {id} found." });
                }
                await _roomService.UpdateRoom(request, id);
                return Ok(new { message = $" Room with id {id} successfully updated" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while updating the Todo item with", error = ex.Message });
            }
        }
        [Authorize(Roles ="Admin")]
        [HttpDelete("/delete-room/{id:guid}")]
        public async Task<IActionResult> DeleteProduct(Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var room = await _roomService.GetRoomByID(id);
                if (room == null)
                {
                    return NotFound(new { message = $"No product with Id {id} found." });
                }
                await _roomService.DeleteRoom(id);
                return Ok(new { message = $"Product with id {id} successfully deleted" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while deleting the product", error = ex.Message });
            }
        }
          [HttpGet("/room-status")]
        public async Task<IActionResult> FilterByStatus([FromQuery] string status)
        {
            var rooms = await _roomService.FilterByStatus(status);
            return Ok(new { message = $"Filtered Items.", data = rooms });
        }

        [HttpGet("/room-tag")]
        public async Task<IActionResult> FilterByRoomTag([FromQuery] int roomtag)
        {
            var room = await _roomService.FilterByRoomTag(roomtag);
            return Ok(new { message = $"Filtered Items.", data = room });

        }
        [HttpGet("/search-room")]
        public async Task<IActionResult> SearchRoom([FromQuery] string searchTerm)
        {
            var room = await _roomService.SearchRoom(searchTerm);
            return Ok(new { message = $"Search Items.", data = room });
            
        }
        [HttpGet("/room-price")]
        public async Task<IActionResult> FilterByPrice([FromQuery] decimal price){
            var room = await _roomService.FilterByPrice(price);
            return Ok(new { message = $"Filtered Items.", data = room });
        }
    }
}
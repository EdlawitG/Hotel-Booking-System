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
        [HttpPut("/update-room{id:guid}")]
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
                    return NotFound(new { message = $"No Todo item with Id {id} found." });
                }
                await _roomService.UpdateRoom(request, id);
                return Ok(new { message = $" Product Item  with id {id} successfully updated" });

            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred while updating the Todo item with", error = ex.Message });
            }
        }
        [HttpDelete("/delete-room{id:guid}")]
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
    }
}
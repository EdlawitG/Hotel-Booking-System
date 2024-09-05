using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Interface
{
    public interface IRoom
    {
        Task<List<Room>> GetAllRoomAsync();
        Task<Room> GetRoomByIDAsync(Guid id);
        Task<Room> CreateRoomAsync(CreateRoomDTO request);
        Task<Room> UpdateRoomAsync(UpdateRoomDTO request, Guid id);
        Task<RoomTag> GetOrCreateRoomTagAsync(string? newRoomTag, Guid? existingTagId);
        Task DeleteRoomAsync(Guid id);
        Task<List<Room>> SearchRoomAsync(string searchTerm);
        Task<List<Room>> FilterByStatusAsync(string status);
        Task<List<Room>> FilterByRoomTagAsync(int roomtag);
        Task<List<Room>> FilterByPriceAsync(decimal price);
    }
}
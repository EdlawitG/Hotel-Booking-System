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
        Task DeleteRoomAsync(Guid id);
    }
}
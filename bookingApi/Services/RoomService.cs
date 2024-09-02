using bookingApi.DTOs;
using bookingApi.Models;
using bookingApi.Reposiotry;

namespace bookingApi.Services
{
    public class RoomService(RoomRepository roomRepository)
    {
        private readonly RoomRepository _roomRepository = roomRepository;
        public async Task<List<Room>> GetAllRooms()
        {
            return await _roomRepository.GetAllRoomAsync();
        }
        public async Task<Room> GetRoomByID(Guid id)
        {
            var room = await _roomRepository.GetRoomByIDAsync(id);
            return room;
        }
        public async Task<Room> CreateRoom(CreateRoomDTO request){
            return await _roomRepository.CreateRoomAsync(request);
        }
        public async Task<Room> UpdateRoom(UpdateRoomDTO request, Guid id){
            return await _roomRepository.UpdateRoomAsync(request, id);
        }
        public async Task DeleteRoom(Guid id){
             await _roomRepository.DeleteRoomAsync(id);
        }
    }
}
using AutoMapper;
using bookingApi.Data;
using bookingApi.DTOs;
using bookingApi.Interface;
using bookingApi.Models;
using bookingApi.Services;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Reposiotry
{
    public class RoomRepository(ApplicationDbContext context, ILogger<RoomRepository> logger, IMapper mapper, PhotoService photoService) : IRoom
    {
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<RoomRepository> _logger = logger;
        private readonly IMapper _mapper = mapper;
        private readonly PhotoService _photoService = photoService;
        public async Task<List<Room>> GetAllRoomAsync()
        {
            var rooms = await _context.Rooms.ToListAsync() ?? throw new Exception(" No Rooms found");
            return rooms;
        }

        public async Task<Room> GetRoomByIDAsync(Guid id)
        {
            var room = await _context.Rooms.FindAsync(id) ?? throw new KeyNotFoundException($"No Room with Id {id} found.");
            return room;
        }

        public async Task<Room> CreateRoomAsync(CreateRoomDTO request)
        {
            try
            {
                if (request.Image == null || request.Image.Length == 0)
                {
                    throw new ArgumentException("No file provided for upload.");
                }
                var photoResult = await _photoService.AddPhotoAsync(request.Image);
                var rooms = _mapper.Map<Room>(request);
                rooms.Image = photoResult.PhotoUrl;
                rooms.Status = "Avaliable";
                _context.Rooms.Add(rooms);
                await _context.SaveChangesAsync();
                return rooms;
            }
            catch (Exception ex)
            {

                _logger.LogError(ex, "An error occurred while creating user.");
                throw new Exception("An error occurred while creating user.");
            }
        }

        public async Task<Room> UpdateRoomAsync(UpdateRoomDTO request, Guid id)
        {
            var room = _mapper.Map<Room>(request);
            try
            {
                var updatedRoom = await _context.Rooms.FindAsync(id) ?? throw new KeyNotFoundException($"No Product item with Id {id} found.");
                if (room.Title != null)
                {
                    updatedRoom.Title = room.Title;
                }
                if (room.Description != null)
                {
                    updatedRoom.Description = room.Description;
                }
                if (updatedRoom.Image != null)
                {
                   var publicId = ExtractPublicIdFromUrl(updatedRoom.Image);
                    await _photoService.DeletePhotoAsync(publicId);
                     if (request.Image == null || request.Image.Length == 0)
                {
                    throw new ArgumentException("No file provided for upload.");
                }
                    var updatedImage = await _photoService.AddPhotoAsync(request.Image);
                    updatedRoom.Image = updatedImage.PhotoUrl;
                }
                if (room.RoomTag != null)
                {
                    updatedRoom.RoomTag = room.RoomTag;
                }
                if (updatedRoom.Capacity != 0)
                {
                    updatedRoom.Capacity = room.Capacity;
                }

                _context.Update(updatedRoom);
                await _context.SaveChangesAsync();
                return updatedRoom;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating the Todo item with Id: {Id}.", id);
                throw;
            }
        }

        public async Task DeleteRoomAsync(Guid id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if (room != null)
            {
                if (!string.IsNullOrEmpty(room.Image))
                {
                    var publicId = ExtractPublicIdFromUrl(room.Image);
                    await _photoService.DeletePhotoAsync(publicId);
                }
                _context.Rooms.Remove(room);
                await _context.SaveChangesAsync();

            }
            else
            {
                throw new KeyNotFoundException($"No Product item with Id {id} found.");

            }
        }
        private string ExtractPublicIdFromUrl(string url)
        {
            try
            {
                var uri = new Uri(url);
                var segments = uri.AbsolutePath.Trim('/').Split('/');
                return segments.Last();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while extracting the public ID from URL: {Url}.", url);
                throw new ArgumentException("Invalid URL format.", nameof(url));
            }
        }
    }


}
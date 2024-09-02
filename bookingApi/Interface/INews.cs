using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Interface
{
    public interface INews
    {
        Task<List<News>> GetAllNewsAsync();
        Task<News> GetNewsByIDAsync(Guid id);
        Task<News> CreateNewsAsync(CreateNewsDTO request);
        Task<News> UpdateNewsAsync(UpdateNewsDTO request, Guid id);
        Task DeleteNewsAsync(Guid id);
    }
}
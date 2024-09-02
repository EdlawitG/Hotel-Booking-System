using bookingApi.DTOs;
using bookingApi.Models;
using bookingApi.Reposiotry;

namespace bookingApi.Services
{
    public class NewsService(NewsRepository newsRepository)
    {
        private readonly NewsRepository _newsRepository = newsRepository;
        public async Task<List<News>> GetAllNews()
        {
            return await _newsRepository.GetAllNewsAsync();
        }
        public async Task<News> GetNewsByID(Guid id)
        {
            var news = await _newsRepository.GetNewsByIDAsync(id);
            return news;
        }
        public async Task<News> CreateNews(CreateNewsDTO request){
            return await _newsRepository.CreateNewsAsync(request);
        }
        public async Task<News> UpdateNews(UpdateNewsDTO request, Guid id){
            return await _newsRepository.UpdateNewsAsync(request, id);
        }
        public async Task DeleteNews(Guid id){
             await _newsRepository.DeleteNewsAsync(id);
        }
    }
}
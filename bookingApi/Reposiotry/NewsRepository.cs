using AutoMapper;
using bookingApi.Data;
using bookingApi.DTOs;
using bookingApi.Interface;
using bookingApi.Models;
using bookingApi.Services;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Reposiotry
{
    public class NewsRepository(ApplicationDbContext context, ILogger<NewsRepository> logger, IMapper mapper, PhotoService photoService) : INews
    {
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<NewsRepository> _logger = logger;
        private readonly IMapper _mapper = mapper;
        private readonly PhotoService _photoService = photoService;
        public async Task<News> CreateNewsAsync(CreateNewsDTO request)
        {
            try
            {
                if (request.Image == null || request.Image.Length == 0)
                {
                    throw new ArgumentException("No file provided for upload.");
                }
                var photoResult = await _photoService.AddPhotoAsync(request.Image);
                var news = _mapper.Map<News>(request);
                news.Date =  DateTime.UtcNow;
                news.Image = photoResult.PhotoUrl;
                _context.News.Add(news);
                await _context.SaveChangesAsync();
                return news;
            }
            catch (Exception ex)
            {

                _logger.LogError(ex, "An error occurred while creating news.");
                throw new Exception("An error occurred while creating news.");
            }
        }
        public async Task<List<News>> GetAllNewsAsync()
        {
            var news = await _context.News.ToListAsync() ?? throw new Exception(" No News found");
            return news;

        }
        public async Task<News> GetNewsByIDAsync(Guid id)
        {
            var news = await _context.News.FindAsync(id) ?? throw new KeyNotFoundException($"No News with Id {id} found.");
            return news;
        }
        public async Task<News> UpdateNewsAsync(UpdateNewsDTO request, Guid id)
        {
            var news = _mapper.Map<News>(request);
            try
            {
                var updatedNews = await _context.News.FindAsync(id) ?? throw new KeyNotFoundException($"No News with Id {id} found.");
                if (news.Title != null)
                {
                    updatedNews.Title = news.Title;
                }
                if (news.Description != null)
                {
                    updatedNews.Description = news.Description;
                }
                if (updatedNews.Image != null)
                {
                   var publicId = ExtractPublicIdFromUrl(updatedNews.Image);
                    await _photoService.DeletePhotoAsync(publicId);
                     if (request.Image == null || request.Image.Length == 0)
                {
                    throw new ArgumentException("No file provided for upload.");
                }
                    var updatedImage = await _photoService.AddPhotoAsync(request.Image);
                    updatedNews.Image = updatedImage.PhotoUrl;
                }

                _context.Update(updatedNews);
                await _context.SaveChangesAsync();
                return updatedNews;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating the News with Id: {Id}.", id);
                throw;
            }
        }
        public async Task DeleteNewsAsync(Guid id)
        {
            var news = await _context.News.FindAsync(id);
            if (news != null)
            {
                if (!string.IsNullOrEmpty(news.Image))
                {
                    var publicId = ExtractPublicIdFromUrl(news.Image);
                    await _photoService.DeletePhotoAsync(publicId);
                }
                _context.News.Remove(news);
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
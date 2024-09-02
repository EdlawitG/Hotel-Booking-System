using AutoMapper;
using bookingApi.Data;
using bookingApi.DTOs;
using bookingApi.Models;
using Microsoft.EntityFrameworkCore;

namespace bookingApi.Reposiotry
{
    public class ContactusReposiotry(ApplicationDbContext context, ILogger<ContactusReposiotry> logger, IMapper mapper)
    {
        private readonly ApplicationDbContext _context = context;
        private readonly ILogger<ContactusReposiotry> _logger = logger;
        private readonly IMapper _mapper = mapper;
        public async Task<Contactus> CreateContactAsync(CreateContactusDTOs request)
        {
            try
            {
                var contact = _mapper.Map<Contactus>(request);
                _context.Contactus.Add(contact);
                await _context.SaveChangesAsync();
                return contact;
            }
            catch (Exception ex)
            {

                _logger.LogError(ex, "An error occurred while creating news.");
                throw new Exception("An error occurred while creating news.");
            }
        }
        public async Task<List<Contactus>> GetAllContactAsync()
        {
            var contact = await _context.Contactus.ToListAsync() ?? throw new Exception(" No News found");
            return contact;
        }
    }
}
using bookingApi.DTOs;
using bookingApi.Models;
using bookingApi.Reposiotry;

namespace bookingApi.Services{
    public class ContactusService(ContactusReposiotry contactusReposiotry) {
         private readonly ContactusReposiotry _contactusRepository = contactusReposiotry;
        public async Task<List<Contactus>> GetAllContactus()
        {
            return await _contactusRepository.GetAllContactAsync();
        }
       
        public async Task<Contactus> CreateContactus(CreateContactusDTOs request){
            return await _contactusRepository.CreateContactAsync(request);
        }
     
    }
}
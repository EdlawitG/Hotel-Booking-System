using AutoMapper;
using bookingApi.DTOs;
using bookingApi.Models;

namespace bookingApi.Mapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<RegisterDTO, Account>().ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<LoginDTO, Account>().ForMember(dest => dest.Id, opt => opt.Ignore());
        }
    }
}

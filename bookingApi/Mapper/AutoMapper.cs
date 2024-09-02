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
            CreateMap<CreateRoomDTO, Room>().ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<UpdateRoomDTO, Room>().ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<CreateNewsDTO, News>().ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<UpdateNewsDTO, News>().ForMember(dest => dest.Id, opt => opt.Ignore());
            CreateMap<CreateContactusDTOs, Contactus>().ForMember(dest => dest.Id, opt => opt.Ignore());
        }
    }
}

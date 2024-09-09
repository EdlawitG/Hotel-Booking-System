const Services = () => {
    const services = [
      { title: 'Luxury Rooms', img: '/room.png' },
      { title: 'Conference and Meeting', img: '/meetingHall.png' },
      { title: 'Free Wifi', img: '/wifi.png' },
      { title: 'Bar and Restaurant', img: '/bar.png' },
      { title: 'Wedding Package', img: '/wedding.png' },
      { title: 'Services and Facilities', img: '/gym.png' },
    ];
    return (
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden group ${
                index >= 3 ? 'col-span-1 h-49' : 'col-span-1 h-70'
              }`}
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center transition-opacity duration-500 group-hover:bg-opacity-50">
                <h3 className="text-white text-xl font-bold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Services;
  
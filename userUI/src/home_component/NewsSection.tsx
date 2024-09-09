const News = () => {
    const newsItems = [
      { title: 'New Chef From California', img: '/path-to-news-image-1.jpg', desc: 'Short description for the news item.' },
      { title: 'Saba Restaurant', img: '/path-to-news-image-2.jpg', desc: 'Short description for the news item.' },
      { title: 'Rophnan Concert, This Week', img: '/path-to-news-image-3.jpg', desc: 'Short description for the news item.' },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {newsItems.map(item => (
            <div key={item.title} className="rounded overflow-hidden shadow-lg bg-white">
              <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default News;
  
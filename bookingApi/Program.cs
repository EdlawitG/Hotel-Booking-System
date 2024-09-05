using bookingApi.Data;
using bookingApi.Mapper;
using bookingApi.Reposiotry;
using bookingApi.Services;
using CloudinaryDotNet;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("AppDbContext")));
builder.Services.AddControllers();
builder.Services.AddHttpContextAccessor();
builder.Services.AddScoped<AccountService>();
builder.Services.AddScoped<AccountRepository>();
builder.Services.AddScoped<RoomService>();
builder.Services.AddScoped<RoomRepository>();
builder.Services.AddScoped<PhotoService>();
builder.Services.AddScoped<NewsService>();
builder.Services.AddScoped<NewsRepository>();
builder.Services.AddScoped<ContactusService>();
builder.Services.AddScoped<ContactusReposiotry>();
builder.Services.AddScoped<BookingService>();
builder.Services.AddScoped<BookingRepository>();
builder.Services.AddAutoMapper(typeof(AutoMapperProfile));
builder.Services.AddAuthorization();
builder.Services.AddHostedService<RoomStatusService>();
var cloudinaryConfig = builder.Configuration.GetSection("CloudinarySetting");
var cloudinary = new Cloudinary(new Account(
    cloudinaryConfig["CloudName"],
    cloudinaryConfig["ApiKey"],
    cloudinaryConfig["ApiSecret"]
));

builder.Services.AddSingleton(cloudinary);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")

              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.Cookie.Name = "Auth";
        options.ExpireTimeSpan = TimeSpan.FromMinutes(30); // access duration for particular cookie
        options.LoginPath = "/login"; // Specify your login path
        options.LogoutPath = "/logout";
        options.AccessDeniedPath = "/access-denied"; // Specify your access denied path
    });
builder.Services.AddAuthorizationBuilder()
    .AddPolicy("AdminPolicy", policy =>
        policy.RequireRole("Admin"))
    .AddPolicy("UserPolicy", policy =>
        policy.RequireRole("User"));

var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseCors("AllowReactApp");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();
app.UseHttpsRedirection();

app.Run();
using GourmetGateway.Infrastructure;
using GourmetGateway.Models;
using GourmetGateway.Redis;
using GourmetGateway.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
IConfiguration configuration = builder.Configuration;
string connectionString = configuration.GetConnectionString("DefaultConnection")!;

builder.Services.AddCors(
	options => options.AddDefaultPolicy(policy => policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod())
);
builder.Services
	.AddControllers()
	.AddNewtonsoftJson(options => options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
builder.Services.AddHealthChecks();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(
	options =>
		options.SwaggerDoc(
			"v1",
			new OpenApiInfo
			{
				Title = "Gourmet Gateway API",
				Version = "v1",
				Description = "An API that aims at enabling users to keep track of their grocery and cooking needs.",
				Contact = new OpenApiContact
				{
					Name = "Jacob Dolorzo",
					Email = "jacob.dolorzo.96@gmail.com",
					Url = new Uri(configuration["Swagger:Contact"]!),
				},
			}
		)
);
builder.Services.AddScoped<IGenericRepository<Recipe>, RecipeRepository>();
builder.Services.AddScoped<IGenericRepository<Good>, GoodRepository>();
builder.Services.AddScoped<ICacheService, CacheService>();
builder.Services.AddDbContext<GourmetGatewayContext>(
	options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).EnableDetailedErrors()
);

WebApplication app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors();

app.UseAuthorization();

app.MapHealthChecks("/health-check");
app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

public partial class Program { }

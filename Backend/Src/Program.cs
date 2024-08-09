using GourmetGateway.Infrastructure;
using GourmetGateway.Infrastructure.Repositories;
using GourmetGateway.Models;
using GourmetGateway.Redis;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
ConfigurationManager configuration = builder.Configuration;
string connectionString = configuration.GetConnectionString("DefaultConnection")!;
string[] origins = configuration.GetSection("FrontEnd:Origins").Get<string[]>()!;

builder
	.Services.AddControllers()
	.AddNewtonsoftJson(o => o.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddHealthChecks();

builder.Services.AddCors(o =>
	o.AddDefaultPolicy(p => p.WithOrigins(origins).AllowAnyHeader().AllowAnyMethod().AllowCredentials())
);

builder.Services.AddDbContext<GourmetGatewayContext>(o =>
	o.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).EnableDetailedErrors()
);

builder.Services.AddScoped<IGenericRepository<Recipe>, RecipeRepository>();
builder.Services.AddScoped<IGenericRepository<Good>, GoodRepository>();
builder.Services.AddScoped<ICacheService, CacheService>();

builder.Services.AddSwaggerGen(o =>
	o.SwaggerDoc(
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

WebApplication app = builder.Build();

app.UseDefaultFiles();

app.UseStaticFiles();

app.UseSwagger();

app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();

app.UseCors();

app.MapHealthChecks("/health-check");

app.MapControllers();

await app.RunAsync();

public partial class Program { }

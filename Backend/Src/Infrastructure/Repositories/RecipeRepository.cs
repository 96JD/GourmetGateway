using GourmetGateway.Models;

namespace GourmetGateway.Infrastructure.Repositories;

public class RecipeRepository(GourmetGatewayContext db) : GenericRepository<Recipe>(db) { }

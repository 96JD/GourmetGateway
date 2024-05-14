using GourmetGateway.Infrastructure;
using GourmetGateway.Models;

namespace GourmetGateway.Repositories;

public class RecipeRepository(GourmetGatewayContext db) : GenericRepository<Recipe>(db) { }

using GourmetGateway.Models;

namespace GourmetGateway.Infrastructure.Repositories;

public class GoodRepository(GourmetGatewayContext db) : GenericRepository<Good>(db) { }

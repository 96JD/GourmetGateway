using GourmetGateway.Infrastructure;
using GourmetGateway.Models;

namespace GourmetGateway.Repositories;

public class GoodRepository(GourmetGatewayContext db) : GenericRepository<Good>(db) { }

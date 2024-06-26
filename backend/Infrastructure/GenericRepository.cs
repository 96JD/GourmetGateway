using GourmetGateway.Models;
using System.Linq.Expressions;

namespace GourmetGateway.Infrastructure;

public abstract class GenericRepository<T> : IGenericRepository<T>
    where T : class
{
    protected GourmetGatewayContext context;

    protected GenericRepository(GourmetGatewayContext context)
    {
        this.context = context;
    }

    public virtual IEnumerable<T> FetchAll()
    {
        return [.. context.Set<T>()];
    }

    public virtual IEnumerable<T> FetchAllWhere(Expression<Func<T, bool>> expression)
    {
        return [.. context.Set<T>().AsQueryable().Where(expression)];
    }

    public virtual T FetchSingleByKey(int key)
    {
        return context.Find<T>(key)!;
    }

    public virtual T FetchSingleWhere(Expression<Func<T, bool>> expression)
    {
        return context.Set<T>().AsQueryable().Where(expression).SingleOrDefault()!;
    }

    public virtual T Create(T entity)
    {
        return context.Add(entity).Entity;
    }

    public virtual T Update(T entity)
    {
        return context.Update(entity).Entity;
    }

    public virtual T Delete(T entity)
    {
        return context.Remove(entity).Entity;
    }

    public virtual void SaveChanges()
    {
        context.SaveChanges();
    }
}
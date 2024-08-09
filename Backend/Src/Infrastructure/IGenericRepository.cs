using System.Linq.Expressions;

namespace GourmetGateway.Infrastructure;

public interface IGenericRepository<T>
{
	IEnumerable<T> FetchAll();

	IEnumerable<T> FetchAllWhere(Expression<Func<T, bool>> expression);

	T FetchSingleByKey(int key);

	T FetchSingleWhere(Expression<Func<T, bool>> expression);

	T Create(T entity);

	T Update(T entity);

	T Delete(T entity);

	void SaveChanges();
}

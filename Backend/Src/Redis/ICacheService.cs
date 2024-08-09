namespace GourmetGateway.Redis;

public interface ICacheService
{
	void SetData<T>(string key, T value, DateTimeOffset expirationTime);

	T GetData<T>(string key);

	void RemoveData(string key);
}

using GourmetGateway.Utils;
using Newtonsoft.Json;
using StackExchange.Redis;

namespace GourmetGateway.Redis;

public class CacheService : ICacheService
{
	private readonly IDatabase? db;

	public CacheService()
	{
		if (AppSettingsConfigurator.IsDevelopmentEnvironment())
		{
			IConfiguration configuration = AppSettingsConfigurator.GetAppSettingsJson();
			Lazy<ConnectionMultiplexer> lazyConnection =
				new(() => ConnectionMultiplexer.Connect(configuration.GetValue<string>("Redis:URL")!));
			db = lazyConnection.Value.GetDatabase();
		}
	}

	public void SetData<T>(string key, T value, DateTimeOffset expirationTime)
	{
		db!.StringSet(
			key,
			JsonConvert.SerializeObject(
				value,
				new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore }
			),
			expirationTime.DateTime.Subtract(DateTime.Now)
		);
	}

	public T GetData<T>(string key)
	{
		RedisValue value = db!.StringGet(key);
		if (string.IsNullOrEmpty(value))
		{
			return default!;
		}
		return JsonConvert.DeserializeObject<T>(value!)!;
	}

	public void RemoveData(string key)
	{
		if (db!.KeyExists(key))
		{
			db.KeyDelete(key);
		}
	}
}

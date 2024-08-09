using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace GourmetGateway.Tests;

public class HealthCheckTests : IClassFixture<WebApplicationFactory<Program>>
{
	private readonly HttpClient _httpClient;

	public HealthCheckTests(WebApplicationFactory<Program> factory)
	{
		_httpClient = factory.CreateDefaultClient();
	}

	[Fact]
	public async Task HealthCheck_ReturnSuccessAndCorrectContentType()
	{
		var response = await _httpClient.GetAsync("/health-check");
		response.EnsureSuccessStatusCode();
		Assert.Equal("text/plain", response.Content.Headers.ContentType?.ToString());
	}
}

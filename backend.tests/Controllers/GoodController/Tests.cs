using Controllers.GoodController.IResponses;
using GourmetGateway.Models;
using Microsoft.AspNetCore.Mvc.Testing;

namespace Controllers.GoodController.Tests;

public class Tests(WebApplicationFactory<Program> factory)
    : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly HttpClient _httpClient = factory.CreateDefaultClient();

    [Fact]
    public async Task Good_ShouldUpdateShoppingListAndReturnUpdatedGood()
    {
        var response = await _httpClient.PatchAsJsonAsync(
            "api/v1/Good/update-shopping-list",
            new Good
            {
                Id = 1,
                Name = "Whole Chicken",
                ImageUrl = "/assets/images/goods/Whole Chicken.png",
                InShoppingList = 1,
            }
        );

        var updatedGood = response.Content
            .ReadFromJsonAsync<UpdatedGoodResponse>()
            ?.Result?.updatedGood;
        Assert.Equal(1, updatedGood!.InShoppingList);
    }
}

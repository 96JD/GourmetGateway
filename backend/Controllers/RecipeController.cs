using _96JD.ErrorHandlerUtils;
using GourmetGateway.Infrastructure;
using GourmetGateway.Models;
using GourmetGateway.Redis;
using GourmetGateway.Utils;
using Microsoft.AspNetCore.Mvc;

namespace GourmetGateway.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class RecipeController(IGenericRepository<Recipe> recipeRepository, ICacheService cacheService) : ControllerBase
{
	private static readonly object _lock = new();

	[HttpGet("fetch-all-recipes")]
	public IActionResult FetchAllRecipes()
	{
		try
		{
			if (AppSettingsConfigurator.IsDevelopmentEnvironment())
			{
				IEnumerable<Recipe> allRecipes = cacheService.GetData<IEnumerable<Recipe>>("allRecipes");
				if (allRecipes != null)
				{
					return Ok(new { allRecipes });
				}
				lock (_lock)
				{
					allRecipes = recipeRepository.FetchAll();
					cacheService.SetData("allRecipes", allRecipes, DateTimeOffset.Now.AddHours(12));
					return Ok(new { allRecipes });
				}
			}
			else
			{
				IEnumerable<Recipe> allRecipes = recipeRepository.FetchAll();
				return Ok(new { allRecipes });
			}
		}
		catch (Exception e)
		{
			return StatusCode(500, ErrorHandlerUtils.ExceptionError(e));
		}
	}
}

using GourmetGateway.Constants;
using GourmetGateway.Infrastructure;
using GourmetGateway.Models;
using Microsoft.AspNetCore.Mvc;
using _96JD.ErrorHandlerUtils;

namespace GourmetGateway.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class GoodController(IGenericRepository<Good> goodRepository) : ControllerBase
{
	[HttpGet("fetch-all-goods")]
	[ProducesResponseType<IEnumerable<Good>>(StatusCodes.Status200OK)]
	public IActionResult FetchAllGoods()
	{
		try
		{
			IEnumerable<Good> allGoods = goodRepository.FetchAll();
			return Ok(new { allGoods });
		}
		catch (Exception e)
		{
			return StatusCode(500, ErrorHandlerUtils.ExceptionError(e));
		}
	}

	[HttpPatch("update-shopping-list")]
	[ProducesResponseType<Good>(StatusCodes.Status200OK)]
	public IActionResult UpdateShoppingList(Good good)
	{
		try
		{
			if (good.Id == 0)
			{
				return BadRequest(ErrorHandlerUtils.ParameterMissingOrIncorrectValue("id"));
			}

			Good dbGood = goodRepository.FetchSingleByKey(good.Id);
			if (dbGood == null)
			{
				return BadRequest(ErrorHandlerUtils.EntityNotFound(GoodConstants.ModelName, "id"));
			}

			dbGood.InShoppingList = good.InShoppingList;
			goodRepository.Update(dbGood);
			goodRepository.SaveChanges();
			return Ok(new { updatedGood = dbGood });
		}
		catch (Exception e)
		{
			return StatusCode(500, ErrorHandlerUtils.ExceptionError(e));
		}
	}
}

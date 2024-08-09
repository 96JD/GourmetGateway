using System.ComponentModel.DataAnnotations;

namespace GourmetGateway.Models;

public partial class Good
{
	public int Id { get; set; }

	[MinLength(3), MaxLength(25)]
	public required string Name { get; set; }

	public required string ImageUrl { get; set; }

	public sbyte InShoppingList { get; set; }
}

using System.ComponentModel.DataAnnotations;

namespace GourmetGateway.Models;

public partial class RecipeCategory
{
	public int Id { get; set; }

	[MinLength(3), MaxLength(15)]
	public required string Name { get; set; }

	public virtual ICollection<Recipe> Recipes { get; set; } = [];
}
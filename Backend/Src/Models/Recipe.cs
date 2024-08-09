using System.ComponentModel.DataAnnotations;

namespace GourmetGateway.Models;

public partial class Recipe
{
	public int Id { get; set; }

	[MinLength(4), MaxLength(50)]
	public required string Name { get; set; }

	public required string ImageUrl { get; set; }

	public int RecipeCategoryId { get; set; }

	public virtual RecipeCategory? RecipeCategory { get; set; }
}

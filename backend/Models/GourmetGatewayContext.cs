using Microsoft.EntityFrameworkCore;

namespace GourmetGateway.Models;

public partial class GourmetGatewayContext : DbContext
{
	public GourmetGatewayContext() { }

	public GourmetGatewayContext(DbContextOptions<GourmetGatewayContext> options)
		: base(options) { }

	public virtual DbSet<Recipe>? Recipes { get; set; }

	public virtual DbSet<RecipeCategory>? RecipeCategories { get; set; }

	public virtual DbSet<Good>? Goods { get; set; }

	protected override void OnModelCreating(ModelBuilder modelBuilder)
	{
		modelBuilder.UseCollation("utf8mb4_0900_ai_ci").HasCharSet("utf8mb4");

		modelBuilder.Entity<Recipe>(entity =>
		{
			entity.ToTable("recipes");
			entity.HasKey(e => e.Id).HasName("PRIMARY");
			entity.Property(e => e.Id).HasColumnName("id");
			entity.Property(e => e.RecipeCategoryId).HasColumnName("recipe_category_id");
			entity.HasIndex(e => e.RecipeCategoryId, "recipe_category_id");
			entity.Property(e => e.ImageUrl).HasMaxLength(255).HasColumnName("image_url");
			entity.Property(e => e.Name).HasMaxLength(50).HasColumnName("name");
			entity.HasIndex(e => e.Name, "name").IsUnique();
			entity
				.HasOne(d => d.RecipeCategory)
				.WithMany(p => p.Recipes)
				.HasForeignKey(d => d.RecipeCategoryId)
				.OnDelete(DeleteBehavior.ClientSetNull)
				.HasConstraintName("recipes_ibfk_1");
		});

		modelBuilder.Entity<RecipeCategory>(entity =>
		{
			entity.ToTable("recipe_categories");
			entity.HasKey(e => e.Id).HasName("PRIMARY");
			entity.Property(e => e.Id).HasColumnName("id");
			entity.Property(e => e.Name).HasMaxLength(15).HasColumnName("name");
			entity.HasIndex(e => e.Name, "name").IsUnique();
		});

		modelBuilder.Entity<Good>(entity =>
		{
			entity.ToTable("goods");
			entity.HasKey(e => e.Id).HasName("PRIMARY");
			entity.Property(e => e.Id).HasColumnName("id");
			entity.Property(e => e.ImageUrl).HasMaxLength(255).HasColumnName("image_url");
			entity.Property(e => e.InShoppingList).HasColumnName("in_shopping_list");
			entity.Property(e => e.Name).HasMaxLength(25).HasColumnName("name");
			entity.HasIndex(e => e.Name, "name").IsUnique();
		});
	}
}

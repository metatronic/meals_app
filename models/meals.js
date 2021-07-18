class Meals {
  constructor(
    id,
    categoryIds,
    title,
    affordibility,
    complexity,
    imageURL,
    duration,
    ingredients,
    steps,
    isGlutenFree,
    isVegan,
    isVegitarian,
    isLactoseFree,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.affordibility = affordibility;
    this.complexity = complexity;
    this.imageURL = imageURL;
    this.duration = duration;
    this.ingredients = ingredients;
    this.steps = steps;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegitarian = isVegitarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meals;

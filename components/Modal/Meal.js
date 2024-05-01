class Meal {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imgurl,
    duration,
    ingridient,
    steps,
    isGlutemFree,
    isVegan,
    isVegitarian,
    isLactoseFree,
  ) {
    this.id = id;
    this.categoryId = categoryId;
    this.title = title;
    this.affordability = affordability;
    this.complexity = complexity;
    this.imgurl = imgurl;
    this.duration = duration;
    this.ingridient = ingridient;
    this.steps = steps;
    this.isGlutemFree = isGlutemFree;
    this.isVegan = isVegan;
    this.isVegitarian = isVegitarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;

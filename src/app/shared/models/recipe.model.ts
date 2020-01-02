import {Ingredient} from '../../ingredients/modules/ingredient.model';

export class Recipe {
  public id?: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(base?: Partial<Recipe>) {
    this.id = base.id || this.id;
    this.name = base.name || this.name;
    this.description = base.description || this.description;
    this.imagePath = base.imagePath || this.imagePath;
    const tempIngredients = base.ingredients || this.ingredients;
    this.ingredients = tempIngredients.map(ingredient =>
      new Ingredient({
        name: ingredient.name,
        amount: ingredient.amount
      }));
  }

  get asObject(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      imagePath: this.imagePath,
      ingredients: this.ingredients.map(ingredient => ingredient.asObject)
    };
  }
}

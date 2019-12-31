import {Ingredient} from '../../ingredients/modules/ingredient.model';

export class Recipe {
  public id?: string;
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }

  asObject(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      imagePath: this.imagePath,
    };
  }
}

import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Scampi One', 'This is simply a directionClicked', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Scampi Two', 'This is simply a directionClicked', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Scampi Three', 'This is simply a directionClicked', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Scampi Four', 'This is simply a directionClicked', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('Scampi Five', 'This is simply a directionClicked', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}

import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Scampi One',
      'This is simply a directionClicked',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Scampi', 1),
        new Ingredient('Pasta', 1),
      ]
    ),
    new Recipe(
      'Scampi Two',
      'This is simply a directionClicked',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Scampi', 1),
        new Ingredient('Pasta', 1),
      ]),
    new Recipe(
      'Scampi Three',
      'This is simply a directionClicked',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Scampi', 1),
        new Ingredient('Pasta', 1),
      ]),
    new Recipe(
      'Scampi Four',
      'This is simply a directionClicked',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Scampi', 1),
        new Ingredient('Pasta', 1),
      ]),
    new Recipe(
      'Scampi Five',
      'This is simply a directionClicked',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('Scampi', 1),
        new Ingredient('Pasta', 1),
      ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppinhList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }
}

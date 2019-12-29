import {Recipe} from './models/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {ShoppingListStore} from '../shopping-list/store/shopping-list.store';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private shoppingListStore: ShoppingListStore,
              private http: HttpClient) {
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://scampi-38a65.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error.message);
          return of(null);
        })
      );
  }

  fetchRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://scampi-38a65.firebaseio.com/recipes/${id}.json`)
      .pipe(
        map((recipe: Recipe) => {
            console.log('Fetching recipe');
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          },
          catchError((error: HttpErrorResponse) => {
            console.log(error.message);
            return of(null);
          })
        )
      );
  }

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListStore.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}

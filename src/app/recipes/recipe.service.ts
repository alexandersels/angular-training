import {Recipe} from './models/recipe.model';
import {Ingredient} from '../ingredients/modules/ingredient.model';
import {Injectable} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import {ShoppingListStore} from '../shopping-list/store/shopping-list.store';
import {catchError, map} from 'rxjs/operators';
import {AngularFirestore, DocumentData, DocumentSnapshot, QuerySnapshot} from '@angular/fire/firestore';
import {RecipeAddFailedAction, RecipeAddSuccessAction, RecipeDeleteFailedAction, RecipeDeleteSuccessAction} from './store/recipe.actions';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  constructor(private shoppingListStore: ShoppingListStore,
              private afs: AngularFirestore) {
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.afs.collection<Recipe>('recipes')
      .get()
      .pipe(
        map((actions: QuerySnapshot<DocumentData>) => {
          const data = [];
          actions.forEach((documentData: DocumentData) => {
            const recipe = documentData.data() as Recipe;
            data.push(recipe);
          });
          return data;
        }),
        catchError(error => {
          console.log(error);
          return of(null);
        })
      );
  }

  fetchRecipe(id: string): Observable<Recipe> {
    return this.afs.doc<Recipe>(`recipes/${id}`)
      .get()
      .pipe(
        map((snapshot: DocumentSnapshot<DocumentData>) => {
            return snapshot.data() as Recipe;
          }
        ), catchError(error => {
          console.log(error);
          return of(null);
        })
      );
  }

  addRecipe(recipe: Recipe): Observable<RecipeAddSuccessAction | RecipeAddFailedAction> {
    const id = this.afs.createId();
    recipe.id = id;

    return from(
      this.afs.collection('recipes').doc(id).set(recipe.asObject())
        .then(() => {
          return new RecipeAddSuccessAction();
        }).catch(() => {
        return new RecipeAddFailedAction();
      }));
  }

  deleteRecipe(id: string): Observable<RecipeDeleteSuccessAction | RecipeDeleteFailedAction> {
    return from(
      this.afs.collection('recipes').doc(id).delete().then(() => {
        return new RecipeDeleteSuccessAction();
      }).catch(() => {
        return new RecipeDeleteFailedAction();
      })
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

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}

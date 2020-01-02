import {Recipe} from '../../shared/models/recipe.model';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ShoppingListStore} from '../../shopping-list/store/shopping-list.store';
import {catchError, map} from 'rxjs/operators';
import {AngularFirestore, DocumentData, DocumentSnapshot, QuerySnapshot} from '@angular/fire/firestore';

@Injectable()
export class RecipeService {

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
            recipe.ingredients = !recipe.ingredients ? [] : recipe.ingredients;
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
            const recipe = snapshot.data() as Recipe;
            recipe.ingredients = !recipe.ingredients ? [] : recipe.ingredients;
            return recipe;
          }
        ), catchError(error => {
          console.log(error);
          return of(null);
        })
      );
  }

  async deleteRecipe(id: string): Promise<void> {
    try {
      await this.afs.collection('recipes').doc<Recipe>(id).delete();
    } catch (error) {
      console.log(error);
    }
  }

  async updateRecipe(id: string, recipe: Recipe): Promise<void> {
    recipe.id = id;
    try {
      console.log(recipe);
      await this.afs.collection('recipes').doc<Recipe>(recipe.id).update(recipe);
    } catch (error) {
      console.log(error);
    }
  }

}

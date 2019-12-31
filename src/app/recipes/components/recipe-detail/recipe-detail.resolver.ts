import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeStore} from '../../store/recipe.store';

@Injectable()
export class RecipeDetailResolver implements Resolve<void> {

  constructor(private recipeStore: RecipeStore) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
    const id = route.params.id;
    this.recipeStore.fetchRecipe(id);
  }
}

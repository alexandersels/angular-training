import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {RecipeStore} from './store/recipe.store';

@Injectable()
export class RecipesResolverService implements Resolve<void> {

  constructor(private recipeStore: RecipeStore) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = +route.params.id;
    this.recipeStore.fetchRecipe(id);
  }
}

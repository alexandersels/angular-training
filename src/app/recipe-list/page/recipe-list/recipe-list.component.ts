import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeStore} from '../../../shared/stores/recipe-store/recipe.store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes$: Observable<Recipe[]>;
  selectedRecipe$: Observable<Recipe>;

  constructor(private recipeStore: RecipeStore,
              private router: Router) {
  }

  ngOnInit() {
    this.recipes$ = this.recipeStore.recipes;
    this.selectedRecipe$ = this.recipeStore.selectedRecipe;
    this.recipeStore.fetchRecipeList();
  }

  onNewRecipe() {
    this.router.navigate(['recipes', 'new']);
  }

  onRecipeSelected(id: string): void {
    this.recipeStore.fetchRecipe(id);
    console.log(id);
  }

  ngOnDestroy(): void {
    this.recipeStore.resetSelectedRecipe();
  }

  onRecipeDeleted(id: string) {
    this.recipeStore.deleteRecipe(id);
    this.recipeStore.resetSelectedRecipe();
    this.recipeStore.fetchRecipeList();
  }
}

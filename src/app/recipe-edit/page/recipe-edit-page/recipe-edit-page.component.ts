import {Component, OnInit} from '@angular/core';
import {RecipeStore} from '../../../shared/stores/recipe-store/recipe.store';
import {Observable} from 'rxjs';
import {Recipe} from '../../../shared/models/recipe.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit-page',
  templateUrl: './recipe-edit-page.component.html',
  styleUrls: ['./recipe-edit-page.component.scss']
})
export class RecipeEditPageComponent implements OnInit {

  selectedRecipe$: Observable<Recipe>;
  id: string;

  constructor(private recipeStore: RecipeStore,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.recipeStore.fetchRecipe(this.id);
    this.selectedRecipe$ = this.recipeStore.selectedRecipe;
  }

  async onUpdateRecipe(recipe: Recipe): Promise<void> {
    await this.recipeStore.updateRecipe(this.id, recipe);
    this.router.navigate(['/recipe-list']);
  }

  onUpdatedCancelled() {
    this.router.navigate(['/recipe-list']);
  }
}

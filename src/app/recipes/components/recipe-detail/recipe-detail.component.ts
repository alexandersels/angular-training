import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../models/recipe.model';
import {Observable} from 'rxjs';
import {RecipeStore} from '../../store/recipe.store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  selectedRecipe$: Observable<Recipe>;

  constructor(private recipeStore: RecipeStore,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedRecipe$ = this.recipeStore.selectedRecipe;
    const id = +this.route.snapshot.params.id;
    this.recipeStore.fetchRecipe(id);
  }

  onAddToShoppingList(): void {
    // this.recipeService.addIngredientsToShoppingList(this.selectedRecipe$.ingredients);
  }

  onEditRecipe(): void {
    // this.router.navigate(['recipes', this.id, 'edit']);
  }

  onDeleteRecipe(): void {
    // this.recipeService.deleteRecipe(this.id);
    // this.router.navigate(['/recipes']);
  }

  public directionClicked(event): void {
    if (!event.currentTarget.classList.contains('selectedRecipe$-directions__item--clicked')) {
      event.currentTarget.classList.add('selectedRecipe$-directions__item--clicked');
    } else {
      event.currentTarget.classList.remove('selectedRecipe$-directions__item--clicked');
    }
  }
}

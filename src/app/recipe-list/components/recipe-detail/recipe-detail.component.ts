import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../shared/models/recipe.model';
import {RecipeStore} from '../../../shared/stores/recipe-store/recipe.store';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  @Output() recipeDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onAddToShoppingList(): void {
    // this.recipeService.addIngredientsToShoppingList(this.selectedRecipe$.ingredients);
  }

  onEditRecipe(id: string): void {
    this.router.navigate(['recipes', id, 'edit']);
  }

  onDeleteRecipe(id: string): void {
    this.recipeDeleted.emit(id);
  }

  public directionClicked(event): void {
    if (!event.currentTarget.classList.contains('selectedRecipe-directions__item--clicked')) {
      event.currentTarget.classList.add('selectedRecipe-directions__item--clicked');
    } else {
      event.currentTarget.classList.remove('selectedRecipe-directions__item--clicked');
    }
  }
}

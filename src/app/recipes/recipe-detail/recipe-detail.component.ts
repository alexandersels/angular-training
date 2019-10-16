import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params.id;
          console.log(this.id)
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList(): void {
    this.recipeService.addIngredientsToShoppinhList(this.recipe.ingredients);
  }

  public directionClicked(event): void {
    if (!event.currentTarget.classList.contains('recipe-directions__item--clicked')) {
      event.currentTarget.classList.add('recipe-directions__item--clicked');
    } else {
      event.currentTarget.classList.remove('recipe-directions__item--clicked');
    }
  }
}

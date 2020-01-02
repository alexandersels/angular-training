import {Component, OnInit} from '@angular/core';
import {RecipeAddService} from '../../services/recipe-add.service';
import {Recipe} from '../../../shared/models/recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-add-page',
  templateUrl: './recipe-add-page.component.html',
  styleUrls: ['./recipe-add-page.component.scss']
})
export class RecipeAddPageComponent implements OnInit {

  constructor(private recipeAddService: RecipeAddService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onRecipeAdd(recipe: Recipe) {
    this.recipeAddService.addRecipe(recipe);
    this.router.navigate(['/recipes']);
  }

  onRecipeAddCanceled() {
    this.router.navigate(['/recipes']);
  }

}

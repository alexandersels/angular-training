import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe.model';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {RecipeStore} from '../../store/recipe.store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Observable<Recipe[]>;

  constructor(private recipeStore: RecipeStore,
              private router: Router) {
  }

  ngOnInit() {
    this.recipes = this.recipeStore.recipes;
  }

  onNewRecipe() {
    this.router.navigate(['recipes', 'new']);
  }

}

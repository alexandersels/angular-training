import {Component, OnInit} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

  public directionClicked(event): void {
    if (!event.currentTarget.classList.contains('recipe-directions__item--clicked')) {
      event.currentTarget.classList.add('recipe-directions__item--clicked');
    } else {
      event.currentTarget.classList.remove('recipe-directions__item--clicked');
    }
  }
}

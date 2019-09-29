import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

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

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  onItemClicked(): void {
    this.itemSelected.emit(this.recipe.id);
  }
}

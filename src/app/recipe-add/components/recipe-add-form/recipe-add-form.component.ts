import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss']
})
export class RecipeAddFormComponent implements OnInit {

  @Output() addRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() addRecipeCancelled: EventEmitter<void> = new EventEmitter<void>();

  slForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.slForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ingredients: this.formBuilder.array([])
    });
  }

  onAddIngredient(): void {
    const ingredients = this.slForm.get('ingredients') as FormArray;
    ingredients.push(this.createIngredientRow());

  }

  createIngredientRow(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const {name, imagePath, description, ingredients} = this.slForm.value;
    const recipe = new Recipe({name, imagePath, description, ingredients});
    this.addRecipe.emit(recipe);
  }

  onCancel() {
    this.addRecipeCancelled.emit();
  }

  getControls() {
    return (this.slForm.get('ingredients') as FormArray).controls;
  }

  onDelete(index: number) {
    const ingredients = this.slForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

}

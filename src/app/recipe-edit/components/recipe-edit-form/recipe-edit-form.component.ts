import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../shared/models/recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit, OnChanges {

  @Input() selectedRecipe;

  @Output() updateRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Output() updatedRecipeCanceled: EventEmitter<void> = new EventEmitter<void>();

  slForm: FormGroup;
  recipeIngredients: FormArray;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.recipeIngredients = this.formBuilder.array([]);
    this.slForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      imagePath: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ingredients: this.recipeIngredients
    });
    this.patchForm(this.selectedRecipe);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const {selectedRecipe} = changes;
    if (selectedRecipe) {
      this.patchForm(selectedRecipe.currentValue);
    }
  }

  patchForm(recipe: Recipe) {
    if (recipe && this.slForm) {
      this.slForm.patchValue({
        name: recipe.name,
        imagePath: recipe.imagePath,
        description: recipe.description,
      });

      this.recipeIngredients.clear();
      for (const ingredient of recipe.ingredients) {
        this.recipeIngredients.push(
          this.formBuilder.group({
            name: [ingredient.name, [Validators.required]],
            amount: [ingredient.amount, [Validators.required]]
          })
        );
      }
    }
  }

  onAddIngredient(): void {
    const ingredients = this.slForm.get('ingredients') as FormArray;
    ingredients.push(this.createIngredient());
  }

  createIngredient(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });
  }

  getControls() {
    return (this.slForm.get('ingredients') as FormArray).controls;
  }

  onDelete(index: number): void {
    const ingredients = this.slForm.get('ingredients') as FormArray;
    ingredients.removeAt(index);
  }

  onSubmit(): void {
    const {name, imagePath, description, ingredients} = this.slForm.value;
    const recipe = new Recipe({name, imagePath, description, ingredients});
    this.updateRecipe.emit(recipe);
  }

  onCancel(): void {
    this.updatedRecipeCanceled.emit();
  }

}

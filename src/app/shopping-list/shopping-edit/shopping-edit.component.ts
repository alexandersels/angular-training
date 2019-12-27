import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnChanges, OnInit {

  @Input() ingredient: Ingredient;

  @Output() onAddIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  @Output() onEditIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @Output() onDeleteIngredient: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClearSelection: EventEmitter<void> = new EventEmitter<void>();

  shouldIngredientBeEdited = false;

  slForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.slForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      amount: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ingredient && this.slForm) {
      this.shouldIngredientBeEdited = this.ingredient !== null;
      this.slForm.setValue({
        name: this.ingredient.name,
        amount: this.ingredient.amount
      });
    }
  }

  onSubmit() {
    if (this.slForm.invalid) {
      return;
    }

    const value = this.slForm.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.shouldIngredientBeEdited) {
      this.onEditIngredient.emit(newIngredient);
    } else {
      this.onAddIngredient.emit(newIngredient);
    }

    this.shouldIngredientBeEdited = false;
    this.slForm.reset();
  }

  onClear(): void {
    this.reset();
    this.onClearSelection.emit();
  }

  onDelete(): void {
    this.reset();
    this.onDeleteIngredient.emit();
  }

  private reset(): void {
    this.slForm.reset();
    this.shouldIngredientBeEdited = false;
  }
}

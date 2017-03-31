import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component ({
  selector: 'edit-food',
  template: `
  <div class="edit-food" *ngIf="childSelectedFood">
    <h2>Edit Food</h2>
    <div class="form-group">
     <label>Food</label>
     <input [(ngModel)]="childSelectedFood.name">
    </div>
    <div class="form-group">
     <label>Meal</label>
     <input [(ngModel)]="childSelectedFood.meal">
    </div>
    <div class="form-group">
     <label>Details</label>
     <input [(ngModel)]="childSelectedFood.details">
    </div>
    <div class="form-group">
     <label>Calories</label>
     <input type="number" [(ngModel)]="childSelectedFood.calories">
    </div>
    <button class="btn"  (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() newFoodSender = new EventEmitter();
  @Output() doneButtonClickedSender = new EventEmitter();

  submitForm(food: string, details: string, calories: number, meal: string) {
    var newFoodToAdd: Food = new Food(food, details, calories, meal);
    this.newFoodSender.emit(newFoodToAdd);
  }

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
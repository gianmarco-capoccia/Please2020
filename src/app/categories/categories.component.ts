import { Component, Signal } from '@angular/core';
import { categoriesList, cateorySelected, updateCategorySelected } from '../../utilities/signals/categories.signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  categories = categoriesList;
  selectedCatgoryId:Signal<number> = cateorySelected;

  selectCategory = (selectedCategory:number) => {
    updateCategorySelected(selectedCategory)
  }

}

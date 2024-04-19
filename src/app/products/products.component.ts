import { CommonModule } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { cateorySelected } from '../../utilities/signals/categories.signals';
import { addToOrder } from '../../utilities/signals/order.signals';
import {
  findByName,
  productList,
  productsByCategorySelected,
} from '../../utilities/signals/products.signals';
import { TProductChosen } from '../../utilities/types/order.type';
import { TProductsList } from '../../utilities/types/products.type';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = productList;
  selectedCategoryId: Signal<number> = cateorySelected;
  showedProducts: Signal<TProductsList>;
  searchIcon: string = "../assets/icons/search.png";
  digitedProductName: string = '';

  ACTIONS = {
    ADD: 'add',
    REMOVE: 'remove',
  };

  constructor() {
    this.showedProducts = productsByCategorySelected;
  }

  updateQuantityValue(idProduct: string, action: string): TProductChosen {
    const inputElement = document.getElementById(idProduct) as HTMLInputElement;
    let quantity = Number(inputElement.innerText);

    if (action === this.ACTIONS.ADD) {
      quantity += 1;
    } else {
      quantity = quantity > 0 ? quantity - 1 : 0;
    }

    inputElement.innerText = String(quantity);
    const updatedItem = { idProduct, quantity };
    addToOrder(updatedItem);
    return updatedItem;
  }

  findProduct(typedString: string) {
    this.showedProducts = typedString.trim()? (findByName(typedString)): productsByCategorySelected;
  }
}

import { Component, Signal } from '@angular/core';
import { cateorySelected } from '../../utilities/signals/categories.signals';
import { productList } from '../../utilities/signals/products.signals';
import { TProductChosen } from '../../utilities/types/order.type';
import { addToOrder, orderList, orderListEmpty } from '../../utilities/signals/order.signals';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = productList;
  selectedCategoryId: Signal<number> = cateorySelected;
  ACTIONS = {
    ADD: 'add',
    REMOVE: 'remove',
  };

  updateQuantityValue(idProduct: number, action: string): TProductChosen {
    const inputElement = document.getElementById(
      String(idProduct)
    ) as HTMLInputElement;
    let quantity = Number(inputElement.value);

    if (action === this.ACTIONS.ADD) {
      quantity += 1;
    } else {
      quantity = quantity > 0 ? quantity - 1 : 0;
    }

    inputElement.value = String(quantity);
    const updatedItem = { idProduct, quantity };
    addToOrder(updatedItem);
    return updatedItem;
  }
}

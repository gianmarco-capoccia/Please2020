import { signal } from '@angular/core';
import { TOrderList, TProductChosen } from '../types/order.type';

export const orderList = signal<TOrderList>([]);
export const orderListEmpty = signal<boolean>(true);

export const addToOrder = (productChosen: TProductChosen) => {
  orderList.update((orderList: TOrderList) => {
    const existingItemIndex = orderList.findIndex(
      (item) => item.idProduct === productChosen.idProduct
    );
    if (existingItemIndex !== -1) {
      if (productChosen.quantity !== 0)
        orderList[existingItemIndex].quantity = productChosen.quantity;
      else orderList.splice(existingItemIndex, 1);
    } else {
      if (productChosen.quantity !== 0) orderList.push(productChosen);
    }
    orderListEmpty.set(orderList.length === 0);
    return orderList;
  });
};

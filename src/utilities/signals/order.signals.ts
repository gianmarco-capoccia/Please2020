import { WritableSignal, computed, signal } from '@angular/core';
import { TOrderList, TProductChosen } from '../types/order.type';

export let orderList: WritableSignal<TOrderList> = signal([]);

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
    const orderList2 = [...orderList];
    return orderList2;
  });
};


export let orderListEmpty = computed(() => orderList().length === 0);

// export let completedOrderList = computed(() => orderList().length === 0);

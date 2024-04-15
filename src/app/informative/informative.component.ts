import { Component, Signal } from '@angular/core';
import { orderList, orderListEmpty } from '../../utilities/signals/order.signals';
import { TOrderList } from '../../utilities/types/order.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informative',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informative.component.html',
  styleUrl: './informative.component.scss'
})
export class InformativeComponent {
   order: Signal<TOrderList> = orderList;
   order_recap_empty : Signal<boolean> = orderListEmpty;
}

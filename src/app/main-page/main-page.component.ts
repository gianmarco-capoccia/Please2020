import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { CategoriesComponent } from '../categories/categories.component';
import { InformativeComponent } from '../informative/informative.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    ProductsComponent,
    CategoriesComponent,
    InformativeComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
 
}

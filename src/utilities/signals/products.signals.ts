import { computed, signal } from "@angular/core";
import { TProductsList } from "../types/products.type";
import { productsMock } from "../mock/products.mock";
import { cateorySelected } from "./categories.signals";

export const productList = signal<TProductsList>(productsMock);
export const productsByCategorySelected = computed(()=>productList().filter(item => item.categoryId === cateorySelected()));
export const findByName = (name:string) => computed(() => productList().filter(item => item.name.includes(name)));

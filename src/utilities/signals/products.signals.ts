import { signal } from "@angular/core";
import { TProductsList } from "../types/products.type";
import { productsMock } from "../mock/products.mock";

export const productList = signal<TProductsList>(productsMock);
import { signal } from "@angular/core";
import { TCategoriesList } from "../types/category.type";
import { categoriesMock } from "../mock/categories.mock";

export const categoriesList = signal<TCategoriesList>(categoriesMock);
export const cateorySelected = signal<number>(1);

export const updateCategorySelected = (newIdCategory:any) =>{
    cateorySelected.set(newIdCategory);
}
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryFormComponent } from './category-form/category-form.component';

@NgModule({
  declarations: [CategoriesListComponent, CategoryFormComponent],
  imports: [CommonModule, CategoriesRoutingModule],
})
export class CategoriesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: 'new', component: CategoryFormComponent }, // esta rota e a de baixo redireciona para o mesmo component
  { path: ':id/edit', component: CategoryFormComponent }, // porem no arquivo ts desse component tem uma logica que valida a rota acessada
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}

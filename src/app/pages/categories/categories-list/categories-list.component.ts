import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { CategoryModel } from '../shared/category.model';

@Component({
  selector: 'estudos-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  public categories: CategoryModel[] = [];

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this._categoryService.getAll().subscribe(
      (categories) => (this.categories = categories)
      // (error) => alert('ERRO AO CARREGAR TODA A LISTA')
    );
  }

  deleteCategory(category: CategoryModel) {
    this._categoryService.delete(category.id || 0).subscribe(
      () => {
        this.categories = this.categories.filter((e) => e != category);
      },
      () => alert('ERRO AO TENTAR EXCLUIR')
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

import { CategoryModel } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _path: string = 'api/categories'; //seguindo a doc do in-memory, para fazer funcionar, a rota precisar ser passada com o api/

  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CategoryModel[]> {
    return this._httpClient
      .get(this._path)
      .pipe(catchError(this._handleError), map(this._jsonDataToCategories));
  }

  getById(id: number): Observable<CategoryModel> {
    const url = `${this._path}/${id}`;

    return this._httpClient
      .get(url)
      .pipe(catchError(this._handleError), map(this._jsonDataToCategory));
  }

  create(category: CategoryModel): Observable<CategoryModel> {
    return this._httpClient
      .post(this._path, category)
      .pipe(catchError(this._handleError), map(this._jsonDataToCategory));
  }

  update(category: CategoryModel): Observable<CategoryModel> {
    const url = `${this._path}/${category.id}`;

    return this._httpClient.put(url, category).pipe(
      catchError(this._handleError),
      map(() => category) //forca o retorno devolvendo o mesmo objeto, porem na vida real, devera devolver o objeto correto
    );
  }

  delete(id: number): Observable<any> {
    const url = `${this._path}/${id}`;

    return this._httpClient.delete(url).pipe(
      catchError(this._handleError),
      map(() => null)
    );
  }

  private _jsonDataToCategories(jsonData: any[]): CategoryModel[] {
    const categories: CategoryModel[] = [];

    jsonData.forEach((element) => categories.push(element as CategoryModel));

    return categories;
  }

  private _jsonDataToCategory(jsonData: any): CategoryModel {
    return jsonData as CategoryModel;
  }

  private _handleError(error: any): Observable<any> {
    console.log('ERRO DE REQUISICAO: ', error);

    return throwError(error);
  }
}

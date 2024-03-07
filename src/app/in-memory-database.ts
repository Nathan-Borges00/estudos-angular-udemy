import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CategoryModel } from './pages/categories/shared/category.model';

export class InMemoryDataBase implements InMemoryDbService {
  createDb() {
    const categories: CategoryModel[] = [
      { id: 1, name: 'Lazer', description: '' },
      { id: 2, name: 'Debitos', description: 'Mensalidades' },
      { id: 3, name: 'Creditos', description: 'Salario e beneficios' },
    ];

    return categories;
  }
}

import { StateProvider } from '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import { BooksComponent } from './views/books/books.component';
import { BookDetailsComponent } from './views/books/details/book-details.component';

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}

const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'books' },
  { name: 'books', url: '/books', component: BooksComponent },
  { name: 'booksDetails', url: '/books/{id}', component: BookDetailsComponent },
];

@NgModule({
  id: 'AppRoutingModule',
  imports: [
    'ui.router'
  ],
})
export class AppRoutingModule {
  /*@ngInject*/
  static config($stateProvider: StateProvider) {
    routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
  }
}

function getNg1StateDeclaration(state: UiState) {
  if (state.component && typeof state.component !== 'string') {
    state.component = getTypeName(state.component);
  }
  return state;
}


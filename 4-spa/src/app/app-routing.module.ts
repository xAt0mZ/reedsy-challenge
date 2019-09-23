import { StateProvider } from '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import { BooksComponent } from './views/books/books.component';
import { BookDetailsComponent } from './views/books/details/book-details.component';

export interface UiState extends Ng1StateDeclaration {
  linkedComponent?: any;
}

const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'books' },
  { name: 'books', url: '/books', linkedComponent: BooksComponent },
  { name: 'books.details', url: '/:slug', linkedComponent: BookDetailsComponent },
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
  if (state.linkedComponent && typeof state.linkedComponent !== 'string') {
    state.views = {
      'content@': {
        component: getTypeName(state.linkedComponent)
      }
    };
  }
  return state;
}


import { NgModule } from 'angular-ts-decorators';
import * as Bootstrap from 'angular-ui-bootstrap';
import 'bootstrap';

import './bootstrap-override.sass';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BooksComponent } from './views/books/books.component';
import { BookDetailsComponent } from './views/books/details/book-details.component';

import { BookService } from './services/book.service';

import { TruncatePipe } from './services/filters/truncate.filter';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule,
    Bootstrap
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    TruncatePipe
  ],
  providers: [
    BookService,
    { provide: 'API_URL', useValue: 'http://localhost:3000'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  /*@ngInject*/
  static run($window: ng.IWindowService, $q: ng.IQService) {
    // replace browser Promise to $q in app
    $window.Promise = $q;
  }

 }

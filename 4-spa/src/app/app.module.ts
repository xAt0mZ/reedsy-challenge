import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './styles.css';

import { BooksComponent } from './views/books/books.component';

import { BookService } from './services/book.service';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BooksComponent
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

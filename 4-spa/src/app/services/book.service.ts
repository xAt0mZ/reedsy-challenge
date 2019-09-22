import { IHttpService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import * as _ from 'lodash';
import { APIBook, BooksResponse, BookViewModel } from '../models/book';

@Injectable('bookService')
export class BookService {
  private booksUrl = this.API_URL + '/books';

  /*@ngInject*/
  constructor(private $http: IHttpService,
              private API_URL: string) { }

  async getBooks() {
    try {
      const response = await this.$http.get<BooksResponse>(this.booksUrl);
      return _.map(response.data.books, (book) => new BookViewModel(book));
    } catch (error) {
      throw error;
    }
  }

  async getBook(slug: string) {
    try {
      const response = await this.$http.get<APIBook>(this.booksUrl + '/' + slug);
      return new BookViewModel(response.data);
    } catch (error) {
      throw error;
    }
  }
}

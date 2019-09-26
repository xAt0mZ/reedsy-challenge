import { Component, OnInit } from 'angular-ts-decorators';

import { BookViewModel } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'books-view',
  template: require('./books.component.html'),
  styles: [require('./books.component.sass')]
})
export class BooksComponent implements OnInit {
  private books: BookViewModel[];

  /*@ngInject*/
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
  }

  upvoteBook(book: BookViewModel) {
    book.UpVoted = !book.UpVoted;
    book.UpVotes += (book.UpVoted ? 1 : -1);
    // make a call to API there to save new book state
  }

  async getBooks() {
    try {
      const books = await this.bookService.getBooks();
      this.books = books;
    } catch (error) {
      throw error;
    }
  }
}

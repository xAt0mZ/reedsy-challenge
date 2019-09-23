import { StateService } from '@uirouter/angularjs';
import { Component, Input, OnInit } from 'angular-ts-decorators';
import { BookViewModel } from '../../../models/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'book-details',
  template: require('./book-details.component.html'),
  styles: [require('./book-details.component.scss')]
})
export class BookDetailsComponent implements OnInit {
  private book: BookViewModel;
  private slug: string;
  /*@ngInject*/
  constructor(
    private $state: StateService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.slug = this.$state.params.slug;
    this.getBook();
  }

  async getBook() {
    try {
      const book = await this.bookService.getBook(this.slug);
      this.book = book;
    } catch (error) {
      throw error;
    }
  }
}

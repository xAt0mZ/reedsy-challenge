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
  @Input() book: BookViewModel;

  private slug: string;
  /*@ngInject*/
  constructor(
    private $state: StateService,
    private bookService: BookService
  ) { }

  ngOnInit(): void {

  }

  // ngOnInit(): void {
  //   this.slug = this.$state.params.slug;
  //   this.getBook();
  // }

  // getBook() {
  //   return this.$async(this.getBookAsync);
  // }

  // async getBookAsync

  // getbook(): void {
  //   const id = +this.$state.params.id;
  //   this.bookService.getbook(id)
  //     .then(book => this.book = book);
  // }
}

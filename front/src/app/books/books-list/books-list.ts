import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BookService } from '../services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookListCard } from '../../shared/ui/book-list-card/book-list-card';


@Component({
  selector: 'app-books-list',
  imports: [DatePipe, BookListCard],
  templateUrl: './books-list.html',
  styleUrl: './books-list.css',
})
export class BooksList {
  
 
  private bookService = inject(BookService);

  books = toSignal(
    this.bookService.getBooksList(),
    { initialValue: []}
  );
 
}

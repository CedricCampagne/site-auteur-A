import { Component, inject, output } from '@angular/core';
import { BookService } from '../../books/services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { BookExcerpt } from '../../books/models/bookExcerpt';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

  private bookService = inject(BookService);

  booksExcerpt = toSignal(
    this.bookService.getActiveExcerpts(),
    { initialValue: []}
  );

  selectedBook = output<BookExcerpt>();

  onclick(){
    const books = this.booksExcerpt();

    if(books.length === 0){
      return;
    }

    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];

    this.selectedBook.emit(randomBook);
  }
}

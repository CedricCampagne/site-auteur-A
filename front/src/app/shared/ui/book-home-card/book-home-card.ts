import { Component, input } from '@angular/core';
import { BookCard } from '../../../books/models/bookCard';

@Component({
  selector: 'app-book-home-card',
  imports: [],
  templateUrl: './book-home-card.html',
  styleUrl: './book-home-card.css',
})
export class BookHomeCard {

  book = input.required<BookCard>();

  protected readonly maxLength = 700;
}

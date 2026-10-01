import { Component, input, inject } from '@angular/core';
import { BookCard } from '../../../books/models/bookCard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-home-card',
  imports: [],
  templateUrl: './book-home-card.html',
  styleUrl: './book-home-card.css',
})
export class BookHomeCard {

  book = input.required<BookCard>();

  protected readonly maxLength = 700;
  private router = inject(Router);

  goToBook(){
    this.router.navigate(['/books', this.book().id, this.book().slug]);
  }
}

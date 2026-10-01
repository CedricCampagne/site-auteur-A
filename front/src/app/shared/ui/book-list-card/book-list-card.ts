import { Component, inject, input } from '@angular/core';
import { BookListItem } from '../../../books/models/bookListItem';
import { Router } from '@angular/router';
@Component({
  selector: 'app-book-list-card',
  imports: [],
  templateUrl: './book-list-card.html',
  styleUrl: './book-list-card.css',
})
export class BookListCard {

  private router = inject(Router);
  book = input.required<BookListItem>();
  protected readonly maxLength = 700;

  goToBook() {
    this.router.navigate(['/books', this.book().id, this.book().slug]);
  }

}

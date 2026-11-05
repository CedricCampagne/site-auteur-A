import { Component, inject, input } from '@angular/core';
import { BookListItem } from '../../../books/models/bookListItem';
import { Router } from '@angular/router';
import { UiButton } from '../ui-button/ui-button';
@Component({
  selector: 'app-book-list-card',
  imports: [UiButton],
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

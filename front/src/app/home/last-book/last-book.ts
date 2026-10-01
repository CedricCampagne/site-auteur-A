import { Component, inject, input, output} from '@angular/core';
import { BookLatest } from '../../books/models/BookLatest';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-book',
  imports: [DatePipe],
  templateUrl: './last-book.html',
  styleUrl: './last-book.css',
})
export class LastBook {

  private router = inject(Router);

  book = input<BookLatest>();

  openExcerpt = output<BookLatest>();

  goToBook(){
    this.router.navigate(['/books', this.book()?.id, this.book()?.slug]);
  }
}

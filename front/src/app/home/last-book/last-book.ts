import { Component, input, output} from '@angular/core';
import { BookLatest } from '../../books/models/BookLatest';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-last-book',
  imports: [DatePipe],
  templateUrl: './last-book.html',
  styleUrl: './last-book.css',
})
export class LastBook {

book = input<BookLatest>();

openExcerpt = output<BookLatest>();

}

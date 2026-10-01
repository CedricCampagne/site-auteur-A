import { Component, input } from '@angular/core';

@Component({
  selector: 'app-book-tag',
  standalone: true,
  imports: [],
  templateUrl: './book-tag.html',
  styleUrl: './book-tag.css',
})
export class BookTag {
  text = input<string | null>('Tag');
  className = input('');
}

import { Component, inject, signal } from '@angular/core';

import { HeroSection } from './hero-section/hero-section';
import { LastBook } from './last-book/last-book';
import { BookExcerptModal } from './book-excerpt-modal/book-excerpt-modal';

import { BookService } from '../books/services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';

import { BookLatest } from '../books/models/BookLatest';
import { BookExcerpt } from '../books/models/bookExcerpt';

@Component({
  selector: 'app-home',
  imports: [HeroSection, LastBook, BookExcerptModal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private bookService = inject(BookService);

  homeBooks = toSignal(
    this.bookService.getHomeBooks(),
    { initialValue: null }
  );

  isModalOpen = signal(false);

  selectedExcerpt = signal<BookExcerpt | null>(null);

  handleExcerpt(book: BookLatest) {
    this.selectedExcerpt.set({
      id: book.id,
      title: book.title,
      excerpt: book.excerpt
    });

    this.isModalOpen.set(true);
  }

  handleHeroExcerpt(book: BookExcerpt) {
    this.selectedExcerpt.set(book);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
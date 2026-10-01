import { Component, inject, signal } from '@angular/core';

import { HeroSection } from './hero-section/hero-section';
import { LastBook } from './last-book/last-book';
import { BookExcerptModal } from './book-excerpt-modal/book-excerpt-modal';

import { BookService } from '../books/services/books.service';
import { toSignal } from '@angular/core/rxjs-interop';

import { BookLatest } from '../books/models/BookLatest';
import { BookExcerpt } from '../books/models/bookExcerpt';
import { BookHomeCard } from '../shared/ui/book-home-card/book-home-card';
import { ChronicleService } from '../chronicles/services/chronicle.service';
import { ChronicleHomeCard } from '../shared/ui/chronicle-home-card/chronicle-home-card';
import { About } from './about/about';
import { UiMessages } from '../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-home',
  imports: [HeroSection, LastBook, BookExcerptModal, BookHomeCard, ChronicleHomeCard, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  private bookService = inject(BookService);
  private chronicleService = inject(ChronicleService);

  homeBooks = toSignal(
    this.bookService.getHomeBooks(),
    { initialValue: null }
  );

  books = this.homeBooks()?.otherBooks;

  homeChronicles = toSignal(
    this.chronicleService.getHomeChronicles(),
    { initialValue: []}
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
import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {

  private router = inject(ActivatedRoute);
  private bookService = inject(BookService);

  contenSection = viewChild<ElementRef<HTMLDivElement>>('contentSection');

  routId = toSignal(
    this.router.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return id ? Number(id) : null;
      })
    ),
    {initialValue: null}
  );

  book = toSignal(
    toObservable(this.routId).pipe(
      switchMap(id => this.bookService.getBookDetails(id))
    ),
    { initialValue: null}
  );

  activeTab = signal<'resume' | 'extrait'>('resume');

  selectTab(tab: 'resume' | 'extrait') {
    this.activeTab.set(tab);
    this.contenSection()?.nativeElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

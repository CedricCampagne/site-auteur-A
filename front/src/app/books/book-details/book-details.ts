import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  imports: [],
  templateUrl: './book-details.html',
  styleUrl: './book-details.css',
})
export class BookDetails {

  private router = inject(ActivatedRoute);
  private bookService = inject(BookService);

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    console.log("id : ", id);
  }

}

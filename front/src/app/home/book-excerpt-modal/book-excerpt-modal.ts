import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-book-excerpt-modal',
  imports: [],
  templateUrl: './book-excerpt-modal.html',
  styleUrl: './book-excerpt-modal.css',
})
export class BookExcerptModal {

  open = input<boolean>(false);
  title = input<string>("");
  text = input<string>("");
  close = output();

  protected readonly maxLength = 300;
}

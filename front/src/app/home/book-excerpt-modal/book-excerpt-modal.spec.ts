import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookExcerptModal } from './book-excerpt-modal';

describe('BookExcerptModal', () => {
  let component: BookExcerptModal;
  let fixture: ComponentFixture<BookExcerptModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookExcerptModal],
    }).compileComponents();

    fixture = TestBed.createComponent(BookExcerptModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

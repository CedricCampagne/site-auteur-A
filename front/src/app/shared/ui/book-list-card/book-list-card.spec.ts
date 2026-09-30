import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListCard } from './book-list-card';

describe('BookListCard', () => {
  let component: BookListCard;
  let fixture: ComponentFixture<BookListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookListCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

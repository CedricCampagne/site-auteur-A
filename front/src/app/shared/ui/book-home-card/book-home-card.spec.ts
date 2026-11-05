import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHomeCard } from './book-home-card';

describe('BookHomeCard', () => {
  let component: BookHomeCard;
  let fixture: ComponentFixture<BookHomeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookHomeCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BookHomeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

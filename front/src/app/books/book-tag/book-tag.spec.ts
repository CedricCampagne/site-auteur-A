import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTag } from './book-tag';

describe('BookTag', () => {
  let component: BookTag;
  let fixture: ComponentFixture<BookTag>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTag],
    }).compileComponents();

    fixture = TestBed.createComponent(BookTag);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

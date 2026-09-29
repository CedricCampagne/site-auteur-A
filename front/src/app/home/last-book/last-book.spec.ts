import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastBook } from './last-book';

describe('LastBook', () => {
  let component: LastBook;
  let fixture: ComponentFixture<LastBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastBook],
    }).compileComponents();

    fixture = TestBed.createComponent(LastBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentCard } from './admin-comment-card';

describe('AdminCommentCard', () => {
  let component: AdminCommentCard;
  let fixture: ComponentFixture<AdminCommentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommentCard],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCommentCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

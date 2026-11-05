import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentList } from './admin-comment-list';

describe('AdminCommentList', () => {
  let component: AdminCommentList;
  let fixture: ComponentFixture<AdminCommentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommentList],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCommentList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

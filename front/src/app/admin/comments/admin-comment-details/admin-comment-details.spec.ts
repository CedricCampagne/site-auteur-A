import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentDetails } from './admin-comment-details';

describe('AdminCommentDetails', () => {
  let component: AdminCommentDetails;
  let fixture: ComponentFixture<AdminCommentDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCommentDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCommentDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

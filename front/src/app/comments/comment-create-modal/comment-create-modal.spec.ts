import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCreateModal } from './comment-create-modal';

describe('CommentCreateModal', () => {
  let component: CommentCreateModal;
  let fixture: ComponentFixture<CommentCreateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentCreateModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentCreateModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

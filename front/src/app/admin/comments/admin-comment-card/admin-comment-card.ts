import { Component, input, output, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdminCommentResponse } from '../models/adminCommentResponse';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-comment-card',
  imports: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './admin-comment-card.html',
  styleUrl: './admin-comment-card.css',
})
export class AdminCommentCard {

  private router = inject(Router);
  comment = input.required<AdminCommentResponse>();

  toggle = output<number>();
  update = output<number>();
  delete = output<number>();

  handleToggle(): void {
    this.toggle.emit(this.comment().id);
  }

  handleUpdate(): void {
    this.update.emit(this.comment().id);
  }

  handleDelete(): void {
    this.delete.emit(this.comment().id);
  }

  goTocomment(){
    this.router.navigate(['/admin/comments', this.comment().id]);
  }
}

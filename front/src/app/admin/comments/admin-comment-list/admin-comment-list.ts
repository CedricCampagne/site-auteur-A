import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { AdminCommentService } from '../service/admin-comment.service';
import { AdminCommentResponse } from '../models/adminCommentResponse';
import { UiStore } from '../../../core/stores/ui.store';
import { Router } from '@angular/router';
import { AdminCommentCard } from '../admin-comment-card/admin-comment-card';
import 'iconify-icon';

@Component({
  selector: 'app-admin-comment-list',
  imports: [AdminCommentCard],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './admin-comment-list.html',
  styleUrl: './admin-comment-list.css',
})
export class AdminCommentList {

  private adminCommentService = inject(AdminCommentService);
  private router = inject(Router);
  ui = inject(UiStore);

  comments = signal<AdminCommentResponse[]>([]);

  ngOnInit(): void {
    this.adminCommentService.getAll().subscribe({
      next: (res) => this.comments.set(res),
      error(err) {
        console.log("Erreur de chaergement", err);
      },
    });
  }

  deleteComment(id: number){
    this.adminCommentService.delete(id).subscribe({
      next: ()=> {
        this.comments.update((currentComments)=>
          currentComments.filter((comment) => comment.id != id)
        );
      },
      error:(err) => {
        console.error("Erreur lors de la suppression", err);
      }
    });
  }

  toggleStatus(id: number){
    this.adminCommentService.toggleStatus(id).subscribe({
      next: (updateComment) => {
        this.comments.update((currentComments) =>
          currentComments.map((comment)=> comment.id === id ? updateComment : comment )
        );
      },
      error: (err) => {
        console.error("Erreur lors du changement de statut", err);
      }
    });
  }
  
  updateComment(id: number){
    this.router.navigate(["admin/comments", id]);
  }
}

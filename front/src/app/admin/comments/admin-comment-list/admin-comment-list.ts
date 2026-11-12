import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { AdminCommentService } from '../service/admin-comment.service';
import { AdminCommentResponse } from '../models/adminCommentResponse';
import { UiStore } from '../../../core/stores/ui.store';
import { Router } from '@angular/router';
import { AdminCommentCard } from '../admin-comment-card/admin-comment-card';
import 'iconify-icon';
import { forkJoin, timer } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-admin-comment-list',
  imports: [AdminCommentCard, SlicePipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './admin-comment-list.html',
  styleUrl: './admin-comment-list.css',
})
export class AdminCommentList {

  private adminCommentService = inject(AdminCommentService);
  private router = inject(Router);
  ui = inject(UiStore);

  comments = signal<AdminCommentResponse[]>([]);

  selectedChronicle = signal('');
  selectedUser = signal('');

  chroniclesTitles = computed(()=> [
    ...new Set(this.comments().map(comment => comment.chronicleTitle))
  ]);

  commentUsers = computed(()=> [
    ... new Set(this.comments().map(comment => comment.username))
  ]);

  ngOnInit(): void {
    this.adminCommentService.getAll().subscribe({
      next: (res) => this.comments.set(res),
      error(err) {
        console.log("Erreur de chaergement", err);
      },
    });
  }

  deleteComment(id: number){
    this.ui.startLoading();

    forkJoin([this.adminCommentService.delete(id), timer(1500)]).subscribe({
      next : () => {
        this.ui.stopLoading();
        this.comments.update((currentComments)=>
          currentComments.filter((comment) => comment.id != id)
        );
        this.ui.showSuccess("Suppression éffectuée !");
      }, error : (err) => {
        this.ui.stopLoading();
        this.ui.showError(err.error?.message ?? 'Erreur lors de la suppression');
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

  resetFilter() {
    this.selectedChronicle.set('');
    this.selectedUser.set('');
  }

  filteredComments = computed(() => {
  const chronicle = this.selectedChronicle();
  const user = this.selectedUser();

  return this.comments().filter(comment => {
    const matchChronicle =
      !chronicle || comment.chronicleTitle === chronicle;

    const matchUser =
      !user || comment.username === user;

    return matchChronicle && matchUser;
  });
});

}

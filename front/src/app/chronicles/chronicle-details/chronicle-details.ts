import { Component, inject, signal } from '@angular/core';
import { ChronicleService } from '../services/chronicle.service';
import { ActivatedRoute } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap } from 'rxjs';
import { DatePipe } from '@angular/common';
import { CommentCard } from '../../shared/ui/comment-card/comment-card';
import { CommentCreateModal } from '../../comments/comment-create-modal/comment-create-modal';


@Component({
  selector: 'app-chronicle-details',
  standalone: true,
  imports: [DatePipe, CommentCard, CommentCreateModal],
  templateUrl: './chronicle-details.html',
  styleUrl: './chronicle-details.css',
})
export class ChronicleDetails {
  router = inject(ActivatedRoute);
  chronicleService = inject(ChronicleService);

  routerId = toSignal(
    this.router.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return id ? Number(id) : null;
      })
    ),
    { initialValue: null}
  );
  
  chronicle = toSignal(
    toObservable(this.routerId).pipe(
      switchMap(id => this.chronicleService.getChronicle(id))
    ),
    { initialValue: null}
  );

  refreshComments = signal(0);
  refreshComments$ = toObservable(this.refreshComments);

  comments = toSignal(
  toObservable(this.routerId).pipe(
    switchMap(id =>
      this.refreshComments$.pipe(
        switchMap(() => this.chronicleService.getChronicleComments(id))
      )
    )
  ),
  { initialValue: [] }
);


  openModal = signal(false);

  openCreateComment(){
    this.openModal.set(true);
  }

  closeCreateComment(): void {
    this.openModal.set(false);
  }

  refreshCommentsList(): void {
    this.refreshComments.update(value => value + 1);
  }
}

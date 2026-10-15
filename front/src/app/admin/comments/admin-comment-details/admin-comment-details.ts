import { Component, effect, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, of, switchMap } from 'rxjs';
import { UiMessages } from '../../../shared/ui/ui-messages/ui-messages';
import { AdminCommentService } from '../service/admin-comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiStore } from '../../../core/stores/ui.store';

@Component({
  selector: 'app-admin-comment-details',
  standalone: true,
  imports: [ReactiveFormsModule, UiMessages],
  templateUrl: './admin-comment-details.html',
  styleUrl: './admin-comment-details.css',
})
export class AdminCommentDetails {
  private adminCommentService = inject(AdminCommentService);
  private activeRouter = inject(ActivatedRoute);
  private router = inject(Router);

  ui = inject(UiStore);

  routeId = toSignal(
    this.activeRouter.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return id ? Number(id) : null;
      })
    ),
    {initialValue: null}
  );

  comment = toSignal(
    toObservable(this.routeId).pipe(
      switchMap(id =>{
        if(id === null){
          return of(null)
        }

        return this.adminCommentService.getById(id);
      })
    ),
    {initialValue: null}
  );

  updateForm = new FormGroup({
    content: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required]
    }),
    isVisible: new FormControl(true, {
      nonNullable: true
    })
  });

  fillFormEffect = effect(()=> {
    const comment = this.comment();

    if(comment != null) {
      this.updateForm.patchValue({
        content: comment.content,
        isVisible: comment.isVisible
      });

    }
  });

  onSubmit(){
    if(this.updateForm.invalid || !this.hasChanges || this.ui.isLoading()){
      this.updateForm.markAllAsTouched();
      return;
    }

    const id = this.routeId();

    if (id === null) {
      return;
    }

    this.ui.clearMessage()
    this.ui.startLoading();

    const updatedComment = this.updateForm.getRawValue();

    this.adminCommentService.update(updatedComment, id).subscribe({
      next : () => {
        setTimeout(() => {
          this.ui.stopLoading();
          this.ui.showSuccess('Mise à jour effectuée !');
        }, 800);

        setTimeout(() => {
          this.ui.clearMessage();
          this.router.navigate(['/admin/commentsList']);
        }, 1400);
      },
      error: (err) => {
        setTimeout(() => {
          this.ui.stopLoading();
        }, 800);

        setTimeout(() => {
          const message = err.error?.message
            ?? "Erreur lors du changement de statut.";

          this.ui.showError(message);
        }, 1400);
      }
    });
  }

  // Getter : indique si le formulaire diffère du commentaire initial
  get hasChanges(): boolean {
    const comment = this.comment();

    if (!comment) {
      return false;
    }

    return (
      this.updateForm.controls.content.value !== comment.content ||
      this.updateForm.controls.isVisible.value !== comment.isVisible
    );
  }
}

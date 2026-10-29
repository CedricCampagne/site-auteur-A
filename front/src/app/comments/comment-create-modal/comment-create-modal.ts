import { Component, signal, input, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../services/comment.service';
import { CommentCreateRequest } from '../models/commentCreateRequest';
import { UiStore } from '../../core/stores/ui.store';
import { UiMessages } from '../../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-comment-create-modal',
  imports: [FormsModule],
  templateUrl: './comment-create-modal.html',
  styleUrl: './comment-create-modal.css',
})
export class CommentCreateModal {

  private commentService = inject(CommentService);
  chronicleId = input.required<number>();
  ui = inject(UiStore);

  open = input(false);


  close = output<void>();
  created = output<void>();

  content = "";
  error = signal("");

  private readonly minLength = 5;
  private readonly maxLength = 1000;

  handleSubmit(event: SubmitEvent): void{
    event.preventDefault();
    this.error.set('');

    const trimmed = this.content.trim();

    if(trimmed.length === 0){
      this.error.set("Le commentaire ne peut être vide.");
      return;
    }

    if (trimmed.length < this.minLength) {
      this.error.set(
        `Le commentaire doit contenir au moins ${this.minLength} caractères.`,
      );
      return;
    }

    if (trimmed.length > this.maxLength) {
      this.error.set(
        `Le commentaire ne doit pas dépasser ${this.maxLength} caractères.`,
      );
      return;
    }
    
    this.ui.clearMessage()
    this.ui.startLoading();

    const payload: CommentCreateRequest = {
      content: trimmed,
      chronicleId: this.chronicleId(),
    };

    this.commentService.create(payload).subscribe({
      next: () =>{
        this.ui.stopLoading().then(()=>{
          this.ui.showSuccess('Commentaire posté!');
            
          setTimeout(()=>{
            this.ui.clearMessage();
            this.created.emit();
            this.close.emit();
          }, 1500);
        });
      }, error: (err) => {
          this.ui.stopLoading().then(()=>{
            this.ui.showError('Erreur lors de la création');
            this.close.emit();
          });
      }
    });


  }

  handleClose(): void {
    this.content = '';
    this.error.set('');
    this.close.emit();
  }
}

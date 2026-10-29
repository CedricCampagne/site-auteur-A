import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminChronicleService } from '../service/admin-chronicle.service';
import { UiStore } from '../../../core/stores/ui.store';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, of, switchMap } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiMessages } from '../../../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-admin-chronicle-details',
  imports: [UiMessages, ReactiveFormsModule],
  templateUrl: './admin-chronicle-details.html',
  styleUrl: './admin-chronicle-details.css',
})
export class AdminChronicleDetails {
  private activeRouter = inject(ActivatedRoute);
  private router = inject(Router);
  private adminChronicleService = inject(AdminChronicleService);

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

  chronicle = toSignal(
    toObservable(this.routeId).pipe(
      switchMap(id =>{
        if(id === null){
          return of(null)
        }

        return this.adminChronicleService.getById(id);
      })
    ),
    {initialValue: null}
  );

  updateForm = new FormGroup({
    title: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(255)]
    }),
    quote: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required]
    }),
    summary: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required]
    }),
    content: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required]
    }),
    coverUrl: new FormControl("",{
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(255)]
    }),
    publishedAt: new FormControl("",{
      nonNullable: true
    }),
    isActive: new FormControl(false, {
      nonNullable: true
    }),
  });

  fillFormEffect = effect(()=>{
    const chronicle = this.chronicle();

    if(chronicle != null){
      this.updateForm.patchValue({
        title: chronicle.title,
        quote: chronicle.quote,
        summary: chronicle.summary,
        content: chronicle.content,
        coverUrl: chronicle.coverUrl,
        publishedAt: chronicle.publishedAt,
        isActive: chronicle.isActive
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

    const updatedChronicle = this.updateForm.getRawValue();

    const payload = {
      ...updatedChronicle,
      publishedAt: updatedChronicle.publishedAt || null
    }

    this.adminChronicleService.update(updatedChronicle, id).subscribe({
      next : () => {
        this.ui.stopLoading().then(()=>{
          this.ui.showSuccess('Mise à jour effectuée !');
        });
  
        setTimeout(() => {
          this.ui.clearMessage();
          this.router.navigate(['/admin/chroniclesList']);
        }, 1500);
      },
      error: (err) => {
        this.ui.stopLoading().then(()=>{
          const message = err.error?.message
            ?? "Erreur lors du changement de statut.";
  
          this.ui.showError(message);
        });
      }
    });
  }

  // Getter : indique si le formulaire diffère du commentaire initial
  get hasChanges(): boolean {
    const comment = this.chronicle();

    if (!comment) {
      return false;
    }

    return (
      this.updateForm.controls.title.value !== comment.title ||
      this.updateForm.controls.quote.value !== comment.quote ||
      this.updateForm.controls.summary.value !== comment.summary ||
      this.updateForm.controls.content.value !== comment.content ||
      this.updateForm.controls.coverUrl.value !== comment.coverUrl ||
      this.updateForm.controls.publishedAt.value !== comment.publishedAt ||
      this.updateForm.controls.isActive.value !== comment.isActive
    );
  }
}



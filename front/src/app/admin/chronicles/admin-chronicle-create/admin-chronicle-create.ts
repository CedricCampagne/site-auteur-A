import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AdminChronicleService } from '../service/admin-chronicle.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiStore } from '../../../core/stores/ui.store';
import { UiMessages } from '../../../shared/ui/ui-messages/ui-messages';
import { AdminChronicleCreateRequest } from '../models/adminChronicleCreateRequest';

@Component({
  selector: 'app-admin-chronicle-create',
  standalone: true,
  imports: [ReactiveFormsModule, UiMessages],
  templateUrl: './admin-chronicle-create.html',
  styleUrl: './admin-chronicle-create.css',
})
export class AdminChronicleCreate {

  private router = inject(Router);
  private adminChronicleService = inject(AdminChronicleService);

  ui = inject(UiStore);

  createForm = new FormGroup({
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


  onsubmit(){
    if(this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    this.ui.clearMessage();
    this.ui.isLoading();

    const createdChronicle: AdminChronicleCreateRequest = this.createForm.getRawValue();

    const payload = {
      ...createdChronicle,
      publishedAt: createdChronicle.publishedAt || null
    }

    this.adminChronicleService.create(payload).subscribe({
      next: () => {
        setTimeout(() => {
          this.ui.stopLoading();
          this.ui.showSuccess('Création effectuée !');
        }, 800);

        setTimeout(() => {
          this.ui.clearMessage();
          this.router.navigate(['/admin/chroniclesList']);
        }, 1400);
      },
      error: (err) => {
        setTimeout(() => {
          this.ui.stopLoading();
        }, 800);

        setTimeout(() => {
          this.ui.showError("Problème lors de la création !");
        }, 1400);
      }
    });

    


  }
}

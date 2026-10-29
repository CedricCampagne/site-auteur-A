import { Component, effect, inject} from '@angular/core';
import { AdminUserService } from '../service/admin-user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { map, switchMap, of } from 'rxjs';
import { AdminUserResponse } from '../models/adminUserResponse';
import { UiStore } from '../../../core/stores/ui.store';
import { UiMessages } from '../../../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, UiMessages],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  private adminUserService = inject(AdminUserService);
  private ActiveRouter = inject(ActivatedRoute);
  private router = inject(Router);

  ui = inject(UiStore);
  routeId = toSignal(
    this.ActiveRouter.paramMap.pipe(
      map(params => {
        const id = params.get('id');
        return id ? Number(id) : null
      })
    ),
    {initialValue: null}
  );
  
  user = toSignal(
    toObservable(this.routeId).pipe(
      switchMap(id =>{
        if (id === null) {
          return of(null)
        }
        return this.adminUserService.getById(id);
      })
    ),
    {initialValue: null}
  );

  updateForm = new FormGroup({
    username: new FormControl("",{
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    }),
    email: new FormControl("",{
      nonNullable: true,
      validators:[
        Validators.required,
        Validators.email,
        Validators.maxLength(50)
      ]
    }),
    isActive: new FormControl(true, {
      nonNullable: true
    }),
  });

  private fillFormEffect = effect(() => {
    const user = this.user();

    if (user !== null) {
      this.updateForm.patchValue({
        username: user.username,
        email: user.email,
        isActive: user.isActive,
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
    this.ui.startLoading()

    const updatedUser = this.updateForm.getRawValue();

    this.adminUserService.update(updatedUser, id).subscribe({
      next : () => {
        this.ui.stopLoading().then(()=>{
          this.ui.showSuccess('Mise a jour effectuée !');
          
          setTimeout(() => {
            this.ui.clearMessage();
            this.router.navigate(['/admin/userList']);
          }, 1500);
        });
      
      },
      error: (err) => {
    
        this.ui.stopLoading().then(()=>{
          this.ui.showError("Problème lors de la mise a jour de l'utilisateur");
        });
    

   
     
      }
    });
  }

  // Getter : indique si le formulaire diffère du commentaire initial
  get hasChanges(): boolean {
    const comment = this.user();

    if (!comment) {
      return false;
    }

    return (
      this.updateForm.controls.username.value !== comment.username ||
      this.updateForm.controls.email.value !== comment.email ||
      this.updateForm.controls.isActive.value !== comment.isActive
    );
  }
}

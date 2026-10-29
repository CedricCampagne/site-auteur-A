import { Component, inject, signal} from '@angular/core';
import { AdminUserService } from '../service/admin-user.service';
import { AdminUserResponse } from '../models/adminUserResponse';
import { UserCard } from '../user-card/user-card';
import { Router } from '@angular/router';
import { UiStore } from '../../../core/stores/ui.store';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  private adminUserService = inject(AdminUserService);
  private router = inject(Router);
  private ui = inject(UiStore);

  users = signal<AdminUserResponse[]>([]);

  ngOnInit(): void {
    this.adminUserService.getAll().subscribe({
      next: (users) => this.users.set(users),
      error: (error) => console.error('Erreur de chargement', error),
    });
  }

  deleteUser(id: number): void {
    this.ui.startLoading();
    this.adminUserService.delete(id).subscribe({
      next: () => {
        this.ui.stopLoading().then(()=>{
          this.users.update((currentUsers) =>
            currentUsers.filter((user) => user.id !== id),
          );
          this.ui.showSuccess("Suppression éffectuée !")
        });
      },
      error: (error) => {
        this.ui.stopLoading().then(() => {
          console.error('Erreur lors de la suppression', error);
          this.ui.showError('Erreur lors de la suppression.');
        });
      }
    });
  }

  toggleStatus(id: number): void{
    this.adminUserService.toggleStatus(id).subscribe({
      next: (updateUser)=>{
        this.users.update((users)=>
          users.map((user) => user.id === id ? updateUser : user)
        );
      },
      error : (err) => {
        console.log("Erreur lors du changement de statut");
      }
    });
  }

  updateUser(id: number){
    this.router.navigate(['/admin/user/', id]);
  }
}

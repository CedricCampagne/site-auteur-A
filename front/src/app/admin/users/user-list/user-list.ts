import { Component, inject, signal} from '@angular/core';
import { AdminUserService } from '../service/admin-user.service';
import { AdminUserResponse } from '../models/adminUserResponse';
import { UserCard } from '../user-card/user-card';
import { Router } from '@angular/router';
import { UiStore } from '../../../core/stores/ui.store';
import { forkJoin, timer } from 'rxjs';

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

    forkJoin([this.adminUserService.delete(id), timer(1500)]).subscribe({
      next : () => {
        this.ui.stopLoading();
        this.users.update((currentUsers) =>
          currentUsers.filter((user) => user.id !== id),
        );
        this.ui.showSuccess("Suppression effectuée !")
      },
      error : (err) => {
        this.ui.stopLoading();
        this.ui.showError(err.error?.message ?? 'Erreur lors de la suppression.');
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

import { Component, inject, signal} from '@angular/core';
import { AdminUserService } from '../service/admin-user.service';
import { AdminUserResponse } from '../models/adminUserResponse';
import { UserCard } from '../user-card/user-card';
import { Router } from '@angular/router';

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

  users = signal<AdminUserResponse[]>([]);

  ngOnInit(): void {
    this.adminUserService.getAll().subscribe({
      next: (users) => this.users.set(users),
      error: (error) => console.error('Erreur de chargement', error),
    });
  }

  deleteUser(id: number): void {
    this.adminUserService.delete(id).subscribe({
      next: () => {
        this.users.update((users) =>
          users.filter((user) => user.id !== id),
        );
      },
      error: (error) => console.error('Erreur lors de la suppression', error),
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

import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, output } from '@angular/core';
import { AdminUserResponse } from '../models/adminUserResponse';
import { Router } from '@angular/router';
import 'iconify-icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  private router = inject(Router);

  user = input.required<AdminUserResponse>();

  toggle = output<number>();
  update = output<number>();
  delete = output<number>();

  handleToggle(): void {
    this.toggle.emit(this.user().id);
  }

  handleUpdate(): void {
    this.update.emit(this.user().id);
  }

  handleDelete(): void {
    this.delete.emit(this.user().id);
  }

  goToUser(){
    this.router.navigate(['/admin/user', this.user().id]);
  }
}

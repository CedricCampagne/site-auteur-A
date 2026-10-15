import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, input, output } from '@angular/core';
import { AdminChronicleResponse } from '../models/adminChronicleResponse';
import { DatePipe } from '@angular/common';
import 'iconify-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-chronicle-card',
  imports: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './admin-chronicle-card.html',
  styleUrl: './admin-chronicle-card.css',
})
export class AdminChronicleCard {

  private router = inject(Router);
  
  chronicle = input.required<AdminChronicleResponse>();

  toggle = output<number>();
  update = output<number>();
  delete = output<number>();

  handleToggle(): void {
    this.toggle.emit(this.chronicle().id);
  }

  handleUpdate(): void {
    this.update.emit(this.chronicle().id);
  }

  handleDelete(): void {
    this.delete.emit(this.chronicle().id);
  }

  goTochronicle(){
    this.router.navigate(['/admin/chronicles', this.chronicle().id]);
  }
}

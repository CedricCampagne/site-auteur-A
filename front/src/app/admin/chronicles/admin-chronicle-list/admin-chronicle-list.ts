import { Component, inject, signal } from '@angular/core';
import { AdminChronicleService } from '../service/admin-chronicle.service';
import { AdminChronicleResponse } from '../models/adminChronicleResponse';
import { AdminChronicleCard } from '../admin-chronicle-card/admin-chronicle-card';
import { Router } from '@angular/router';
import { UiStore } from '../../../core/stores/ui.store';
import { UiMessages } from '../../../shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-admin-chronicle-list',
  imports: [AdminChronicleCard, UiMessages],
  templateUrl: './admin-chronicle-list.html',
  styleUrl: './admin-chronicle-list.css',
})
export class AdminChronicleList {
  private adminChronicleService = inject(AdminChronicleService);
  private router = inject(Router);
  ui = inject(UiStore);

  chronicles = signal<AdminChronicleResponse[]>([]);

  ngOnInit(): void {
    this.adminChronicleService.getAll().subscribe({
      next: (res) => this.chronicles.set(res),
      error(err) {
        console.log("Erreur de chaergement", err);
      },
    });
  }

  deleteChronicle(id: number){
    this.ui.startLoading();
    this.adminChronicleService.delete(id).subscribe({
      next: () => {
        this.ui.stopLoading().then(()=>{
          this.chronicles.update((currentChronicles) =>
            currentChronicles.filter((chronicle)=> chronicle.id !== id)
          );
          this.ui.showSuccess("Suppression éffectuée !")
        });

      },
      error: (err) => {
        this.ui.stopLoading().then(() => {
          console.error('Erreur lors de la suppression', err);
          this.ui.showError('Erreur lors de la suppression.');
        });
      }
    });
  }

  toggleStatus(id: number){
    this.adminChronicleService.toggle(id).subscribe({
      next: (updatedChronicle) =>{
        this.chronicles.update((currentChronicles) =>
          currentChronicles.map(chronicle => chronicle.id === id ? updatedChronicle : chronicle)
        );
      },
      error: (err) => {
        const message = err.error?.message
            ?? "Erreur lors du changement de statut.";

        this.ui.showError(message);
      }
    });
  }

  updateChronicle(id: number){
    this.router.navigate(["/admin/chronicles", id])
  }

  createChronicle(){
    this.router.navigate(["/admin/chronicles/create"])
  }
}

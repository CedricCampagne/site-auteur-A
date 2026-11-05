import { Component, input, inject } from '@angular/core';
import { ChronicleCard } from '../../../chronicles/models/chronicleCard';
import { UiButton } from '../ui-button/ui-button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chronicle-home-card',
  standalone: true,
  imports: [UiButton],
  templateUrl: './chronicle-home-card.html',
  styleUrl: './chronicle-home-card.css',
  host: {
    class: 'contents',
  },
})
export class ChronicleHomeCard {

  private router = inject(Router);

  chronicle = input.required<ChronicleCard>();

  goToChronicle() {
  
    this.router.navigate([
      '/chronicles',
      this.chronicle().id,
      this.chronicle().slug
    ]);
  }
}

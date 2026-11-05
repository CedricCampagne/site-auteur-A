import { Component, inject, input } from '@angular/core';
import { ChronicleListItem } from '../../../chronicles/models/chronicleListItem';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { UiButton } from '../ui-button/ui-button';

@Component({
  selector: 'app-chronicle-list-card',
  imports: [DatePipe, UiButton],
  templateUrl: './chronicle-list-card.html',
  styleUrl: './chronicle-list-card.css',
})
export class ChronicleListCard {

  private router = inject(Router);

  chronicle = input.required<ChronicleListItem>();

  goToChronicle(){
    this.router.navigate([
      "/chronicles/",
      this.chronicle().id, this.chronicle().slug
    ])
  }
}

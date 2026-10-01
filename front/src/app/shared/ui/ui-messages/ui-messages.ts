import { Component, inject } from '@angular/core';
import { UiStore } from '../../../core/stores/ui.store';

@Component({
  selector: 'app-ui-messages',
  imports: [],
  templateUrl: './ui-messages.html',
  styleUrl: './ui-messages.css',
})
export class UiMessages {
  ui = inject(UiStore);
}

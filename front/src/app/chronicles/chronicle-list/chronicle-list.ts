import { Component, inject } from '@angular/core';
import { ChronicleListCard } from '../../shared/ui/chronicle-list-card/chronicle-list-card';
import { ChronicleService } from '../services/chronicle.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chronicle-list',
  imports: [ChronicleListCard],
  templateUrl: './chronicle-list.html',
  styleUrl: './chronicle-list.css',
})
export class ChronicleList {

  private chronicleService = inject(ChronicleService);

  chronicles = toSignal(
    this.chronicleService.getListChronicles(),
    { initialValue: [] }
  );

}

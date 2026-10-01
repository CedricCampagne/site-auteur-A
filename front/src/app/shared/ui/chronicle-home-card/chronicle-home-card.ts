import { Component, input } from '@angular/core';
import { ChronicleCard } from '../../../chronicles/models/chronicleCard';

@Component({
  selector: 'app-chronicle-home-card',
  standalone: true,
  imports: [],
  templateUrl: './chronicle-home-card.html',
  styleUrl: './chronicle-home-card.css',
  host: {
    class: 'contents',
  },
})
export class ChronicleHomeCard {

  chronicle = input.required<ChronicleCard>();

}

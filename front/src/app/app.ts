import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { UiMessages } from './shared/ui/ui-messages/ui-messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, UiMessages],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

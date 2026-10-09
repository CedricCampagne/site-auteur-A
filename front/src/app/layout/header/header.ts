import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import 'iconify-icon';
import { AccountMenu } from '../../shared/ui/account-menu/account-menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AccountMenu],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly isOpen = signal(false);
}

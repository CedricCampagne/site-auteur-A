import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import 'iconify-icon';
import { AccountMenu } from '../../shared/ui/account-menu/account-menu';

import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  private router = inject(Router);

  constructor(){
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(()=> {
        this.isOpen.set(false);
      });
  }
}

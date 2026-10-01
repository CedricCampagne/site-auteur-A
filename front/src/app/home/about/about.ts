import { Component, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterForm } from '../../shared/ui/newsletter-form/newsletter-form';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NewsletterForm],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private router = inject(Router);

  goToAbout(){
    this.router.navigate(['/about']);
  }
}

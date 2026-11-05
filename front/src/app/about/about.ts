import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('À propos – Katia Campagne, auteure de thrillers psychologiques');

    this.meta.updateTag({
      name: 'description',
      content:
        'Découvrez le parcours de Katia Campagne, autrice de thrillers psychologiques. Finaliste et lauréate de concours littéraires, elle explore les zones d’ombre de l’âme humaine à travers ses romans et chroniques.',
    });
  }
}

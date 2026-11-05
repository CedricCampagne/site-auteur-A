import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [],
  templateUrl: './legal.html',
  styleUrl: './legal.css',
})
export class Legal {
  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Mentions légales – Katia Campagne');

    this.meta.updateTag({
      name: 'description',
      content:
        'Mentions légales du site de Katia Campagne : informations sur l’éditeur, l’hébergement, la propriété intellectuelle, les données personnelles et les droits des utilisateurs.',
    });
  }
}
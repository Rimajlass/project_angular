import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conference } from '../models/conference.model';

@Component({
  selector: 'app-list-conf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-conf.component.html',
  styleUrl: './list-conf.component.css'
})
export class ListConfComponent {
  conferences: Conference[] = [
    {
      id: 1,
      picture: 'https://picsum.photos/seed/angular/600/350',
      title: 'Angular Summit 2026',
      date: new Date('2026-03-12'),
      address: '12 Avenue Habib Bourguiba, Tunis',
      available_places: 120
    },
    {
      id: 2,
      picture: 'https://picsum.photos/seed/typescript/600/350',
      title: 'TypeScript Days',
      date: new Date('2026-05-20'),
      address: '5 Rue de Marseille, Sousse',
      available_places: 0
    },
    {
      id: 3,
      picture: 'https://picsum.photos/seed/webdev/600/350',
      title: 'Web Dev Conf',
      date: new Date('2026-09-08'),
      address: 'Cité de la Culture, Tunis',
      available_places: 45
    },
    {
      id: 4,
      picture: 'https://picsum.photos/seed/cloud/600/350',
      title: 'Cloud & DevOps Meetup',
      date: new Date('2026-11-27'),
      address: 'Technopôle El Ghazala, Ariana',
      available_places: 8
    }
  ];
}

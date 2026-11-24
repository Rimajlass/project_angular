import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference.model';

@Component({
  selector: 'app-list-conf',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-conf.component.html',
  styleUrl: './list-conf.component.css',
})
export class ListConfComponent {
  searchText = '';

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular Summit 2027',
      description: 'Le sommet annuel sur Angular.',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 120,
      nbParticipants: 95,
    },
    {
      id: 2,
      title: 'Web Workshop',
      description: 'Journée dédiée à .....',
      date: new Date('2027-11-30'),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'AI Conference',
      description: 'Conférence sur le ......',
      date: new Date('2027-12-20'),
      place: 'Tunis',
      maxParticipants: 80,
      nbParticipants: 80,
    },
    {
      id: 4,
      title: 'Cloud & DevOps Meetup',
      description: 'Rencontre autour du cloud et du DevOps.',
      date: new Date('2027-12-27'),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 22,
    },
  ];

  get filteredConferences(): Conference[] {
    const text = this.searchText.toLowerCase().trim();
    return this.conferences.filter((c) => c.title.toLowerCase().includes(text));
  }

  register(conf: Conference): void {
    if (conf.nbParticipants < conf.maxParticipants) {
      conf.nbParticipants++;
    }
  }

  buttonClass(conf: Conference): string {
    const left = conf.maxParticipants - conf.nbParticipants;
    if (left <= 0) return 'btn btn-danger btn-sm';
    if (left < 10) return 'btn btn-warning btn-sm';
    return 'btn btn-success btn-sm';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = [
    'Votre inscription à Angular 21 Conference est confirmée.',
    'Il ne reste que 6 places pour Signals Workshop.',
  ];
  visible = false;

  toggle(): void {
    this.visible = !this.visible;
  }
}

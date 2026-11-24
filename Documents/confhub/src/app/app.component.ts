import { Component } from '@angular/core';
import { Header } from './header/header';
import { Navigation } from './navigation/navigation';
import { UserProfile } from './user-profile/user-profile';
import { FriendsList } from './friends-list/friends-list';
import { Notifications } from './notifications/notifications';
import { ListConfComponent } from './list-conf/list-conf.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Navigation,
    UserProfile,
    FriendsList,
    Notifications,
    ListConfComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

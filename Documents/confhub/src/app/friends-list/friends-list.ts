import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends = ['Sami', 'Sarra', 'Amine'];
  //Hedhi tw naamelha baed fel ajout tae les amis khtr why not
 // newFriend = '';

  /*addFriend(): void {
    if (this.newFriend.trim()) {
      this.friends.push(this.newFriend.trim());
      this.newFriend = '';
    }
  }*/
}

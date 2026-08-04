import { Component } from '@angular/core';
import { UserData } from '../../home-component/VideogameInterface';

@Component({
  selector: 'app-new-comment-component',
  imports: [],
  templateUrl: './new-comment-component.html',
  styleUrl: './new-comment-component.css',
})
export class NewCommentComponent {
  readonly stars = [0, 1, 2, 3, 4];

  userProfileData: UserData = {
    id: 1,
    userName: 'Ruben',
    userProfilePicture: 'assets/profile/defaultProfileImage.jpeg',
  };

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}

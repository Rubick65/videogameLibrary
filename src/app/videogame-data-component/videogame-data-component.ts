import { Component } from '@angular/core';
import { VideogameGeneralDataComponent } from '../components/videogame-general-data-component/videogame-general-data-component';
import { VideogameCommentsComponent } from '../components/videogame-comments-component/videogame-comments-component';
import { NewCommentComponent } from "../components/new-comment-component/new-comment-component";

@Component({
  selector: 'app-videogame-data-component',
  imports: [VideogameGeneralDataComponent, VideogameCommentsComponent, NewCommentComponent],
  templateUrl: './videogame-data-component.html',
  styleUrl: './videogame-data-component.css',
})
export class VideogameDataComponent {
  newCommentDisplayed: boolean = false;

  changeNewCommentDisplayed() {
    this.newCommentDisplayed = !this.newCommentDisplayed;
  }
}

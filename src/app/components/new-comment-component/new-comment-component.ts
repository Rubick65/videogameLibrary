import { Component } from '@angular/core';


@Component({
  selector: 'app-new-comment-component',
  imports: [],
  templateUrl: './new-comment-component.html',
  styleUrl: './new-comment-component.css',
})
export class NewCommentComponent {
  readonly stars = [0, 1, 2, 3, 4];
}

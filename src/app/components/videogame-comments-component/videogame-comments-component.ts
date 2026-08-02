import { Component, Input } from '@angular/core';
import { VideogameComment } from '../../home-component/VideogameInterface';

@Component({
  selector: 'app-videogame-comments-component',
  imports: [],
  templateUrl: './videogame-comments-component.html',
  styleUrl: './videogame-comments-component.css',
})
export class VideogameCommentsComponent {

  @Input() comments!: VideogameComment[];
  
  readonly stars = [0, 1, 2, 3, 4];


}

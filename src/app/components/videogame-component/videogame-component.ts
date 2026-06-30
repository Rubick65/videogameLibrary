import { Component, signal } from '@angular/core';
import { IconData } from './VideogameInterface';

@Component({
  selector: 'app-videogame-component',
  imports: [],
  templateUrl: './videogame-component.html',
  styleUrl: './videogame-component.css',
})
export class VideogameComponent {
  hover = signal(false);

  iconsData: IconData[] = [
    { id: 1, src: 'assets/icons/likeGame.png', number: 5 },
    { id: 2, src: 'assets/icons/likeGame.png', number: 10 },
    { id: 3, src: 'assets/icons/likeGame.png', number: 3 },
    { id: 4, src: 'assets/icons/likeGame.png', number: 9 },
  ];

  mouseOver(){
    this.hover.set(true)
  }

  mouseOut(){
    this.hover.set(false)
  }
}

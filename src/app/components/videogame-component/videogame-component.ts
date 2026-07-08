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
  private videogameDescriptionContainer = document.querySelector('.videogame_description_container') as HTMLDivElement;

  iconsData: IconData[] = [
    { id: 1, src: 'assets/icons/likeGame.svg', number: 5 },
    { id: 2, src: 'assets/icons/gameFav.svg', number: 10},
  ];

  mouseOver() {
    this.hover.set(true);
  }

  mouseOut() {
    this.hover.set(false);
  }

  addToLibraryIconClick(event: MouseEvent) {
    const target  = event.target as HTMLImageElement;

    if (target.src.includes('assets/icons/addToLibrary.svg')) {
      target.src = 'assets/icons/removeFromLibrary.svg';
    }else{
      target.src = 'assets/icons/addToLibrary.svg';
    }

    
  }
}

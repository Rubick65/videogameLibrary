import { Component } from '@angular/core';
import { GameListComponent } from '../components/game-list-component/game-list-component';

import { IconData, VideogamePreview } from '../home-component/VideogameInterface';

@Component({
  selector: 'app-game-library-component',
  imports: [GameListComponent],
  templateUrl: './game-library-component.html',
  styleUrl: './game-library-component.css',
})
export class GameLibraryComponent {
  iconsData: IconData[] = [
    { id: 1, number: 5 },
    { id: 2, number: 10 },
  ];

  videogamesData: VideogamePreview[] = [
    // TODO videogames data must come from father component to be able to reuse component in library
    {
      id: 1,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 2,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 3,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 4,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 5,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 6,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 7,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 8,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 9,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },

    {
      id: 10,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 11,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
    {
      id: 12,
      title: 'Middle earth shadow of mordor',
      src: 'assets/videogame/testImage.jpg',
      description: 'Videogame Description',
      iconsData: this.iconsData,
      fav: true,
      like: true,
      isInLibrary: true,
    },
  ];
}

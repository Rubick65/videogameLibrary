import { Component } from '@angular/core';
import { VideogameComponent } from '../components/videogame-component/videogame-component';
import { IconData, VideogamePreview } from './VideogameInterface';
@Component({
  selector: 'app-home-component',
  imports: [VideogameComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  iconsData: IconData[] = [
    { id: 1, number: 5 },
    { id: 2, number: 10 },
  ];

  videogamesData: VideogamePreview[] = [
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

  onFavCliked(videogame: VideogamePreview){
    //const fav = videogame.fav

    // TODO MAKE PETITIONS TO API IN FUNCTION OF FAV BOOLEAN
  
  }

  onLikeCliked(videogame: VideogamePreview){
    //const like = videogame.like

    // TODO MAKE PETITIONS TO API IN FUNCTION OF FAV BOOLEAN
  
  }

  onAddToLibraryCliked(videogame: VideogamePreview){
    //const isInLibrary = videogame.isInLibrary

    // TODO MAKE PETITIONS TO API IN FUNCTION OF FAV BOOLEAN
  
  }
}

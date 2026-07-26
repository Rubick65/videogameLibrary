import { Component, Input } from '@angular/core';
import { VideogameComponent } from '../videogame-component/videogame-component';
import { VideogamePreview } from '../../home-component/VideogameInterface';

@Component({
  selector: 'app-game-list-component',
  imports: [VideogameComponent],
  templateUrl: './game-list-component.html',
  styleUrl: './game-list-component.css',
})
export class GameListComponent {

  @Input() videogamesData!: VideogamePreview[]


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

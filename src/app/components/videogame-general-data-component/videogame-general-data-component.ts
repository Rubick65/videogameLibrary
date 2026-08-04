import { Component, Output, EventEmitter } from '@angular/core';

import {
  IconData,
  VideogamePreview,
  VideogameExtendedData,
  VideogameComment,
} from '../../home-component/VideogameInterface';
import { VideogameTextDataComponent } from '../videogame-text-data-component/videogame-text-data-component';
import { VideogameCommentsComponent } from '../videogame-comments-component/videogame-comments-component';

@Component({
  selector: 'app-videogame-general-data-component',
  imports: [VideogameTextDataComponent, VideogameCommentsComponent],
  templateUrl: './videogame-general-data-component.html',
  styleUrl: './videogame-general-data-component.css',
})
export class VideogameGeneralDataComponent {
  @Output() showNewCommentComponent = new EventEmitter<void>();

  iconsData: IconData[] = [
    { id: 1, number: 5 },
    { id: 2, number: 10 },
  ];

  videogamePreview: VideogamePreview = {
    id: 1,
    title: 'Middle earth shadow of mordor',
    src: 'assets/videogame/testImage.jpg',
    description:
      'La Tierra Media: Sombras de Mordor (Middle-earth: Shadow of Mordor) es una aventura de acción desarrollada por Monolith Productions y publicada por Warner Bros. Interactive para PlayStation 3, PlayStation 4, Xbox 360, Xbox One y PC. Un juego de mundo abierto ambientado en el universo de El Señor de los Anillos, que nos pone en la piel de Talion, un guardia de Gondor asesinado que regresa de entre los muertos para vengarse de Sauron y su ejército de orcos, introduciendo el original sistema Némesis, que crea dinámicas personales con los enemigos, a través de nuestras derrotas y victorias.',
    iconsData: this.iconsData,
    fav: true,
    like: true,
    isInLibrary: true,
  };

  platforms: string[] = ['Play', 'Nintendo', 'Xbox', 'Steam'];

  videogameData: VideogameExtendedData = {
    title: this.videogamePreview.title,
    description: this.videogamePreview.description,
    date: '2014',
    platforms: this.platforms,
  };

  videgameComments: VideogameComment[] = [
    {
      id: 1,
      user: 'Ruben',
      userProfilePicture: 'assets/profile/defaultProfileImage.jpeg',
      comment: 'Me ha encantado este juego, lo recomiendo',
      rating: 5,
      date: '2023-06-01',
    },
    {
      id: 2,
      user: 'Juan',
      userProfilePicture: 'assets/profile/defaultProfileImage.jpeg',
      comment: 'No me ha gustado mucho, esperaba más de este juego',
      rating: 2,
      date: '2023-06-02',
    },
  ];

  onShowNewCommentComponent() {
    this.showNewCommentComponent.emit();
  }
}

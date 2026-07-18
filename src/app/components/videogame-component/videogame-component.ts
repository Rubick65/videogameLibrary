import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { VideogamePreview } from '../../home-component/VideogameInterface';

@Component({
  selector: 'app-videogame-component',
  imports: [],
  templateUrl: './videogame-component.html',
  styleUrl: './videogame-component.css',
})
export class VideogameComponent {
  @Input() videogame!: VideogamePreview;
  @Output() favCliked = new EventEmitter<VideogamePreview>();
  @Output() likeCliked = new EventEmitter<VideogamePreview>();
  @Output() addLibraryCliked = new EventEmitter<VideogamePreview>();

  hover = signal(false);

  mouseOver() {
    this.hover.set(true);
  }

  mouseOut() {
    this.hover.set(false);
  }

  changeFavState() {
    this.videogame.fav = !this.videogame.fav;
    this.favCliked.emit(this.videogame);
  }

  changelikeState() {
    this.videogame.like = !this.videogame.like;
    this.likeCliked.emit(this.videogame);
  }

  addToLibraryIconClick() {
    this.videogame.isInLibrary = !this.videogame.isInLibrary;
    this.addLibraryCliked.emit(this.videogame);
  }
}

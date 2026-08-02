import { Component } from '@angular/core';
import { VideogameGeneralDataComponent } from '../components/videogame-general-data-component/videogame-general-data-component';
import { VideogameCommentsComponent } from "../components/videogame-comments-component/videogame-comments-component";

@Component({
  selector: 'app-videogame-data-component',
  imports: [VideogameGeneralDataComponent, VideogameCommentsComponent],
  templateUrl: './videogame-data-component.html',
  styleUrl: './videogame-data-component.css',
})
export class VideogameDataComponent {}

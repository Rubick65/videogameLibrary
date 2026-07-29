import { Component, Input } from '@angular/core';
import { VideogameExtendedData } from '../../home-component/VideogameInterface';

@Component({
  selector: 'app-videogame-text-data-component',
  imports: [],
  templateUrl: './videogame-text-data-component.html',
  styleUrl: './videogame-text-data-component.css',
})
export class VideogameTextDataComponent {
  @Input() videogameExtraData!: VideogameExtendedData

}

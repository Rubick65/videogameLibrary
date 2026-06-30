import { Component, input } from '@angular/core';

@Component({
  selector: 'app-generic-button-component',
  imports: [],
  templateUrl: './generic-button-component.html',
  styleUrl: './generic-button-component.css',
})
export class GenericButtonComponent {
  button_text = input.required<string>()
}

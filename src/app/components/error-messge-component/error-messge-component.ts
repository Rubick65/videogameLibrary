import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-messge-component',
  imports: [],
  templateUrl: './error-messge-component.html',
  styleUrl: './error-messge-component.css',
})
export class ErrorMessgeComponent {
  errorMessage = input.required()
}

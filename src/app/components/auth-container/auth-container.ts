import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-container',
  imports: [RouterLink],
  templateUrl: './auth-container.html',
  styleUrl: './auth-container.css',
})
export class AuthContainer {
  // Common variables for component usage
  title = input<string>();
  linkRouter = input<string>();
  linkText = input<string>();
}

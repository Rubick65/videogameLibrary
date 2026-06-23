import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-auth-container',
  imports: [RouterLink],
  templateUrl: './auth-container.html',
  styleUrl: './auth-container.css',
})
export class AuthContainer {
  title = input.required<string>();
  linkRouter = input.required<string>();
  linkText = input<string>();
}

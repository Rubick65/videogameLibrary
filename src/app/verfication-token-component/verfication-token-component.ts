import { Component } from '@angular/core';
import { AuthContainer } from "../components/auth-container/auth-container";

@Component({
  selector: 'app-verfication-token-component',
  imports: [AuthContainer],
  templateUrl: './verfication-token-component.html',
  styleUrl: './verfication-token-component.css',
})
export class VerficationTokenComponent {
}

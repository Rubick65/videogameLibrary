import { Component } from '@angular/core';
import { AuthContainer } from "../components/auth-container/auth-container";
import { GenericButtonComponent } from "../components/generic-button-component/generic-button-component";
import { ImageContainerComponent } from "../components/image-container-component/image-container-component";

@Component({
  selector: 'app-platforms-of-interest',
  imports: [AuthContainer, GenericButtonComponent, ImageContainerComponent],
  templateUrl: './platforms-of-interest.html',
  styleUrl: './platforms-of-interest.css',
})
export class PlatformsOfInterest {}

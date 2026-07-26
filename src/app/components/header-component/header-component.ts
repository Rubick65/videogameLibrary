import { Component } from '@angular/core';
import { NavIcon } from './NavIconsInterface';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {
  constructor(readonly router: Router) {}

  navIcons: NavIcon[] = [
    {
      id: 1,
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M440-629v-17q-44-13-72-49.5T340-780q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-646v17l280 161q19 11 29.5 29.5T840-398v76q0 22-10.5 40.5T800-252L520-91q-19 11-40 11t-40-11L160-252q-19-11-29.5-29.5T120-322v-76q0-22 10.5-40.5T160-468l280-161ZM272-440l208 120 208-120-168-97v137h-80v-137l-168 97Z"',
      alt: 'Library',
      route: '/home',
    },
    {
      id: 2,
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Z',
      alt: 'Library',
      route: '/userGameLibrary',
    },
    {
      id: 3,
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm146.5-204.5Q340-521 340-580t40.5-99.5Q421-720 480-720t99.5 40.5Q620-639 620-580t-40.5 99.5Q539-440 480-440t-99.5-40.5ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z',
      alt: 'Library',
      route: '/profileConfiguration',
    },
  ];
}

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./login-component/login-component').then((m) => m.LoginComponent);
    },
  },
  {
    path: 'register',
    loadComponent: () => {
      return import('./register-component/register-component').then((m) => m.RegisterComponent);
    },
  },
  {
    path: 'profileConfiguration',
    loadComponent: () => {
      return import('./profile-creation-component/profile-creation-component').then(
        (m) => m.ProfileCreationComponent,
      );
    },
  },
  {
    path: 'platformsOfInterest',
    loadComponent: () => {
      return import('./platforms-of-interest/platforms-of-interest').then(
        (m) => m.PlatformsOfInterest,
      );
    },
  },
];

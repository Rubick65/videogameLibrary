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
    path: 'verificationCode',
    loadComponent: () => {
      return import('./check-verification-code-component/check-verification-code-component').then(
        (m) => m.CheckVerificationCodeComponent,
      );
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
    path: 'home',
    loadComponent: () => {
      return import('./home-component/home-component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'userGameLibrary',
    loadComponent: () => {
      return import('./game-library-component/game-library-component').then(
        (m) => m.GameLibraryComponent,
      );
    },
  },
  {
    path: 'videogameExpandedData',
    loadComponent: () => {
      return import('./videogame-data-component/videogame-data-component').then(
        (m) => m.VideogameDataComponent,
      );
    },
  },
];

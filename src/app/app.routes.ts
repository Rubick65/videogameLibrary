import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: "",
    pathMatch: 'full',
    loadComponent: () => {
        return import('./login-component/login-component').then(
            m => m.LoginComponent
        )
    },
    },
    {
        path: "register",
        loadComponent: () => {
            return import("./register-component/register-component").then(
                m => m.RegisterComponent
            )
        }

    }
    
];

import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/auth/login/login.component';
import { RegisterComponent } from '../../pages/auth/register/register.component';

export const AuthLayoutRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule)
    }
];

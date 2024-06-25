import { Routes } from '@angular/router';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        loadChildren: () => import('src/app/pages/pages.module').then(m => m.PagesModule)
    }
];

import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/routes').then((mod) => mod.ADMIN_ROUTES)
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./features/not-found/not-found.component').then((com) => com.NotFoundComponent)
  },
  {
    path: '',
    loadChildren: () => import('./features/public/routes').then((mod) => mod.PUBLIC_ROUTES)
  },
  { path: '**', redirectTo: 'not-found' }
];

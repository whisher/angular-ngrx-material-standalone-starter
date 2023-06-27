import { Routes } from '@angular/router';

import { authGuard } from '@domains/auth';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    canMatch: [authGuard],
    loadChildren: () => import('./features/admin/routes').then((mod) => mod.ADMIN_ROUTES)
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./features/logout/logout.component').then((com) => com.LogoutComponent)
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

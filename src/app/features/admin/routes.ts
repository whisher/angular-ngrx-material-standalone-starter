import { Routes } from '@angular/router';

import { AdminLayoutMainComponent } from './layout';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminLayoutMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((com) => com.AdminDashboardComponent)
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings.component').then((com) => com.AdminSettingsComponent)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./users/users.component').then((com) => com.AdminUsersComponent)
      }
    ]
  }
];

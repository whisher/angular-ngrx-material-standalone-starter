import { Routes } from '@angular/router';

import { authJustLoggedGuard } from '@domains/auth';
import { PublicLayoutMainComponent } from './layout';
import { PublicHomeComponent } from './home/home.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicLayoutMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./about/about.component').then((com) => com.PublicAboutComponent)
      },
      {
        path: 'home',
        component: PublicHomeComponent
      },
      {
        path: 'login',
        canMatch: [authJustLoggedGuard],
        loadComponent: () => import('./login').then((com) => com.PublicLoginMainComponent)
      }
    ]
  }
];

import { Routes } from '@angular/router';
import { PublicLayoutMainComponent } from './layout';
import { PublicHomeComponent } from './home/home.component';
import { PublicAboutComponent } from './about/about.component';

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
        path: 'home',
        component: PublicHomeComponent
      },
      {
        path: 'about',
        component: PublicAboutComponent
      }
    ]
  }
];

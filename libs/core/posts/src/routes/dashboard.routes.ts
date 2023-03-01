import { Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path:'',
    loadComponent: () => import('../components/post-section/post-section.component').then(m => m.PostSectionComponent),
  }
];

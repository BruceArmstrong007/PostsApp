import { Route } from '@angular/router';

export const dashboardRoutes: Route[] = [
  {
    path:'',
    loadComponent: () => import('../components/posts-section/posts-section.component').then(m => m.PostsSectionComponent),
  }
];

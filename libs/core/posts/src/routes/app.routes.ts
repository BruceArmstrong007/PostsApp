import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path:'',
    loadComponent: () => import('./../components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    loadChildren: () => import('./dashboard.routes').then(u => u.dashboardRoutes)
  }
];

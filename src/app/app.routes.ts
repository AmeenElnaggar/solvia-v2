import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then((c) => c.Home),
    title: 'Home',
  },

  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((c) => c.Projects),
    title: 'Projects',
  },
  {
    path: 'projects/project-details',
    loadComponent: () => import('./pages/project-details/project-details'),
    title: 'Project-Details',
  },
  {
    path: 'thanks',
    loadComponent: () => import('./shared/components/thank/thank.component'),
    title: 'thanks',
  },
  {
    path: '**',
    loadComponent: () => import('./layout/not-found/not-found').then((c) => c.NotFound),
  },
];

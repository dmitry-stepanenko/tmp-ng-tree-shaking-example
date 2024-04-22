import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'meow',
        loadComponent: () => import('./mylib1').then(l => l.Mylib1Component)
        // loadComponent: () => import('@org/mylib1').then(l => l.Mylib1Component)
    }
];

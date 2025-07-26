import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'calculator',
        // loadComponent: () => import('./calculator/views/calculator-view.component').then(c => c.CalculatorViewComponent)
        loadComponent: () => import('@/calculator/views/calculator-view/calculator-view.component')
    },
    {
        path: '**',
        redirectTo: 'calculator'
    }
];

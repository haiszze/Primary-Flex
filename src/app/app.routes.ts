import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: '',
		loadComponent: () => import('./layout/layout').then(m => m.Layout),
		children: [
			{
				path: 'home',
				loadComponent: () => import('./pages/home/home').then(m => m.Home),
			},
      {
        path: 'select',
				loadComponent: () => import('./pages/component-select/component-select').then(m => m.ComponentSelect),
      },
      {
        path: 'multiselect',
				loadComponent: () => import('./pages/component-multiselect/component-multiselect').then(m => m.ComponentMultiselect),
      }
		]
	}
];

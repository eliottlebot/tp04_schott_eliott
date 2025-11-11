import { Routes } from '@angular/router';

export const pollutionRoutes: Routes = [
  {
    path: 'pollution',
    loadChildren: () => import('../modules/pollution.module').then((m) => m.PollutionModule),
  },
  { path: '', redirectTo: 'pollution', pathMatch: 'full' },
];

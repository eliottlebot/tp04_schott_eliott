import { Routes } from '@angular/router';
import { pollutionRoutes } from '../routes/pollutions.routes';
import { userRoutes } from '../routes/user.routes';

export const routes: Routes = [...pollutionRoutes, ...userRoutes];

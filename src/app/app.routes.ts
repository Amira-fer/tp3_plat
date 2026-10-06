import { Routes } from '@angular/router';
import { Plats } from './plats/plats';
import { AddPlat } from './add-plat/add-plat';
import { UpdatePlat } from './update-plat/update-plat';

export const routes: Routes = [
  { path: 'plats', component: Plats },
  { path: 'add-plat', component: AddPlat },
  { path: 'updatePlat/:id', component: UpdatePlat }
];
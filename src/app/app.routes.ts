import { Routes } from '@angular/router';
import { Plats } from './plats/plats';
import { AddPlat } from './add-plat/add-plat';
import { UpdatePlat } from './update-plat/update-plat';
import { RechercheParTypecuisine } from './recherche-par-typecuisine/recherche-par-typecuisine';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { platGuard } from './plat.guard';

export const routes: Routes = [
  { path: 'plats', component: Plats },
  { path: 'add-plat', component: AddPlat, canActivate: [platGuard] },
  { path: 'updatePlat/:id', component: UpdatePlat },
  { path: 'recherche-par-typecuisine', component: RechercheParTypecuisine },
  { path: 'rechercheParNom', component: RechercheParNom },
  { path: 'recherche-par-nom', redirectTo: 'rechercheParNom', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'app-forbidden', component: Forbidden },
  { path: '', redirectTo: 'plats', pathMatch: 'full' }
];

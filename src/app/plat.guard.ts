import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth';
import { inject } from '@angular/core';

export const platGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAdmin()) {
    return true;
  } else {
    router.navigate(['app-forbidden']);
    return false;
  }
};

export { platGuard as produitGuard };


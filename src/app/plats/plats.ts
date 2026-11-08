import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Plat } from '../add-plat/model/plat.model';
import { PlatService } from '../services/plat';
import { AuthService } from '../services/auth';

@Component({
  imports: [DatePipe, RouterLink],
  selector: 'app-plats',
  templateUrl: './plats.html'
})
export class Plats {
  plats: Plat[] = [];

  constructor(
    private platService: PlatService,
    public authService: AuthService
  ) {
    this.plats = this.platService.listePlats();
  }

  supprimerPlat(p: Plat): void {
    const conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.platService.supprimerPlat(p);
    }
  }
}

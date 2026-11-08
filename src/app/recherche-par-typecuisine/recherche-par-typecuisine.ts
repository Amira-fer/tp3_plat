import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Plat } from '../add-plat/model/plat.model';
import { typecuisine } from '../add-plat/model/typecuisine.model';
import { PlatService } from '../services/plat';
import { AuthService } from '../services/auth';

@Component({
  imports: [CommonModule, FormsModule, RouterLink],
  selector: 'app-recherche-par-typecuisine',
  styleUrl: './recherche-par-typecuisine.css',
  templateUrl: './recherche-par-typecuisine.html',
})
export class RechercheParTypecuisine implements OnInit {
  plats!: Plat[];
  typesCuisine!: typecuisine[];
  idType!: number;

  constructor(
    private platService: PlatService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.typesCuisine = this.platService.listeTypecuisines();
    this.plats = this.platService.listePlats();
    this.idType = 0;
  }

  onChange(): void {
    if (this.idType == 0) {
      this.plats = this.platService.listePlats();
    } else {
      this.plats = this.platService
        .listePlats()
        .filter((p) => p.typecuisine.idtype == this.idType);
    }
  }

  supprimerPlat(plat: Plat): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.platService.supprimerPlat(plat);
      this.onChange();
    }
  }
}

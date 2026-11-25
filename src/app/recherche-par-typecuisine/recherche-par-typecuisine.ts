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
  plats: Plat[] = [];
  typesCuisine: typecuisine[] = [];
  idType: number = 0;

  constructor(
    private platService: PlatService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.platService.listeTypecuisines().subscribe(types => {
      this.typesCuisine = types;
    });
    this.chargerPlats();
  }

  chargerPlats(): void {
    this.platService.listePlats().subscribe(prods => {
      this.plats = prods;
    });
  }

  onChange(): void {
    if (this.idType == 0) {
      this.chargerPlats();
    } else {
      this.platService.rechercherParTypecuisine(this.idType).subscribe(prods => {
        this.plats = prods;
      });
    }
  }

  supprimerPlat(plat: Plat): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.platService.supprimerPlat(plat.idPlat!).subscribe(() => {
        this.onChange();
      });
    }
  }
}

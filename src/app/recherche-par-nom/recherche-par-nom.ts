import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Plat } from '../add-plat/model/plat.model';
import { PlatService } from '../services/plat';
import { SearchFilterPipe } from '../search-filter-pipe';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [CommonModule, FormsModule, SearchFilterPipe, RouterLink],
  templateUrl: './recherche-par-nom.html',
})
export class RechercheParNom implements OnInit {
  plats: Plat[] = [];
  allPlats: Plat[] = [];
  nomPlat!: string;
  searchTerm!: string;

  constructor(
    private platService: PlatService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerPlats();
  }

  chargerPlats(): void {
    this.platService.listePlats().subscribe(prods => {
      this.plats = prods;
      this.allPlats = prods;
    });
  }

  supprimerPlat(plat: Plat): void {
    const conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.platService.supprimerPlat(plat.idPlat!).subscribe(() => {
        this.chargerPlats();
      });
    }
  }

  // Étape 16 & Amélioration (Recherche avec bouton / formulaire)
  rechercherPlats(): void {
    if (this.nomPlat) {
      this.platService.rechercherParNom(this.nomPlat).subscribe(prods => {
        this.plats = prods;
      });
    } else {
      this.chargerPlats();
    }
  }

  // Étape 19 (Recherche avec event keyup)
  onKeyUp(filterText: string): void {
    this.plats = this.allPlats.filter((item) =>
      (item.nomPlat ?? '').toLowerCase().includes(filterText.toLowerCase())
    );
  }
}

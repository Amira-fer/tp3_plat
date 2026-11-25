
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Plat } from '../add-plat/model/plat.model';
import { PlatService } from '../services/plat';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-plats',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plats.html'
})
export class Plats implements OnInit {

  plats: Plat[] = [];

  constructor(
    private platService: PlatService,
    public authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.chargerPlats();
  }

  chargerPlats(): void {
    this.platService.listePlats().subscribe({
      next: (plats) => {
        this.plats = plats;

        console.log('Nombre de plats :', this.plats.length);

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log('Erreur de chargement :', err);
      }
    });
  }

  supprimerPlat(p: Plat): void {
    const conf = confirm('Etes-vous sûr ?');

    if (conf) {
      this.platService.supprimerPlat(p.idPlat!).subscribe({
        next: () => {
          console.log('Plat supprimé');
          this.chargerPlats();
        },
        error: (err) => {
          console.log('Erreur de suppression :', err);
        }
      });
    }
  }
}

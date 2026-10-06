import { Injectable } from '@angular/core';
import { Plat } from '../add-plat/model/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  plats: Plat[] = [

    {
      idPlat: 1,
      nomPlat: 'pizza',
      prixPlat: 25,
      dateAjout: new Date('10/03/2026')
    },

    {
      idPlat: 2,
      nomPlat: 'slata mchwiya',
      prixPlat: 15,
      dateAjout: new Date('10/01/2026')
    },

    {
      idPlat: 3,
      nomPlat: 'pasta',
      prixPlat: 35,
      dateAjout: new Date('09/26/2026')
    }

  ];

  constructor() {
  }

  listePlats(): Plat[] {
    return this.plats;
  }

  ajouterPlat(plat: Plat): void {
    this.plats.push(plat);
  }

  supprimerPlat(plat: Plat): void {

    const index = this.plats.indexOf(plat, 0);

    if (index > -1) {
      this.plats.splice(index, 1);
    }

  }

  consulterPlat(id: number): Plat {
    return this.plats.find(p => p.idPlat == id)!;
  }

}

export { Plat };

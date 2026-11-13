import { Injectable } from '@angular/core';
import { Plat } from '../add-plat/model/plat.model';
import { typecuisine } from '../add-plat/model/typecuisine.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  typecuisines: typecuisine[] = [
    { idtype: 1, nomtype: 'Tunisienne' },
    { idtype: 2, nomtype: 'Italienne' },
    { idtype: 3, nomtype: 'Japonais' },
    { idtype: 4, nomtype: 'Mexicain' },
    { idtype: 5, nomtype: 'Espagnol' },
  ];

  plats: Plat[] = [
    {
      idPlat: 1,
      nomPlat: 'pizza',
      prixPlat: 25,
      dateAjout: new Date('10/03/2026'),
      typecuisine: { idtype: 2, nomtype: 'Italienne' }
    },
    {
      idPlat: 2,
      nomPlat: 'slata mchwiya',
      prixPlat: 15,
      dateAjout: new Date('10/01/2026'),
      typecuisine: { idtype: 1, nomtype: 'Tunisienne' }
    },
    {
      idPlat: 3,
      nomPlat: 'Sushi',
      prixPlat: 35,
      dateAjout: new Date('09/26/2026'),
      typecuisine: { idtype: 3, nomtype: 'Japonais' }
    }
  ];

  constructor() {}

  listePlats(): Plat[] {
    return this.plats;
  }

  rechercherParNom(nom: string): Plat[] {
    return this.listePlats().filter(
      p => (p.nomPlat ?? '').toLowerCase().includes(nom.toLowerCase())
    );
  }

  listeTypecuisines(): typecuisine[] {
    return this.typecuisines;
  }

  consulterTypecuisine(id: number): typecuisine {
    return this.typecuisines.find(type => type.idtype === Number(id))!;
  }

  ajouterTypecuisine(type: typecuisine): typecuisine {
    const index = this.typecuisines.findIndex(t => t.idtype === type.idtype);
    if (index !== -1 && type.idtype && type.idtype !== 0) {
      this.typecuisines[index] = type;
      return this.typecuisines[index];
    } else {
      const maxId = this.typecuisines.length > 0
        ? Math.max(...this.typecuisines.map(t => t.idtype || 0))
        : 0;
      type.idtype = maxId + 1;
      this.typecuisines.push(type);
      return type;
    }
  }

  ajouterPlat(plat: Plat): void {
    this.plats.push(plat);
  }

  supprimerPlat(plat: Plat): void {
    const index = this.plats.indexOf(plat);
    if (index > -1) {
      this.plats.splice(index, 1);
    }
  }

  consulterPlat(id: number): Plat {
    return this.plats.find(p => p.idPlat === id)!;
  }

  updatePlat(plat: Plat): void {
    const index = this.plats.findIndex(
      p => p.idPlat === plat.idPlat
    );
    if (index !== -1) {
      this.plats[index] = plat;
    }
  }
}

export { Plat };

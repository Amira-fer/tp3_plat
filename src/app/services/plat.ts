import { Injectable } from '@angular/core';
import { Plat } from '../add-plat/model/plat.model';
import { typecuisine } from '../add-plat/model/typecuisine.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  typecuisines: typecuisine[] = [
    { idtype: 1, nomtype: 'Tunisienne', idCat: 1, nomCat: 'Tunisienne' },
    { idtype: 2, nomtype: 'Italienne', idCat: 2, nomCat: 'Italienne' },
    { idtype: 3, nomtype: 'Japonais', idCat: 3, nomCat: 'Japonais' },
    { idtype: 4, nomtype: 'Mexicain', idCat: 4, nomCat: 'Mexicain' },
    { idtype: 5, nomtype: 'Espagnol', idCat: 5, nomCat: 'Espagnol' },
  ];

  plats: Plat[] = [
    {
      idPlat: 1,
      nomPlat: 'pizza',
      prixPlat: 25,
      dateAjout: new Date('10/03/2026'),
      typecuisine: { idtype: 2, nomtype: 'Italienne', idCat: 2, nomCat: 'Italienne' }
    },
    {
      idPlat: 2,
      nomPlat: 'slata mchwiya',
      prixPlat: 15,
      dateAjout: new Date('10/01/2026'),
      typecuisine: { idtype: 1, nomtype: 'Tunisienne', idCat: 1, nomCat: 'Tunisienne' }
    },
    {
      idPlat: 3,
      nomPlat: 'Sushi',
      prixPlat: 35,
      dateAjout: new Date('09/26/2026'),
      typecuisine: { idtype: 3, nomtype: 'Japonais', idCat: 3, nomCat: 'Japonais' }
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

  listeCategories(): typecuisine[] {
    return this.typecuisines;
  }

  consulterTypecuisine(id: number): typecuisine {
    return this.typecuisines.find(type => (type.idtype === Number(id) || type.idCat === Number(id)))!;
  }

  ajouterCategorie(cat: typecuisine): typecuisine {
    const id = cat.idCat || cat.idtype;
    const index = this.typecuisines.findIndex(
      t => (t.idCat && t.idCat === id) || (t.idtype && t.idtype === id)
    );

    if (index !== -1 && id && id !== 0) {
      this.typecuisines[index].nomtype = cat.nomCat || cat.nomtype;
      this.typecuisines[index].nomCat = cat.nomCat || cat.nomtype;
      return this.typecuisines[index];
    } else {
      const maxId = this.typecuisines.length > 0
        ? Math.max(...this.typecuisines.map(t => t.idCat || t.idtype || 0))
        : 0;
      cat.idCat = maxId + 1;
      cat.idtype = cat.idCat;
      cat.nomtype = cat.nomCat || cat.nomtype;
      cat.nomCat = cat.nomtype;
      this.typecuisines.push(cat);
      return cat;
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

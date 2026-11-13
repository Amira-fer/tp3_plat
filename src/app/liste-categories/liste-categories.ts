import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';
import { PlatService } from '../services/plat';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie';

@Component({
  selector: 'app-liste-categories',
  imports: [CommonModule, UpdateCategorieComponent],
  templateUrl: './liste-categories.html',
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '', idtype: 0, nomtype: '' };
  ajout: boolean = true;

  constructor(private platService: PlatService) {}

  ngOnInit(): void {
    this.chargerCategories();
  }

  chargerCategories(): void {
    this.categories = this.platService.listeCategories() as Categorie[];
  }

  categorieUpdated(cat: Categorie): void {
    console.log('Cat updated event', cat);
    this.platService.ajouterCategorie(cat);
    this.chargerCategories();
    this.updatedCat = { idCat: 0, nomCat: '', idtype: 0, nomtype: '' };
    this.ajout = true;
  }

  updateCat(cat: Categorie): void {
    this.updatedCat = cat;
    this.ajout = false;
  }
}

export { ListeCategoriesComponent as ListeCategories };

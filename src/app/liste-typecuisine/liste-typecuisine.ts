import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { typecuisine } from '../add-plat/model/typecuisine.model';
import { PlatService } from '../services/plat';
import { UpdateTypecuisineComponent } from '../update-typecuisine/update-typecuisine';

@Component({
  selector: 'app-liste-typecuisine',
  imports: [CommonModule, UpdateTypecuisineComponent],
  templateUrl: './liste-typecuisine.html',
})
export class ListeTypecuisineComponent implements OnInit {
  typesCuisine!: typecuisine[];
  updatedType: typecuisine = { idtype: 0, nomtype: '' };
  ajout: boolean = true;

  constructor(private platService: PlatService) {}

  ngOnInit(): void {
    this.chargerTypesCuisine();
  }

  chargerTypesCuisine(): void {
    this.typesCuisine = this.platService.listeTypecuisines();
  }

  typecuisineUpdated(type: typecuisine): void {
    console.log('Type cuisine updated event', type);
    this.platService.ajouterTypecuisine(type);
    this.chargerTypesCuisine();
    this.updatedType = { idtype: 0, nomtype: '' };
    this.ajout = true;
  }

  updateType(type: typecuisine): void {
    this.updatedType = type;
    this.ajout = false;
  }
}

export { ListeTypecuisineComponent as ListeTypecuisine };

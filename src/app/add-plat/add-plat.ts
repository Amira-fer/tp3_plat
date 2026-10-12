
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plat } from './model/plat.model';
import { PlatService } from '../services/plat';
import { Router } from '@angular/router';
import { typecuisine } from './model/typecuisine.model';

@Component({
  selector: 'app-add-plat',
  imports: [FormsModule],
  templateUrl: './add-plat.html'
})
export class AddPlat implements OnInit {

  newPlat = new Plat();

  typecuisines!: typecuisine[];
  newIdtype!: number;
  newtypecuisine!: typecuisine;

  message!: string;

  constructor(
    private platService: PlatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.typecuisines = this.platService.listeTypecuisines();
  }

  addPlat(): void {
    this.newtypecuisine =
      this.platService.consulterTypecuisine(this.newIdtype);

    this.newPlat.typecuisine = this.newtypecuisine;

    this.platService.ajouterPlat(this.newPlat);

    this.router.navigate(['/plats']);
  }
}

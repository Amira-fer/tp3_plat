import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from './model/plat.model';
import { PlatService } from '../services/plat';
import { typecuisine } from './model/typecuisine.model';

@Component({
  selector: 'app-add-plat',
  imports: [FormsModule],
  templateUrl: './add-plat.html'
})
export class AddPlat implements OnInit {
  newPlat = new Plat();
  typecuisines: typecuisine[] = [];
  newIdtype!: number;
  message!: string;

  constructor(
    private platService: PlatService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.platService.listeTypecuisines().subscribe(types => {
      console.log(types);
      this.typecuisines = types;
    });
  }

  addPlat(): void {
    this.newPlat.typecuisine = this.typecuisines.find(t => t.idtype == this.newIdtype)!;
    this.platService.ajouterPlat(this.newPlat).subscribe(prod => {
      console.log(prod);
      this.router.navigate(['plats']);
    });
  }
}

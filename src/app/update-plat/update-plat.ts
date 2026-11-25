import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plat } from '../add-plat/model/plat.model';
import { PlatService } from '../services/plat';
import { typecuisine } from '../add-plat/model/typecuisine.model';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-update-plat',
  templateUrl: './update-plat.html'
})
export class UpdatePlat implements OnInit {
  currentPlat = new Plat();
  typecuisines: typecuisine[] = [];
  updatedTypeId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private platService: PlatService
  ) {}

  ngOnInit(): void {
    this.platService.listeTypecuisines().subscribe(types => {
      console.log(types);
      this.typecuisines = types;
    });

    const id = Number(this.activatedRoute.snapshot.params['id']);
    this.platService.consulterPlat(id).subscribe(prod => {
      this.currentPlat = prod;
      if (this.currentPlat.typecuisine) {
        this.updatedTypeId = this.currentPlat.typecuisine.idtype;
      }
      console.log(this.currentPlat);
    });
  }

  updatePlat(): void {
    this.currentPlat.typecuisine = this.typecuisines.find(t => t.idtype == this.updatedTypeId)!;
    this.platService.updatePlat(this.currentPlat).subscribe(() => {
      this.router.navigate(['plats']);
    });
  }
}

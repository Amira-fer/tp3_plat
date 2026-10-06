import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plat } from './model/plat.model';
import { PlatService } from '../services/plat';

@Component({
  selector: 'app-add-plat',
  imports: [FormsModule],
  templateUrl: './add-plat.html'
})
export class AddPlat implements OnInit {

  newPlat = new Plat();

  message!: string;

  constructor(private platService: PlatService) {}

  ngOnInit(): void {
  }

  addPlat(): void {

    this.platService.ajouterPlat(this.newPlat);

    this.message = 'Plat ajouté avec succès !';

    this.newPlat = new Plat();
  }
}
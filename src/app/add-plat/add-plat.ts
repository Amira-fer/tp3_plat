import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Plat } from './model/plat.model';
import { PlatService } from '../services/plat';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-plat',
  imports: [FormsModule],
  templateUrl: './add-plat.html'
})
export class AddPlat implements OnInit {

  newPlat = new Plat();

  message!: string;
  constructor(
    private platService: PlatService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  addPlat(): void {
    this.platService.ajouterPlat(this.newPlat);
    this.router.navigate(['/plats']);

  }
}
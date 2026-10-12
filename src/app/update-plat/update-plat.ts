
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Plat } from '../add-plat/model/plat.model';
import { PlatService } from '../services/plat';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-update-plat',
  templateUrl: './update-plat.html'
})
export class UpdatePlat implements OnInit {

  currentPlat = new Plat();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private platService: PlatService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);

    this.currentPlat = this.platService.consulterPlat(id);

    console.log(this.currentPlat);
  }

  updatePlat(): void {
    this.platService['updatePlat'](this.currentPlat);
    this.router.navigate(['/plats']);
  }

}

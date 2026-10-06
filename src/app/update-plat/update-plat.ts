import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private platService: PlatService
  ) {
  }

  ngOnInit(): void {

    this.currentPlat =
      this.platService.consulterPlat(
        this.activatedRoute.snapshot.params['id']
      );

    console.log(this.currentPlat);
  }

}
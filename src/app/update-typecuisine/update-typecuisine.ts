import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { typecuisine } from '../add-plat/model/typecuisine.model';

@Component({
  selector: 'app-update-typecuisine',
  imports: [CommonModule, FormsModule],
  templateUrl: './update-typecuisine.html',
})
export class UpdateTypecuisineComponent implements OnInit {
  @Input()
  typecuisine!: typecuisine;

  @Input()
  ajout!: boolean;

  @Output()
  typecuisineUpdated = new EventEmitter<typecuisine>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateTypecuisine ', this.typecuisine);
  }

  saveTypecuisine(): void {
    this.typecuisineUpdated.emit(this.typecuisine);
  }
}

export { UpdateTypecuisineComponent as UpdateTypecuisine };

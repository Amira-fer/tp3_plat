import { typecuisine } from './typecuisine.model';

export class TypecuisineWrapper {
  _embedded!: {
    typecuisines?: typecuisine[];
    categories?: typecuisine[];
  };
}

export { TypecuisineWrapper as CategorieWrapper };

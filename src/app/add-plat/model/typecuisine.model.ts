export class typecuisine {
  idtype!: number;
  nomtype!: string;
  idCat?: number;
  nomCat?: string;
}

export type Categorie = typecuisine;
export { typecuisine as CategorieClass };
